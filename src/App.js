import {useState} from 'react'
import './App.css';
import Button from "./Component/Button"
import Display from "./Component/Display"
import logo from "./Images/Profile.png"
import Counter from "./Component/Counter"
import Social from "./Component/SocialMedia"

function App() {

const [skills, setSkills] = useState("My Name is CaSaundra")

const handleName =()=>{
  setSkills("My Name is CaSaundra")
}

const handleSkills =()=>{
  setSkills("I am a Frontend Developer")
} 

  return (
    <>
      <section className="profile-info">
            <a href="#home"><img id="profilepic" src={logo} width="170" height="170" alt="profilepic"></img></a> 
</section>

<div className="appstyling">
      <Display tech={skills} />

      <div className="btns">
        <Button ClickHandler={handleName} btntext={"Name"}/>
        <Button ClickHandler={handleSkills} btntext={"Skills"}/>
      </div>

      <div className="likes">
        <Counter />
      </div>

      <div className="social" >
        <Social />
      </div>

    </div>
    </>
  );
}

export default App;
