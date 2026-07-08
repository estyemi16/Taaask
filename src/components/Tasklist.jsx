import { useState } from "react";
import { Check, Trash, CheckCircleIcon, Pencil } from "lucide-react";

const Tasklist = ({
  taskTitle,
  id,
  completed,
  createdAt,
  updatedAt,
  completedAt,
  handleDelete,
  toggleTask,
  handleEditing,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(taskTitle);

  const editTask = () => {
    handleEditing(id, newTitle);
    setIsEditing(false);
  };

  const formatTimestamp = (timestamp) =>
    timestamp ? new Date(timestamp).toLocaleString() : "";

  return (
    <div className="overflow-hidden">
      <div className="flex justify-center items-center">
        <div
          className={`w-full rounded-lg bg-primary-purple px-4 py-4 text-secondary-purple shadow-sm ${
            completed ? "text-white" : "text-secondary-purple"
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              {isEditing ? (
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  onBlur={editTask}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") editTask();
                  }}
                  className="w-full rounded-md border-secondary-purple bg-white/10 px-2 py-2 text-sm text-white outline-none focus:border-transparent focus:ring-2 focus:ring-secondary-purple"
                />
              ) : (
                <div
                  className={`text-sm md:text-base font-semibold wrap-break-word ${
                    completed ? "line-through opacity-70" : ""
                  }`}
                >
                  {taskTitle}
                </div>
              )}

              <div className="mt-2 flex flex-wrap gap-3 text-[0.72rem] text-white/70">
                <span>Created: {formatTimestamp(createdAt)}</span>
                {updatedAt && updatedAt !== createdAt && (
                  <span>Edited: {formatTimestamp(updatedAt)}</span>
                )}
                {completedAt && (
                  <span>Completed: {formatTimestamp(completedAt)}</span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              {!completed ? (
                <>
                  <Check
                    onClick={() => toggleTask(id)}
                    className="hover:opacity-70 transition-all duration-300 w-[1.2rem] cursor-pointer"
                  />
                  <Trash
                    onClick={() => handleDelete(id)}
                    className="hover:opacity-70 transition-all duration-300 w-[1.2rem] cursor-pointer"
                  />
                  <Pencil
                    onClick={() => setIsEditing(true)}
                    className="cursor-pointer hover:opacity-50 w-[1.2rem]"
                  />
                </>
              ) : (
                <CheckCircleIcon
                  className="hover:opacity-70 transition-all text-secondary-purple/70 w-[1.2rem] duration-300 cursor-pointer"
                  onClick={() => toggleTask(id)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tasklist;
