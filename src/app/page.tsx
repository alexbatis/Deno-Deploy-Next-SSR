'use client';  // This needs to be a client component to handle the refresh

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Create a separate server component for fetching
async function getJoke() {
  try {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    if (!res.ok) throw new Error('Failed to fetch joke');
    return res.json();
  } catch (error) {
    console.error('Error fetching joke:', error);
    return { value: 'Failed to load joke. Please try again.' };
  }
}

export const dynamic = 'force-dynamic';

export default async function Page() {
  const joke = await getJoke();
  
  return <JokeDisplay initialJoke={joke.value} />;
}

// Client component for handling interactivity
function JokeDisplay({ initialJoke }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    router.refresh(); // This will trigger a server-side refresh
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <p className="text-xl text-gray-800 text-center font-medium leading-relaxed mb-6">
          {initialJoke}
        </p>
        <div className="text-center">
          <button 
            onClick={handleRefresh}
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          >
            {isLoading ? 'Loading...' : 'Get New Joke'}
          </button>
        </div>
      </div>
    </div>
  );
}