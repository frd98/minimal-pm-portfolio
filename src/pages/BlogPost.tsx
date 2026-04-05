import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-2xl px-4 sm:px-6 py-16 sm:py-24">
        <Link
          to="/blog"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 inline-block"
        >
          ← Back to Blog
        </Link>

        <header className="mb-12">
          <p className="text-xs text-muted-foreground mb-3">{post.date}</p>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            {post.title}
          </h1>
        </header>

        <div className="prose-custom space-y-6">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-base sm:text-lg leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
