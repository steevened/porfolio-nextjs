import React, { useEffect, useRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rippleColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  rippleColor = 'rgba(255, 255, 255, 0.5)',
  className,
  children,
  ...restProps
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const buttonElement = buttonRef.current;
    if (!buttonElement) return;

    const handleClick = (event: MouseEvent) => {
      const { offsetWidth, offsetHeight, offsetLeft, offsetTop } =
        buttonElement;
      const { pageX, pageY, currentTarget } = event;

      const x = ((pageX - offsetLeft) * 100) / offsetWidth;
      const y = ((pageY - offsetTop) * 100) / offsetHeight;

      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');
      ripple.style.background = rippleColor;
      ripple.style.left = `${x}%`;
      ripple.style.top = `${y}%`;

      buttonElement.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 1500);
    };

    buttonElement.addEventListener('click', handleClick);

    return () => {
      buttonElement.removeEventListener('click', handleClick);
    };
  }, [rippleColor]);

  return (
    <button
      ref={buttonRef}
      className={`fixed overflow-hidden ripple ${className} `}
      data-ripple={rippleColor}
      {...restProps}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
