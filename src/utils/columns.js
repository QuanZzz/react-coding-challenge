import Link from "next/link";

export const columns = [
  {
    key: "title",
    header: "Title",
    render: (rowData) => <Link href={`/${rowData.id}`}>{rowData.title}</Link>,
    columnClassname: "",
  },
  {
    key: "artist_display",
    header: "Artist display",
    columnClassname: "",
  },
  {
    key: "date_display",
    header: "Date display",
    columnClassname: "",
  },
  {
    key: "main_reference_number",
    header: "Main reference number",
    columnClassname: "",
  },
  {
    key: "thumbnail",
    header: "Thumbnail",
    render: (rowData) =>
      rowData.thumbnail ? (
        <img
          src={rowData.thumbnail.iqip}
          alt={rowData.thumbnail.alt_text}
          style={{
            maxWidth: rowData.thumbnail.height,
            maxHeight: rowData.thumbnail.widh,
          }}
        />
      ) : (
        "No Image"
      ),
    columnClassname: "",
  },
  {
    key: "dimensions",
    header: "Dimensions",
    columnClassname: "",
  },
];
