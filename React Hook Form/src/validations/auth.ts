import { z } from "zod";

export const schema = z
    .object({
        name: z.string().min(1, "Name is required"),
        age: z.coerce
            .number()
            .min(18, "You must be at least 18 years old")
            .max(99, "You must be max 99 years old"),
        email: z.string().email("Invalid email address"),
        country: z.string().min(1, "Please select a country"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        terms: z.boolean().refine((val) => val === true, {
            message: "You must accept the terms and conditions",
        }),
        gender: z.string("Please select gender").refine((val) => val === "male" || val === "female", {
            message: "Please select gender",
        }),
        confirmPassword: z.string().min(6, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"],
    });

export type FormData = z.infer<typeof schema>;