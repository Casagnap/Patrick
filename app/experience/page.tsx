"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function Experience() {
  const [showOJTPhotos, setShowOJTPhotos] = useState(false)
  const [showCertificate, setShowCertificate] = useState(false)

  const experience = {
    company: "Municipal LGU of Pinamungajan",
    position: "IT Intern",
    duration: "June 2023 - September 2023",
    location: "Pinamungajan, Cebu",
    description:
      "I completed my On-the-Job Training (OJT) at the Municipal Local Government Unit (LGU) of Pinamungajan, gaining hands-on experience in IT support, system management, and local government operations. I contributed to daily IT tasks, learned to manage office systems, and collaborated with staff to improve workflows.",
    responsibilities: [
      "Assisted in computer troubleshooting and maintenance",
      "Installed and configured software applications",
      "Assisted in network setup and cable management",
      "Provided technical support to staff members",
      "Documented IT procedures and processes",
      "Monitored system performance and logs",
    ],
    toolsUsed: [
      "Windows OS",
      "Google Workspace",
      "LAN Tools",
      "Active Directory",
      "Network Monitoring Tools",
    ],
    reflection:
      "This OJT experience allowed me to apply academic knowledge in a real-world work environment. I learned teamwork, communication, and professionalism, enhanced my technical skills in troubleshooting and system maintenance, and gained confidence in supporting end-users and workplace tasks.",
  }

  const ojtPhotos = [
    "/ojt1.jpg",
    "/ojt2.jpg",
    "/ojt3.jpg",
    "/ojt4.jpg",
    "/ojt5.jpg",
    "/ojt6.jpg",
    "/ojt7.jpg",
    "/ojt8.jpg",
    "/ojt9.jpg",
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="section-container max-w-3xl mx-auto">
        <h1 className="section-title">OJT / Internship Experience</h1>

        {/* EXPERIENCE SECTION */}
        <div className="border-l-4 border-primary/40 pl-6 mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-medium text-foreground mb-1">
              {experience.position}
            </h2>
            <p className="text-lg text-primary font-medium">
              {experience.company}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {experience.duration} • {experience.location}
            </p>
          </div>

          <p className="text-foreground/70 leading-relaxed mb-6">
            {experience.description}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => setShowOJTPhotos(true)}
              className="inline-flex items-center justify-center px-6 py-3 
              bg-primary text-primary-foreground 
              font-semibold rounded-xl shadow-md 
              hover:opacity-90 transition"
            >
              View OJT Photos
            </button>

            <button
              onClick={() => setShowCertificate(true)}
              className="inline-flex items-center justify-center px-6 py-3 
              bg-primary text-primary-foreground 
              font-semibold rounded-xl shadow-md 
              hover:opacity-90 transition"
            >
              View OJT Certificate
            </button>
          </div>

          {/* RESPONSIBILITIES */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">
              Tasks & Responsibilities
            </h3>
            <ul className="space-y-3">
              {experience.responsibilities.map((responsibility, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-foreground/70 text-sm"
                >
                  <span className="text-primary/70 font-bold mt-1">✓</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TOOLS */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {experience.toolsUsed.map((tool, idx) => (
                <span key={idx} className="skill-badge text-xs">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* REFLECTION */}
        <div className="border-l-4 border-primary/40 pl-6 mb-12">
          <h2 className="text-lg font-medium text-foreground mb-4">
            OJT Reflection
          </h2>
          <p className="text-foreground/70 leading-relaxed">
            {experience.reflection}
          </p>
        </div>
      </section>

      {/* PHOTOS MODAL */}
      {showOJTPhotos && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setShowOJTPhotos(false)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowOJTPhotos(false)}
              className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur px-3 py-2 rounded-lg shadow hover:bg-white"
            >
              <X size={22} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ojtPhotos.map((photo, idx) => (
                <img
                  key={idx}
                  src={photo}
                  alt={`OJT Photo ${idx + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CERTIFICATE MODAL */}
      {showCertificate && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setShowCertificate(false)}
        >
          <div
            className="relative w-full max-w-5xl rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur px-3 py-2 rounded-lg shadow hover:bg-white"
            >
              <X size={22} />
            </button>

            <img
              src="/ojt-certificate.jpg"
              alt="OJT Certificate"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}