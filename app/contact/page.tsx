import { Mail, Linkedin, Github, Phone, Send } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "patrick@gmail.com",
      href: "mailto:patrick@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 (123) 456-7890",
      href: "tel:+63123456789",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/patricklester",
      href: "https://linkedin.com/in/patricklester",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/patricklester",
      href: "https://github.com/patricklester",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <section className="section-container">
        <h1 className="section-title">Get In Touch</h1>

        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-elevated flex flex-col items-start group"
              >
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <Icon className="text-accent group-hover:text-primary transition-colors" size={28} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{contact.label}</h3>
                <p className="text-muted-foreground group-hover:text-accent transition-colors">{contact.value}</p>
              </a>
            )
          })}
        </div>

        <div className="max-w-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/30 rounded-xl p-8 md:p-12 backdrop-blur-sm">
          <div className="flex items-start gap-3 mb-4">
            <Send className="text-accent mt-1" size={24} />
            <h2 className="text-3xl font-bold gradient-text">Let's Connect</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm always interested in hearing about new opportunities and connecting with fellow professionals in the IT
            industry. Whether you have a project proposal, job opportunity, or just want to discuss technology, feel
            free to reach out. I look forward to connecting with you!
          </p>
          <p className="text-muted-foreground/70 text-sm italic">Allow 24-48 hours for response</p>
        </div>
      </section>
    </div>
  )
}
