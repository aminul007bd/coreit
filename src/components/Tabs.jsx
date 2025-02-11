import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function CustomTabs({ tabs }) {
  return (
    <Tabs variant="soft-rounded" colorScheme="blue">
      <TabList>
        {tabs.map((tab) => (
          <Tab key={tab.name}>{tab.name}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab) => (
          <TabPanel key={tab.name}>{tab.content}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

CustomTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};
