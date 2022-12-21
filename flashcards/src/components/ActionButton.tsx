export interface ActionButtonProps {
  label: string
  handleClick: (event?: React.MouseEvent<HTMLElement>) => void
}

function ActionButton(props: ActionButtonProps) {
  const label = props.label
  const handleClick = props.handleClick

  return (
    <button type="button" onClick={handleClick}>
      {label}
    </button>
  )
}

export default ActionButton
