"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { FieldError } from "@/components/FieldError"

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Invalid email address."),
  subject: z.string().trim().min(1, "Subject is required."),
  content: z.string().trim().min(1, "Content is required."),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      content: "",
    },
  })

  function onSubmit() {
    toast.success("Demo complete. Your message was not sent or stored.")
    form.reset()
  }

  return (
    <>
      <p className="mb-6 text-sm text-white/80">
        Portfolio demo — this form does not send or store messages.
      </p>
      <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="mb-6 flex items-start gap-3 font-mono">
              <label
                htmlFor="form-name"
                data-invalid={fieldState.invalid}
                className="w-16 pt-1 text-white"
              >
                Name
              </label>
              <div className="flex-auto">
                <input
                  {...field}
                  id="form-name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your name."
                  autoComplete="off"
                  className="w-full rounded-lg bg-white px-3 py-1.5"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </div>
            </div>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="mb-6 flex items-start gap-3 font-mono">
              <label
                htmlFor="form-email"
                data-invalid={fieldState.invalid}
                className="w-16 pt-1 text-white"
              >
                Email
              </label>
              <div className="flex-auto">
                <input
                  {...field}
                  id="form-email"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your email."
                  autoComplete="off"
                  className="w-full rounded-lg bg-white px-3 py-1.5"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </div>
            </div>
          )}
        />

        <Controller
          name="subject"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="mb-6 flex items-start gap-3 font-mono">
              <label
                htmlFor="form-subject"
                data-invalid={fieldState.invalid}
                className="w-16 pt-1 text-white"
              >
                Subject
              </label>
              <div className="flex-auto">
                <input
                  {...field}
                  id="form-subject"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter the subject."
                  autoComplete="off"
                  className="w-full rounded-lg bg-white px-3 py-1.5"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </div>
            </div>
          )}
        />

        <Controller
          name="content"
          control={form.control}
          render={({ field, fieldState }) => (
            <div className="mb-6 flex items-start gap-3 font-mono">
              <label
                htmlFor="form-content"
                data-invalid={fieldState.invalid}
                className="w-16 pt-1 text-white"
              >
                Content
              </label>
              <div className="flex-auto">
                <textarea
                  {...field}
                  id="form-content"
                  aria-invalid={fieldState.invalid}
                  placeholder="Type your message here."
                  autoComplete="off"
                  className="w-full rounded-lg bg-white px-3 py-1.5"
                  rows={6}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </div>
            </div>
          )}
        />
      </form>

      <div className="text-right">
        <button
          type="button"
          onClick={() => form.reset()}
          disabled={form.formState.isSubmitting}
          className="mr-4 w-[8rem] cursor-pointer rounded-none border-0 bg-[#152652] py-1 font-mono text-base text-white transition hover:bg-[#07153A] hover:text-white"
        >
          Reset
        </button>
        <button
          type="submit"
          form="form-rhf-demo"
          disabled={form.formState.isSubmitting}
          className="w-[8rem] cursor-pointer rounded-none bg-[#B37D5F] py-1 font-mono text-base text-white transition hover:bg-[#865d46]"
        >
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </>
  )
}
