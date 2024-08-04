import React from "react";
import {RadioGroup, Radio} from "@nextui-org/react";

export function RadioCategoryGroup() {
  const [selected, setSelected] = React.useState("any");

  const validOptions = ["any"];

  const isInvalid = !validOptions.includes(selected);

  return (
    <div className="flex flex-col gap-3">
      <RadioGroup
        label="Select your favorite city"
        value={selected}
        isInvalid={isInvalid}
        onValueChange={setSelected}
      >
        <Radio value="any">Any</Radio>
        <Radio value="custom">Custom</Radio>
      </RadioGroup>
    </div>
  );
}
