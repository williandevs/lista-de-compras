import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

const TaskPage = () => {
 
    const navigator = useNavigate()
    const [searchParams] = useSearchParams();
    

  const title = searchParams.get("title") || "Título não fornecido";
  const description = searchParams.get("description") || "Descrição não fornecida";

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-cyan-900 to-sky-700  p-6 flex flex-col items-center">
      {/* Botão de voltar */}
  
      <button
        onClick={() => navigator(-1)}
        className="flex items-center space-x-1 text-white bg-transparent hover:text-gray-300 mt-4 mb-6"
      >
        <ChevronLeftIcon className="w-5 h-5" />
        <span>Voltar</span>
      </button>

      
      {/* Card da Tarefa */}
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default TaskPage;
