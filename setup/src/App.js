import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
  </main>
  )
}
export default App;
/* 
"people" collects the state and is passed as props to
the List component, while the mapp function is used to 
access the state content
*/