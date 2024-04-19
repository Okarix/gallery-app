import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/3c766ef4-e8e0-4165-b113-ce499ccb5c84-gekj13.jpg",
  "https://utfs.io/f/20aab871-e0a9-4a74-9493-fad44f5671db-ocjjtj.jpg",
  "https://utfs.io/f/e13b4a94-2751-43f1-87f6-f84474314d05-yx3g7n.jpg",
  "https://utfs.io/f/6a7eff22-94f7-4fc7-81e2-4746eb2835ae-k51wn4.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
