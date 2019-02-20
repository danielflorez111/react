import React, { Component } from 'react';
import CurrentPayment from './components/CurrentPayment';
import PaymentMethod from './components/PaymentMethod';
import { paymentMethods } from './mockData'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      paymentMethod: null
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const n = this.getRandomInt(4);
      const paymentMethod = paymentMethods[n];
      this.setState({ paymentMethod })
    }, 1000);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <CurrentPayment />
          </div>
          <div className="col-sm-4">
            <PaymentMethod paymentMethod={this.state.paymentMethod} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
