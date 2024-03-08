import { useState } from 'react'

import hero from './assets/images/image-omelette.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div className='bg-light-gray h-full font-youngSerif'>
        <div className='md:py-24'>
        <div className='flex md:w-4/6 m-auto bg-white rounded-3xl'>
        <div className='w-5/6 m-auto'>
           <img src={hero} alt="" className='rounded-3xl my-12' /> 
           <h1 className='font-bold text-4xl md:text-6xl my-6 text-nutmeg'>Simple Omelette Recipe</h1>
           <p className='text-[1.3rem] md:text-[1.5rem]'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          {/* Preparation time */}
           <ul className='bg-eggshell rounded-2xl my-16 py-12 list-disc text-1xl md:text-2xl'>
            <div className='w-[90%] m-auto'>
            <h3 className='text-3xl md:text-4xl font-bold mb-6 text-dark-raspberry'>Preparation time</h3>
            <li className='py-2 ml-8 md:ml-16'><span className='font-bold'>Total:</span> Approximately 10 minutes </li>
            <li className='py-2 ml-8 md:ml-16'><span className='font-bold'>Preparation:</span> 5 minutes</li>
            <li className='py-2 ml-8 md:ml-16'><span className='font-bold'>Cooking:</span> 5 minutes</li>
            </div>
           </ul>
          {/* Ingredients */}
          <ul className='my-16 list-disc text-1xl md:text-2xl'>
            <h3 className='text-3xl md:text-5xl font-bold mb-6 text-nutmeg'>Ingredients</h3>
            <li className='py-2 ml-8 md:ml-16'>2-3 large eggs</li>
            <li className='py-2 ml-8 md:ml-16'>Salt, to taste</li>
            <li className='py-2 ml-8 md:ml-16'>Pepper, to taste</li>
            <li className='py-2 ml-8 md:ml-16'>1 tablespoon of butter or oil</li>
            <li className='py-2 ml-8 md:ml-16'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
           </ul>

          {/* line */}
          <div className='m-auto h-0.5 bg-black'></div>
          {/* Instructions */}
          <ol className='my-16 list-decimal text-1xl md:text-2xl '>
            <h3 className='text-3xl md:text-5xl font-bold mb-6 text-nutmeg'>Instructions</h3>
            <li className='py-2 ml-8 md:ml-16'>
              <span className='font-bold'>Beat the eggs: </span>
              In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
              </li>
            <li className='py-2 ml-8 md:ml-16'>
              <span className='font-bold'>Heat the pan: </span>
              Place a non-stick frying pan over medium heat and add butter or oil.
              </li>
            <li className='py-2 ml-8 md:ml-16'>
              <span className='font-bold'>Cook the omelette: </span>
              Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
              </li>
            <li className='py-2 ml-8 md:ml-16'>
              <span className='font-bold'>Add fillings (optional): </span>
              When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
              </li>
            <li className='py-2 ml-8 md:ml-16'>
              <span className='font-bold'>Fold and serve: </span>
              As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
              </li>
            <li className='py-2 ml-8 md:ml-16'>
              <span className='font-bold'>Enjoy: </span>
              Serve hot, with additional salt and pepper if needed.
              </li>
           </ol>
          {/* line */}
          <div className='m-auto h-0.5 bg-black'></div>
          {/* Nutrition */}
          <ul className='my-16'>
          <h3 className='text-3xl md:text-5xl text-nutmeg font-bold pb-6'>Nutrition</h3>
          <li className='py-2 text-1xl md:text-2xl'>
          The table below shows nutritional values per serving without the additional fillings.
          </li>
          <table class="w-full m-auto border-collapse table-auto text-1xl md:text-2xl"> 
              <tr className='border-b'>
                <td className='py-6'>Calories</td>
                <td className='font-bold text-nutmeg'>277kcal</td>
              </tr>
              <tr className='border-b'>
                <td className='py-6'>Carbs</td>
                <td className='font-bold text-nutmeg'>0g</td>
              </tr>
              <tr className='border-b'>
                <td className='py-6'>Protein</td>
                <td className='font-bold text-nutmeg'>20g</td>
              </tr>
              <tr>
                <td className='py-6'>Fat</td>
                <td className='font-bold text-nutmeg'>22g</td>
              </tr>
          </table>
          </ul>



    {/*            
     */}
      </div>
        </div>
        </div></div>
  )
}

export default App
