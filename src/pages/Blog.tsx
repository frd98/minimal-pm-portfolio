import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowUpRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16 sm:py-32">
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 inline-block"
        >
          ← Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
          Notes & Insights
        </h1>
        <p className="text-muted-foreground mb-16">
          Thoughts on product, tech, and building things.
        </p>

        <div className="space-y-0">
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block group py-6"
            >
              <p className="text-xs text-muted-foreground mb-1.5">{post.date}</p>
              <h2 className="text-lg sm:text-xl font-semibold leading-snug group-hover:underline underline-offset-4 decoration-1">
                {post.title}
              </h2>
              {i < blogPosts.length - 1 && <div className="border-b mt-6" />}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
