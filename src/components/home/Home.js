import React from "react";
import Style from "./Home.module.scss";
import me from "../../img/self.png";
import classNames from "classnames";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Home({ innerRef }) {
  return (
    <Box
      ref={innerRef}
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}
      id={"home"}
    >
      <Box
        className={classNames(Style.sun, Style.shadowed)}
        alt={"image of developer"}
        style={{ background: info.gradient }}
        component={"img"}
        src={me}
        width={{ xs: "35vh", md: "40vh" }}
        height={{ xs: "35vh", md: "40vh" }}
        borderRadius={"50%"}
        p={"0.75rem"}
        mb={{ xs: "1rem", sm: 0 }}
        mr={{ xs: 0, md: "2rem" }}
        mt={{ xs: "-1rem", md: "-2rem" }} 
        sx={{objectFit: "cover",
        objectPosition: "top",
        }}
      />
      <Box>
        <h1>
          Hi, I am{" "}
          <span
            style={{
              background: info.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {info.firstName} {info.lastName}
          </span>
          <span className={Style.hand}>🤚🏻</span>
        </h1>
        <h2>I am {info.position}.</h2>
        <Box component={"ul"} p={"0.8rem"}>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
          ))}
        </Box>
        {/* <a class="link link-primary" href="/PaytonPierceResume.pdf" download="PaytonPierceResume">resume</a> */}
        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}
        >
          {info.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
