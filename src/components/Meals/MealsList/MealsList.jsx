import { MealsListWrapper } from './MealsList.styled';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Ролл "Наоми"',
    description:
      'Сир Філадельфія, куряче філе, масаго, помідор, огірок, кунжут',
    price: 11.99,
  },
  {
    id: 'm2',
    name: 'Спайс в лососі',
    description: 'Рис, лосось, соус спайс',
    price: 3.99,
  },
  {
    id: 'm3',
    name: 'Суши з вугрем',
    description: 'Вугор копчений, соус унагі, кунжут',
    price: 4.99,
  },
  {
    id: 'm4',
    name: 'Салат "Поке з лососем"',
    description:
      'Рис, лосось, огірок, чука, норі, стружка тунця, соус горіховий',
    price: 7.99,
  },
];

export const MealsList = () => {
  const mealList = DUMMY_MEALS.map(meal => {
    return <li key={meal.id}>{meal.name}</li>;
  });

  return (
    <MealsListWrapper>
      <ul>{mealList}</ul>
    </MealsListWrapper>
  );
};
