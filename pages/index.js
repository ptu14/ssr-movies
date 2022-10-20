export default function Movies(props) {
  const movies = props.movies;
  return (
    <main className="movies-list">
      <h1>Movies List</h1>
      <ul className="movies-list__list">
        {movies.map((movie) => (
          <li className="card" key={movie.id}>
            <img
              loading="lazy"
              height="278"
              width="185"
              src={movie.img}
              alt=""
            />
            <div className="card__info">
              <a href={movie.id}>{movie.title}</a>
              <span>{movie.year}</span>
              <p>Rating: {movie.rating}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps() {
  const moviesRespons = await fetch(
    "https://scintillating-manatee-558b96.netlify.app/.netlify/functions/api/movies"
  );
  const { movies } = await moviesRespons.json();
  return {
    props: { movies },
  };
}
