import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias labore ipsum praesentium quibusdam a dolor sit, minima atque ipsa error mollitia laborum pariatur provident reiciendis ratione neque in culpa, necessitatibus doloremque quidem sunt earum corporis! Repudiandae quae, ipsam sed magni neque ea natus quod repellendus aperiam expedita. Nobis, deleniti fugit.</p>
        <p>Go to the <Link to='/'>Homepage</Link>.</p>
    </div>
  )
}
