export default function NameForm({ names, setNames }) {
  const onSubmit = (event) => {
    event.preventDefault();
    setNames([event.target.name.value, ...names]);
    event.target.name.value = '';
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center">
      <label className="text-gray-700 font-medium mb-2">
        Name:
        <input
          type="text"
          name="name"
          required
          className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <input
        type="submit"
        value="Add"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 cursor-pointer mt-4"
      />
    </form>
  );
}
