import { useState } from "react";
import {
  AttendanceSvg,
  DashboardSvg,
  DepartmentSvg,
  LeaveSvg,
  ManageSvg,
  PayrollSvg,
  ProfileSvg,
  ReportSvg,
  SearchSvg,
  SetUpSvg,
  SettingSvg,
  TrainingSvg,
  VacancySvg,
} from "../../assets/icons";

const navigation = [
  {
    name: "Dashboard",
    href: "#",
    icon: DashboardSvg,
    current: false,
  },
  {
    name: "Setup",
    href: "#",
    icon: SetUpSvg,
    current: true,
  },
  {
    name: "Manage Employee",
    href: "#",
    icon: ManageSvg,
    current: false,
  },
  {
    name: "Departments",
    href: "#",
    icon: DepartmentSvg,
    current: false,
  },
  {
    name: "Attendance",
    href: "#",
    icon: AttendanceSvg,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SideBar() {
  return (
    <div className="flex flex-col  shadow-2xl border-[#E8E8E8] bg-white w-70">
      <div className="flex h-16 shrink-0 items-center">
        <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="h-8 w-auto"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="">
          {navigation.map((item) => (
            <SideBarEl item={item} key={item.name} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

function SideBarEl({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      key={item.name}
      className="list-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={classNames(
          item.current ? "border-l-4 border-primary bg-[#E8E8E8]" : "",
          "pl-6 hover:bg-[#E8E8E8] overflow-hidden py-2"
        )}
      >
        <a
          href={item.href}
          className={classNames(
            item.current ? "text-primary" : "text-gray-700 hover:text-primary",
            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 "
          )}
        >
          {/* <img
        src={item.icon}
        aria-hidden="true"
        className={classNames(
          item.current
            ? "text-primary"
            : "text-gray-400 hover:bg-primary group-hover:text-primary",
          "h-6 w-6 shrink-0"
        )}
      /> */}
          <item.icon current={item.current} isHovered={isHovered} />
          <p className={classNames(item.current ? "text-primary" : "")}>
            {item.name}
          </p>
        </a>
      </div>
    </li>
  );
}
