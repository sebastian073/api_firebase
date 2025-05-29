// src/components/Menu.js
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

function Menu() {
  const navigate = useNavigate();

  const logout = async () => {
    await auth.signOut();
    navigate('/');
  };

  return (
    <div>
      <h2>Menú</h2>
      <button onClick={() => navigate('/listar')}>Listar</button>
      <button onClick={() => navigate('/usuario')}>Usuario</button>
      <button onClick={() => navigate('/original')}>Original</button>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}

export default Menu;
