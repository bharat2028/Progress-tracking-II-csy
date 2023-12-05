import axios from 'axios';
// Create an Axios instance with a base URL and default headers
const apiClient = axios.create({
 baseURL: 'https://api.example.com',
 headers: {
 'Content-Type': 'application/json',
 'Authorization': 'Bearer your-token'
 }
});
// Add a request interceptor
apiClient.interceptors.request.use(config => {
 // Do something before request is sent
 // For example, adding a token or setting other headers
 return config;
}, error => {
 // Do something with request error
 return Promise.reject(error);
});
// Add a response interceptor
apiClient.interceptors.response.use(response => {
 // Any status code within the range of 2xx causes this function to trigger
 return response;
}, error => {
 // Any status codes outside the range of 2xx cause this function to 
trigger
 // Do something with response error
 return Promise.reject(error);
});
// Use the custom Axios instance in a React component
class App extends React.Component {
 componentDidMount() {
 // Use the instance to make a GET request
 apiClient.get('/users')
 .then(response => {
 console.log(response.data);
 })
 .catch(error => {
 console.error('Error fetching users', error);
 });
 }
 render() {
 // Render your component
 }
}
export default App;