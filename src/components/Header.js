import { Link } from "react-router-dom";

export const Title = () => (
  <a href="/">
    <img className=" h-32" alt="logo" src="https://thumbs.dreamstime.com/b/mis-letter-logo-design-white-background-creative-circle-concept-252937804.jpg" />
  </a>
);

export const Titlee = () => (
  <a href="/">
    <p className="font-semibold text-sky-700 text-xl">Metadata Integrated Solutions</p>
  </a>
);

export const HeaderComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between border border-b-blue-200 shadow">
  <div className="flex items-center">
    <Title />
    <Titlee />
  </div>
  <div className="flex flex-wrap md:flex-nowrap">
    <ul className="flex">
      <li className="px-4 md:px-8 font-semibold text-sky-700 hover:text-red-400">
        <Link to="/">Home</Link>
      </li>
      <li className="px-4 md:px-8 font-semibold text-sky-700 hover:text-red-400">
        <Link to="/aboutus">About</Link>
      </li>
      <li className="px-4 md:px-8 font-semibold text-sky-700 hover:text-red-400">
        <Link to="/services">Services</Link>
      </li>
      <li className="px-4 md:px-8 font-semibold text-sky-700 hover:text-red-400">
        <Link>Blogs</Link> 
      </li>
      <li className="px-4 md:px-8 font-semibold text-sky-700 hover:text-red-400">
        <Link to="/contactus">Contact us</Link> 
      </li>
    </ul>
  </div>
</div>


  );
};
