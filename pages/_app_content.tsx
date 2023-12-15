import dynamic from "next/dynamic";
import { Container } from "react-bootstrap";

const Header = dynamic(() => import("@components/Header"));
const Footer = dynamic(() => import("@components/Footer"));
const Breadcrumb = dynamic(() => import("@components/Breadcrumb"));

const AppContent = ({ Component }: any) => {
  return (
    <>
      <Header />
      <Container className="page-wrapper">
        <Breadcrumb />
        <Component />
      </Container>
      <Footer />
    </>
  );
};

export default AppContent;
