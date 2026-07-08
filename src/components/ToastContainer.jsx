import { CheckCircle2, AlertCircle, Info } from "lucide-react";

const toastStyles = {
  success: "border-emerald-500/20 bg-emerald-500/15 text-emerald-200",
  error: "border-rose-500/20 bg-rose-500/15 text-rose-200",
  warning: "border-amber-500/20 bg-amber-500/15 text-amber-200",
};

const toastIcons = {
  success: CheckCircle2,
  error: AlertCircle,
  warning: AlertCircle,
};

const ToastContainer = ({ toasts }) => {
  return (
    <div className="fixed right-4 top-4 z-60 flex w-[min(90vw,22rem)] flex-col gap-2">
      {toasts.map((toast) => {
        const Icon = toastIcons[toast.type] || Info;

        return (
          <div
            key={toast.id}
            className={`rounded-xl border px-4 py-3 shadow-lg backdrop-blur ${toastStyles[toast.type] || toastStyles.success}`}
          >
            <div className="flex items-start gap-2">
              <Icon className="mt-0.5 h-4 w-4 shrink-0" />
              <p className="text-sm font-medium">{toast.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToastContainer;
