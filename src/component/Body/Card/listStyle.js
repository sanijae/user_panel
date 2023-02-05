import styled  from 'styled-components';

export const Container = styled.div`
 width:100% ;
 display:flex ;
 justify-content:stretch ;
 margin-top:2px ;
 
 @media screen and (max-width:900px){
 flex-direction: column-reverse;
 margin-top:0
 }
`
export const ListContainer = styled.div`
display: flex ;
flex-direction: column;
padding: 10px;
background:#fff ;
color:#000 ;
width:100% ;
margin-right: 2px;

@media screen and (max-width:900px){
 padding:0px ;
 }
`
export const TitleContainer = styled.div `
 width: 100%;
 flex-direction:column ;
 align-items:center ;
 background: rgba(0,0,0,.1); 
 color: inherit;
 margin:5px auto ;
 cursor: pointer;
`
export const AuthorContainer = styled.div`
display:flex ;
justify-content:start ;
padding:10px ;
background-color:transparent ;

@media screen and (max-width:300px){
    flex-direction:column ;
}
`
export const Title = styled.p`
font-size: 20px;
padding: 20px;
padding-bottom:0 ;
align-items: center;
`
export const Subtitle = styled.p`
font-size: 16px;
align-items: center;
padding-left:20px ;
`


// Loading Component

export const Loading = styled.div`
min-height:100vh ;
display:flex ;
flex-direction:column ;
justify-content:center ;
align-items: center;
`
export const ErrorMsg = styled.div`
font-size: 25px;
align-items: center;
letter-spacing:1px ;
padding:15px ;
margin:5px auto ;
`
export const Icon = styled.div`
margin:5px auto ;
align-items:center ;
font-size:20px ;
`
export const LImage = styled.img`
max-width:20em ;
border-radius:2em ;
object-fit:cover ;
`

//Search components

export const SearchContainer = styled.div`
width: 100%;
display:flex ;
flex-direction: column;
margin:10px auto ;
text-align:center ;
`
export const RowSearch = styled.div`
width: 100%;
margin:10px auto ;
display:flex ;
justify-content:center ;
align-items:center ;
`
export const SearchInput = styled.input`
border:1px solid #e6e90e ;
border-radius:2em 0px 0px 2em;
background: #ffffff;
color:#000 ;
outline: none;
padding:10px ;
width: 100%;
max-width: 20em;
min-width:4em;
font-size:20px ;

:focus{
    outline:none ;
}
`
export const SearchButton = styled.button`
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