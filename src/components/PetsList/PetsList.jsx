import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PetCard from '../PetCard/PetCard';
import css from './PetsList.module.css';

function PetsList() {
  const [petsArray, setPetsArray] = useState([]);

  async function getPets() {
    // const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets/');
    const resp = await fetch('/db/pets.json');
    const dataInJs = await resp.json();
    setPetsArray(dataInJs);
  }
  useEffect(() => {
    getPets();
  });
  return (
    <div>
      <section className={css.list}>
        <h1>Pets Page</h1>
        <Link to='/addPets'>
          <button className={css.addPet}>ADD PET</button>
        </Link>
      </section>
      <div className={css.petsDisplay}>
        {petsArray.map((pObj) => (
          <PetCard key={pObj.id} {...pObj} />
        ))}
      </div>
    </div>
  );
}

export default PetsList;
