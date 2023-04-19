import {Component} from 'react'
import EachTab from './components/EachTab'
import ShowGreeting from './components/ShowGreeting'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {activeId: languageGreetingsList[0].id}

  getGreeting = () => {
    const {activeId} = this.state
    const greeting = languageGreetingsList.filter(each => each.id === activeId)
    return greeting
  }

  clickTab = id => {
    this.setState({activeId: id})
  }

  render() {
    const {activeId} = this.state
    const newGreeting = this.getGreeting()
    return (
      <div className="bg-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="all-tabs">
          {languageGreetingsList.map(each => (
            <EachTab
              key={each.id}
              activeId={activeId}
              eachTab={each}
              clickTab={this.clickTab}
            />
          ))}
        </ul>
        <ShowGreeting greeting={newGreeting} />
      </div>
    )
  }
}
export default App
