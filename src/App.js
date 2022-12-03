import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import TablePage from "./components/pages/TablePage/TablePage";
import NavBar from "./components/views/NavBar/NavBar";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import Footer from "./components/views/Footer/Footer"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTables } from "./redux/tablesRedux";

const App = () => {
  const dispatch = useDispatch();
	useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:tableId" element={<TablePage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Container>
   </main>
  );
}

export default App;
