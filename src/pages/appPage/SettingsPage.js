export default function SettingsPage() {
  return (
    <div className='pages settings-page'>
      <div className="header">
        <span>Settings</span>
      </div>
      <div className="content">
        <h2>Display options</h2>
        <select name="" id="">
          <option value="private">private</option>
          <option value="public">public</option>
        </select>
        <div className="setting-options">
          <label htmlFor="">Add new items to bottom</label>
          <input type="checkbox" />
        </div>
        <div className="setting-options">
          <label htmlFor="">Add new items to bottom</label>
          <input type="checkbox" />
        </div>
        <div className="setting-options">
          <label htmlFor="">Add new items to bottom</label>
          <input type="checkbox" />
        </div>
        <div className="setting-options">
          <span>theme</span>
          <select name="" id="">
            <option value="private">system default</option>
            <option value="public">Light mode</option>
            <option value="public">Dark mode</option>
          </select>
        </div>
        <h2>Sharing</h2>
        <div className="setting-options">
          <label htmlFor="">Enable sharing</label>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  )
}
