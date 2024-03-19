import { PropsWithChildren } from 'react';

import { WithComponentLog } from '@/context/WithComponentLog';
import styles from './Layout.module.css';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <WithComponentLog componentName="Layout">
    <div className={styles.layout} data-testid="layout">
      {children}
    </div>
  </WithComponentLog>
);
