import { useState } from 'react';

export const useFetchApi = () => {
  const [apiData, setApiData] = useState([]);
  const makeAPICall = async (startDate, endDate, full) => {
    try {
      const response = await fetch(
        `http://localhost:8080/?endDate=${endDate}&startDate=${startDate}`
      );
      // JSON olarak dosyayı aldık
      const JSONdata = await response.json();
      const data = JSONdata.body.intraDayTradeHistoryList;
      // Aldığımız bu datayı öncelikle PH değerine göre filtreliyoruz.
      const filterData = data.filter((item) =>
        item.conract.includes(`PH${full}`)
      );
      return setApiData(filterData);
    } catch (e) {
      console.log(e);
    }
  };
  return [apiData, makeAPICall];
};
