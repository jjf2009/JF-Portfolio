const skillIcons = {
  JavaScript: {
    color: "#F7DF1E",
    bg: "#1a1700",
    svg: (
      <svg viewBox="0 0 24 24" fill="#F7DF1E" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
  },
  React: {
    color: "#61DAFB",
    bg: "#001519",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
"Next.js": {
  color: "#ffffff",
  bg: "#111111",
  svg: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#fff" />
      <path d="M7.5 16.5V7.5L16.5 16.5V7.5" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
},
  "Node.js": {
    color: "#339933",
    bg: "#001200",
    svg: (
      <svg viewBox="0 0 24 24" fill="#339933" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68C2.99 6.729 2.936 6.825 2.936 6.921v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.275-.924 1.604l-8.794 5.078C12.643 23.916 12.324 24 11.998 24zm2.742-6.963c-3.855 0-4.663-1.77-4.663-3.254 0-.142.114-.253.256-.253h1.139c.126 0 .232.092.252.217.172 1.158.684 1.742 3.016 1.742 1.854 0 2.643-.42 2.643-1.402 0-.566-.224-1-3.105-1.269-2.408-.238-3.896-.77-3.896-2.695 0-1.775 1.496-2.833 4.004-2.833 2.817 0 4.211.978 4.388 3.076.006.073-.02.142-.067.196-.048.05-.115.081-.186.081h-1.141c-.119 0-.222-.082-.247-.199-.274-1.218-.94-1.607-2.747-1.607-2.023 0-2.258.705-2.258 1.233 0 .642.278.826 3.011 1.187 2.703.357 3.987.863 3.987 2.763-.002 1.917-1.598 3.017-4.386 3.017z" />
      </svg>
    ),
  },
  "Express.js": {
    color: "#aaaaaa",
    bg: "#111111",
    svg: (
      <svg viewBox="0 0 24 24" fill="#aaaaaa" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
      </svg>
    ),
  },
  MongoDB: {
    color: "#47A248",
    bg: "#001200",
    svg: (
      <svg viewBox="0 0 24 24" fill="#47A248" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
      </svg>
    ),
  },
  "Tailwind CSS": {
    color: "#06B6D4",
    bg: "#001315",
    svg: (
      <svg viewBox="0 0 24 24" fill="#06B6D4" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  Python: {
    color: "#3776AB",
    bg: "#000d1a",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656L6.207 5.4h5.814v.8H3.9S0 5.77 0 11.933c0 6.163 3.405 5.943 3.405 5.943H5.6v-2.859s-.124-3.405 3.35-3.405h5.77s3.24.052 3.24-3.13V3.19S18.508 0 11.914 0zm-3.2 1.84a1.04 1.04 0 1 1 0 2.08 1.04 1.04 0 0 1 0-2.08z" fill="#3776AB" />
        <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656L17.793 18.6H11.98v-.8h8.12S24 18.23 24 12.067c0-6.163-3.405-5.943-3.405-5.943H18.4v2.859s.124 3.405-3.35 3.405H9.28s-3.24-.052-3.24 3.13V20.81S5.492 24 12.086 24zm3.2-1.84a1.04 1.04 0 1 1 0-2.08 1.04 1.04 0 0 1 0 2.08z" fill="#FFD43B" />
      </svg>
    ),
  },
  OpenCV: {
    color: "#5C3EE8",
    bg: "#0a0815",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="12" r="4.5" fill="#FF0000" />
        <circle cx="18" cy="12" r="4.5" fill="#00FF00" />
        <circle cx="12" cy="5" r="4.5" fill="#0000FF" />
      </svg>
    ),
  },
  "RESTful APIs": {
    color: "#FF6C37",
    bg: "#1a0800",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="9" width="6" height="6" rx="1" fill="#FF6C37" />
        <rect x="17" y="9" width="6" height="6" rx="1" fill="#FF6C37" />
        <line x1="7.5" y1="10.5" x2="15.5" y2="10.5" stroke="#FF6C37" strokeWidth="1.4" strokeLinecap="round" />
        <polygon points="15,8.8 18,10.5 15,12.2" fill="#FF6C37" />
        <line x1="16.5" y1="13.5" x2="8.5" y2="13.5" stroke="#FF6C37" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2,1.5" />
        <polygon points="9,11.8 6,13.5 9,15.2" fill="#FF6C37" />
      </svg>
    ),
  },
  Supabase: {
    color: "#3ECF8E",
    bg: "#001a0e",
    svg: (
      <svg viewBox="0 0 24 24" fill="#3ECF8E" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.58L11.9 1.036z" />
      </svg>
    ),
  },
Redux: {
  color: "#764ABC",
  bg: "#0f0518",
  image:"./redux.svg"
},
  i18n: {
    color: "#26A69A",
    bg: "#001413",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#26A69A" strokeWidth="1.5" />
        <path d="M12 3c-2.5 2.5-2.5 13.5 0 18" stroke="#26A69A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 3c2.5 2.5 2.5 13.5 0 18" stroke="#26A69A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.5 9h17M3.5 15h17" stroke="#26A69A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  Prisma: {
    color: "#2D3748",
    bg: "#0a0d12",
    svg: (
      <svg viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.807 18.285L13.553.756a1.324 1.324 0 0 0-1.129-.754 1.31 1.31 0 0 0-1.206.63L2.313 14.807a1.26 1.26 0 0 0 .027 1.324l4.23 6.875a1.428 1.428 0 0 0 1.157.713 1.4 1.4 0 0 0 .457-.075l12.997-4.709a1.306 1.306 0 0 0 .852-1.06 1.289 1.289 0 0 0-.226-.59zM18.405 19.2L7.632 22.858l-3.935-6.394 7.857-12.854z" />
      </svg>
    ),
  },
  RAG: {
    color: "#E879F9",
    bg: "#150018",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="2" width="11" height="14" rx="1.5" stroke="#E879F9" strokeWidth="1.5" />
        <path d="M6 6h5M6 9h5M6 12h3" stroke="#E879F9" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="17" r="4" stroke="#E879F9" strokeWidth="1.5" />
        <path d="M19.121 20.121L22 23" stroke="#E879F9" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
}
const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Prisma",
  "Supabase",
  "Tailwind CSS",
  "Python",
  "OpenCV",
  "Redux",
  "RESTful APIs",
  "i18n",
  "RAG",
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-border">
      <div className="container px-4 md:px-6">
        <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
          Skills
        </p>
        <h2 className="font-display text-4xl font-bold text-foreground mb-12 sm:text-5xl">
          What I work with
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 max-w-4xl">
          {skills.map((skill) => {
            const icon = skillIcons[skill]
            return (
              <div
                key={skill}
                className="group flex flex-col items-center gap-2 rounded-xl border border-border p-3 transition-all duration-300 hover:scale-105 cursor-default"
                style={{ background: icon?.bg ?? "transparent" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 18px 2px ${icon?.color ?? "#888"}44`
                  e.currentTarget.style.borderColor = `${icon?.color ?? "#888"}55`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = ""
                  e.currentTarget.style.borderColor = ""
                }}
              >
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  {icon?.svg ?? <img src={icon?.image} alt={skill} />}
                </div>
                <span className="text-xs font-medium text-foreground text-center leading-tight">
                  {skill}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
