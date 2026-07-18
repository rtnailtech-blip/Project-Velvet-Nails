function Card({
  children,
  className = "",
  as: Component = "div",
  ...props
}) {
  return (
    <Component
      className={`
        rounded-3xl
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-6
        shadow-sm
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Card;