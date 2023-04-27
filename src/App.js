import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/SignIn/SignIn";
import {Routes , Route} from 'react-router-dom'


function App() {
  return (
   
   <Routes>
   <Route path="/" element={ <SignIn/>} />
   <Route path="/dashboard" element={ <Dashboard/>} />
  
   </Routes>
  
  );
}

export default App;
