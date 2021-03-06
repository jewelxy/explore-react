import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
      </header> 
    </div>
  );
}
function Users(){
    const style={
        float:'left',
        border: '1px solid #fff',
        margin: '10px',
        padding: '20px',
        backgroundColor: '#fff',
        color:'black'
    }
    const [users, setUsers] = useState([]);
    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[]);
    return(
        <div>
            <h3>Dynamic User: {users.length} </h3>
                {
                users.map(user => 

                    <div style={style}>

                       <h3>Name : {user.name} </h3>
                       <p>Phone Number : {user.phone}</p>
                       <p>Email : {user.email}</p>
                        
                    </div>
                
                )
                }
        </div>
    );
}

export default App;
