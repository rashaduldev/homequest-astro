import React from "react";

const Button = ({
  label,
  link,
  style,
  className,
  rel
}: {
  label?: string;
  link?: string;
  style?: string;
  className?: string;
  rel?: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel={`noopener noreferrer ${
        rel ? (rel === "follow" ? "" : rel) : "nofollow"
      }`}
      className={`btn px-6 py-2 hover:no-underline ${className} ${
        style === "outline" ? "btn-outline-primary" : "btn-secondary"
      }`}
    >
      {label}
    </a>
  );
};

export default Button;
