import { HighLight } from '@/components/highlight/HighLight';

export const GradientHighlight = () => {
  const code = `
  <div
  class="
    [...]
    bg-gradient-to-r from-transparent via-gray-900/20 dark:via-gray-100/10 to-transparent"
    ></div>  
  `;

  return <HighLight code={code} language="js" />;
};
