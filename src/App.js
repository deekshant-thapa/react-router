import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";

// layouts
import RootLayout from "./layouts.js/RootLayout";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";

const ourRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="jobs" element={<Jobs/>}></Route>
      <Route path="contact" element={<Contact/>}>
        <Route path="faq" element={<Faq/>}/>
        <Route path="contact-form" element={<ContactForm/>}/>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={ourRouter}/>
  );
}

export default App;