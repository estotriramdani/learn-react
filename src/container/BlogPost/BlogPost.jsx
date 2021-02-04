import React, { Component } from "react";
import Post from "../../component/Post/Post";
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((res) => {
    //     this.setState({
    //       post: res,
    //     });
    //   });
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({
        post: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <p className="section-title">Blog Post</p>
        {this.state.post.map((post) => {
          return <Post key={post.id} title={post.title} desc={post.body} />;
        })}
      </div>
    );
  }
}

export default BlogPost;
