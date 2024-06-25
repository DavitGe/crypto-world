import TopMenuElement from "./TopMenuElement";

const TopMenu = ({
  items,
}: {
  items: Array<{ to: string; label: string }>;
}) => {
  return (
    <nav className="flex items-center">
      {items.map((item, index) => (
        <TopMenuElement key={index} to={item.to}>
          {item.label}
        </TopMenuElement>
      ))}
    </nav>
  );
};

export default TopMenu;
