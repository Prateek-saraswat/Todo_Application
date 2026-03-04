function Header() {
  return (
    <header className="w-full bg-gray-900 border-b border-gray-700/60 shadow-lg shadow-black/20">
      <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">

        <div className="flex items-center gap-3 group cursor-default">
          <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center shadow-md shadow-violet-900/50 group-hover:bg-violet-500 transition-colors duration-200">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h1 className="text-white text-xl font-semibold tracking-tight group-hover:text-violet-300 transition-colors duration-200">
            My To-Do List
          </h1>
        </div>

        <span className="text-xs font-medium text-violet-400 bg-violet-400/10 border border-violet-400/20 px-3 py-1 rounded-full">
          Today's Tasks
        </span>

      </div>
    </header>
  );
}

export default Header;