"use client";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { coursesData } from "@/lib/data";
import { Fragment } from "react";
import { useThemeContext } from "@/context/theme-context";

const Courses = () => {
  const { ref } = useSectionInView("Courses", 0.55);
  const { theme } = useThemeContext();
  return (
    <section ref={ref} id="courses" className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading> Courses </SectionHeading>
      <VerticalTimeline lineColor="">
        {coursesData.map((item, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              icon={item.icon}
              date={item.date}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0"> {item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};
export default Courses;
