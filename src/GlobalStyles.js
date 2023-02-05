import styled ,{createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    background-color:transparent ;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`
export const MainSection = styled.div`
background: rgba(0,0,0,.3);
display:flex ;
flex-direction:column ;
justify-content: center;
`
export const BodySection = styled.div`
background: transparent;
width: 100%;
display:flex ;
flex-direction:column ;
align-items:center ;
`
export const Container = styled.div`
background: #ffffff;
width: 90%;
display:flex ;
flex-direction:column ;
justify-content: center;
`
export const HeroHeader = styled.p`
width:100% ;
display: flex ;
flex-direction:column ;
align-items:center ; 
background:rgba(0,0,0,.3);
`
export const HeroTitle = styled.p`
font-size:30px ;
font-weight:bold ;
margin:10px auto ;
align-items:center ;
padding:20px ;
`
export const HeroSubtitle = styled.p`
font-size:25px ;
align-items:center ;
margin:5px auto ;
padding: 20px;
`