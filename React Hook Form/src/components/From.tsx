import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
    name: string;
    age: number;
    email: string;
    password: string;
    confirmPassword: string;
}

const From = () => {
    // const [formData, setFormData] = useState<FormData>({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    // });

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [name]: value,
    //     }));
    // };

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log("Form submitted:", formData);
    // };

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm<FormData>({
        defaultValues: {
            name: "John",
            age: 18,
        },
    });

    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            // throw new Error();
            console.log(data);
            reset();
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
                    <input
                        type="text"
                        id="name"
                        {...register("name", {
                            required: "Name is required",
                            maxLength: {
                                value: 20,
                                message: "The text is too long",
                            },
                        })}
                    />
                    {errors.name && (
                        <span className="text-red">{errors.name?.message}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        {...register("age", {
                            required: "Age is required",
                            min: {
                                value: 18,
                                message: "Age must be greater than 18",
                            },
                            max: {
                                value: 99,
                                message: "Age must be less than 99",
                            },
                        })}
                    />
                    {errors.age && (
                        <span className="text-red">{errors.age?.message}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            validate: (value) => {
                                if (!value.includes("@")) {
                                    return "Email must include @";
                                }
                                return true;
                            },
                        })}
                    />
                    {errors.email && (
                        <span className="text-red">
                            {errors.email?.message}
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
                        <span className="text-red">
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
                        <span className="text-red">
                            {errors.confirmPassword?.message}
                        </span>
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

export default From;
