import React, { useEffect, useState } from "react";

export default function Biblioteca() {
  const [livros, setLivros] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mockData = [
          {
            id: 1,
            titulo: "O Pequeno Príncipe",
            autor: "Antoine de Saint-Exupéry",
            categoria: "Ficção",
            ano_publicacao: 1943,
            classificacao_indicativa: "Livre",
          },
          {
            id: 2,
            titulo: "1984",
            autor: "George Orwell",
            categoria: "Distopia",
            ano_publicacao: 1949,
            classificacao_indicativa: "14+",
          },
          {
            id: 3,
            titulo: "Dom Casmurro",
            autor: "Machado de Assis",
            categoria: "Romance",
            ano_publicacao: 1899,
            classificacao_indicativa: "12+",
          },
        ];

        await new Promise((resolve) => setTimeout(resolve, 500));
        setLivros(mockData);
      } catch (err) {
        console.error("Erro ao buscar livros:", err);
        setErro("Erro ao carregar dados.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Acervo da Biblioteca</h1>

      {erro ? (
        <div className="text-red-600 font-medium">{erro}</div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-4">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Título</th>
                <th className="px-4 py-2 text-left">Autor</th>
                <th className="px-4 py-2 text-left">Categoria</th>
                <th className="px-4 py-2 text-left">Ano</th>
                <th className="px-4 py-2 text-left">Classificação</th>
              </tr>
            </thead>
            <tbody>
              {livros.map((livro) => (
                <tr key={livro.id} className="border-t">
                  <td className="px-4 py-2">{livro.titulo}</td>
                  <td className="px-4 py-2">{livro.autor}</td>
                  <td className="px-4 py-2">{livro.categoria}</td>
                  <td className="px-4 py-2">{livro.ano_publicacao}</td>
                  <td className="px-4 py-2">
                    {livro.classificacao_indicativa}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
