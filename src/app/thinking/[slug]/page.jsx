import Image from "next/image";

const GRAPHQL_URL = "https://abndgroup.com/abndblog";

/* 1️⃣ Generate Static Slugs (required for output: export) */
export async function generateStaticParams() {
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        {
          posts(first: 1000) {
            nodes {
              slug
            }
          }
        }
      `,
    }),
  });

  const json = await res.json();

  return json.data.posts.nodes.map((post) => ({
    slug: post.slug,
  }));
}

/* 2️⃣ Fetch Single Post */
async function getSinglePost(slug) {
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query GetPost($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            title
            content
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
              }
            }
          }
        }
      `,
      variables: { slug },
    }),
  });

  const json = await res.json();
  return json?.data?.post;
}

/* 3️⃣ Page Component */
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getSinglePost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Post not found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className=" container p-6 md:p-12">
        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative w-full h-[350px] md:h-[450px] mb-10 rounded-xl overflow-hidden">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#002855] leading-tight mb-6">
          {post.title}
        </h1>

        {/* Date & Author */}
        <div className="text-gray-500 text-sm md:text-base mb-8 border-b pb-4">
          {new Date(post.date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          • {post.author?.node?.name}
        </div>

        {/* Blog Content */}
        <div
          className="
            text-gray-700
            leading-relaxed
            space-y-6
            [&>p]:mb-6
            [&>h2]:text-2xl
            [&>h2]:font-bold
            [&>h2]:mt-10
            [&>h2]:mb-4
            [&>h3]:text-xl
            [&>h3]:font-semibold
            [&>h3]:mt-8
            [&>h3]:mb-3
            [&>ul]:list-disc
            [&>ul]:pl-6
            [&>ul]:mb-6
            [&>ol]:list-decimal
            [&>ol]:pl-6
            [&>ol]:mb-6
            [&>blockquote]:border-l-4
            [&>blockquote]:border-[#002855]
            [&>blockquote]:pl-4
            [&>blockquote]:italic
            [&>blockquote]:text-gray-600
            [&>img]:rounded-lg
            [&>img]:my-6
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
