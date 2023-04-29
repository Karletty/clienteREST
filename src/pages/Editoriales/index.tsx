import { useEffect, useState } from "react";
import { Editorial } from "../../types";
import { editorialesService } from "../../services/editoriales";
import { NavLink } from "react-router-dom";

const Editoriales = () => {
      const [editoriales, setEditoriales] = useState<Editorial[]>([]);

      useEffect(() => {
            editorialesService.getEditoriales().then(data => {
                  setEditoriales(data);
            })
      }, []);
      return (
            <>
                  <table className="table table-dark">
                        <thead>
                              <tr>
                                    <th>Código</th>
                                    <th>Nombre</th>
                                    <th>Contacto</th>
                                    <th>Teléfono</th>
                                    <th>Operaciones</th>
                              </tr>
                        </thead>
                        <tbody>
                              {editoriales.map(editorial => {
                                    return (
                                          <tr>
                                                <td>{editorial.codigo_editorial}</td>
                                                <td>{editorial.nombre_editorial}</td>
                                                <td>{editorial.contacto}</td>
                                                <td>{editorial.telefono}</td>
                                                <td>
                                                      <NavLink className='btn btn-primary me-2' to={`/edit/${editorial.codigo_editorial}`}>
                                                            <i className="bi bi-pencil-square"></i>
                                                      </NavLink>
                                                      <NavLink className='btn btn-danger' to={`/delete/${editorial.codigo_editorial}`}>
                                                            <i className="bi bi-trash3"></i>
                                                      </NavLink>
                                                </td>
                                          </tr>);
                              })}
                        </tbody>
                  </table>
            </>);
}

export { Editoriales };