// Компонент, що отримує дані через props
function Job({ title, company, period, duties }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>
        <em>{company}</em> — {period}
      </p>
      <ul>
        {duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
    </article>
  );
}

export default Job;
