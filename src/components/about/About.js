import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import TagsCanvas from "react-tags-canvas";

const specialWords = (str, fWeight) => (
  <span
    style={{
      ...(fWeight && { fontWeight: fWeight }),
      background: info.gradient,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    {str}
  </span>
);

export default function About({ innerRef }) {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cat about{firstName}{" "}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span> ${" "}
          </span>
          {info.bio}
        </p>
      </>
    );
  }

  // function skillsText() {
  //     return <>
  //         <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
  //         </p>
  //         <p><span style={{color: info.baseColor}}>skills/tools <span
  //             className={Style.green}>(main)</span> $</span> ls</p>
  //         <p style={{color: info.baseColor}}> Proficient With</p>
  //         <ul className={Style.skills}>
  //             {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
  //         </ul>
  //         <p style={{color: info.baseColor}}> Exposed To</p>
  //         <ul className={Style.skills}>
  //             {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
  //         </ul>
  //     </>;
  // }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      ref={innerRef}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
      id={"about"}
    >
      
      <Box
        component={"main"}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
        width={"100%"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {/* <h1>.</h1> */}
          <Box
            component={"h1"}
            px={{ xs: "2rem", md: "3rem" }}
            fontSize={"2.5rem"}
            fontFamily={"Courier New, Courier, monospace"}
          >
            {specialWords("Skills and Tecnologies")}
          </Box>
          <Box
            py={{ xs: "1rem", md: "2rem" }}
            px={{ xs: "2rem", md: "3rem" }}
            fontSize={"1.0rem"}
            fontFamily={"Courier New, Courier, monospace"}
          >
            Hi, I am a{" "}
            {specialWords("Full Stack Developer", 800)}{" "}
            passionate about applying my engineering expertise to solve complex problems in the field of computer science.

     
          </Box>
          <Box
            px={{ xs: "2rem", md: "3rem" }}
            fontSize={"1.0rem"}
            fontFamily={"Courier New, Courier, monospace"}
          >
          Currently pursuing a Master of Science in Computer and Information Science at the University of Michigan, I bring a strong foundation in software engineering, system design and modern development practices.
          </Box>
          <Box
            py={{ xs: "1rem", md: "2rem" }}
            px={{ xs: "2rem", md: "3rem" }}
            fontSize={"1.0rem"}
            fontFamily={"Courier New, Courier, monospace"}
          >
             My professional journey spans roles in both frontend and backend development:
            <ul>
              <li>{specialWords("Research Assistant at University of Michigan",800)} - Optimized a CPS system using Docker to improve performance and maintainability. Contributed to MLOps projects by developing a GitHub repository analysis tool with advanced search, commit filtering, and reporting. Integrated CI/CD pipelines with GitHub Actions, Jenkins to automate test case creation, detect inefficiencies, and enhance system reliability.</li>
              <li>{specialWords("Associate System Analyst at NSEIT",800)} – Developed and optimized full-stack applications, enhancing system performance and reliability.</li>
              <li>{specialWords("Frontend Software Engineer Intern at Faclon Labs",800)} – Built responsive, user-friendly web interfaces using modern frontend technologies.</li>
              <li>{specialWords("Project Engineer at Wipro",800)} – Gained experience in software development lifecycles, problem-solving, and cross-functional collaboration.</li>
            </ul>
            </Box>
            <Box
            px={{ xs: "2rem", md: "3rem" }}
            fontSize={"1.0rem"}
            fontFamily={"Courier New, Courier, monospace"}>
            These experiences have shaped me into a results-oriented developer with a keen interest in scalable architectures, performance optimization, and delivering high-quality software solutions.
            
            {/* Previously, as a {specialWords("Project Engineer", 800)} at Wipro, I
            honed my problem-solving and teamwork abilities. My internship at
            Faclon Labs as a {specialWords("Frontend Software Engineer", 800)}{" "}
            allowed me to deepen my proficiency in modern frontend technologies.
            Most recently, as an {specialWords("Associate System Analyst", 800)}{" "}
            at NSEIT, I worked across both frontend and backend technologies,
            delivering robust solutions and enhancing system performance. These
            experiences have strengthened my technical capabilities and shaped
            me into an effective communicator, a collaborative team player, and
            a results-driven professional. */}
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          minHeight={"calc(100vh - 175px)"}
        >
          <TagsCanvas
            textColour={null}
            maxSpeed={0.12}
            freezeActive
            shuffleTags
            noSelect
            wheelZoom={false}
            width="500"
            height="500"
            style={{
              maxWidth: "1000px",
              width: "100%",
              zIndex: "99",
              position: "relative",
              margin: "0 auto",
            }}
            // textFont='Helvetica'
            // pinchZoom
            tags={[
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Javascript")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Typescript")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Node.js")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("HTML")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Python")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Java")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("React")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Nest.js")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("SpringBoot")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Angular")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Deep Learning")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Nest.js")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Apache Kafka")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Mongo")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("BootStrap")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("CSS")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Git")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Svn")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Spring Security")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("JSP")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Spring JPA")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Sql")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Linux")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Spring MVC")}
              </Box>,
              <Box fontFamily={"Courier New, Courier, monospace"}>
                {specialWords("Redis")}
              </Box>,
            ]}
          />
        </Box>
      </Box>
      <Terminal text={aboutMeText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
