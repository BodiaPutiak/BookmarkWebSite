import { Link as ScrollLink } from 'react-scroll';

function NavBar() {
  const linksData = [
    {
      id: 1,
      name: 'Features',
      to: 'features', 
    },
    {
      id: 2,
      name: 'Pricing',
      to: 'faq', 
    },
    {
      id: 3,
      name: 'Contact',
      to: 'contact', 
    },
  ];

  return (
    <>
      {linksData.map((item) => (
        <ScrollLink
          to={item.to}
          spy={true}
          smooth={true}
          activeClass='active'
          key={item.id}
        >
          {item.name}
        </ScrollLink>
      ))}
    </>
  );
}

export default NavBar;
