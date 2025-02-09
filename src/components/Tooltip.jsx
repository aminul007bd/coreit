import { Popover } from "@headlessui/react";
import PropTypes from "prop-types";

export default function Tooltip({ children, text }) {
  return (
    <Popover className="relative inline-block">
      <Popover.Button className="focus:outline-none">{children}</Popover.Button>
      <Popover.Panel className="absolute bottom-full mb-2 w-max p-2 bg-gray-800 text-white text-sm rounded">
        {text}
      </Popover.Panel>
    </Popover>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
