import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
    label: string;
    type?: string;
    placeholder: string;
    register: UseFormRegisterReturn<string>;
    error?: FieldError | undefined;
    as?: "input" | "select";
    options?: { value: string; label: string }[];
};

const InputComponent = ({
    label,
    type = "text",
    placeholder,
    register,
    error,
    as = "input",
    options = [],
}: InputProps) => (
    <div className="form-group">
        <label htmlFor="{label}">{label}</label>
        {as === "select" ? (
            <select id="{label}" {...register}>
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        ) : (
            <input
                type={type}
                id={label}
                {...register}
                placeholder={placeholder}
            />
        )}
        {error && typeof error.message === "string" && (
            <span className="text-red">{error.message}</span>
        )}
    </div>
);

export default InputComponent;
