"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"

import { FieldError } from "@/components/ui/field"

const formSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "Name is required."),
    email: z
        .string()
        .trim()
        .min(1, "Email is required.")
        .email("Invalid email address."),
    subject: z
        .string()
        .trim()
        .min(1, "Subject is required."),
    content: z
        .string()
        .trim()
        .min(1, "Content is required."),
})

export default function ContactForm() {
    const submitUrl = "/api/contact"

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            content: "",
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            const response = await fetch(submitUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error("Submit failed")
            }

            // 成功後的處理
            alert("Demo complete. No message was sent or stored.")
            form.reset()

        } catch (error) {
            console.error("Error!", error)
            alert("送出失敗，請稍後再試。")
        }
    }

    return (
        <>
            <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <div className="flex items-start gap-3 font-mono mb-6">
                            <label
                                htmlFor="form-name"
                                data-invalid={fieldState.invalid}
                                className="text-white pt-1 w-16"
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
                                    className="bg-white py-1.5 px-3 rounded-lg w-full"
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
                        <div className="flex items-start gap-3 font-mono mb-6">
                            <label
                                htmlFor="form-email"
                                data-invalid={fieldState.invalid}
                                className="text-white pt-1 w-16"
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
                                    className="bg-white py-1.5 px-3 rounded-lg w-full"
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
                        <div className="flex items-start gap-3 font-mono mb-6">
                            <label
                                htmlFor="form-subject"
                                data-invalid={fieldState.invalid}
                                className="text-white pt-1 w-16"
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
                                    className="bg-white py-1.5 px-3 rounded-lg w-full"
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
                        <div className="flex items-start gap-3 font-mono mb-6">
                            <label
                                htmlFor="form-content"
                                data-invalid={fieldState.invalid}
                                className="text-white pt-1 w-16"
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
                                    className="bg-white py-1.5 px-3 rounded-lg w-full"
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
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                    disabled={form.formState.isSubmitting}
                    className="cursor-pointer transition mr-4 text-white font-mono text-base bg-[#152652] hover:bg-[#07153A] hover:text-white border-0 py-4 px-10 rounded-none"
                >
                    Reset
                </Button>
                <Button
                    type="submit"
                    form="form-rhf-demo"
                    disabled={form.formState.isSubmitting}
                    className="cursor-pointer transition text-white font-mono text-base bg-[#B37D5F] hover:bg-[#865d46] py-4 px-10 rounded-none"
                >
                    {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
            </div>
        </>
    )
}
