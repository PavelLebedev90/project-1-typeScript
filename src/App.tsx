import React from 'react';
import './App.css';



import Header from "./header";
import Technologies from "./technologies";
import Accordion from "./components/Accordion";
import Stars from "./components/Stars";



const App = () => {
  return (
      <div>
          <PageTitle title = "This is App component"/>
          <PageTitle title = "Users"/>
        <Header/>
        <Technologies/>
          <Stars value = {3}/>
          <Accordion titleValue = "Menu" collapsed = {false}/>
          <Accordion titleValue = "MenuUsers" collapsed={true}/>
          <Stars value = {0}/>
          <Stars value = {1}/>
          <Stars value = {2}/>
          <Stars value = {3}/>
          <Stars value = {4}/>
          <Stars value = {5}/>
      </div>
  )
}

type PageTitlePropsType = {
    title: string,
}

const PageTitle = (props: PageTitlePropsType) => {
    return (
        <h1>{props.title}</h1>
    );
}





export default App;
