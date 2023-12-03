import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import Image from "next/image";
import sideBarNews from "@/assets/side-top-news.png";
import sideBottomNews from "@/assets/side-bottom-img.png";
import SidebarNewsCard from "./SideBarNewsCard";

const SideBar = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sideBarNews} width={800} alt="top news" />
          </CardMedia>
          <CardContent>
            <p
              className="
                      w-[100px]
                      bg-red-500
                      px-2
                      text-white
                      my-5
                      rounded
                      "
            >
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom className="my-3">
              By Tanmoy Parvez - Mar 18 2023
            </Typography>

            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Divider />

      <Stack my={3} columnGap={2}>
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
      </Stack>

      <Box>
        <Image
          src={sideBottomNews}
          height={400}
          width={350}
          alt="rectangle world image"
        />
      </Box>
    </Box>
  );
};

export default SideBar;
