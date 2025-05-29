import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await getDocs(collection(db, 'users'));
      setUsers(snapshot.docs.map(doc => doc.data()));
    };
    fetchUsers();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Usuarios Guardados</h2>
      <div style={styles.grid}>
        {users.map((user, i) => (
          <div key={i} style={styles.card}>
            <img src={user.picture?.thumbnail} alt="user" style={styles.img} />
            <p><strong>{user.name?.first} {user.name?.last}</strong></p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: 20 },
  grid: { display: 'flex', flexWrap: 'wrap', gap: 20 },
  card: { padding: 15, border: '1px solid #ccc', borderRadius: 10, width: 200, textAlign: 'center' },
  img: { borderRadius: '50%' }
};

export default UserList;
