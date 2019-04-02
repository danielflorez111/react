import React, { Component } from 'react';
import './_customSelect.css';

class CustomSelect extends Component {

    state = {
        items: this.props.items || [],
        showItems: false,
        selectedItem: this.props.items && this.props.items[0],
    };

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }
        this.handleClickOutside();
    }

    handleClickOutside = () => {
        this.setState({
            showItems: false
        });
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems
        }));
    }

    selectItem = (item) => {
        this.setState({
            selectedItem: item,
            showItems: false,
        });
    }

    render() {
        return (
            <div ref={node => this.node = node} >
                <div className="select-box-box" style={{ width: this.props.width || 180 }}>
                    <div className="select-box-container">
                        <div className="select-box-selected-item">
                            {this.state.selectedItem.value}
                        </div>
                        <div className="select-box-arrow" onClick={this.dropDown}>
                            <span className={`${this.state.showItems ? 'select-box-arrow-up' : 'select-box-arrow-down'}`} />
                        </div>
                        <div style={{ display: this.state.showItems ? 'block' : 'none' }} className="select-box-items">
                            {
                                this.state.items.map(item => (
                                    <div
                                        key={item.id}
                                        onClick={() => this.selectItem(item)}
                                        className={this.state.selectedItem === item ? 'selected' : ''}
                                    >
                                        {item.value}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default CustomSelect;
