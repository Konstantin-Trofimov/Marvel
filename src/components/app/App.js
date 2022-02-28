import { Component } from "react"
import AppHeader from "../appHeader/AppHeader"
import RandomChar from "../randomChar/RandomChar"
import CharList from "../charList/CharList"
import CharInfo from "../charInfo/CharInfo"
import ErrorBouandary from "../errorBouandary/ErrorBouandary"

import decoration from '../../resources/img/vision.png'

class App extends Component {

    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({selectedChar: id})
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <ErrorBouandary>
                        <RandomChar/> 
                    </ErrorBouandary>
                    <div className="char__content">
                        <ErrorBouandary>
                            <CharList onCharSelected={this.onCharSelected}/>
                        </ErrorBouandary>
                        <ErrorBouandary>
                            <CharInfo charID={this.state.selectedChar}/>    
                        </ErrorBouandary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }

    
}

export default App;