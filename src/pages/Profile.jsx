import { useTheme } from '../themes/ThemeContext';

const Profile= () => {
  const { theme } = useTheme();

  return (
    <>
    <section className={`App ${theme}`}>
      <h1>Esta es la Profile</h1>
    </section></>
  );
};

export default Profile;
