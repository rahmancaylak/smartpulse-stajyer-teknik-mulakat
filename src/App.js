import React, { useState, useEffect } from 'react';
// Components
import Loading from './components/Loading';
import Form from './components/Form';
// Custom Hooks
import { useApiDate } from './hooks/useApiDate';
import { useFetchApi } from './hooks/useFetchApi';
// Tailwind Styled Components
import {
  Container,
  Table,
  Thead,
  TheadTr,
  TheadTh,
  Tbody,
} from './styles/Form';

export default function App() {
  const [conract, setConract] = useState([]);
  // startDate, endDate gibi parametrelerimizi alıyoruz
  const { startDate, endDate, full } = useApiDate();
  // API'dan verileri çekmek için çağırıyoruz
  const [apiData, setApiData] = useFetchApi();

  // Component didMount anında useFetchApi hookumuza useApiDate hookumuzun değerlerini gönderiyoruz
  useEffect(() => {
    setApiData(startDate, endDate, full);
  }, []);

  // API'dan verileri çektikten sonra benzersiz olan PH değerlerini alıyoruz (PH22012606, PH22012607...)
  useEffect(() => {
    const uniqueItems = [...new Set(apiData.map((item) => item.conract))];
    setConract(uniqueItems.sort());
  }, [apiData]);

  if (apiData.length === 0) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Table>
          <Thead>
            <TheadTr>
              <TheadTh>Tarih</TheadTh>
              <TheadTh>Toplam İşlem Miktarı (MWh)</TheadTh>
              <TheadTh>Toplam İşlem Tutarı (TL)</TheadTh>
              <TheadTh>Ağırlık Ortalama Fiyat (TL/MWh)</TheadTh>
            </TheadTr>
          </Thead>
          <Tbody>
            {conract.map((item) => (
              <Form key={item} apiData={apiData} item={item}></Form>
            ))}
          </Tbody>
        </Table>
      </Container>
    );
  }
}
