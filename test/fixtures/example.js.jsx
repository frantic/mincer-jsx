var views = {
  HelloWorld: React.createClass({
    render: function() {
      return <div>Hello, world!</div>;
    }
  })
}

React.renderComponent(<views.HelloWorld />, document.body);
