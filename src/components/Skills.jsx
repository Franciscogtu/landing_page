import React, { useState } from 'react';


const Skills = ({ skills }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (index) => {
    setSelectedSkill(selectedSkill === index ? null : index);
  };

  return (
    <div className="max-w-[1040px] w-full felx items-center m-auto md:pl-20 p-4 py-16 ">
      {skills.map((skill, index) => (
        <div key={index} onClick={() => handleSkillClick(index)} className=" flex flex-col w-full items-center cursor-pointer mb-4  m-auto ">
          <h2 className=" items center text-center w-full font-semibold text-white bg-cyan-600 rounded-md  px-3 py-2 ">{skill.habilidad}</h2>
          {selectedSkill === index && (
            <p className="text-gray-600 mt-2">{skill.detalle}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Skills;