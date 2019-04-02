import React, { Component } from 'react';
import CurrentPayment from './components/CurrentPayment';
import PaymentMethod from './components/PaymentMethod';
import ServerPagination from './components/ServerPagination';
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
      // const n = this.getRandomInt(5);
      const paymentMethod = paymentMethods[4];
      this.setState({ paymentMethod })
    }, 1000);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    return (
      // <div className="container">
      //   <div className="row">
      //     <div className="col-sm-8">
      //       <CurrentPayment />
      //     </div>
      //     <div className="col-sm-4">
      //       <PaymentMethod paymentMethod={this.state.paymentMethod} />
      //     </div>
      //   </div>
      // </div>
      <div>
        <ServerPagination
          currentPage={1}
          rows={10}
          pageSize={4}
        />
      </div>
    );
  }
}

export default App;
