// Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface MyComponentProps {
  children: React.ReactNode;
}

function Layout({ children }: MyComponentProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
