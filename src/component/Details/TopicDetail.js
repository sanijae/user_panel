import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, TextSmall,Text, Title, Wrapper,
     Row, Button, ErrorMsg, Loading, Icon, Image } from './styles';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../APIS/Firebaseconfig';
import styled from 'styled-components';
 

export default function TopicsDetail() {
    const [file,setFile] = useState('')
    const [message,setMessage] = useState('')
    const [show,setShow] = useState(false)
    const params = useParams().title
    const [loading , setLoading] = useState(false)

    useEffect(()=>{
        return(async()=>{
            try {
                setLoading(true)
                const docRef = doc(db,'topics',`${params}`)
                const result = await getDoc(docRef)
                if (result.exists()){
                    setFile(result.data())
                    setLoading(false)
                }else{
                    setMessage('Opps, the file you are looking for does not exist or deleted')
                }
            } catch (error) {
                console.log(error.message);
                setLoading(true)
            }
        })
    },[params])
  return (
    <Container>
      <Wrapper>
       {message ? <Loading>
          <Icon>
            <Image alt='Error Image' src={require('../../images/imgerror.png')} />
          </Icon>
          <ErrorMsg>{message}</ErrorMsg>
       </Loading> :
       loading ? <Loading>
       <Icon>
         <Image alt='Error Image' src={require('../../images/imgerror.png')} />
       </Icon>
       <ErrorMsg>Please wait as the data is loading</ErrorMsg>
    </Loading> :
       <>
            <Title>{message}</Title>
            <Title>Title:&nbsp;{file?.title}</Title>
            <div style={{margin:'2em auto'}}>
                <Text>Abastract</Text>
                <Box>
                    <TextSmall>
                    {file?.abstract}
                    </TextSmall>
                </Box>
            </div>
            <Row>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <Text>{file?.faculty}/{file?.department}</Text>
                <Text style={{paddingLeft:'10px'}}>{file?.pages}&nbsp;Pages</Text>
                </div>
                <Button onClick={()=>setShow(!show)}>Get it now</Button>
            </Row>
            <ModalMain show={show}>
              <ModalContent>
                <ModalHeader>
                    <Text>Call the one of the numbers below to get your copy</Text>
                </ModalHeader>
                <ModalBody>
                    <Text>Call me: 08125532807 or 08144321344</Text>
                    <Text>+234 7032 099817</Text>
                </ModalBody>
                <ModalFooter>
                   <Button style={{width:'100%',padding:'20px'}} onClick={()=>{
                        setShow(!show)
                    }}>Close me </Button>
                </ModalFooter>
              </ModalContent>
            </ModalMain>
        </>}
      </Wrapper>
    </Container>
  );
}






export const ModalMain = styled.div`
position: fixed;
left:0 ;
right:0 ;
top:0 ;
bottom: 0;
background: rgba(0,0,0,.5);
display:flex ;
flex-direction:column ;
justify-content:center ;
align-items:center ;
opacity: ${({show})=>(show ? 1:0)};
visibility: ${({show})=>(show ? 'visible':'hidden')};
`
export const ModalContent = styled.div`
max-width: 300px ;
background:#fff ;
padding: 20px;
`
export const ModalHeader = styled.div`
padding:10px ;
margin:auto ;
text-align:center ;
`
export const ModalTitle = styled.div`
margin:0 ;
`
export const ModalBody = styled.div`
padding: 10px;
border-top: 1px solid #eee;
border-bottom:1px solid #eee;
text-align:center ;
margin: 5em auto ;

`
export const ModalFooter = styled.div`
padding:10px ;
display:flex ;
justify-content:center ;
margin: 15px auto;
`