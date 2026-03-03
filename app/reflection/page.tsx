export default function Reflection() {
  const learnings = [
    {
      title: "Technical Growth",
      description:
        "Through hands-on projects and real-world applications, I have deepened my understanding of software development principles, database design, and system architecture. Each project taught me valuable lessons about code optimization, scalability, and best practices.",
    },
    {
      title: "Problem-Solving Skills",
      description:
        "I learned to approach complex problems systematically, breaking them down into manageable components. Debugging challenging issues taught me persistence and creative thinking, essential skills in the IT industry.",
    },
    {
      title: "Teamwork & Communication",
      description:
        "My OJT experience emphasized the importance of effective communication and collaboration. Working with diverse team members taught me how to share ideas clearly, accept feedback, and work towards common goals.",
    },
    {
      title: "Adaptability & Learning",
      description:
        "The rapid evolution of technology requires continuous learning. I have developed the ability to quickly adapt to new tools, frameworks, and methodologies, staying current with industry trends.",
    },
    {
      title: "Professional Development",
      description:
        "Beyond technical skills, I have gained professional maturity through workplace exposure. Understanding workplace ethics, time management, and professional responsibilities has prepared me for a successful career transition.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="section-container">
        <h1 className="section-title">Reflection & Learning Journey</h1>

        <div className="max-w-4xl mb-12">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As an IT student, I have experienced challenges that helped me grow both personally and professionally.
              Through my projects, OJT, and academic activities, I learned to manage my time effectively, solve problems
              independently, and continuously adapt to new technologies. These experiences have prepared me for my
              future career in the IT industry and instilled in me a commitment to lifelong learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learnings.map((learning, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{learning.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{learning.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
