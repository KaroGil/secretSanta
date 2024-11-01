import styles from "../../styles/NameForm.module.css";

export default function NameForm({ names, setNames }) {
  const onSubmit = (event) => {
    event.preventDefault();
    setNames([event.target.name.value, ...names]);
    event.target.name.value = "";
  };

  return (
    <form onSubmit={onSubmit} className={styles.formContainer}>
      <label className={styles.label}>
        Name:
        <input type="text" name="name" className={styles.input} required />
      </label>
      <input type="submit" value="Add" className={styles.submitButton} />
    </form>
  );
}
