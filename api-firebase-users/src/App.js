// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Menu from './components/Menu';
import UserList from './components/UserList';
import Profile from './components/Profile';
import Original from './components/Original';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/listar" element={<UserList />} />
        <Route path="/usuario" element={<Profile />} />
        <Route path="/original" element={<Original />} />
      </Routes>
    </Router>
  );
}

export default App;
