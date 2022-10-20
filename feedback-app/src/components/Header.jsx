function Header() {
  const headerStyles = {
    backgroundColor: "rgb(97, 218, 251)",
    color: "white",
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
