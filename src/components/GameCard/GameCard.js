import React, { Component } from 'react'

import "./GameCard.css"

import "./Modal.css"

// import img from '../../assets/images/rome.jpeg'

class GameCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      background: this.props.url,
      frase: ''
    }
  }

  expand = (e) => {
    const question = document.querySelector('.card-question')
    e.target.parentNode.classList.toggle('card-question-toggle')
  }

  valida = (e) => {
    console.log(e.target.title == this.props.answer)
    if (e.target.title == this.props.answer) { 
      this.setState({
        frase: 'Parabéns você acertou!'
      })
      document.querySelector('.modal').classList.toggle('left')
    } else {
      this.setState({
        frase: 'Você errou, mas continue tentando!'
      })
      document.querySelector('.modal').classList.toggle('left')
    }
  }

  render() {
    const { name, extension, relevance, personage, event, title, text, question, answer, justification } = this.props
    const cardImageStyle = {
      background: 'url(' + require(`../../assets/images/${name}.${extension}`) + ') no-repeat center center',
      backgroundSize: 'cover'
    }
    console.log(this.state.frase)
    
    return (
      <div className="card-container">
        {/* cartão */}
        <div className="card">

          <div className="card-image" style={cardImageStyle}>

            <div className="pontuacao relevancia">
              <span className="card-power card-relevance">R</span>
              <span className="valor card-value-relevance">{relevance}</span>
            </div>

            <div className="pontuacao personagem">
              <span className="card-power card-personage">P</span>
              <span className="valor  card-value-personage">{personage}</span>
            </div>

            <div className="pontuacao evento">
              <span className="card-power card-event">E</span>
              <span className="valor card-value-event">{event}</span>
            </div>


            <div className="card-content">
              <h1>{title}</h1>
              <p>{text}</p>
            </div>
          </div> {/* fim card-image*/}
        </div> {/* fim card*/}
        {/* pergunta */}
        <div className="card-question" onClick={this.expand}>
          <p className="card-question-text">
            {question}
          </p>
          <div className="center">
            <span title="true" onClick={this.valida}>Certo</span>
            <span title="false" onClick={this.valida}>Errado</span>
          </div>
          <div className="flex foter">
        
            {/*<h3 className="card-extra-points">Pontos extras</h3>*/}
            <p title="extra" className="card-query">Clique aqui!</p>
 
          </div>
        </div> {/* fim card-question*/}
        {/* <input className="modal-state" id="modal-1" type="checkbox" /> */}
        <div className="modal">
          <label className="modal__bg" for="modal-1"></label>
          <div className="modal__inner">
            <label className="modal__close" for="modal-1"></label>
            <h2 className="blue-text">{this.state.frase}</h2>
            <p>Justificativa:</p>
            <p>{justification}</p>
          </div>
        </div>

        {/* <input className="modal-state" id="modal-2" type="checkbox" />
        <div className="modal">
          <label className="modal__bg" for="modal-2"></label>
          <div className="modal__inner">
            <label className="modal__close" for="modal-2"></label>
            <h2 className="blue-text">{this.state.frase}</h2>
            <p>Justificativa:</p>
            <p>{justification}</p>
          </div>
        </div> */}
      </div>
    )
  }
}

export default GameCard