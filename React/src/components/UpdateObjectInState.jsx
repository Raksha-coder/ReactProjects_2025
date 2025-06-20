import {useState} from 'react';
function UpdateObjectInState(){
    //array destructuring 
    const [car,setCar] = useState({year:2024,make:"Ford",model:"Mustang"});

    function handleCarYear(e){
        setCar({...car,year:e.target.value})
    }

    function handleCarMake(e){
      // setCar({...car,make:e.target.value})
      setCar(c => ({...c,make:e.target.value}))
    }


    function handleCarModel(e){
        // setCar({...car,model:e.target.value})
        setCar(c => ({...c,model:e.target.value}))
    }


    return(
      <div>
        <p>The car details are :{car.year} {car.make} {car.model}</p>

       <input type="number" placeholder="Enter car year" value={car.year} onChange={handleCarYear}></input>
       <input type="text" placeholder="Enter car make" value={car.make} onChange={handleCarMake}></input>
       <input type="text" placeholder="Enter car model" value={car.model} onChange={handleCarModel}></input>
      </div>
    );
}

export default UpdateObjectInState;