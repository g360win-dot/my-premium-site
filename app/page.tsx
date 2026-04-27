"use client";

import Link from "next/link";

const COMPANY = {
  name: "UP SCENT",
  tel: "090-5087-6576",
  telHref: "tel:090-5087-6576",
  email: "uriage.upscent@gmail.com",
  // TODO: 良太さんの正式なメールアドレスが決まったら下記の placeholder@example.com を書き換えてください
  emailHref: "mailto:uriage.upscent@gmail.com?subject=%E3%80%90%E3%83%87%E3%82%A3%E3%83%95%E3%83%A5%E3%83%BC%E3%82%B6%E3%83%BC%E9%96%A2%E3%81%99%E3%82%8B%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%E3%80%91&body=%E7%A9%BA%E9%96%93%E6%BC%94%E5%87%BA%E3%83%BB%E3%83%95%E3%83%AC%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B9%E5%B0%8E%E5%85%A5%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E3%81%94%E7%9B%B8%E8%AB%87%0A%0A--%0A%E5%BA%97%E8%88%97%E5%90%8D%EF%BC%9A%0A%E3%81%94%E6%8B%85%E5%BD%93%E8%80%85%E5%90%8D%EF%BC%9A%0A%E3%81%94%E9%80%A3%E7%B5%A1%E5%85%88%EF%BC%9A%0A%E3%81%94%E5%B8%8C%E6%9C%9B%E3%81%AE%E7%9B%B8%E8%AB%87%E5%86%85%E5%AE%B9%EF%BC%9A",
  lineHref: "https://line.me/ti/p/O7z9xXzV_K",
  address: {
    zip: "〒812-0025",
    pref: "福岡県福岡市博多区",
    street: "店屋町2-32",
    room: "1202室",
  },
  hours: "24時間受付 / 年中無休",
};

