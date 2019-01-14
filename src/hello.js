/* global React */

export default class Hello extends React.Component {
    constructor() {
        super();
        this.count = 0;
        this.makeMessage = (cnt) => { return { message: "my friend (" + cnt + ")!" } };
        this.state = { message: "..."}
        this.updateMessage = (cnt) => {
          console.log(this.makeMessage(cnt));
          this.count = cnt + 1;
          this.setState(this.makeMessage(cnt));
        }
    }
    render() {
         return (
           <div>
             <h1>Hello {this.state.message}!</h1>
             <button onClick={() => this.updateMessage(this.count)}>Click me!</button>
           </div>
        )
    }
}
