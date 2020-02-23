import React from 'react';
import StoryContrainer from './StoryContrainer.js'
import stories from './stories.js'
import './App.css';

function App() {

  return (
    <>
    <h1>lifecycle methods photostory</h1>
      {
        stories.map(story => <StoryContrainer story={story} key={story.img}/>)
      }
    </>
  );
}

export default App;
