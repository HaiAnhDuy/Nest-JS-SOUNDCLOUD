import HeaderBar from "@/components/HeaderBar/headerbar";
import MainSlider from "@/components/Main/main.slider";
import { Container } from "@mui/material";
import FooterAppBar from "@/components/Footer/FooterAppBar";
export default function HomePage() {
  return (
    <>
      <Container>
        <MainSlider />
      </Container>
      {/* footer */}
      <FooterAppBar />
    </>
  );
}
