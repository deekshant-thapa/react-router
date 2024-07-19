import { Outlet } from "react-router-dom";

export default function JobsLayout(){
    return(
        <section className="jobs-section">
            <div className="container">
                <h2>This is a job page</h2>
                <p>Here you can find list of jobs</p>
                <Outlet/>
            </div>
        </section>
    )
}