import HeaderBar from "@/components/HeaderBar/headerbar";
import MainSlider from "@/components/Main/main.slider";
import { Container } from "@mui/material";
import { sendRequestJS } from "@/utils/old.api"
export default async function HomePage() {
  const res = await sendRequestJS({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: 'POST',
    body: {
      category: 'CHILL',
      limit: 2
    }
  })
  console.log('>>> ', res)

  return (
    <>
      <Container>
        <MainSlider />
      </Container>


    </>
  );
}
