import PropTypes from "prop-types";

export default function Card({ children }) {
  return (
    <div className="border border-gray-300 rounded-lg shadow-sm p-4">
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
