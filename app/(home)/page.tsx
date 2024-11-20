import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
    title: "Home",
};

async function getMovies() {
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log("fetch!!!!");
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    // console.log("movies : ", movies);
    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    title={movie.title}
                    id={movie.id}
                    poster_path={movie.poster_path}
                />
            ))}
        </div>
    );
}
