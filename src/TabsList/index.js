import './index.css'

const TabItems = props => {
  const {details, getTabId} = props
  const {displayText, tabId} = details
  const clickTabItem = () => {
    getTabId(tabId)
  }
  return (
    <li>
      <button onClick={clickTabItem} className="tab-btn" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
