function Modal({
  open,
  title,
  children,
  footer,
  onClose,
  className = "",
  ...props
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      {...props}
    >
      <div
        className={`
          w-full
          max-w-lg
          rounded-3xl
          bg-[var(--color-surface)]
          p-6
          shadow-xl
          ${className}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <h2 className="mb-5 text-2xl font-semibold text-[var(--color-text)]">
            {title}
          </h2>
        )}

        <div>{children}</div>

        {footer && (
          <div className="mt-6 flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;