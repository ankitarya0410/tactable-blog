import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns';
import { CardType } from '../constants';
import { colours } from '../colours';

const Card: React.FC<CardType> = ({ id, title, description, createdAt, authors, comments }) => {
  const [randomImage, setRandomImage] = useState(null);
  const [showComments, setShowComments] = useState(new Set());

  useEffect(() => {
    const fetchRandomImage = async () => {
      const data = await axios.get('https://picsum.photos/200');
      setRandomImage(data.request.responseURL);
    }

    fetchRandomImage().catch(console.error);

  }, [id]);

  const toggleCommentSection = (id) => {
    const newSet = new Set(showComments);
    if (!newSet.has(id)) {
      newSet.add(id);
    } else {
      newSet.delete(id);
    }
    setShowComments(newSet);
  }

  return (
    <CardWrapper>
      <div>
        <img src={randomImage} alt={title} />
      </div>
      <CardContent>
        <ContentHeader>
          <Posted>Created on &nbsp; {format(new Date(createdAt), 'P')}</Posted>
          {authors.map(author => (
            <AvatarWrapper key={author.id}>
              <Avatar src={author.avatar} />
              <span>{author.name}</span>
            </AvatarWrapper>
          ))}
        </ContentHeader>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <StyledButton onClick={() => toggleCommentSection(id)} disabled={comments.length === 0}>
            {showComments.has(id) ?
              <div><FontAwesomeIcon icon={faAnglesUp} /><span>Hide Comments</span></div> :
              <div><FontAwesomeIcon icon={faAnglesDown} /><span>Show Comments</span></div>
            }
          </StyledButton>
          <div>
            {showComments.has(id) && comments.map(comment => (
                <div key={comment.id}>
                  <CommentTitle>{comment.title}</CommentTitle>
                  <CommentDescription>{comment.description}</CommentDescription>
                  <CommentMeta><span>Posted on &nbsp;</span>{format(new Date(comment.createdAt), 'P')}</CommentMeta>
                </div>
              )
            )}
          </div>
        </div>

      </CardContent>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  padding: 30px;
  margin: 30px 0;
  border: 1px solid ${colours.lightGray};
  border-radius: 20px;
  display: flex;
  -webkit-box-shadow: 0px -3px 17px -6px ${colours.primaryBlue}; 
  box-shadow: 0px -3px 17px -6px ${colours.primaryBlue};
`;

const CardContent = styled.div`
  padding: 0 20px;
  width: 100%;
  
  p {
    font-weight: 400;
  }
`;

const Avatar = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 25px;
  margin-right: 5px;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: right;
`;

const AvatarWrapper = styled.div`
  margin-right: 15px;
  align-items: center;
  display: flex;
`;

const StyledButton = styled.button`
  color: ${colours.primaryBlue};
  background: ${colours.white};
  border: none;  
  margin: 10px 0;
  cursor: pointer;
  span {
    margin-left: 8px;
  }
  ${({disabled}) => disabled && `

    opacity: 0.5;
    cursor: initial;
    
    &:hover {
    transform: none;
  `}
`;

const CommentTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
`;

const CommentDescription = styled.div`
  font-size: 14px;
  margin: 5px 0;
 
`;

const CommentMeta = styled.div`
  display: flex;
  justify-content: right;
  font-size: 14px; 
  color: ${colours.steelGray}; 
  font-size: 12px;
  span {
    font-size: 400;
  }
`;

const Posted = styled.div`
  margin-right: 10px;
  color: ${colours.steelGray}; 
`;

export default Card;