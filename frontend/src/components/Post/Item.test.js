import { shallow, mount, render } from "enzyme";
import { postsFetch, votePost, postsFetchByCategory, deletePost } from "./../../actions/posts";
import MockRouter from "react-mock-router";
import { Route } from "react-router-dom"
// import "jest-localstorage-mock";
// import "match-media";
import React from "react";
import ReactDOM from "react-dom";
import ItemPost from "./Item";

const push = jest.fn();

const Post = {
  id: "8xf0y6ziyjabvozdd253nd",
  timestamp: 1467166872634,
  title: "Udacity is the best place to learn React",
  body: "Everyone says so after all.",
  author: "thingtwo",
  category: "react",
  voteScore: 6,
  deleted: false,
  commentCount: 2
}

const wrapper = render(
  <MockRouter push={push}>
    <Route render={(props) => (
      <ItemPost {...props} post={Post} />
    )} />
  </MockRouter>
)

const incrementVote = () => (
  Post.voteScore++
)

const decrementVote = () => (
  Post.voteScore--
)

// <ItemPost
//   key={post.id}
//   post={post}
//   votePost={(id, option) => this.votePost(id, option)}
//   deletePost={id => this.deletePost(id)}
// />

describe('Post Item', () => {
  
  it("should render the post title", () => {
    const header = wrapper.find(".header").length;
    expect(header).toEqual(1);
  });

  it("should render the post metadata", () => {
    const header = wrapper.find(".meta").length;
    expect(header).toEqual(1);
  });

  it("should render the post description", () => {
    const description = wrapper.find(".description").length;
    expect(description).toEqual(1);
  });
  
  it("should render the edit button", () => {
    const editBtn = wrapper.find(".edit-post").length;
    expect(editBtn).toEqual(1);
  });

  it("should render the delete button", () => {
    const deleteBtn = wrapper.find(".delete-post").length;
    expect(deleteBtn).toEqual(1);
  });

  it("should render the increment button", () => {
    const incrementBtn = wrapper.find(".increment-post").length;
    expect(incrementBtn).toEqual(1);
  });

  it("should render the decrement button", () => {
    const decrementBtn = wrapper.find(".decrement-post").length;
    expect(decrementBtn).toEqual(1);
  });

  it("should render the vote score", () => {
    const voteScore = wrapper.find(".vote-score").length;
    expect(voteScore).toEqual(1);
  });
  
  it("should render the comments count", () => {
    const commentsCount = wrapper.find(".comment").length;
    expect(commentsCount).toEqual(1);
  });

  it('should increment a count', () => {
    const wrapper2 = shallow(
      <ItemPost post={Post} votePost={() => incrementVote()} />
    )
    const incrementBtn = wrapper2.find(".increment-post");
    
    incrementBtn.simulate('click')
    expect(Post.voteScore).toEqual(7)
  });

  it('should decrement a count', () => {
    const wrapper2 = shallow(
      <ItemPost post={Post} votePost={() => decrementVote()} />
    )
    const decrementBtn = wrapper2.find(".increment-post");

    decrementBtn.simulate('click')
    decrementBtn.simulate('click')
    expect(Post.voteScore).toEqual(5)
  });
});