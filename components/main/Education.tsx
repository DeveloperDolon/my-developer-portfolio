"use client";
import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFreeCodeCamp } from "react-icons/fa";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-32 experience">
      <div className=" md:text-5xl text-3xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Educations</div>
      <VerticalTimeline lineColor="#fafafa">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ 
            background: "linear-gradient(180deg,rgba(60, 8, 126, 0) 0%,rgba(60, 8, 126, 0.32) 100%),rgba(113, 47, 255, 0.12)",
            isolation: "isolate",
            borderRadius: "32px",
            boxShadow: "inset 0 -7px 11px #a48fff1f",
            transition: "0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow",
            color: "#fff" 
        }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2013 - 2018"
          iconStyle={{ background: "#4f10e5", color: "#fff" }}
          icon={<FaGraduationCap />}
          visible={true}
          dateClassName="text-white"
        >
          <h1 className="vertical-timeline-element-title md:text-2xl text-lg">Secondary School Certificate</h1>
          <h4 className="vertical-timeline-element-subtitle">Institution : Botolbunia School and College, Patuakhali.</h4>
          <p>
            Group: Science <br />
            CGAP: 3.39
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ 
            background: "linear-gradient(180deg,rgba(60, 8, 126, 0) 0%,rgba(60, 8, 126, 0.32) 100%),rgba(113, 47, 255, 0.12)",
            isolation: "isolate",
            borderRadius: "32px",
            boxShadow: "inset 0 -7px 11px #a48fff1f",
            transition: "0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow",
            color: "#fff" 
        }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2018 - 2020"
          iconStyle={{ background: "#4f10e5", color: "#fff" }}
          icon={<FaGraduationCap />}
          visible={true}
          dateClassName="text-white"
        >
          <h1 className="vertical-timeline-element-title md:text-2xl text-lg">Higher Secondary Certificate</h1>
          <h4 className="vertical-timeline-element-subtitle">Institution : Dhaka City International College, Dhaka.</h4>
          <p>
            Group: Science <br />
            CGAP: 3.83
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ 
            background: "linear-gradient(180deg,rgba(60, 8, 126, 0) 0%,rgba(60, 8, 126, 0.32) 100%),rgba(113, 47, 255, 0.12)",
            isolation: "isolate",
            borderRadius: "32px",
            boxShadow: "inset 0 -7px 11px #a48fff1f",
            transition: "0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow",
            color: "#fff" 
        }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2022 - Present"
          iconStyle={{ background: "#4f10e5", color: "#fff" }}
          icon={<FaGraduationCap />}
          visible={true}
          dateClassName="text-white"
        >
          <h1 className="vertical-timeline-element-title md:text-2xl text-lg">Bachelor&apos;s Degree in Science</h1>
          <h4 className="vertical-timeline-element-subtitle">Institution : Patuakhali Govt. College, Patuakhali.</h4>
          <p>
            Group: Science (In Degree curriculum) <br />
            CGAP: NA
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ 
            background: "linear-gradient(180deg,rgba(60, 8, 126, 0) 0%,rgba(60, 8, 126, 0.32) 100%),rgba(113, 47, 255, 0.12)",
            isolation: "isolate",
            borderRadius: "32px",
            boxShadow: "inset 0 -7px 11px #a48fff1f",
            transition: "0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow",
            color: "#fff" 
        }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2023 - Present"
          iconStyle={{ background: "#4f10e5", color: "#fff" }}
          icon={<FaFreeCodeCamp />}
          visible={true}
          dateClassName="text-white"
        >
          <h1 className="vertical-timeline-element-title md:text-2xl text-lg">Complete Web Development Course With Jhankar Mahbub</h1>
          <h4 className="vertical-timeline-element-subtitle">Institution : Programming Hero.</h4>
          <p>
            Section: Web Development <br />
            Achievement: MERN Stack Web Developer
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Education;
