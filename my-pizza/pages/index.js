import PizzaOfTheDay from '@/components/PizzaOfTheDay.js';
import { useSelector } from 'react-redux';

export default function Home({ pizzas, pizzaOfTheDay }) {
  const user = useSelector((state) => state.user);
  console.log(user);
  if (
    user?.length === 0 ||
    !user ||
    pizzas.length === 0 ||
    !pizzas ||
    !pizzaOfTheDay ||
    pizzaOfTheDay.length === 0
  ) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <PizzaOfTheDay />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3004/pizzas', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const resData = await res.json();

  const resPizzaOfTheDay = await fetch(
    'http://localhost:3004/pizzas/?pizzaOfTheDay=true',
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    }
  );
  const resPizzaOfTheDayData = await resPizzaOfTheDay.json();

  return {
    props: {
      pizzas: resData,
      pizzaOfTheDay: resPizzaOfTheDayData,
    },
  };
}
