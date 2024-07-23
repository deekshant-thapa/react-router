import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./layouts.js/RootLayout";
import HelpLayout from "./layouts.js/HelpLayout";
import JobsLayout from "./layouts.js/JobsLayout";

// pages
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Jobs, { jobsLoader } from "./pages/Jobs";
import JobDetail, { careerDetailsLoader } from "./pages/JobDetail";

const customRouter = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<RootLayout />}>

      <Route index element={<Home />} />

      <Route path="jobs" element={<JobsLayout />} >
        <Route index element={<Jobs/>} loader={jobsLoader} />
        <Route path=":id" element={<JobDetail/>} loader={careerDetailsLoader} />
      </Route>

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>

      <Route path="*" element={<NotFound/>}/>

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={customRouter} />
  );
}

export default App;