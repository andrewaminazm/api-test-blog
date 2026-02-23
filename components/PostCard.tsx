import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import CategoryIcon from "./CategoryIcon";
import type { Post } from "@/lib/posts";

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article
        className={`h-full rounded-2xl border border-slate-700/50 bg-slate-800/40 hover:bg-slate-800/70 hover:border-slate-600/60 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 ${
          featured ? "flex flex-col" : ""
        }`}
      >
        {/* Top accent bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${post.color}`} />

        <div className={`p-6 flex flex-col gap-4 ${featured ? "flex-1" : ""}`}>
          {/* Icon + Category */}
          <div className="flex items-center justify-between">
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center shadow-lg`}
            >
              <CategoryIcon slug={post.category} size={20} />
            </div>
            <span className="text-xs font-medium text-slate-400 bg-slate-700/50 px-2.5 py-1 rounded-full border border-slate-600/30 capitalize">
              {post.category.replace("-", " ")}
            </span>
          </div>

          {/* Title */}
          <h3 className={`font-bold text-slate-100 group-hover:text-white leading-snug transition-colors ${featured ? "text-xl" : "text-lg"}`}>
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 flex-1">
            {post.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-700/50">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Clock size={12} />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-indigo-400 font-medium group-hover:gap-2 transition-all">
              <span>Read more</span>
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
