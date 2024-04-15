// src/pages/bootstrap.tsx

import BootstrapAccordion from "@/components/bootstrap/BootstrapAccordion";
import BootstrapButtons from "@/components/bootstrap/BootstrapButtons";
import BootstrapModal from "@/components/bootstrap/BootstrapModal";
import BootstrapNavbar from "@/components/bootstrap/BootstrapNavbar";
import Layout from "@/components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BootstrapPage() {
  return (
    <>
      <Layout>
        <div>
          <h4 className="bootstrap-header">Navbar</h4>
          <BootstrapNavbar />
        </div>
        <div>
          <h4 className="bootstrap-header">Accordion</h4>
          <BootstrapAccordion />
        </div>
        <div>
          <h4 className="bootstrap-header">Buttons</h4>
          <BootstrapButtons />
        </div>
        <div>
          <h4 className="bootstrap-header">Modal</h4>
          <BootstrapModal />
        </div>
      </Layout>
    </>
  );
}
