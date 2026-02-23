import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle, Zap, Users, Target, Globe } from "lucide-react";
import AuthorBadge from "@/components/AuthorBadge";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the API Test Blog — a resource for QA engineers and developers learning API testing.",
};

const topics = [
  { icon: "🧪", title: "Manual API Testing", desc: "Postman, HTTP fundamentals, writing effective manual test cases" },
  { icon: "☕", title: "REST Assured", desc: "Java-based API automation with TestNG and Maven integration" },
  { icon: "🌲", title: "Cypress", desc: "cy.request(), intercepts, fixtures, and E2E combined testing" },
  { icon: "🐍", title: "Python + Pytest", desc: "requests library, fixtures, parametrize, mocking, and CI/CD" },
  { icon: "📮", title: "Postman Collections", desc: "Collections, environments, Newman CLI, and CI/CD integration" },
  { icon: "✅", title: "Test Case Coverage", desc: "100+ real-world test cases for CRUD, auth, security, and more" },
];

const values = [
  {
    icon: Target,
    title: "Practical Focus",
    desc: "Every article includes real code examples you can use immediately in your projects.",
    color: "text-indigo-400",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Coverage",
    desc: "From HTTP basics to advanced automation — we cover the full spectrum of API testing.",
    color: "text-purple-400",
  },
  {
    icon: Users,
    title: "For All Levels",
    desc: "Whether you're a beginner or experienced QA engineer, there's something for everyone.",
    color: "text-emerald-400",
  },
  {
    icon: Globe,
    title: "Up to Date",
    desc: "Content is regularly updated to reflect the latest versions of tools and best practices.",
    color: "text-cyan-400",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium px-4 py-2 rounded-full mb-6">
            <Zap size={12} />
            About This Blog
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Your API Testing<br />
            <span className="gradient-text">Learning Hub</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            API Test Blog is a comprehensive resource for QA engineers and developers who want to master API testing — from manual testing with Postman to full automation with REST Assured, Cypress, and Python.
          </p>
        </div>

        {/* Author section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">About the Author</h2>
          <AuthorBadge variant="card" />
        </div>

        {/* Mission */}
        <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            API testing is one of the most impactful skills a QA engineer can develop. It sits at the heart of modern software quality — faster than UI tests, more realistic than unit tests, and essential for microservices architectures. Our mission is to make API testing knowledge accessible, practical, and immediately applicable.
          </p>
        </div>

        {/* What we cover */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">What We Cover</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="flex items-start gap-4 rounded-xl border border-slate-700/50 bg-slate-800/40 p-5"
              >
                <div className="text-2xl mt-0.5">{topic.icon}</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{topic.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Our Approach</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-5">
                <value.icon size={20} className={`${value.color} mb-3`} />
                <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Built With</h2>
          <p className="text-slate-400 mb-4">This blog itself is built as a demonstration of modern web development:</p>
          <div className="flex flex-wrap gap-2">
            {["Next.js 14", "TypeScript", "Tailwind CSS", "App Router", "Static Generation"].map((tech) => (
              <span
                key={tech}
                className="text-sm text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Start Learning</h2>
          <p className="text-slate-400 mb-6">
            Ready to level up your API testing skills? Start with our foundational article or jump straight to the test cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/blog/introduction-to-api-testing"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            >
              <BookOpen size={16} />
              Start from Basics
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/blog/comprehensive-api-test-cases"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-200"
            >
              <CheckCircle size={16} className="text-emerald-400" />
              View All Test Cases
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
