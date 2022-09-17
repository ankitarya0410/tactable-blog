import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from 'common/header/header';
import Footer from 'common/footer/footer';
import Card from 'common/card/card';
import styled from 'styled-components';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useQuery, UseQueryResult } from 'react-query';
import {Post, PageProps, MobileProps} from '../common/constants';
import { colours } from '../common/colours';
import { ColorRing } from  'react-loader-spinner';

const Home: React.FC<PageProps> = ({ isMobile, isTablet }) => {
  const [page, setPage] = useState(1);
  let posts: Array<Post> = [], pageCount: number = 1;

  const {status: postStatus, data: postData}: UseQueryResult<any, Error> = useQuery<any, Error>(
    ['posts', { page }],
    getPosts
  );

  const {status: countStatus, data: countData}: UseQueryResult<any, Error> = useQuery<any, Error>(
    ['count', {}],
    getCount
  );

  if (postStatus === 'success') {
    posts = postData;
  }

  if(countStatus === 'success') {
    pageCount = Math.ceil(countData/5);
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
      <Header isMobile={isMobile} isTablet={isTablet} />
      {postStatus === 'loading' && (
        <LoadingState>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={[`${colours.primaryBlue}`, `${colours.primaryBlue}`, `${colours.primaryBlue}`, `${colours.primaryBlue}`, `${colours.primaryBlue}`]}
          />
        </LoadingState>
      )}
      <ContentWrapper isTablet={isTablet} isMobile={isMobile}>
        {postStatus === 'success' && posts.length > 0 && posts.map((post: Post) => (
          <Card
            id={post.id}
            title={post.title}
            description={post.description}
            createdAt={post.createdAt}
            authors={post.authors}
            comments={post.comments}
            isMobile={isMobile}
            key={post.id}
          />
        ))}
        {postStatus === 'success' && (<PaginationWrapper>
          <StyledButton onClick={() => handlePagination('prev')} disabled={page === 1}><FontAwesomeIcon
            icon={faAngleLeft}/><span>Prev</span></StyledButton>
          <StyledButton onClick={() => handlePagination('next')}
                        disabled={countStatus === 'success' && page === pageCount}><span>Next</span><FontAwesomeIcon
            icon={faAngleRight}/></StyledButton>
        </PaginationWrapper>
        )}
      </ContentWrapper>
      <Footer isMobile={isMobile} isTablet={isTablet} />
    </Wrapper>
  )
}

type Params = {
  queryKey: [string, { page: number }];
};

const getPosts: any = async (params: Params) => {
  const [, { page }] = params.queryKey;
  const response = await axios.get(`https://6144e843411c860017d256f0.mockapi.io/api/v1/posts?page=${page}&limit=5&sortBy=createdAt&order=desc`);

  if (!(response.statusText === 'OK')) {
    throw new Error("Problem fetching data");
  }

  return response.data;
}

const getCount: any = async (params: Params) => {
  const [, {}] = params.queryKey;
  const response = await axios.get(`https://6144e843411c860017d256f0.mockapi.io/api/v1/posts?sortBy=createdAt&order=desc`);

  if (!(response.statusText === 'OK')) {
    throw new Error("Problem fetching data");
  }

  return response.data.length;
}

const Wrapper = styled.div`
  font-family: myriad-pro, sans-serif;
  font-weight: 300;
  font-style: normal;
  width: 100%;
`;

const ContentWrapper = styled.div<MobileProps>`
  padding: 80px;
  width: 80%;
  margin: auto;
  ${({isMobile, isTablet}) => (isMobile || isTablet) && `
    width: 100%;
    padding: 15px;
  `}
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