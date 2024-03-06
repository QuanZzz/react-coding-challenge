import cx from "classnames";
import PropTypes from "prop-types";

export const TableHeader = ({ className, label }) => {
  return (
    <div
      className={cx("px-3 flex w-full items-center justify-between", className)}
    >
      <h2>{label}</h2>
    </div>
  );
};

TableHeader.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

TableHeader.defaultProps = {
  className: "",
  label: "",
};
