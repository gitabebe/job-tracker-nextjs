// app/layout.js (UPDATED: Contains the Header and Footer only once)
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Job Tracker | Professional Dashboard',
  description: 'Track your job applications easily with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header /> {/* RENDERED ONCE GLOBALLY */}
        <main className="flex-grow">
          {children} 
        </main>
        <Footer />
      </body>
    </html>
  );
}