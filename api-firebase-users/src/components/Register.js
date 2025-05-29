import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/menu');
    } catch (error) {
      alert('Error al registrarse: ' + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Crear Cuenta</h2>
        <form onSubmit={handleRegister} style={styles.form}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Registrarse</button>
          <p style={styles.text}>
            ¿Ya tienes cuenta?{' '}
            <span onClick={() => navigate('/')} style={styles.link}>Iniciar sesión</span>
          </p>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 40,
    borderRadius: 16,
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: 400,
    animation: 'fadeIn 0.6s ease-in-out',
  },
  title: {
    fontSize: '2rem',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  input: {
    padding: 14,
    fontSize: '1rem',
    borderRadius: 8,
    border: '1px solid #ccc',
    transition: 'border 0.2s',
    outline: 'none',
  },
  button: {
    padding: 14,
    fontSize: '1rem',
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  text: {
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#666',
    marginTop: 12,
  },
  link: {
    color: '#27ae60',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

// Animación con CSS embebido en React (recomendado incluir en CSS global si se desea reutilizar)
const styleSheet = document.styleSheets[0];
const fadeInKeyframes = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}`;
styleSheet.insertRule(fadeInKeyframes, styleSheet.cssRules.length);

export default Register;
