import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Chat from "./components/Chat.jsx";
import './App.css';

function App() {
  return (
    <div className="container">
      <Dashboard />
      <Chat />
    </div>
  );
}

export default App;
