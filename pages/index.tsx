import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from 'common/header/header';
import Footer from 'common/footer/footer';
import Card from 'common/card/card';
import styled from 'styled-components';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from 'react-query';
import { Post } from '../constants';
import { colours } from '../common/colours';
// import { useMediaQuery } from '@mountain-ui/react-hooks';

const Home: NextPage = () => {
  const [page, setPage] = useState(1);
  let response = [], totalCount = 0, pageCount = 1;

  /*const isMobile = useMediaQuery('screen and (min-width: 320px) and (max-width: 480px)');
  const isTablet = useMediaQuery('screen and (min-width: 481px) and (max-width: 768px)');
  const isDesktop = !isMobile && !isTablet;*/

  const { status: postStatus, error: postError, data: postData } = useQuery<Post[], Error>(
    ['posts', { page }],
    getPosts
  );

  const { status: countStatus, data: countData } = useQuery<Post[], Error>(
    ['count', {}],
    getCount
  );

  if (postStatus === 'success') {
    response = {
      totalCount: !!postData && postData.length > 0 && postData.length,
      perPage: 5,
      posts: !!postData && postData.length > 0 && postData,
      postStatus,
      postError
    };
  }

  if(countStatus === 'success') {
    totalCount = !!countData && countData.length;
    pageCount = !!countData && countData.length > 0 && Math.ceil(totalCount/5);
  }

  const handlePagination = (flag: string) => {
    if (flag === 'next') {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Wrapper>
      <Head>
        <title>Tactable Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {postStatus === 'loading' && (
        <LoadingState>
          <img src='../public/circles.svg' />
        </LoadingState>
      )}
      <ContentWrapper>
        {postStatus === 'success' && !!response && !!response.posts && response.posts.length > 0 && response.posts.map((post) => (
          <Card
            id={post.id}
            title={post.title}
            description={post.description}
            createdAt={post.createdAt}
            authors={post.authors}
            comments={post.comments}
            key={post.id}
          />
        ))}
        <PaginationWrapper>
          <StyledButton onClick={() => handlePagination('prev')} disabled={page === 1}><FontAwesomeIcon icon={faAngleLeft}/><span>Prev</span></StyledButton>
          <StyledButton onClick={() => handlePagination('next')} disabled={countStatus === 'success' && page === pageCount}><span>Next</span><FontAwesomeIcon icon={faAngleRight}/></StyledButton>
        </PaginationWrapper>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  )
}

type Params = {
  queryKey: [string, { page: number }];
};

async function getPosts(params: Params) {
  const [, { page }] = params.queryKey;
  const response = await axios.get(`https://6144e843411c860017d256f0.mockapi.io/api/v1/posts?page=${page}&limit=5&sortBy=createdAt&order=desc`);

  if (!(response.statusText === 'OK')) {
    throw new Error("Problem fetching data");
  }

  return response.data;
}

async function getCount(params: Params) {
  const [, {}] = params.queryKey;
  const response = await axios.get(`https://6144e843411c860017d256f0.mockapi.io/api/v1/posts?sortBy=createdAt&order=desc`);

  if (!(response.statusText === 'OK')) {
    throw new Error("Problem fetching data");
  }

  return response.data;
}

const Wrapper = styled.div`
  font-family: myriad-pro, sans-serif;
  font-weight: 300;
  font-style: normal;
  width: 100%;
`;

const ContentWrapper = styled.div`
  padding: 80px;
  width: 80%;
  margin: auto;
`;

const PaginationWrapper = styled.div`
  padding: 10px;
  float: right;
`;

const StyledButton = styled.button`
  background: ${colours.white};
  border: none;
  cursor: pointer;
  color: ${colours.primaryBlue};
  font-size: 24px;
  opacity: 0.75;
  transition: transform 0.2s;
  margin-right: 2px;
  
  span {
    margin: 0 10px;
  }
 
  &:hover {
    transform: scale(1.05);
  }
  
  ${({disabled}) => disabled && `
    opacity: 0.5;
    cursor: initial;
    
    &:hover {
    transform: none;
  `}
`;

const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25%;
`;

export default Home;