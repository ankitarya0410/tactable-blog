export type Author = {
  postId: number,
  id: number,
  updatedAt: string,
  createdAt: string,
  avatar: string,
  name: string
};

export type Comment = {
  title: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  postId: number,
  id: number
};

export type Post = {
  title: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  id: number,
  Authors: Author[],
  Comments: Comment[]
};

export interface CardType {
  id: number,
  createdAt: string,
  title: string,
  description: string,
  authors: Author[],
  comments: Comment[]
}