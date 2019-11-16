import React, { Component } from 'react'
import Coin from "../Coin/Coin"
import './CoinFlipper.css';

class CoinFlipper extends Component {

  constructor(props){
    super(props);
    this.state = {
        side: "tura",
        donuyor: false,
        toplam: 0,
        atisYazi: 0,
        atisTura: 0
    }
  };
  handleClick = () => {
    setTimeout(() => this.setState({donuyor: false}), 1000);
    let result = Math.random() < 0.5 ? "tura" : "yazi"; 
    this.setState({donuyor: true, side:result}, () => {
      this.state.side === "yazi" 
      ? this.setState({atisYazi : this.state.atisYazi + 1}) 
      : this.setState({atisTura : this.state.atisTura + 1})
  })
    
    this.setState({toplam:this.state.toplam+1})
    
  };

  finish = () => {
    this.setState({
      atisTura: 0,
      atisYazi: 0,
      toplam: 0
    })
  };

  render(){
    var style = {
     margin:'10px'
    };
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} />
        <button onClick={this.handleClick} >At!</button>
        <button onClick={this.finish} style={style} >Bitir!</button>
        <p>
            Toplam
            <strong> {this.state.toplam} </strong>
            atıştan
            <strong> {this.state.atisTura} </strong>
            ü tura
            <strong> {this.state.atisYazi} </strong>
            si yazı geldi.</p>
      </div>
    )
  }
}

export default CoinFlipper;