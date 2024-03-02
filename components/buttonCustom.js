import Link from "next/link";
import React from "react";
import { FORM_CLASSES } from "../lib/utils";
import Spinner from "./spinner";

const ButtonCustom = ({
  type,
  content,
  customClasses,
  action,
  loading,
  button_type,
}) => {
  return (
    <button
      type={type}
      className={`${FORM_CLASSES[button_type]} ${customClasses} `}
      // border-4 border-secondary hover:border-secondary hover:bg-secondary hover:text-white
    >
      {action && (
        <Link className="w-full h-full mt-16" href={action}>
          {content}
        </Link>
      )}
      {loading ? (
        <p className="flex items-center justify-center uppercase">
          <Spinner />
          Enviando
        </p>
      ) : !action ? (
        <p>{content}</p>
      ) : null}
    </button>
  );
};
export default ButtonCustom;
