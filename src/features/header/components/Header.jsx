function Header() {
  return (
    <header className="bg-green-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold">GreenPath</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;