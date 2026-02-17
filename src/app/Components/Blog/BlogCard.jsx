import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
  return (
    <div className="space-y-4">
      <Link href={`/thinking/${post.slug}`}>
        <div className="relative h-64 w-full overflow-hidden">
          {post.featuredImage && (
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          )}
        </div>
      </Link>

      <div>
        <h4 className="text-xl font-bold text-[#002855] mt-5">{post.title}</h4>

        {post.excerpt && (
          <div
            className="text-gray-600 mt-2"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        )}
      </div>
    </div>
  );
}
