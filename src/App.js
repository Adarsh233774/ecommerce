import './App.css';
import NavBar from './components/NavBar'
import Main from './components/homepage/Main';
import Middle from './components/homepage/Middle';
import Dishes from './components/dishes/Dishes'
import Last from './components/end/Last';

function App() {
  return (
    <>
      <NavBar/>
      <Main/>
      <Middle/>
      <Dishes/>
      <Last/>
    </>
  );
}


export default App;
