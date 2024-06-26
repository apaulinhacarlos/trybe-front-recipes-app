import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import { useFetchCategoryApiMeals } from '../customHooks/useFetchCategoryApi';
import { useFetchCategoryListApiMeals } from '../customHooks/useFetchCategoryListApi';
import { useFetchApiMeals } from '../customHooks/useFetchApi';

export default function MealCategoryButtons() {
  const { btnCategoryMeals, setListCategoryMeals,
    listCategoryMeals } = useContext(Context);
  const [getCategoryMealsApi] = useFetchCategoryApiMeals();
  const [getListCategoryMealApi] = useFetchCategoryListApiMeals();
  const [getMealsApi] = useFetchApiMeals();
  const [toggled, setToggled] = useState(false);
  const CINCO = 5;

  useEffect(() => { getCategoryMealsApi(); }, []);
  useEffect(() => { getListCategoryMealApi(); }, [listCategoryMeals]);

  const handleToggle = async () => {
    getMealsApi();
    setToggled(!toggled);
    setListCategoryMeals('');
  };

  const handleClick = ({ target }) => {
    const { name } = target;
    if (toggled && listCategoryMeals === name) { handleToggle(); } else {
      setListCategoryMeals(name);
      setToggled(true);
    }
  };

  return (
    <ul className="category-buttons">
      <button
        type="button"
        name="All"
        data-testid="All-category-filter"
        onClick={ handleClick }
        className="filter-button"
      >
        All
      </button>
      { btnCategoryMeals ? (
        btnCategoryMeals
          .filter((_item, index) => index < CINCO)
          .map((category) => (
            <button
              type="button"
              name={ category.strCategory }
              data-testid={ `${category.strCategory}-category-filter` }
              onClick={ handleClick }
              key={ category.strCategory }
              className="filter-button"
            >
              { category.strCategory }
            </button>
          ))
      ) : null }
    </ul>
  );
}
