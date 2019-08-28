import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.changeIndex = this.changeIndex.bind(this);
    this.showTab = this.showTab.bind(this);
  }

  changeIndex(e, idx) {
    e.preventDefault();
    this.setState({ index: idx });
    console.log(this.state);
  }

  showTab(idx){
    if(this.state.index === idx){
      return 'show';
    } else {
      return "hide";
    }
  }
  
  render() {
    const tabsContent = [
      {title: "one", content: "I am first pane!!"},
      {title: "two", content: "I am second pane!!"},
      {title: "three", content: "I am third pane!!"}
    ]



    return (
      <div className="content-container">

      <h1 className="clock-header">Tabs</h1>

      <ul className="tabs-container"> 
        { 
          tabsContent.map( (tab, idx) => {
            return <div key={ idx }>
              <h1 onClick={(e) => {this.changeIndex(e, idx)}}>{tab.title}</h1>
              <article className={this.showTab(idx)}>{tab.content}</article>
            </div>
          }) 
        }
      </ul>

      </div>
    )
  }
}

export default Tabs