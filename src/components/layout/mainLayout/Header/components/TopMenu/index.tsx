import MoreElements from "./MoreElements";
import TopMenuElement from "./TopMenuElement";
import "./index.css";
const TopMenu = ({
  items,
}: {
  items: Array<{ to: string; label: string }>;
}) => {
  return (
    <nav>
      <ul className="flex items-center gap-2">
        {items.map((item, index) => (
          <TopMenuElement
            key={index}
            to={item.to}
            active={window.location.pathname.startsWith("/home/" + item.to)}
          >
            {item.label}
          </TopMenuElement>
        ))}
        <li>
          <MoreElements />
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;
