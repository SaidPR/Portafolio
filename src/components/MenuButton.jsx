export default function MenuButton({ href, children }) {
  return (
    <li>
      <a href={href} className="menu-button">
        {children}
      </a>
    </li>
  );
}