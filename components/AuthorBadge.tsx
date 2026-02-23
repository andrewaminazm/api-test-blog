import { Linkedin, ExternalLink } from "lucide-react";

interface AuthorBadgeProps {
  variant?: "compact" | "card" | "inline";
}

export default function AuthorBadge({ variant = "inline" }: AuthorBadgeProps) {
  const linkedinUrl = "https://www.linkedin.com/in/andrew-amin-48763a194/";

  if (variant === "compact") {
    return (
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 border border-[#0077B5]/30 hover:border-[#0077B5]/60 text-[#0ea5e9] hover:text-[#38bdf8] px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
      >
        <Linkedin size={13} className="fill-current" />
        <span>Andrew Amin</span>
        <ExternalLink size={10} className="opacity-60 group-hover:opacity-100 transition-opacity" />
      </a>
    );
  }

  if (variant === "card") {
    return (
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-2xl border border-slate-700/50 bg-slate-800/40 hover:bg-slate-800/80 hover:border-[#0077B5]/40 p-5 transition-all duration-300 hover:shadow-lg hover:shadow-[#0077B5]/10"
      >
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0077B5] to-[#005885] flex items-center justify-center shadow-lg shadow-[#0077B5]/20 group-hover:shadow-[#0077B5]/40 transition-all">
              <span className="text-white text-xl font-bold">A</span>
            </div>
            {/* LinkedIn verified dot */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0077B5] border-2 border-slate-800 flex items-center justify-center">
              <Linkedin size={10} className="text-white fill-white" />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="font-bold text-white text-base">Andrew Amin</span>
              <span className="text-xs bg-[#0077B5]/15 text-[#38bdf8] border border-[#0077B5]/30 px-2 py-0.5 rounded-full font-medium">
                Author
              </span>
            </div>
            <p className="text-slate-400 text-sm">QA Engineer · API Testing Specialist</p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-[#0ea5e9] group-hover:text-[#38bdf8] transition-colors">
              <Linkedin size={12} className="fill-current" />
              <span>Connect on LinkedIn</span>
              <ExternalLink size={10} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </a>
    );
  }

  // inline variant
  return (
    <a
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2.5 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 border border-[#0077B5]/25 hover:border-[#0077B5]/50 px-4 py-2 rounded-xl transition-all duration-200"
    >
      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0077B5] to-[#005885] flex items-center justify-center flex-shrink-0">
        <span className="text-white text-xs font-bold">A</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-white text-sm font-semibold">Andrew Amin</span>
        <span className="text-[#0ea5e9] text-xs flex items-center gap-1 mt-0.5">
          <Linkedin size={10} className="fill-current" />
          LinkedIn Profile
        </span>
      </div>
      <ExternalLink size={12} className="text-slate-500 group-hover:text-[#38bdf8] transition-colors ml-1" />
    </a>
  );
}
