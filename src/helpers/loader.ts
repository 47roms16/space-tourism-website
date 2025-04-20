import { Destination, Crew, SpaceData, Technology } from "../constants/types";

interface ErrorResponse {
  error: string;
}

export default async function loader(): Promise<SpaceData | ErrorResponse> {
  try {
    const result = await fetch("/data.json");

    if (!result.ok) {
      throw new Error("Network error: unable to fetch data from server");
    }

    const data = result.json();

    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error fetching data:", err);

      return { error: err?.message };
    } else {
      console.error("Unknown error:", err);

      return { error: "An unknown error occurred" };
    }
  }
}

async function loadSpecificData<K extends keyof SpaceData>(
  key: K,
): Promise<SpaceData[K] | ErrorResponse> {
  const data = await loader();

  if ("error" in data) {
    return { error: data.error };
  }

  return data[key] as SpaceData[K];
}

export const loaderDestination = (): Promise<Destination[] | ErrorResponse> =>
  loadSpecificData("destinations");
export const loaderCrew = (): Promise<Crew[] | ErrorResponse> =>
  loadSpecificData("crew");
export const loaderTechnology = (): Promise<Technology[] | ErrorResponse> =>
  loadSpecificData("technology");
