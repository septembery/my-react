export interface ProgressIndicatorProps {
    progress: number
}

function ProgressIndicator(props: ProgressIndicatorProps) {
    return (
        <div><span>{props.progress * 100}</span><span>%</span></div>
    );
}

export default ProgressIndicator;