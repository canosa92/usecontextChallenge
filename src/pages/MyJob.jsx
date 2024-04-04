import { useTheme } from '../themes/ThemeContext';

const MyJob= () => {
  const { theme } = useTheme();

  return (
    <>
    <section className={`App ${theme}`}>
      <h1>Esta es la MyJob</h1>
    </section></>
  );
};

export default MyJob;
