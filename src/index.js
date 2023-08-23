import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data'
import './index.css';

function App() {
  const cards = data.map(item => {
    return (
      <Card
      key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openspots={item.openSpots}
        // item={item} Pass objects as props
        // {...item} very easy
      />
    )
  })
  return (<div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
