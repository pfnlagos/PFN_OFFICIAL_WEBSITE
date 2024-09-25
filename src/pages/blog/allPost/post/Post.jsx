import React, { useState } from "react";
import Img3 from "../../../../images/bg2.jpg";
import Img5 from "../../../../images/pro9.jpg";
// import UserImg from "../../../../images/user.png";
import  UserImg from '../../../../images/PFN10.png'
import styled from "styled-components";
import './Post.css'
import H3 from "../../../../components/Text/H3";
import Button from '@mui/material/Button'
import { Link} from "react-router-dom";
import moment from "moment";

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    -webkit-clip-path: polygon(
      50% 0%,
      100% 0,
      100% 43%,
      94% 78%,
      68% 100%,
      32% 100%,
      6% 78%,
      0% 43%,
      0 0
    );
    clip-path: polygon(
      50% 0%,
      100% 0,
      100% 43%,
      94% 78%,
      68% 100%,
      32% 100%,
      6% 78%,
      0% 43%,
      0 0
    );
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${Img5});
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 65vh;
    .page1Header {
      color: #fff;
      text-align: center;
      .giveNowBtn {
        margin-top: 2rem;
      }
    }
  }
`;

const Post = ({post}) => {
  // let navigate = useNavigate()
  const [show, setShow] = useState(true)

  // const handleClick = () => {
  //   if (user) {
  //     return <Redirect to="/write" />
  //   }else{
  //     return <Redirect to="/login" />
  //   }
  // }
  return (
     <Container>
      <div className="postsContainer">
        {/* {post.map((data) => ( */}
          <div className="postContents">
            <div className="postsContentTop">
              <div className="postsAuthorInfo">
                <div className="postsProfile">
                  <div className="postsAuthorImg">
                    <img src={!post?.profilePic ? UserImg : post?.profilePic} alt="" />
                  </div>
                  <div className="postsAuthor d-flex gap-1">
                    {/* <i className="fa fa-user align-self-center" aria-hidden="true" /> */}
                    <span>Admin</span>
                  </div>
                </div>
                <div className="postsDate d-flex gap-1">
                  <i className="fa fa-clock-o align-self-center" aria-hidden="true" />
                  <span>{moment(post?.createdAt).fromNow()}</span>
                </div>
              </div>
              <div className="postsTitle">
                <h3>{post.title}</h3>
              </div>
            </div>
            <div
              className={
                !show ? "postsContentCenter" : "postsContentCenterActive"
              }
            >
              <div className="postsImg">
              {
                post.avatar ? <img src={post?.avatar} alt="" /> : null
              }
                
              </div>
              <div className="postsTxtActive">
                <div className="reactions">
                  <i className="fa fa-heart" aria-hidden="true" />
                 {post.likes?.length > 2 ? `You and ${post.likes?.length - 1} others` : `${post.likes?.length} like${post.likes?.length > 1 ? 's' : ''}` } 
                  <i className="fa fa-comment" aria-hidden="true" />
                  {post.comments.length}
                </div>
                <p>
                  {post.desc}
                </p>
              </div>
              <div className="postsBtn">
              <Link to={`/full_detail/${post._id}`} id="links">
                <Button variant="contained" color="secondary">Full Details</Button>
              </Link>
              </div>
            </div>
            {/* <div className="postsContentBottom"></div> */}
          </div>
        {/* ))} */}
      </div>
    </Container>
  );
};

export default Post;
