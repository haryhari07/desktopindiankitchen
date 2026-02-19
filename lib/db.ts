import crypto from 'crypto';
import { Pool, QueryResultRow } from 'pg';
import { recipes as initialRecipes } from '@/data/recipes';

const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error('POSTGRES_URL environment variable is required');
}

const pool = new Pool({ connectionString });

async function query<T extends QueryResultRow>(
  text: string,
  params: unknown[]
): Promise<{ rows: T[]; rowCount: number | null }> {
  const result = await pool.query<T>(text, params);
  return { rows: result.rows, rowCount: result.rowCount };
}

function buildQuery(strings: TemplateStringsArray, values: unknown[]) {
  let text = '';
  const params: unknown[] = [];
  strings.forEach((str, i) => {
    text += str;
    if (i < values.length) {
      params.push(values[i]);
      text += `$${i + 1}`;
    }
  });
  return { text, params };
}

function sql<T extends QueryResultRow>(
  strings: TemplateStringsArray,
  ...values: unknown[]
): Promise<{ rows: T[]; rowCount: number | null }> {
  const { text, params } = buildQuery(strings, values);
  return query<T>(text, params);
}

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  state: string;
  region: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  description: string;
  ingredients: { item: string; quantity: string }[];
  instructions: string[];
  imageUrl: string;
  rating?: number;
  reviewCount?: number;
  dietary: string[];
}

export interface User {
  id: string;
  email: string;
  name?: string;
  passwordHash: string;
  role: 'user' | 'admin';
  status: 'active' | 'blocked';
  createdAt: string;
}

export interface Session {
  id: string;
  userId: string;
  expiresAt: string;
}

export interface Rating {
  id: string;
  userId: string;
  recipeSlug: string;
  rating: number;
  timestamp: string;
}

export interface Bookmark {
  userId: string;
  recipeSlug: string;
  timestamp: string;
}

export interface Activity {
  id: string;
  userId: string;
  type: 'bookmark' | 'rating' | 'login' | 'signup' | 'comment';
  targetSlug?: string;
  details: string;
  timestamp: string;
}

export interface Comment {
  id: string;
  userId: string;
  recipeSlug: string;
  content: string;
  timestamp: string;
}

type UserRow = {
  id: string;
  email: string;
  name: string | null;
  password_hash: string;
  role: string;
  status: string;
  created_at: string;
};

type SessionRow = {
  id: string;
  user_id: string;
  expires_at: string;
};

type RatingRow = {
  id: string;
  user_id: string;
  recipe_slug: string;
  rating: number;
  timestamp: string;
};

type BookmarkRow = {
  user_id: string;
  recipe_slug: string;
  timestamp: string;
};

type CommentRow = {
  id: string;
  user_id: string;
  recipe_slug: string;
  content: string;
  timestamp: string;
};

type PasswordResetRow = {
  id: string;
  user_id: string;
  token: string;
  expires_at: string;
  used: boolean;
};

type RecipeRow = {
  id: string;
  slug: string;
  title: string;
  state: string;
  region: string;
  prep_time: string | null;
  cook_time: string | null;
  servings: number | null;
  description: string;
  ingredients: { item: string; quantity: string }[];
  instructions: string[];
  image_url: string;
  rating: number | null;
  review_count: number | null;
  dietary: string[];
};

let initialized = false;

