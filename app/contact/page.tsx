"use client"

import { Mail, Linkedin, Github, Phone, Send, FileText, X } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [showResume, setShowResume] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "patricklesterc@gmail.com",
      href: "mailto:patricklesterc@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 956 5069 652",
      href: "tel:+639565069652",
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
      value: "github.com/Casagnap",
      href: "https://github.com/Casagnap",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT COLUMN */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text leading-tight">
              Get In <br /> Touch
            </h1>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              I'm always open to discussing new opportunities, collaborations,
              or just talking about technology and development.
            </p>
          </div>

          <button
            onClick={() => setShowResume(true)}
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground rounded-xl shadow-md hover:opacity-90 transition"
          >
            <FileText size={20} />
            View Resume
          </button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">

          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 rounded-xl border border-primary/20 bg-background/50 backdrop-blur-md hover:shadow-lg hover:border-primary/40 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{contact.label}</h3>
                    <p className="text-muted-foreground text-sm">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            )
          })}

          {/* Connect Box */}
          <div className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Send className="text-accent" size={22} />
              <h2 className="text-xl font-bold">Let's Connect</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Whether you have a project idea, job opportunity,
              or just want to network, feel free to reach out.
              I usually respond within 24–48 hours.
            </p>
          </div>

        </div>
      </div>

      {/* MODAL */}
      {showResume && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    onClick={() => setShowResume(false)}
  >
    <div
      className="relative w-full max-w-4xl max-h-[90vh] overflow-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setShowResume(false)}
        className="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-2 rounded-lg shadow-md hover:bg-white z-10"
      >
        <X size={22} />
      </button>

      {/* Resume Image */}
      <img
        src="/resume.jpg"
        alt="Resume"
        className="w-full h-auto rounded-xl shadow-2xl"
      />
    </div>
  </div>
)}
    </div>
  )
}