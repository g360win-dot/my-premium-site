import type { Metadata } from "next";
import Link from "next/link";
import { LineCta } from "@/components/line-cta";

export const metadata: Metadata = {
  title: "香りが、あなたの店を変える | 空間香り導入",
  description:
    "香りは記憶に深く刻まれる。売上・滞在・採用・差別化を支える、業界最安値クラスの月額と無料デモ。",
};

export default function LpEmotional() {
  return (
    <div className="min-h-screen text-[#F5EDD8]" style={{ background: "#02040a" }}>
      <header
        className="sticky top-0 z-50 border-b border-[#C9A84C]/20 bg-[#02040a]/95 backdrop-blur-sm"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
          <span className="gold-shimmer text-sm font-semibold tracking-[0.25em]">空間香り</span>
          <LineCta size="sm" />
        </div>
      </header>

      <section className="relative overflow-hidden px-4 py-20 text-center sm:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(201,168,76,0.12) 0%, transparent 65%)",
          }}
        />
        <p
          className="relative z-10 mb-6 text-[0.7rem] tracking-[0.35em] text-[#B8A882] sm:text-xs"
          style={{ fontFamily: "Georgia, serif" }}
        >
          EMOTION &amp; EXPERIENCE
        </p>
        <h1
          className="relative z-10 mb-6 text-3xl font-semibold leading-snug tracking-wide sm:text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-noto-serif-jp), 'Yu Mincho', serif" }}
        >
          <span className="gold-text">香りが、</span>
          <br className="sm:hidden" />
          <span className="gold-text">あなたの店を変える</span>
        </h1>
        <p className="relative z-10 mx-auto max-w-xl text-sm leading-loose text-[#B8A882] sm:text-base">
          最初の一歩は、目に見えない小さな変化。扉を開けた瞬間、ふわりと流れる空気。お客様の表情が変わる。
          香りは脳の奥深くに残り、お店の記憶そのものになる。
        </p>
        <div className="relative z-10 mt-12">
          <LineCta />
        </div>
      </section>

      <div className="gold-divider mx-auto max-w-xs opacity-50" />

      <section className="mx-auto max-w-2xl px-4 py-16 sm:py-20">
        <h2
          className="mb-8 text-center text-xl font-medium tracking-wide sm:text-2xl"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          記憶に残る体験を、<span className="gold-text">毎日</span>積み重ねる
        </h2>
        <div className="space-y-6 text-sm leading-loose text-[#B8A882] sm:text-base">
          <p>
            夜景よりも、席よりも、まず心に響くのは「匂い」かもしれない。人は理屈より先に、身体で場の良さを感じ取る。だから香りは、
            売上や滞在時間を伸ばし、他店と差をつけたいときの、静かに効く接点になる。
          </p>
          <p>
            スタッフにとっても、心地よい空間は毎日の支えになる。採用の場では「どんな雰囲気か」が問われ、
            リピーターには「ここに来る理由」が必要になる。香りは、その両方に効く、ブランディングの素地だ。
          </p>
        </div>
      </section>

      <section className="border-y border-[#C9A84C]/15 bg-[#060810]/80 px-4 py-16 sm:py-20">
        <h2
          className="mb-10 text-center text-lg font-medium sm:text-xl"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          ここに、あなたの物語の<span className="gold-text">一行</span>を足す
        </h2>
        <ul className="mx-auto grid max-w-2xl gap-4 text-sm sm:grid-cols-2 sm:text-base">
          {[
            "業界最安値クラスの月額料金",
            "香りで売上アップ・滞在時間延長",
            "スタッフのモチベーションアップ",
            "求人の成功率向上",
            "他店との差別化・ブランディング",
            "新規獲得・リピート率の向上",
            "香りは脳に深く記憶される",
            "1ヶ月無料デモ設置可能",
            "初期費用サービス中",
          ].map((t) => (
            <li
              key={t}
              className="premium-card rounded-sm px-4 py-3 text-[#B8A882] shadow-[0_0_0_1px_rgba(201,168,76,0.08)]"
            >
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section className="px-4 py-20 text-center sm:py-24">
        <p
          className="mx-auto mb-8 max-w-lg text-sm leading-loose text-[#B8A882] sm:text-base"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          まずはお店の雰囲気に合わせた香りを、無料で試せます。月額は無理のない水準。初期費用の負担も今なら抑えやすい条件です。
        </p>
        <LineCta />
        <p className="mt-6">
          <Link href="/" className="text-xs text-[#B8A882] underline decoration-[#C9A84C]/40 underline-offset-4 hover:text-[#E8CC7A]">
            トップへ戻る
          </Link>
        </p>
      </section>
    </div>
  );
}
