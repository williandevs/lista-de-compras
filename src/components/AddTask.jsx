import { useState } from "react";

import Input from "./Input";

const AddTask = ({ onAddTaskSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 bg-[#E2E8F0] p-4 rounded-md shadow-md flex flex-col">
      <Input
        type="text"
        placeholder="Digite o nome do item"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="textarea"
        placeholder="Digite a quantidade ou detalhes"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        rows="4"
        maxLength="500"
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha todos os campos da lista");
          } else {
            onAddTaskSubmit(title, description); // Corrigido para passar os argumentos
            setTitle(""); // Limpa o campo título após o envio
            setDescription(""); // Limpa o campo descrição após o envio
          }
        }}
        className="mt-2 bg-blue-900 text-white p-2 rounded hover:bg-slate-600 transition"
      >
        Incluir Item na Lista
      </button>
    </div>
  );
};

export default AddTask;
