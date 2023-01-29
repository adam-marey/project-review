import { Route, Routes } from 'react-router-dom';
import Home from './componets/Home';
import Profile from './componets/Profile';
import Posts from './componets/Posts';
import Navbar from './componets/Navbar';
import Signup from './componets/Signup';
import Login from './componets/Login';
import SinglePost from './componets/SinglePost';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
