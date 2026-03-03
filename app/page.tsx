import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Home() {
  return (
    <div className="page-wrapper">
      <section className="content-wrapper">
        <div className="py-20">
          <div className="mb-16 animate-fade-in-up">
            <p className="text-sm font-bold text-cyan-600 mb-4 uppercase tracking-widest">Welcome</p>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6" style={{ letterSpacing: "-0.02em" }}>
              Hi, I'm <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"> Patrick Lester Casagnap</span>
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-2xl mb-8">
              An IT student and aspiring developer passionate about creating elegant digital solutions. I specialize in web development, database design, and building user-centered experiences that matter.
            </p>
            <Link href="/projects" className="btn-primary inline-flex items-center gap-3">
              Explore My Work <ArrowUpRight size={20} />
            </Link>
          </div>

          <div className="mt-24 pt-12 border-t-3 border-cyan-400">
            <h2 className="text-2xl font-bold text-foreground mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "RFID Attendance System",
                  description: "Real-time student attendance tracking with RFID technology",
                  tags: ["PHP", "MySQL", "Bootstrap"],
                },
                {
                  title: "Task Management App",
                  description: "Collaborative tool for team task tracking and management",
                  tags: ["React", "Node.js", "MongoDB"],
                },
              ].map((project) => (
                <div key={project.title} className="card-box group animate-slide-in-right hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyan-600 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
