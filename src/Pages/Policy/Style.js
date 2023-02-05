import styled from "styled-components";

export const Container = styled.div`
width:100%;
align-items:center ;
background: transparent;
`
export const Box = styled.div`
width:70% ;
border-radius:2em ;
background-color:#fff ;
padding:3em ;
align-items: center;
margin:3em auto ;

@media screen and (max-width:500px){
    width: 80%;
    padding:0px ;
}
`
export const Title = styled.div`
font-size: 20px;
font-weight:bold ;
align-items:center ;
padding:10px ;
`
export const Text = styled.div`
font-size:18px ;
padding:20px ;
padding-top:5px ;
padding-bottom: 5px;
align-items:center ;
letter-spacing:1px ;
`
export const Head = styled.div`
font-size:18px ;
padding:10px ;
font-weight:bold ;
align-items:center ;
`