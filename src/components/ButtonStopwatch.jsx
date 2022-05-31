import { Button, Stack, Toast, useToast } from "@chakra-ui/react";
import React from "react";

const ButtonStopwatch = (props) => {
  const toast = useToast();
  console.log(props);
  return (
    <div>
      {props.status == 0 ? (
        <Button colorScheme="teal" variant="solid" onClick={props.start}>
          Start
        </Button>
      ) : (
        ""
      )}
      {props.status === 1 ? (
        <div>
          <Button colorScheme="red" variant="solid" onClick={props.stop}>
            Stop
          </Button>
          <Button colorScheme="gray" variant="solid" onClick={props.reset}>
            Reset
          </Button>
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div>
          <Button colorScheme="teal" variant="solid" onClick={props.resume}>
            Resume
          </Button>
          <Button colorScheme="red" variant="solid" onClick={props.reset}>
            Reset
          </Button>
        </div>
      ) : (
        ""
      )}

      <br />
      <br />
    </div>
  );
};

export default ButtonStopwatch;
