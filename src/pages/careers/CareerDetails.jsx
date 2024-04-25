import { useLoaderData, useParams } from "react-router-dom"

export const CareerDetails = () => {
    const career = useLoaderData()
  return (
    <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting Salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem error tempora repudiandae accusantium fugiat sint quisquam asperiores libero ducimus, eaque iure. Cum deleniti unde eos, facere blanditiis perspiciatis animi delectus.</p>
        </div>
    </div>
  )
}

export const careerDetailsLoader = async ({ params }) => {
   const { id } = params
   
   const res = await fetch('http://localhost:4000/careers/' + id)
   
   return res.json()
}