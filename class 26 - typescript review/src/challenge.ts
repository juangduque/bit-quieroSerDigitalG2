interface Vehicle{
  brand: string,
  model: number,
  type: string,
  soonroof?: boolean
};

const car: Vehicle = {
  brand: "Toyota",
  model: 2012,
  type: "car",
  soonroof: true
};

const motorBike: Vehicle = {
  brand: "Yamaha",
  model: 2009,
  type: "motorBike",
  soonroof: false
};

function determineOld(model: number): number{
  return 2022 - model;
};

if(determineOld(car.model) >= 10 && car.soonroof){
  console.log("Tiene 10 o más años y techo corredizo");
}else{
  console.log("No cumple las condiciones");  
}

