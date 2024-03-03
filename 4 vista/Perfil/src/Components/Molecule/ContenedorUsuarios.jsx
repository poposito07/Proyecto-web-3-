import React from 'react';
import './ContenedorUsuarios.css'; // Importa tu archivo de estilos CSS

const handleEditarClick = () => {
        alert('Se hizo clic en el botón de editar');
    };
function ContenedorUsuarios() {
    return (
        <div className="contenedor-usuarios">
            <div className="titulo-seccion">
                 <h2>CampusLink</h2>
                <p>Administra usuarios</p>
                <h2>Administración de Usuarios</h2>
            </div>
            <hr className="linea-corta" />
            <div className="grupo-usuario">
                <h3>Administradores</h3>
                <p>(4 administradores)</p>
                <button className="boton-editar" onClick={handleEditarClick}>Editar</button>
            </div>
            <div className="grupo-usuario">
                <h3>Directores</h3>
                <p>(2 directores)</p>
                <button className="boton-editar">Editar</button>
            </div>
            <hr className="linea-corta" />

            <div className="grupo-usuario">
                <h3>Usuarios reportadaos</h3>
                <p>(0 Usuarios reportadaos)</p>
                <button className="boton-editar">Editar</button>
            </div>
            <div className="grupo-usuario">
                <h3>Bloquear usuarios</h3>
                <p>(2 Usuarios Bloqueados)</p>
                <button className="boton-editar">Editar</button>
            </div>
            <div className="grupo-usuario">
                <h3>Usuarios Eliminados</h3>
                <p>(2 Usuarios Eliminados)</p>
                <button className="boton-editar">Editar</button>
            </div>
            <hr className="linea-corta" />
            <div className="titulo-seccion">
                <h2>Administración de Contenido</h2>
            </div>
            <hr className="linea-corta" />
            <div className="grupo-usuario">
                <h3>Publicaciones Reportadas</h3>
                <p>(4 publicaciones)</p>
                <button className="boton-editar">Editar</button>
            </div>
            <div className="grupo-usuario">
                <h3>Publicaciones Bloqueadas</h3>
                <p>(4 publicaciones)</p>
                <button className="boton-editar">Editar</button>
            </div>
            <div className="grupo-usuario">
                <h3>Publicaciones Eliminadas</h3>
                <p>(4 publicaciones)</p>
                <button className="boton-editar">Editar</button>
            </div>
            <hr className="linea-corta" />
            <div className="grupo-usuario">
                <h3>Eventos Reportados</h3>
                <p>(2 eventos)</p>
                <button className="boton-editar">Editar</button>
            </div>
            <div className="grupo-usuario">
                <h3>Eventos Bloqueados</h3>
                <p>(2 eventos)</p>
                <button className="boton-editar">Editar</button>
            </div>
            <div className="grupo-usuario">
                <h3>Eventos Cancelados</h3>
                <p>(2 eventos)</p>
                <button className="boton-editar">Editar</button>
            </div>
            <hr className="linea-corta" />
         </div>
    );
}

export default ContenedorUsuarios;

