export default function Experience() {
  const experience = {
    company: "Tech Solutions Inc.",
    position: "IT Intern",
    duration: "June 2023 - August 2023",
    location: "Metro City",
    description:
      "My OJT experience at Tech Solutions Inc. provided valuable exposure to real-world IT operations and professional workplace practices. I worked alongside experienced IT professionals and contributed to various projects that enhanced my technical and soft skills.",
    responsibilities: [
      "Assisted in computer troubleshooting and maintenance",
      "Installed and configured software applications",
      "Assisted in network setup and cable management",
      "Provided technical support to staff members",
      "Documented IT procedures and processes",
      "Monitored system performance and logs",
    ],
    toolsUsed: ["Windows OS", "Google Workspace", "LAN Tools", "Active Directory", "Network Monitoring Tools"],
    reflection:
      "My OJT experience allowed me to apply my academic knowledge in a real work environment. I learned the importance of teamwork, communication, and professionalism. The experience enhanced my technical skills, particularly in troubleshooting and system maintenance, and helped me gain confidence in dealing with real clients and workplace challenges.",
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="section-container max-w-3xl">
        <h1 className="section-title">OJT / Internship Experience</h1>

        <div className="border-l-4 border-primary/40 pl-6 mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-medium text-foreground mb-1">{experience.position}</h2>
            <p className="text-lg text-primary font-medium">{experience.company}</p>
            <p className="text-sm text-muted-foreground mt-2">
              {experience.duration} • {experience.location}
            </p>
          </div>

          <p className="text-foreground/70 leading-relaxed mb-8">{experience.description}</p>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">
              Tasks & Responsibilities
            </h3>
            <ul className="space-y-3">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="flex items-start gap-3 text-foreground/70 text-sm">
                  <span className="text-primary/70 font-bold mt-1">✓</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

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

        <div className="border-l-4 border-primary/40 pl-6">
          <h2 className="text-lg font-medium text-foreground mb-4">OJT Reflection</h2>
          <p className="text-foreground/70 leading-relaxed">{experience.reflection}</p>
        </div>
      </section>
    </div>
  )
}
