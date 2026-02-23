import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryIcon from "./CategoryIcon";

interface CategoryCardProps {
  name: string;
  slug: string;
  icon: string;
  color: string;
  count: number;
}

export default function CategoryCard({ name, slug, color, count }: CategoryCardProps) {
  return (
    <Link href={`/categories/${slug}`} className="group block">
      <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 hover:bg-slate-800/70 hover:border-slate-600/60 transition-all duration-300 p-6 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}
          >
            <CategoryIcon slug={slug} size={24} />
          </div>
          <span className="text-xs text-slate-500 bg-slate-700/40 px-2.5 py-1 rounded-full">
            {count} {count === 1 ? "post" : "posts"}
          </span>
        </div>
        <h3 className="font-bold text-slate-100 group-hover:text-white text-lg mb-1 transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-1 text-sm text-indigo-400 mt-3 group-hover:gap-2 transition-all">
          <span>Explore</span>
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
