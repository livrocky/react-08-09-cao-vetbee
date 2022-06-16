import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleLogPage = () => {
  const [currentPet, setCurrentPet] = useState({});

  const { petId } = useParams();

  const getCurrentPetAndSave = async () => {
    const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets/');
    const dataInJs = await resp.json();
    console.log('dataInJs===', dataInJs);
    console.log('petId===', petId);
    const currentPet = dataInJs.find(({ id }) => id === +petId);
    console.log('currentPet===', currentPet);
    setCurrentPet(currentPet);
  };

  useEffect(() => {
    getCurrentPetAndSave();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>{currentPet.name}</h1>
    </div>
  );
};

export default SingleLogPage;
