import { useLoaderData, useParams } from "react-router-dom"

export default function JobDetail() {
    const id = useParams();
    const job = useLoaderData();

    return (
        <div className="single-job-detail">
            <h3>{job.title}</h3>
        </div>
    )
}

// loader function
export const careerDetailsLoader = async ({params}) => {
    const {id} = params;

    const res = await fetch('https://jsonfakery.com/jobs/' + id);
    return res.json();
}