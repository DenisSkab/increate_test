import classNames from 'classnames';
import Button from '@/app/components/UI/button';
import Title from '@/app/components/UI/title';

import blackArrow from '@/assest/images/blackArrow.svg';

import style from './numberBlock.module.scss';

const NumberBlock = () => {
  return (
    <div className={style.content}>
      <Title text='У нас є нерухомість на будь-який смак' />
      <div className={style.textWrapper}>
        <p className={style.textWrapperText}>
          Це простір для комфортного життя, майданчик для вигідних інвестицій,
          високий сервіс керуючої компанії, архітектурні та дизайнерські
          рішення, які формують нову культуру міського середовища.
        </p>
        <p className={style.textWrapperText}>
          Це простір для комфортного життя, майданчик для вигідних інвестицій,
          високий сервіс керуючої компанії, архітектурні та дизайнерські
          рішення, які формують нову культуру міського середовища.
        </p>
      </div>
      <div className={style.numberWrapper}>
        <Button text='Про компанію' image={blackArrow} style={style.button} />
        <div className={style.wrapper}>
          <div className={style.item}>
            <span className={style.itemNumber}>+2027</span>
            <span className={style.itemText}>
              Квартир введено в експлуатацію
            </span>
          </div>
          <div className={style.item}>
            <span
              className={classNames(style.itemNumber, style.transparentText)}
            >
              +2082
            </span>
            <span className={style.itemText}>метрів квадратних побудовано</span>
          </div>
          <div className={style.item}>
            <span
              className={classNames(style.itemNumber, style.transparentText)}
            >
              +4766
            </span>
            <span className={style.itemText}>людей, у яких є житло DIM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberBlock;
