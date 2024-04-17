import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';

//set up routing and import router and browser code
export default function App() {
  return (
    <div>
      {/* set up  */}
      <Nav />
      <Home />  
    </div>
  )
}
