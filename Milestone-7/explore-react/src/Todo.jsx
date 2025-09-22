export default function Todo({task,isDone}){
    return (
        <>
            <li style={isDone? {color: "green"} : {color:"yellow"}}>Task : {task}</li>
        </>
    )
}