import Navbar from './Navbar';
import logo from '../logo.png';

export default function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Letters A B M and T designed in rounded squares surrounded by big letter C"/>
        ABMT Code
      </div>
      <Navbar />
    </header>
  )
}