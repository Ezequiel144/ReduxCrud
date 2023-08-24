import styleEmpty from './Empty.module.css';

export default function Empty(){
    return(
        <section className={styleEmpty.contentTitle}>
            <h1 className={styleEmpty.title}>Pagina Vacia</h1>
        </section>
    )
}