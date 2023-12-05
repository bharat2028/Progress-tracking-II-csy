import React, { useState } from 'react';
function Form() {
 const [form, setForm] = useState({
 name: '',
 email: '',
 password: '',
 errors: {}
 });
 const validateForm = () => {
 let isValid = true;
 let errors = {};
 if (form.name.trim().length < 3) {
 errors.name = 'Name must be at least 3 characters long';
 isValid = false;
 }
 if (!/\S+@\S+\.\S+/.test(form.email)) {
 errors.email = 'Email address is invalid';
 isValid = false;
 }
 if (form.password.length < 8) {
 errors.password = 'Password must be at least 8 characters long';
 isValid = false;
 }
 setForm({ ...form, errors });
 return isValid;
 };
 const handleChange = (e) => {
 const { name, value } = e.target;
 setForm({ ...form, [name]: value });
 };
 const handleSubmit = (e) => {
 e.preventDefault();
 const isValid = validateForm();
 if (isValid) {
 console.log('Form is valid! Submitting...', form);
 // Handle form submission here (e.g. call an API)
 }
 };
 return (
 <form onSubmit={handleSubmit}>
 <div>
 <label>Name:</label>
 <input type="text" name="name" value={form.name}
onChange={handleChange} />
 {form.errors.name && <p>{form.errors.name}</p>}
 </div>
 <div>
 <label>Email:</label>
 <input type="email" name="email" value={form.email}
onChange={handleChange} />
 {form.errors.email && <p>{form.errors.email}</p>}
 </div>
 <div>
 <label>Password:</label>
 <input type="password" name="password" value={form.password}
onChange={handleChange} />
 {form.errors.password && <p>{form.errors.password}</p>}
 </div>
 <button type="submit">Submit</button>
 </form>
 );
}
export default Form;