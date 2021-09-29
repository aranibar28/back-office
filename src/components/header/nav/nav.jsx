export function Nav() {
  const links = [
    {
      text: "Inicio",
      url: "http://",
    },
    {
      text: "Páginas",
      url: "http://",
    },
    {
      text: "Servicios",
      url: "http://",
    },
    {
      text: "Trainers",
      url: "http://",
    },
    {
      text: "Contacto",
      url: "http://",
    },
  ];

  return (
    <nav className="nav">
      <ul className="">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
