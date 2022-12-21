import { ProgressBarContainer, ProgressBar } from "./ProcessIndicator.styles";

export interface ProgressIndicatorProps {
    progress: number
}

function ProgressIndicator(props: ProgressIndicatorProps) {
    const progressPercentage = props.progress * 100;
    return (
        <ProgressBarContainer>
            <ProgressBar progress={progressPercentage}>{progressPercentage}%</ProgressBar>
        </ProgressBarContainer>
    );
}

export default ProgressIndicator;