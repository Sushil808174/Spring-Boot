const person = {
    name:"Susheel Kumar",
    age:22,
    address:{
        state:"UP",
        city:"Hamirpur",
        village:"Para"
    },
    profile:["LinkedIn","Twitter","Facebook"]
}


export default function LearningJavaScript(){
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.village}</div>
            <div>{person.profile}</div>
            <div>{person.age}</div>
        </>
    )
}