import { Fragment } from "react";

const BaseLayout = (props) => {
    const[Header ,PageLayout] = props.children;
    const {className} = props
  return (
    <Fragment>
        <section className = {`${className ? className : ""}`}>
            {Header}
            {PageLayout}
        </section>
    </Fragment>
  )
}

export default BaseLayout