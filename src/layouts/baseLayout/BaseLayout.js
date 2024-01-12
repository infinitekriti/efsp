import { Fragment } from "react";

const BaseLayout = (props) => {
    const[Header ,PageLayout,Footer] = props.children;
    const {className} = props
  return (
    <Fragment>
        <section className = {`${className ? className : ""}`}>
            {Header}
            {PageLayout}
            {Footer}
        </section>
    </Fragment>
  )
}

export default BaseLayout