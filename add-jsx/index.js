import { h, app } from 'hyperapp'

const view = () => (
  <div>
    <h1>Hyperapp is sweet!</h1>
  </div>
)

const main = app({}, {}, view, document.body)
