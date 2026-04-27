import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { LineCta } from "@/components/line-cta";

/* Unsplash（無料ライセンス）— 高解像度 w=1920 & q=90 ／ 順：海→薔薇→森→シャンパン→パリ */
const SLIDES: { id: string; src: string; main: ReactNode; sub: ReactNode; alt: string }[] = [
  {
    id: "sea",
    src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=90&auto=format&fit=crop",
    main: (
      <>
        扉を開けた瞬間、すべては始まる。
        <br />
        人の印象は、その一瞬で決まる。
      </>
    ),
    sub: (
      <>
        香りは、言葉よりも早く届き、
        <br />
        空間の価値を静かに変えていく。
      </>
    ),
    alt: "穏やかな海の波",
  },
  {
    id: "flowers",
    src: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=1920&q=90&auto=format&fit=crop",
    main: (
      <>
        空間は、非日常へと変わる。
        <br />
        人は、感覚に導かれる。
      </>
    ),
    sub: (
      <>
        気づけば、長く留まり、
        <br />
        やがて、また戻ってくる。
      </>
    ),
    alt: "プロ品質の赤薔薇の花束",
  },
  {
    id: "nature-forest",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=90&auto=format&fit=crop",
    main: (
      <>
        差は、空間が生み出す。
        <br />
        人は無意識に、その質を感じ取る。
      </>
    ),
    sub: (
      <>
        その違いが、やがて価値となり、
        <br />
        他にはない存在へと変わっていく。
      </>
    ),
    alt: "植物・森の自然光",
  },
  {
    id: "champagne",
    src: "https://images.unsplash.com/photo-1623428454697-08da4a100602?w=1920&q=90&auto=format&fit=crop",
    main: (
      <>
        誇れる空間が、人を引き寄せる。
        <br />
        人は、無意識にその違いを感じ取る。
      </>
    ),
    sub: (
      <>
        集まる人材の質が変わり、
        <br />
        やがて、店の未来を変えていく。
      </>
    ),
    alt: "シャンパンを注ぐ高級感のあるシーン",
  },
  {
    id: "paris-cafe",
    src: "https://images.unsplash.com/photo-1635782166219-168a2fe1bd19?w=1920&q=90&auto=format&fit=crop",
    main: (
      <span className="block leading-relaxed">
        語らなくても、伝わるものがある。
        <br />
        それは、言葉を超えている。
      </span>
    ),
    sub: (
      <span className="block leading-relaxed">
        香りが、その感情に火を灯し、
        <br />
        静かに解き放っていく。
        <br />
        そして、その瞬間が、未来を変えていく。
      </span>
    ),
    alt: "パリの高級レストラン・テラス席（夕景の街角）",
  },
];

function HeroSlide({
  item,
  priority,
}: {
  item: (typeof SLIDES)[0];
  priority?: boolean;
}) {
  return (
    <section
      className="relative isolate min-h-screen w-full min-w-0 max-w-full overflow-hidden"
      aria-label={item.alt}
    >
      <Image
        src={item.src}
        alt=""
        fill
        priority={priority}
        className="z-0 h-full w-full max-w-full object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background: "rgba(0,0,0,0.45)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 z-20 flex min-h-screen w-full min-w-0 max-w-full flex-col items-center justify-center px-4 text-center sm:px-6">
        <div className="mx-auto flex w-full min-w-0 max-w-4xl flex-col items-center gap-6 text-center">
          <h2
            style={{
              fontFamily: "var(--font-noto-serif-jp), serif",
              color: "#FFFFFF",
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.45,
              textShadow: "0 2px 20px rgba(0,0,0,0.8)",
            }}
          >
            {item.main}
          </h2>
          <p
            className="text-center"
            style={{
              fontFamily: "var(--font-noto-serif-jp), serif",
              color: "rgba(255,255,255,0.9)",
              fontSize: "clamp(0.85rem, 2.5vw, 1.1rem)",
              fontWeight: 400,
              lineHeight: 1.8,
              textShadow: "0 1px 10px rgba(0,0,0,0.8)",
            }}
          >
            {item.sub}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function LpVisual() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#07111f] text-white">
      <header
        className="fixed left-0 right-0 top-0 z-50 w-full min-w-0 border-b border-[#C9A84C]/20 bg-[#07111f]/90 backdrop-blur-md"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <div className="mx-auto flex w-full min-h-14 min-w-0 max-w-full items-center justify-between gap-2 px-4 py-2.5 sm:gap-3">
          <span
            className="gold-shimmer text-sm font-semibold tracking-[0.3em] sm:text-base"
            style={{ fontWeight: 600 }}
          >
            UP SCENT
          </span>
          <LineCta
            size="sm"
            label="LINEで無料相談する"
            hint="「『香りのホームページを見ました』と送信してください」"
          />
        </div>
      </header>

      <div className="w-full pt-24 sm:pt-[5.5rem]">
        {SLIDES.map((s, i) => (
          <HeroSlide key={s.id} item={s} priority={i === 0} />
        ))}
      </div>

      <section className="w-full bg-[#07111f] px-4 py-24 flex justify-center">
        <div className="mx-auto w-full max-w-[800px] text-center">
        <p
          className="mb-6 text-sm leading-relaxed text-gray-300"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          空間の価値は、香りで完成する
          <br />
          視覚ではなく、記憶に残る印象へ。
          <br />
          滞在、リピート、売上、採用——
          <br />
          すべては、五感の設計から始まる。
        </p>

        <div className="flex w-full flex-col items-center">
        <div
          className="mx-auto mt-8 w-full max-w-[640px] border-x-4 border-[#D4AF37] bg-black/40 px-6 py-6 text-center"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          <p className="text-lg text-[#D4AF37]">
            今なら【<span className="gold-shimmer font-semibold">博多・天神周辺エリア</span>】限定
          </p>
          <p className="mt-2 text-white">初期費用０円 ＋ 1ヶ月無料デモ実施中</p>
          <p className="mt-1 whitespace-nowrap text-center text-white">
            まず香りを体感してください
          </p>
        </div>

        <div
          className="mx-auto mt-8 flex w-full max-w-[520px] flex-col items-center space-y-3 text-center text-[#F5E6C8]"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          <p>業界最安値クラスの月額料金</p>
          <p>香りで売上アップ・滞在時間延長</p>
          <p>スタッフのモチベーションアップ</p>
          <p>求人成功率アップ</p>
          <p>他店との差別化・ブランディング</p>
          <p>新規獲得・リピート率アップ</p>
          <p>香りは脳に深く記憶される</p>
          <p>1ヶ月無料デモ設置可能</p>
          <p>初期費用サービス中</p>
        </div>

        <div className="mx-auto mt-8 flex w-full justify-center">
          <LineCta
            size="lg"
            label="LINEで無料相談する"
            hint="「『香りのホームページを見ました』と送信してください」"
            hintAlign="center"
          />
        </div>

        <p className="mx-auto mt-6 w-full max-w-[520px] text-center">
          <Link
            href="/"
            className="text-xs text-gray-400 underline decoration-gray-500/50 underline-offset-4 hover:text-[#E8CC7A]"
          >
            トップへ戻る
          </Link>
        </p>
        </div>
        </div>
      </section>
    </main>
  );
}
