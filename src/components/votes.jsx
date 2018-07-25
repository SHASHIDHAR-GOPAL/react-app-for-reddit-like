import React from 'react';

class Vote extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
    };

    upvote(){
        this.setState({
            count: this.state.count + 1,
        });
    };

    downvote(){
        this.setState({
            count: this.state.count - 1,
        });
    };

    render(){
        return(
            <div>
                <button className={"btn btn-dark btn-sm"} onClick={this.upvote}>Upvote</button>
                <button className={"btn btn-light btn-sm"}> {this.state.count} </button>
                <button className={"btn btn-dark btn-sm"} onClick={this.downvote}>Downvote</button>
            </div>
        );
    };
}

export default Vote;