import { WithComponentLog } from '@/context/WithComponentLog';
import styles from './Loading.module.css';

export const Loading = () => (
  <WithComponentLog componentName="Loading">
    <div className={styles.lds_ring} data-testid="loading">
      <div />
      <div />
      <div />
      <div />
    </div>
  </WithComponentLog>
);
