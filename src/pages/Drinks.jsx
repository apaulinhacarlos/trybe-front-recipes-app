import React, { useContext } from 'react';
import Context from '../context/Context';
import DrinkCard from '../components/DrinkCard';

export default function Drinks() {
  const { dataDrinks } = useContext(Context);
  const { drinks } = dataDrinks;
  const DOZE = 12;

  return (
    <ul>
      { drinks ? (
        drinks
          .filter((_item, index) => index < DOZE)
          .map((drink, index) => (
            <DrinkCard
              key={ drink.idDrink }
              drink={ drink }
              index={ index }
            />
          ))
      ) : null }
    </ul>
  );
}
