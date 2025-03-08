// import React, { useState } from "react";

// const FormValidation = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     gender: "",
//     quantity: "",
//     date: "",
//   });
//   const handleOnchange = (event) => {
//     const { name, value } = event.target;
//     switch (name) {
//       case "name":
//         if (value === "" || value.length > 10) {
//           alert("please enter valid ", value);
//         }
//         break;
//       case "email":
//         if (value === "") {
//           alert("please enter valid ", value);
//         }
//         break;
//       case "gender":
//         if (value === "") {
//           alert("please enter valid ", value);
//         }
//         break;
//       case "quantity":
//         if (value === "") {
//           alert("please enter valid ", value);
//         }
//         break;
//       case "date":
//         if (value === "") {
//           alert("please enter valid ", value);
//         }
//         break;
//     }
//     console.log(name, "name", value, "value");
//     setFormData(prev=>({ ...prev, [name]: value }));
//     // setFormData(prev=>({ ...prev, [event.target.name]: event.target.value }));
//   };
//   const handleOnSubmit = (event) => {
//     event.preventDefault();
//     const { name, value } = event.target;

//     console.log(formData);
//   };
//   return (
//     <div>
//       enter your details here <br />
//       <form action="" onBlur={handleOnSubmit}>
//         <div>
//           <label htmlFor="name">Enter Your Name</label>
//           <input type="text" name="name" id="name" onChange={handleOnchange} />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="email">Eter Your Email</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             onChange={handleOnchange}
//           />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="male">Male</label>
//           <input
//             type="radio"
//             id="male"
//             name="gender"
//             value="male"
//             onChange={handleOnchange}
//           />

//           <label htmlFor="female">Female</label>
//           <input
//             type="radio"
//             id="female"
//             name="gender"
//             value="female"
//             onChange={handleOnchange}
//           />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="date">select Date of Birth</label>
//           <input type="date" name="date" id="date" onChange={handleOnchange} />
//         </div>
//         <div>
//           <br />
//           <select name="quantity" id="quantity" onChange={handleOnchange}>
//             <option value="">Select</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//           </select>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormValidation;
import React, { useState } from "react";

const MultipleFieldForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    quantity: "",
  });

  const [errors, setErrors] = useState({}); // To store validation errors

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error for the field being updated
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Gender validation
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    // Quantity validation
    if (!formData.quantity) {
      newErrors.quantity = "Quantity is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("Form submitted successfully:", formData);
      // You can proceed with form submission (e.g., API call)
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div>
      Enter your details here <br />
      <form action="" onSubmit={handleOnSubmit}>
        {/* Name Field */}
        <div>
          <label htmlFor="name">Enter Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleOnchange}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>
        <br />

        {/* Email Field */}
        <div>
          <label htmlFor="email">Enter Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleOnchange}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <br />

        {/* Gender Field */}
        <div>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleOnchange}
          />

          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleOnchange}
          />
          {errors.gender && <span style={{ color: "red" }}>{errors.gender}</span>}
        </div>
        <br />

        {/* Quantity Field */}
        <div>
          <label htmlFor="quantity">Select Quantity</label>
          <select
            name="quantity"
            id="quantity"
            value={formData.quantity}
            onChange={handleOnchange}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          {errors.quantity && (
            <span style={{ color: "red" }}>{errors.quantity}</span>
          )}
        </div>
        <br />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MultipleFieldForm;
