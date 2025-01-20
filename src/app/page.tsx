import { revalidatePath } from 'next/cache';

export default async function Page() {
  const joke = await fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json());

  async function getNewJoke() {
    'use server';
    revalidatePath('/');
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <p className="text-xl text-gray-800 text-center font-medium leading-relaxed mb-6">
          {joke.value}
        </p>
        <form action={getNewJoke} className="text-center">
          <button 
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get New Joke
          </button>
        </form>
      </div>
    </div>
  );
}