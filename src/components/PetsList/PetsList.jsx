import { useEffect, useState } from 'react';
import PetCard from '../PetCard/PetCard';

function PetsList() {
  const [petsArray, setPetsArray] = useState([]);

  async function getPets() {
    const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets/');
    const dataInJs = await resp.json();
    setPetsArray(dataInJs);
  }
  useEffect(() => {
    getPets();
  });
  return (
    <div>
      <h1>Pets Page</h1>
      <div className='petsDisplay'>
        {petsArray.map((pObj) => (
          <PetCard key={pObj.id} {...pObj} />
        ))}
      </div>
    </div>
  );
}

export default PetsList;
