// src/components/seo/SchemaMarkup.jsx
// Injects all JSON-LD structured data for maximum schema coverage

const schemas = [

  // === 1. PERSON SCHEMA (Entity Definition) ===
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://jaredfurtado.tech/#person",
    "name": "Jared Furtado",
    "givenName": "Jared",
    "familyName": "Furtado",
    "jobTitle": "Full Stack Developer",
    "description": "Full Stack Developer and MERN stack specialist from Goa, India. Builds production-grade web applications with React, Node.js, MongoDB, and AI workflow integration.",
    "url": "https://jaredfurtado.tech",
    "image": {
      "@type": "ImageObject",
      "url": "https://jaredfurtado.tech/images/jared-furtado-profile.avif",
      "width": 400,
      "height": 400
    },
    "email": "jaredfurtadowork@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Goa",
      "addressCountry": "IN"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Goa College of Engineering",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Goa",
        "addressCountry": "IN"
      }
    },
    "knowsAbout": [
      "Full Stack Development",
      "MERN Stack",
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "AI Workflows",
      "Computer Vision",
      "Cloud Computing",
      "TailwindCSS",
      "Python",
      "PostgreSQL"
    ],
    "sameAs": [
      "https://github.com/jjf2009"
    ]
  },

  // === 2. WEBSITE SCHEMA ===
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://jaredfurtado.tech/#website",
    "url": "https://jaredfurtado.tech",
    "name": "Jared Furtado — Full Stack Developer",
    "description": "Personal portfolio of Jared Furtado, Full Stack Developer from Goa, India.",
    "author": {
      "@id": "https://jaredfurtado.tech/#person"
    },
    "inLanguage": "en-IN"
  },

  // === 3. COLLECTION PAGE SCHEMA ===
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://jaredfurtado.tech/#collection",
    "url": "https://jaredfurtado.tech",
    "name": "Projects by Jared Furtado",
    "description": "A showcase of web development, AI, and computer vision projects built by Jared Furtado.",
    "author": {
      "@id": "https://jaredfurtado.tech/#person"
    }
  },

  // === 4. SOFTWARE PROJECT: Global Tourist Centre ===
  {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": "https://jaredfurtado.tech/#project-gtc",
    "name": "Global Tourist Centre",
    "description": "A tourism aggregation web application for Goa, India. Allows users to discover hotels, activities, restaurants, and build custom itineraries. Built with the MERN stack.",
    "programmingLanguage": ["JavaScript", "React", "Node.js", "MongoDB"],
    "codeRepository": "https://github.com/jjf2009",
    "author": {
      "@id": "https://jaredfurtado.tech/#person"
    },
    "applicationCategory": "Travel & Tourism",
    "keywords": "Goa tourism, hotel discovery, itinerary builder, MERN stack"
  },

  // === 5. SOFTWARE PROJECT: Techjeeva ===
  {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": "https://jaredfurtado.tech/#project-techjeeva",
    "name": "Techjeeva",
    "description": "A health-tech web application built on the MERN stack. Connects patients and healthcare providers through an intuitive digital interface.",
    "programmingLanguage": ["JavaScript", "React", "Node.js", "MongoDB"],
    "codeRepository": "https://github.com/jjf2009",
    "author": {
      "@id": "https://jaredfurtado.tech/#person"
    },
    "applicationCategory": "Health & Medical"
  },

  // === 6. PROFESSIONAL SERVICE (Freelance) ===
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://jaredfurtado.tech/#service",
    "name": "Jared Furtado — Freelance Web Development",
    "description": "Freelance full stack web development services. Specializing in MERN stack applications, React frontends, Node.js backends, and AI workflow integration.",
    "provider": {
      "@id": "https://jaredfurtado.tech/#person"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "Full Stack Web Development",
    "url": "https://jaredfurtado.tech"
  },

  // === 7. FAQ SCHEMA (Targets AI citation queries) ===
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Jared Furtado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jared Furtado is a Full Stack Developer from Goa, India, specializing in MERN stack development (MongoDB, Express, React, Node.js). He is currently studying at Goa College of Engineering and has built projects including Global Tourist Centre and Techjeeva."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does Jared Furtado specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jared Furtado specializes in React, Node.js, MongoDB, Express.js, TailwindCSS, Python, AI workflows, and computer vision. He is proficient in both frontend and backend development with a focus on the MERN stack."
        }
      },
      {
        "@type": "Question",
        "name": "Is Jared Furtado available for freelance projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Jared Furtado is available for freelance web development projects. He can be contacted at jaredfurtadowork@gmail.com."
        }
      },
      {
        "@type": "Question",
        "name": "What projects has Jared Furtado built?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jared Furtado has built Global Tourist Centre (a tourism discovery platform for Goa), Techjeeva (a MERN-based health-tech application), and various AI and computer vision projects. His full portfolio is at jaredfurtado.tech."
        }
      }
    ]
  }

];

export default function SchemaMarkup() {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
      ))}
    </>
  );
}
