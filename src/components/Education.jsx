import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { education } from "../constants";

const EducationCard = ({ index, degree, institution, year, percentage, cgpa, board, details }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-8 rounded-2xl w-full'
  >
    {/* Degree + Institution */}
    <h3 className='text-white text-[20px] font-bold'>{degree}</h3>
    <p className='text-secondary text-[16px] mt-1'>{institution}</p>
    <p className='text-white-100 text-[14px] mt-1'>{year}</p>

    {/* Board, Percentage, CGPA in pill style */}
    <div className="mt-3 flex flex-wrap gap-3">
     {board &&  <span className="bg-tertiary text-white text-[13px] px-3 py-1 rounded-full">
        Board : {board}
      </span> }
     {percentage &&  <span className="bg-tertiary text-white text-[13px] px-3 py-1 rounded-full">
        Percentage : {percentage}
      </span> }
       {cgpa &&  <span className="bg-tertiary text-white text-[13px] px-3 py-1 rounded-full">
        CGPA : {cgpa}
      </span> }
    </div>

    {/* Extra details */}
    <ul className='mt-4 list-disc ml-5 space-y-2'>
      {details.map((point, i) => (
        <li
          key={`edu-point-${i}`}
          className='text-white-100 text-[14px] tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </motion.div>
);

const EducationSection = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Academic Journey</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>

      <div className={`-mt-16 pb-14 ${styles.paddingX} flex flex-col gap-7`}>
        {education.map((edu, index) => (
          <EducationCard key={edu.degree} index={index} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(EducationSection, "education");
