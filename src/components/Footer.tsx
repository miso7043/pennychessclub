export default function Footer() {
  return (
    <footer className="bg-slate-200/80 text-black py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-lg">©2022 by Penny Chess Club.</p>
          </div>

          {/* Email */}
          <div className="text-center">
            <a 
              href="mailto:pennychessclub@gmail.com" 
              className="text-black text-lg hover:text-blue-600 transition-colors"
            >
              pennychessclub@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 md:gap-12">
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/pennychessclub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <svg 
                className="w-10 h-10 fill-current text-blue-600" 
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Chess.com */}
            <a 
              href="https://www.chess.com/club/penny-chess-club" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Chess.com"
            >
              <img 
                src="/imgs/logo/chessClub.webp" 
                alt="Chess.com" 
                className="h-10 w-auto rounded"
              />
            </a>

            {/* Lichess */}
            <a 
              href="https://lichess.org/team/penny-chess-club" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Lichess"
            >
              <img 
                src="/imgs/logo/lichess.webp" 
                alt="Lichess" 
                className="h-10 w-auto rounded"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
