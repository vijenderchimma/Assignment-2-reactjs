// Write your code here
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <div className="">
    <Navbar />
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      className="iamge"
      alt="not-found"
    />
    <h1 className="">Lost Your Way?</h1>
    <p className="">We cannot seem to find the page you are looking for</p>
  </div>
)

export default NotFound
