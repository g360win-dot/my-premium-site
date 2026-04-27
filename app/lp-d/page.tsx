import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { LineCta } from "@/components/line-cta";

export const metadata: Metadata = {
  title: "空間香り | 香りのビジュアル体験",
  description:
    "海・自然・薔薇、パリのテラス、シャンパン。上質な写真の上に空間香りの価値を。博多・天神エリア限定の初期費用0円・1ヶ月無料デモ。",
};

/* Unsplash（無料ライセンス）— 高解像度 w=1920 & q=90 ／ 順：海→薔薇→森→シャンパン→パリ */
const SLIDES: { id: string; src: string; main: ReactNode; sub: ReactNode; alt: string }[] = [
  {
    id: "sea",
    src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=90&auto=format&fit=crop",
    main: (
      <>
        扉を開けた瞬間——
        <br />
        お客様の表情が変わる
      </>
    ),
    sub: (
      <>
        新規御来店のお客様、2人に1人が
        <br />
        「このお店、いい香りがする」と口にする。
        <br />
        いらっしゃいませより早いおもてなし。
        <br />
        第一印象が、その後の70%を決める。
      </>
    ),
    alt: "穏やかな海の波",
  },
  {
    id: "flowers",
    src: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=1920&q=90&auto=format&fit=crop",
    main: (
      <>
        他店に差をつける。
        <br />
        競合に真似できない空間へ。
      </>
    ),
    sub: (
      <>
        香りのある空間は、香りがない空間より
        <br />
        「質が高い」と感じさせる。
        <br />
        それだけで、あなたの店の価値が上がる。
      </>
    ),
    alt: "プロ品質の赤薔薇の花束",
  },
  {
    id: "nature-forest",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=90&auto=format&fit=crop",
    main: (
      <>
        香りは、あなたの店の
        <br />
        「見えないブランド」になる
      </>
    ),
    sub: (
      <>
        香りは脳にダイレクトに作用し、
        <br />
        記憶と深く結びつく。
        <br />
        一度刻まれた印象は、
        <br />
        何度でも呼び覚まされる。
      </>
    ),
    alt: "植物・森の自然光",
  },
  {
    id: "champagne",
    src: "https://images.unsplash.com/photo-1623428454697-08da4a100602?w=1920&q=90&auto=format&fit=crop",
    main: (
      <>
        スタッフが誇れる空間が、
        <br />
        求人を変える
      </>
    ),
    sub: (
      <>
        雰囲気・居心地・香り——
        <br />
        この三つが揃った店に、人は集まる。
        <br />
        求人成功率が変わる。
      </>
    ),
    alt: "シャンパンを注ぐ高級感のあるシーン",
  },
  {
    id: "paris-cafe",
    src: "https://images.unsplash.com/photo-1635782166219-168a2fe1bd19?w=1920&q=90&auto=format&fit=crop",
    main: (
      <>
        滞在時間が伸び、
        <br />
        リピートが自然に増える
      </>
    ),
    sub: (
      <>
        居心地の良さは、売上に直結する。
        <br />
        香りは、その最も簡単な答えのひとつ。
      </>
    ),
    alt: "パリの高級レストラン・テラス席（夕景の街角）",
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
      <div className="w-full min-w-0">
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

      <div className="w-full min-w-0 max-w-full pt-24 sm:pt-[5.5rem]">
        {SLIDES.map((s, i) => (
          <HeroSlide key={s.id} item={s} priority={i === 0} />
        ))}
      </div>

      <section className="w-full min-w-0 max-w-full border-t border-[#C9A84C]/20 bg-[#07111f] py-20 sm:py-24">
        <div className="mx-auto flex w-full max-w-[800px] flex-col items-center px-4 text-center">
        <h2
          className="mx-auto mb-6 w-full text-center"
          style={{
            fontFamily: "var(--font-noto-serif-jp), serif",
            color: "#FFFFFF",
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.45,
            textShadow: "0 2px 20px rgba(0,0,0,0.8)",
          }}
        >
          香りは、最後の差別化になる
        </h2>
        <p
          className="mx-auto mb-10 w-full text-center"
          style={{
            fontFamily: "var(--font-noto-serif-jp), serif",
            color: "rgba(255,255,255,0.9)",
            fontSize: "clamp(0.85rem, 2.5vw, 1.1rem)",
            fontWeight: 400,
            lineHeight: 1.8,
            textShadow: "0 1px 10px rgba(0,0,0,0.8)",
          }}
        >
          写真のような「印象」は、香りで裏付けられる。
          <br />
          滞在、売上、採用、リピート——
          <br />
          すべて、五感の土台の上に成り立つ。
        </p>
        <p
          className="mx-auto mb-0 w-full text-center"
          style={{
            background: "rgba(0,0,0,0.7)",
            color: "#E8CC7A",
            fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
            borderLeft: "4px solid #C9A84C",
            padding: "2rem",
            fontFamily: "var(--font-noto-serif-jp), serif",
            lineHeight: 1.6,
          }}
        >
          今なら【博多・天神エリア】限定
          <br />
          初期費用０円 ＋ 1ヶ月無料デモ実施中
          <br />
          まず香りを体感してください
        </p>
        <ul className="mx-auto mt-6 w-fit max-w-full list-none space-y-2 text-left text-sm text-[#B8A882] sm:text-base">
          {BULLETS.map((t) => (
            <li key={t} className="w-full min-w-0 border-b border-[#C9A84C]/10 py-1.5">
              <span className="text-[#C9A84C]">·</span> {t}
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-8 w-full max-w-[360px]">
          <LineCta
            size="lg"
            label="LINEで無料相談する"
            hint="「『香りのホームページを見ました』と送信してください」"
            hintAlign="center"
          />
        </div>
        </div>
        <p className="mt-6 w-full text-center">
          <Link
            href="/"
            className="text-xs text-[#B8A882] underline decoration-[#C9A84C]/40 underline-offset-4 hover:text-[#E8CC7A]"
          >
            トップへ戻る
          </Link>
        </p>
      </section>
      </div>
    </main>
  );
}
