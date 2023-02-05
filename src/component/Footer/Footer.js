import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Copy, FooterContainer, ItemsLink, LinkContainer, Text } from './Style';

export default function Footer() {
  const navigate = useNavigate()

  return (
    <FooterContainer>
      <LinkContainer>       
       <Container>
       <Text>
        Phone1: 08125532807,&nbsp; 08144321344
       </Text> 
       <Text>
        Phone: +234 7032 099817
       </Text>
       <Text>
        Email: aliyaroslimited@gmail.com
       </Text>
       </Container>
       <Container>
        <ItemsLink onClick={()=>navigate('/Policy')}>Privacy and Policy</ItemsLink>
        <ItemsLink onClick={()=>navigate('/Terms')}>Terms of Services</ItemsLink>
        <ItemsLink onClick={()=>navigate('/About')} >About Us</ItemsLink>
      </Container>
      </LinkContainer>
      <LinkContainer>      
      <Text>
        No 5 & 6, Federal Lowcoast Street Misau, Bauchi, Nigeria
       </Text>
      <Copy>&copy;Aliyaros international</Copy>  
      </LinkContainer>          
    </FooterContainer>
  );
}
 