export default function Home() {
  return (
    <>
      {/* ===== CHAMPAGNE BUBBLE PARTICLES ===== */}
      <div className="particles-container" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="bubble" />
        ))}
      </div>

      {/* ===== HEADER ===== */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2rem",
          height: "64px",
          backgroundColor: "rgba(5,5,5,0.97)",
          boxShadow: "0 1px 0 rgba(201,168,76,0.18)",
        }}
      >
        {/* Logo — color で確実に表示 */}
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "1.05rem",
            fontWeight: 700,
            letterSpacing: "0.3em",
          }}
        >
          <span className="gold-shimmer" style={{ fontWeight: 600, fontSize: "1.05em" }}>UP SCENT</span>
        </div>

        {/* Right: phone + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <a
            href={COMPANY.telHref}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
              textDecoration: "none",
              color: "#C9A84C",
              fontFamily: "Arial, sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              fontWeight: 600,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
                fill="#C9A84C"
              />
            </svg>
            {COMPANY.tel}
          </a>
          <a href="#contact" className="btn-gold" style={{ padding: "0.5rem 1.25rem", fontSize: "0.7rem" }}>
            無料相談
          </a>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section
        className="hero-section section-content"
        style={{
          paddingTop: "64px",
          background: "#02040a",
        }}
      >
        {/* 漆黒の中央から滲むゴールドグロー — 純粋な黒背景向けに最適化 */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 75% 60% at 50% 46%, rgba(201,168,76,0.13) 0%, rgba(201,168,76,0.05) 50%, transparent 75%)", zIndex: 0, pointerEvents: "none" }} />

        {/* Content wrapper */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "100%" }}>

        {/* ── 英字アクセント（細身セリフ体） ── */}
        <p
          className="fade-in-up delay-1"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(0.62rem, 1.4vw, 0.8rem)",
            fontWeight: 300,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "2.25rem",
            background: "linear-gradient(90deg, rgba(201,168,76,0.5) 0%, rgba(232,204,122,0.75) 50%, rgba(201,168,76,0.5) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Luxury Space Design &amp; Branding Marketing
        </p>

        {/* ── 上下の細線オーナメント ── */}
        <div
          className="fade-in-up delay-1"
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}
        >
          <div style={{ height: "1px", width: "clamp(40px, 8vw, 100px)", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5))" }} />
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <rect x="0" y="3.5" width="8" height="1" fill="rgba(201,168,76,0.6)" transform="rotate(45 4 4)" />
            <rect x="0" y="3.5" width="8" height="1" fill="rgba(201,168,76,0.6)" transform="rotate(-45 4 4)" />
          </svg>
          <div style={{ height: "1px", width: "clamp(40px, 8vw, 100px)", background: "linear-gradient(90deg, rgba(201,168,76,0.5), transparent)" }} />
        </div>

        {/* ── 日本語メイン「香りアップせんと？」── */}
        <h1
          className="fade-in-up delay-2"
          style={{
            fontFamily: "var(--font-noto-serif-jp), 'Hiragino Mincho ProN', 'Yu Mincho', serif",
            fontSize: "clamp(2.6rem, 8vw, 6rem)",
            lineHeight: 1.15,
            letterSpacing: "0.08em",
            marginBottom: "2rem",
            display: "block",
            filter: "drop-shadow(0 0 28px rgba(240,216,120,0.45)) drop-shadow(0 0 64px rgba(201,168,76,0.22))",
          }}
        >
          <span className="gold-shimmer" style={{ fontWeight: 600, fontSize: "1.05em" }}>
            香りアップせんと？
          </span>
        </h1>

        {/* ── サブキャッチ ── */}
        <div
          className="fade-in-up delay-3"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.3rem",
            marginBottom: "2.75rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-noto-serif-jp), 'Hiragino Mincho ProN', serif",
              fontSize: "clamp(0.95rem, 2.4vw, 1.4rem)",
              fontWeight: 300,
              letterSpacing: "0.12em",
              lineHeight: 1.7,
              background: "linear-gradient(135deg, #b8922e 0%, #D4A84C 40%, #ECC96A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            空間を香りでデザインする。
          </p>
          <p
            style={{
              fontFamily: "var(--font-noto-serif-jp), 'Hiragino Mincho ProN', serif",
              fontSize: "clamp(0.85rem, 2vw, 1.2rem)",
              fontWeight: 200,
              letterSpacing: "0.1em",
              lineHeight: 1.7,
              background: "linear-gradient(135deg, #9a7828 0%, #C9A84C 45%, #dcc268 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            中洲・天神・夜・を彩る上質で非日常的なフレグランス。
          </p>
        </div>

        {/* ── ボトムオーナメント ── */}
        <div
          className="fade-in-up delay-3"
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "2.5rem" }}
        >
          <div style={{ height: "1px", width: "clamp(30px, 6vw, 80px)", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4))" }} />
          <span style={{ fontFamily: "Georgia, serif", fontSize: "0.55rem", letterSpacing: "0.4em", textTransform: "uppercase" }}>
            <span className="gold-shimmer" style={{ fontWeight: 600, fontSize: "1.05em" }}>UP SCENT</span>
          </span>
          <div style={{ height: "1px", width: "clamp(30px, 6vw, 80px)", background: "linear-gradient(90deg, rgba(201,168,76,0.4), transparent)" }} />
        </div>

        {/* ── CTA Buttons ── */}
        <div
          className="fade-in-up delay-4"
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a href="#service" className="btn-gold">
            サービスを見る
          </a>
          <a href="#contact" className="btn-outline-gold">
            無料相談
          </a>
        </div>

        </div>{/* end content wrapper */}

        {/* ── Scroll indicator ── */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            zIndex: 1,
          }}
        >
          <span style={{ fontFamily: "Georgia, serif", fontSize: "0.55rem", letterSpacing: "0.25em", color: "rgba(201,168,76,0.4)", textTransform: "uppercase" }}>
            Scroll
          </span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(201,168,76,0.4), transparent)" }} />
        </div>
      </section>

      {/* ===== HERO IMAGE SHOWCASE ===== */}
      <section
        id="service"
        className="section-content"
        style={{
          padding: "5rem 1.5rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              color: "rgba(201,168,76,0.6)",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Our Service
          </p>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 300,
              letterSpacing: "0.05em",
              color: "#F5EDD8",
            }}
          >
            プレミアム空間デザイン
          </h2>
          <div className="gold-divider" style={{ width: "80px", margin: "1.5rem auto 0" }} />
        </div>

      </section>

      {/* ===== STRATEGY / BENEFITS ===== */}
      <section
        style={{
          padding: "6rem 1.5rem 5rem",
          background: "linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.04) 40%, rgba(201,168,76,0.02) 100%)",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>

          {/* ── Section header ── */}
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", color: "rgba(201,168,76,0.6)", textTransform: "uppercase", marginBottom: "1rem" }}>
              Strategy
            </p>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.6rem)", fontWeight: 300, letterSpacing: "0.05em", color: "#F5EDD8", marginBottom: "0.75rem" }}>
              選ばれる理由
            </h2>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(0.8rem, 1.8vw, 1rem)", color: "rgba(201,168,76,0.7)", letterSpacing: "0.08em", marginBottom: "0" }}>
              空間の純度を極限まで高め、香りでブランド価値を戦略的に引き上げる、上質な香りマーケティング。
            </p>
            <div className="gold-divider" style={{ width: "80px", margin: "1.75rem auto 0" }} />
          </div>

          {/* ── 3 benefit cards ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            {/* Card 1 — LTV */}
            <div className="premium-card" style={{ padding: "2.25rem 2rem", borderRadius: "2px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "0.5rem", right: "1rem", fontFamily: "Georgia, serif", fontSize: "5rem", fontWeight: 900, color: "rgba(201,168,76,0.04)", lineHeight: 1, userSelect: "none" }}>01</div>
              <div className="feature-icon-wrap" style={{ marginBottom: "1.5rem", width: "60px", height: "60px" }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <polyline points="2,22 8,14 14,17 22,6 26,10" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <polyline points="22,6 26,6 26,10" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <line x1="2" y1="24" x2="26" y2="24" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                  <circle cx="26" cy="6" r="2.5" fill="#E8CC7A" opacity="0.8" />
                </svg>
              </div>
              <div style={{ fontFamily: "Arial, sans-serif", fontSize: "0.55rem", letterSpacing: "0.25em", color: "rgba(201,168,76,0.5)", textTransform: "uppercase", marginBottom: "0.5rem" }}>LTV Maximization</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, letterSpacing: "0.04em", color: "#E8CC7A", marginBottom: "1rem", lineHeight: 1.5 }}>
                LTV（顧客生涯価値）の最大化
              </h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 2, color: "rgba(245,237,216,0.65)", fontFamily: "Arial, sans-serif" }}>
                五感の中で唯一「感情と記憶」に直結する嗅覚を戦略的に刺激。ゲストの記憶の深い場所に店舗をインプットし、圧倒的なリピート率を実現。セット延長とボトルオーダーを自然に誘発します。
              </p>
              <div style={{ marginTop: "1.5rem", display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.35rem 0.85rem", background: "rgba(201,168,76,0.06)" }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="1,8 4,4 7,6 9,1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.65rem", color: "rgba(201,168,76,0.7)", letterSpacing: "0.1em" }}>客単価・滞在時間・売上の最大化</span>
              </div>
            </div>

            {/* Card 2 — Recruiting */}
            <div className="premium-card" style={{ padding: "2.25rem 2rem", borderRadius: "2px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "0.5rem", right: "1rem", fontFamily: "Georgia, serif", fontSize: "5rem", fontWeight: 900, color: "rgba(201,168,76,0.04)", lineHeight: 1, userSelect: "none" }}>02</div>
              <div className="feature-icon-wrap" style={{ marginBottom: "1.5rem", width: "60px", height: "60px" }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <polygon points="14,2 17.5,10.5 27,11.5 20,18 22,27 14,22.5 6,27 8,18 1,11.5 10.5,10.5" stroke="#C9A84C" strokeWidth="1.6" fill="rgba(201,168,76,0.1)" strokeLinejoin="round" />
                  <polygon points="14,5 16.5,11 22.5,11.8 18,16 19.5,22 14,19 8.5,22 10,16 5.5,11.8 11.5,11" fill="rgba(201,168,76,0.08)" />
                  <circle cx="14" cy="14" r="2.5" fill="#E8CC7A" opacity="0.5" />
                </svg>
              </div>
              <div style={{ fontFamily: "Arial, sans-serif", fontSize: "0.55rem", letterSpacing: "0.25em", color: "rgba(201,168,76,0.5)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Cast Recruiting</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, letterSpacing: "0.04em", color: "#E8CC7A", marginBottom: "1rem", lineHeight: 1.5 }}>
                キャスト・リクルーティングの強化
              </h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 2, color: "rgba(245,237,216,0.65)", fontFamily: "Arial, sans-serif" }}>
                「ここで働きたい」と直感させる圧倒的な第一印象の構築。スタッフのモチベーションを最高潮に高め、体験入店の入店率を劇的に向上。最高峰のホスピタリティ環境がキャストを惹きつけます。
              </p>
              <div style={{ marginTop: "1.5rem", display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.35rem 0.85rem", background: "rgba(201,168,76,0.06)" }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="1,8 4,4 7,6 9,1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.65rem", color: "rgba(201,168,76,0.7)", letterSpacing: "0.1em" }}>入店率・定着率の劇的向上</span>
              </div>
            </div>

            {/* Card 3 — Signature Scent */}
            <div className="premium-card" style={{ padding: "2.25rem 2rem", borderRadius: "2px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "0.5rem", right: "1rem", fontFamily: "Georgia, serif", fontSize: "5rem", fontWeight: 900, color: "rgba(201,168,76,0.04)", lineHeight: 1, userSelect: "none" }}>03</div>
              <div className="feature-icon-wrap" style={{ marginBottom: "1.5rem", width: "60px", height: "60px" }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <polygon points="14,3 25,11 14,25 3,11" stroke="#C9A84C" strokeWidth="1.8" fill="rgba(201,168,76,0.08)" strokeLinejoin="round" />
                  <polygon points="14,3 25,11 14,14 3,11" stroke="#C9A84C" strokeWidth="1" fill="rgba(201,168,76,0.05)" strokeLinejoin="round" opacity="0.6" />
                  <line x1="14" y1="3" x2="14" y2="25" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5" />
                  <line x1="3" y1="11" x2="25" y2="11" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5" />
                  <circle cx="14" cy="14" r="2" fill="#E8CC7A" opacity="0.7" />
                </svg>
              </div>
              <div style={{ fontFamily: "Arial, sans-serif", fontSize: "0.55rem", letterSpacing: "0.25em", color: "rgba(201,168,76,0.5)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Signature Scent</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, letterSpacing: "0.04em", color: "#E8CC7A", marginBottom: "1rem", lineHeight: 1.5 }}>
                シグネチャーセント・ブランディング
              </h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 2, color: "rgba(245,237,216,0.65)", fontFamily: "Arial, sans-serif" }}>
                その店だけの独自の香りを資産化。他店には決して真似できない唯一無二の「Luxury」を演出し、競合店との完全な差別化を図る。香りがそのまま店舗の無形資産となります。
              </p>
              <div style={{ marginTop: "1.5rem", display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.35rem 0.85rem", background: "rgba(201,168,76,0.06)" }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="1,8 4,4 7,6 9,1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.65rem", color: "rgba(201,168,76,0.7)", letterSpacing: "0.1em" }}>競合との完全差別化・ブランド資産化</span>
              </div>
            </div>
          </div>

          {/* ── Comparison copy banner ── */}
          <div
            style={{
              position: "relative",
              padding: "2rem 2.5rem",
              background: "#02040a",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            {/* Top shine */}
            <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)" }} />

            {/* Quote mark */}
            <div style={{ fontFamily: "Georgia, serif", fontSize: "3rem", color: "rgba(201,168,76,0.15)", lineHeight: 0.8, marginBottom: "0.75rem", userSelect: "none" }}>"</div>

            <p
              style={{
                fontSize: "clamp(0.9rem, 2.2vw, 1.15rem)",
                fontWeight: 400,
                lineHeight: 1.9,
                letterSpacing: "0.06em",
                color: "#F5EDD8",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              香りを導入していない店舗には決して真似できない、
              <br />
              <span className="gold-shimmer" style={{ fontWeight: 600, fontSize: "1.05em" }}>
                一歩先を行く店舗体験を。
              </span>
            </p>

            <div className="gold-divider" style={{ width: "60px", margin: "1.5rem auto 1.25rem" }} />

            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.72rem", color: "rgba(201,168,76,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              <span className="gold-shimmer" style={{ fontWeight: 600, fontSize: "1.05em" }}>UP SCENT</span>
              {" — Redefine Your Space"}
            </p>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="section-content" style={{ padding: "6rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{
            fontFamily: "var(--font-noto-serif-jp), 'Hiragino Mincho ProN', serif",
            fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
            fontWeight: 300,
            letterSpacing: "0.14em",
            lineHeight: 1.6,
          }}>
            <span className="gold-shimmer" style={{ fontWeight: 600, fontSize: "1.05em" }}>
              いらっしゃいませ より早い おもてなし
            </span>
          </h2>
          <div className="gold-divider" style={{ width: "60px", margin: "1.5rem auto 0" }} />
        </div>

        {/* ── MAIN VISUAL (full width) ── */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "clamp(280px, 42vw, 480px)",
            marginBottom: "2rem",
            background: "#02040a",
            overflow: "hidden",
          }}
        >
          {/* Soft gold glow — center */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,168,76,0.055) 0%, transparent 65%)" }} />

          {/* Text — vertically & horizontally centered */}
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
            <p style={{
              fontFamily: "var(--font-noto-serif-jp), serif",
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              fontWeight: 200,
              letterSpacing: "0.18em",
              lineHeight: 1.6,
              marginBottom: "1.25rem",
            }}>
              <span className="gold-shimmer" style={{ fontWeight: 600, fontSize: "1.05em" }}>
                特別な瞬間を彩る、高揚感の演出。
              </span>
            </p>
            <p style={{
              fontFamily: "var(--font-noto-serif-jp), serif",
              fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)",
              fontWeight: 300,
              letterSpacing: "0.14em",
              color: "rgba(201,168,76,0.5)",
              maxWidth: "480px",
              lineHeight: 1.9,
            }}>
              最高級シャンパンとフレグランスが交差する、圧倒的なVIP体験。
            </p>
          </div>

        </div>

        {/* ── ROW 2: Portrait + Sub 01 ── */}
        <div style={{ display: "grid", gridTemplateColumns: "5fr 4fr", gap: "2rem", alignItems: "stretch" }}>

          {/* Portrait */}
          <div
            style={{
              position: "relative",
              height: "clamp(340px, 50vw, 560px)",
              background: "#02040a",
              overflow: "hidden",
            }}
          >
            {/* Soft glow — upper center */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 45% at 50% 30%, rgba(201,168,76,0.05) 0%, transparent 65%)" }} />

            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem 1.5rem" }}>
              <p style={{
                fontFamily: "var(--font-noto-serif-jp), serif",
                fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
                fontWeight: 200,
                letterSpacing: "0.16em",
                lineHeight: 1.85,
                background: "linear-gradient(135deg, #C9A84C 0%, #F0D98A 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Luxuryな空間デザインと、<br />記憶に刻まれる<br />空間フレグランスの融合。
              </p>
            </div>
          </div>

          {/* Sub 01 */}
          <div
            style={{
              position: "relative",
              background: "#02040a",
              overflow: "hidden",
            }}
          >
            {/* Soft glow — center */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 50% at 45% 50%, rgba(201,168,76,0.048) 0%, transparent 68%)" }} />

            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem 1.5rem" }}>
              <p style={{
                fontFamily: "var(--font-noto-serif-jp), serif",
                fontSize: "clamp(0.95rem, 2vw, 1.25rem)",
                fontWeight: 200,
                letterSpacing: "0.16em",
                lineHeight: 1.85,
                background: "linear-gradient(135deg, #C9A84C 0%, #F0D98A 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "1.25rem",
              }}>
                上質な空間でのひととき。
              </p>
              <p style={{
                fontFamily: "var(--font-noto-serif-jp), serif",
                fontSize: "clamp(0.7rem, 1.3vw, 0.85rem)",
                fontWeight: 300,
                letterSpacing: "0.12em",
                color: "rgba(201,168,76,0.42)",
                lineHeight: 2,
                maxWidth: "280px",
              }}>
                深みのある香りが、プレミアムな洋酒の味わいとゲストの滞在時間を引き立てる。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESULTS ===== */}
      <section
        className="section-content"
        style={{
          padding: "7rem 1.5rem",
          background: "#02040a",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          {/* ── メインフレーズ ── */}
          <h2
            style={{
              fontFamily: "var(--font-noto-serif-jp), 'Hiragino Mincho ProN', serif",
              fontSize: "clamp(1.35rem, 3.8vw, 2.4rem)",
              fontWeight: 300,
              letterSpacing: "0.1em",
              lineHeight: 1.7,
              color: "#F5EDD8",
              marginBottom: "3rem",
            }}
          >
            新規ご来店の2人に1人が
            <span style={{ whiteSpace: "nowrap" }}>思わず口にする。</span>
          </h2>

          <div className="gold-divider" style={{ width: "48px", margin: "0 auto 3.5rem" }} />

          {/* ── 称賛の声 ── */}
          <p
            style={{
              fontFamily: "var(--font-noto-serif-jp), 'Hiragino Mincho ProN', serif",
              fontSize: "clamp(1.1rem, 2.8vw, 1.7rem)",
              fontWeight: 200,
              letterSpacing: "0.16em",
              lineHeight: 1.9,
              marginBottom: "3rem",
            }}
          >
            <span className="gold-shimmer" style={{ fontWeight: 600, fontSize: "1.05em" }}>
              「このお店、いい香りがする――」
            </span>
          </p>

          {/* ── 0秒のおもてなし ── */}
          <div
            style={{
              position: "relative",
              padding: "2.5rem 2rem",
              background: "linear-gradient(160deg, rgba(12,10,3,0.98) 0%, rgba(7,6,2,0.98) 100%)",
              marginBottom: "3rem",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.45), transparent)" }} />
            <div style={{ position: "absolute", bottom: 0, left: "10%", right: "10%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)" }} />
            <p
              style={{
                fontFamily: "var(--font-noto-serif-jp), 'Hiragino Mincho ProN', serif",
                fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
                fontWeight: 300,
                letterSpacing: "0.1em",
                lineHeight: 2.2,
                color: "rgba(245,237,216,0.75)",
                marginBottom: "1.5rem",
              }}
            >
              御来店の<span style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #F0D98A 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 600,
              }}>二人に一人</span>が、扉を開けた瞬間に称賛の言葉を漏らす。
            </p>
            <p
              style={{
                fontFamily: "var(--font-noto-serif-jp), 'Hiragino Mincho ProN', serif",
                fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
                fontWeight: 300,
                letterSpacing: "0.1em",
                lineHeight: 2.2,
                color: "rgba(245,237,216,0.75)",
              }}
            >
              <span className="gold-shimmer" style={{ fontWeight: 600, fontSize: "1.05em" }}>第一印象</span>は、その後の顧客イメージの<span style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #F0D98A 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 600,
              }}>70%</span>を決定づけます。扉が開いた瞬間の<span style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #F0D98A 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 600,
              }}>「0秒のおもてなし」</span>が、顧客の記憶に深く刻まれます。
            </p>
          </div>

          {/* ── 30%向上 ── */}
          <p
            style={{
              fontFamily: "var(--font-noto-serif-jp), 'Hiragino Mincho ProN', serif",
              fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
              fontWeight: 300,
              letterSpacing: "0.1em",
              lineHeight: 2.2,
              color: "rgba(245,237,216,0.6)",
            }}
          >
            空間、接客、そして香りの相乗効果により、売上が<span style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #F0D98A 50%, #C9A84C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 600,
              fontSize: "1.15em",
            }}>30%向上</span>した店舗も存在します。
          </p>

          {/* ── コストパフォーマンス ── */}
          <div style={{ marginTop: "4.5rem" }}>
            <div className="gold-divider" style={{ width: "48px", margin: "0 auto 3.5rem" }} />

            <p
              style={{
                fontFamily: "var(--font-noto-serif-jp), 'Hiragino Mincho ProN', serif",
                fontSize: "clamp(1.05rem, 2.6vw, 1.5rem)",
                fontWeight: 300,
                letterSpacing: "0.1em",
                lineHeight: 1.75,
                color: "#F5EDD8",
                marginBottom: "3rem",
              }}
            >
              最高級の香りを、<span style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #F0D98A 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 400,
              }}>業界最安値クラス</span>の維持費で。
            </p>

            <p
              style={{
                fontFamily: "var(--font-noto-serif-jp), 'Hiragino Mincho ProN', serif",
                fontSize: "clamp(0.82rem, 1.8vw, 1rem)",
                fontWeight: 300,
                letterSpacing: "0.09em",
                lineHeight: 2.2,
                color: "rgba(245,237,216,0.58)",
                maxWidth: "560px",
                margin: "0 auto 1.5rem",
              }}
            >
              「高価だから導入をためらう」という常識を覆し、圧倒的なコストパフォーマンスを実現。
            </p>
            <p
              style={{
                fontFamily: "var(--font-noto-serif-jp), 'Hiragino Mincho ProN', serif",
                fontSize: "clamp(0.82rem, 1.8vw, 1rem)",
                fontWeight: 300,
                letterSpacing: "0.09em",
                lineHeight: 2.2,
                color: "rgba(245,237,216,0.58)",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              中洲・天神のあらゆる店舗に、本物のおもてなしを届けるための特別価格。
            </p>
          </div>

        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section
        id="contact"
        className="section-content"
        style={{
          padding: "7rem 1.5rem 6rem",
          textAlign: "center",
          background: "linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.04) 50%, transparent 100%)",
        }}
      >
        {/* Section header */}
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", color: "rgba(201,168,76,0.6)", textTransform: "uppercase", marginBottom: "2rem" }}>
          Contact
        </p>
        <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 300, letterSpacing: "0.06em", color: "#F5EDD8", marginBottom: "0.75rem" }}>
          あなたの空間を、
        </h2>
        <h2 className="gold-text" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 300, letterSpacing: "0.06em", marginBottom: "2rem", display: "block" }}>
          極上のステージへ。
        </h2>
        <div className="ornament" style={{ width: "160px", margin: "0 auto 3rem" }}>
          <span style={{ color: "#C9A84C", fontSize: "0.55rem" }}>✦</span>
        </div>

        {/* ── LINE MAIN BUTTON ── */}
        <div style={{ maxWidth: "540px", margin: "0 auto 1rem" }}>
          {/* Lead text above LINE button */}
          <p style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "0.8rem",
            lineHeight: 1.9,
            color: "rgba(245,237,216,0.6)",
            marginBottom: "1.25rem",
            letterSpacing: "0.04em",
          }}>
            お急ぎの方、導入のご相談、お見積もりは<br />
            LINEで直接相談が最もスムーズです。<strong style={{ color: "rgba(74,222,128,0.85)", fontWeight: 600 }}>24時間いつでもお気軽に。</strong>
          </p>

          {/* LINE hero button */}
          <a
            href={COMPANY.lineHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "block" }}
          >
            <div
              style={{
                position: "relative",
                padding: "1.6rem 2rem",
                background: "#06C755",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.25rem",
                cursor: "pointer",
                transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
                boxShadow: "0 6px 36px rgba(6,199,85,0.35), 0 2px 12px rgba(6,199,85,0.2)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#05b84e";
                el.style.boxShadow = "0 10px 48px rgba(6,199,85,0.55), 0 4px 18px rgba(6,199,85,0.3)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#06C755";
                el.style.boxShadow = "0 6px 36px rgba(6,199,85,0.35), 0 2px 12px rgba(6,199,85,0.2)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* LINE logo */}
              <div style={{ width: "48px", height: "48px", background: "rgba(255,255,255,0.18)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" width="32" height="32" alt="LINE" />
              </div>

              {/* Text block */}
              <div style={{ textAlign: "left" }}>
                <div style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", fontWeight: 800, color: "#fff", letterSpacing: "0.04em", lineHeight: 1.35 }}>
                  LINEで直接相談する
                </div>
                <div style={{ fontFamily: "Arial, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.75)", marginTop: "0.3rem", letterSpacing: "0.05em" }}>
                  タップして今すぐつながる →
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* ── Sub contact: Phone + Email ── */}
        <div style={{ maxWidth: "540px", margin: "0 auto 0" }}>
          <p style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            color: "rgba(201,168,76,0.35)",
            textTransform: "uppercase",
            margin: "2rem 0 1rem",
          }}>
            その他の連絡方法
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>

            {/* Phone */}
            <a href={COMPANY.telHref} style={{ textDecoration: "none" }}>
              <div
                style={{
                  padding: "1.1rem 1rem",
                  background: "#02040a",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  cursor: "pointer",
                  minHeight: "64px",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="rgba(201,168,76,0.5)" />
                </svg>
                <div>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: "0.55rem", letterSpacing: "0.15em", color: "rgba(201,168,76,0.4)", textTransform: "uppercase" }}>Phone</div>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "rgba(232,204,122,0.75)", letterSpacing: "0.05em" }}>{COMPANY.tel}</div>
                </div>
              </div>
            </a>

            {/* Email */}
            <a href={COMPANY.emailHref} style={{ textDecoration: "none" }}>
              <div
                style={{
                  padding: "1.1rem 1rem",
                  background: "#02040a",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  cursor: "pointer",
                  minHeight: "64px",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" fill="none" />
                  <path d="M2 7l10 7 10-7" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: "0.55rem", letterSpacing: "0.15em", color: "rgba(201,168,76,0.4)", textTransform: "uppercase" }}>Email</div>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "rgba(232,204,122,0.75)", letterSpacing: "0.01em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{COMPANY.email}</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        style={{
          padding: "3.5rem 1.5rem",
          textAlign: "center",
          background: "#02040a",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "1.3rem",
            fontWeight: 700,
            letterSpacing: "0.3em",
            marginBottom: "1.5rem",
          }}
        >
          <span className="gold-shimmer" style={{ fontWeight: 600, fontSize: "1.05em" }}>UP SCENT</span>
        </div>

        <div className="gold-divider" style={{ width: "60px", margin: "0 auto 1.5rem" }} />

        {/* Address block */}
        <address
          style={{
            fontStyle: "normal",
            fontFamily: "Arial, sans-serif",
            fontSize: "0.78rem",
            lineHeight: 2,
            color: "rgba(201,168,76,0.5)",
            letterSpacing: "0.06em",
            marginBottom: "0.75rem",
          }}
        >
          {COMPANY.address.zip}　{COMPANY.address.pref}{COMPANY.address.street}　{COMPANY.address.room}
        </address>

        {/* Phone */}
        <a
          href={COMPANY.telHref}
          style={{
            display: "inline-block",
            fontFamily: "Arial, sans-serif",
            fontSize: "0.85rem",
            color: "rgba(201,168,76,0.55)",
            letterSpacing: "0.1em",
            textDecoration: "none",
            marginBottom: "1.75rem",
            transition: "color 0.2s",
          }}
        >
          TEL: {COMPANY.tel}
        </a>

        <div className="gold-divider" style={{ width: "40px", margin: "0 auto 1.5rem" }} />

        <div className="mt-8 mb-6 text-center">
          <Link
            href="/lp-d"
            className="inline-block text-sm font-semibold tracking-[0.18em] text-[#D4AF37] underline underline-offset-4 hover:opacity-80"
          >
            LPを見る
          </Link>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "0.65rem",
            color: "rgba(201,168,76,0.28)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          © 2026{" "}
          <span className="gold-shimmer" style={{ fontWeight: 600, fontSize: "1.05em" }}>UP SCENT</span>
          . All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
