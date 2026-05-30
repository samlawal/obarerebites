export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Oba Rere Bites logo"
    >
      {/* Crown icon */}
      <g transform="translate(0, 4)">
        {/* Crown base */}
        <rect x="4" y="30" width="32" height="6" rx="2" fill="#F9A825" />
        {/* Crown points */}
        <path
          d="M4 30L8 12L16 22L20 8L24 22L32 12L36 30"
          stroke="#F9A825"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Crown gems */}
        <circle cx="20" cy="14" r="2.5" fill="#C62828" />
        <circle cx="10" cy="20" r="2" fill="#E65100" />
        <circle cx="30" cy="20" r="2" fill="#E65100" />
      </g>

      {/* "Oba Rere" text */}
      <text
        x="46"
        y="28"
        fontFamily="Arial, sans-serif"
        fontWeight="800"
        fontSize="24"
        fill="#F9A825"
        letterSpacing="0.5"
      >
        Oba Rere
      </text>

      {/* "Bites" text */}
      <text
        x="183"
        y="28"
        fontFamily="Arial, sans-serif"
        fontWeight="800"
        fontSize="24"
        fill="#C62828"
        letterSpacing="0.5"
      >
        Bites
      </text>

      {/* Tagline */}
      <text
        x="46"
        y="42"
        fontFamily="Arial, sans-serif"
        fontWeight="500"
        fontSize="8"
        fill="currentColor"
        opacity="0.5"
        letterSpacing="2"
      >
        BOLD NAIJA FLAVOURS
      </text>
    </svg>
  );
}
