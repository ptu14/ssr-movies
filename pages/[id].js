export default function Movie({ movie: movieList }) {
  const movie = movieList[0];
  return (
    <main className="movie">
      <section className="movie__title">
        <h1>{movie?.title}</h1>
      </section>
      <section className="movie__about">
        <img
          className="movie_image"
          src={movie?.img}
          height="278"
          width="185"
          alt=""
        />
        <div className="movie_description">
          <header>
            <h1>{movie?.title}</h1>
            <p>{movie?.year}</p>
          </header>
          <p>Rate: ★{movie?.rating}</p>
          <p>{movie?.description}</p>
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const moviesRespons = await fetch(
    `https://scintillating-manatee-558b96.netlify.app/.netlify/functions/api/movies/${id}`
  );
  const movie = await moviesRespons.json();
  return {
    props: { movie },
  };
}
