
import { useTheme } from '../themes/ThemeContext';

const Button = () => {
  const { changeTheme } = useTheme();

  return <button onClick={changeTheme}>Cambiar de Tema</button>;
};

export default Button;
