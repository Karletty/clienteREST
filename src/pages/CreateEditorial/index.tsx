import { useEffect, useState } from "react";
import { Editorial } from "../../types";
import { editorialesService } from "../../services/editoriales";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Input } from "../../components";

const CreateEditorial = () => {
      const [editorial, setEditorial] = useState<Editorial>({
            codigo_editorial: '',
            nombre_editorial: '',
            telefono: '',
            contacto: ''
      });
      const navigate = useNavigate();
      const [ifError, setIfError] = useState(false);

      const handleSubmit = async (e: any) => {
            e.preventDefault();
            let response;
            setIfError(false);
            if (editorial) {
                  response = await editorialesService.createEditorial({ ...editorial });
            }

            if (response) {
                  navigate('/');
            }
            else {
                  setIfError(true);
            }
      }

      return (<>
            <form action="post" className="w-50" onSubmit={handleSubmit}>
                  {ifError && <div className=" mt-3 alert alert-danger"> Hubo un error</div>}
                  <input type="hidden" name="_token" value="nQi2uwkP5ufpF3XuUcaIKKyHWrNiaJuMVdXZ5DDe"/>
                  <Input
                        label="Código de la editorial"
                        type="text"
                        name="codigo_editorial"
                        placeholder="Ingresa el codigo del editorial"
                        state={editorial?.codigo_editorial}
                        setState={
                              (newState: string) => {
                                    setEditorial(prev => {
                                          return { ...prev, codigo_editorial: newState };
                                    })
                              }
                        } />
                  <Input
                        label="Nombre de la editorial"
                        type="text"
                        name="nombre_editorial"
                        placeholder="Ingresa el nombre del editorial"
                        state={editorial?.nombre_editorial}
                        setState={
                              (newState: string) => {
                                    setEditorial(prev => {
                                          return { ...prev, nombre_editorial: newState };
                                    })
                              }
                        }
                  />
                  <Input
                        label="Contacto de la editorial"
                        type="text"
                        name="contacto"
                        placeholder="Ingrese el contacto de la editorial"
                        state={editorial?.contacto}
                        setState={
                              (newState: string) => {
                                    setEditorial(prev => {
                                          return { ...prev, contacto: newState };
                                    })
                              }
                        } />
                  <Input
                        label="Teléfono de la editorial"
                        type="text"
                        name="telefono"
                        placeholder="Ingrese el teléfono de la editorial"
                        state={editorial?.telefono}
                        setState={
                              (newState: string) => {
                                    setEditorial(prev => {
                                          return { ...prev, telefono: newState };
                                    })
                              }
                        } />

                  <input type="submit" className="btn btn-primary me-3" value="Guardar" name="Guardar" />
                  <NavLink className='btn btn-danger' to="/">Cancelar</NavLink>
            </form>
      </>);
}

export { CreateEditorial };