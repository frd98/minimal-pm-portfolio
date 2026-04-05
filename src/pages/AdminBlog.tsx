import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const AdminBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const slug = slugify(title);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const post = {
      title,
      slug,
      date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      content,
    };
    console.log("New blog post:", post);
    toast.success("Post logged to console!");
    setTitle("");
    setContent("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16 sm:py-24">
        <Link
          to="/blog"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 inline-block"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-10">
          Add New Post
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Slug</Label>
            <p className="text-sm text-muted-foreground font-mono bg-muted rounded-md px-3 py-2">
              {slug || "auto-generated-from-title"}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post in plain text..."
              className="min-h-[300px]"
              required
            />
          </div>

          <Button type="submit" className="w-full sm:w-auto">
            Publish Post
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminBlog;
