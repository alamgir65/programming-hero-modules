import './App.css'

export default function Actor({actor}){
    return (
        <>
            <div className="actor">
                <h4>Name : {actor.name}</h4>
                <p>Age : {actor.age} </p>
            </div>
        </>
    )
}