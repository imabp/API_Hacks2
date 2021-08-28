import React from 'react'
import submit from './functions/submit';
import "./index.css";
const Registration = () => {
  const [position, setPosition] = React.useState(0);
  const [email, setEmail] = React.useState('');
  const [FullName, setFullName] = React.useState('');
  const [Phone, setPhone] = React.useState('');
  const [github, setGithub] = React.useState('');
  const [linkedin, setLinkedin] = React.useState('');
  const [firsthackathon, setFirsthackathon] = React.useState(false);
  const [postmanstudentexpert, setPostmanstudentexpert] = React.useState(false);
  const [beginner, setBeginner] = React.useState(false);
  const [student, setStudent] = React.useState(false);
  const [university, setUniversity] = React.useState('');
  const [year, setYear] = React.useState('');
  const [notes, setNotes] = React.useState(" ");
  const [submitstatus, setSubmitstatus] = React.useState("Not Yet Submitted");
  const payload = {
    name: FullName,
    email: email,
    linkedin: linkedin,
    student: {
      status: student,
      university: university,
      year: year,
    },
    mobile: Phone,
    github: github,
    beginner: beginner,
    studentExpert: postmanstudentexpert,
    firstHackathon: firsthackathon,
  }
  const questions = [
    {
      question: "What is your full name?",
      cb: setFullName,
      status: FullName.trim() != "" ? true : false,
      type: "input",
      optional: false,
      value: FullName
      , options: {
        placeholder: "Full Name"
      }
    },
    {
      question: "Whats your github url? (Ex: https://github.com/username)",
      cb: setGithub,
      status: github.trim() != "" ? true : false,
      optional: false
      , type: "input"
      , value: github
      , options: {
        placeholder: "https://github.com/imabp"
      }

    },
    {
      question: "Whats your email address? ",
      cb: setEmail,
      status: email.trim() != "" ? true : false,
      optional: false
      , type: "input",
      value: email,
      options: {
        placeholder: "example@example.com"
      }
    },
    {
      question: "Your mobile number [Optional].",
      cb: setPhone,
      status: Phone.trim() != "" ? true : false,
      optional: true
      , type: "input"
      , value: Phone
      ,
      options: {
        placeholder: "XXXXXXXXXX"
      }
    },
    {
      question: "What's your LinkedIn URL (Ex: https://linkedin.com/in/username)",
      cb: setLinkedin,
      optional: false,
      status: linkedin.trim() != "" ? true : false
      , type: "input"
      , value: linkedin,
      options: {
        placeholder: "https://linkedin.com/in/username"
      }
    },
    {
      question: "Have you integrated / built APIs in your past projects?",
      cb: setBeginner,
      status: beginner,
      optional: false
      , type: "select"
      , value: beginner,
      options: ["Yes", "No"],
      defaultvalue: "No"

    },
    {
      question: "Is this your first hackathon?",
      cb: setFirsthackathon,
      status: firsthackathon,
      optional: false
      , type: "select"
      , value: firsthackathon,
      options: ["Yes", "No"],
      defaultvalue: "No"
    },
    {
      question: "Are you a Postman Student Expert?",
      cb: setPostmanstudentexpert,
      status: postmanstudentexpert,
      optional: false
      , type: "select"
      , value: postmanstudentexpert,
      options: ["Yes", "No"],
      defaultvalue: "No"
    },
    {
      question: "Are you a Student ?",
      cb: setStudent,
      status: student,
      optional: false
      , type: "select"
      , value: student,
      options: ["Yes", "No"],
      defaultvalue: "No"
    },
    {
      question: `What's your ${student ? "University/School" : "Company"} name?`,
      cb: setUniversity,
      status: university.trim() != "" ? true : false,
      optional: false
      , type: "input"
      , value: university,
      options: {
        placeholder: student ? "My University" : "The Company"
      }
    },
    {
      question: `What's your ${student ? "Year/Grade" : "role at company"}?`,
      cb: setYear,
      status: year.trim() != "" ? true : false,
      optional: false,
      type: "input",
      value: year,
      options: {
        placeholder: student ? "Freshman" : "Software Engineer"
      }
    },
    {
      question: `Any notes for our team [Optional] ?`,
      cb: setNotes,
      status: notes.trim() != "" ? true : false,
      optional: true,
      type: "input",
      value: notes,
      options: {
        placeholder: "Notes for our team"
      }
    }

  ]

  const stepup = (step, cb) => {
    cb(step + 1);
  }
  const stepdown = (step, cb) => {
    cb(step - 1);
  }
  const displayquestion = (step) => {
    return questions[step].question;
  }
  const acceptAnswer = (step, cb, value) => {
    cb(value);
    stepup(step);
  }
  const countStatusfunc = () => {
    let finalstatus = [];
    questions.forEach(i => {
      if (i.status || i.optional) {
        finalstatus.push(1);
      }
    })
    if (finalstatus.length === questions.length) {
      return true;
    }
    else {
      return false;
    }
  }

  const register = (step) => {
    if (step === questions.length - 1 && countStatusfunc()) {
      submit(payload, setSubmitstatus)
    }
  }
  const formatField = (question) => {
    const { type, value, options, cb } = question

    switch (type) {
      case 'input': return (<>
        <input onKeyDown={(e) => {
          if (e.keyCode === 13) {
            stepup(position, setPosition);
          }

        }} className=" w-10/12 p-4 mr-9"
          type="text"
          placeholder={options.placeholder}
          value={value}
          onChange={(e) => { cb(e.target.value) }} />
      </>);


      case 'select':
        const { defaultvalue } = question
        return (<>
          <select defaultValue={defaultvalue} value={value} onChange={(e) => { cb(e.target.value) }} className=" w-10/12 p-4 mr-9">
            <option value="">Select</option>
            {options.map(i => {
              return (<option key={i} value={i}>{i}</option>);
            })}
          </select>
        </>);

      default: return (<></>);
    }
  }
 
  return (


    <div className=" text-xl pl-6 md:pl-12 pt-10 h-screen">
      <div className="text-4xl">✏ Registrations </div><br />
      <div>
        {
          displayquestion(position).toLowerCase()
        }
        <br />
        <div className="w-full mt-5">
          {formatField(questions[position])}


        </div>


      </div>
      <button
        className="button mt-5 btn bg-blue-300"
        onClick={() => { position > 0 && stepdown(position, setPosition) }}
      >
        {"<"}
      </button>&nbsp;
      <button
        className="button mt-5 btn bg-blue-300"
        onClick={() => { position < questions.length - 1 ? stepup(position, setPosition) : register(position) }}
      >
        {position < questions.length - 1 ? ">" : countStatusfunc() ? "Register" : "You missed something"}
      </button>

      <div
        className="py-4 mt-12"
        style={{
          transition: "all 1s ease"
        }}
      >     {submitstatus.toLowerCase()} <br />
        {
          questions.map((question, index) => {
            return (<>

              <span style={{ cursor: "pointer",  }}
                className="text-base"
                onClick={() => { setPosition(index) }}>
                {question.optional ? (question.status ? "✅" : "⚪") : question.status ? "✅" : (position > index ? "❌" : "🟡")}
              </span>

            </>)
          }
          )}</div>
      <p className="text-base">


      </p></div>
  )
}

export default Registration
