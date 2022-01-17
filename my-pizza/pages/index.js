import PizzaOfTheDay from '@/components/PizzaOfTheDay.js';
import Pizzas from '@/components/Pizzas';
import { getPizzas } from '@store/pizza/pizzaAction';
import { useSelector } from 'react-redux';
import { wrapper } from './../store/store';

export default function Home({ pizzaOfTheDay }) {
  const pizzas = useSelector((state) => state.pizzas);
  console.log(pizzas);
  const user = {};
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
      <PizzaOfTheDay
        img={pizzaOfTheDay[0].img}
        name={pizzaOfTheDay[0].name}
        text={pizzaOfTheDay[0].text}
        id={pizzaOfTheDay[0].id}
      />
      <Pizzas pizzas={pizzas} />
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(getPizzas());
});

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3004/pizzas', {
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json',
//     },
//   });
//   const resData = await res.json();

//   const resPizzaOfTheDay = await fetch(
//     'http://localhost:3004/pizzas/?pizzaOfTheDay=true',
//     {
//       method: 'GET',
//       headers: {
//         'Content-type': 'application/json',
//       },
//     }
//   );
//   const resPizzaOfTheDayData = await resPizzaOfTheDay.json();

//   return {
//     props: {
//       pizzas: resData,
//       pizzaOfTheDay: resPizzaOfTheDayData,
//     },
//   };
// }
