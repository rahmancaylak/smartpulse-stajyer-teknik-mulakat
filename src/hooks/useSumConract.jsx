import { useState } from 'react';

export const useSumConract = () => {
  const [sumConract, setSumConract] = useState([]);

  const sumPH = (uniqueItems, apiData) => {
    let sumIslemTutari = 0;
    let sumIslemMiktari = 0;
    apiData.map((item) => {
      if (item.conract === uniqueItems) {
        sumIslemTutari += (item.price * item.quantity) / 10;
        sumIslemMiktari += item.quantity / 10;
      }
      return [sumIslemTutari, sumIslemMiktari];
    });
    return setSumConract([
      sumIslemTutari
        .toFixed(2)
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ','),
      sumIslemMiktari
        .toFixed(2)
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ','),
      (sumIslemTutari / sumIslemMiktari)
        .toFixed(2)
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ','),
    ]);
  };

  return [sumConract, sumPH];
};
