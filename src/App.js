import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Page from './Page'
import Links from './Links'
import Header from './Header'
import {uuid} from './uuid'
import bookmarks from "./data"
// import Posts from "./Posts"
import Hidden from './Hidden'
import Data from "./data.json";

function App() {

  // let userIds = [...(bookmarks.map(bookmark=>bookmark.userId))]
  // console.log(userIds)
  // console.log(bookmarks)

  let bookmarks = [
    {url:'http://google.com', text: "Google"},
    {url:'http://digitalcrafts.com', text: "Digital Crafts"},
    {url:'http://godaddy.com', text: "Godaddy"},

]

let footerItems = [
  {img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw2T6paxyUNtXZ0wMAuHw1Pw&ust=1597340205683000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOioyZSalusCFQAAAAAdAAAAABAD', atl:'this is the alt texts', description:'this is img '},
  {img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom-photo&psig=AOvVaw2T6paxyUNtXZ0wMAuHw1Pw&ust=1597340205683000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOioyZSalusCFQAAAAAdAAAAABAI', atl:'this is the alt texts', description:'this is img '},
  {img:'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.mandysam.com%2Frandom.html&psig=AOvVaw2T6paxyUNtXZ0wMAuHw1Pw&ust=1597340205683000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOioyZSalusCFQAAAAAdAAAAABAO', atl:'this is the alt texts', description:'this is img '},

]

  // let links = [
  //   <Link key={1} url="http://google.com" text="google"/>,
  //   <Link key={2} url="http://google.com" text="another google"/>,
  //   <Link key={3} url="http://google.com" text="extra google"/>

  // ]

  return (
    <React.Fragment>

      <Header pageName="This a page name">
      <Links />
      {/* {links} */}

      {/* {bookmarks.map((bookmark,idx)=>{
        console.log(bookmark);
        bookmark.addedItem = new Date().
        return <Link text={bookmark.text} url={bookmark.url} />
      })} */}

    </Header>
    

      <header><h1>This is the header</h1></header>

    <Page theDate={new Date().toDateString()}>
<div>Which comes first?</div>
<div>Please show up?</div>

      </Page>

      {/* <Footer>
      {footerItems.map((footerItems.idx)=>{
        console.log(footerItems);
        footerItems.addedItem = new Date(),
        return <Footer />
      })}
      </Footer> */}

    <div className="posts">

    {Data.map(post =>{
      return (
        <div className="posts">
        <h1>{post.id}</h1>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        </div>
      )
    })}
    </div>

    {/* <Hidden /> */}

    </React.Fragment>
  );
}

export default App;
