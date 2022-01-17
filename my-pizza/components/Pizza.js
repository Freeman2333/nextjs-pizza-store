import React from 'react';
import Link from 'next/link';

const Pizza = ({ id, name, text }) => {
  return (
    <Link href={`/pizzas/${id}`}>
      <a>
        <div className="item">
          <div
            className="inner-item"
            style={{ background: `url('/images/pizza_${id}.jpg')` }}
          >
            <div className="overlay"></div>
            <div className="item-info">
              <h3>{name}</h3>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default React.memo(Pizza);
