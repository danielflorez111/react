import React, { Component } from 'react';
import CurrentPayment from './components/CurrentPayment';
import PaymentMethod from './components/PaymentMethod';
import ServerPagination from './components/ServerPagination';
import { paymentMethods } from './mockData'
import './App.css';

import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);

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

      // <div>
      //   <ServerPagination
      //     currentPage={1}
      //     rows={10}
      //     pageSize={4}
      //   />
      // </div>

      <div>
        <Slider />
        

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <SliderWithTooltip
          min={1}
          max={9}
          // marks={marks}
          // disabled={this.props.disabled}
          step={1}
          // onChange={this.updateMixValue.bind(this)}
          // value={this.props.value}
          // onAfterChange={value => this.props.MixValue(getValues(value))}
        />
      </div>
    );
  }
}

export default App;
