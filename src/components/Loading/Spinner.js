import style from "./Spinner.module.css";
const Spinner = (props) => {
  return (
    <div
      className={style.spinner}
      style={{ width: props.size, height: props.size }}
    ></div>
  );
};
export default Spinner;
