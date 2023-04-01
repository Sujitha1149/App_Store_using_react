import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {tabDeatils, onClickingTabId, isActive} = this.props
    const {displayText, tabId} = tabDeatils
    const customebtn = isActive ? 'active' : ''

    const onTabIdClicked = () => {
      onClickingTabId(tabId)
    }

    return (
      <li>
        <button
          type="button"
          className={`button ${customebtn}`}
          onClick={onTabIdClicked}
        >
          {displayText}
        </button>
      </li>
    )
  }
}
export default TabItem
