import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import js from "../../../public/js.png";
import ts from "../../../public/ts.png";
import cplus from "../../../public/c++.jpeg";
import FramerWrapper from "@/components/animation/FramerWrapper";
const skillPage = () => {
  const language = [
    { alt: "html", img: html },
    { alt: "css", img: css },
    { alt: "js", img: js },
    { alt: "ts", img: ts },
    { alt: "cplus", img: cplus },
  ];

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>我的技术栈</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            目前我是一个新手，正在攻读计算机科学与技术专业，我热爱编程，喜欢学习新技术，我会持续更新我的技术栈。
          </p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.3} className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Programming Languages
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={language} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;
