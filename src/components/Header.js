import Navbar from './Navbar';
import logo from '../logo.png';

export default function Header() {
  return (
    <header id='header'>
      <div className='header--title'>
        <img className='title-logo' src={logo} alt="Letters A B M and T designed in rounded squares surrounded by big letter C"/>
        <span className='title'>ABMT Code</span>
      </div>
      <Navbar />
    </header>
  )
}