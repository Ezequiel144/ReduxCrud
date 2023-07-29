import { Link } from 'react-router-dom';
import styleFooter from './Footer.module.css';
import imgGit from '../../asset/github.png'

export default function Footer(){
    return(
        <footer className={styleFooter.conterFooter}>
            <article>
                <h1>My App</h1>
                <p>&copy; 2021 MyApp.</p>
            </article>
            <article className={styleFooter.byCreate}>
                <p>Creado por <Link to={''}>Ezequiel Garcia</Link></p>
            </article>
            <article className={styleFooter.imgGitContent}>
                <img className={styleFooter.imgGit} src={imgGit} alt='imgGit'/>
            </article>
        </footer>
    )
}