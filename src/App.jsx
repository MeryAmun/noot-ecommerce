import React, {  useEffect } from "react";
import './App.css';
import {
  useQuery
} from '@tanstack/react-query'
import { HomeScreen } from './pages';
import { Footer, Navbar } from './components';
import { getProducts } from "./redux/actions";
import { useDispatch } from "react-redux";
import useQueryHook from "./utils/useQueryHook";



function App() {
  const dispatch = useDispatch();
    useQuery({
    queryKey: ["products"],
    queryFn:useQueryHook().then((data) => {
      return data
    })
  });



  
  useEffect(() => {

    dispatch(getProducts());
  }, [dispatch]);
  //console.log(productsQuery?.data);
  return (
   
    <div className="App">
      <Navbar/>
     <HomeScreen/>
     <Footer/>
    </div>
    
  );
}

export default App;
