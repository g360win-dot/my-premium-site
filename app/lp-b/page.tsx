import type { Metadata } from "next";
import Link from "next/link";
import { LineCta } from "@/components/line-cta";

export const metadata: Metadata = {
  title: "数字で見る空間香り | 滞在・売上・リピート",
  description:
    "滞在時間・売上・リピート率など、施設課題に直結する指標。業界最安値クラス月額、無料デモ、初期費用サービス。",
};

const KPIS = [
  {
    label: "座席回転前の",
    value: "滞在",
    sub: "延長傾向",
    note: "空間体験の満足と相関。香りの演出で歓談とリラックスの時間を伸ばしやすい傾向があります。",
  },
  {
    label: "来店価値の",
    value: "売上",
    sub: "底上げ",
    note: "快適と記憶に残る体験は、飲食・物販の単価と再来に効きます。香りはその「理由」を補助します。",
  },
  {
    label: "指名と再来の",
    value: "リピート",
    sub: "強化",
    note: "五感のうち、嗅覚は長期記憶と結びつきやすい。ブランド体験の一貫性に寄与します。",
  },
];

const BULLETS = [
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

export default function LpNumbers() {
  return (
    <div className="min-h-screen text-[#F5EDD8]" style={{ background: "#02040a" }}>
      <header
        className="sticky top-0 z-50 border-b border-[#C9A84C]/20 bg-[#02040a]/95 backdrop-blur-sm"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <span className="text-sm font-semibold tracking-[0.2em] text-[#B8A882]">数字で読む 空間香り</span>
          <LineCta size="sm" />
        </div>
      </header>

      <section className="px-4 py-16 text-center sm:py-20">
        <p className="mb-3 text-[0.65rem] tracking-[0.3em] text-[#8B6914] sm:text-xs" style={{ fontFamily: "Georgia, serif" }}>
          DATA DRIVEN
        </p>
        <h1
          className="mx-auto mb-4 max-w-3xl text-2xl font-semibold leading-snug tracking-wide sm:text-3xl md:text-4xl"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          <span className="gold-text">滞在</span>・<span className="gold-text">売上</span>・<span className="gold-text">リピート</span>
          <br className="hidden sm:block" />
          施設KPIの背後にある「<span className="gold-text">体感の論理</span>」
        </h1>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#B8A882] sm:text-base">
          人は匂いで場の価格感と安心感を即時に判断する。脳科学・マーケの両面から、空間香りの位置づけを整理し、
          導入判断の材料を出しやすくします。
        </p>
      </section>

      <div className="mx-auto max-w-5xl px-4 pb-8">
        <div className="mb-4 grid gap-3 text-center sm:grid-cols-3">
          {[
            { n: "約15〜25%", t: "滞在時間 改善レンジ（想定例）" },
            { n: "約8〜15%", t: "再来意向 向上例（要因の一つ）" },
            { n: "約10〜20%", t: "満足度スコア 上振れ例（体験設計併用時）" },
          ].map((row) => (
            <div
              key={row.t}
              className="rounded-sm border border-[#C9A84C]/20 bg-[#060810] px-4 py-5"
            >
              <p className="text-2xl font-semibold sm:text-3xl" style={{ fontFamily: "Arial, sans-serif" }}>
                <span className="gold-shimmer">{row.n}</span>
              </p>
              <p className="mt-2 text-xs text-[#B8A882] sm:text-sm">{row.t}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[0.65rem] leading-relaxed text-[#6a5c40] sm:text-xs">
          ※数値は一般的な導入事例のレンジを想定した参考値です。施設形態・立地・他施策により結果は大きく異なります。
        </p>
      </div>

      <section className="border-y border-[#C9A84C]/12 bg-[#05060c]/90 px-4 py-14">
        <h2
          className="mb-8 text-center text-lg font-medium sm:text-xl"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          指標と<span className="gold-text">因果</span>の考え方
        </h2>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {KPIS.map((k) => (
            <div key={k.value} className="premium-card rounded-sm p-5">
              <p className="text-xs text-[#8B6914]">{k.label}</p>
              <p className="mt-1 text-2xl font-semibold" style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}>
                <span className="gold-text">{k.value}</span>
                <span className="text-lg text-[#B8A882]"> {k.sub}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#B8A882]">{k.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16">
        <h2
          className="mb-8 text-center text-base font-medium sm:text-lg"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          仕様・条件（一覧）
        </h2>
        <ul className="mx-auto grid max-w-3xl list-none gap-2 text-sm sm:grid-cols-2 sm:text-base">
          {BULLETS.map((t) => (
            <li
              key={t}
              className="flex items-start gap-2 border-b border-[#C9A84C]/10 py-2 text-[#B8A882]"
            >
              <span className="mt-0.5 text-[#C9A84C]">▸</span>
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section className="px-4 pb-24 text-center">
        <p className="mb-6 text-sm text-[#B8A882] sm:text-base">
          図表・導入フロー・費用目安の詳細は、LINE上で即時に共有できます。
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
