import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import MedCard from '../MedCard/MedCard';
import css from './MedsList.module.css';

function MedsList() {
  const [medsArray, setMedsArray] = useState([]);

  async function getMeds() {
    // const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/meds/');
    const resp = await fetch('/db/meds.json');
    const dataInJs = await resp.json();
    setMedsArray(dataInJs);
  }
  useEffect(() => {
    getMeds();
  });
  return (
    <div>
      <section className={css.list}>
        <h1>Meds Page</h1>
        <Link to='/addMeds'>
          <Button secondary>Add Medication</Button>
        </Link>
      </section>
      <div className={css.MedsDisplay}>
        {medsArray.map((mObj) => (
          <MedCard key={mObj.id} {...mObj} />
        ))}
      </div>
    </div>
  );
}

export default MedsList;
