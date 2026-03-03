import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "RFID-Based Student Attendance System",
      category: "Full-Stack",
      tech: "PHP, MySQL, Bootstrap",
      description:
        "Automated attendance tracking using RFID technology with real-time dashboard and analytics.",
      year: "2023",
    },
    {
      title: "E-Commerce Platform",
      category: "Frontend",
      tech: "React, Tailwind CSS, Firebase",
      description:
        "Modern shopping experience with product catalog, cart management, and secure payments.",
      year: "2023",
    },
    {
      title: "Task Management App",
      category: "Full-Stack",
      tech: "Node.js, React, MongoDB",
      description:
        "Collaborative tool for team task tracking with real-time updates and notifications.",
      year: "2024",
    },
    {
      title: "Chat Application",
      category: "Frontend",
      tech: "React, WebSocket, Tailwind",
      description:
        "Real-time messaging platform with user authentication and conversation history.",
      year: "2024",
    },
  ]

  return (
    <div className="page-wrapper">
      <section className="content-wrapper">
        <h1 className="section-title animate-fade-in-up">
          Featured Projects
        </h1>

        <p
          className="text-lg text-slate-700 mb-16 animate-fade-in-up max-w-2xl"
          style={{ animationDelay: "0.1s" }}
        >
          A collection of projects showcasing web development, design, and
          technical problem-solving.
        </p>

        {/* ✅ MODERN GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              href="#"
              className="card-box animate-fade-in-up bg-white/70 backdrop-blur-sm
              hover:shadow-2xl hover:-translate-y-2
              hover:border-cyan-300
              transition-all duration-300"
              style={{ animationDelay: `${0.2 + idx * 0.08}s` }}
            >
              {/* Category */}
              <span className="inline-block mb-4 px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-full">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-cyan-600 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-700 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech + Year */}
              <div className="flex flex-wrap gap-3 items-center justify-between pt-4 border-t border-slate-200">
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(", ").map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-sm font-semibold text-slate-500">
                  {project.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
