import { CSSProperties, ChangeEvent, FormEvent, useState } from 'react';
// import { Link } from 'react-router-dom';
import CollapsableCard from '../components/collapsableCard';
import { toJSON } from '../utilities';
import { post } from 'aws-amplify/api';

interface Response {
  'Coherence & Cohesion': string;
  'Grammatical Range & Accuracy': string;
  'Lexical Resource': string;
  'Task Responce': string;
  'Grammer Tool Feedback': Array<{message: string, context:{text:string, offset:number, length:number}}>;
}

function Writing() {
  const [inputs, setInputs] = useState({
    answer: '',
    question: '',
  });
  const [grading, setGrading] = useState(undefined as undefined | Response);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await toJSON(
      post({
        apiName: 'myAPI',
        path: '/writing',
        options: {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: {
            inputs,
          },
        },
      }),
    );

    console.log(response);
    setGrading(response);
  };

  const size = {
    rows: 10,
    cols: 80,
  };

  const pStyling: CSSProperties = { whiteSpace: 'pre-line' };
  let grammarMistakes = null;


  if (grading) {
    grammarMistakes = grading['Grammer Tool Feedback'].map((mistake, index) => {
      const context = mistake.context.text;
      const before = context.substring(0, mistake.context.offset);
      const inner = context.substring(mistake.context.offset, mistake.context.offset + mistake.context.length);
      const after = context.substring(mistake.context.offset + mistake.context.length);

      const title = (
        <>
          {before}
          <span className="bg-yellow-300">{inner}</span>
          {after}
        </>
      );

      return (
        <CollapsableCard title={title} key={index}>
          {JSON.stringify(mistake)}
        </CollapsableCard>
      );
    });
  }

  const gradingElement = grading ? (
    <>
      <h5>Coherence & Cohesion</h5>
      <p style={pStyling}> {grading['Coherence & Cohesion']} </p>
      <h5>Grammatical Range & Accuracy</h5>
      <p style={pStyling}> {grading['Grammatical Range & Accuracy']} </p>
      <h5>Lexical Resource</h5>
      <p style={pStyling}> {grading['Lexical Resource']} </p>
      <h5>Task Responce</h5>
      <p style={pStyling}> {grading['Task Responce']} </p>
      <h5>Grammar Tool Feedback</h5>
      {grammarMistakes? grammarMistakes : <p>No Mistakes Found</p>}
    </>
  ) : (
    <p style={{ whiteSpace: 'pre-line' }}> {grading} </p>
  );

  return (
    <>
      <h4> A demo page </h4>

      <form onSubmit={handleSubmit}>
        <textarea
          name="question"
          value={inputs.question}
          onChange={handleChange}
          {...size}
        />
        <br />

        <textarea
          name="answer"
          value={inputs.answer}
          onChange={handleChange}
          {...size}
        />

        <br />

        <button type="submit"> Submit </button>
      </form>

      <br />

      <h4>Feedback</h4>

      {gradingElement}
    
      {/* <Link to="/"> Link back to root </Link> */}
    </>
  );
}

export default Writing;
