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

export interface Post {
  title: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  id: number,
  authors: Array<Author>,
  comments: Array<Comment>
}

export interface CardType {
  id: number,
  createdAt: string,
  title: string,
  description: string,
  authors: Array<Author>,
  comments: Array<Comment>,
  isMobile: boolean
}

export interface MobileProps {
  showMenu?: boolean,
  isMobile?: boolean,
  isTablet?: boolean
}

export interface PageProps {
  isMobile?: boolean,
  isTablet?: boolean
}