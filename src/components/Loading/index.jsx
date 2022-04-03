// Icon
import { ImSpinner9 } from 'react-icons/im';
// Tailwind Styled Components
import { Container, Title } from '../../styles/Loading';

export default function Loading() {
  return (
    <Container>
      <ImSpinner9 className='w-14 h-14 animate-spin fill-blue-600'></ImSpinner9>
      <Title>Loading...</Title>
    </Container>
  );
}
