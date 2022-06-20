import { createContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import css from './Header.module.css';

const Header = () => {
  const Context = createContext('Default Value');
  console.log('Context===', Context);

  return (
    <header>
      <div className={css.container}>
        <img className={css.vetBeeLogo} src='assets/vet-bee-logo.png' alt='logo' />
        <div className={css.mainNav}>
          <Link to='/' className={css.navItem}>
            Pets
          </Link>
          <Link to='/medications' className={css.navItem}>
            Medications
          </Link>
          <Button secondary>Change Theme</Button>
        </div>
      </div>
      <div className={css.hr}></div>
    </header>
  );
};

export default Header;
