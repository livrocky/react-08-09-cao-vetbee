import { useEffect, useState } from 'react';
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
        <button className={css.addMeds}>ADD MEDS</button>
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
