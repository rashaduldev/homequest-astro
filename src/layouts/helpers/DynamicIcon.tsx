import React, { type FC } from "react";
import type { IconType } from "react-icons";
import * as FaIcons from "react-icons/fa6";
import * as LuIcons from "react-icons/lu";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

interface IDynamicIcon extends React.SVGProps<SVGSVGElement> {
  icon: string;
  className?: string;
}

const iconLibraries: Record<string, Record<string, IconType>> = {
  fa: FaIcons,
  lu: LuIcons,
  bi: BiIcons,
  bs: BsIcons,
  md: MdIcons,
};

const getIconLibrary = (icon: string) => {
  const libraryKey = icon.substring(0, 2).toLowerCase(); // e.g., "MdKeyboardArrowRight" -> "md"
  return iconLibraries[libraryKey];
};

const DynamicIcon: FC<IDynamicIcon> = ({ icon, ...props }) => {
  const IconLibrary = getIconLibrary(icon);
  const Icon = IconLibrary ? IconLibrary[icon] : undefined;

  if (!Icon) return <span className="text-sm">Icon not found</span>;

  return <Icon {...props} />;
};

export default DynamicIcon;
