import { DataTable } from "./DataTable";
import { MobileTable } from "./MobileTable";
import { TableHeader } from "./TableHeader";
import cx from "classnames";
import PropTypes from "prop-types";

export const Table = ({ className, header, displayedData, columns }) => {
  if (!displayedData) {
    return null;
  }

  return (
    <div
      className={cx(
        "w-full flex flex-col items-center text-xxl p-4",
        className
      )}
    >
      <TableHeader label={header} />

      <MobileTable data={displayedData} columns={columns} />

      <DataTable data={displayedData} columns={columns} />
    </div>
  );
};

Table.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  displayedData: PropTypes.array,
  columns: PropTypes.array,
};

Table.defaultProps = {
  className: "",
  header: "",
  displayedData: null,
  columns: null,
};
