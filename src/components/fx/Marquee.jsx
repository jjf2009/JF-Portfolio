// Infinite horizontal ticker. Content is duplicated so the loop is seamless.
export default function Marquee({ children, reverse = false, speed = 30, className = "" }) {
  return (
    <div className={`marquee group flex overflow-hidden ${className}`}>
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className="marquee-track flex shrink-0 items-center gap-10 pr-10 group-hover:[animation-play-state:paused]"
          style={{ animationDuration: `${speed}s`, animationDirection: reverse ? "reverse" : "normal" }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
