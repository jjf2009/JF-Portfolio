import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { Send, MapPin, Globe, Clock, Mail } from "lucide-react"
import { useForm as useHookForm } from "react-hook-form"
import { useForm as useFormspree, ValidationError } from "@formspree/react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
})

export default function Contact() {
const {
  register,
  handleSubmit: handleHookSubmit,
  formState: { errors },
  reset,
} = useHookForm({
  resolver: zodResolver(contactSchema),
})

const [state, handleFormspreeSubmit] = useFormspree("xqegedag")

const onSubmit = async (data) => {
  await handleFormspreeSubmit(data)  // send data payload directly to Formspree
  if (!state.errors) {
    reset()
  }
}

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 md:py-32 bg-card relative overflow-hidden text-foreground">
      {/* Background divider */}
      <div className="absolute top-0 left-0 w-full h-px section-divider opacity-100" />
      
      {/* Decorative background element */}
      <div aria-hidden="true" className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen opacity-50 translate-x-1/3 translate-y-1/3" />

      <div className="container relative px-6 md:px-12 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
                06. Communication
              </span>
              <h2 id="contact-heading" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-sans">
                I'm currently looking for full-time opportunities and available for freelance web development projects. Whether you have a question or just want to engineer something cool — my inbox is always open.
              </p>
            </div>

             {/* SEO/GEO contact entity block */}
            <div className="space-y-6 pt-6 border-t border-border/40 font-mono text-sm sm:text-base">
              <a href="mailto:jaredfurtadowork@gmail.com" className="group flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors">
                <div className="w-10 h-10 flex items-center justify-center bg-background border border-border/60 rounded-sm group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>jaredfurtadowork@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-10 h-10 flex items-center justify-center bg-background border border-border/60 rounded-sm">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span>Based in Goa, India</span>
              </div>
              
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-10 h-10 flex items-center justify-center bg-background border border-border/60 rounded-sm">
                  <Globe className="w-4 h-4 text-success" />
                </div>
                <span>Open to remote opportunities</span>
              </div>
              
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-10 h-10 flex items-center justify-center bg-background border border-border/60 rounded-sm">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <span>Typically responds within 24 hours</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-background border border-border/60 p-8 sm:p-12 relative overflow-hidden rounded-sm shadow-2xl"
          >
            {/* Form decorative blur */}
            <div aria-hidden="true" className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[80px] pointer-events-none" />

            {state.succeeded ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-3xl font-display font-medium text-foreground">Message Sent</h3>
                <p className="text-muted-foreground text-lg max-w-sm">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => reset()}
                  className="mt-8 px-6 py-3 border border-border text-foreground hover:bg-muted font-mono text-sm transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleHookSubmit(onSubmit)} className="space-y-6 relative z-10" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-mono text-muted-foreground ml-1">Name</label>
                    <input
                      id="name"
                      name="name"
                      {...register("name")}
                      aria-invalid={!!errors.name}
                      className="w-full bg-card border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-destructive text-xs font-mono mt-2 ml-1" role="alert">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-mono text-muted-foreground ml-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      {...register("email")}
                      aria-invalid={!!errors.email}
                      className="w-full bg-card border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-destructive text-xs font-mono mt-2 ml-1" role="alert">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-mono text-muted-foreground ml-1">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    {...register("subject")}
                    aria-invalid={!!errors.subject}
                    className="w-full bg-card border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans"
                    placeholder="Freelance Project Inquiry"
                  />
                  {errors.subject && <p className="text-destructive text-xs font-mono mt-2 ml-1" role="alert">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-mono text-muted-foreground ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    {...register("message")}
                    aria-invalid={!!errors.message}
                    rows="5"
                    className="w-full bg-card border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans resize-y"
                    placeholder="Hello Jared, I have a project in mind..."
                  ></textarea>
                  {errors.message && <p className="text-destructive text-xs font-mono mt-2 ml-1" role="alert">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground rounded-md px-8 py-4 font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {state.submitting ?  (
                    "Sending..."
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
<ValidationError prefix="Message" field="message" errors={state.errors} />
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
