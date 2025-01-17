export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-800 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
          <a
            href="/"
            className="text-sm text-gray-400 hover:text-gray-200 transition"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-sm text-gray-400 hover:text-gray-200 transition"
          >
            About
          </a>
          <a
            href="/projects"
            className="text-sm text-gray-400 hover:text-gray-200 transition"
          >
            Projects
          </a>
          <a
            href="/experience"
            className="text-sm text-gray-400 hover:text-gray-200 transition"
          >
            Experience
          </a>
          <a
            href="/contact"
            className="text-sm text-gray-400 hover:text-gray-200 transition"
          >
            Contact
          </a>
        </nav>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/while-basic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/christophercelaya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            Twitter
          </a>
        </div>

        <p className="text-sm text-gray-400 text-center">
          © {currentYear} Christopher Celaya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
