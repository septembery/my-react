import { Component } from 'react';
import styled, { keyframes } from 'styled-components';

export interface ProgressIndicatorProps {
    progress: number
}

class ProgressIndicator extends Component<{progress: number}, {}> {
    constructor(props: any) {
        super(props);
    }

    load = (percentage: number) => keyframes`
        0% { width: 0; }
        100% { width: ${percentage}%; }
    `;

    ProgressBar = styled.div`
        animation: ${props => this.load(this.props.progress * 100)} 3s normal forwards,
        boxShadow: 0 10px 40px -10px #009900,
        borderRadius: 100px,
        background: #009900,
        textalign: center,
        height: 30px,
        width: 0,
    `;

    render() {
        return (
            <div className="progress">
                <this.ProgressBar>{this.props.progress * 100}%</this.ProgressBar>
            </div>
        );
    }
}

export default ProgressIndicator;