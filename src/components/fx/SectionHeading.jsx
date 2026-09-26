import { motion } from "framer-motion"

// Eyebrow label + headline whose words rise into view one by one.
export default function SectionHeading({ index, label, title, id, className = "mb-12" }) {
  const words = title.split(" ")
  return (
    <div className={className}>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-primary"
      >
        <span>{index}.</span>
        <span className="h-px w-10 bg-primary/60" />
        <span>{label}</span>
      </motion.p>
      <motion.h2
        id={id}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.07 }}
        className="font-display text-4xl font-bold text-foreground sm:text-5xl md:text-6xl"
      >
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
            <motion.span
              className="inline-block"
              variants={{ hidden: { y: "110%" }, shown: { y: 0 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
              {i < words.length - 1 && " "}
            </motion.span>
          </span>
        ))}
      </motion.h2>
    </div>
  )
}
