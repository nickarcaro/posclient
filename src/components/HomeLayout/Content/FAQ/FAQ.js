import { Collapse } from "antd";

const FAQ = () => {
  const { Panel } = Collapse;
  function callback(key) {
    console.log(key);
  }
  const text = `
  pregunta que sera respondida de las mas comunes
`;

  return (
    <Collapse onChange={callback}>
      <Panel header="pregunta 1">
        <p>{text}</p>
      </Panel>
      <Panel header="pregunta 1">
        <p>{text}</p>
      </Panel>
      <Panel header="pregunta 1">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

export default FAQ;
