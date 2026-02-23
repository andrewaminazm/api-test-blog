import { Metadata } from "next";
import { Grid3X3 } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";
import { categories, getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse API testing articles by category — REST Assured, Cypress, Python, Postman, manual testing, and test cases.",
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium mb-4">
            <Grid3X3 size={15} />
            <span>All Categories</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Browse by Topic</h1>
          <p className="text-slate-400 text-lg">
            Find articles organized by tool or testing type — from manual testing fundamentals to advanced automation.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.slug}
              name={cat.name}
              slug={cat.slug}
              icon={cat.icon}
              color={cat.color}
              count={getPostsByCategory(cat.slug).length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
