import { useState } from 'react';
import UseBookData from '../../Hooks/UseBookData';
import Cards from '../Cards/Cards';

const CategoryList = () => {
  // const [value, setValue] = useState('');
  const { data, loading } = UseBookData();
  // console.log(data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {data.map(item => (
        <Cards key={item.bookId} item={item}></Cards>
      ))}
    </div>
  );
};

export default CategoryList;
