import Link from "next/link";
import ArchiFlowLogo from "./ArchiFlowLogo";

export default function Footer() {
  return (
    <footer className="border-t border-[#E0DACE] bg-[#F5F3EE]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* ロゴ */}
          <ArchiFlowLogo width={140} />

          {/* コピーライト＋リンク */}
          <div className="flex flex-col items-center gap-2 sm:items-end">
            <Link
              href="/privacy"
              className="text-xs text-[#9A9080] underline-offset-2 hover:underline"
            >
              プライバシーポリシー
            </Link>
            <p className="text-xs text-[#9A9080]">
              © 2026 ArchiFlow AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
