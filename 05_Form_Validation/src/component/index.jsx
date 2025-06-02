import { useState } from "react";
import "./style.css";

const index = () => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interests: [],
    dob: "",
  };

  const [formData, setformData] = useState(initialFormState);

  const [fNameError, setfNameError] = useState("");
  const [lNameError, setlNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNoError, setphoneNoError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [confirmPasswordError, setconfirmPasswordError] = useState("");
  const [ageError, setageError] = useState("");
  const [genderError, setgenderError] = useState("");
  const [interestError, setinterestError] = useState("");
  const [dobError, setdobError] = useState("");

  const validateForm = () => {
    if (!formData.firstName) {
      setfNameError("*First Name is required");
      return false;
    } else {
      setfNameError("");
    }

    if (!formData.lastName) {
      setlNameError("*Last Name is required");
      return false;
    } else {
      setlNameError("");
    }

    if (!formData.email) {
      setEmailError("*Email is required");
      return false;
    } else if (
      !formData.email.includes("@") ||
      !formData.email.includes(".com")
    ) {
      setEmailError("*Invalid email");
      return false;
    } else {
      setEmailError("");
    }

    if (!formData.phoneNumber) {
      setphoneNoError("*Phone number is required");
      return false;
    } else if (formData.phoneNumber.length !== 10) {
      setphoneNoError("*Phone number must be 10 digits");
      return false;
    } else {
      setphoneNoError("");
    }

    if (!formData.password) {
      setpasswordError("*Password is required");
      return false;
    } else if (formData.password.length < 6) {
      setpasswordError("*Password must be at least 6 characters");
      return false;
    } else {
      setpasswordError("");
    }

    if (!formData.confirmPassword) {
      setconfirmPasswordError("*Please confirm password");
      return false;
    } else if (formData.confirmPassword !== formData.password) {
      setconfirmPasswordError("*Passwords do not match");
      return false;
    } else {
      setconfirmPasswordError("");
    }

    if (!formData.age) {
      setageError("*Age is required");
      return false;
    } else if (formData.age < 18) {
      setageError("*Must be 18 or older");
      return false;
    } else {
      setageError("");
    }

    if (!formData.gender) {
      setgenderError("*Please select a gender");
      return false;
    } else {
      setgenderError("");
    }

    if (formData.interests.length === 0) {
      setinterestError("*Please select at least one interest");
      return false;
    } else {
      setinterestError("");
    }

    if (!formData.dob) {
      setdobError("*Date of birth is required");
      return false;
    } else {
      setdobError("");
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("Form successfully submited", formData);
      // Reset form data to initial state
      setformData(initialFormState);
    } else {
      console.log("Form Validation Failed!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedInterests = [...formData.interests];
    if (checked) {
      updatedInterests.push(name);
    } else {
      updatedInterests = updatedInterests.filter(
        (interests) => interests !== name
      );
    }
    setformData({
      ...formData,
      interests: updatedInterests,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">
          First Name: <span> {!formData.firstName ? fNameError : ""}</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
      </div>
      <div>
        <label htmlFor="lastName">
          Last Name: <span> {!formData.lastName ? lNameError : ""}</span>
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </div>
      <div>
        <label htmlFor="email">
          Email: <span> {!formData.email ? emailError : ""}</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      <div>
        <label htmlFor="phone">
          Phone Number:
          <span> {!formData.phoneNumber ? phoneNoError : ""}</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
      </div>
      <div>
        <label htmlFor="password">
          Password: <span> {!formData.password ? passwordError : ""}</span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">
          Confirm Password:
          <span> {!formData.confirmPassword ? confirmPasswordError : ""}</span>
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
      </div>
      <div>
        <label htmlFor="age">
          Age: <span> {!formData.age ? ageError : ""}</span>
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
        />
      </div>
      <div>
        <label htmlFor="gender">
          Gender: <span> {!formData.gender ? genderError : ""}</span>
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label>
          Interests: <span> {formData.interests.length === 0 ? interestError : ""}</span>
        </label>
        <div>
          <div>
            <input
              type="checkbox"
              id="coding"
              checked={formData.interests.includes("coding")}
              onChange={handleCheckboxChange}
              name="coding"
            />
            <label htmlFor="coding">Coding</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="sports"
              checked={formData.interests.includes("sports")}
              onChange={handleCheckboxChange}
              name="sports"
            />
            <label htmlFor="sports">Sports</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="reading"
              checked={formData.interests.includes("reading")}
              onChange={handleCheckboxChange}
              name="reading"
            />
            <label htmlFor="reading">Reading</label>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="dob">
          Date of Birth: <span> {!formData.dob ? dobError : ""}</span>
        </label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          placeholder="Date of Birth"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default index;
