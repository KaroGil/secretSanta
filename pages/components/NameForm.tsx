export default function NameForm({ names, setNames }) {
  const onSubmit = (event) => {
    event.preventDefault();
    setNames([event.target.name.value, ...names]);
    event.target.name.value = '';
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
}
