import PropTypes from 'prop-types';
import { FaRegClock, FaFire } from "react-icons/fa";




const RecipeItem = ( {recipe, wantToCookHandler}) => {

    const { recipe_name, short_description, recipe_image, ingredients, preparing_time, calories } = recipe;
    return (
        <div className='shadow-md px-3 py-5 rounded-lg flex flex-col gap-3'>
            <img src={recipe_image} alt={recipe_name} className='w-full rounded-xl h-auto' />
            <h1 className='text-2xl font-semibold'>{recipe_name}</h1>
            <p>{short_description}</p>
            <hr />
            <div>
                <h3 className='font-semibold'>Ingredients: {ingredients.length}</h3>
                {
                    ingredients.map((ingredient, index) => <ul className='list-disc list-inside text-gray-500 ml-5' key={index} ><li >{ingredient}</li></ul>)

                }
            </div>
            <hr />
            <div className='flex justify-between'>
                <div className='flex justify-center items-center gap-1'><FaRegClock /><span className='font-semibold'> {preparing_time}</span></div>

                <div className='flex justify-center items-center gap-1'><FaFire /><span className='font-semibold'>
                    {calories}</span></div>
            </div>
            <button onClick={()=>wantToCookHandler(recipe)} className='bg-[#0BE58A] border-2 hover:bg-transparent hover:border-solid hover:border-2 border-transparent hover:border-[#0BE58A] hover:text-black font-semibold px-5 py-3 rounded-xl w-1/2'>Want To Cook</button>

        </div>
    );
};

RecipeItem.propTypes = {
    recipe: PropTypes.object.isRequired,
    wantToCookHandler:PropTypes.func.isRequired
}

export default RecipeItem;