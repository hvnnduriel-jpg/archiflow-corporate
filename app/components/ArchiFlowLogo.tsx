type Props = {
  /** ロゴ全体の横幅（px）。縦幅は比率から自動計算 */
  width?: number;
  /** 背景クリームボックスを表示するか */
  showBackground?: boolean;
  className?: string;
};

/**
 * ArchiFlow AI ロゴコンポーネント
 * SVG viewBox: 600×190（オリジナル比率 = 600:190 ≈ 3.16:1）
 */
export default function ArchiFlowLogo({
  width = 220,
  showBackground = false,
  className = "",
}: Props) {
  const height = Math.round((190 / 600) * width);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 600 190"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ArchiFlow AI"
      role="img"
      className={className}
    >
      {/* 背景（オプション） */}
      {showBackground && (
        <rect
          x="0"
          y="0"
          width="600"
          height="190"
          rx="16"
          fill="#F5F3EE"
          stroke="#E0DACE"
          strokeWidth="0.5"
        />
      )}

      {/* アイコン外枠 */}
      <rect
        x="55"
        y="48"
        width="64"
        height="64"
        rx="6"
        fill="none"
        stroke="#0D1B3E"
        strokeWidth="2"
      />
      {/* ゴールド内枠 */}
      <rect x="68" y="61" width="38" height="38" rx="3" fill="#C8A84B" />
      {/* ホワイト A */}
      <text
        x="87"
        y="87"
        fontFamily="Georgia, serif"
        fontSize="26"
        fontWeight="700"
        fill="#FFFFFF"
        textAnchor="middle"
      >
        A
      </text>

      {/* 回路トレース × 3 */}
      <polyline
        points="119,70 148,70 148,48 172,48"
        stroke="#C8A84B"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
      <polyline
        points="119,85 152,85 152,112 172,112"
        stroke="#C8A84B"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      <polyline
        points="87,112 87,132 55,132"
        stroke="#C8A84B"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* エンドポイントドット */}
      <circle cx="172" cy="48" r="3.5" fill="#C8A84B" />
      <circle cx="172" cy="112" r="3.5" fill="#C8A84B" />
      <circle cx="55" cy="132" r="3.5" fill="#C8A84B" opacity="0.7" />

      {/* セパレーター */}
      <line
        x1="198"
        y1="46"
        x2="198"
        y2="114"
        stroke="#CCCCCC"
        strokeWidth="1"
      />

      {/* ワードマーク（1スペースで連結、tspanで2色） */}
      <text
        x="216"
        y="101"
        fontFamily="Georgia, serif"
        fontSize="34"
        fontWeight="700"
        letterSpacing="0.5"
      >
        <tspan fill="#0D1B3E">ArchiFlow </tspan>
        <tspan fill="#C8A84B">AI</tspan>
      </text>

      {/* タグライン */}
      <text
        x="216"
        y="128"
        fontFamily="Arial, sans-serif"
        fontSize="11"
        fill="#9A9080"
        letterSpacing="3"
      >
        ARCHITECTURE × FLOW × INTELLIGENCE
      </text>
    </svg>
  );
}
