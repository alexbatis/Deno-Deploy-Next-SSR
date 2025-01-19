

export default async function HomePage() {
  // This runs on the server
  const joke = await fetch('https://api.chucknorris.io/jokes/random', {
    next: { revalidate: 0 } 
  }).then(res => res.json());

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Chuck Norris Joke</h1>
          
          <img 
            src={joke.icon_url} 
            alt="Chuck Norris"
            className="mx-auto h-16 w-16 mb-6"
          />
          
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
}