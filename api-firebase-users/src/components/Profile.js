// src/components/Profile.js
import { useEffect, useState } from 'react';
import { auth } from '../firebase';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  if (!user) return <p>Cargando usuario...</p>;

  return (
    <div>
      <h2>Perfil del Usuario</h2>
      <p><strong>UID:</strong> {user.uid}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Email verificado:</strong> {user.emailVerified ? 'Sí' : 'No'}</p>
    </div>
  );
}

export default Profile;
