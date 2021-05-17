import { Collapse } from "antd";
import { questions } from "./data";

const FAQ = () => {
  const { Panel } = Collapse;
  function callback(key) {
    console.log(key);
  }

  const children = questions.map((question, i) => (
    <Panel header={question.pregunta}>
      <p>{question.text}</p>
    </Panel>
  ));

  return <Collapse onChange={callback}>{children}</Collapse>;
};

export default FAQ;
