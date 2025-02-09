import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import PropTypes from "prop-types";

export default function Tabs({ tabs }) {
  return (
    <TabGroup>
      <TabList className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
        {tabs.map((tab) => (
          <Tab
            key={tab.name}
            className={({ selected }) =>
              `w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg ${
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              }`
            }
          >
            {tab.name}
          </Tab>
        ))}
      </TabList>
      <TabPanels className="mt-2">
        {tabs.map((tab) => (
          <TabPanel key={tab.name} className="bg-white p-3 rounded-xl">
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};
