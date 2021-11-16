import './App.css';
import 'antd/dist/antd.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

function App() {
  return (
 <BrowserRouter> 
 <Routes> 
       <Route path="/" element={<SignIn />}> 
         {/* <Route index element={<Home />} />  */}
         <Route path="signup" element={<SignUp />}> 
         <Route path="signin" element={<SignIn />} /> 
           {/* <Route path=":teamId" element={<Team />} />  */}
           {/* <Route path="new" element={<NewTeamForm />} />  */}
           {/* <Route index element={<LeagueStandings />} />  */}
         </Route> 
       </Route> 
     </Routes> 
   </BrowserRouter> 

  );
}

export default App;
