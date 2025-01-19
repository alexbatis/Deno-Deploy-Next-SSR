export default async function HomePage() {
  try {
    console.log('Starting fetch request...'); // Debug log
    
    const response = await fetch('https://api.chucknorris.io/jokes/random', {
      next: { revalidate: 0 },
      cache: 'no-store', // Disable caching
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log('Response status:', response.status); // Debug log

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }

    const joke = await response.json();
    console.log('Joke fetched successfully:', joke); // Debug log

    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Chuck Norris Joke</h1>
            
            {/* Only render image if icon_url exists */}
            {joke.icon_url && (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                src={joke.icon_url} 
                alt="Chuck Norris"
                className="mx-auto h-16 w-16 mb-6"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'; // Hide broken images
                }}
              />
            )}
            
            <p className="text-xl text-gray-700 mb-8">
              {joke.value || 'No joke available'}
            </p>
            
            <form>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.reload();
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Get New Joke
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error in HomePage:', error); // Debug log
    
    // Return error UI
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-8">Error</h1>
            <p className="text-xl text-gray-700 mb-8">
              Sorry, something went wrong. Please try again.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }
}