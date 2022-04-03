import { useEffect } from 'react';
// Hooks
import { useConractTitle } from '../../hooks/useConractTitle';
import { useSumConract } from '../../hooks/useSumConract';

export default function Form({ item, apiData }) {
  const [conractTitle, setConractTitle] = useConractTitle();
  const [sumConract, setSumConract] = useSumConract();

  useEffect(() => {
    setConractTitle(item);
    setSumConract(item, apiData);
  }, []);

  return (
    <>
      <tr>
        <td>{conractTitle}</td>
        <td>{sumConract[1]}</td>
        <td>{sumConract[0]}</td>
        <td>{sumConract[2]}</td>
      </tr>
    </>
  );
}
