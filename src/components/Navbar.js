export default function Navbar() {
  return (
    <nav id="navbar" className="navbar">
      <div id="hamburger-button">
        <span className="hamb-lines" id="hamb-one">—</span>
        <span className="hamb-lines" id="hamb-two">—</span>
        <span className="hamb-lines" id="hamb-three">—</span>
      </div>
      <div className="nav-group" id="nav-group">
        <div className="nav-item">Home</div>
        <div className="nav-item">About</div>
        <div className="nav-item">Contact</div>
      </div>
    </nav>
  )
}