import React, {Component} from 'react';

//this class can be used to display error message if something went wrong
class ErrorBoundry extends Component {

state = {
    hasError: false,
    errorMessage: ''
}

componentDidCatch = (error, info) => {
    this.setState({hasError:true, errorMessage: error});
}

    render () {

        if(this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
        }
    };
}

export default ErrorBoundry;