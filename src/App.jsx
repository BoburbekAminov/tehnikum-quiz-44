import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/themeProvider";
import StepFour from "./pages/StepFour";
import StepOne from "./pages/StepOne";
import StepThree from "./pages/StepThree";
import StepTwo from "./pages/StepTwo";
import Thanks from "./pages/Thanks";
import Welcome from "./pages/Welcome";
import "./styles/main.css";
import { AcceptPage } from "./pages/AcceptPage";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/step-one",
    element: <StepOne />,
  },
  {
    path: "/step-two",
    element: <StepTwo />,
  },
  {
    path: "/step-three",
    element: <StepThree />,
  },
  {
    path: "/step-four",
    element: <StepFour />,
  },
  {
    path: "/thanks",
    element: <Thanks />,
  },
  {
    path: "/accept",
    element: <AcceptPage />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <RouterProvider router={routerConfig} />
      </ThemeProvider>
    </div>
  );
};

export default App;
