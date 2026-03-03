import Link from "next/link"

export default function About() {
  return (
    <div className="page-wrapper">
      <section className="content-wrapper">
        <h1 className="section-title animate-fade-in-up">About Me</h1>

        <div className="max-w-3xl space-y-12">
          <div className="card-box animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl font-bold text-foreground mb-4 text-cyan-600">Background</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm a Bachelor of Science in Information Technology student with a strong passion for software development and IT support. Throughout my academic journey, I've developed technical skills in web development, database management, and system troubleshooting. My internship experience has enhanced my ability to work in professional environments and collaborate effectively with teams.
            </p>
          </div>

          <div className="card-box animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-bold text-foreground mb-4 text-blue-600">Passion & Drive</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm passionate about creating efficient, user-friendly solutions that solve real-world problems. Whether it's building web applications, designing databases, or providing technical support, I approach every challenge with dedication and a commitment to excellence. I believe great technology comes from understanding both the technical and human sides of problems.
            </p>
          </div>

          <div className="card-box animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl font-bold text-foreground mb-4 text-cyan-600">Philosophy</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              I believe in continuous learning, effective communication, and teamwork. These principles, combined with technical expertise, enable me to work effectively in diverse environments and contribute meaningfully to organizational goals. I'm committed to staying current with emerging technologies and industry best practices.
            </p>
          </div>

          <div className="card-box bg-gradient-to-r from-cyan-50 to-blue-50 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-2xl font-bold text-foreground mb-4">What I'm Currently Exploring</h2>
            <ul className="space-y-3 text-lg text-slate-700">
              <li>• Advanced React patterns and state management</li>
              <li>• Cloud technologies and deployment strategies</li>
              <li>• Machine learning applications in web development</li>
              <li>• Building scalable backend systems</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
