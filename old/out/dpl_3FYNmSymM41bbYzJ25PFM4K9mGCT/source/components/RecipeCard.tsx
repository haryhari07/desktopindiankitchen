'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Recipe } from '../data/types';
import Rating from './Rating';
import BookmarkButton from './BookmarkButton';

interface RecipeCardProps {
  recipe: Recipe;
  priority?: boolean;
}

export default function RecipeCard({ recipe, priority = false }: RecipeCardProps) {
  const [rating, setRating] = useState<number>(recipe.rating ?? 0);
  const [reviewCount, setReviewCount] = useState<number>(recipe.reviewCount ?? 0);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const res = await fetch(`/api/recipe/${recipe.slug}/rate`);
        if (!res.ok) return;
        const data = await res.json();
        if (data.averageRating) {
          setRating(data.averageRating);
        }
        if (data.reviewCount !== undefined) {
          setReviewCount(data.reviewCount);
        }
      } catch (e) {
        console.error('Failed to fetch rating data');
      }
    };
    fetchRating();
  }, [recipe.slug]);
  return (
    <Link href={`/recipe/${recipe.slug}`} className="card group block overflow-hidden hover:shadow-xl transition-all duration-300 relative">
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        {/* Placeholder for image */}
        <Image 
            src={recipe.imageUrl} 
            alt={recipe.title} 
            fill
            priority={priority}
            className="object-cover group-hover:scale-105 transition-transform duration-300" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2 z-10">
          <BookmarkButton slug={recipe.slug} size="sm" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">{recipe.title}</h3>
            <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">{recipe.prepTime}</span>
        </div>
        <div className="mb-2">
            <Rating value={rating} reviewCount={reviewCount} readOnly size="sm" />
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
        <div className="flex flex-wrap gap-2">
            {recipe.dietary.map(tag => (
                <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{tag}</span>
            ))}
        </div>
      </div>
    </Link>
  );
}
