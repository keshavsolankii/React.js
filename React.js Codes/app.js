const heading1 = React.createElement("h1", {
    id : "firstHeading"
}, "Heading 1");

const heading2 = React.createElement("h2", {
    id : "secondHeading"
}, "Heading 2");

const container = React.createElement("div", {
  id : "firstdiv"
}, [heading1, heading2]);

// Putting the heading in root id of div tag
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);