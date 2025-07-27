export default function MenuButton({ href, children, className = '', style }) {
  return (
    <li style={style} className={className}>
      <a href={href} className="menu-button">
        {children}
      </a>
    </li>
  );
}
