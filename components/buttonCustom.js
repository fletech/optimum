import Link from "next/link";
import React from "react";
import { FORM_CLASSES } from "../lib/utils";

const ButtonCustom = ({
  type,
  content,
  customClasses,
  action,
  submit,
  handler,
}) => {
  return (
    <button
      className={`${FORM_CLASSES[type]} ${customClasses} `}
      onClick={submit && ((e) => handler(e))}
      // border-4 border-secondary hover:border-secondary hover:bg-secondary hover:text-white
    >
      {action && <Link href={action}>{content}</Link>}
      {submit && <p>{content}</p>}
    </button>
  );
};
export default ButtonCustom;
