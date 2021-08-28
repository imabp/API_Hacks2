import axios from "axios";
const URI = "https://api.apihacks.co/register";
const submit = (data, cb, errcb) => {
  const validation = validator(data);
  if (validation === true || validation[0] !== false) {
    if (data.notes === undefined) {
      data.notes = "";
    }
    if (data.mobile === undefined) {
      data.mobile = "";
    }
    const payload = {
      notes: data.notes == "" ? "NA" : data.notes,
      name: data.name,
      email: data.email,
      linkedin: data.linkedin.trim(),
      student: {
        status: data.student.status == "Yes" ? true : false,
        university: data.student.university,
        year: data.student.year,
      },
      mobile: data.mobile.trim() == "" ? "NA" : data.mobile,
      github: data.github.trim(),
      beginner: data.beginner == "Yes" ? false : true,
      postman: {
        studentExpert: data.studentExpert == "Yes" ? true : false,
        studentLeader: false,
      },
      firstHackathon: data.firstHackathon == "Yes" ? true : false,
    };

    try {
      axios
        .post(URI, payload)
        .then((res) => {
          if (res.status === 200) {
            cb(true);
            errcb([false, ""]);
            return res.status;
          }
        })
        .catch((err) => {
             cb(false);
          errcb([true, "Internal Error: Report us at staff@apihacks.co"]);
          return 500;
        });
    } catch (err) {
        cb(false);
      errcb([true, "Check Internet Connection"]);
      return 404;
    }
  } else {
      cb(false);
    errcb([true, `Invalid: ${validation[1]}`]);
  }
};

function validator(data) {
  let { github, linkedin, email, name, notes } = data;
  github = github.trim();
  linkedin = linkedin.trim();
  email = email.trim();
  name = name.trim();
  if (data.notes === undefined) {
    notes = "";
  }
  notes = notes.trim();
  const githubVal = ValidateGithub(github);
  const linkedinVal = ValidateLinkedIn(linkedin);
  const emailVal = ValidateEmail(email);
  name = ValidateName(data.name);
  notes = ValidateMessage(data.notes);

  return githubVal
    ? linkedinVal
      ? emailVal
        ? name
          ? notes
            ? true
            : [false, "notes"]
          : [false, "name"]
        : [false, "email"]
      : [false, "linkedin"]
    : [false, "github"];
  // return (githubVal && linkedinVal && emailVal && name && notes)
}

function ValidateGithub(profile) {
  if (
    /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]{1,25}$/gim.test(profile)
  ) {
    return true;
  }
  return false;
}

function ValidateLinkedIn(profile) {
  if (
    /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com\/in\/[A-z0-9_-]+\/?(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/?.test(
      profile
    )
  ) {
    return true;
  }
  return false;
}

function ValidateEmail(mail) {
  if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      mail
    )
  ) {
    return true;
  }
  return false;
}
function ValidateName(name) {
  if (
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
      name
    )
  ) {
    return true;
  }
  return false;
}
function ValidateMessage(message) {
  if (/^[a-zA-Z ]*$/.test(message)) {
    return true;
  }
  return false;
}
function ValidateMobileNumber(number) {
  if (/^\d+$/.test(number) && number.length == 10) {
    return true;
  }
  return false;
}
export default submit;
