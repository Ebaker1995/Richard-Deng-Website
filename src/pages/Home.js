import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./Home.css";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Banner from "../Assets/GamingBanner2.jpg";

const shadow = createTheme({
  shadows: {
    boxSadow: 0,
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgb(199, 117, 186)" : "rgb(199, 117, 186)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <ThemeProvider theme={shadow}>
      <Card className="card">
        <div className="con">
          <CardContent
            sx={{
              p: 0,
            }}
            className="content"
          >
            <div style={{ position: "relative" }}>
              <CardMedia
                sx={{
                  borderRadius: 0,
                  p: 0,
                  m: 0,
                }}
                component="img"
                className="media"
                image={Banner}
              />
              <div className="box">
                <h1
                  className="heading"
                  style={{
                    position: "absolute",
                    color: "white",
                    top: 50,
                    left: "5%",
                  }}
                >
                  Welcome to Richard Deng Industries!
                </h1>
              </div>

              <div className="box">
                <h1
                  style={{
                    position: "absolute",
                    color: "white",
                    top: 120,
                    left: "5%",
                  }}
                >
                  <Button
                    color="secondary"
                    variant="contained"
                    target="_blank"
                    href="https://discord.gg/5gAJvQrCBB"
                  >
                    Join Our Discord Now!
                  </Button>
                </h1>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Item sx={{ minHeight: 200 }}>
            <h1 className="htext">Community</h1>
            <div className="cardtext">Everyone here is very friendly!</div>
            <div className="cardtext">
              This is a great place if you love corgis!
            </div>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ minHeight: 200 }}>
            <h1 className="htext">Fun</h1>
            <div className="cardtext">
              Want to win some games and have fun doing it?
            </div>
            <div className="cardtext">Then this is the place for you!</div>
            <div className="cardtext">
              All of the members here want to have a good time.
            </div>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ minHeight: 200 }}>
            <h1 className="htext">Gaming</h1>
            <div className="cardtext">
              This is a great place if you love corgis
            </div>
          </Item>
        </Grid>
      </Grid>
      <br></br>
      <div>Testimonial Carousel</div>
      <br></br>
      <div>Contuct us via email.js</div>
    </ThemeProvider>
  );
};

export default Home;
