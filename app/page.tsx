import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Shield, Zap, CheckCircle, Star } from "lucide-react";
import PostCard from "@/components/PostCard";
import CategoryCard from "@/components/CategoryCard";
import CategoryIcon from "@/components/CategoryIcon";
import { posts, categories, getPostsByCategory } from "@/lib/posts";

const stats = [
  { label: "Articles", value: "8+", icon: BookOpen, color: "text-indigo-400" },
  { label: "Tools Covered", value: "4", icon: Code2, color: "text-emerald-400" },
  { label: "Test Cases", value: "100+", icon: CheckCircle, color: "text-purple-400" },
  { label: "Topics", value: "6", icon: Star, color: "text-yellow-400" },
];

const tools = [
  {
    name: "REST Assured",
    slug: "rest-assured",
    desc: "Java-based API testing library with BDD-style syntax",
    color: "from-orange-500 to-red-500",
    href: "/categories/rest-assured",
  },
  {
    name: "Cypress",
    slug: "cypress",
    desc: "Modern JavaScript testing framework for API and E2E tests",
    color: "from-emerald-500 to-teal-500",
    href: "/categories/cypress",
  },
  {
    name: "Python + Pytest",
    slug: "python",
    desc: "Powerful, readable API tests with requests & pytest",
    color: "from-yellow-500 to-green-500",
    href: "/categories/python",
  },
  {
    name: "Postman",
    slug: "postman",
    desc: "The industry-standard tool for manual and automated API testing",
    color: "from-orange-400 to-orange-600",
    href: "/categories/postman",
  },
];

export default function HomePage() {
  const featuredPosts = posts.slice(0, 3);
  const recentPosts = posts.slice(3, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4 sm:px-6">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-cyan-600/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium px-4 py-2 rounded-full mb-8">
            <Zap size={12} />
            <span>Manual & Automation API Testing Resource</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.08] tracking-tight">
            Master{" "}
            <span className="gradient-text">API Testing</span>
            <br />
            from Zero to Hero
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Comprehensive guides on manual and automation API testing — covering{" "}
            <strong className="text-slate-300">REST Assured</strong>,{" "}
            <strong className="text-slate-300">Cypress</strong>,{" "}
            <strong className="text-slate-300">Python</strong>,{" "}
            <strong className="text-slate-300">Postman</strong>, and{" "}
            <strong className="text-slate-300">100+ real test cases</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              <BookOpen size={17} />
              Explore All Posts
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/blog/comprehensive-api-test-cases"
              className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white font-semibold px-7 py-3.5 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-200"
            >
              <CheckCircle size={17} className="text-emerald-400" />
              100+ Test Cases
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 text-center"
              >
                <stat.icon size={20} className={`${stat.color} mx-auto mb-2`} />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-4 sm:px-6 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Tools We Cover</h2>
            <p className="text-slate-400">Deep-dive guides for the most popular API testing tools</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map((tool) => (
              <Link key={tool.name} href={tool.href} className="group block">
                <div className="h-full rounded-2xl border border-slate-700/50 bg-slate-800/40 hover:bg-slate-800/70 hover:border-slate-600/60 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <CategoryIcon slug={tool.slug} size={24} />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-indigo-300 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{tool.desc}</p>
                  <div className="flex items-center gap-1 text-xs text-indigo-400 mt-4 group-hover:gap-2 transition-all">
                    <span>Learn more</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">Featured Posts</h2>
              <p className="text-slate-400">Start here — essential API testing guides</p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Browse by Category</h2>
            <p className="text-slate-400">Find exactly what you&apos;re looking for</p>
          </div>
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
      </section>

      {/* More Posts */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">More Articles</h2>
              <p className="text-slate-400">Deepen your API testing knowledge</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-white font-medium px-8 py-3.5 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-200"
            >
              View All {posts.length} Posts
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-indigo-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-purple-900/40 to-slate-900/80" />
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
            </div>
            <div className="relative text-center py-14 px-8">
              <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 text-xs font-medium px-4 py-2 rounded-full border border-indigo-500/30 mb-6">
                <Shield size={12} />
                Complete API Testing Coverage
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to test like a pro?
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                Explore our comprehensive test case guide — 100+ test cases covering CRUD, auth, security, and more.
              </p>
              <Link
                href="/blog/comprehensive-api-test-cases"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
              >
                <CheckCircle size={18} />
                View Test Cases
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
