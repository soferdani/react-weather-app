export default function OneOption(props) {
    
    return (
        <option onChange={props.setcode(props.children)}>{props.value}</option>
    )
}