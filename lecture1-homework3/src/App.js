import './App.css';
import Dropdown from './components/Dropdown';

/* Функциональный компонент приложения с Dropdown кнопкой */
function App() {
  return (
    <div className="container">
      <Dropdown label="Account information" icon="public" 
                items={["Profile Information", 
                        "Change Password", 
                        "Become PRO", 
                        "Help", 
                        "Log Out"]} 
      />
    </div>
  );
}

export default App;
