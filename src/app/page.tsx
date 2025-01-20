export default async function Page() {
  const joke = await fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json());

  return <p>{joke.value}</p>;
}