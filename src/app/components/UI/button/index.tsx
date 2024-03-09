import Image from 'next/image';

type Props = {
  text: string;
  image: any;
  style: string;
};

const Button: React.FC<Props> = ({ text, image, style }) => {
  return (
    <button className={style}>
      {text}
      <Image src={image} alt='arrow' />
    </button>
  );
};

export default Button;
