import './index.css'

const ThumbNail = props => {
  const {Details, generateRandomImg} = props
  const {thumbnailUrl, imageUrl} = Details
  const sendId = () => {
    generateRandomImg(imageUrl)
  }
  return (
    <li>
      <button onClick={sendId} className="thumb-img-btn" type="button">
        <img className="thumb-img" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ThumbNail
