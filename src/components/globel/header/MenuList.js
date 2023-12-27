
import { Link } from "react-router-dom"

const links = [
  {
    name: "Dashboard",
    pathName :"/",
    to: "/"
},
{
  name: "Reports",
  pathName :"/",
  to: "/"
 },
 {
  name: "Allocations",
  pathName :"/",
  to: "/"
 },
 {
  name: "Board Plan",
  pathName :"/",
  to: "/"
 },
 {
  name: "Reallocation",
  pathName :"/",
  to: "/"
 },
 {
  name: "Final Reports",
  pathName :"/",
  to: "/"
 },
 {
  name: "Variances",
  pathName :"/",
  to: "/"
 },
 {
  name: "Compilence",
  pathName :"/",
  to: "/"
 },
 {
  name: "Payment",
  pathName :"/",
  to: "/"
 },
 {
  name: "Masters",
  pathName :"/",
  to: "/"
 },
 {
  name: "Holds",
  pathName :"/",
  to: "/"
 },
 {
  name: "System",
  pathName :"/",
  to: "/"
 },
 
]
const MenuList = () => {

return (
    <ul className="headerNavin">
      {links?.map((item,i) =>{
        return(
          <li key={i}>
              <Link to={item?.pathName}>{item?.name}</Link>
          </li>
        )})}
  </ul>
  )
}

export default MenuList