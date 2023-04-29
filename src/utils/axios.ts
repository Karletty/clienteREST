import axios from 'axios';

const apiEditoriales = axios.create({
      baseURL: 'http://127.0.0.1:8000/api/editoriales',
});

export {apiEditoriales}