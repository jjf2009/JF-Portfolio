// Optional `devops` field marks a project that is being taken through DevOps work
// (shown next to the project and listed under "Now"), e.g.
//   devops: { status: "In progress", summary: "Containerising and automating deploys", stack: ["Docker", "GitHub Actions", "AWS"] },
export const projectsData = [
  {
    title: "IntentOS",
    description:
      "An experiment with Tambo AI's generative UI. You describe what you want to do, and it tries to put together a workflow for it.",
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
      "A learning project with React, Redux and Firebase: carpooling for students at Goa College of Engineering. You can offer or find a ride and see it on a map.",
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
      "Small experiments I did to learn computer vision with YOLO and MediaPipe: object detection, hand tracking and face recognition.",
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
      "A copy of Nike's landing page that I made to practise responsive layouts with Tailwind.",
    image: "/images/nike-page.webp",
    imageFallback: "/images/nike-page.png",
    imageAlt: "Nike landing page clone screenshot",
    web: "https://nike-landing-lac.vercel.app/",
    git: "https://github.com/jjf2009/Nike_New",
    technologies: ["React", "Tailwind CSS", "Vite"],
  },
]