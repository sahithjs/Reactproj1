// import reactImg from './assets/react-core-concepts.png';
// import componentsImg from './assets/Components.png';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
// import CoreConcept from './components/CoreConcept';
// import { CORE_CONCEPTS } from './data';
// import { EXAMPLES } from './data';
//import TabButton from './components/TabButton.jsx';
// import { useState } from 'react';

function App() {
  // const [selectedTopic, setSelectedTopic] = useState('Components');
  // function handleClick(selectedButton) {
  //   setSelectedTopic(selectedButton);
  //   console.log(selectedButton);
  // }


  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
