import logo from './logo.svg';
import './App.css';
import SearchFilter from './Components/Projects/SearchFilter'
import Projects from './Components/Projects/Projects';
import {useState, createContext} from 'react'

export const AppContext = createContext()

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <AppContext.Provider value={{searchTerm, setSearchTerm}}>
        {searchTerm.length > 0 ? <SearchFilter /> : <Projects /> }
        
    </AppContext.Provider>
  );
}

export default App;
