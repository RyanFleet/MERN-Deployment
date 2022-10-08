import './App.css';
import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import PetForm from './components/PetForm';
import PetList from './components/PetList';
import OnePet from './components/OnePet';
import UpdatePet from './components/UpdatePet';

function App() {
  const [pets, setPets] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PetForm pets={pets} setPets={setPets} />} path="/pets/new" />
          <Route element={<PetList pets={pets} setPets={setPets} />} path="/" />
          <Route element={<OnePet pets={pets} setPets={setPets}/>} path="/pets/:id" />
          <Route element={<UpdatePet pets={pets} setPets={setPets}/>} path="/pets/:id/edit" />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
