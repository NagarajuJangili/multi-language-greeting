import './index.css'

const ShowGreeting = props => {
  const {greeting} = props
  const {imageUrl, imageAltText} = greeting
  return <img src={imageUrl} alt={imageAltText} className="greeting-img" />
}

export default ShowGreeting
