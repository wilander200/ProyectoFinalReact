const prod = [
    { id: '1', category: "bikes", name: "Bicicleta Enduro 29", description: "Bicicleta mtb para realizar enduro con aro de 29' y doble suspención", price: 2800000, stock: 10, image: "./img/enduro/enduroDoble.jfif"},
    { id: '2', category: "bikes", name: "Bicicleta Enduro 27", description: "Bicicleta mtb para realizar enduro con aro de 27' y doble suspención", price: 2800000, stock: 10, image: "./img/enduro/enduro27Doble.jfif"},
    { id: '3', category: "bikes", name: "Bicicleta Enduro 29", description: "Bicicleta mtb para realizar enduro con aro de 29' y cuadro rígido", price: 1680000, stock: 50, image: "./img/enduro/enduro29Rigida.jfif"},
    { id: '4', category: "bikes", name: "Bicicleta Enduro 27", description: "Bicicleta mtb para realizar enduro con aro de 27' y cuadro rígido", price: 1680000, stock: 35, image: "./img/enduro/enduro27Rigida.jfif"},
    { id: '5', category: "bikes", name: "Bicicleta Trial 29", description: "Bicicleta mtb para realizar trail con aro de 29' y doble suspención", price: 1780000, stock: 32, image: "./img/trail/trailBike29.jfif"},
    { id: '6', category: "bikes", name: "Bicicleta Trial 27", description: "Bicicleta mtb para realizar trail con aro de 27' y doble suspención", price: 1780000, stock: 35, image: "./img/trail/trailBike27.jfif"},
    { id: '7', category: "bikes", name: "Bicicleta Trial 29", description: "Bicicleta mtb para realizar trail con aro de 29' y cuadro rígido", price: 1250000, stock: 15, image: "./img/trail/trailBike29Rigida.jfif"},
    { id: '8', category: "bikes", name: "Bicicleta Trial 27", description: "Bicicleta mtb para realizar trail con aro de 27' y cuadro rígido", price: 1250000, stock: 15, image: "./img/trail/trailBike27Rigida.jfif"},
    { id: '9', category: "bikes", name: "Bicicleta XCO 29", description: "Bicicleta mtb para realizar XCO con aro de 29' y doble suspención", price: 1550000, stock: 20, image: "./img/xco/xco29Doble.jfif"},
    { id: '10',category: "bikes", name: "Bicicleta XCO 27", description: "Bicicleta mtb para realizar XCO con aro de 27' y doble suspención", price: 1550000, stock: 10, image: "./img/xco/xco27Doble.jfif"},
    { id: '11',category: "bikes", name: "Bicicleta XCO 29", description: "Bicicleta mtb para realizar XCO con aro de 29' y cuadro rígido", price: 850000, stock: 10, image: "./img/xco/xco29Rigida.jfif"},
    { id: '12',category: "bikes", name: "Bicicleta XCO 27", description: "Bicicleta mtb para realizar XCO con aro de 27' y cuadro rígido", price: 850000, stock: 20, image: "./img/xco/xco27Rigida.jfif"},
    { id: '13',category: "bikes", name: "Bicicleta downhill 29", description: "Bicicleta mtb para realizar downhill con aro de 29' y doble suspención",price: 3800000, stock: 10, image: "./img/downhill/downHill29Doble.jfif"},
    { id: '14',category: "bikes", name: "Bicicleta downhill 27", description: "Bicicleta mtb para realizar downhill con aro de 27' y doble suspención",price: 3800000, stock: 5, image: "./img/downhill/downHill27Doble.jfif"},
    { id: '15',category: "ebikes", name: "E-bike downhill 29", description: "Bicicleta eléctrica mtb par realizar downhill con aro de 29' y doble suspencion", price: 1180000, stock: 12, image: "./img/ebikes/ebikeDownhill.jfif"},
    { id: '16',category: "ebikes", name: "E-bike enduro 29", description:  "Bicicleta eléctrica mtb par realizar enduro con aro de 29' y doble suspencion", price: 7400000, stock: 15, image: "./img/ebikes/ebikeEnduro.jfif"},
    { id: '17',category: "ebikes", name: "E-bike trial 29", description:  "Bicicleta eléctrica mtb par realizar trail con aro de 29' y doble suspencion", price: 7500000, stock: 18, image: "./img/ebikes/ebiketrail.jfif"},
    { id: '18',category: "ebikes", name: "E-bike XCO 29", description:  "Bicicleta eléctrica mtb par realizar XCO con aro de 29' y cuadro rígido", price: 3500000, stock: 15, image: "./img/ebikes/ebikeRigida.jfif"},
]
export const gFetch = new Promise ((resolve , reject)=>{
        let condition = true
         if (condition) {
             setTimeout (() => {
             resolve(prod)
             }, 2000);
        } 
         else {
             reject('Error 404')   
        }
     })
