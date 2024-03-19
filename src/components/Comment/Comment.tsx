import { CommentType as CommentProps } from '@/types/Comment.type';

import { WithComponentLog } from '@/context/WithComponentLog';
import styles from './Comment.module.css';

export const Comment: React.FC<CommentProps> = ({ id, name, email, body }) => (
  <WithComponentLog componentName="Comment">
    <div className={`flex ${styles.comment_container}`} data-testid={`comment-${id}`}>
      <div className={`flex ${styles.comment_name}`} data-testid={`comment-${id}-info`}>
        <p>{name}</p>
        <p>{email}</p>
      </div>

      <p className={styles.comment_content} data-testid={`comment-${id}-body`}>
        {body}
      </p>
      <hr />
    </div>
  </WithComponentLog>
);
