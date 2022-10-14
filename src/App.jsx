import Home from "./pages/home/Home.component";
import Login from "./pages/login/Login.component";
import List from "./pages/list/List.component";
import Single from "./pages/single/Single.component";
import New from "./pages/new/New.component";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/users">
                            <Route index element={<List />}></Route>
                            <Route path=":userId" element={<Single />}></Route>
                            <Route path="new" element={<New />}></Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
