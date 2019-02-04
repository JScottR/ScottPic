import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import Gallery from "./Components/gallery";
import About from "./Components/about";
import Contact from "./Components/contact";
import Blog from "./Components/blog";
import error from "./Components/error";
import Navigation from "./Components/navigation";





class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navigation/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact}/>
          <Route path="/blog" component={Blog}/>
          <Route component={error}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
