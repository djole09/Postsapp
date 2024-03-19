import { Loading } from '@/components/Loading/Loading';
import { PostItem } from '@/components/PostItem/PostItem';
import { SearchForm } from '@/components/SearchForm/SearchForm';
import { useForm } from '@/hooks/useForm';
import { usePosts } from '@/hooks/usePosts';
import { CustomPostType } from '@/types/Post.type';
import { SearchFormType } from '@/types/SearchForm.type';

import { WithComponentLog } from '@/context/WithComponentLog';
import styles from './Posts.module.css';

export const Posts = () => {
  const { values, onChange, resetForm } = useForm<SearchFormType>({ name: '' });
  const { posts, postsLoading } = usePosts();

  const filterCb = (item: CustomPostType) => {
    if (!values.name) return item;

    return (
      item.user.name.match(new RegExp(values.name, 'gi')) ||
      item.user.username.match(new RegExp(values.name, 'gi'))
    );
  };

  if (postsLoading) return <Loading />;

  return (
    <WithComponentLog componentName="Posts">
      <div className={styles.posts} data-testid="posts">
        <SearchForm
          name="name"
          id="search"
          placeholder="Search posts by Name"
          value={values.name}
          onChange={onChange}
          resetForm={resetForm}
        />

        <div className={styles.posts_container}>
          {posts.filter(filterCb).length > 0 ? (
            posts
              .filter(filterCb)
              .map((item: CustomPostType) => <PostItem key={item.id} {...item} />)
          ) : (
            <p>No posts</p>
          )}
        </div>
      </div>
    </WithComponentLog>
  );
};
