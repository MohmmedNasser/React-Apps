import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import InputComponent from "./components/InputComponent";
import { schema, type FormData } from "./validations/auth";

const FormPage = () => {
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
            setError("root", { type: "manual", message: "Something wrong" });
        }
    };

    return (
        <div className="form-container">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputComponent
                    label="Name"
                    placeholder="Enter Full Name"
                    register={register("name")}
                    error={errors.name}
                />

                <InputComponent
                    label="Age"
                    placeholder="Enter your age"
                    register={register("age")}
                    error={
                        errors.age as
                            | import("react-hook-form").FieldError
                            | undefined
                    }
                />

                <InputComponent
                    label="Email"
                    placeholder="email"
                    register={register("email")}
                    error={errors.email}
                />

                <InputComponent
                    label="Country"
                    placeholder="-- Select Country --"
                    as="select"
                    register={register("country")}
                    options={[
                        { value: "USA", label: "USA" },
                        { value: "UK", label: "United Kingdom" },
                        { value: "Canada", label: "Canada" },
                        { value: "Germany", label: "Germany" },
                    ]}
                    error={errors.country}
                />

                <InputComponent
                    label="Password"
                    type="password"
                    placeholder="password"
                    register={register("password")}
                    error={errors.password}
                />

                <InputComponent
                    label="ConfirmPassword"
                    type="password"
                    placeholder="confirmPassword"
                    register={register("confirmPassword")}
                    error={errors.confirmPassword}
                />

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
                    <span className="text-red">{errors.root?.message}</span>
                )}
            </form>
        </div>
    );
};

export default FormPage;
