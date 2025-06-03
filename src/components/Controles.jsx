const Controles = ({ onCambiarUnidad, onCambiarClima, onReset }) => {
    return (
        <div className='controles-clima'>
            <button onClick={onReset}>Reset</button>
            <button onClick={onCambiarUnidad}>Cambiar Unidad</button>
            <button onClick={() => onCambiarClima('Soleado')}>Soleado</button>
            <button onClick={() => onCambiarClima('Nublado')}>Nublado</button>
        </div>
    )
}

export default Controles