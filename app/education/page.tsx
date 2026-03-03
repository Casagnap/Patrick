export default function Education() {
  const educationData = [
    {
      level: "College",
      school: "Consolatrix College of Toledo City, Inc.",
      program: "Bachelor of Science in Information Technology",
      year: "2025 - 2026 (expected)",
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
    <div className="min-h-screen bg-background">
      <section className="section-container">
        <h1 className="section-title">Educational Background</h1>

        <div className="space-y-6 max-w-3xl">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="border-l-2 border-primary/30 pl-6 py-2 hover:border-primary/60 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-medium text-foreground">{edu.school}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{edu.level}</p>
                </div>
                <div className="text-sm font-medium text-primary mt-2 md:mt-0">{edu.year}</div>
              </div>
              <p className="text-foreground/70">{edu.program || edu.strand}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
