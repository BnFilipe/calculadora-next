'use client';
import { useState } from "react";

export default function Home() {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  const mostrarValor = (simbolo: string) => {
    setValor((prev) => prev + simbolo);
  };

  const calcularResultado = () => {
    try {
      const res = eval(valor);
      setResultado(res.toString());
    } catch (e) {
      setResultado('erro');
    }
  };

  const resetarValor = () => {
    setValor('');
    setResultado('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-80 bg-white rounded-lg shadow-lg p-5">
        {/* Display */}
        <div className="text-right text-2xl mb-2 p-3 bg-gray-200 rounded">
          {valor || '0'}
        </div>
        <div className="text-right text-xl mb-4 p-3 bg-gray-100 rounded text-gray-500">
          {resultado}
        </div>

        {/* Botões */}
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (btn === '=') {
                  calcularResultado();
                } else {
                  mostrarValor(btn);
                }
              }}
              className={`p-4 text-lg font-semibold rounded ${
                btn === '='
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Botão de limpar */}
        <button
          onClick={resetarValor}
          className="mt-4 w-full p-4 text-lg font-semibold rounded bg-red-500 text-white hover:bg-red-600"
        >
          Limpar
        </button>
      </div>
    </div>
  );
}