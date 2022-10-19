import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Paper from "@mui/material/Paper";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import richard from "../Assets/Richard.png";
import Grid from "@mui/material/Grid";
import tft from "../Assets/GamesListIcons/tft.jpg";
import lol from "../Assets/GamesListIcons/lol.jpeg";
import valorant from "../Assets/GamesListIcons/valorant.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgb(199, 117, 186)" : "rgb(199, 117, 186)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const riot = [
  {
    game: "TFT",
    image: { tft },
  },
  {
    game: "League of Legends",
    image: { lol },
  },
  {
    game: "Valorant",
    image: { valorant },
  },
];

const steam = [
  {
    game: "Lost Ark",
    image: { tft },
  },
  {
    game: "Gunfire Reborn",
    image: { lol },
  },
  {
    game: "CSGO",
    image: { valorant },
  },
];

const blizzard = [
  {
    game: "Overwatch 2",
    image: { tft },
  },
];

const oculus = [
  {
    game: "Demeo",
    image: { tft },
  },
  {
    game: "Poker Stars",
    image: { lol },
  },
];

const GamesList = () => {
  return (
    <div>
      <Typography
        sx={{ display: "flex", justifyContent: "center", pt: 4, pb: 4 }}
        variant="h6"
        component="div"
      >
        These are some of the games we play!
      </Typography>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Item sx={{ minHeight: 350 }}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              <ListItemAvatar
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <Avatar alt="TFT" src={richard} />
              </ListItemAvatar>
              RIOT GAMES
            </Typography>
            <List>
              {riot.map((riot) => (
                <ListItem style={{ display: "flex", textAlign: "center" }}>
                  <ListItemAvatar>
                    <Avatar
                      alt="game"
                      src={riot.image}
                      style={{ borderRadius: 0 }}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={riot.game} />
                </ListItem>
              ))}
            </List>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ minHeight: 350 }}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              <ListItemAvatar
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <Avatar alt="TFT" src={richard} />
              </ListItemAvatar>
              STEAM
            </Typography>
            <List>
              {steam.map((steam) => (
                <ListItem style={{ display: "flex", textAlign: "center" }}>
                  <ListItemAvatar>
                    <Avatar
                      alt="game"
                      src={steam.image}
                      style={{ borderRadius: 0 }}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={steam.game} />
                </ListItem>
              ))}
            </List>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ minHeight: 350 }}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              <ListItemAvatar
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <Avatar alt="TFT" src={richard} />
              </ListItemAvatar>
              BLIZZARD
            </Typography>
            <List>
              {blizzard.map((blizzard) => (
                <ListItem style={{ display: "flex", textAlign: "center" }}>
                  <ListItemAvatar>
                    <Avatar
                      alt="game"
                      src={blizzard.image}
                      style={{ borderRadius: 0 }}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={blizzard.game} />
                </ListItem>
              ))}
            </List>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ minHeight: 350 }}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              <ListItemAvatar
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <Avatar alt="TFT" src={richard} />
              </ListItemAvatar>
              OCULUS QUEST
            </Typography>
            <List>
              {oculus.map((oculus) => (
                <ListItem style={{ display: "flex", textAlign: "center" }}>
                  <ListItemAvatar>
                    <Avatar
                      alt="game"
                      src={oculus.image}
                      style={{ borderRadius: 0 }}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={oculus.game} />
                </ListItem>
              ))}
            </List>
          </Item>
        </Grid>
        ;
        {/* <List>
              <ListItem style={{ display: "flex", textAlign: "center" }}>
                <ListItemAvatar>
                  <Avatar alt="TFT" src={richard} style={{ borderRadius: 0 }} />
                </ListItemAvatar>
                <ListItemText primary="TFT" />
              </ListItem>
              <ListItem style={{ display: "flex", textAlign: "center" }}>
                <ListItemAvatar>
                  <Avatar alt="TFT" src={richard} style={{ borderRadius: 0 }} />
                </ListItemAvatar>
                <ListItemText primary="League Of Legends" />
              </ListItem>
              <ListItem style={{ display: "flex", textAlign: "center" }}>
                <ListItemAvatar>
                  <Avatar alt="TFT" src={richard} style={{ borderRadius: 0 }} />
                </ListItemAvatar>
                <ListItemText primary="Valorant" />
              </ListItem>
            </List> */}
        {/* <Grid item xs={3}>
          <Item sx={{ minHeight: 350 }}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              <ListItemAvatar
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <Avatar alt="TFT" src={richard} />
              </ListItemAvatar>
              Steam
            </Typography>
            <List>
              <ListItem style={{ display: "flex", textAlign: "center" }}>
                <ListItemAvatar>
                  <Avatar alt="TFT" src={richard} style={{ borderRadius: 0 }} />
                </ListItemAvatar>
                <ListItemText primary="Lost Ark" />
              </ListItem>
              <ListItem style={{ display: "flex", textAlign: "center" }}>
                <ListItemAvatar>
                  <Avatar alt="TFT" src={richard} style={{ borderRadius: 0 }} />
                </ListItemAvatar>
                <ListItemText primary="CS:GO" />
              </ListItem>
              <ListItem style={{ display: "flex", textAlign: "center" }}>
                <ListItemAvatar>
                  <Avatar alt="TFT" src={richard} style={{ borderRadius: 0 }} />
                </ListItemAvatar>
                <ListItemText primary="Gunfire Reborn" />
              </ListItem>
            </List>
          </Item>
        </Grid>

        <Grid item xs={3}>
          <Item sx={{ minHeight: 350 }}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              <ListItemAvatar
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <Avatar alt="TFT" src={richard} />
              </ListItemAvatar>
              Blizzard
            </Typography>
            <List>
              <ListItem style={{ display: "flex", textAlign: "center" }}>
                <ListItemAvatar>
                  <Avatar alt="TFT" src={richard} style={{ borderRadius: 0 }} />
                </ListItemAvatar>
                <ListItemText primary="Overwath 2" />
              </ListItem>
            </List>
          </Item>
        </Grid>

        <Grid item xs={3}>
          <Item sx={{ minHeight: 350 }}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              <ListItemAvatar
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <Avatar alt="TFT" src={richard} />
              </ListItemAvatar>
              Oculus Quest
            </Typography>
            <List>
              <ListItem style={{ display: "flex", textAlign: "center" }}>
                <ListItemAvatar>
                  <Avatar alt="TFT" src={richard} style={{ borderRadius: 0 }} />
                </ListItemAvatar>
                <ListItemText primary="Demeo" />
              </ListItem>
              <ListItem style={{ display: "flex", textAlign: "center" }}>
                <ListItemAvatar>
                  <Avatar alt="TFT" src={richard} style={{ borderRadius: 0 }} />
                </ListItemAvatar>
                <ListItemText primary="PokerstarsVR" />
              </ListItem>
            </List>
          </Item>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default GamesList;
