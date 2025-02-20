import React, { useId } from "react";
import { cx } from "../utils";
import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";

export function Checkbox({ indeterminate, className = "", ...rest }) {
  const ref = React.useRef(null);
  const id = useId();
  const checkboxId = `checkbox-${id}`;
  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <label
      htmlFor={checkboxId}
      className={cx(
        "flex size-4 items-center justify-center rounded-[4px] border border-gray-400",
        (rest.checked || indeterminate) && "border-blue-600 bg-blue-500",
      )}
    >
      <input
        id={checkboxId}
        type="checkbox"
        ref={ref}
        className={cx("hidden bg-white", className)}
        {...rest}
      />
      <span className="text-white">
        {rest.checked ? (
          <CheckIcon strokeWidth={3.5} className="size-3" />
        ) : null}
        {indeterminate ? (
          <MinusIcon strokeWidth={3.5} className="size-3" />
        ) : null}
      </span>
    </label>
  );
}
