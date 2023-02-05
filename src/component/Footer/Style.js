import styled from 'styled-components';

export const FooterContainer = styled.div`
width:100% ;
background:#000 ;
color: #ffffff;
align-items: center;
display:flex ;
flex-direction:column ;
`
export const Text = styled.div`
font-size:17px ;
padding:10px ;
`
export const LinkContainer = styled.div`
min-height:5em ;
width: 100%;
background-color:transparent ;
color: #fff;
text-align: center;
display:flex ;
margin:auto ;
overflow: hidden;
align-items:center ;
justify-content:space-between ;


@media screen and (max-width:700px){
    flex-direction:column ;
}
`
export const Container = styled.div`
align-items:center ;
display: flex ;
justify-content: center;
flex-direction:column ;
background-color:transparent;
padding:4em ;
`
export const ItemsLink = styled.div`
padding:10px ;
align-items:center ;
font-size:18px ;
cursor: pointer;

:hover{
    text-decoration: underline;
}
`
export const CopyContainer = styled.div`
display:flex ;
align-items:center ;
background-color:red ;
`
export const Copy = styled.div`
font-size: 17px;
padding:10px ;
align-items:center ;
`

export const EmailContainer = styled.div`
width: 100%;
display:flex ;
flex-direction: column;
margin:10px auto ;
text-align:center ;
`
export const RowEmail = styled.div`
width: 100%;
margin:10px auto ;
display:flex ;
justify-content:center ;
align-items:center ;
`
export const EmailInput = styled.input`
border:1px solid #e6e90e ;
border-radius:2em 0px 0px 2em;
background: #ffffff;
color:#000 ;
outline: none;
padding:10px ;
width: 100%;
max-width: 15em;
min-width:4em ;
font-size:20px ;

:focus{
    outline:none ;
}
`
export const EmailButton = styled.button`
cursor: pointer;
border:1px solid #e6e90e ;
border-radius:0px 2em 2em 0px;
padding:10px ;
align-items: center;
text-align:center ;
font-size:20px ;
background: #e6e90e;

:hover{
    background:transparent ;
    color:#e6e90e ;
}
`