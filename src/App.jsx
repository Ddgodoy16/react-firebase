import React from 'react';
import { Show } from "./componentes/show";
import { Create } from "./componentes/create";
import { Edit } from "./componentes/edit";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


