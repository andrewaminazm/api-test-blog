import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronRight, FileText } from "lucide-react";
import { categories, getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import CategoryIcon from "@/components/CategoryIcon";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return { title: "Category Not Found" };
  return {
    title: cat.name,
    description: `All API testing articles about ${cat.name}`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);

  if (!cat) notFound();

  const catPosts = getPostsByCategory(slug);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/categories" className="hover:text-slate-300 transition-colors">Categories</Link>
          <ChevronRight size={12} />
          <span className="text-slate-400">{cat.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <Link
            href="/categories"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            All Categories
          </Link>

          <div className="flex items-center gap-4 mb-5">
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-xl`}
            >
              <CategoryIcon slug={cat.slug} size={28} />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">{cat.name}</h1>
              <p className="text-slate-400 mt-1">{catPosts.length} {catPosts.length === 1 ? "article" : "articles"}</p>
            </div>
          </div>
        </div>

        {/* Posts */}
        {catPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-slate-700/50 flex items-center justify-center mx-auto mb-4">
              <FileText size={32} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No articles yet</h3>
            <p className="text-slate-400">More content coming soon in this category.</p>
          </div>
        )}

        {/* Other categories */}
        <div className="mt-16 pt-10 border-t border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-4">Other Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories
              .filter((c) => c.slug !== slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/categories/${c.slug}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-slate-600/60 text-slate-400 hover:text-white text-sm transition-all"
                >
                  <CategoryIcon slug={c.slug} size={16} />
                  <span>{c.name}</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
