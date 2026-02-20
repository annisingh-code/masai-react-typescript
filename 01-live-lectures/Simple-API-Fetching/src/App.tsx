// import Greeting from "./components/Greetings";
// import StateExamples from "./components/stateExamples";
// import InputLogger from "./components/InputLogger";
import UserForm from "./components/UserForm";
import Greetings2 from "./components/Greetings2";
import Button from "./components/Button";
import Box from "./components/Box";
function App() {
  return (
    <div className="border-2 border-gray-300 min-h-screen m-4 text-center">
      {/* <Greeting name="Anish" age={20} />
        <Greeting name="tommy" /> */}
      {/* <StateExamples />
      <InputLogger /> */}
      <UserForm />
      <Greetings2 message="Hello What's up">
        <p>This is Extra components</p>
      </Greetings2>
      <Button label="Click Me" type="button" />
      <Box>
        <p>This is wrapped inside the box component</p>
      </Box>
      <Box>
        <p>Hello World</p>
      </Box>
    </div>
  );
}

export default App;
