import { useEffect } from "react";
import { useState } from "react";
import RecipeItem from "../RecipeItem/RecipeItem";
import PropTypes from 'prop-types';
import Sidebar from "../Sidebar/Sidebar";
import CurrentlyCookingSidebar from "../CurrentlyCookingSidebar/CurrentlyCookingSidebar";



const Content = ({ wantToCookHandler, wantToCookRecipies,currentlyCookingHandler,currentlyCookRecipies}) => {
    const [allRecipies, setAllRecipies] = useState([]);
    


    useEffect(() => {
        fetch('/public/db.json')
            .then(res => res.json())
            .then(data => setAllRecipies(data))
    }, [])

    const totalCurrentlyCookTime = currentlyCookRecipies.reduce((total, recipe) => total + parseInt(recipe.preparing_time), 0);
    const totalCurrentlyCookCalories = currentlyCookRecipies.reduce((total, recipe) => total + parseInt(recipe.calories), 0);

    return (
        <section id="recipe" className="py-[100px]">
            <div className="section-header gap-4 flex flex-col w-3/4 mx-auto">
                <h1 className="text-center text-4xl font-bold">Our Recipes </h1>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="content-section justify-between flex flex-col lg:flex-row gap-5 mt-6">
                <div className=" mx-auto grid lg:grid-cols-2 grid-cols-1 gap-5 lg:w-[65%] w-[80%]">
                    {
                        allRecipies.map((recipe, index) => <RecipeItem wantToCookHandler={wantToCookHandler} key={index} recipe={recipe}></RecipeItem>)
                    }
                </div>
                <div className="lg:w-[35%] w-[90%] mx-auto shadow-md rounded-md px-3 py-5">
                    <h1 className="text-3xl font-bold text-center mb-4">Want to cook:{wantToCookRecipies.length}</h1>
                    <hr />
                    <div className="relative overflow-x-auto mt-3">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-black uppercase bg-gray-50  ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Time
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Calories
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wantToCookRecipies.map((wantToCookRecipe, index) => <Sidebar currentlyCookingHandler={currentlyCookingHandler} wantToCookRecipie={wantToCookRecipe} key={index} />)
                                }
                            </tbody>
                        </table>
                    </div>
                    <h1 className="text-3xl font-bold text-center mt-4 mb-4">Currently Cooking:{currentlyCookRecipies.length}</h1>
                    <hr />
                    <div className="relative overflow-x-auto mt-3">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-black uppercase bg-gray-50  ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Time
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Calories
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentlyCookRecipies.map((currentlyCook, index) => <CurrentlyCookingSidebar  currentlyCook={currentlyCook} key={index} />)
                                }
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <h1 className="font-semibold text-lg">Total time:{totalCurrentlyCookTime} min</h1> 
                        <h1 className="font-semibold text-lg" >Total Calories: {totalCurrentlyCookCalories} cal</h1> 
                    </div>
                </div>
            </div>

        </section>
    );
};

Content.propTypes = {
    wantToCookHandler: PropTypes.func.isRequired,
    wantToCookRecipies: PropTypes.array.isRequired,
    currentlyCookingHandler:PropTypes.func.isRequired,
    currentlyCookRecipies:PropTypes.array.isRequired,
}

export default Content;