

export default function Contacto() {
  return (
    <>
    <h3 className="h4 text-danger">CONTACTE CON NOSOTROS</h3>
    <div className="mx-1 p-2 d-flex">
        <div className="d-flex flex-column">
            <img className="mx-auto my-1 w-25" src="/img/icons/mail 2.AVIF" alt="email"/>
            <a className="text-center my-1 " href="mailto:contacto@gvds.cl">contacto@gvds.cl</a>
        </div>
        <div className="d-flex flex-column">
            <img className="mx-auto my-1 w-25" src="/img/icons/call-center.AVIF" alt="telefono"/>
            <a className="text-center my-1" href="tel:+56955555555">+56-9-55555555</a>
        </div>
        <div className="d-block">
            <img className="mx-auto my-1 w-25" src="/img/icons/map.AVIF" alt="ubicacion"/>
            <div className="my-1 mx-auto d-flex justify-content-center">
                <a className="mx-auto" rel="noopener" href="https://www.google.cl/maps/@-32.9261174,-71.5336387,15.52z" target="_blank">Viña del Mar, Chile</a>
            </div>
        </div>
    </div>
    </>
  )
}
