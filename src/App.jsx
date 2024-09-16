import { useState } from 'react';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [wantToCookRecipies, setWantToCookRecipies] = useState([]);
  const [currentlyCookRecipies, setCurrentlyCookRecipies] = useState([]);
  console.log(currentlyCookRecipies);

  const wantToCookHandler = (recipe) => {
    const isRecipeExist = wantToCookRecipies.some(item => item.recipe_id === recipe.recipe_id);

    if (!isRecipeExist) {
      const newWantToCookRecipies = [...wantToCookRecipies, recipe];
      setWantToCookRecipies(newWantToCookRecipies);
    } else {
      toast("Already Added!");
    }
  };

  const currentlyCookingHandler = (cookRecipe) => {
    const updatedWantToCookRecipies = wantToCookRecipies.filter(recipe => recipe !== cookRecipe);
    const updatedCurrentlyCookRecipies = [...currentlyCookRecipies, cookRecipe];

    setWantToCookRecipies(updatedWantToCookRecipies);
    setCurrentlyCookRecipies(updatedCurrentlyCookRecipies);
  };



  return (
    <div className="container mx-auto">

      <Header />
      <Hero />

      <Content
        currentlyCookRecipies={currentlyCookRecipies}
        currentlyCookingHandler={currentlyCookingHandler}
        wantToCookRecipies={wantToCookRecipies}
        wantToCookHandler={wantToCookHandler}
      />
      <ToastContainer />
    </div>
  );
}

export default App;