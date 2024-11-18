import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-video";

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
    return (
        <div>
            <h3>Movie Detail Page</h3>
            <Suspense fallback={<h1>Loading movie info...</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie video...</h1>}>
                <MovieVideo id={id} />
            </Suspense>
        </div>
    );
}
