export default function Button({ text, clickFunction }) {
  return (
    <button
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      onClick={clickFunction}
    >
      {text}
    </button>
  );
}
