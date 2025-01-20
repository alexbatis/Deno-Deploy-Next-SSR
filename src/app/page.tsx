// app/page.tsx
'use server';

export async function getServerSideProps() {
  const res = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await res.json();

  return {
    props: {
      joke: data.value,
    },
  };
}

export default function Page({ joke }: { joke: string }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <p className="text-xl text-gray-800 text-center font-medium leading-relaxed">
          {joke}
        </p>
      </div>
    </div>
  );
}