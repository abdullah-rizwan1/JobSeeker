import { useLoaderData, Link } from "react-router-dom"

export const Careers = () => {
    const careersData = useLoaderData()
  return (
    <div className="careers">
        {careersData.map(career => {
            return (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            )
        })}
    </div>
  )
}


export const careersLoader = async () => {
    const res = await fetch('http://localhost:4000/careers')

    return res.json()
} 