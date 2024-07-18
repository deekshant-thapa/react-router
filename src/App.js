import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./layouts.js/RootLayout";
import HelpLayout from "./layouts.js/HelpLayout";

// pages
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

const customRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>

      <Route index element={<Home />} />
      <Route path="jobs" element={<Jobs />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={customRouter} />
  );
}

export default App;