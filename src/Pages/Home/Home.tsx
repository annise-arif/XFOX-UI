import React, { FC } from 'react';
import { Search } from '../../Components/Search/Search';
import { Header } from '../../Share/Header/Header';

export const Home:FC = () => {
  return (
    <div className=''>
      <Header />
      <Search />
    </div>
  );
};