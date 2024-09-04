import { useEffect, useState } from "react"
import styles from './search.module.css'

const URL="https://api.spoonacular.com/recipes/complexSearch"
const apiKey="806f6a6779c141bdb999937eaf5a36e3"

export default function Search({foodData, setFoodData}){
    const [query,setquery]=useState("pizza")

     useEffect(()=>{
        async function fetchFood(){
            // https://api.spoonacular.com/recipes/complexSearch?query='pizza'&apiKey=806f6a6779c141bdb999937eaf5a36e3  THIS FORMAT
           const res= await fetch(`${URL}?query=${query}&apiKey=${apiKey}`)
            const data=await res.json()
            setFoodData(data.results)
           
        }
        fetchFood()
    },[query])

    return <div className={styles.searchContainer}>
        <input
        className={styles.input}
         onChange={(e)=>setquery(e.target.value)} value={query} type="text"
          />
    </div>
}