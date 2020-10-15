import React from 'react';
import StoryContrainer from './StoryContrainer.js'
import stories from '../stories.js'
import '../App.css';

function App() {

  return (
    <main className="App">
      <h1>lifecycle methods photostory</h1>
      { stories.map(story => <StoryContrainer story={story} key={story.img}/>) }
    </main>
  )
}

export default App;
