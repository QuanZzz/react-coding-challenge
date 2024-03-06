import { usePathname } from "next/navigation";
import useFetch from "../hooks/useFetch";
import { useRouter } from "next/router";

export default function Page() {
  const pathname = usePathname();
  const router = useRouter();
  const id = pathname?.replace("/", "");
  const { data, isLoading } = useFetch(
    `https://api.artic.edu/api/v1/artworks/${id}`
  );

  if (isLoading || !data?.data?.data) {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      <button className="px-4 py-2 bg-blue-500" onClick={() => router.back()}>
        Previous Page
      </button>
      <ul>
        {Object.entries(data.data.data).map(([key, value]) => {
          if (typeof value === "object" && value !== null) {
            return null;
          }

          return (
            <li key={key}>
              <strong>{key.replace(/_/g, " ")}:</strong> {value?.toString()}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
