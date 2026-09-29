// Optional `devops` field marks a project that is being taken through DevOps work
// (shown next to the project and listed under "Now"), e.g.
//   devops: { status: "In progress", summary: "Containerising and automating deploys", stack: ["Docker", "GitHub Actions", "AWS"] },
export const projectsData = [
  {
    title: "IntentOS",
    description:
      "An interface where you describe what you want to get done and it generates a workflow for it. Built on Tambo AI's generative UI components.",
    image: "/images/indentos.webp",
    imageFallback: "/images/indentos.jpg",
    imageAlt: "IntentOS interface screenshot",
    web: "",
    git: "https://github.com/jjf2009/IntentOS",
    technologies: ["Next.js", "React", "Tailwind CSS", "Tambo AI"],
  },
  {
    title: "Ride Buddy",
    description:
      "Carpooling for students at Goa College of Engineering. You can offer or find a ride, see it on a map and track location live. Sign-in is handled with Firebase.",
    image: "/images/Ridebuddy.webp",
    imageFallback: "/images/Ridebuddy.png",
    imageAlt: "Ride Buddy — campus carpooling platform interface",
    web: "",
    git: "https://github.com/jjf2009/RideBuddy_Forntend",
    technologies: ["React", "Redux", "Firebase", "Leaflet"],
  },
  {
    title: "OpenCV Projects",
    description:
      "Small computer vision experiments with YOLO and MediaPipe: object detection, hand-gesture tracking and face recognition, all running locally in real time.",
    image: "/images/opencv.webp",
    imageFallback: "/images/opencv.jpg",
    imageAlt: "OpenCV project showing real-time computer vision detection",
    web: "",
    git: "https://github.com/jjf2009/OpenCV_Projects",
    technologies: ["Python", "OpenCV", "MediaPipe", "YOLO"],
  },
  {
    title: "Nike Landing Page",
    description:
      "A close copy of Nike's landing page, built to practise component structure and responsive layouts with Tailwind.",
    image: "/images/nike-page.webp",
    imageFallback: "/images/nike-page.png",
    imageAlt: "Nike landing page clone screenshot",
    web: "https://nike-landing-lac.vercel.app/",
    git: "https://github.com/jjf2009/Nike_New",
    technologies: ["React", "Tailwind CSS", "Vite"],
  },
]