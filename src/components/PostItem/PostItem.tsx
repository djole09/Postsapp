import { CommentType } from '@/types/Comment.type';
import { CustomPostType as PostItemProps } from '@/types/Post.type';
import { useState } from 'react';

import { PAGES } from '@/constants/pages';
import { WithComponentLog } from '@/context/WithComponentLog';
import { useNavigate } from 'react-router-dom';
import { Comment } from '../Comment/Comment';
import styles from './PostItem.module.css';

export const PostItem: React.FC<PostItemProps> = ({
  id,
  body,
  title,
  user,
  comments,
}) => {
  const [showComments, setShowComments] = useState(false);

  const navigate = useNavigate();

  return (
    <WithComponentLog componentName="PostItem">
      <div className={`flex ${styles.post_item}`} data-testid={`post-item-${id}`}>
        <h1
          onClick={() => navigate(`${PAGES.POST_ITEM}/${id}`)}
          data-testid={`post-item-title-${id}`}
        >
          {title}
        </h1>
        <p data-testid={`post-item-body-${id}`}>{body}</p>
        <h3 data-testid={`post-item-name-${id}`}>{user.name}</h3>

        <div
          className={styles.comments}
          onClick={() => setShowComments((prevState) => !prevState)}
          data-testid={`post-item-show-${id}`}
        >
          <p>
            {showComments ? 'Hide' : 'Show'} comments ({comments.length})
          </p>
        </div>

        {showComments && (
          <div className={styles.comments_list} data-testid={`post-item-comments-${id}`}>
            {comments.map((comment: CommentType) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </div>
        )}
      </div>
    </WithComponentLog>
  );
};
