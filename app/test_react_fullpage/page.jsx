"use client";
import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";

const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

const originalColors = [
  "blue",
  "#0798ec",
  "#fc6c7c",
  "#435b71",
  "orange",
  "blue",
  "purple",
  "yellow",
];

class ReactFullPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: "Section 1",
        },
        {
          text: "Section 2",
        },
        {
          text: "Section 3",
        },
      ],
    };
  }

  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    // Perform actions based on the event
  }

  render() {
    const { fullpages, sectionsColor } = this.state;

    return (
      <div className="App">
        <Head>
          <title>My styled page</title>
        </Head>

        <ReactFullpage
          navigation
          // pluginWrapper={pluginWrapper}
          // onLeave={this.onLeave.bind(this)}
          // scrollHorizontally={true}
          // sectionsColor={sectionsColor}
          render={(comp) =>
            console.log("render prop change") || (
              <ReactFullpage.Wrapper>
                {fullpages.map(({ text }) => (
                  <div key={text} className="section">
                    <h1>{text}</h1>
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            )
          }
        />
      </div>
    );
  }
}

export default ReactFullPage;
