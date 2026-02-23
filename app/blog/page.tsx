import { Metadata } from "next";
import { BookOpen, Filter } from "lucide-react";
import PostCard from "@/components/PostCard";
import CategoryIcon from "@/components/CategoryIcon";
import { posts, categories } from "@/lib/posts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Posts",
  description: "Browse all API testing articles — manual testing, REST Assured, Cypress, Python, Postman, and test cases.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium mb-4">
            <BookOpen size={15} />
            <span>All Articles</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            API Testing Knowledge Base
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Everything you need to know about API testing — from fundamentals to advanced automation with REST Assured, Cypress, Python, and Postman.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="flex items-center gap-1.5 text-xs text-slate-500 mr-2">
            <Filter size={12} />
            Filter:
          </span>
          <Link
            href="/blog"
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-500/15 text-indigo-400 border border-indigo-500/20"
          >
            All ({posts.length})
          </Link>
          {categories.map((cat) => {
            const count = posts.filter((p) => p.category === cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 hover:border-slate-600/50 transition-colors"
              >
                <span className="inline-flex items-center gap-1.5">
                  <CategoryIcon slug={cat.slug} size={14} className="text-slate-400 shrink-0" />
                  {cat.name} ({count})
                </span>
              </Link>
            );
          })}
        </div>

        {/* All posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Bottom info */}
        <div className="mt-16 text-center border-t border-slate-800 pt-10">
          <p className="text-slate-500 text-sm">
            Showing all {posts.length} articles · More content coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
