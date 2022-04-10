import { Button } from "react-bootstrap"

export default function CartForm({dataForm , newOrder, handleChange}) {
        
  return (
    <div className="col-3 border border-secondary rounded">
      <form className="m-2" onSubmit={newOrder}>
        <label for="name" class="form-label m-1 fw-bold">Ingrese nombre y apellido:</label>
        <input className="m-1" type='text' name="name" placeholder="Nombre" value={dataForm.name} onChange={handleChange}/>
        <label for="phone" class="form-label m-1 fw-bold">Ingrese número de teléfono:</label>
        <input className="m-1" type='text' name="phone" placeholder="Telefono" value={dataForm.phone} onChange={handleChange}/>
        <label for="address" class="form-label m-1 fw-bold">Ingrese su direccion:</label>
        <input className="m-1" type='text' name="address" placeholder="Direccion" value={dataForm.address} onChange={handleChange}/>
        <label for="email" class="form-label m-1 fw-bold">Ingrese su correo electronico:</label>
        <input className="m-1" type='email' name="email" placeholder="e-mail" value={dataForm.email} onChange={handleChange}/>
        <label for="rEmail" class="form-label m-1 fw-bold">Repita su correo electronico:</label>
        <input className="m-1" type='email' name="rEmail" placeholder="repita e-mail" value={dataForm.rEmail} onChange={handleChange}/>
        <Button disabled= {dataForm.email!=dataForm.rEmail} className="m-2" variant="outline-success" onClick={newOrder}>Generar Orden</Button>
      </form>
    </div>
  )
}
