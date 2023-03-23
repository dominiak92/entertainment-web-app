import React from "react";
import { useForm } from "react-hook-form";
import searchIco from "../../assets/icon-search.svg";
import styles from "./SearchBar.module.scss";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form className={styles["search-bar"]} onSubmit={handleSubmit(onSubmit)}>
      <button className={styles.searchButton} type="submit">
        <img src={searchIco} alt="search" />
      </button>
      <input
        className={styles.input}
        type="search"
        placeholder="Search TV Shows"
        {...register("Search TV Shows", {
          max: 30,
          min: 1,
          maxLength: 30,
          pattern: /^[a-zA-Z0-9_.-]*$/i,
        })}
      />
    </form>
  );
}
