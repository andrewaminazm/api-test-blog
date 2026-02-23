import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, BookOpen, ChevronRight } from "lucide-react";
import { posts, getPostBySlug, getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import AuthorBadge from "@/components/AuthorBadge";
import CategoryIcon from "@/components/CategoryIcon";

interface Props {
  params: Promise<{ slug: string }>;
}

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description,
  };
}

// Simple markdown renderer (handles headings, code blocks, tables, lists, bold, inline code, blockquote)
function renderMarkdown(content: string): string {
  let html = content.trim();

  // Code blocks (must be before inline code)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<pre><code class="language-${lang || "text"}">${escaped.trimEnd()}</code></pre>`;
  });

  // Tables
  html = html.replace(/((?:\|.+\|\n)+)/g, (tableStr) => {
    const rows = tableStr.trim().split("\n");
    if (rows.length < 2) return tableStr;
    const headerCells = rows[0]
      .split("|")
      .filter((c) => c.trim())
      .map((c) => `<th>${c.trim()}</th>`)
      .join("");
    const bodyRows = rows
      .slice(2)
      .map((row) => {
        const cells = row
          .split("|")
          .filter((c) => c.trim())
          .map((c) => `<td>${c.trim()}</td>`)
          .join("");
        return `<tr>${cells}</tr>`;
      })
      .join("");
    return `<table><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>`;
  });

  // Headings
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // Horizontal rule
  html = html.replace(/^---$/gm, "<hr />");

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>");

  // Unordered lists
  html = html.replace(/((?:^[*\-] .+\n?)+)/gm, (listStr) => {
    const items = listStr
      .trim()
      .split("\n")
      .map((line) => `<li>${line.replace(/^[*\-] /, "")}</li>`)
      .join("");
    return `<ul>${items}</ul>`;
  });

  // Ordered lists
  html = html.replace(/((?:^\d+\. .+\n?)+)/gm, (listStr) => {
    const items = listStr
      .trim()
      .split("\n")
      .map((line) => `<li>${line.replace(/^\d+\. /, "")}</li>`)
      .join("");
    return `<ol>${items}</ol>`;
  });

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Inline code
  html = html.replace(/`([^`\n]+)`/g, "<code>$1</code>");

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Paragraphs — wrap non-tagged lines
  const lines = html.split("\n");
  const result: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      i++;
      continue;
    }
    if (
      line.startsWith("<h") ||
      line.startsWith("<pre") ||
      line.startsWith("<ul") ||
      line.startsWith("<ol") ||
      line.startsWith("<table") ||
      line.startsWith("<blockquote") ||
      line.startsWith("<hr") ||
      line.startsWith("</")
    ) {
      result.push(line);
    } else {
      result.push(`<p>${line}</p>`);
    }
    i++;
  }

  return result.join("\n");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getPostsByCategory(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const renderedContent = renderMarkdown(post.content);

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
          <ChevronRight size={12} />
          <span className="text-slate-400 truncate max-w-[200px]">{post.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          {/* Main content */}
          <article>
            {/* Post header */}
            <header className="mb-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors mb-6"
              >
                <ArrowLeft size={14} />
                Back to all posts
              </Link>

              {/* Category badge */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center shadow-lg`}
                >
                  <CategoryIcon slug={post.category} size={20} />
                </div>
                <span className="text-sm font-medium text-slate-400 capitalize">
                  {post.category.replace("-", " ")}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                {post.title}
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-6">{post.description}</p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen size={14} />
                  <span>{formatDate(post.date)}</span>
                </div>
                <AuthorBadge variant="compact" />
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            {/* Post content */}
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: renderedContent }}
              suppressHydrationWarning
            />

            {/* Author card */}
            <div className="mt-14 pt-10 border-t border-slate-800">
              <AuthorBadge variant="card" />
            </div>

            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12 pt-10 border-t border-slate-800">
                <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {relatedPosts.map((related) => (
                    <PostCard key={related.slug} post={related} />
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Author badge in sidebar */}
            <div className="rounded-2xl border border-[#0077B5]/25 bg-slate-800/40 p-5">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">Author</p>
              <AuthorBadge variant="inline" />
            </div>

            {/* Table of contents — simple static list based on post */}
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-5 sticky top-24">
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <BookOpen size={14} className="text-indigo-400" />
                In this article
              </h4>
              <div className="space-y-2">
                {Array.from(post.content.matchAll(/^## (.+)$/gm)).map(([, heading], idx) => (
                  <div key={idx} className="text-xs text-slate-400 hover:text-indigo-400 transition-colors cursor-pointer leading-snug">
                    {heading}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-700/50">
                <p className="text-xs text-slate-500 mb-3">Tags</p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-slate-700/50">
                <Link
                  href="/blog"
                  className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft size={11} />
                  All articles
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
