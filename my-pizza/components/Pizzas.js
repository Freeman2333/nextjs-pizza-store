import Pizza from './Pizza';

const Pizzas = ({ pizzas }) => {
  if (!pizzas || pizzas.length === 0) {
    return <h1>Loading</h1>;
  }
  console.log(pizzas);
  return (
    <>
      <div className="pizzas_wrapper">
        <div className="articles">
          {pizzas.slice(0, 4).map((pizza) => {
            return (
              <Pizza
                key={pizza.id}
                id={pizza.id}
                text={pizza.text}
                name={pizza.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pizzas;

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
