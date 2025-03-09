import { BLOG_TITLE } from './Layout';
import styles from '../styles/logo.module.css';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/' className={styles.wrapper}>
      {BLOG_TITLE}
    </Link>
  );
}

export default Logo;
