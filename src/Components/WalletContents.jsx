import React from 'react';

import { Button, Table, Modal, message, Popconfirm } from 'antd';
import TransactionForm from './CreateTransaction';

class WalletContents extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            
        };
        this.handleSendit = this.handleSendit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleReload = this.handleReload.bind(this);
        this.handleCreateTransaction = this.handleCreateTransaction.bind(this);
    }

    handleSendit() {

        // validateFormHashed(this.form).then((values) => {

        //     this.setState({ modalOpenSend: false });

        //     if (!this.state.sourceWallet.matches(values.password)) {
        //         message.error('Wrong password entered.');
        //         return;
        //     }

        //     this.state.sourceWallet.send(
        //         values.bitcoin, values.address, this.fee, values.password
        //     ).then(() => {
        //         message.success(Constants.Messages.Transactions.Sent);
        //         this.handleReload();
        //     }, (e) => {

        //         const info = { title: Constants.Messages.Transactions.NOTSent };
        //         const substring = Constants.ReturnValues.Fragments.MinimumFeeNotMet;
        //         if (e.toString().includes(substring)) {
        //             info.content = Constants.Messages.Errors.FeeNotMet;
        //         }
        //         Modal.error(info);
        //     });

        // }, (e) => {
        //     console.log(e);
        //     message.error('Bad format for password entered');
        // });
    }

    handleCancel() {
        this.setState({
            // modalOpenCreate: false,
            // modalOpenSend: false,
        });
        this.form = null;
    }

    handleReload() {
        // this.state.wallets.forEach(w => w.update());
    }

    handleCreateTransaction(){
        console.log("Inside handleCreateTransaction");
        return (<TransactionForm />);
    }

    render() {

        return (
            <div className="Wallets">
                <div style={{ marginBottom: '12px' }}>

                </div>

                {/* <div style={{ marginTop: '24px' }}>
                    <h3>Total: {`${formatAmount(this.state.total * this.state.price)}` }</h3>
                    <span>{`(at ${formatAmount(this.state.price)} per BTC)`}</span>
                </div> */}
            </div>
        );
    }
}

export default WalletContents;