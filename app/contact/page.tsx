import Link from "next/link";

export const metadata = {
  title: "お問い合わせ | ArchiFlow AI",
};

export default function ContactPage() {
  return (
    <section className="relative min-h-[70vh] bg-[#F5F3EE]">
      {/* ページヘッダー */}
      <div className="bg-[#0D1B3E] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#C8A84B] uppercase">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            お問い合わせ
          </h1>
        </div>
      </div>

      {/* 準備中メッセージ */}
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
        {/* アイコン */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#0D1B3E]">
          <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
            <rect x="6" y="10" width="36" height="28" rx="4" stroke="#C8A84B" strokeWidth="2" />
            <path d="M6 16l18 13L42 16" stroke="#C8A84B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-[#0D1B3E] sm:text-3xl">
          現在準備中です
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#6B6352]">
          お問い合わせフォームは現在準備中です。
          <br />
          公開までしばらくお待ちください。
        </p>

        {/* disabled 送信ボタン */}
        <div className="mt-10">
          <button
            type="button"
            disabled
            className="inline-flex cursor-not-allowed items-center justify-center rounded-md bg-[#CCCCCC] px-10 py-4 text-sm font-semibold text-white"
          >
            送信する（準備中）
          </button>
        </div>

        <div className="mt-8 border-t border-[#E0DACE] pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#C8A84B] hover:underline"
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
