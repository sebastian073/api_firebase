import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function Original() {
  const [users, setUsers] = useState([]);

  const getRandomUsers = async () => {
    const res = await fetch('https://randomuser.me/api/?results=6');
    const data = await res.json();
    setUsers(data.results);
  };

  const saveUser = async (user) => {
    try {
      await addDoc(collection(db, 'users'), {
        name: user.name,
        email: user.email,
        picture: user.picture
      });
      alert('Usuario guardado en Firestore');
    } catch (err) {
      alert('Error al guardar: ' + err.message);
    }
  };

  useEffect(() => {
    getRandomUsers();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Usuarios Aleatorios</h2>
      <button onClick={getRandomUsers} style={styles.refresh}>Generar Nuevos</button>
      <div style={styles.grid}>
        {users.map((user, i) => (
          <div key={i} style={styles.card}>
            <img src={user.picture.medium} alt="user" style={styles.img} />
            <p><strong>{user.name.first} {user.name.last}</strong></p>
            <p>{user.email}</p>
            <button onClick={() => saveUser(user)} style={styles.save}>Guardar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: 20 },
  refresh: { marginBottom: 20, padding: '10px 20px', cursor: 'pointer' },
  grid: { display: 'flex', flexWrap: 'wrap', gap: 20 },
  card: { padding: 15, border: '1px solid #ccc', borderRadius: 10, width: 220, textAlign: 'center', backgroundColor: '#fafafa' },
  img: { borderRadius: '50%' },
  save: { marginTop: 10, padding: '6px 12px', cursor: 'pointer' }
};

export default Original;
