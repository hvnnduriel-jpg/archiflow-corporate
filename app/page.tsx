import Link from "next/link";

/* ── 事業紹介カードデータ ── */
const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
        <rect x="6" y="8" width="36" height="32" rx="4" stroke="#C8A84B" strokeWidth="2" />
        <rect x="10" y="12" width="28" height="5" rx="1.5" fill="#C8A84B" opacity="0.25" />
        <path d="M10 22h20M10 28h14" stroke="#C8A84B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="34" r="7" fill="#0D1B3E" stroke="#C8A84B" strokeWidth="1.5" />
        <path d="M33 34l2 2 4-4" stroke="#C8A84B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "NASファイルAI検索",
    description:
      "学校・企業の共有サーバーに眠るファイルを、AIが自然言語で瞬時に検索。「去年の指導案」「〇〇の議事録」をキーワード不要で見つけます。",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
        <rect x="8" y="6" width="24" height="32" rx="3" stroke="#C8A84B" strokeWidth="2" />
        <path d="M12 14h16M12 20h16M12 26h10" stroke="#C8A84B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="34" r="8" fill="#0D1B3E" stroke="#C8A84B" strokeWidth="1.5" />
        <path d="M33 34h6M36 31v6" stroke="#C8A84B" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "AI文書・指導案生成",
    description:
      "教員・ビジネス向けの文書をAIが自動生成。指導案・会議資料・報告書を数分で仕上げ、本来の業務に集中できる時間を取り戻します。",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
        <rect x="10" y="16" width="28" height="18" rx="3" stroke="#C8A84B" strokeWidth="2" />
        <path d="M18 16v-4a6 6 0 0112 0v4" stroke="#C8A84B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="25" r="3" fill="#C8A84B" opacity="0.9" />
        <path d="M24 28v4" stroke="#C8A84B" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 38h36" stroke="#C8A84B" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    title: "AIシステム保守",
    description:
      "ローカルAIモデルの更新・健全性チェック・ロールバックを自動化。ITリソースが限られた学校・中小企業でも安心して運用できます。",
  },
] as const;

/* ── 信頼性バッジ ── */
const STATS = [
  { value: "300+", label: "導入実績" },
  { value: "99.9%", label: "稼働率" },
  { value: "24h", label: "サポート対応" },
] as const;

export default function Home() {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Hero セクション
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-[#0D1B3E]">
        {/* 装飾グラデーション */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 110% 10%, rgba(200,168,75,0.15) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at -10% 90%, rgba(200,168,75,0.08) 0%, transparent 60%)",
          }}
        />
        {/* 回路ライン装飾 */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-10"
          viewBox="0 0 400 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <polyline points="300,0 300,80 180,80 180,160 340,160 340,260" stroke="#C8A84B" strokeWidth="1.2" />
          <polyline points="380,100 260,100 260,200 380,200 380,320 220,320" stroke="#C8A84B" strokeWidth="0.8" opacity="0.7" />
          <circle cx="300" cy="80" r="4" fill="#C8A84B" />
          <circle cx="340" cy="260" r="4" fill="#C8A84B" />
          <circle cx="220" cy="320" r="3" fill="#C8A84B" opacity="0.7" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8">
          <div className="max-w-2xl">
            {/* バッジ */}
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C8A84B]/40 bg-[#C8A84B]/10 px-4 py-1.5 text-xs font-medium tracking-widest text-[#C8A84B] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8A84B]" />
              AI Infrastructure for Education &amp; Business
            </span>

            <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              学校・企業の情報を、
              <br />
              <span className="text-[#C8A84B]">AIがつなぐ</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              NAS × クラウド × AI で、ファイル検索・文書生成・システム保守を自動化します。
              <br className="hidden sm:block" />
              情報の壁をなくし、現場の「時間」と「判断」を取り戻す。
            </p>

            {/* CTAボタン */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#C8A84B] px-8 py-3.5 text-sm font-semibold text-[#0D1B3E] shadow-lg transition-all hover:bg-[#b8963e] hover:shadow-[#C8A84B]/30 hover:shadow-xl active:scale-95"
              >
                無料相談する
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10 active:scale-95"
              >
                サービスを見る
                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* 信頼性スタッツ */}
          <div className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-10">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold text-[#C8A84B]">{value}</p>
                <p className="mt-1 text-sm text-white/50">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          事業紹介セクション
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#F5F3EE] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* セクションヘッダー */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#C8A84B] uppercase">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0D1B3E] sm:text-4xl">
              3つのコアサービス
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6B6352]">
              現場の課題を起点に設計したAIソリューションで、
              情報管理・文書作成・システム運用を一段階上へ。
            </p>
          </div>

          {/* カードグリッド */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon, title, description }) => (
              <article
                key={title}
                className="group relative flex flex-col rounded-2xl border border-[#E0DACE] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0D1B3E]/8"
              >
                {/* アイコン背景 */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#0D1B3E]">
                  {icon}
                </div>

                <h3 className="text-xl font-bold text-[#0D1B3E]">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6B6352]">
                  {description}
                </p>

                {/* ホバー時に表示するリンク */}
                <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-[#C8A84B] opacity-0 transition-opacity group-hover:opacity-100">
                  詳細を見る
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* 左ボーダーアクセント */}
                <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-[#C8A84B] opacity-0 transition-opacity group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          お問い合わせCTAセクション
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-[#0D1B3E] py-24">
        {/* 背景装飾 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 120%, rgba(200,168,75,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#C8A84B] uppercase">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            まずは無料でご相談ください
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            導入の規模・予算・課題に合わせて、最適なプランをご提案します。
            <br className="hidden sm:block" />
            初回相談は無料です。お気軽にどうぞ。
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#C8A84B] px-10 py-4 text-sm font-semibold text-[#0D1B3E] shadow-lg transition-all hover:bg-[#b8963e] hover:shadow-[#C8A84B]/30 hover:shadow-xl active:scale-95"
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
