import React, { FC } from 'react';
import { GetItemsDelivery } from '../../Components/GetItemsDelivery/GetItemsDelivery';
import { ItemsCategory } from '../../Components/ItemsCategory/ItemsCategory';
import { MakingMoneyAndJob } from '../../Components/MakingMoneyAndJob/MakingMoneyAndJob';
import { QuickLinks } from '../../Components/QuickLinks/QuickLinks';
import { Search } from '../../Components/Search/Search';
import { Header } from '../../Share/Header/Header';

export const Home:FC = () => {
  return (
    <div className=''>
      <Header />
      <Search />
      <ItemsCategory />
      <MakingMoneyAndJob />
      <GetItemsDelivery />
      <QuickLinks />
    </div>
  );
};