import { Link } from 'react-router-dom';
import styleHeader from './Header.module.css';

export default function Header(){
    return(
        <header className={styleHeader.contentHeader}>
            <h1 className={styleHeader.title}>My App</h1>
            <ul className={styleHeader.list}>
                <li className={styleHeader.li}><Link className={styleHeader.link} to={'/'}>Lista</Link></li>
                <li className={styleHeader.li}><Link className={styleHeader.link} to={'/agregar'}>Agregar</Link></li>
                <li className={styleHeader.li}><Link className={styleHeader.link} to={'/modificar'}>Modificar</Link></li>
            </ul>
        </header>
    )
}