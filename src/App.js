import './App.css';
//import Greet from './5.FunctionalComponent/Greet';
//import Welcome from './6.ClassComponent/Greet';
//import Hello from './8.JSX/Hello';
//import FGreet from './9.Props/FunctionalProps';
//import CGreet from './9.Props/ClassProps';
//import Message from './10.State/Message';
import Counter from './11.setState/Counter';
// import DGreet from './12.Destructuring/Greet';
// import DWelcome from './12.Destructuring/Welcome';
// import FunctionClick from './13.EventHandling/FunctionClick';
// import ClassClick from './13.EventHandling/ClassClick';
// import EventBind from './14.BindEventHandlers/EventBind';
import Stylesheet from './20.StylingAndCSSBasics/Stylesheet';
import Inline from './20.StylingAndCSSBasics/Inline';
import './20.StylingAndCSSBasics/appStyles.css';
import Styles from './20.StylingAndCSSBasics/appStyles.module.css';
import ParentComponent from './15.MethodAsProps/ParentComponent';
import UserGreeting from './16.ConditionalRendering/UserGreeting';
import NameList from './17.ListRendering/NameList';
import ToDoList from './19.IndexAsKeyAnti-pattern/ToDoList';
import Form from './21.BasicsOfFormHandling/Form';
import LifecycleA from './23.MountingLifecycleMethods/LifecycleA';
import RefsDemo1 from './28.Refs/RefsDemo1';
import RefsDemo2 from './28.Refs/RefsDemo2';
import FoucsInput from './29.RefsWithClassComponents/FoucsInput';
import FRParentInput from './30.ForwardingRefs/FRParentInput';


function App() {
  return (
    <div className="App">
      {/* <Greet/>
      <Welcome/>
      <Hello/> */}

      {/* <FGreet name="Bruce" heroname="Batman">
        <p>This is children props</p>
      </FGreet>
      <FGreet name="Clark" heroname="Superman"/>
      
      <CGreet name="Diana" heroname="WonderWomen"/>
      <CGreet name="Clark" heroname="Superman"/> */}

      {/* <Message/> */}
      {/* <Counter/> */}

      {/* <DGreet name="Diana" heroName="WonderWomen"/>
      <DWelcome name="Bruce" heroName="Batman"/> */}

      {/* <FunctionClick/>
      <ClassClick/> */}

      {/* <EventBind/> */}

      {/* <Stylesheet primary={true}/>
      <Inline/>
      <h1 className='error'>Error</h1>
      <h1 className={Styles.success}>success</h1>  */}

      {/* <ParentComponent/> */}

      {/* <UserGreeting/> */}

      {/* <NameList/> */}

      {/* <ToDoList/> */}

      {/* <Form /> */}

      {/* <LifecycleA /> */}

      {/* <RefsDemo1 /> */}
      {/* <RefsDemo2 /> */}

      {/* <FoucsInput /> */}

      <FRParentInput />

    </div>
  );
}

export default App;
