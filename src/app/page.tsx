
import MainSlider from "@/components/Main/main.slider";
import { Container } from "@mui/material";
import { sendRequest } from "@/utils/api"

export default async function HomePage() {
  const chills = await sendRequest<IBackendRes<ITracksTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: 'POST',
    body: {
      category: 'CHILL',
      limit: 10
    }
  })

  const workout = await sendRequest<IBackendRes<ITracksTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: 'POST',
    body: {
      category: 'WORKOUT',
      limit: 10
    }
  })

  const party = await sendRequest<IBackendRes<ITracksTop[]>>({
    url: 'http://localhost:8000/api/v1/tracks/top',
    method: 'POST',
    body: {
      category: 'PARTY',
      limit: 10
    }
  })

  return (
    <>
      <Container>
        <MainSlider
          data={chills?.data ? chills.data : []}
        />
        <MainSlider
          data={workout?.data ? workout.data : []} />
        <MainSlider
          data={party?.data ? party.data : []} />
      </Container>


    </>
  );
}
