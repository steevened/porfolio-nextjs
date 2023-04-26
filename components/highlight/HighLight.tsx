import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { FC, useEffect } from 'react';

interface Props {
  code: string;
  language?: string;
  className?: string;
}

export const HighLight: FC<Props> = ({ code, language = 'js', className }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const block = `${code}`;

  return (
    <div className={className}>
      <pre className={`language-${language}`}>
        <code>{block}</code>
      </pre>
    </div>
  );
};
