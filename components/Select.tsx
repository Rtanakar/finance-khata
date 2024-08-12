"use client";

import CreatableSelect from "react-select/creatable";
import { SingleValue } from "react-select";
import { useMemo } from "react";

type Props = {
  onChange: (value?: string) => void;
  onCreate?: (value: string) => void;
  options?: { label: string; value: string }[];
  value?: string | null | undefined;
  disabled?: boolean;
  placeholder?: string;
};

function Select({
  value,
  onChange,
  disabled,
  onCreate,
  options = [],
  placeholder,
}: Props) {
  const onSelect = (options: SingleValue<{ label: string; value: string }>) => {
    onChange(options?.value);
  };

  const formattedValue = useMemo(() => {
    return options.find((option) => option.value === value);
  }, [options, value]);

  return (
    <CreatableSelect
      placeholder={placeholder}
      className="text-sm h-10"
      styles={{
        control: (base) => ({
          ...base,
          borderColor: "#e2e8f0",
          ":hover": {
            borderColor: "#e2e8f0",
          },
        }),
      }}
      value={formattedValue}
      onChange={onSelect}
      options={options}
      onCreateOption={onCreate}
      isDisabled={disabled}
    />
  );
}

export default Select;
