import Image from 'next/image';
import classNames from 'classnames';

import Button from '@/app/components/UI/button';

import arrow from '@/assest/images/arrow.svg';
import logo from '@/assest/images/Logo.svg';
import listArrow from '@/assest/images/listArrow.svg';

import style from './header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.background}></div>
      <div className={style.headerInfo}>
        <Image src={logo} alt='logo' />
        <nav className={style.wrapper}>
          <ul className={style.headerNavigation}>
            <li className={style.projects}>
              Проекти
              <Image src={listArrow} alt='listArrow' />
            </li>
            <li>Про компанію</li>
            <li>Новини</li>
            <li>Контакти</li>
          </ul>
          <Button text='Зв`язатись з нами' image={arrow} style={style.button} />
        </nav>
        <button className={style.burgerMenu}>
          <div className={style.burgerMenuLine}></div>
        </button>
      </div>
      <div className={style.headerTitle}>
        <p className={style.text}>BITIDI</p>
        <p
          className={classNames(style.text, {
            [style.transparent]: true,
          })}
        >
          Group
        </p>
      </div>
    </header>
  );
};

export default Header;
