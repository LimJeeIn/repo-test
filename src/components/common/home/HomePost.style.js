import styled from 'styled-components';
import userImage from '../../assets/image-profile-vertical.png';
import moreButton from '../../assets/icon-more-vertical.png';
import contentImages from '../../assets/image-content-vertical.png';
import likeIcon from '../../assets/icon-like-vector.png';
import commentIcon from '../../assets/icon-comment-vector.png';

export const Wrapper = styled.section`
  max-width: 358px;
`;

export const Article = styled.article`
  display: flex;
`;

export const UserImage = styled.div`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  cursor: pointer;
  background-image: url(${userImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const PostWapper = styled.div`
  width: 316px;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  margin: 0;
`;

export const SubTitle = styled.p`
  display: block;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
  margin: 0;
`;

export const MoreButton = styled.button`
  width: 18px;
  height: 18px;
  background-image: url(${moreButton});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: #fff;

  border: none;
  box-shadow: none;
  overflow: visible;
  cursor: pointer;
`;

export const PostDetail = styled.div`
  margin-top: 13px;
`;

export const Content = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  white-space: pre-wrap;
  word-break: break-all;
`;

export const ContentImage = styled.img`
  margin-top: 16px;
  background-image: url(${contentImages});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 100%;
  aspect-ratio: auto 304/228;
  vertical-align: top;
`;

export const PostIconWrapper = styled.div`
  display: flex;
  gap: 18px;
  padding: 14px 0 18px;
`;

export const Like = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;

export const LikeIcon = styled.img`
  background-image: url(${likeIcon});
  background-repeat: no-repeat;
  background-position: center center;
  width: 18px;
  height: 18px;
`;

export const LikeCount = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #767676;
`;

export const Comment = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;

export const CommentIcon = styled.img`
  background-image: url(${commentIcon});
  background-repeat: no-repeat;
  background-position: center center;
  width: 18px;
  height: 18px;
`;

export const CommentCount = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #767676;
`;

export const PostDate = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #767676;
`;
