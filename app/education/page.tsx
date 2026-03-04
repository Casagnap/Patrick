"use client"

export default function Education() {
  const educationData = [
    {
      level: "College",
      school: "Consolatrix College of Toledo City, Inc.",
      program: "Bachelor of Science in Information Technology",
      year: "2025 - 2026",
    },
    {
      level: "Senior High School",
      school: "Sta. Monica Academy Pinamungajan",
      strand: "STEM (Science, Technology, Engineering, Mathematics)",
      year: "2021 - 2022",
    },
    {
      level: "Junior High School",
      school: "Sta. Monica Academy Pinamungajan",
      year: "2019 - 2020",
    },
    {
      level: "Elementary",
      school: "Pinamungajan Central Elementary School",
      year: "2015 - 2016",
    },
  ]

  return (
    <div className="min-h-screen bg-background py-24">
      <section className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <h1 className="section-title text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Educational Background
        </h1>

        {/* Timeline */}
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative border-l-4 border-primary/30 pl-8 md:pl-12 hover:border-primary/60 transition-colors"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-2 md:-left-3 top-2 w-4 h-4 bg-primary rounded-full shadow-md"></span>

              {/* Education Content */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{edu.school}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{edu.level}</p>
                </div>
                <div className="text-sm font-medium text-primary mt-2 md:mt-0">{edu.year}</div>
              </div>

              {/* Program / Strand */}
              {edu.program || edu.strand ? (
                <p className="text-foreground/70 mt-1">{edu.program || edu.strand}</p>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}