export default function Declaration() {
  return (
    <div className="min-h-screen bg-background">
      <section className="section-container max-w-4xl">
        <h1 className="section-title">Declaration & Academic Integrity</h1>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <p className="font-semibold text-foreground text-xl">DECLARATION OF AUTHENTICITY</p>
              <p className="mt-4">
                I hereby declare that all information, projects, and contents presented in this e-portfolio are my
                original work. Proper acknowledgment has been given where necessary. This portfolio is created in
                compliance with academic honesty and data privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Acknowledgments</h2>
              <p>
                I acknowledge the guidance and support provided by my instructors, mentors, and colleagues throughout my
                academic journey. Where external resources, libraries, or open-source code have been utilized,
                appropriate citations and references have been provided.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Data Privacy Compliance</h2>
              <p>
                This e-portfolio has been created in accordance with relevant data privacy regulations. Any personal
                information, company names, or sensitive details have been anonymized or used with appropriate consent
                to protect privacy and confidentiality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Academic Integrity</h2>
              <p>
                I understand that academic integrity is fundamental to my education and professional growth. I commit to
                upholding the highest standards of honesty, ethical conduct, and intellectual responsibility in all my
                academic and professional endeavors.
              </p>
            </div>

            <div className="border-t border-border pt-6 mt-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Student Name:</span> John Doe
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <span className="font-semibold text-foreground">Date:</span> January 2024
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <span className="font-semibold text-foreground">Program:</span> Bachelor of Science in Information
                Technology
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
