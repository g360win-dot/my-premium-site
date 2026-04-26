export const LINE_HREF = "https://line.me/ti/p/O7z9xXzV_K";

type LineCtaProps = {
  className?: string;
  size?: "sm" | "default" | "lg";
  /** 未指定時は「LINEで無料相談」 */
  label?: string;
  /** 指定時、ボタン下に小さな白文字で表示 */
  hint?: string;
  /** hint 行の揃え（end: 右寄せ / center: 中央） */
  hintAlign?: "end" | "center";
};

export function LineCta({
  className = "",
  size = "default",
  label = "LINEで無料相談",
  hint,
  hintAlign = "end",
}: LineCtaProps) {
  const sizeClass =
    size === "sm"
      ? "py-2 px-4 text-[0.7rem]"
      : size === "lg"
        ? "py-4 px-10 text-[0.85rem] sm:py-5 sm:px-12 sm:text-[0.9rem]"
        : "py-3.5 px-8 text-[0.8rem]";

  const link = (
    <a
      href={LINE_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-[0.2em] text-white transition hover:opacity-95 ${sizeClass} ${className}`}
      style={{ background: "#06C755", fontFamily: "Arial, sans-serif" }}
    >
      {label}
    </a>
  );

  if (!hint) {
    return link;
  }

  return (
    <div
      className={`flex flex-col gap-1.5 ${hintAlign === "center" ? "items-center" : "items-end"}`}
    >
      {link}
      <p
        className={`max-w-[min(18rem,85vw)] text-[0.6rem] leading-snug text-white sm:text-xs ${hintAlign === "center" ? "text-center" : "text-right"}`}
        style={{ fontFamily: "var(--font-noto-serif-jp), 'Yu Mincho', serif" }}
      >
        {hint}
      </p>
    </div>
  );
}
