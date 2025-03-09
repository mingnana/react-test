import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styles from '../styles/header.module.css';
import Logo from './Logo';

function Header({ theme, onThemeChange }) {
  const isDarkMode = theme === 'dark';

  return (
    <header className={styles.wrapper}>
      <Logo />
      <div className={styles.actions}>
        <button className={styles.action}>
          <DarkModeSwitch checked={isDarkMode} onChange={onThemeChange} />
        </button>
      </div>
    </header>
  );
}

export default Header;
