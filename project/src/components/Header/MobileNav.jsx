import { Link as ScrollLink } from 'react-scroll';


function MobileNav(props) {
  const linksData = [
    {
      id: 1,
      name: 'FEATURES',
      to: 'features', 
    },
    {
      id: 2,
      name: 'PRICING',
      to: 'faq', 
    },
    {
      id: 3,
      name: 'CONTACT',
      to: 'contact', 
    },
    {
        id: 4,
        name: 'LOGIN',
        to: '/', 
    },
  ];

  return (
    <>
      {linksData.map((item) => (
        <ScrollLink 
          className='mobile-link'
          to={item.to}
          spy={true}
          smooth={true}
          activeClass='active'
          key={item.id}
          onClick={props.closeMobileNavBar}
        >
          {item.name}
        </ScrollLink>
      ))}
    </>
  );
}

export default MobileNav;
