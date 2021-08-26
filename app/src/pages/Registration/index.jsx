import React from 'react'
import "./index.css";
const Registration = () => {
    return (
    <div class="container">
    <div class="title">Registration</div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name*</span>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div class="input-box">
            <span class="details">Github*</span>
            <input type="url" placeholder="Enter your username" required />
          </div>
          <div class="input-box">
            <span class="details">Email*</span>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div class="input-box">
            <span class="details">Phone Number*</span>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="Enter your number" required/>
          </div>
          <div class="input-box">
            <span class="details">Linkedin*</span>
            <input type="url" placeholder="Enter your Linkedin " required />
          </div>
          <div class="input-box">
            <span class="details">Notes</span>
            <input type="text" placeholder="Write notes for our staff" required/>
          </div>
        </div>
        <div class="details">
          <input type="radio" name="bg" id="dot-1" />
          <input type="radio" name="bg" id="dot-2" />
          <span class="g-title">Beginner</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="bg">True</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="bg">False</span>
          </label>
          </div>
        </div>
        <div class="details">
          <input type="radio" name="pse" id="dot-3" />
          <input type="radio" name="pse" id="dot-4" />
          <span class="g-title">Postman Student Expert</span>
          <div class="category">
            <label for="dot-3">
            <span class="dot three"></span>
            <span class="pse">True</span>
          </label>
          <label for="dot-4">
            <span class="dot four"></span>
            <span class="pse">False</span>
          </label>
          </div>
        </div>
        <div class="details">
          <input type="radio" name="psl" id="dot-5" />
          <input type="radio" name="psl" id="dot-6" />
          <span class="g-title">Postman Student Leader</span>
          <div class="category">
            <label for="dot-5">
            <span class="dot five"></span>
            <span class="psl">True</span>
          </label>
          <label for="dot-6">
            <span class="dot six"></span>
            <span class="psl">False</span>
          </label>
          </div>
        </div>
        <div class="details">
          <input type="radio" name="fh" id="dot-7" />
          <input type="radio" name="fh" id="dot-8" />
          <span class="g-title">First Hackathon</span>
          <div class="category">
            <label for="dot-7">
            <span class="dot seven"></span>
            <span class="fh">True</span>
          </label>
          <label for="dot-8">
            <span class="dot eight"></span>
            <span class="fh">False</span>
          </label>
          </div>
        </div>
        <button className="button">
          <input type="submit" value="Register" />
        </button>
      </form>
    </div>
  </div>
    )
}

export default Registration
