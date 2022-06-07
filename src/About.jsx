import Header from "./components/Header/Header"
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <>
            <Header/>
            <div>About page</div>
            <Link to='/'>Home</Link>
        </>

    )
}

export default About