import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-video";

interface IParams {
    params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}
export default async function MovieDetail({ params: { id } }: IParams) {
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info...</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie video...</h1>}>
                <MovieVideo id={id} />
            </Suspense>
        </div>
    );
}
