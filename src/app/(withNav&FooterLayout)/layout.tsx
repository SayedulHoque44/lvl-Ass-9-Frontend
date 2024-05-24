import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Box } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box sx={{ minHeight: "100vh" }}>{children}</Box>
      <Footer />
    </>
  );
};

export default CommonLayout;
