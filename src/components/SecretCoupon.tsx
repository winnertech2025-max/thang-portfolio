"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { StarDoodle } from "./sketches";

type Spot = { top?: string; bottom?: string; left?: string; right?: string };

const SPOTS: Spot[] = [
  { top: "7%", left: "6%" },
  { top: "11%", left: "76%" },
  { bottom: "9%", left: "8%" },
  { bottom: "11%", left: "78%" },
  { top: "46%", left: "3%" },
  { top: "52%", left: "82%" },
];

/**
 * A hidden "coupon" folded somewhere in the intro sheet. The faint spot can only
 * be read through a magnifying-glass lens (on hover); clicking opens the coupon
 * paper. The position is random on every page load.
 */
export default function SecretCoupon() {
  const [spot, setSpot] = useState<Spot | null>(null);
  const [hovering, setHovering] = useState(false);
  const [open, setOpen] = useState(false);
  const [mag, setMag] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setSpot(SPOTS[Math.floor(Math.random() * SPOTS.length)]);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!hovering) return;
    const move = (e: MouseEvent) => setMag({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [hovering]);

  if (!spot) return null;

  return (
    <>
      {/* faint secret spot */}
      <button
        type="button"
        data-magnify
        aria-label="Một bí mật nhỏ đang ẩn trong trang"
        className="secret-hotspot"
        style={spot}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={() => {
          setOpen(true);
          setHovering(false);
        }}
      >
        <StarDoodle className="h-5 w-5" />
      </button>

      {/* magnifying glass lens */}
      {createPortal(
        <div
          className={`secret-lens ${hovering ? "show" : ""}`}
          style={{ left: mag.x, top: mag.y }}
          aria-hidden
        >
          <div className="secret-lens-inner text-center leading-tight">
            <span className="mono block text-[8px] uppercase tracking-[0.2em] text-ink-3">
              bí mật
            </span>
            <span className="font-display block text-2xl font-bold text-accent">
              -24%
            </span>
            <span className="hand block text-base text-ink">phiếu giảm giá</span>
            <span className="mono block text-[8px] text-ink-3">bấm để mở</span>
          </div>
          <span className="secret-lens-handle" />
        </div>,
        document.body
      )}

      {/* coupon paper */}
      {open &&
        createPortal(
          <div className="coupon-backdrop" onClick={() => setOpen(false)}>
            <div
              className="coupon-paper"
              role="dialog"
              aria-modal="true"
              aria-label="Phiếu giảm giá"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                data-cursor="đóng"
                aria-label="Đóng"
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink-3 transition-colors hover:border-accent hover:text-accent"
              >
                ×
              </button>

              <div className="p-7 pt-9 text-center sm:p-9">
                <span className="mono text-[10px] uppercase tracking-[0.3em] text-ink-3">
                  bạn tinh mắt thật ✨
                </span>
                <p className="hand mt-2 text-3xl text-accent">Phiếu giảm giá</p>
                <div className="font-display mt-4 text-7xl font-bold tracking-tight text-ink sm:text-8xl">
                  -24%
                </div>
                <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-ink-2">
                  Chụp màn hình phiếu này rồi gửi cho mình khi trao đổi dự án —
                  bạn sẽ được giảm ngay{" "}
                  <span className="font-semibold text-ink">24%</span> khi chọn
                  mình làm developer.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-[3px] border border-dashed border-line-strong px-4 py-2">
                  <span className="mono text-xs tracking-[0.15em] text-ink">
                    MÃ: THANG-24
                  </span>
                </div>
              </div>

              <div className="relative flex items-center justify-center border-t border-dashed border-line-strong py-3">
                <span className="mono bg-[#fdfbf5] px-3 text-[9px] uppercase tracking-[0.25em] text-ink-3">
                  ✂ cắt ở đây
                </span>
              </div>
              <p className="hand pb-5 text-center text-sm text-ink-3">
                hiệu lực: mãi mãi 😉
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
