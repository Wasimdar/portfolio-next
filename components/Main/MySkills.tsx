import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaTypo3,
  FaCode
  
} from "react-icons/fa";

import { IoLogoNodejs} from "react-icons/io";
import { DiMongodb } from 'react-icons/di'


interface Skill {
  name: string;
  icon: JSX.Element;
  level: number;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "HTML", icon: <FaHtml5 />, level: 90 },
    { name: "CSS", icon: <FaCss3 />, level: 85 },
    { name: "JavaScript", icon: <FaJs />, level: 80 },
    { name: "React.js", icon: <FaReact />, level: 75 },
    { name: "Node.js", icon: <FaNodeJs />, level: 75 },
    { name: "Next.js", icon:  <IoLogoNodejs/> , level: 75 },
    { name: "TypeScript", icon: <FaTypo3/> , level:70},
    { name: "C++", icon: <FaCode/> , level:85},
    { name: "MongoDb", icon: <DiMongodb/> , level:80},
  ];

  return (
    <div className=" text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center">
          <div className="flex-shrink-0 mr-3">{skill.icon}</div>
          <div className="flex-1">
            <p className="font-semibold">{skill.name}</p>
            <div className="w-full bg-gray-200 rounded-full">
              <div
                className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
