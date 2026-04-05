import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "会社概要 | ArchiFlow AI",
  description:
    "ArchiFlow AIの会社概要・ミッション・創業の想いをご紹介します。",
};

/* ── 価値観カード ── */
const VALUES = [
  {
    title: "Architecture（設計）",
    description:
      "場当たりではなく、現場の課題から逆算して設計する。持続可能なAI活用の土台を作ります。",
  },
  {
    title: "Flow（流れ）",
    description:
      "情報が止まらず流れる組織をつくる。人・データ・AIがなめらかにつながる状態を目指します。",
  },
  {
    title: "Intelligence（知性）",
    description:
      "AIは目的ではなく手段。現場の知性を増幅させるためにテクノロジーを使います。",
  },
] as const;

/* ── 会社情報テーブル ── */
const COMPANY_INFO = [
  { label: "社名", value: "ArchiFlow AI" },
  { label: "設立", value: "2024年" },
  { label: "代表", value: "敬脩（Keisuke）" },
  { label: "事業内容", value: "AI導入支援・業務自動化・コンテンツ生成システム開発" },
  { label: "対象領域", value: "教育機関・中小企業・スタートアップ" },
  { label: "主要ツール", value: "Make, Notion, Claude, J-Quants API, kabustation API" },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* ━━━ ページヘッダー ━━━ */}
      <section className="bg-[#0D1B3E] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#C8A84B] uppercase">
            About
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            会社概要
          </h1>
          <p className="mt-4 text-base text-white/60">
            ArchiFlow AIが目指すもの、その想いと歩みをご紹介します。
          </p>
        </div>
      </section>

      {/* ━━━ ミッション ━━━ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* テキスト */}
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#C8A84B] uppercase">
                Mission
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0D1B3E] sm:text-4xl">
                「情報の壁」をなくし、
                <br />
                現場に余白をつくる
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#6B6352]">
                学校や中小企業には、まだ活かされていない情報が山ほど眠っています。
                共有サーバーの奥にある過去の資料、毎年同じように作られる文書、
                属人化したノウハウ——。
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#6B6352]">
                ArchiFlow AIは、NAS・クラウド・AIを組み合わせることで、
                その情報を「流れる状態」に変えます。
                現場の人が本来やるべきこと——子どもと向き合う時間、
                アイデアを考える時間——に集中できる環境を作ることが、
                私たちのミッションです。
              </p>
            </div>

            {/* ビジュアル */}
            <div className="flex items-center justify-center">
              <div className="relative h-72 w-72">
                {/* 同心円装飾 */}
                <div className="absolute inset-0 rounded-full border border-[#C8A84B]/20" />
                <div className="absolute inset-8 rounded-full border border-[#C8A84B]/30" />
                <div className="absolute inset-16 rounded-full border border-[#C8A84B]/50" />
                {/* 中央 */}
                <div className="absolute inset-24 flex items-center justify-center rounded-full bg-[#0D1B3E]">
                  <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" aria-hidden="true">
                    <rect x="10" y="10" width="28" height="28" rx="4" stroke="#C8A84B" strokeWidth="2" />
                    <rect x="17" y="17" width="14" height="14" rx="2" fill="#C8A84B" />
                    <text x="24" y="27" fontFamily="Georgia, serif" fontSize="10" fontWeight="700" fill="#0D1B3E" textAnchor="middle">A</text>
                  </svg>
                </div>
                {/* 外周ドット */}
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div
                    key={deg}
                    className="absolute h-3 w-3 rounded-full bg-[#C8A84B]"
                    style={{
                      top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 128}px - 6px)`,
                      left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 128}px - 6px)`,
                      opacity: 0.4 + (deg / 300) * 0.6,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ 3つの価値観 ━━━ */}
      <section className="bg-[#F5F3EE] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#C8A84B] uppercase">
              Values
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0D1B3E] sm:text-4xl">
              社名に込めた3つの想い
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {VALUES.map(({ title, description }, i) => (
              <div
                key={title}
                className="rounded-2xl border border-[#E0DACE] bg-white p-8"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0D1B3E]">
                  <span className="text-lg font-bold text-[#C8A84B]">
                    {String.fromCharCode(65 + i)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0D1B3E]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6B6352]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ 会社情報 ━━━ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#C8A84B] uppercase">
              Company Info
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0D1B3E]">
              会社情報
            </h2>
          </div>

          <dl className="mt-12 divide-y divide-[#E0DACE] rounded-2xl border border-[#E0DACE]">
            {COMPANY_INFO.map(({ label, value }) => (
              <div
                key={label}
                className="grid grid-cols-3 gap-4 px-8 py-5 sm:grid-cols-4"
              >
                <dt className="col-span-1 text-sm font-semibold text-[#0D1B3E]">
                  {label}
                </dt>
                <dd className="col-span-2 text-sm text-[#6B6352] sm:col-span-3">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="bg-[#0D1B3E] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            まずは無料でご相談ください
          </h2>
          <p className="mt-4 text-base text-white/60">
            導入規模・予算・課題に合わせて最適なプランをご提案します。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#C8A84B] px-10 py-4 text-sm font-semibold text-[#0D1B3E] transition-all hover:bg-[#b8963e] active:scale-95"
            >
              無料相談する
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-white/60 underline-offset-4 hover:text-white hover:underline"
            >
              サービス一覧を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
