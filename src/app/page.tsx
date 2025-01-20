

export default async function Page() {
  const joke = await fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json());

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <p className="text-xl text-gray-800 text-center font-medium leading-relaxed">
          {joke.value}
        </p>
      </div>
    </div>
  );
}