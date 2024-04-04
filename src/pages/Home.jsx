
import { useTheme } from '../themes/ThemeContext';

const Home = () => {
  const { theme } = useTheme();

  return (
    <>
    <section className={`App ${theme}`}>
      <h1>Esta es la home</h1>
    </section></>
  );
};

export default Home;
