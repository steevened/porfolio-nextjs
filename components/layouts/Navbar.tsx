import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Navbar = ({ className }: { className?: string }) => {
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const [routeIndex, setRouteIndex] = useState<number>(-1);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleHover = (index: number) => {
    setHoverIndex(index);
  };

  const handleLeave = () => {
    setHoverIndex(-1);
  };

  const router = useRouter();
  const { pathname } = router;

  const isHome = pathname === '/';
  const isAbout = pathname === '/about';
  const isWorks = pathname === '/works';
  const isContact = pathname === '/contact';
  const isBlogs = pathname === '/blogs';

  useEffect(() => {
    switch (pathname) {
      case '/':
        setRouteIndex(-1);
        break;
      case '/about':
        setRouteIndex(0);
        break;
      case '/works':
        setRouteIndex(1);
        break;
      case '/blogs':
        setRouteIndex(2);
        break;
      case '/contact':
        setRouteIndex(3);
        break;
      default:
        setRouteIndex(-1);
        break;
    }
  }, [pathname]);

  return (
    <nav className="flex items-center gap-5 p-5 bg-black shadow-app-bottom">
      <Link href="/" className=" grow">
        <p className="font-semibold">STEVEN ELIAS</p>
      </Link>
      <ul className="relative items-center hidden mx-4 overflow-hidden sm:flex">
        <span
          className={`absolute h-full bg-gradient-to-br from-zinc-900 to-neutral-800 rounded-lg transition-all duration-700 ease-out pointer-events-none w-1/4 ${
            hoverIndex === -1
              ? routeIndex === -1
                ? '-left-1/4'
                : routeIndex === 0
                ? 'left-0'
                : routeIndex === 1
                ? 'left-1/4'
                : routeIndex === 2
                ? 'left-1/2'
                : routeIndex === 3
                ? 'left-3/4'
                : ''
              : hoverIndex === 0
              ? 'left-0'
              : hoverIndex === 1
              ? 'left-1/4'
              : hoverIndex === 2
              ? 'left-1/2'
              : hoverIndex === 3
              ? 'left-3/4'
              : ''
          } `}
        ></span>

        <Link
          className={`w-20 px-2 py-1 bg-transparent rounded-lg z-50 ${
            isAbout &&
            'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow z-10'
          }`}
          href="/about"
          onMouseEnter={() => handleHover(0)}
          onMouseLeave={() => handleLeave()}
        >
          About
        </Link>
        <li
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleLeave()}
          className={`w-20 px-2 py-1 rounded-lg bg-transparent z-50 ${
            isWorks &&
            'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow z-10'
          }`}
        >
          <Link href="/works">Works</Link>
        </li>
        <li
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={() => handleLeave()}
          className={`w-20 px-2 py-1 rounded-lg bg-transparent z-50 ${
            isBlogs &&
            'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow z-10'
          }`}
        >
          <Link href="/blogs">Blog</Link>
        </li>
        <li
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={() => handleLeave()}
          className={`w-20 px-2 py-1 rounded-lg bg-transparent z-50 ${
            isContact &&
            'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow z-10'
          }`}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div
        role="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex flex-col justify-between h-6 "
      >
        <div
          className={`shadow-app-shadow-hover w-8 h-[1px] duration-200 ${
            isMenuOpen && 'rotate-45 translate-y-[12px]'
          }`}
        />
        <div
          className={`shadow-app-shadow-hover w-8 h-[1px] duration-200 ${
            isMenuOpen && 'opacity-0'
          }`}
        />
        <div
          className={`shadow-app-shadow-hover w-8 h-[1px] duration-200 ${
            isMenuOpen && '-rotate-45 -translate-y-[10px]'
          }`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
