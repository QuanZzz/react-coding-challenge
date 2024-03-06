import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Table } from "../components/table/Table";
import { columns } from "../utils/columns";

export default function Page() {
  const [displayedData, setDisplayedData] = useState([]);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasNextBtn, setHasNextBtn] = useState(false);
  const [hasPrevBtn, setHasPrevBtn] = useState(false);
  const { data, isLoading } = useFetch(
    `https://api.artic.edu/api/v1/artworks?page=${page}&limit=10`
  );

  useEffect(() => {
    if (isLoading || !data) {
      return;
    }

    const targetColumnsData = data?.data?.data?.map((item) => ({
      id: item.id,
      title: item.title,
      artist_display: item.artist_display,
      date_display: item.date_display,
      main_reference_number: item.main_reference_number,
      thumbnail: item.thumbnail || null,
      dimensions: item.dimensions,
    }));

    setDisplayedData(targetColumnsData);
    setHasNextBtn(!!data?.data?.pagination?.next_url);
    setHasPrevBtn(!!data?.data?.pagination?.prev_url);
  }, [isLoading, data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      setError("Please enter a comment");
      return;
    }

    console.log("Comment submitted: ", comment);
    setComment("");
    setError("");
  };

  if (isLoading || !data?.data?.data?.length) {
    return null;
  }

  return (
    <div className="w-full h-screen flex flex-col items-center p-5">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex items-center">
          <label htmlFor="comment">Your Comment:</label>
          <textarea
            className="border border-gray-500"
            id="comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            cols="50"
            placeholder="Type your comment here..."
          />
        </div>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <button className="px-4 py-2 bg-blue-50" type="submit">
          Submit Comment
        </button>
      </form>
      <Table
        header="Book List"
        displayedData={displayedData}
        columns={columns}
      />
      <div className="w-full flex justify-between">
        {hasNextBtn && (
          <button
            className="px-4 py-2 bg-blue-500"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next Page
          </button>
        )}
        {hasPrevBtn && (
          <button
            className="px-4 py-2 bg-blue-500"
            onClick={() => setPage((prev) => prev - 1)}
          >
            Previous Page
          </button>
        )}
      </div>
    </div>
  );
}
