import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../announcement/Announcement'
import { Link } from 'react-router-dom'
import './navbar.css'
import LogoImg from '../../images/pfnLogo.png'
import Img from '../../images/splash2.jpg'
import ProfileImg from '../../images/profile.png'
import Img5 from '../../images/pfnLogo.png'
import { mobile } from '../../responsive'
import Button2 from '../Button/Button2'
import moment from 'moment'
import Button from '../Button/Button'
import { PaystackButton } from 'react-paystack';

import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../pages/blog/redux/constants/actionTypes';

const Container = styled.nav`
    /* ${mobile({display: 'none'})} */
    user-select: none;
`

const config = {
  reference: (new Date()).getTime().toString(),
  email: "user@example.com",
  amount: 20000,
  publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
};

const user = JSON.parse(localStorage.getItem('mern_crud3_copy_user'))
const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const [closeNav, setCloseNav] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [openMain, setOpenMain] = useState('')
    const [dropdownNav, setDropdownNav] = useState(false)

    const dispatch = useDispatch()

   // you can call this function anything
   const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const componentProps = {
      ...config,
      text: 'GIVE NOW',
      onSuccess: (reference) => handlePaystackSuccessAction(reference),
      onClose: handlePaystackCloseAction,
  };
    
    const handleLogOut = () => {
        dispatch({type: LOGOUT})
        window.location.replace("/")
    }

    

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 300) {
                setScroll(true)
            }else{
                setScroll(false)
            }
        })
    })
  return (
    <Container id="navbar" className={scroll && "activeNavbar"}>
      {/* <Announcement /> */}
      <div className="top">
        {
          user ?
          <div className="eventTime">
            <div className="authBx">
              <Link to="/settings" id='links'>
                <div className="authBxImg">
                  <img src={ !user.user.profilePic ? ProfileImg : user.user.profilePic } alt="" className='profileImg' />
                </div>
                <div className="authBxName">
                  <span>{user.user.username}</span>
                </div>
              </Link>
            </div>
            <h6 className="authBxLogout" onClick={handleLogOut}>Log out</h6>
          </div>
          :
          <div className="eventTime">
            <Link to="/admin_login" id='links'>
            <h6 className="authBxLogout">{user ? "Log out" : "Log in"}</h6>
            </Link>
          </div>

        }
        <div className="nav">
          <Link to="/">
            <div className="logo">
              <img src={LogoImg} width={100} alt="logo" />
            </div>
          </Link>
          <div className="navLinks">
          <div className={openMain ? "mainListItems" : "notActiveMain"}>
                  <div className={openMain ? "mainListItemsTop" : "notActiveMain"}>
                    <Link to="/" id='links' onClick={()=> setOpenMain(false)}>
                    <div className="logo"><img src={LogoImg} width={100} alt="logo" /></div>
                    </Link>
                    <div className="time">{moment().format('LLLL')}</div>
                    <div className="closeMenu"  onClick={()=> setOpenMain(false)}> <h3>close</h3></div>
                  </div>
                  <div className={openMain ? "mainListItemsCenter" : "notActiveMain"}>
                    <div className="mainListItemsCenterLeft">
                      <div className="mainListItemsCenterLeftContainer">
                        <h3>Featured Events</h3>
                      </div>
                      <div className={openMain ? "mainListItemsCenterLeftImg" : 'notActiveMainImg'}>
                        {openMain ? <img src={Img} alt="" /> : <img src={Img5} alt="" />}
                      </div>
                      <div className="mainListItemsCenterLeftBottomTxt">
                        <h4>Upcoming Events</h4>
                        <h4>Past Events</h4>
                      </div>
                    </div>
                    <div className="mainListItemsCenterRight">
                      <div className="mainListItemsCenterRightTopTxt">
                        <Link to="/" id="links" onClick={()=> setOpenMain(false)}>
                          <h2>Pentecostal Fellowship of Nigeria</h2>
                        </Link>
                        <div className="mainListItemsCenterRightTopPara" onClick={()=> setDropdownNav(!dropdownNav)}>
                          <p>Lagos State</p>
                          <div>
                            {!dropdownNav ? <i className="fa fa-angle-down" aria-hidden="true" /> : <i className="fa fa-angle-up" aria-hidden="true" />}
                          <div className="mainListItemsCenterRightTopParaDropdownItem" style={dropdownNav ? {"opacity": "1", position: "absolute", transition: "0.8s"} : {opacity: "0", position: "absolute", transition: "0.8s"}}>
                            <Link to="/provinces" id='links' onClick={()=> setOpenMain(false)}>
                            <h6>Provinces</h6>
                            </Link>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div className="mainListItemsCenterRightCenter">
                        <hr className='mainListHr' />
                        <div className="mainListItemsCenterRightNavContainer">
                          <ul className="mainListItemsCenterRightList">
                            <li className="mainListItemsCenterRightListItems">Who we are</li>
                            <Link to="/about" id='links' onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">About us</li>
                            </Link>
                            <Link to="/history2"id='links' onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">History</li>
                            </Link>
                            <Link to="/our-mission"id='links' onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">Mission</li>
                            </Link>
                            <Link to="#"id='links' onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">Messages</li>
                            </Link>
                          </ul>
                          <ul className="mainListItemsCenterRightList">
                            <li className="mainListItemsCenterRightListItems">Our Structure</li>
                            <Link to="/directorate" id="links" onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">Directorate</li>
                            </Link>
                            <Link to="/the-national" id="links" onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">The National</li>
                            </Link>
                            <Link to="/past-pfn-chairmen" id="links" onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">Past PFN Chairmen</li>
                            </Link>
                            <Link to="/pfn-executives" id="links" onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">PFN Lagos State Executives</li>
                            </Link>
                          </ul>
                          <ul className="mainListItemsCenterRightList">
                            <li className="mainListItemsCenterRightListItems">Activities</li>
                            <Link to='/blogs' id='links' onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">Blog</li>
                            </Link>
                            <Link to='/prayer' id='links' onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">Prayer Line</li>
                            </Link>
                            <Link to='/gallery' id='links' onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">Upcoming Events</li>
                            </Link>
                            <Link to='/gallery' id='links' onClick={()=> setOpenMain(false)}>
                            <li className="mainListItemsCenterRightListItems">Past Events</li>
                            </Link>
                          </ul>
                        </div>
                      </div>
                      <div className="mainListItemsCenterRightBottom">
                        <div className="mainListItemsCenterRightSocials">
                        <a href="www.facebook.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" id='links'>
                                <i className="fa fa-facebook" aria-hidden="true" />
                            </a>
                            <a href="www.twitter.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" id='links'>
                                <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                            <a href="www.instagram.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" id='links'>
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                            <a href="https://www.youtube.com/channel/UChZXqT3Wg8buJkykYI99vCQ" target='_blank' rel="noopener noreferrer nofollow" id='links'>
                                <i className="fa fa-youtube" aria-hidden="true" />
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            <ul className="navList" >
              {/* <Link to="/" className="links" style={{ marginRight: "20px" }}> */}
              <li className="navListItems" onClick={()=> setOpenMain(true)}>
                  Menu
                </li>
              {/* </Link> */}
              <li className="navListItems">
                About
                <ul className="hover">
                  <Link to="/about" className="links" onClick={()=> setCloseNav(true)}>
                    <li className="hoverItems">About PFN</li>
                  </Link>
                  <Link to="/history2" className="links">
                    <li className="hoverItems">History of PFN</li>
                  </Link>
                  <Link to="/what-we-believe" className="links">
                    <li className="hoverItems">What we believe</li>
                  </Link>
                  <Link to="/our-mission" className="links">
                    <li className="hoverItems">Our mission</li>
                  </Link>
                  {/* <Link to="/page2" className="links">
                    <li className="hoverItems">Our team</li>
                  </Link> */}
                </ul>
              </li>
              <li className="navListItems">
                Leadership
                <ul className="hover">
                  <Link to="/the-national" className="links">
                    <li className="hoverItems">The national</li>
                  </Link>
                  <Link to="/past-pfn-chairmen" className="links">
                    <li className="hoverItems">Past Lagos State PFN chairmen</li>
                  </Link>
                  <Link to="/pfn-executives" className="links">
                    <li className="hoverItems">PFN lagos state executives</li>
                  </Link>
                </ul>
              </li>
              <li className="navListItems">
                Lagos state structure
                <ul className="hover">
                  <Link to="/lses" className="links">
                    <li className="hoverItems">
                      The executive structure
                    </li>
                  </Link>
                  <Link to="#" className="links">
                    <li className="hoverItems">
                      Chairman Messages
                    </li>
                  </Link>
                </ul>
              </li>
              <li className="navListItems">
                Get involved
                <ul className="hover">
                  <Link to="/provinces" className="links">
                    <li className="hoverItems">The Provinces</li>
                  </Link>
                  <Link to="/directorate" className="links">
                    <li className="hoverItems">Directorates</li>
                  </Link>
                  <Link to="#" className="links">
                    <li className="hoverItems">Outreach</li>
                  </Link>
                </ul>
              </li>
              <li className="navListItems">
                Events
                <ul className="hover">
                    <Link to="/gallery" className="links">
                      <li className="hoverItems">Gallery</li>
                    </Link>
                    <a href="https://www.youtube.com/channel/UChZXqT3Wg8buJkykYI99vCQ" target='_blank' rel="noopener noreferrer nofollow" className='links'>
                    <li className="hoverItems">Watch Live</li>
                    </a>
                    <Link to="#" className='links'>
                    <li className="hoverItems">Past Events</li>
                    </Link>
                    <Link to="#" className='links'>
                    <li className="hoverItems">Upcoming Events</li>
                    </Link>
                    <Link to='/blogs' className='links'>
                    <li className="hoverItems">Blogs</li>
                    </Link>
                    <Link to='/news-feed' className='links'>
                    <li className="hoverItems">News Feed</li>
                    </Link>
                </ul>
              </li>
              <Link to="#" className="links">
                <li className="navListItems">Get in Touch
                <ul className="hover">
                    <Link to="/prayer" className="links">
                      <li className="hoverItems">Prayer</li>
                    </Link>
                    <Link to='/contact' className='links'>
                    <li className="hoverItems">Contact us</li>
                    </Link>
                </ul>
                </li>
              </Link>
            </ul>
          </div>
          {showNav && (
            <div className="mobileNav">
              <ul className="navList">
                <Link to="/" className="links" onClick={()=> setShowNav(false)}>
                  <li className="navListItems">Menu</li>
                </Link>
                <li className="navListItems">
                  About
                  <ul className="hover">
                    <Link to="/about" className="links" onClick={()=> setShowNav(false)}>
                      <li className="hoverItems">About PFN</li>
                    </Link>
                    <Link to="/history2" className="links" onClick={()=> setShowNav(false)}>
                      <li className="hoverItems">History of PFN</li>
                    </Link>
                    <Link to="/what-we-believe" className="links" onClick={()=> setShowNav(false)}>
                      <li className="hoverItems">What we believe</li>
                    </Link>
                    <Link to="#" className="links" >
                      <li className="hoverItems">Our mission</li>
                    </Link>
                  </ul>
                </li>
                <li className="navListItems">
                  Leadership
                  <ul className="hover">
                    <Link to="/the-national" className="links" onClick={()=> setShowNav(false)}>
                      <li className="hoverItems">The national president</li>
                    </Link>
                    <Link to="/past-pfn-chairmen" className="links" onClick={()=> setShowNav(false)}>
                      <li className="hoverItems">Past PFN chairmen</li>
                    </Link>
                    <Link to="/pfn-executives" className="links" onClick={()=> setShowNav(false)}>
                      <li className="hoverItems">PFN lagos state executives</li>
                    </Link>
                  </ul>
                </li>
                <li className="navListItems">
                  PFN lagos state structure
                  <ul className="hover">
                    <Link to="/lses" className="links" onClick={()=> setShowNav(false)}>
                      <li className="hoverItems">
                        The Executive structure
                      </li>
                    </Link>
                    <Link to="#" className="links" onClick={()=> setShowNav(false)}>
                      <li className="hoverItems">
                        Chairman Messages
                      </li>
                    </Link>
                  </ul>
                </li>
                <li className="navListItems">
                  Get involved
                  <ul className="hover">
                    <Link to="/extra" className="links">
                      <li className="hoverItems">The Provinces</li>
                    </Link>
                    <Link to="#" className="links">
                      <li className="hoverItems">Volunteers</li>
                    </Link>
                    <Link to="#" className="links">
                      <li className="hoverItems">Outreach</li>
                    </Link>
                  </ul>
                </li>
                <li className="navListItems">
                  Events
                  <ul className="hover">
                    <Link to="#" className="links">
                      <Link to="/gallery" className='links' onClick={()=> setShowNav(false)}>
                        <li className="hoverItems">Gallery</li>
                      </Link>
                      <li className="hoverItems">Watch Live</li>
                      <li className="hoverItems">Past Events</li>
                      <li className="hoverItems">Upcoming Events</li>
                    </Link>
                  </ul>
                </li>
                <Link to="/blogs" className="links" onClick={()=> setShowNav(false)}>
                  <li className="navListItems">Blogs</li>
                </Link>
              </ul>
            </div>
          )}
          <div className="openLinkBtn" onClick={() => setShowNav(!showNav)}>
            {showNav ? <>&#10005;</> : <>&#8801;</>}
          </div>
          <div className="navButtons">
            <div className="leftBtn">
              {!scroll ? (
                <Link
                  to="#"
                  // id="leftBtn"
                  className={!scroll ? "links" : "leftBtn"}
                >
                  {/* <h3>Give</h3> */}
                  <Button BtnText="Give" />
                  {/* <PaystackButton {...componentProps} /> */}
                </Link>
              ) : (
                <Button2 BtnText="Give" />
              )}
            </div>

            {/* <div className="rightBtn">
              <Link to="#" id="rightBtn" className="links">
                <h3>Give</h3>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Navbar
