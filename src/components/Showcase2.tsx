import {
  Button,
  Container,
  Flex,
  Title,
  useComputedColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";

import ModalComponent from "./ModalComponent";

function ShowCase2() {
  const [opened, setOpened] = useState(false);
  const onClick = () => setOpened(true);
  const onClose = () => setOpened(false);
  const theme = useMantineTheme();

  const colorScheme = useComputedColorScheme();
  const isDark = colorScheme === "dark";
  const color1 = theme.colors.blue[isDark ? 4 : 6];
  const color2 = theme.colors.gray[isDark ? 8 : 2];

  return (
    <Container size="lg">
      <Flex direction={"column"} rowGap={"xs"} align={"center"}>
        <Title order={1}>Mantine</Title>
        <Button
          variant="gradient"
          gradient={{ from: color1, to: color2 }}
          onClick={onClick}
        >
          Click Me
        </Button>
      </Flex>
      <ModalComponent open={opened} onClose={onClose} />
    </Container>
  );
}

export default ShowCase2;
