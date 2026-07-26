function Card({
  children,
  className = "",
  as: Component = "div",
  interactive = false,
  ...props
}) {
  return (
    <Component
      className={`
        rounded-[var(--radius-lg)]
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-6
        shadow-[var(--shadow-sm)]
        transition-all
        duration-300
        ${
          interactive
            ? "cursor-pointer hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
            : ""
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Card;