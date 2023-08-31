import React, { useState } from "react";

const Input = ({
    label = "Label",
    placeholder = "Placeholder",
    value = "",
    error = false,
    disabled = false,
    helperText = "",
    startIcon = "",
    endIcon = "",
    fullwidth = false,
    size = "md",
    multiline = false,
    row = "",
}) => {
    const [isFocus, setIsFocus] = useState(false);
    const handleFocus = () => setIsFocus(true);
    const handleBlur = () => setIsFocus(false);

    let borderStyle;
    if (isFocus && !error) {
        borderStyle = "border-blue-500 hover:border-gray-700";
    } else if (isFocus && error) {
        borderStyle = "border-red-500 hover:border-gray-700";
    } else if (!isFocus && error) {
        borderStyle = "border-red-500 hover:border-gray-700";
    } else {
        borderStyle = "border-gray-400 hover:border-gray-700";
    }

    const labelStyle = `text-sm ${error ? "text-red-500" : ""}`;

    const widthStyle = fullwidth ? "w-full" : "w-fit";

    const sizeStyle =
        size === "sm"
            ? "text-sm px-2 py-1"
            : size === "md"
            ? "text-base py-2 px-4"
            : "";

    const inputClass = `flex items-center  rounded-lg border   ${borderStyle} ${
        disabled ? "bg-gray-200" : ""
    } ${widthStyle} ${sizeStyle}`;

    return (
        <>
            <div>
                <label className={labelStyle}>{label}</label>
                <div className={inputClass}>
                    {startIcon && (
                        <i className={startIcon + " text-gray-500"}></i>
                    )}
                    {multiline ? (
                        <textarea
                            className="outline-0 border-none px-2 w-full py-1 resize-none"
                            placeholder={placeholder}
                            defaultValue={value}
                            disabled={disabled}
                            rows={row}
                        />
                    ) : (
                        <>
                            <input
                                type="text"
                                className="outline-0 border-none px-2 w-full py-1 "
                                placeholder={placeholder}
                                disabled={disabled}
                                defaultValue={value}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </>
                    )}

                    {endIcon && <i className={endIcon + " text-gray-500"}></i>}
                </div>
                {helperText && (
                    <label className={labelStyle}>{helperText}</label>
                )}
            </div>
        </>
    );
};

export default Input;
