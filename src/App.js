import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login, Drinks, Meals, MealDetails, DrinkDetails, MealInProgress,
  DrinkInProgress, Explore, ExploreMeals, ExploreDrinks, ExploreMealByIngredients,
  ExploreDrinkByIngredients, ExploreMealByArea, Profile, RecipesDone,
  RecipesFavorites } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/comidas/:id/in-progress"
          render={ (props) => <MealInProgress { ...props } /> }
        />
        <Route
          path="/bebidas/:id/in-progress"
          render={ (props) => <DrinkInProgress { ...props } /> }
        />
        <Route path="/comidas/:id" render={ (props) => <MealDetails { ...props } /> } />
        <Route path="/bebidas/:id" render={ (props) => <DrinkDetails { ...props } /> } />
        <Route
          path="/explorar/comidas/ingredientes"
          component={ ExploreMealByIngredients }
        />
        <Route
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinkByIngredients }
        />
        <Route path="/explorar/bebidas/ingredientes" component={ ExploreMealByArea } />
        <Route path="/explorar/comidas" component={ ExploreMeals } />
        <Route path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route path="/receitas-feitas" component={ RecipesDone } />
        <Route path="/receitas-favoritas" component={ RecipesFavorites } />
        <Route path="/perfil" component={ Profile } />
        <Route path="/comidas" component={ Meals } />
        <Route path="/bebidas" component={ Drinks } />
        <Route path="/explorar" component={ Explore } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
