import { Layout } from "./components";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { CreateEditorial, Editoriales, UpdateEditorial } from "./pages";

const App = () => {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route path='/' element={<Layout><Outlet /></Layout>}>
                              <Route index element={<Editoriales />} />
                              <Route path="create" element={<CreateEditorial />} />
                              <Route path="edit/:id" element={<UpdateEditorial />} />
                        </Route>
                  </Routes>
            </BrowserRouter>
      );
}

export default App;
