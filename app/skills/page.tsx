export default function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      items: ["JavaScript", "PHP", "Java", "Python", "SQL"],
    },
    {
      title: "Frontend",
      items: ["React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "PHP", "REST APIs", "Firebase"],
    },
    {
      title: "Database",
      items: ["MySQL", "MongoDB", "Firebase Realtime", "SQL Design"],
    },
    {
      title: "Tools & Platforms",
      items: ["Git/GitHub", "VS Code", "Linux", "Windows", "Figma"],
    },
    {
      title: "Soft Skills",
      items: ["Problem Solving", "Teamwork", "Communication", "Adaptability", "Learning"],
    },
  ]

  return (
    <div className="page-wrapper">
      <div className="h-20" />
      <section className="content-wrapper">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">Skills & Expertise</h1>
          <p className="text-lg text-secondary mb-16 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Technical skills and competencies developed through education and practical experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillGroups.map((group, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 border border-border hover:border-primary transition-colors animate-fade-in-up"
                style={{ animationDelay: `${0.2 + idx * 0.08}s` }}
              >
                <h3 className="text-lg font-bold text-foreground mb-6">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-sm text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
