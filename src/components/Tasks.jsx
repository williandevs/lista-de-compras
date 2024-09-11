import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    // Construindo a URL usando Template Strings
    navigate(
      `/task?title=${encodeURIComponent(
        task.title
      )}&description=${encodeURIComponent(task.description)}`
    );
  }

  return (
    <div>
      <h1 className="p-2 bg-transparen text-2xl text-white mt-2 mb-2">
        Lista de Compras
      </h1>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow-sm">
        {tasks.map((task) => (
          <li key={task.id} className="flex space-x-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-blue-900 w-full text-white p-2 rounded ${
                task.isCompleted ? "line-through decoration-red-700" : ""
              }`}
            >
              {task.title}
            </button>

            <button
              onClick={() => onSeeDetailsClick(task)}
              className="bg-blue-900 p-2 text-white rounded"
            >
              <ChevronRightIcon />
            </button>

            {/* Botão de deletar */}
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-red-600 p-2 text-white rounded"
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
