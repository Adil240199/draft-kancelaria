import './globals.scss';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}