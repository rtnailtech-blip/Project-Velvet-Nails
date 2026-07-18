import { Button } from ".";
import Modal from "./Modal";

function ConfirmDialog({
  open,
  title = "Confirm Action",
  message = "Are you sure you want to continue?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  ...props
}) {
  return (
    <Modal
      open={open}
      title={title}
      onClose={onCancel}
      footer={
        <>
          <Button variant="secondary" onClick={onCancel}>
            {cancelText}
          </Button>

          <Button variant="danger" onClick={onConfirm}>
            {confirmText}
          </Button>
        </>
      }
      {...props}
    >
      <p className="text-[var(--color-muted)]">
        {message}
      </p>
    </Modal>
  );
}

export default ConfirmDialog;