import { useState } from 'react';

export const useConractTitle = () => {
  const [conractTitle, setConractTitle] = useState('');

  function ChangeConractTitle(conract) {
    const date = new Date();
    // Conract ile gelen PH değerini siler ve geriye kalanı alır.
    conract = conract.split('PH').join('');

    // Geriye kalan değerleri de 2'şer 2'şer böler.
    conract = conract.match(/.{1,2}/g);

    date.setMinutes(0);
    date.setSeconds(0);
    date.setHours(conract[3]);
    date.setFullYear(conract[0]);

    // PH olan değerleri istenilen formata çeviriyoruz
    const ConractDate = {
      month: date.getMonth(conract[1]) + 1,
      day: date.getDate().toString().padStart(2, '0'),
      minute: date.getMinutes().toString().padStart(2, '0'),
      hour: date.getHours().toString().padStart(2, '0'),
      year: date.getFullYear().toString().padStart(4, '20'),
      full: function () {
        return `${this.month}.${this.day}.${this.year} ${this.hour}:${this.minute}`;
      },
    };
    return setConractTitle(ConractDate.full());
  }
  return [conractTitle, ChangeConractTitle];
};
