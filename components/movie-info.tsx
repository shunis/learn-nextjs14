import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
    console.log(`Fetching video : ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 4000));

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id} `);
    return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={movie.poster_path} alt={movie.title} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>✨{movie.vote_average.toFixed(1)}</h3>
                <p>✳ {movie.overview}</p>
                <a href={movie.homepage} target={"_blank"}>
                    Home &rarr;
                </a>
            </div>
        </div>
    );
}
