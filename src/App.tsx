import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      {/* pointer-events-none로 클릭 방지 */}
      <div className="fixed inset-0 w-full h-full bg-slate-400 -z-50 pointer-events-none"></div>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1 max-w-7xl w-full mx-auto p-2 md:p-8">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
