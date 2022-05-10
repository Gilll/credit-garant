import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class CustomScrollbars extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = { top: 0 };
        console.log(this);
        this.handleScrollFrame = this.handleScrollFrame.bind(this);
        this.renderView = this.renderView.bind(this);
    }

    handleScrollFrame(values) {
        const { top } = values;
        this.setState({ top });
    }

    renderView({ style, ...props }) {
        const { top } = this.state;
        const color = top * 255;
        const customStyle = {
            backgroundColor: `rgb(${color}, ${color}, ${color})`
        };
        return (
            <div {...props} style={{ ...style, ...customStyle }}/>
        );
    }

    render() {
        return (
            <Scrollbars
                renderView={this.renderView}
                onScrollFrame={this.handleScrollFrame}
                {...this.props}/>
        );
    }
}

export default CustomScrollbars;