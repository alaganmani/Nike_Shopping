import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from  './components/Header.js'
import Section from './components/Section.js'
import {DataProvider} from './components/Context'
 
class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>
    )
  }
}

export default App;
