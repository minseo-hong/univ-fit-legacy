interface DrawerMenuItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const DrawerMenuItem = ({ icon, children }: DrawerMenuItemProps) => {
  return (
    <li className="text-gray-60 flex items-center gap-2 px-6 py-4">
      <span className="text-[1.25rem]">{icon}</span>
      <span className="text-lg-200 flex-1">{children}</span>
    </li>
  );
};

export default DrawerMenuItem;
