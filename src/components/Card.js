import React from "react";
import styles from "../styles/Card.module.css";
import card from "../assets/card.jpg";
function Card() {
  return (
    <div className={styles.card}>
      <img className={styles.imgCard} src={card} alt="concurso" />
      <h1 className={styles.title}>Un choque entre mundos</h1>
      <p className={styles.description}>
        La fotógrafa canadiense Patricia Homonylo se llevó el premio principal
        por su imagen titulada When Worlds Collide, que invita a la reflexión
        sobre la influencia del mundo humano en los animales silvestres. En ella
        vemos a más de 4.000 aves que murieron tras chocar contra ventanas en la
        ciudad de Toronto.{" "}
      </p>
      <div className={styles.contenedor}>
        <span className={styles.readMore}>Read more</span>
        <span className={styles.icono}> 
          <i className="fa-regular fa-heart"></i>
        </span>
      </div>
    </div>
  );
}
export default Card;