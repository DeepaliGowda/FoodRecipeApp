import styles from './foodDetails.module.css'
import { useEffect, useState } from "react"
import ItemList from './itemList'

export default function FoodDetails({foodId}){
    const [food,setFood]=useState({})
    const [isLoading, setIsLoading]=useState(true)

    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`
    const apiKey='806f6a6779c141bdb999937eaf5a36e3'

    useEffect(()=>{
        async function fetchFood(){
        const res  = await  fetch(`${URL}?apiKey=${apiKey}`)
        const data=await res.json()
        console.log(data)
        setFood(data)
        setIsLoading(false)
        }
        fetchFood()
    },[foodId])
    return( 
    <div>
        <div className={styles.recipeCard}>
       <h1 className={styles.recipeName}>{food.title}</h1> 
        <img className={styles.recipeImg} src={food.image} alt="" />

        <div className={styles.recipeDetails}>
        <span>
            <strong>🕑{food.readyInMinutes} Minutes</strong>
        </span>

        <span>
            👪<strong>Serves {food.servings}</strong>
        </span>

        <span><strong>{food.vegetarian?"🥕Vegetarian":"🍖Non-Vegetarian"} </strong></span>
        <span><strong>{food.vegan?"🐮Vegan":""}</strong></span>
    </div>
    {/* <div>
        $<span><strong>{food.pricePerServing/100} Per serving</strong></span>
      </div> */}
      <h3>Ingredients</h3>
      <ItemList food={food} isLoading={isLoading}/>
        
        <h2>Instructions </h2>
        <div className={styles.recipeInstructions}>
            <ol>
        {isLoading? (<p>Loading...</p>):(food.analyzedInstructions[0].steps.map((step)=>(<li>{step.step}</li>
        ))
        ) }
        </ol>
        </div>
    </div>
</div>
    )
}