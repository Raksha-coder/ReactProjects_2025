import { useState } from "react";

function CarComp(){
  const [car,setCar] = useState([]);
  const [year,setYear] = useState(new Date().getFullYear());
  const [model, setModel] = useState("");
  const [make,setMake] = useState("");


  function handleAddCar(){

    const newCar = {year:year,
                    make:make,
                    model:model}

      setCar(c => [...c,newCar]);

      setYear(new Date().getFullYear());
      setModel("");
      setMake("");
  };

  function handleModelChange(e){
      setModel(e.target.value);
  }

  function handleCarMakeChange(e){
      setMake(e.target.value);
  }

  function handleYearChange(e){
    setYear(parseInt(e.target.value));
  }

  function handleRemoveCar(index){
      setCar(car.filter((_,i) => i != index ))
  }

  return(<>
      <div>
        <h2>List Of Items</h2>
        <ul>
          {car.map((c,index) => (
            <li key={index} onClick={() => handleRemoveCar(index)}>
            {c.year} {c.model} {c.make}
            </li>
          ))}
        </ul>

        <div>
          <input type="number" placeholder="Enter year" value={year} onChange={handleYearChange}/><br/>
          <input type="text" placeholder="Enter car make" value={make} onChange={handleCarMakeChange}/><br/>
          <input type="text" placeholder="Enter car model" value={model} onChange={handleModelChange}/><br/>

          <button onClick={handleAddCar}>Add Car</button>
        </div>
      </div>
  </>);
};

export default CarComp;