import Banner from "../../componentes/Banner";
import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import Rodape from "../../componentes/Rodape";
import styles from "./PaginaInicial.module.scss";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <section className={styles.principal}>
        <Menu />
        <Banner />
      </section>
      <Rodape />
    </>
  );
}
