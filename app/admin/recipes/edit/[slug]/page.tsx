'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { useRouter, useParams } from 'next/navigation';
import { states } from '@/data/recipes';

// SVG Icons for better visual hierarchy
const Icons = {
  Check: () => <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>,
  Upload: () => <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  Plus: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>,
  Trash: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
  Time: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  User: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
};

export default function EditRecipePage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    state: '',
    region: '',
    prepTime: '',
    cookTime: '',
    servings: 4,
    description: '',
    imageUrl: '',
    dietary: [] as string[],
  });

  const [ingredients, setIngredients] = useState([{ item: '', quantity: '' }]);
  const [instructions, setInstructions] = useState(['']);
  
  const currentTempImageRef = useRef<string | null>(null);
  const isSubmittedRef = useRef(false);

  const dietaryOptions = [
    { label: '🌿 Vegetarian', value: 'Vegetarian' },
    { label: '🔴 Non-Vegetarian', value: 'Non-Vegetarian' },
    { label: '🌿 Gluten-Free', value: 'Gluten-Free' },
    { label: '🌿 Vegan', value: 'Vegan' },
    { label: '🥛 Dairy-Free', value: 'Dairy-Free' }
  ];

  const deleteTempImage = async (url: string) => {
    // Check for both local temp uploads AND Vercel Blob temp uploads
    const isLocalTemp = url.startsWith('/temp-uploads/');
    const isBlobTemp = url.startsWith('https://') && url.includes('public.blob.vercel-storage.com') && url.includes('temp-uploads');

    if (!url || (!isLocalTemp && !isBlobTemp)) return;

    try {
      await fetch(`/api/upload?url=${encodeURIComponent(url)}`, {
        method: 'DELETE',
        keepalive: true
      });
      console.log('Cleanup: Deleted unused temp image:', url);
    } catch (error) {
      console.error('Failed to delete temp image', error);
    }
  };

  useEffect(() => {
    return () => {
      if (currentTempImageRef.current && !isSubmittedRef.current) {
        deleteTempImage(currentTempImageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (currentTempImageRef.current && !isSubmittedRef.current) {
        deleteTempImage(currentTempImageRef.current);
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Fetch recipe data
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`/api/recipes/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setFormData({
            title: data.title,
            slug: data.slug,
            state: data.state,
            region: data.region,
            prepTime: data.prepTime,
            cookTime: data.cookTime,
            servings: data.servings,
            description: data.description,
            imageUrl: data.imageUrl,
            dietary: data.dietary || [],
          });
          setIngredients(data.ingredients || [{ item: '', quantity: '' }]);
          setInstructions(data.instructions || ['']);
        } else {
          alert('Failed to load recipe');
          router.push('/admin/recipes');
        }
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchRecipe();
  }, [slug, router]);

  useEffect(() => {
    if (!isLoading && (!user || user.role !== 'admin')) {
      router.push('/');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (formData.state) {
      const selectedState = states.find(s => s.name === formData.state);
      if (selectedState) {
        setFormData(prev => ({ ...prev, region: selectedState.region }));
      }
    }
  }, [formData.state]);

  const handleIngredientChange = (index: number, field: 'item' | 'quantity', value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const addIngredient = () => setIngredients([...ingredients, { item: '', quantity: '' }]);
  const removeIngredient = (index: number) => setIngredients(ingredients.filter((_, i) => i !== index));

  const handleInstructionChange = (index: number, value: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const addInstruction = () => setInstructions([...instructions, '']);
  const removeInstruction = (index: number) => setInstructions(instructions.filter((_, i) => i !== index));

  const toggleDietary = (tag: string) => {
    setFormData(prev => {
      const newDietary = prev.dietary.includes(tag)
        ? prev.dietary.filter(t => t !== tag)
        : [...prev.dietary, tag];
      return { ...prev, dietary: newDietary };
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const MAX_SIZE = 4.5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      alert('File is too large! Please upload an image smaller than 4.5MB for best performance.');
      e.target.value = '';
      return;
    }

    if (currentTempImageRef.current) {
      deleteTempImage(currentTempImageRef.current);
    }

    setUploadStatus('uploading');
    const formDataObj = new FormData();
    formDataObj.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formDataObj,
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Upload failed: ${res.status} ${errorText}`);
      }

      const json = await res.json();
      if (json.error) {
        throw new Error(json.error + (json.instruction ? ' ' + json.instruction : ''));
      }
      setFormData(prev => ({ ...prev, imageUrl: json.url }));
      currentTempImageRef.current = json.url;
      setUploadStatus('success');
      setTimeout(() => setUploadStatus('idle'), 3000);
    } catch (error) {
      console.error('Image upload failed', error);
      alert(error instanceof Error ? error.message : 'Image upload failed. Please try again.');
      setUploadStatus('error');
    }
  };

  const handleCancel = async () => {
    if (currentTempImageRef.current) {
      await deleteTempImage(currentTempImageRef.current);
      currentTempImageRef.current = null;
    }
    router.back();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage('');

    try {
      const res = await fetch(`/api/recipes/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          ingredients,
          instructions,
        }),
      });

      if (res.ok) {
        isSubmittedRef.current = true;
        currentTempImageRef.current = null;
        setSuccessMessage('Recipe updated successfully! Redirecting...');
        setTimeout(() => router.push('/admin/recipes'), 1500);
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to update recipe');
      }
    } catch (error) {
      console.error('Update failed', error);
      alert('Update failed');
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoading || loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-gray-500">Loading recipe...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {successMessage && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-2 animate-pulse">
          <Icons.Check />
          {successMessage}
        </div>
      )}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Edit Recipe</h1>
        <p className="text-gray-500 mt-1">Update recipe details and content</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Info Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
            Basic Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white"
                value={formData.state}
                onChange={e => setFormData({ ...formData, state: e.target.value })}
              >
                <option value="">Select State</option>
                {states.map(s => (
                  <option key={s.slug} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
              <input
                type="text"
                readOnly
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-500 cursor-not-allowed"
                value={formData.region}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
              <input
                type="text"
                readOnly
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-500 cursor-not-allowed font-mono text-sm"
                value={formData.slug}
              />
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
            Details & Timing
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prep Time</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. 15 mins"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={formData.prepTime}
                  onChange={e => setFormData({ ...formData, prepTime: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cook Time</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. 30 mins"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={formData.cookTime}
                  onChange={e => setFormData({ ...formData, cookTime: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Servings</label>
              <div className="relative">
                <input
                  type="number"
                  required
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  value={formData.servings}
                  onChange={e => setFormData({ ...formData, servings: parseInt(e.target.value) })}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Tags</label>
            <div className="flex flex-wrap gap-2">
              {dietaryOptions.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => toggleDietary(option.value)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    formData.dietary.includes(option.value)
                      ? 'bg-green-100 text-green-800 border-green-200 border shadow-sm'
                      : 'bg-gray-50 text-gray-600 border-gray-200 border hover:bg-gray-100'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              required
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
        </div>

        {/* Image Upload Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
            Recipe Image
          </h2>
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <label className="block w-full cursor-pointer group">
                <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                  uploadStatus === 'error' ? 'border-red-300 bg-red-50' :
                  uploadStatus === 'success' ? 'border-green-300 bg-green-50' :
                  'border-gray-300 hover:border-orange-400 hover:bg-orange-50'
                }`}>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    disabled={uploadStatus === 'uploading'}
                  />
                  <div className="flex flex-col items-center gap-2 text-gray-500 group-hover:text-orange-600">
                    <Icons.Upload />
                    <span className="font-medium">
                      {uploadStatus === 'uploading' ? 'Uploading...' : 'Click to upload new image'}
                    </span>
                    <span className="text-xs text-gray-400">Max size: 4.5MB</span>
                  </div>
                </div>
              </label>
            </div>
            {formData.imageUrl && (
              <div className="w-32 h-32 relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src={formData.imageUrl}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
            Ingredients
          </h2>
          <div className="space-y-3">
            {ingredients.map((ing, i) => (
              <div key={i} className="flex gap-3 group">
                <div className="flex-1 grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <input
                      type="text"
                      placeholder="Item (e.g. Paneer)"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={ing.item}
                      onChange={e => handleIngredientChange(i, 'item', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Qty (e.g. 200g)"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={ing.quantity}
                      onChange={e => handleIngredientChange(i, 'quantity', e.target.value)}
                      required
                    />
                  </div>
                </div>
                {ingredients.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeIngredient(i)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Icons.Trash />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addIngredient}
              className="mt-2 text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1 px-2 py-1 rounded-md hover:bg-orange-50 transition-colors w-fit"
            >
              <Icons.Plus /> Add Ingredient
            </button>
          </div>
        </div>

        {/* Instructions Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
            Instructions
          </h2>
          <div className="space-y-3">
            {instructions.map((inst, i) => (
              <div key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-sm font-bold text-gray-500">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <textarea
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={inst}
                    onChange={e => handleInstructionChange(i, e.target.value)}
                    required
                  />
                </div>
                {instructions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeInstruction(i)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors self-start"
                  >
                    <Icons.Trash />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addInstruction}
              className="mt-2 text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1 px-2 py-1 rounded-md hover:bg-orange-50 transition-colors w-fit"
            >
              <Icons.Plus /> Add Step
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={handleCancel}
            className="px-6 py-2.5 text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="px-8 py-2.5 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {submitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : (
              'Update Recipe'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
