import './App.css';

function App() {
  var person ={
    name : 'Jewel Rana',
    profession: 'Software Engineer',
    text : "I'm passionate about learning new technologies and love to code."
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hi I am {person.name} and I am a {person.profession}</h1>
      <p>{person.text}</p>
      <ProjectWork name="Ecommerce" details="Dynamic SEO and User Friendly"></ProjectWork>
      <ProjectWork name="Invoce Managment System" details="Easy to provide pauch"></ProjectWork>
      <ProjectWork name ="Students Attendence System" details="Take student attendence data"></ProjectWork>
      </header> 
    </div>
  );
}

function ProjectWork(props){
  var style ={
    border : '2px solid #282C63',
    margin : '5px',
    padding: '10px',
    borderRadious : '20px',
    boxShadow : '5px 5px #282C44'
  }
  return(
      <div style = {style}>
        <h1>{props.name}</h1>
        <p>{props.details}</p>
      </div>
  );
}

export default App;
