
function ProgressIndicator(props: {progress: number}) {
    return (
        <div><span>{props.progress * 100}</span><span>%</span></div>
    );
}

export default ProgressIndicator;