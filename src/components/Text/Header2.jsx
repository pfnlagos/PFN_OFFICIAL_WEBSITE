import React from 'react'
import styled from 'styled-components';

const HeaderStyle = styled.div`
  /* max-width: 500px; */
  /* margin: 0 0 10px 0; */
  font-size: 1.2rem;
  font-weight: 900;
  font-style: ${props => props.fontStyle ? 'normal' : 'italics'};
  /* text-align: center; */
  /* padding: 1rem 0; */
  /* line-height: 1.3em; */
  color: ${props => props.color ? '#990000' : '#111'};
  text-transform: ${props => props.transform ? 'uppercase' : 'capitalize'};
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    padding: 0;
  }
`;
const Header2 = ({children, color= false, transform=false, fontStyle=false}) => {
  return (
    <HeaderStyle className='mainHeader' color={color} transform={transform}>
      <h1 style={{ fontFamily: "Poppins, sans-serif" }}>{children}</h1>
    </HeaderStyle>
  );
}

export default Header2