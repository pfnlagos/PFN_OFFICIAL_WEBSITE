import React from "react";
import Img from "../../images/splash3.jpg";
import Img1 from "../../images/splash3.jpg";
import Img2 from "../../images/splash3.jpg";
import Img3 from "../../images/bg2.jpg";
import Img4 from "../../images/My-Post-15.png";
import styled from "styled-components";
import "./Page12.css";
import Button from "../../components/Button/Button";
import Header from "../../components/Text/Header";
import H2 from "../../components/Text/H2";
import PText from "../../components/Text/PText";
import H3 from "../../components/Text/H3";
import Button2 from "../../components/Button/Button2";
import Collapse from "../../components/collapse/Collapse";
import Footer from "../../components/Footer/Footer";
import ControlledAccordions from "../../components/accordion/MUIaccordion";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${Img2});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 100vh;
    .page1Header {
      color: #fff;
      text-align: center;
      .giveNowBtn{
          margin-top: 2rem;
      }
    }
  }
`;
const Page12 = () => {
  return (
      <Container>
        <div className="page1Wrapper">
            <div className="page1Header">
            <h1>Page 12</h1>
            <div className="giveNowBtn">
                <Button BtnText="Give Now"/>
            </div>
            </div>
        </div>
        <div className="page12Top">
            <div className="page12TopContent">
                <div className="page12TopHeader">
                    <Header color>Lorem ipsum dolor sit.</Header>
                </div>
                <div className="page12TopTitle">
                    <H2>Lorem, ipsum dolor.</H2>
                </div>
                <div className="page12TopPara">
                    <PText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore soluta expedita, provident iure suscipit cupiditate et aperiam necessitatibus atque fugit nesciunt, mollitia minima velit repudiandae eos? Cupiditate error in excepturi quasi inventore odio ut, rerum, voluptatem ex vel culpa? Voluptatum obcaecati officiis optio ratione, recusandae maxime asperiores mollitia dicta voluptatibus.
                    </PText>
                </div>
                <div className="page12TopBtn">
                    <Button />
                    <div style={{padding: "1rem 0"}}>
                    <Button />
                    </div>
                    <Button />
                </div>
            </div>
        </div>
        <div className="page12Center">
            <div className="page12CenterMainTitle">
                <H2>Lorem, ipsum dolor.</H2>
            </div>
            <div className="page12CenterTitle">
                <H3>Lorem.</H3>
                <div className="page12CenterPara">
                    <PText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae odit a quaerat deserunt totam pariatur accusamus similique fuga vitae dolores?</PText>
                </div>
            </div>
            <div className="page12CenterTitle">
                <H3>Lorem.</H3>
                <div className="page12CenterPara">
                    <PText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae odit a quaerat deserunt totam pariatur accusamus similique fuga vitae dolores?</PText>
                </div>
            </div>
            <div className="page12CenterTitle">
                <H3>Lorem.</H3>
                <div className="page12CenterPara">
                    <PText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae odit a quaerat deserunt totam pariatur accusamus similique fuga vitae dolores?</PText>
                </div>
            </div>
            <div className="page12CenterTitle">
                <H3>Lorem.</H3>
                <div className="page12CenterPara">
                    <PText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae odit a quaerat deserunt totam pariatur accusamus similique fuga vitae dolores?</PText>
                </div>
            </div>
        </div>
        <div className="page12Center2">
            <div className="page12Center2Title">
                <H2 color>Lorem, ipsum dolor.</H2>
            </div>
            <div className="page12Center2Para">
                <PText color>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tenetur, tempora perferendis deserunt repellendus nihil nemo culpa non voluptate ipsa mollitia beatae consequuntur illo consectetur delectus minima error eum sequi dolores ea fuga! Quae reiciendis eum quibusdam non velit doloremque numquam beatae hic laudantium vitae ab, itaque rerum dignissimos. Libero.
                </PText>
            </div>
            <div className="page12Center2Btn">
                <Button2/>
                <Button2/>
            </div>
        </div>
        <div className="page12Center3">
            <div className="page12Center3Left">
                <img src={Img2} alt="" />
            </div>
            <div className="page12Center3Right">
                <div className="page13Center3RightTitle">
                    <H2>Lorem, ipsum dolor.</H2>
                </div>
                <div className="page12Center3RightPara">
                    <PText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus eos necessitatibus doloremque eaque illum dolorem eum, sunt quam minima?
                    </PText>
                </div>
                <div className="page12Center3RightTitle2">
                    <H3>View the Annual Report »</H3>
                </div>
            </div>
        </div>
        <div className="page12Bottom">
            <div className="page12BottomTitle">
                <H2>Lorem ipsum dolor sit amet.</H2>
            </div>
            <div className="colCard2">
                <ControlledAccordions />
            </div>
        </div>
        <div className="page12Bottom2">
            <div className="page13BottomTitle2">
                <H2>Lorem ipsum dolor sit amet.</H2>
            </div>
            <div className="page12BottomPara">
                <PText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dolore!
                </PText>
            </div>
            <div className="page12BottomImgBx">
                <div className="page12BottomImg">
                    <img src={Img4} alt="" />
                </div>
            </div>
            <div className="page12BottomTitle3">
                <H3>Lorem, ipsum.</H3>
            </div>
            <div className="page12BottomPara">
                <PText>
                    Lorem ipsum dolor
                </PText>
            </div>
            <div className="page12BottomPara">
                <PText>
                    Lorem ipsum dolor
                </PText>
            </div>
        </div>
        <Footer />
      </Container>
  )
};

export default Page12;
