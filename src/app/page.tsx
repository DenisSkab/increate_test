import Header from '@/app/components/header';
import NumberBlock from '@/app/components/numberBlock';
import SuperiorityBlock from '@/app/components/superiorityBlock';

import '@/assest/scss/main.scss';

export default function Home() {
  return (
    <main className='main'>
      <Header />
      <NumberBlock />
      <SuperiorityBlock />
    </main>
  );
}
