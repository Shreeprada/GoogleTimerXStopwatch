import "./styles.css";
import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from "@chakra-ui/react";
import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";
export default function App() {
  return (
    <div className="App">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>
            <Heading>Timer</Heading>
          </Tab>
          <Tab>
            <Heading>Stopwatch</Heading>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Timer />
          </TabPanel>
          <TabPanel>
            <Stopwatch />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
