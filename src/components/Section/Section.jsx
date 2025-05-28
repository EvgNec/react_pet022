import css from './Section.module.css';


export default function Section({ title,  children }) {
  return (
    <section className={css.section}>
      {/* Якщо title не є порожнім рядком, то він відображається в якості заголовку */}
      {title && <h2 className={css.title}>{title}</h2>}
 {children}
    </section>
  );
}
