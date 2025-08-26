
const Navbar = () => {
  const links = [
    {
      id: 1,
      label: "CHARACTERS",
      href: "#",
    },
    {
      id: 2,
      label: "COMICS",
      href: "#",
    },
    {
      id: 3,
      label: "MOVIES",
      href: "#",
    },
    {
      id: 4,
      label: "TV",
      href: "#",
    },
    {
      id: 5,
      label: "GAMES",
      href: "#",
    },
    {
      id: 6,
      label: "COLLECTIBLES",
      href: "#",
    },
    {
      id: 7,
      label: "VIDEOS",
      href: "#",
    },
    {
      id: 8,
      label: "FANS",
      href: "#",
    },
    {
      id: 9,
      label: "NEWS",
      href: "#",
    },
    {
      id: 10,
      label: "SHOP",
      href: "#",
    },
    
  ];

  return (
    <>
      <ul id="menu">
        {links.map((link) => {
          const {id, href, label} = link
          return (
            <li key = {id}>
              <a href={href}> {label}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navbar;
