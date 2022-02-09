import { PokemonCardHomePage } from "./PokemonCardHomePage";

import tittleImg from "./../../statics/HomePage/TittleImg.jpg";
import * as infoPage from "./dataPage";

import styles from "./PublicPage.module.scss";

export const PublicPage = () => {
  return (
    <div className={styles.container}>
      <h2>{infoPage.dataPageTittle}</h2>
      <div>
        <img src={tittleImg} alt="" />
      </div>
      <p>{infoPage.dataPageDefinitionsc}</p>
      <h3>{infoPage.namesAndEvolution}</h3>
      <p>{infoPage.namesAndEvolutionBody}</p>
      {infoPage.pokemonHomePageList.map(({ name, description, img }) => (
        <PokemonCardHomePage
          key={name}
          name={name}
          description={description}
          img={img}
        />
      ))}
    </div>
  );
};