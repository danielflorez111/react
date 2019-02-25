import React, { Component } from 'react';

class PaymentMethod extends Component {

    renderContent() {
        const paymentMethod = this.props.paymentMethod;

        switch (paymentMethod.codigo) {
            case 'LQ':
                return (
                    <div>
                        <a href="hey">ADHERIR PAGO AUTOMATICO</a>
                    </div>
                );

            case 'CC':
                if (paymentMethod && paymentMethod.tarjeta) {
                    return (<div>Tarjeta de credito</div>);
                } else if (paymentMethod && paymentMethod.cuenta) {
                    return (<div>Cuenta</div>)
                }
                return null;


            case 'CP':
                return (
                    <div>Cuponera content</div>
                );

            case 'LT':
                return (
                    <div>Letras content</div>
                );

            default:
                break;

        }
    }


    render() {
        const paymentMethod = this.props.paymentMethod;
        console.log(paymentMethod);

        return (
            <div>
                {
                    paymentMethod ?
                        <div>
                            <p>MEDIO DE PAGO</p>
                            <p>{paymentMethod.descripcion}</p>
                            {this.renderContent()}
                        </div>
                        :
                        null
                }
            </div>
        );
    }
}

export default PaymentMethod;
