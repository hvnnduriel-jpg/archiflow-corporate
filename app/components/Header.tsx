"use client";

import { useState } from "react";
import Link from "next/link";
import ArchiFlowLogo from "./ArchiFlowLogo";

const NAV_LINKS = [
  { label: "サービス", href: "/services" },
  { label: "実績", href: "/works" },
  { label: "会社概要", href: "/about" },
  { label: "お問い合わせ", href: "/contact" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E0DACE] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ロゴ */}
        <Link
          href="/"
          aria-label="ArchiFlow AI トップへ"
          className="flex-shrink-0 transition-opacity hover:opacity-80"
        >
          <ArchiFlowLogo width={380} />
        </Link>

        {/* ナビゲーション（デスクトップ） */}
        <nav aria-label="メインナビゲーション">
          <ul className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-medium text-[#0D1B3E] transition-colors hover:text-[#C8A84B]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTAボタン（デスクトップ） */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-md bg-[#0D1B3E] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#C8A84B]"
          >
            無料相談
          </Link>
        </div>

        {/* ハンバーガーボタン（モバイル） */}
        <button
          type="button"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-[#0D1B3E] hover:bg-[#F5F3EE] md:hidden"
        >
          {menuOpen ? (
            /* ✕ アイコン */
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* 三本線アイコン */
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* モバイルドロップダウンメニュー */}
      {menuOpen && (
        <div className="w-full bg-[#0D1B3E] md:hidden">
          <nav aria-label="モバイルナビゲーション">
            <ul className="flex flex-col divide-y divide-white/10">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-4 text-base font-medium text-white transition-colors hover:bg-white/10 hover:text-[#C8A84B]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              {/* 無料相談ボタン */}
              <li className="px-6 py-5">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-md bg-[#C8A84B] py-3 text-center text-sm font-semibold text-[#0D1B3E] transition-colors hover:bg-[#b8963e]"
                >
                  無料相談
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
