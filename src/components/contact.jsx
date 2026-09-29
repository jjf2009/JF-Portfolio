import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm as useHookForm } from "react-hook-form"
import { useForm as useFormspree, ValidationError } from "@formspree/react"
import Section from "./section"
import { profile, services } from "../lib/site-data"

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

  const field = "w-full rounded-sm border border-input bg-card px-3 py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
  const err = (e) => e && <p className="mt-1.5 text-xs text-destructive" role="alert">{e.message}</p>

  return (
    <Section id="contact" title="Contact">
      <div className="max-w-[38rem]">
        <p className="leading-relaxed text-foreground/85">
          I'm available for freelance projects and part-time roles. The quickest way to reach me is email; I usually reply within a day.
        </p>
        <p className="mt-4 font-serif text-3xl">
          <a className="link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </p>

        <p className="mt-8 text-sm text-muted-foreground">Things I can help with:</p>
        <ul className="mt-2 list-disc space-y-1 pl-4 text-foreground/85 marker:text-border">
          {services.map((s) => (
            <li key={s.title}>{s.title}</li>
          ))}
        </ul>

        <h3 className="mt-12 font-medium text-foreground">Or send a message</h3>
        {state.succeeded ? (
          <p className="mt-4 rounded-sm border border-border bg-card p-4 text-foreground/85" role="status">
            Thanks, your message was sent. I'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleHookSubmit(onSubmit)} className="mt-4 space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-muted-foreground">Name</label>
                <input id="name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} className={field} />
                {err(errors.name)}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-muted-foreground">Email</label>
                <input id="email" type="email" autoComplete="email" {...register("email")} aria-invalid={!!errors.email} className={field} />
                {err(errors.email)}
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm text-muted-foreground">Subject</label>
              <input id="subject" {...register("subject")} aria-invalid={!!errors.subject} className={field} />
              {err(errors.subject)}
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-muted-foreground">Message</label>
              <textarea id="message" rows={5} {...register("message")} aria-invalid={!!errors.message} className={`${field} resize-y`} />
              {err(errors.message)}
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="rounded-sm bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85 disabled:opacity-50"
            >
              {state.submitting ? "Sending…" : "Send message"}
            </button>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </form>
        )}
      </div>
    </Section>
  )
}
