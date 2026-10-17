"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { cn } from "@/src/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/src/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";

interface District {
  value: string;
  label: string;
}

interface ComboboxProps {
  districts: District[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  emptyMessage?: string;
}

export function DistrictCombobox({
  districts,
  value,
  onChange,
  placeholder = "Select district...",
  emptyMessage = "No district found.",
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const selectedLabel =
    districts.find((d) => d.value === value)?.label || "";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {/* 
        ✅ FIX: Removed 'asChild' and <Button>. 
        Applied button styles directly to PopoverTrigger. 
        This avoids TypeScript errors and nested button HTML issues.
      */}
      <PopoverTrigger
        role="combobox"
        aria-expanded={open}
        className="w-full inline-flex items-center justify-between h-12 px-4 text-base font-normal border-2 border-gray-200 hover:border-blue-400 focus:border-blue-500 transition-all bg-white rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-gray-900"
      >
        <span className={cn(!selectedLabel && "text-gray-400")}>
          {selectedLabel || placeholder}
        </span>
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </PopoverTrigger>

      <PopoverContent className="w-full p-0 shadow-2xl border-0" align="start">
        <Command className="rounded-lg">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput
              placeholder="Type to search district..."
              className="h-11 border-0 focus:ring-0"
            />
          </div>
          <CommandList>
            <CommandEmpty className="py-6 text-center text-sm text-gray-500">
              {emptyMessage}
            </CommandEmpty>
            <CommandGroup className="max-h-64 overflow-auto">
              {districts.map((district) => (
                <CommandItem
                  key={district.value}
                  value={district.label.toLowerCase()}
                  onSelect={() => {
                    onChange(district.value);
                    setOpen(false);
                  }}
                  className="cursor-pointer px-4 py-3 hover:bg-blue-50"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === district.value
                        ? "opacity-100 text-blue-600"
                        : "opacity-0"
                    )}
                  />
                  <span className="font-medium">{district.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}