import { useEffect, useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import Tasklist from "./Tasklist";
import Listheader from "./Listheader";

const Card = () => {
  // const [count, setCount] = useState(0);
  const [allTasks, setAllTasks] = useState(() => {
    const storedTasks =
      typeof window !== "undefined" ? localStorage.getItem("allTasks") : null;
    const parsedTasks = storedTasks ? JSON.parse(storedTasks) : [];
    return parsedTasks.map((task) => ({
      ...task,
      createdAt: task.createdAt ?? new Date().toISOString(),
      updatedAt: task.updatedAt ?? task.createdAt ?? new Date().toISOString(),
      completedAt: task.completedAt ?? null,
    }));
  });
  const [task, setTask] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("default");
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const [deleteTaskTitle, setDeleteTaskTitle] = useState("");

  const filteredTasks = allTasks
    .filter((task) => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.trim().toLowerCase()),
    );

  const pendingTasks = filteredTasks.filter((task) => !task.completed);
  const completedTasks = filteredTasks.filter((task) => task.completed);

  useEffect(() => {
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
  }, [allTasks]);

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() !== "") {
      const timestamp = new Date().toISOString();
      const newTask = {
        id: Date.now(),
        title: task,
        completed: false,
        createdAt: timestamp,
        updatedAt: timestamp,
        completedAt: null,
      };

      setAllTasks([...allTasks, newTask]);
      setTask("");
    }
  };

  useEffect(() => {
    console.log(allTasks);
  }, [allTasks]);

  // DELETE
  const handleDeleteRequest = (id) => {
    const taskToDelete = allTasks.find((task) => task.id === id);
    setDeleteTaskTitle(taskToDelete?.title ?? "this task");
    setDeleteTaskId(id);
  };

  const handleConfirmDelete = () => {
    if (deleteTaskId === null) return;
    setAllTasks(allTasks.filter((task) => task.id !== deleteTaskId));
    setDeleteTaskId(null);
    setDeleteTaskTitle("");
  };

  const cancelDelete = () => {
    setDeleteTaskId(null);
    setDeleteTaskTitle("");
  };

  // COMPLETED & UNCOMPLETED
  const toggleTask = (id) => {
    setAllTasks(
      allTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              completedAt: task.completed ? null : new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            }
          : task,
      ),
    );
  };

  // EDIT
  const handleEditing = (id, newTitle) => {
    setAllTasks(
      allTasks.map((task) =>
        task.id === id
          ? { ...task, title: newTitle, updatedAt: new Date().toISOString() }
          : task,
      ),
    );
  };

  return (
    <div className="md:w-[60%] w-full lg:w-[40%] rounded-3xl sm:w-[40%] h-[80%] p-10 bg-light-purple/70">
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-full flex flex-col gap-4 sticky top-0 z-20 bg-light-purple/90 backdrop-blur-sm py-4"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="flex-1">
            <InputField
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter your task"
            />
          </div>
          <Button handleSubmit={handleSubmit} value={"+"} css={"py-2"} />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-row flex-nowrap gap-2 overflow-x-auto">
            {[
              { value: "default", label: "Default" },
              { value: "all", label: "All" },
              { value: "active", label: "Active" },
              { value: "completed", label: "Completed" },
            ].map((option) => (
              <button
                type="button"
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  filter === option.value
                    ? "bg-secondary-purple text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-72">
            <InputField
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tasks"
            />
          </div>
        </div>
      </form>

      <div className="my-4">
        <div className="text-secondary-purple italic mb-2 font-light text-sm">
          {allTasks.length < 1 ? (
            <Listheader title={"Tasks Unavailable, add Tasks"} count={0} />
          ) : filteredTasks.length < 1 ? (
            <Listheader title={"No matching tasks"} count={0} />
          ) : filter === "default" ? (
            null
          ) : (
            <Listheader
              title={
                filter === "all"
                  ? "All Tasks"
                  : filter === "active"
                  ? "Active Tasks"
                  : "Completed Tasks"
              }
              count={filteredTasks.length}
            />
          )}
        </div>

        {filter === "default" ? (
          <>
            <div className="text-white mb-2 italic font-light text-sm">
              {pendingTasks.length > 0 && (
                <div>
                  <Listheader title={"Tasks To Do"} count={pendingTasks.length} />
                  <div className="flex flex-col gap-2">
                    {pendingTasks.map((item) => (
                      <Tasklist
                        key={item.id}
                        id={item.id}
                        taskTitle={item.title}
                        completed={item.completed}
                        createdAt={item.createdAt}
                        updatedAt={item.updatedAt}
                        completedAt={item.completedAt}
                        handleDelete={handleDeleteRequest}
                        toggleTask={toggleTask}
                        handleEditing={handleEditing}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="text-white mb-2 italic font-light text-sm">
              {completedTasks.length > 0 && (
                <div className="mt-6">
                  <Listheader title={"Done"} count={completedTasks.length} />
                  <div className="flex flex-col gap-2">
                    {completedTasks.map((item) => (
                      <Tasklist
                        key={item.id}
                        id={item.id}
                        taskTitle={item.title}
                        completed={item.completed}
                        createdAt={item.createdAt}
                        updatedAt={item.updatedAt}
                        completedAt={item.completedAt}
                        handleDelete={handleDeleteRequest}
                        toggleTask={toggleTask}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-white mb-2 italic font-light text-sm">
            <div className="flex flex-col gap-2">
              {filteredTasks.map((item) => (
                <Tasklist
                  key={item.id}
                  id={item.id}
                  taskTitle={item.title}
                  completed={item.completed}
                  createdAt={item.createdAt}
                  updatedAt={item.updatedAt}
                  completedAt={item.completedAt}
                  handleDelete={handleDeleteRequest}
                  toggleTask={toggleTask}
                  handleEditing={handleEditing}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {deleteTaskId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Confirm Delete
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Are you sure you want to delete "{deleteTaskTitle}"?
              This action cannot be undone.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={cancelDelete}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Delete Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
