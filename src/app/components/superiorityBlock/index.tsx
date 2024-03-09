import Image from 'next/image';

import Title from '@/app/components/UI/title';

import one from '@/assest/images/Mask group.svg';
import two from '@/assest/images/Mask group (1).svg';
import three from '@/assest/images/Mask group (2).svg';
import four from '@/assest/images/Mask group (3).svg';
import five from '@/assest/images/Mask group (4).svg';
import six from '@/assest/images/Mask group (5).svg';

import style from './superiorityBlock.module.scss';

const SuperiorityBlock = () => {
  return (
    <div className={style.content}>
      <Title text='Переваги BITIDI ' />
      <ul className={style.list}>
        <li className={style.item}>
          <Image src={one} alt='icon' className={style.image} />
          <span className={style.itemTitle}>ДОСВІД ТА НАДІЙНІСТЬ</span>
        </li>
        <li className={style.item}>
          <Image src={two} alt='icon' className={style.image} />
          <span className={style.itemTitle}>ЯКІСНЕ БУДІВНИЦТВО</span>
        </li>
        <li className={style.item}>
          <Image src={three} alt='icon' className={style.image} />
          <span className={style.itemTitle}>ІННОВАЦІЇ ТА ДИЗАЙН</span>
        </li>
        <li className={style.item}>
          <Image src={four} alt='icon' className={style.image} />
          <span className={style.itemTitle}>
            КЛІЄНТООРІЄНТОВАНІСТЬ ТА ШИРОКИЙ СПЕКТР ПРОЕКТІВ
          </span>
        </li>
        <li className={style.item}>
          <Image src={five} alt='icon' className={style.image} />
          <span className={style.itemTitle}>ЕКОЛОГІЧНА ВІДПОВІДАЛЬНІСТЬ</span>
          <p className={style.itemText}>
            Ми приділяємо увагу екологічним аспектам у будівництві,
            використовуючи енергоефективні технології та матеріали для
            збереження природних ресурсів.
          </p>
        </li>
        <li className={style.item}>
          <Image src={six} alt='icon' className={style.image} />
          <span className={style.itemTitle}>КОМАНДА ПРОФЕСІОНАЛІВ</span>
        </li>
      </ul>
    </div>
  );
};

export default SuperiorityBlock;
