import { HighLight } from '@/components/highlight/HighLight';

export const Animation = () => {
  const code = `
  {
    "keyframes": {
      "gradient-x": {
        "100%": {
          "transform": "translateX(100%)",
        },
      },
    }
  },  
  `;
  return <HighLight language="js" code={code} />;
};
