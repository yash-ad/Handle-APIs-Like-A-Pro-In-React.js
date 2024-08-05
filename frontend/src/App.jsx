import { useEffect, useState } from 'react';
import './App.css';


function App() {
  //To handle the state of products:-
  const [products, setProducts] = useState([]);

  //useEffect hook for handling sideEffects in a functional component:-
  //Here we are handling sideeffects its an API call:-
  useEffect(() => {
    
  }, [])
  
  
  return (
   <>
      <h1>Handle APIs In React</h1>
      <h2>Number of products are : {products.length}</h2>
      
    </>
  )
}

export default App
