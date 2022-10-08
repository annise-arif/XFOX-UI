import "bootstrap/dist/css/bootstrap.min.css";
import { FC, ReactNode, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { SingleProductDetails } from "./Pages/SingleProductDetails/SingleProductDetails";
import { SingleProductPage } from "./Pages/SingleProductPage/SingleProductPage";
import { NotFound } from "./Share/NotFound/NotFound";

const Wrapper: FC<{ children: any }> = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":categoryName" element={<SingleProductPage />} />
          <Route
            path=":categoryName/productDetails/:name/:id"
            element={<SingleProductDetails />}
          />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
