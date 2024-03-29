import React, { Suspense } from 'react';
import './App.css';

// To code splitting (Part 2) -> Page2 and Page3 are not imported manually on here
import Page1 from './components/Page1'
// import Page2 from './components/Page2'
// import Page3 from './components/Page3'

// Cleaner Code Splitting (Part 3)
// import AsyncComponent from './components/AsyncComponent'

// implement React.lazy (Part 4)
const Page2Lazy = React.lazy( () => import('./components/Page2') )
const Page3Lazy = React.lazy( () => import('./components/Page3') )

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route : 'page1',
      component : null
    }
  }

  onRouteChange = async (route) => {
    // No Code splitting :
    this.setState({ route })

    // With code splitting :
    // if (route === 'page1') {
    //   this.setState({ route })
    // }
    // else if ( route === 'page2' ) {
    //   var Page2 = await import('./components/Page2')
    //   console.log(Page2)   // Page2 = Module { default : ( ENTIRE CODE COMPONENT ) }
    //   this.setState({ route : route, component : Page2.default })
    // }
    // else if ( route === 'page3' ) {
    //   var Page3 = await import('./components/Page3')
    //   console.log(Page3.default)  // ALL CODE COMPONENT
    //   this.setState({ route : route, component : Page3.default })
    // }

  }

  render(){

    // No Code Spliting Method
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // }
    // if (this.state.route === 'page2') {
    //   return <Page2 onRouteChange={this.onRouteChange} />
    // }
    // if (this.state.route === 'page3') {
    //   return <Page3 onRouteChange={this.onRouteChange} />
    // }

    // Splitting 1st way
    // if(this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange} />
    //   // this.state.component = Page2.default || Page3.default
    // }

    // Splitting 2nd way (Part 3)
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // }
    // if (this.state.route === 'page2') {
    //   const AsyncPage2 = AsyncComponent( () => import('./components/Page2') )
    //   console.log(AsyncPage2) // class AsyncComponent extends ...
    //   return <AsyncPage2 onRouteChange={this.onRouteChange} />
    // }
    // if (this.state.route === 'page3') {
    //   const AsyncPage3 = AsyncComponent( () => import('./components/Page3') )
    //   return <AsyncPage3 onRouteChange={this.onRouteChange} />
    // }

    // React.lazy method (Part 4)
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    }
    if (this.state.route === 'page2') {
      return (
        <Suspense fallback={<h1> Page 2 | Loading . . . </h1>}>
          <Page2Lazy onRouteChange={this.onRouteChange} />\
        </Suspense>
      )
    }
    if (this.state.route === 'page3') {
      return (
        <Suspense fallback={<h1> Page 3 | Loading . . . </h1>}>
          <Page3Lazy onRouteChange={this.onRouteChange} />\
        </Suspense>
      )
    }
  };

}

export default App;
