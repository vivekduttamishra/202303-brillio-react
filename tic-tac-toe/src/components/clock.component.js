import React from 'react';


class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount = () => {
        this.timer = setInterval(() => {
            this.setState({ date: new Date() });
        }, 100);
    }

    componentWillUnmount = () => {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    render() {
        var date = this.state.date;

        return (<span className='clock'>
            <span className='hour'>{date.getHours()}</span> :
            <span className='minute'>{date.getMinutes()}</span> :
            <span className='second'>{date.getSeconds()}</span> .
            <span className='ms'>{date.getMilliseconds()}</span>

        </span>);
    }

}

export default Clock;