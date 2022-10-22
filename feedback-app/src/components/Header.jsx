function Header() {
  const headerStyles = {
    backgroundColor: "#292f32",
    color: "#cf37b9",
    margin: 0,
  };
  return (
    <header style={headerStyles}>
      <div>
        <h2 style={{ margin: 0, padding: 20 }}>Feedback UI</h2>
      </div>
    </header>
  );
}

export default Header;
