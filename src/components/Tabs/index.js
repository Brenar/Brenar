import {
  Link,
  Switch,
  Route
} from "react-router-dom"

const Tab = ({routes}) => {

  return (
    <div>
      {routes && routes.length && routes.map((item, key) => <div key={key}><Link to={`/${item.route}`}>{item.route}</Link></div>)}
      <Switch>
        {routes && routes.length && routes.map((item, key) => <Route key={key} path={`/${item.route}`} component={item.component}/>)}
      </Switch>
    </div>
  )
}


export default Tab