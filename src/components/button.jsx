import PropTypes from "prop-types";
import { cx } from "../utils";

export function Button({ variant = "info", size = "md", ...props }) {
  const styles = {
    common:
      "rounded-md flex items-center justify-center transition duration-300 ease-linear gap-1.5 font-semibold",
    variants: {
      success: "bg-green-500 hover:bg-green-600 text-white",
      danger: "bg-red-500 hover:bg-red-600 text-white",
      info: "bg-blue-500 hover:bg-blue-600 text-white",
      indigo: "bg-indigo-500 hover:bg-indigo-600 text-white",
      warning: "bg-yellow-500 hover:bg-yellow-600 text-black",
    },
    sizes: {
      sm: "px-3 py-1.5 text-sm",
      md: "px-3.5 py-2 text-base",
      lg: "px-4 py-2.5 text-lg gap-2",
    },
  };

  return (
    <button
      {...props}
      className={cx(
        styles.common,
        styles.variants[variant],
        styles.sizes[size],
        props.className,
      )}
    />
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["success", "danger", "info", "indigo", "warning"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
