import tw from 'tailwind-styled-components';

export const Container = tw.div`
relative
overflow-x-auto
shadow-md
sm:rounded-lg
container
mx-auto
mt-5
mb-5
`;

export const Table = tw.table`
w-full
text-sm
text-gray-500
text-center
`;

export const Thead = tw.thead`
uppercase
bg-gray-700
text-gray-400
`;

export const TheadTr = tw.tr`
`;

export const TheadTh = tw.th`
px-6
py-3
`;

export const Tbody = tw.tbody`
`;

export const TbodyTr = tw.tr`
border-b
bg-gray-800
border-gray-700
text-neutral-400
`;

export const TbodyTh = tw.th`
px-6
py-4
font-medium
text-white
whitespace-nowrap
`;

export const TbodyTd = tw.td`
px-6
py-4
`;
