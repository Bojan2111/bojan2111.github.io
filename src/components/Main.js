export default function Main() {
  return (
    <main id="main" className="main">
      <section className="main-section">
        <div className="breadcrumbs" id="breadcrumbs"></div>
        <h1 className="main-title">This is main content</h1>
      </section>
      <aside className="side-panel">
        <div className="side-panel-menu">This is where the menu will go...
          <ul className="side-panel-menu-group">
            <li className="side-panel-menu-items">Item 1</li>
            <li className="side-panel-menu-items">Item 2</li>
            <li className="side-panel-menu-items">Item 3</li>
            <li className="side-panel-menu-items">Item 4</li>
            <li className="side-panel-menu-items">Item 5</li>
          </ul>
        </div>
      </aside>
    </main>
  )
}