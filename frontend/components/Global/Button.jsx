import Link from 'next/link';

const Button = ({ title, href = '#', className }) => {
  return (
    <button
      className={`bg-primary text-darker px-4 py-2 mt-3 rounded-lg hover:bg-dark hover:text-primary transition-all duration-200 ${
        className && className
      }`}
    >
      <Link href={href}>{title}</Link>
    </button>
  );
};

export default Button;
