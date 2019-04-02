import React, { Component } from 'react';

class ServerPagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: props.currentPage || 1,
            rows: props.rows,
            pageSize: props.pageSize || 4
        }
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    prevPage() {
        const nextPage = this.state.currentPage - 1;
        if (nextPage < 1) return;
        this.setState({ currentPage: nextPage });
    }

    nextPage() {
        const nextPage = this.state.currentPage + 1;
        // if (nextPage > this.state.rows / this.state.pageSize) return;
        if (nextPage > Math.ceil(this.state.rows / this.state.pageSize)) return;
        this.setState({ currentPage: nextPage });
    }

    render() {
        const { currentPage, rows, pageSize } = this.state;
        return (
            <div>
                <button onClick={this.prevPage}>previous</button>
                {currentPage} / {Math.ceil(this.state.rows / this.state.pageSize)}
                <button onClick={this.nextPage}>next</button>
            </div>);
    }
}

export default ServerPagination;
