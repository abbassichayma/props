
import './App.css';
import Profile from './components/profile/profile'

function App() {
  function HandleName(){
    {prompt("What is your name")}
  } 
  return (
    <div className="App">
       
      <Profile fullName="Chayma Abbassi" bio="Chimiste" profession="developpeur" name={HandleName}  >
        <img src="https://i.pinimg.com/736x/38/d9/3b/38d93bd8f2fcdfa61a019e05225e3573.jpg" style={{width:"300px"}}/>
      </Profile>
      
      
     
    </div>
  );
}

export default App;
