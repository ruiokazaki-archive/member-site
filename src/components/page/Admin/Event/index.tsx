import { Text } from "@mantine/core";
import { FC } from "react";
import { AppUnderConstruction } from "src/components/ui-libraries/AppUnderConstruction";

export const AdminEvent: FC = () => {
  return (
    <>
      <Text weight="bold">イベント</Text>
      <AppUnderConstruction className="flex h-full flex-col items-center justify-center" />
    </>
  );
};
