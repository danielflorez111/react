import React, { Component } from 'react';

class PaymentMethod extends Component {

    render() {
        const paymentMethod = this.props.paymentMethod;

        return (
            <div>
                {
                    paymentMethod ?
                        <p>{paymentMethod.name}</p>
                        :
                        null
                }
            </div>
        );
    }
}

export default PaymentMethod;
