function Avatar({
  src,
  alt = "Avatar",
  name = "",
  size = "md",
  className = "",
  ...props
}) {
  const sizes = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-14 h-14 text-lg",
  };

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${sizes[size] || sizes.md} rounded-full object-cover ${className}`}
        {...props}
      />
    );
  }

  return (
    <div
      className={`
        ${sizes[size] || sizes.md}
        rounded-full
        bg-[var(--color-primary)]
        text-white
        flex
        items-center
        justify-center
        font-semibold
        select-none
        ${className}
      `}
      aria-label={name || "Avatar"}
      {...props}
    >
      {initials || "?"}
    </div>
  );
}

export default Avatar;