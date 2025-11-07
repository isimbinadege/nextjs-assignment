// ✅ This page uses SSR because it's an async server component

export const dynamic = "force-dynamic"; // ensures SSR in Next.js App Router

export default async function AboutPage() {
  // Fetch data from API (Server Side)
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const author = await response.json();

  return (
    <div className="max-w-2xl pt-4 mx-auto space-y-4">
      <h1 className="text-3xl font-bold text-rose-700 justify-center">About the Author</h1>
      

      <div className="bg-rose-100 shadow-xl mt-8 p-4 flex items-center rounded border-1 border-rose-700 gap-10">
        <p><span className="font-semibold">Name: <br /></span> {author.name}</p>
        <p><span className="font-semibold">Email: <br /></span> {author.email}</p>
        <p><span className="font-semibold">Company: <br /></span> {author.company.name}</p>
        <p><span className="font-semibold">City: <br /></span> {author.address.city}</p>
      </div>
    </div>
  );
}
