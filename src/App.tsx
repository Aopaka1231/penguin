import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./page/home"
import Room from "./page/room"
import Login from "./page/login";
import Register from "./page/register";

function App() {

  return (
    <BrowserRouter>
    <div className="bg-[F8F8F8] min-h-screen">
      <nav>
        <ul className="flex justify-center items-center bg-gray-500 h-10">
          <li className="mr-5">
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          {/* ログイン周り */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/home" element={<Home />} />
          <Route path="/room" element={<Room />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
