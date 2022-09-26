import React, { FC } from 'react';
import { AboutXfox } from '../../Components/AboutXfox/AboutXfox';
import { GetItemsDelivery } from '../../Components/GetItemsDelivery/GetItemsDelivery';
import { ItemsCategory } from '../../Components/ItemsCategory/ItemsCategory';
import { MakingMoneyAndJob } from '../../Components/MakingMoneyAndJob/MakingMoneyAndJob';
import { QuickLinks } from '../../Components/QuickLinks/QuickLinks';
import { Search } from '../../Components/Search/Search';
import { Footer } from '../../Share/Footer/Footer';
import { Header } from '../../Share/Header/Header';

export const Home:FC = () => {
  return (
    <>
      <Header />
      <Search />
      <ItemsCategory />
      <MakingMoneyAndJob />
      <GetItemsDelivery />
      <QuickLinks />
      <AboutXfox />
      <Footer />
    </>
  );
};