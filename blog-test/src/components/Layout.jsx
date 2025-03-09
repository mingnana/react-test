import '../styles/layout.css';
import Header from './Header';
import Footer from './Footer';
import useLocalStorage from '../hooks/useLocalStorage';
import { useEffect } from 'react';

export const BLOG_TITLE = 'Sparta Coding Club Blog';

function Layout({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#fff';
    }
  }, [theme]);

  const handleThemeChange = () => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#333';
      setTheme('light');
    } else {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#fff';
      setTheme('dark');
    }
  };

  return (
    <div>
      <Header theme={theme} onThemeChange={handleThemeChange} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
