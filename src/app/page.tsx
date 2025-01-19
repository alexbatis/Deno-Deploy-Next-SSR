export default async function HomePage() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random', {
      next: { revalidate: 0 },
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      console.error('API Response not ok:', {
        status: response.status,
        statusText: response.statusText
      });
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const joke = await response.json();

    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Chuck Norris Joke</h1>
            
            {joke.icon_url && (
              <img 
                src={joke.icon_url} 
                alt="Chuck Norris"
                className="mx-auto h-16 w-16 mb-6"
              />
            )}
            
            <p className="text-xl text-gray-700 mb-8">
              {joke.value}
            </p>
            
            <form action="/" method="GET">
              <button 
                type="submit"
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
    console.error('Error fetching joke:', error);
    
    // Return a fallback UI instead of crashing
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Chuck Norris Joke</h1>
            <p className="text-xl text-gray-700 mb-8">
              Unable to fetch joke at the moment. Please try again later.
            </p>
            <form action="/" method="GET">
              <button 
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Try Again
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}