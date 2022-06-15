import css from './MedCard.module.css';

const MedCard = (props) => {
  return (
    <div className={css.MedCard}>
      <h3>{props.id}</h3>
      <p>{props.name}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default MedCard;
