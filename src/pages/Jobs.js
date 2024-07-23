import { useLoaderData, Link } from "react-router-dom";

export default function Jobs(){

    const jobs = useLoaderData();

    return(
        <div className="jobs-listing">
            {jobs.map(job => (
                <div className="job-detail" key={job.id}>
                    <Link to={job.id}>
                        <h4>{job.title}</h4>
                        <span className="company">Company: {job.company}</span>
                        <span className="location">Based in: {job.location}</span>
                    </Link>
                </div>
            ))}
        </div>
    )
}

// loader function
export const jobsLoader = async () => {
    const res = await fetch('https://jsonfakery.com/jobs/random/3');

    return res.json();
}