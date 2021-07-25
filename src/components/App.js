import React from "react";

import ToolBar from "./ToolBar";
import Previewer from "./Previewer";
import "../styles/App.scss";

class App extends React.Component {
  state = { editorText: placeholder };

  handleInput = (e) => {
    console.log("lo");
    this.setState({ editorText: e.target.value });
  };

  render() {
    return (
      <div className="app">
        <div className="top">
          <h1>Markdown</h1>
        </div>
        <div className="editor wrapper">
          <div className="header">
            <h2>Editor</h2>
            <div className="toolbar">
              <ToolBar />
            </div>
          </div>

          <textarea
            id="editor"
            defaultValue={this.state.editorText}
            onKeyUp={(e) => this.handleInput(e)}
            placeholder="Type your text here..."
          ></textarea>
        </div>
        <div className="previewer">
          <div className="header">
            <h2>Previewer</h2>
          </div>

          <div style={{ overflowY: "scroll", height: `70vh` }} id="preview">
            <Previewer className="wrapper" editorText={this.state.editorText} />
          </div>
        </div>
      </div>
    );
  }
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, 
\`
~~~html
<div></div>
~~~
\`
, with a backtick ,followed by ~~~language name ,and then the code
,and then ~~~ and a backtick to close it.

\`
// this is multi-line code:
~~~js
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
~~~
\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;
