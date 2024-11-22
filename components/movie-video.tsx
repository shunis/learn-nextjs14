import { API_URL } from "../app/constants";
import styles from "../styles/movie-videos.module.css";
export const dynamic = "force-dynamic";

async function getVideo(id: string) {
    // console.log(`Fetching video : ${Date.now()}`);
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // throw new Error("something went wrong");
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideo({ id }: { id: string }) {
    const video = await getVideo(id);
    return (
        <div className={styles.container}>
            {video.map((item) => (
                <iframe
                    key={item.id}
                    src={`https://youtube.com/embed/${item.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.name}
                />
            ))}
        </div>
    );
}
