import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id : 1,
    name: "Kimchi",
    image: "https://www.thespruceeats.com/thmb/tcomaW3MWhH9FlPiYRqVUfZ2QmU=/2912x2912/smart/filters:no_upscale()/kimchi-dish-served-on-a-white-plate-173021127-588b8a945f9b5874ee55f535.jpg",
    rating : 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://i2.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "Kimbap",
    image: "https://i0.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/10/Halloween-Kimbap-4.jpg",
    rating: 4.7
  }
]

// function renderFood(dish) {  
//    return <Food name={dish.name} picture={dish.image} /> 
// }

function Food({ name, picture, rating }) {
  console.log(name, picture)
  return (
    <div>
      <h1>I like {name}</h1>
      <div><img src={picture} height="300" /></div>
      <p>{rating} / 5.0</p>
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}


function App() {
  return (
    <div className="App">   
      {foodILike.map(dish => <Food key={dish.id} rating={dish.rating} name={dish.name} picture={dish.image} />)}
    </div>);
}

// {foodILike.map(function(dish) {return <Food name={dish.name} picture={dish.image} />})}
// {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
// {foodILike.map(renderFood)}
// index.js:1 Warning: Each child in a list should have a unique "key" prop. 콘솔에 이렇게 뜨기 때문에, id 값을 추가한다.
// key={dish.id}

export default App;
