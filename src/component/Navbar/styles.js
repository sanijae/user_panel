import styled from 'styled-components'

export const Navbar = styled.nav`
width: 100% ;
margin:auto ;
height:4em ;
background:#E6E90F ;
color: #fff;
align-items: center;
display: flex;
justify-content: space-between ;
position:relative ;
`
export const Brand = styled.div`
font-size: 20px;
font-weight: bold ;
padding-left:20px ;
cursor: pointer;
`
export const Navs = styled.ul`
display: flex;
align-items: flex-end;
list-style-type:none ;
padding-right:30px ;

@media screen and (max-width:600px){
    display: flex ;
    flex-direction: column ;
    background-color:#E6E90F ;
    top: 4em;
    right:0 ;
    width: 100% ;
    height:100vh ;
    align-items: center;
    position:absolute ;
    visibility: ${({show})=>(show ? 'visible' : 'hidden')};
    opacity: ${({show})=>(show ? 1:0)};
}
`
export const NavItems = styled.li`
list-style: none;
text-decoration:none ;
padding: 10px ;
cursor: pointer;
font-size:20px ;
:hover{
    background-color: #ffffff ;
    color: #E6E90F;
    font-weight: bold ;
}
@media screen and (max-width:600px){
    padding: 20px;

    :hover{
    background-color: #ffffff ;
    color: #E6E90F;
    font-weight: bold ;
}
}
`
export const Hamburger = styled.div`
display: none;
border: none;
border-radius: 100%;
background-color: transparent;
font-weight:bold ;
font-size:20px ;
padding:5px;
align-items: center ;
color: #ffffff ;
margin-right: 2em;
cursor: pointer;

@media screen and (max-width:600px){
    display: block;
}
`