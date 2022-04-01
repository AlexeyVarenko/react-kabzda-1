
import './App.css';

const App = () => {
  return (
    <div>
      <Header/ >
      <Technologies />
    </div>
  );
}


const Technologies = ()=>{
  return (
    <div className="App">
        <ul>
          <li>CSS</li>
          <li>HTML</li>
          <li>JS</li> 
        </ul>
      </div>
  );
}

const Header=()=>{
  return (
    <div>
      <a href='#'>Home</a>
      <a href='#'>News</a>
      <a href='#'>Feed</a>
    </div>
  );
}




export default App;
