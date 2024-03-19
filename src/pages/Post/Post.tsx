import { Comment } from '@/components/Comment/Comment';
import { Loading } from '@/components/Loading/Loading';
import { PAGES } from '@/constants/pages';
import { usePost } from '@/hooks/usePost';
import { CommentType } from '@/types/Comment.type';
import { useNavigate, useParams } from 'react-router-dom';

import { WithComponentLog } from '@/context/WithComponentLog';
import styles from './Post.module.css';

export const Post = () => {
  const { id } = useParams();
  const { post, comments, user, postLoading } = usePost(id as string);
  const navigate = useNavigate();

  if (postLoading) return <Loading />;

  return (
    <WithComponentLog componentName="Post">
      <div className={styles.post_container} data-testid="post">
        <h1 data-testid="post-title">{post.title}</h1>
        <h3 data-testid="post-name">{user?.name}</h3>
        <p className={styles.post_content} data-testid="post-body">
          {post.body}
        </p>

        <div data-testid="post-comments">
          <p className={styles.comments_p}>Comments: ({comments.length})</p>

          {comments.map((comment: CommentType) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>

        <button className={styles.back_btn} onClick={() => navigate(PAGES.POSTS)}>
          &#8249;
        </button>
      </div>
    </WithComponentLog>
  );
};
