import { Award } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "TESDA National Certificate II (NC II)",
      issuer: "Technical Education and Skills Development Authority",
      date: "June 2023",
      category: "Professional Certification",
    },
    {
      title: "Google Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "September 2023",
      category: "Cloud Computing",
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      date: "December 2023",
      category: "Networking",
    },
    {
      title: "JavaScript Advanced Concepts",
      issuer: "Coursera",
      date: "August 2023",
      category: "Web Development",
    },
    {
      title: "Database Design Fundamentals",
      issuer: "Udemy",
      date: "May 2023",
      category: "Database",
    },
    {
      title: "Web Development Bootcamp Certificate",
      issuer: "Codecademy",
      date: "March 2023",
      category: "Web Development",
    },
  ]

  const trainings = [
    "Data Science Fundamentals Workshop - March 2024",
    "Cybersecurity Best Practices Webinar - February 2024",
    "AI & Machine Learning Seminar - January 2024",
    "DevOps Tools and Practices - November 2023",
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="section-container">
        <h1 className="section-title">Certifications & Trainings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-lg font-medium text-foreground mb-6 pb-3 border-b-2 border-primary/30">
              Certifications
            </h2>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary/30 pl-4 py-2 hover:border-primary/60 transition-colors hover:pl-5"
                >
                  <div className="flex gap-3">
                    <Award className="text-primary/70 flex-shrink-0 mt-0.5" size={18} />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground text-sm">{cert.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                      <div className="flex items-center justify-between mt-2 gap-2">
                        <span className="skill-badge text-xs">{cert.category}</span>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-foreground mb-6 pb-3 border-b-2 border-primary/30">
              Trainings & Webinars
            </h2>
            <div className="space-y-3">
              {trainings.map((training, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary/30 pl-4 py-2 hover:border-primary/60 transition-colors hover:pl-5"
                >
                  <p className="text-foreground/70 text-sm">{training}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
