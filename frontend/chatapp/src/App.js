import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Chat from "./components/Chat.jsx";
import './App.css';
import Conversation from "./components/Conversation.jsx";

function App() {
  return (
    <div className="container">
      <Dashboard />
      <Conversation/>
    </div>
  );
}

export default App;
