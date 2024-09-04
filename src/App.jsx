import { useState } from 'react'
import Search from './components/search'
import FoodList from './components/foodList'
import Navbar from './components/navbar'
import './App.css';
import Container from './components/Container';
import InnerContainer from './components/innerContainer';
import FoodDetails from './components/foodDetails';


function App() {
 
const [foodData,setFoodData]=useState([])
const [foodId,setFoodId]=useState("656329")
  return (
    <div className="App">
      <Navbar/>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
        <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer>
      </Container>
      
       
      </div>
      
  )
}

export default App
