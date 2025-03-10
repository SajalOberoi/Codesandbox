import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/sample.jpeg" />;
}

function Intro() {
  return (
    <div>
      <h1> Sample Name </h1>
      <p>
        This is some random text so that I can test my skills for react
        development. Let see how this looks like on browser
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML+CSS" emoji="😊" color="red" />
      <Skill name="Javascript" emoji="😆" color="blue" />
      <Skill name="Web Design" emoji="😟" color="green" />
      <Skill name="React" emoji="😶" color="yellow" />
      <Skill name="Git" emoji="😞" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>
        {props.name}
        {props.emoji}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
