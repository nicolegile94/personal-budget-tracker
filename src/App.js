import React, { useState } from 'react';
import Nav from './components/Nav';
import Category from './components/Category';


function App() {
  const [categories] = useState([
    {
     name: "Intro",
     description: "Information about Ora"
    },
    {
        name: "Stats",
        description: "Statistics for play"
    },
    {
        name: "Actions",
        description: "Actions available"
    },
    {
      name: "Equipment",
      description: "Current backpack"
    }
 ]);

 const [currentCategory, setCurrentCategory] = useState(categories[0]);



  return (
    <div>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Nav>
      <main>
       <Category currentCategory={currentCategory}></Category>
      </main>
    </div>
  );
}

export default App;
