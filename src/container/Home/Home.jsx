import React, { Component } from "react";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";
// import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
import Product from "../Product/Product";

class Home extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 15000);
  }

  render() {
    return (
      <div>
        {/* <p>Youtube Component</p>
        <hr />
        <YouTubeComp time="7.12" title="Judul Satu" desc="2x ditonton" />
        <YouTubeComp time="18.12" title="Judul Dua" desc="3x ditonton" />
        <YouTubeComp time="28.12" title="Judul Tiga" desc="4x ditonton" />
        <YouTubeComp time="16.12" title="Judul Empat" desc="5x ditonton" />
        <YouTubeComp /> */}
        {/* <p>Counter</p>
        <hr />
        <Product /> */}
        {/* <p>Life Cycle Comp</p>
        <hr />
        {this.state.showComponent ? <LifeCycleComp /> : null} */}
        <p>BlogPost</p>
        <hr />
        <BlogPost />
      </div>
    );
  }
}

export default Home;
