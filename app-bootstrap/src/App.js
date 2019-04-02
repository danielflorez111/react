import React, { Component } from 'react';
// import CurrentPayment from './components/CurrentPayment';
// import PaymentMethod from './components/PaymentMethod';
import CustomSelect from './components/CustomSelect';
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
      <div className="container">

        <h3>Select</h3>

        {/* <div style={{ margin: '16px', position: 'relative' }}> */}
          <CustomSelect
            width={300}
            items={[
              { value: 'United States', id: 1 },
              { value: 'Mexico', id: 2 },
              { value: 'Canada', id: 3 },
              { value: 'Colombia', id: 4 },
            ]}
          />
        {/* </div> */}

        {/* <div className="row">
          <div className="col-sm-8">
            <CurrentPayment />
          </div>
          <div className="col-sm-4">
            <PaymentMethod paymentMethod={this.state.paymentMethod} />
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;
