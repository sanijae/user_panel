import styled from 'styled-components';

export const Container = styled.div`
width:100% ;
display:flex ;
flex-direction:column ;
background-color:transparent ;
align-items:center ;
`

export const Row = styled.div`
 display:flex;
 align-items:center ;
 justify-content:space-evenly ;
 width:100% ;
 background:#fff ;
 margin:5px auto ;
 
 @media screen and (max-width:900px){
    display:flex ;
    flex-direction:${({reverse})=>(reverse ? 'column-reverse':'column')} ;
 }
`

export const Column = styled.div`
display:flex ;
flex-direction:column ;
align-items:center ;
padding: 20px;
`
export const Images = styled.img`
object-fit: cover;
border: none;
border-radius:2em ;
max-width:30em ;
width:100% ;

:hover{
    transform: scale(1.1);
}
`
export const Heading = styled.p`
font-size:20px ;
font-weight:bold ;
text-align:center ;
`
export const Button = styled.button`
border:none ;
border-radius: 2em;
color:#fff;
background-color:#E6E90F ;
text-align: center ;
font-size:20px ;
font-weight:bold ;
padding:20px ;
cursor: pointer;
margin-top: 2em ;

:hover{
    background-color: transparent;
    color: #E6E90F ;
    border: 1px solid #E6E90F ;
    font-weight:bold ;
}
`