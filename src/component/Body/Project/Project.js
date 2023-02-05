import React, { useEffect, useState } from 'react';
import { AuthorContainer, Container, ListContainer, Subtitle,
     Title, TitleContainer,Loading,ErrorMsg,LImage,Icon, 
     SearchContainer, RowSearch, SearchInput, SearchButton } from '../Card/listStyle';
      import { HeroHeader, HeroSubtitle, HeroTitle } from '../../../GlobalStyles'
import { collection, doc, getDoc,getDocs, query, where } from 'firebase/firestore'
import { db } from './../../../APIS/Firebaseconfig';
import { useNavigate } from 'react-router-dom';

export default function Project() {
    const [data,setData] = useState([])
    const [searchData,setSearchData] = useState('')
    const [searchResult,setSearchResult] = useState('')
    const [searchDept,setSearchDept] = useState('')
    const [resDept,setResDept] = useState([])
    const [messageSrc,setMessageSrc] = useState('')
    const [loading,setLoading] = useState(false)
    
   const navigate = useNavigate()
    useEffect(()=>{
        return(async()=>{
            try {
                setLoading(true)
                const res = await getDocs(collection(db,'projects'))
                setData(res.docs.map((rs)=>rs.data()))
                setLoading(false)
            } catch (error) {
                console.log(error.message)
                setLoading(true)
            }
        })
    },[])
    async function searchTitle(){
        try {
            const docRef = doc(db,'projects',`${searchData}`)
            const result = await getDoc(docRef) 
            if (result){
                setSearchResult(result.data())
                setSearchData('')
            }else{
                setMessageSrc('It is like we dont have such file here, please contact us for more... ')
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    async function searchDepartment(){
        try {
            const result = await getDocs(query(collection(db,'projects'),where('department','==',searchDept)))//,where('department','==',searchData)
            if (result){
                setResDept(result.docs.map((rs)=>rs.data()))
                console.log('search: ',result.docs.map((rs)=>rs.data()));
                setSearchDept('')
            }else{
                setMessageSrc('It is like we dont have such file here, please contact us for more... ')
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    //console.log(data);
  return (
    <Container> 
      <ListContainer>
        <HeroHeader>
            <HeroTitle style={{textAlign:'center'}}>Your final year complete reaserch projects is ready here for you to download</HeroTitle>
             <SearchContainer>
                <RowSearch>
                    <SearchInput type={'text'} value={searchData} onChange={(e)=>setSearchData(e.target.value.toLowerCase())}
                     placeholder='Search projects title here' />
                    <SearchButton type='button' onClick={searchTitle}>Title</SearchButton>
                </RowSearch>
                <RowSearch>
                    <SearchInput type={'text'} value={searchDept} onChange={(e)=>setSearchDept(e.target.value.toLowerCase())} 
                    placeholder='Search projects by your Department here' />
                    <SearchButton type='button' onClick={searchDepartment}>Department</SearchButton>
                </RowSearch>
             </SearchContainer>
            <HeroSubtitle style={{fontSize:'18px',textAlign:'center'}}>
            Find your NCE, ND, HND, Undergraduates and Postgraduates ready made school projects here for free
            </HeroSubtitle>
        </HeroHeader>
       {loading ? <Loading>
        <Icon>
            <LImage alt='Error Image' src={require('../../../images/imgLoading.png')} />
        </Icon>
        <ErrorMsg> Fetching Data Please wait</ErrorMsg>
        </Loading> 
       :<>
         {messageSrc && <ErrorMsg style={{width:'100%',textAlign:'center'}}>{messageSrc}</ErrorMsg>}
        {searchResult ? <TitleContainer onClick={()=>navigate(`/ProjectDetail/${searchResult.title}`)}>
            <Title>{searchResult?.title}</Title>
            <AuthorContainer>
                <Subtitle>{searchResult.faculty}/{searchResult.department}</Subtitle>
                <Subtitle>{searchResult.pages}&nbsp;Pages</Subtitle>
            </AuthorContainer>
        </TitleContainer>
        : resDept.length !== 0 ? resDept.map((dt,i)=>(
            <TitleContainer key={i} onClick={()=>navigate(`/ProjectDetail/${dt.title}`)}>
                <Title>{dt.title}</Title>
                <AuthorContainer>
                    <Subtitle>{dt.faculty}/{dt.department}</Subtitle>
                    <Subtitle>{dt.pages}&nbsp;Pages</Subtitle>
                </AuthorContainer>
            </TitleContainer>
        )) 
        :data.length ===0 ?<Loading>
        <ErrorMsg> Error fetching the data check your network connection</ErrorMsg>
        </Loading>: data.map((dt,i)=>{
            return <TitleContainer key={i} onClick={()=>navigate(`/ProjectDetail/${dt.title}`)}>
                <Title>
                    {dt.title}
                </Title>
                <AuthorContainer>
                    <Subtitle>{dt.faculty}/{dt.department}</Subtitle>
                    <Subtitle>{dt.pages}&nbsp;Pages</Subtitle>
                </AuthorContainer>            
            </TitleContainer>
        })
        }
        </>
        }
      </ListContainer>           
    </Container>
  );
}
