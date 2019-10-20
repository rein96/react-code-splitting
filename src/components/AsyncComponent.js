import React, { Component } from 'react';

export default function asyncComponent(importComponent) {
    // console.log(importComponent)     // From const AsyncPage2 = AsyncComponent( () => import('./components/Page2') )
    // importComponent = Page2 or Page3
    class AsyncComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                component : null
            }
        }

        async componentDidMount() {

            // const { default: component } = await importComponent()    //Page2 or Page3
            // this.setState({
            //     component: component
            // })

            const component = await importComponent()
            this.setState({
                component: component.default
            })
        }
        
        render() {
            const COMPONENT = this.state.component;
            // console.log(COMPONENT)   // REAL Page2 / Page3 Component 
            return COMPONENT ? <COMPONENT {...this.props} /> : null
            // ...this.props = get all previous this.props
            // null = not render anything
        }
    }

    return AsyncComponent;
}