async function ensureTables() {
  if (initialized) return;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id uuid PRIMARY KEY,
      email text UNIQUE NOT NULL,
      name text,
      password_hash text NOT NULL,
      role text NOT NULL,
      status text NOT NULL,
      created_at timestamptz NOT NULL
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS sessions (
      id uuid PRIMARY KEY,
      user_id uuid REFERENCES users(id) ON DELETE CASCADE,
      expires_at timestamptz NOT NULL
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS recipes (
      id uuid PRIMARY KEY,
      slug text UNIQUE NOT NULL,
      title text NOT NULL,
      state text NOT NULL,
      region text NOT NULL,
      prep_time text,
      cook_time text,
      servings integer,
      description text NOT NULL,
      ingredients jsonb NOT NULL,
      instructions jsonb NOT NULL,
      image_url text NOT NULL,
      rating numeric,
      review_count integer,
      dietary jsonb NOT NULL
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS ratings (
      id uuid PRIMARY KEY,
      user_id uuid REFERENCES users(id) ON DELETE CASCADE,
      recipe_slug text NOT NULL,
      rating integer NOT NULL,
      timestamp timestamptz NOT NULL
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS bookmarks (
      user_id uuid REFERENCES users(id) ON DELETE CASCADE,
      recipe_slug text NOT NULL,
      timestamp timestamptz NOT NULL,
      PRIMARY KEY (user_id, recipe_slug)
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS activities (
      id uuid PRIMARY KEY,
      user_id uuid REFERENCES users(id) ON DELETE CASCADE,
      type text NOT NULL,
      target_slug text,
      details text NOT NULL,
      timestamp timestamptz NOT NULL
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS comments (
      id uuid PRIMARY KEY,
      user_id uuid REFERENCES users(id) ON DELETE CASCADE,
      recipe_slug text NOT NULL,
      content text NOT NULL,
      timestamp timestamptz NOT NULL
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS password_resets (
      id uuid PRIMARY KEY,
      user_id uuid REFERENCES users(id) ON DELETE CASCADE,
      token text UNIQUE NOT NULL,
      expires_at timestamptz NOT NULL,
      used boolean NOT NULL DEFAULT false
    )
  `;
  const existing = await sql<{ slug: string }>`SELECT slug FROM recipes`;
  const existingSlugs = new Set(existing.rows.map(r => r.slug));
  for (const r of initialRecipes) {
    if (!existingSlugs.has(r.slug)) {
      await sql`
        INSERT INTO recipes (
          id,
          slug,
          title,
          state,
          region,
          prep_time,
          cook_time,
          servings,
          description,
          ingredients,
          instructions,
          image_url,
          rating,
          review_count,
          dietary
        )
        VALUES (
          ${crypto.randomUUID()},
          ${r.slug},
          ${r.title},
          ${r.state},
          ${r.region},
          ${r.prepTime},
          ${r.cookTime},
          ${r.servings},
          ${r.description},
          ${JSON.stringify(r.ingredients)},
          ${JSON.stringify(r.instructions)},
          ${r.imageUrl},
          ${r.rating ?? 0},
          ${r.reviewCount ?? 0},
          ${JSON.stringify(r.dietary)}
        )
        ON CONFLICT (slug) DO NOTHING
      `;
    }
  }
  initialized = true;
}

// Password helpers
function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, storedHash: string): boolean {
  if (!storedHash.includes(':')) {
    const legacyHash = crypto.createHash('sha256').update(password).digest('hex');
    return legacyHash === storedHash;
  }
  const [salt, hash] = storedHash.split(':');
  const verifyHash = crypto.scryptSync(password, salt, 64).toString('hex');
  return hash === verifyHash;
}

function mapUser(row: UserRow): User {
  return {
    id: row.id,
    email: row.email,
    name: row.name ?? undefined,
    passwordHash: row.password_hash,
    role: row.role as 'user' | 'admin',
    status: row.status as 'active' | 'blocked',
    createdAt: row.created_at,
  };
}

function mapSession(row: SessionRow): Session {
  return {
    id: row.id,
    userId: row.user_id,
    expiresAt: row.expires_at,
  };
}

function mapRating(row: RatingRow): Rating {
  return {
    id: row.id,
    userId: row.user_id,
    recipeSlug: row.recipe_slug,
    rating: row.rating,
    timestamp: row.timestamp,
  };
}

function mapBookmark(row: BookmarkRow): Bookmark {
  return {
    userId: row.user_id,
    recipeSlug: row.recipe_slug,
    timestamp: row.timestamp,
  };
}

function mapComment(row: CommentRow): Comment {
  return {
    id: row.id,
    userId: row.user_id,
    recipeSlug: row.recipe_slug,
    content: row.content,
    timestamp: row.timestamp,
  };
}

function mapRecipe(row: RecipeRow): Recipe {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    state: row.state,
    region: row.region,
    prepTime: row.prep_time ?? '',
    cookTime: row.cook_time ?? '',
    servings: row.servings ?? 0,
    description: row.description,
    ingredients: row.ingredients as { item: string; quantity: string }[],
    instructions: row.instructions as string[],
    imageUrl: row.image_url,
    rating: row.rating ?? 0,
    reviewCount: row.review_count ?? 0,
    dietary: row.dietary as string[],
  };
}

export const db = {
  logActivity: async (userId: string, type: 'bookmark' | 'rating' | 'login' | 'signup' | 'comment', details: string, targetSlug?: string) => {
    await ensureTables();
    const id = crypto.randomUUID();
    const timestamp = new Date().toISOString();
    await sql`
      INSERT INTO activities (id, user_id, type, target_slug, details, timestamp)
      VALUES (${id}, ${userId}, ${type}, ${targetSlug ?? null}, ${details}, ${timestamp})
    `;
  },

  findUserByEmail: async (email: string) => {
    await ensureTables();
    const result = await sql<UserRow>`
      SELECT * FROM users WHERE email = ${email} LIMIT 1
    `;
    const row = result.rows[0];
    if (!row) return null;
    return mapUser(row);
  },

  findUserById: async (id: string) => {
    await ensureTables();
    const result = await sql<UserRow>`
      SELECT * FROM users WHERE id = ${id} LIMIT 1
    `;
    const row = result.rows[0];
    if (!row) return null;
    return mapUser(row);
  },

  createUser: async (email: string, password: string, name?: string, role: 'user' | 'admin' = 'user') => {
    await ensureTables();
    const existing = await db.findUserByEmail(email);
    if (existing) {
      throw new Error('User already exists');
    }
    const id = crypto.randomUUID();
    const passwordHash = hashPassword(password);
    const status: User['status'] = 'active';
    const createdAt = new Date().toISOString();
    await sql`
      INSERT INTO users (id, email, name, password_hash, role, status, created_at)
      VALUES (${id}, ${email}, ${name ?? null}, ${passwordHash}, ${role}, ${status}, ${createdAt})
    `;
    await db.logActivity(id, 'signup', 'User registered');
    const user: User = {
      id,
      email,
      name,
      passwordHash,
      role,
      status,
      createdAt,
    };
    return user;
  },

  validatePassword: (user: User, password: string) => {
    return verifyPassword(password, user.passwordHash);
  },

  createSession: async (userId: string) => {
    await ensureTables();
    await sql`
      DELETE FROM sessions WHERE expires_at <= NOW()
    `;
    const id = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
    await sql`
      INSERT INTO sessions (id, user_id, expires_at)
      VALUES (${id}, ${userId}, ${expiresAt})
    `;
    await db.logActivity(userId, 'login', 'User logged in');
    const session: Session = {
      id,
      userId,
      expiresAt,
    };
    return session;
  },

  getSession: async (sessionId: string) => {
    await ensureTables();
    const result = await sql<SessionRow>`
      SELECT * FROM sessions WHERE id = ${sessionId} LIMIT 1
    `;
    const row = result.rows[0];
    if (!row) return null;
    if (new Date(row.expires_at) < new Date()) {
      await sql`
        DELETE FROM sessions WHERE id = ${sessionId}
      `;
      return null;
    }
    return mapSession(row);
  },

  deleteSession: async (sessionId: string) => {
    await ensureTables();
    const result = await sql<SessionRow>`
      SELECT * FROM sessions WHERE id = ${sessionId} LIMIT 1
    `;
    const row = result.rows[0];
    if (row) {
      await db.logActivity(row.user_id, 'login', 'User logged out');
    }
    await sql`
      DELETE FROM sessions WHERE id = ${sessionId}
    `;
  },
  
  getAllUsers: async () => {
    await ensureTables();
    const result = await sql<UserRow>`
      SELECT * FROM users ORDER BY created_at DESC
    `;
    return result.rows.map(row => {
      const u = mapUser(row);
      const { passwordHash, ...userWithoutPassword } = u;
      return {
        ...userWithoutPassword,
        status: userWithoutPassword.status || 'active',
      };
    });
  },

  updateUserStatus: async (userId: string, status: 'active' | 'blocked') => {
    await ensureTables();
    const result = await sql`
      UPDATE users SET status = ${status} WHERE id = ${userId}
    `;
    const rowCount = result.rowCount ?? 0;
    return rowCount > 0;
  },

  deleteUser: async (userId: string) => {
    await ensureTables();
    const result = await sql`
      DELETE FROM users WHERE id = ${userId}
    `;
    const rowCount = result.rowCount ?? 0;
    return rowCount > 0;
  },

  upsertRating: async (userId: string, recipeSlug: string, ratingValue: number) => {
    await ensureTables();
    const existing = await sql<RatingRow>`
      SELECT * FROM ratings WHERE user_id = ${userId} AND recipe_slug = ${recipeSlug} LIMIT 1
    `;
    const timestamp = new Date().toISOString();
    if (existing.rows[0]) {
      await sql`
        UPDATE ratings
        SET rating = ${ratingValue}, timestamp = ${timestamp}
        WHERE user_id = ${userId} AND recipe_slug = ${recipeSlug}
      `;
    } else {
      const id = crypto.randomUUID();
      await sql`
        INSERT INTO ratings (id, user_id, recipe_slug, rating, timestamp)
        VALUES (${id}, ${userId}, ${recipeSlug}, ${ratingValue}, ${timestamp})
      `;
    }
    await db.logActivity(
      userId,
      'rating',
      `Rated recipe ${recipeSlug} with ${ratingValue} stars`,
      recipeSlug
    );
  },

  getRating: async (userId: string, recipeSlug: string) => {
    await ensureTables();
    const result = await sql<RatingRow>`
      SELECT * FROM ratings WHERE user_id = ${userId} AND recipe_slug = ${recipeSlug} LIMIT 1
    `;
    const row = result.rows[0];
    if (!row) return null;
    return mapRating(row);
  },
  
  getRecipeAverageRating: async (recipeSlug: string) => {
    await ensureTables();
    const result = await sql<{ avg: number | null; count: number }>`
      SELECT AVG(rating)::numeric(10,2) AS avg, COUNT(*)::int AS count
      FROM ratings
      WHERE recipe_slug = ${recipeSlug}
    `;
    const row = result.rows[0];
    if (!row || !row.avg || row.count === 0) return null;
    return {
      average: parseFloat(Number(row.avg).toFixed(1)),
      count: row.count,
    };
  },

  toggleBookmark: async (userId: string, recipeSlug: string) => {
    await ensureTables();
    const existing = await sql<BookmarkRow>`
      SELECT * FROM bookmarks WHERE user_id = ${userId} AND recipe_slug = ${recipeSlug} LIMIT 1
    `;
    const timestamp = new Date().toISOString();
    let isBookmarked = false;
    if (existing.rows[0]) {
      await sql`
        DELETE FROM bookmarks WHERE user_id = ${userId} AND recipe_slug = ${recipeSlug}
      `;
      isBookmarked = false;
    } else {
      await sql`
        INSERT INTO bookmarks (user_id, recipe_slug, timestamp)
        VALUES (${userId}, ${recipeSlug}, ${timestamp})
      `;
      isBookmarked = true;
    }
    const details = isBookmarked
      ? `Bookmarked recipe ${recipeSlug}`
      : `Removed bookmark from recipe ${recipeSlug}`;
    await db.logActivity(userId, 'bookmark', details, recipeSlug);
    return isBookmarked;
  },

  isBookmarked: async (userId: string, recipeSlug: string) => {
    await ensureTables();
    const result = await sql<BookmarkRow>`
      SELECT * FROM bookmarks WHERE user_id = ${userId} AND recipe_slug = ${recipeSlug} LIMIT 1
    `;
    return !!result.rows[0];
  },

  getUserBookmarks: async (userId: string) => {
    await ensureTables();
    const result = await sql<BookmarkRow>`
      SELECT * FROM bookmarks WHERE user_id = ${userId}
      ORDER BY timestamp DESC
    `;
    return result.rows.map(row => mapBookmark(row).recipeSlug);
  },

  getAllComments: async () => {
    await ensureTables();
    const result = await sql<CommentRow & { user_name: string | null; user_email: string | null }>`
      SELECT c.*, u.name AS user_name, u.email AS user_email
      FROM comments c
      LEFT JOIN users u ON c.user_id = u.id
      ORDER BY c.timestamp DESC
    `;
    return result.rows.map(row => ({
      ...mapComment(row),
      user: {
        name: row.user_name ?? 'Anonymous',
        email: row.user_email ?? 'Unknown',
      },
    }));
  },

  deleteComment: async (commentId: string) => {
    await ensureTables();
    const result = await sql`
      DELETE FROM comments WHERE id = ${commentId}
    `;
    const rowCount = result.rowCount ?? 0;
    return rowCount > 0;
  },

  getComments: async (recipeSlug: string) => {
    await ensureTables();
    const result = await sql<CommentRow & { user_name: string | null }>`
      SELECT c.*, u.name AS user_name
      FROM comments c
      LEFT JOIN users u ON c.user_id = u.id
      WHERE c.recipe_slug = ${recipeSlug}
      ORDER BY c.timestamp DESC
    `;
    return result.rows.map(row => ({
      ...mapComment(row),
      user: {
        name: row.user_name ?? 'Anonymous',
      },
    }));
  },

  addComment: async (userId: string, recipeSlug: string, content: string) => {
    await ensureTables();
    const id = crypto.randomUUID();
    const timestamp = new Date().toISOString();
    await sql`
      INSERT INTO comments (id, user_id, recipe_slug, content, timestamp)
      VALUES (${id}, ${userId}, ${recipeSlug}, ${content}, ${timestamp})
    `;
    await db.logActivity(userId, 'comment', `Commented on recipe ${recipeSlug}`, recipeSlug);
    const user = await db.findUserById(userId);
    return {
      id,
      userId,
      recipeSlug,
      content,
      timestamp,
      user: user ? { name: user.name } : { name: 'Anonymous' },
    };
  },

  createPasswordResetToken: async (email: string) => {
    await ensureTables();
    const user = await db.findUserByEmail(email);
    if (!user) {
      return null;
    }
    const id = crypto.randomUUID();
    const token = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
    await sql`
      INSERT INTO password_resets (id, user_id, token, expires_at, used)
      VALUES (${id}, ${user.id}, ${token}, ${expiresAt}, false)
    `;
    return token;
  },

  resetPasswordWithToken: async (token: string, newPassword: string) => {
    await ensureTables();
    const now = new Date().toISOString();
    const result = await sql<PasswordResetRow>`
      SELECT * FROM password_resets
      WHERE token = ${token} AND used = false AND expires_at > ${now}
      LIMIT 1
    `;
    const row = result.rows[0];
    if (!row) {
      return false;
    }
    const passwordHash = hashPassword(newPassword);
    await sql`
      UPDATE users
      SET password_hash = ${passwordHash}
      WHERE id = ${row.user_id}
    `;
    await sql`
      UPDATE password_resets
      SET used = true
      WHERE id = ${row.id}
    `;
    return true;
  },

  getRecipes: async () => {
    await ensureTables();
    const result = await sql<RecipeRow>`
      SELECT * FROM recipes ORDER BY title ASC
    `;
    return result.rows.map(mapRecipe);
  },

  getLatestRecipes: async (limit: number = 4) => {
    await ensureTables();
    const result = await sql<RecipeRow>`
      SELECT * FROM recipes ORDER BY id DESC LIMIT ${limit}
    `;
    return result.rows.map(mapRecipe);
  },

  getRecipe: async (slug: string) => {
    await ensureTables();
    const result = await sql<RecipeRow>`
      SELECT * FROM recipes WHERE slug = ${slug} LIMIT 1
    `;
    const row = result.rows[0];
    if (!row) return null;
    return mapRecipe(row);
  },

  createRecipe: async (recipeData: Omit<Recipe, 'id' | 'rating' | 'reviewCount'>) => {
    await ensureTables();
    const existing = await db.getRecipe(recipeData.slug);
    if (existing) {
      throw new Error('Recipe with this slug already exists');
    }
    const id = crypto.randomUUID();
    const rating = 0;
    const reviewCount = 0;
    await sql`
      INSERT INTO recipes (
        id,
        slug,
        title,
        state,
        region,
        prep_time,
        cook_time,
        servings,
        description,
        ingredients,
        instructions,
        image_url,
        rating,
        review_count,
        dietary
      )
      VALUES (
        ${id},
        ${recipeData.slug},
        ${recipeData.title},
        ${recipeData.state},
        ${recipeData.region},
        ${recipeData.prepTime},
        ${recipeData.cookTime},
        ${recipeData.servings},
        ${recipeData.description},
        ${JSON.stringify(recipeData.ingredients)},
        ${JSON.stringify(recipeData.instructions)},
        ${recipeData.imageUrl},
        ${rating},
        ${reviewCount},
        ${JSON.stringify(recipeData.dietary)}
      )
    `;
    const recipe: Recipe = {
      ...recipeData,
      id,
      rating,
      reviewCount,
    };
    return recipe;
  },

  updateRecipe: async (slug: string, updates: Partial<Recipe>) => {
    await ensureTables();
    const existing = await db.getRecipe(slug);
    if (!existing) return null;
    const { id, rating, reviewCount, ...restExisting } = existing;
    const merged: Recipe = {
      ...existing,
      ...updates,
      id: existing.id,
    };
    await sql`
      UPDATE recipes
      SET
        title = ${merged.title},
        state = ${merged.state},
        region = ${merged.region},
        prep_time = ${merged.prepTime},
        cook_time = ${merged.cookTime},
        servings = ${merged.servings},
        description = ${merged.description},
        ingredients = ${JSON.stringify(merged.ingredients)},
        instructions = ${JSON.stringify(merged.instructions)},
        image_url = ${merged.imageUrl},
        rating = ${merged.rating ?? 0},
        review_count = ${merged.reviewCount ?? 0},
        dietary = ${JSON.stringify(merged.dietary)}
      WHERE slug = ${slug}
    `;
    return merged;
  },

  deleteRecipe: async (slug: string) => {
    await ensureTables();
    const result = await sql`
      DELETE FROM recipes WHERE slug = ${slug}
    `;
    const rowCount = result.rowCount ?? 0;
    return rowCount > 0;
  }
};

(async () => {
  try {
    await ensureTables();
    const adminEmail = 'admin@indiankitchen.com';
    const existing = await db.findUserByEmail(adminEmail);
    if (!existing) {
      await db.createUser(adminEmail, 'admin123', 'Admin User', 'admin');
    }
  } catch (e) {
  }
})();
