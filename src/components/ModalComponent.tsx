import { Button, Flex, Group, Modal, Text, Title } from "@mantine/core";
import { FC } from "react";

import DropZoneComponent from "./DropZoneComponent";

const ModalComponent: FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  return (
    <Modal opened={open} onClose={onClose}>
      <Group>
        <Flex direction={"column"} rowGap={"xs"} align={"center"}>
          <Title order={1}>Modal Title</Title>
          <Text>
            This is modal content.
            <DropZoneComponent />
          </Text>
          <Group>
            <Button color="gray" onClick={onClose}>
              Close
            </Button>
            <Button onClick={onClose}>Submit</Button>
          </Group>
        </Flex>
      </Group>
    </Modal>
  );
};

export default ModalComponent;
