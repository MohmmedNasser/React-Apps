import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

// interface FormData {
//     name: string;
//     age: number;
//     email: string;
//     password: string;
//     confirmPassword: string;
// }

const schema = z
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
        gender: z
            .string("Please select gender")
            .refine((val) => val === "male" || val === "female", {
                message: "Please select gender",
            }),
        confirmPassword: z.string().min(6, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"],
    });

type FormData = z.infer<typeof schema>;

const From = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            name: "John",
            age: 18,
        },
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        // the data whil sent to backend
        const userData = {
            name: data.name,
            age: data.age,
            email: data.email,
            country: data.country,
            password: data.password,
            gender: data.gender,
        };

        console.log(userData);
        reset();

        // async example
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(data);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setError("root", {
                message: "Something wrong",
            });
        }
    };

    return (
        <div className="form-container">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">First Name</label>
                    <input type="text" id="name" {...register("name")} />
                    {errors.name && (
                        <span className="text-red">{errors.name?.message}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" {...register("age")} />
                    {errors.age && (
                        <span style={{ color: "red" }}>
                            {errors.age?.message}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email")} />
                    {errors.email && (
                        <span style={{ color: "red" }}>
                            {errors.email?.message}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select {...register("country")}>
                        <option value="">-- Select Country --</option>
                        <option value="USA">USA</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Germany">Germany</option>
                    </select>
                    {errors.country && (
                        <span style={{ color: "red" }}>
                            {errors.country?.message}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        {...register("password")}
                    />
                    {errors.password && (
                        <span style={{ color: "red" }}>
                            {errors.password?.message}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                        <span style={{ color: "red" }}>
                            {errors.confirmPassword?.message}
                        </span>
                    )}
                </div>

                <div className="form-group form-row">
                    <label>
                        <input type="checkbox" {...register("terms")} />
                        &nbsp; I agree to the terms & conditions
                    </label>
                    {errors.terms && (
                        <p style={{ color: "red" }}>{errors.terms.message}</p>
                    )}
                </div>

                <div className="form-group form-row">
                    <label>Gender</label>
                    <label>
                        <input
                            type="radio"
                            value="male"
                            {...register("gender")}
                        />
                        <span>Male</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="female"
                            {...register("gender")}
                        />{" "}
                        <span>Female</span>
                    </label>
                    {errors.gender && (
                        <p style={{ color: "red" }}>{errors.gender.message}</p>
                    )}
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                {errors.root && (
                    <span style={{ color: "red" }}>{errors.root?.message}</span>
                )}
            </form>
        </div>
    );
};

export default From;
