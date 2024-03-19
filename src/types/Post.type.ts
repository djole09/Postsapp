import { CommentType } from './Comment.type';
import { UserType } from './User.type';

export interface PostType {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface CustomPostType extends PostType {
  comments: CommentType[];
  user: UserType;
}
