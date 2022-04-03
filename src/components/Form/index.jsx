import { useEffect } from 'react';
// Hooks
import { useConractTitle } from '../../hooks/useConractTitle';
import { useSumConract } from '../../hooks/useSumConract';
// Tailwind Styled Components
import { TbodyTr, TbodyTh, TbodyTd } from '../../styles/Form';

export default function Form({ item, apiData }) {
  const [conractTitle, setConractTitle] = useConractTitle();
  const [sumConract, setSumConract] = useSumConract();

  useEffect(() => {
    setConractTitle(item);
    setSumConract(item, apiData);
  }, []);

  // sumConract[1] -> Toplam İşlem Miktarı
  // sumConract[0] -> Toplam İşlem Tutarı
  // sumConract[2] -> Ortalama Fiyat

  return (
    <>
      <TbodyTr>
        <TbodyTh>{conractTitle}</TbodyTh>
        <TbodyTd>{sumConract[1]}</TbodyTd>
        <TbodyTd>{sumConract[0]}</TbodyTd>
        <TbodyTd>{sumConract[2]}</TbodyTd>
      </TbodyTr>
    </>
  );
}
