"use client";

import { LanguagesSupport } from "@/localization/languages-support";
import * as Select from "@radix-ui/react-select";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxCheck } from "react-icons/rx";
import { i18n } from "@/localization/i18n-config";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const router = useRouter();
  const [selectedLocale, setSelectedLocale] = useState(i18n.defaultLocale);

  const handleLocaleChange = event => {
    setSelectedLocale(event);
    const redirectedPathName = locale => {
      if (!pathName) return "/";
      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    };
    router.push(redirectedPathName(event));
    return setSelectedLocale;
  };

  useEffect(
    () => {
      const currentLocale = pathName.split("/")[1];
      setSelectedLocale(currentLocale);
    },
    [pathName]
  );

  const SelectItem = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => {
      return (
        <Select.Item
          className="relative pr-4 py-1 pl-7   hover:bg-background-2 flex items-center border hover:border-background-2 border-transparent rounded-sm text-primary text-sm cursor-pointer outline-0 mb-[2px] last:mb-0 capitalize "
          {...props}
          ref={forwardedRef}
        >
          <Select.ItemText>
            {children}
          </Select.ItemText>
          <Select.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center ">
            <RxCheck />
          </Select.ItemIndicator>
        </Select.Item>
      );
    }
  );

  return (
    <Select.Root value={selectedLocale} onValueChange={handleLocaleChange}>
      <Select.Trigger className="flex h-10 items-center justify-between rounded-md px-1.5 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1  w-auto capitalize mw-7:h-fit mw-7:p-0">
        <Select.Value>
          {LanguagesSupport.filter(i => i.code === selectedLocale)[0].flag +
            " " +
            selectedLocale}
        </Select.Value>
        <Select.Icon className="ml-1">
          <IoIosArrowDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          className="overflow-hidden rounded-sm bg-white border border-background-2 p-1 z-[99999]"
        >
          <Select.Viewport className="p-0 z-[50]">
            <Select.Group>
              {LanguagesSupport.map(lang => {
                return (
                  <SelectItem value={lang.code} key={lang.code}>
                    {lang.flag + " " + lang.name}
                  </SelectItem>
                );
              })}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
