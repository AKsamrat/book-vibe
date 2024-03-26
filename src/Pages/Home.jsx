import React from 'react';
import Banner from '../Components/Banner/Banner';
import CategoryList from '../Components/CategoryList/CategoryList';

const Home = () => {
  return (
    <div className="mt-6">
      <Banner></Banner>
      <h1 className="text-5xl font-bold text-center my-10">Books</h1>
      <CategoryList></CategoryList>
    </div>
  );
};

export default Home;
