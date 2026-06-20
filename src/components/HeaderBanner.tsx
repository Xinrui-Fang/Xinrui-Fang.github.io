/** Banner palette derived from avatar: sage field, lilac flowers, soft cream sky. */
const colors = {
  sageDeep: "#5f7260",
  sage: "#8fa68e",
  sageLight: "#b4c4ad",
  olive: "#6b7a5e",
  lilac: "#ddd6e8",
  lilacSoft: "#f0ecf5",
  cream: "#f6f5f1",
  white: "#fbfaf8",
  navy: "#2e3640",
} as const;

function Bokeh({
  cx,
  cy,
  r,
  fill,
  opacity = 0.55,
}: {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  opacity?: number;
}) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill={fill}
      opacity={opacity}
      filter="url(#banner-blur)"
    />
  );
}

export function HeaderBanner({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 220"
        preserveAspectRatio="xMidYMid slice"
        className="block h-28 w-full sm:h-36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="banner-sky" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.lilacSoft} />
            <stop offset="38%" stopColor={colors.cream} />
            <stop offset="72%" stopColor={colors.sageLight} />
            <stop offset="100%" stopColor={colors.sage} />
          </linearGradient>
          <linearGradient id="banner-ground" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors.sage} stopOpacity="0" />
            <stop offset="100%" stopColor={colors.sageDeep} stopOpacity="0.35" />
          </linearGradient>
          <filter id="banner-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
          <filter id="banner-blur-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <rect width="1200" height="220" fill="url(#banner-sky)" />
        <rect width="1200" height="220" fill="url(#banner-ground)" />

        {/* Lilac flower bokeh */}
        <Bokeh cx={120} cy={48} r={36} fill={colors.lilac} opacity={0.7} />
        <Bokeh cx={280} cy={72} r={22} fill={colors.white} opacity={0.85} />
        <Bokeh cx={420} cy={36} r={28} fill={colors.lilacSoft} opacity={0.9} />
        <Bokeh cx={560} cy={58} r={18} fill={colors.lilac} opacity={0.55} />
        <Bokeh cx={720} cy={42} r={32} fill={colors.white} opacity={0.75} />
        <Bokeh cx={880} cy={68} r={24} fill={colors.lilac} opacity={0.6} />
        <Bokeh cx={1020} cy={34} r={20} fill={colors.lilacSoft} opacity={0.8} />
        <Bokeh cx={1120} cy={56} r={26} fill={colors.white} opacity={0.65} />

        {/* Sage foliage depth */}
        <Bokeh cx={180} cy={140} r={48} fill={colors.olive} opacity={0.28} />
        <Bokeh cx={360} cy={160} r={56} fill={colors.sageDeep} opacity={0.22} />
        <Bokeh cx={540} cy={150} r={42} fill={colors.olive} opacity={0.25} />
        <Bokeh cx={760} cy={168} r={52} fill={colors.sageDeep} opacity={0.2} />
        <Bokeh cx={980} cy={145} r={44} fill={colors.olive} opacity={0.26} />
        <Bokeh cx={1100} cy={170} r={38} fill={colors.sageDeep} opacity={0.18} />

        {/* Subtle navy accent — echoes jacket tone */}
        <ellipse
          cx="600"
          cy="200"
          rx="520"
          ry="40"
          fill={colors.navy}
          opacity={0.06}
          filter="url(#banner-blur-soft)"
        />

        <rect
          y="214"
          width="1200"
          height="6"
          fill={colors.sageDeep}
          opacity={0.12}
        />
      </svg>
    </div>
  );
}
