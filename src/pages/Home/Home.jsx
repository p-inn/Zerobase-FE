import React from 'react';
import style from './Home.module.scss';
import './Home.module.scss';
import { bestProducts, eventProducts, careProducts } from '../../data/data'
import MainDisplay from '@/components/Home/MainDisplay/MainDisplay';

export default function Home() {
  return (
    <div className={style.container}>
      <MainDisplay data={bestProducts} name={'이번주 베스트 상품 🏆'} />
      <MainDisplay data={eventProducts} name={'이번주 이벤트 아이템'} />
      <MainDisplay data={careProducts} name={'이번주 베스트 케어 상품'} />
    </div>
  );
}
