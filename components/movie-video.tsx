import { API_URL } from "../app/(home)/page";

async function getVideo(id: string) {
    console.log(`Fetching video : ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    throw new Error("something went wrong");
    // const response = await fetch(`${API_URL}/${id}/videos`);
    // return response.json();
}

export default async function MovieVideo({ id }: { id: string }) {
    const video = await getVideo(id);
    return <h5>{JSON.stringify(video)}</h5>;
}
