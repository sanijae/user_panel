import Footer from "./component/Footer/Footer";
import Appbar from "./component/Navbar/Appbar";
import { BodySection, Container, GlobalStyled, MainSection } from "./GlobalStyles";
import Main from './Pages/HomePage/Main';
import { Route, Routes } from 'react-router-dom'
import Project from "./component/Body/Project/Project";
import Proposals from "./component/Body/Proposals/Proposals";
import Topics from "./component/Body/Topics/Topics";
import About from "./Pages/About/About";
import Terms from "./Pages/Terms/Terms";
import Policy from "./Pages/Policy/Policy";
import ProjectsDetail from "./component/Details/ProJectsDetails";
import TopicsDetails from "./component/Details/TopicDetail";
import ProposalDetails from "./component/Details/ProposalDetail";


function App() {
  return (
    <MainSection>
     <GlobalStyled/>
     <Appbar/>
    <BodySection>
      <Container>
     <Routes>
       <Route path="/"exact element={<Main/>} />
       <Route path="/Projects"exact element={<Project/>} />
       <Route path="/Proposals"exact element={<Proposals/>} />
       <Route path="/Topics"exact element={<Topics/>} />
       <Route path="/About"exact element={<About/>} />
       <Route path="/ProjectDetail/:title" element={<ProjectsDetail/>} />
       <Route path="/TopicDetail/:title" element={<TopicsDetails/>} />
       <Route path="/ProposalDetail/:title" element={<ProposalDetails/>} />
       <Route path="/Terms"exact element={<Terms/>} />
       <Route path="/Policy"exact element={<Policy/>} />
     </Routes>
     </Container>
    </BodySection>
     <Footer/>      
    </MainSection>
    );
}

export default App;
