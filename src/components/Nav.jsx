import "./Nav.css";

export const Nav = () => {
  return (
    <div>
      <nav className="nav simple-nav">
        <div class="logo">
          <img src="logo.png" alt="" />
        </div>
        <div class="menu">
          <div className="home">home</div>
          <div className="about">about</div>
          <div className="projects">projects</div>
        </div>
      </nav>
    </div>
  );
};
