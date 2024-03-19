import { useComponentLog } from '@/hooks/useComponentLog';
import React, { PropsWithChildren, useEffect, useRef } from 'react';

interface WithComponentLogProps extends PropsWithChildren {
  componentName: string;
}

export const WithComponentLog: React.FC<WithComponentLogProps> = ({
  componentName,
  children,
}) => {
  const mounted = useRef(false);
  const { message } = useComponentLog();

  useEffect(() => {
    if (!mounted.current) {
      console.log(`${message} %c${componentName}`, 'color: blue');
      mounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};
