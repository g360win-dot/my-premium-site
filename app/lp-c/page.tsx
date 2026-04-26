import type { Metadata } from "next";
import Link from "next/link";
import { LineCta } from "@/components/line-cta";

export const metadata: Metadata = {
  title: "1ヶ月無料デモ・初期費用サービス | 空間香り",
  description:
    "1ヶ月無料デモ設置、初期費用サービス中。業界最安値クラス月額。LINEで今すぐ条件確認。",
};

const OFFER_POINTS = [
  "1ヶ月無料デモで、実際の来店導線に合わせた香りを検証",
  "初期費用はサービス対応中。始めやすいタイミングを逃さない",
  "月額は業界最安値クラス。採算を崩さない設計が前提",
  "設置・調整のサポート。まずはLINEで所要時間の目安をお伝え",
];

const ALL_POINTS = [
  "業界最安値クラスの月額料金",
  "香りで売上アップ・滞在時間延長",
  "スタッフのモチベーションアップ",
  "求人成功率アップ",
  "他店との差別化・ブランディング",
  "新規獲得・リピート率アップ",
  "香りは脳に深く記憶される",
  "1ヶ月無料デモ設置可能",
  "初期費用サービス中",
];

export default function LpOffer() {
  return (
    <div className="min-h-screen text-[#F5EDD8]" style={{ background: "#02040a" }}>
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(201, 168, 76, 0.2) 0%, transparent 55%)",
        }}
      />

      <header
        className="relative z-10 border-b border-[#C9A84C]/25 bg-[#02040a]/90 backdrop-blur-sm"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:h-16">
          <span className="text-xs font-bold tracking-[0.3em] text-[#B8A882] sm:text-sm">LIMITED</span>
          <LineCta size="sm" />
        </div>
      </header>

      <section className="relative px-4 pb-6 pt-10 text-center sm:pt-16">
        <p className="mb-4 text-[0.7rem] tracking-[0.35em] text-[#C9A84C] sm:text-xs">今だけの条件</p>
        <h1
          className="mx-auto max-w-3xl text-[clamp(1.75rem,6vw,3rem)] font-bold leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          <span className="gold-shimmer">1ヶ月無料デモ</span>
          <br />
          <span className="text-[#F5EDD8]">＋ 初期費用</span>{" "}
          <span className="inline-block rounded-sm border border-[#C9A84C] bg-[#C9A84C]/10 px-2 py-0.5 text-[0.9em] text-[#E8CC7A] sm:px-3">
            サービス
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#B8A882] sm:text-base">
          まずはリスクを抑えて試す。来店導線に合う香りと濃度を、店舗で一度ご確認ください。
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <LineCta size="lg" />
        </div>
        <p className="mt-4 text-xs text-[#6a5c40]">お申し込み・条件の詳細はLINEで案内。無理な追撃は一切ありません。</p>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-10">
        <h2
          className="mb-6 text-center text-sm font-medium tracking-widest text-[#8B6914] sm:text-base"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          今すぐ得られること
        </h2>
        <ul className="space-y-4">
          {OFFER_POINTS.map((t) => (
            <li
              key={t}
              className="flex gap-3 rounded-sm border-l-2 border-[#C9A84C] bg-[#060810]/80 py-3 pl-4 pr-2 text-left text-sm leading-relaxed text-[#B8A882] sm:text-base"
            >
              <span className="shrink-0 text-[#C9A84C]">✓</span>
              {t}
            </li>
          ))}
        </ul>
      </section>

      <div className="gold-divider mx-auto max-w-md opacity-40" />

      <section className="px-4 py-12">
        <h2
          className="mb-6 text-center text-base sm:text-lg"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          含まれる価値（全<span className="gold-text">9</span>項目）
        </h2>
        <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-2 text-xs sm:text-sm">
          {ALL_POINTS.map((t) => (
            <span
              key={t}
              className="inline-block rounded-full border border-[#C9A84C]/25 bg-[#05060c] px-3 py-1.5 text-[#B8A882]"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 text-center">
        <p className="mb-8 text-2xl font-medium sm:text-3xl" style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}>
          次の一手は、<span className="gold-text">1タップ</span>です。
        </p>
        <LineCta size="lg" />
        <p className="mt-8">
          <Link
            href="/"
            className="text-xs text-[#B8A882] underline decoration-[#C9A84C]/40 underline-offset-4 hover:text-[#E8CC7A]"
          >
            トップへ戻る
          </Link>
        </p>
      </section>
    </div>
  );
}
