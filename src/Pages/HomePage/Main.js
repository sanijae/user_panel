import React from 'react';
import { Button, Column, Container, Heading, Images, Row } from './Styled';
import { HeroHeader, HeroSubtitle, HeroTitle } from '../../GlobalStyles'
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate()
  const reverse = true
  return (
    <Container>
      <HeroHeader>
        <HeroTitle style={{textAlign:'center'}}>Your final year reaserch projects, topics and proposals is ready here for you to download</HeroTitle>
        <HeroSubtitle style={{fontSize:'16px'}}>
          Find your NCE, ND, HND, Undergraduates and Postgraduates ready made school projects here for free
        </HeroSubtitle>
      </HeroHeader>
      <Row reverse={reverse}>
        <Column>
          <HeroTitle>Complete Projects</HeroTitle>
          <Heading>10,000+ ready made Complete Projects awaiting for you to download</Heading>
          <Button onClick={()=>navigate('/Projects')}>Check our projects now</Button>
        </Column>
        <Column>
          <Images alt='Img' src={require('../../images/un1.jpg')} />
        </Column>
      </Row>
      <Row>
        <Column>
          <Images alt='Img' src={require('../../images/un7.jpg')} />
        </Column>
        <Column>
          <HeroTitle>Projects Proposals</HeroTitle>
          <Heading>10,000+ ready made Projects proposals awaiting for you to download</Heading>
          <Button onClick={()=>navigate('/Proposals')}>Discover available noble proposals now</Button>
        </Column>        
      </Row> 
      <Row reverse={reverse}>
        <Column>
          <HeroTitle>Projects Topics</HeroTitle>
          <Heading>10,000+ ready made Projects Topics awaiting for you to download</Heading>
          <Button onClick={()=>navigate('/Topics')} >Get your topics now and start from here</Button>
        </Column>
        <Column>
          <Images alt='Img' src={require('../../images/un5.jpg')} />
        </Column>
      </Row>
    </Container>
  );
}
