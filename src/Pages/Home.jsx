import React from 'react';
import Banner from '../Components/Banner/Banner';
import CategoryList from '../Components/CategoryList/CategoryList';

const Home = () => {
  return (
    <div className="mt-6">
      <Banner></Banner>
      <h1>Home</h1>
      <CategoryList></CategoryList>
    </div>
  );
};

export default Home;
