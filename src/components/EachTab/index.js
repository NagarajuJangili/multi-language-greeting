import './index.css'

const EachTab = props => {
  const {eachTab, clickTab, activeId} = props
  const {buttonText, id} = eachTab

  const buttonStyle = id === activeId ? 'button-fill' : 'button-outline'

  const clickOneTab = () => {
    clickTab(id)
  }

  return (
    <li className="each-tab">
      <button className={buttonStyle} type="button" onClick={clickOneTab}>
        {buttonText}
      </button>
    </li>
  )
}

export default EachTab
