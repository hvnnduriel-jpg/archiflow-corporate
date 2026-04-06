import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-[#0D1B3E] px-4 text-center">
      {/* 背景装飾 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,168,75,0.10) 0%, transparent 70%)",
        }}
      />

      {/* 回路ライン装飾 */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
        viewBox="0 0 800 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <polyline points="0,150 120,150 120,80 280,80 280,200 420,200" stroke="#C8A84B" strokeWidth="1.2" />
        <polyline points="800,400 660,400 660,300 500,300 500,420 360,420" stroke="#C8A84B" strokeWidth="1" opacity="0.7" />
        <circle cx="120" cy="150" r="4" fill="#C8A84B" />
        <circle cx="280" cy="80" r="4" fill="#C8A84B" />
        <circle cx="660" cy="300" r="3.5" fill="#C8A84B" opacity="0.7" />
      </svg>

      <div className="relative">
        {/* ページ番号 */}
        <p className="text-8xl font-bold text-[#C8A84B] opacity-20 sm:text-9xl">
          404
        </p>

        {/* バッジ */}
        <div className="-mt-4 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C8A84B]/40 bg-[#C8A84B]/10 px-4 py-1.5 text-xs font-medium tracking-widest text-[#C8A84B] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8A84B]" />
            Coming Soon
          </span>
        </div>

        <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
          ただいま準備中です
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/60">
          近日公開予定です。
          <br />
          しばらくお待ちください。
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-[#C8A84B] px-8 py-3.5 text-sm font-semibold text-[#0D1B3E] shadow-lg transition-all hover:bg-[#b8963e] active:scale-95"
          >
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
              <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            トップページに戻る
          </Link>
        </div>
      </div>
    </section>
  );
}
