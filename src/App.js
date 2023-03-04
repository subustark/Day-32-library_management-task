import "./sb-admin-2.min.css"
import './App.css';
import Login from "./Components/Login";
import { Routes,Route} from 'react-router-dom';
import Portal from "./Components/Portal";
import Dashboard from "./Components/Dashboard";
import OverDue from "./Components/OverDue";
import AddMembers from "./Components/AddMembers";
import Members from "./Members";
import ViewBooks from "./Components/Books/ViewBooks";
import AddBook from "./Components/Books/AddBook";



function App() {
  return (
<>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path="/portal" element={<Portal/>}>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="overdue" element={<OverDue/>}/>
      <Route path="add" element={<AddMembers/>}/>
      <Route path="member" element={<Members/>}/>
      <Route path='books' element={<ViewBooks/>}/>
    
    </Route>
    <Route path='/addbook' element={<AddBook/>}/>
  </Routes>
</>
  );
}

export default App;
