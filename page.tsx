import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | ArchiFlow AI",
  description: "ArchiFlow AIのプライバシーポリシーです。",
};

const SECTIONS = [
  {
    title: "1. 取得する情報",
    body: "当社は、お問い合わせフォームおよびサービス利用を通じて、お名前・メールアドレス・会社名・ご相談内容などの情報を取得することがあります。",
  },
  {
    title: "2. 利用目的",
    body: "取得した情報は、お問い合わせへの回答、サービスのご提案、およびサービス改善のためにのみ使用します。第三者への販売・提供は行いません。",
  },
  {
    title: "3. 第三者提供",
    body: "法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。",
  },
  {
    title: "4. 情報の管理",
    body: "取得した個人情報は、不正アクセス・紛失・破損・改ざんを防ぐために適切な安全対策を講じて管理します。",
  },
  {
    title: "5. Cookieの使用",
    body: "当サイトはアクセス解析のためにCookieを使用する場合があります。ブラウザの設定によりCookieを無効にすることが可能ですが、一部機能が制限される場合があります。",
  },
  {
    title: "6. 開示・訂正・削除",
    body: "ご本人から個人情報の開示・訂正・削除のご要望があった場合は、合理的な期間内に対応します。下記のお問い合わせ先までご連絡ください。",
  },
  {
    title: "7. ポリシーの変更",
    body: "本ポリシーは、法令の改正やサービス変更に伴い予告なく改定することがあります。最新版は本ページに掲載します。",
  },
  {
    title: "8. お問い合わせ",
    body: "個人情報に関するお問い合わせは、サイト内のお問い合わせフォームよりご連絡ください。",
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      {/* ━━━ ページヘッダー ━━━ */}
      <section className="bg-[#0D1B3E] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#C8A84B] uppercase">
            Privacy Policy
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            プライバシーポリシー
          </h1>
          <p className="mt-4 text-sm text-white/50">
            最終更新日：2026年4月6日
          </p>
        </div>
      </section>

      {/* ━━━ 本文 ━━━ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* リード文 */}
          <p className="text-base leading-relaxed text-[#6B6352]">
            ArchiFlow AI（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、
            以下のポリシーに従って適切に取り扱います。
          </p>

          {/* 各条項 */}
          <div className="mt-12 space-y-10">
            {SECTIONS.map(({ title, body }) => (
              <div key={title}>
                <h2 className="text-lg font-bold text-[#0D1B3E]">{title}</h2>
                <p className="mt-3 text-base leading-relaxed text-[#6B6352]">
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* 区切り */}
          <div className="mt-16 border-t border-[#E0DACE] pt-10">
            <p className="text-sm text-[#9A9080]">
              © 2026 ArchiFlow AI　All rights reserved.
            </p>
            <Link
              href="/"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#C8A84B] hover:underline underline-offset-4"
            >
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              トップへ戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
