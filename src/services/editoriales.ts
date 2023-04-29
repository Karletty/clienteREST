import { Editorial } from '../types';
import { apiEditoriales } from '../utils/axios';

const getEditoriales = async () => {
      const response = await apiEditoriales.get('');
      const editoriales = response.data as Editorial[];
      return editoriales;
}

const getEditorial = async (id: string) => {
      const response = await apiEditoriales.get(id);
      const editorial = response.data as Editorial;
      return editorial;
}

const createEditorial = async (editorial: Editorial) => {
      const response = await apiEditoriales.post(JSON.stringify(editorial));
      return response;
}

const updateEditorial = async (editorial: Editorial) => {
      const response = await apiEditoriales.put(JSON.stringify(editorial));
      return response;
}

const deleteEditorial = async (id: string) => {
      const response = await apiEditoriales.delete(id);
      return response;
}

export const editorialesService = { getEditoriales, getEditorial, createEditorial, updateEditorial, deleteEditorial };