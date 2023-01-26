### componentDidMount()

componentDidMount() is a lifecycle method in React that is called after a component has been added to the DOM. It is typically used to perform any additional setup or initialization that the component needs after it has been rendered.

Some common use cases for componentDidMount() include:

- Fetching data from an API: After a component is rendered, it can use componentDidMount() to make a request to an API to fetch data that it needs to display.
- Setting up event listeners: If a component needs to listen for events, it can use componentDidMount() to set up those listeners.
- Initializing third-party libraries: If a component needs to use a third-party library, it can use componentDidMount() to initialize that library.
- Creating timers or intervals: If a component needs to run a function at regular intervals or after a certain amount of time, it can use componentDidMount() to set up those timers or intervals.

### componentDidUpdate()

componentDidUpdate() is a lifecycle method in React that is called after a component's props or state have been updated and the component has been re-rendered. It is typically used to perform any additional updates or calculations that the component needs after it has been updated.

Some common use cases for componentDidUpdate() include:

- Making network requests based on prop changes: If a component needs to make a network request based on a prop change, it can use componentDidUpdate() to check if the prop has changed and make the request if necessary.
- Updating the DOM based on prop or state changes: If a component needs to update the DOM based on prop or state changes, it can use componentDidUpdate() to make those updates.
- Setting or clearing timers or intervals: If a component needs to set or clear timers or intervals based on prop or state changes, it can use componentDidUpdate() to do so.
- Checking for and handling prop or state changes: componentDidUpdate() can be used to check for and handle prop or state changes that occur during a component's lifecycle.

It's important to note that componentDidUpdate() is called every time the component updates, so it's the best place to put methods that need to be called on every update, it also receives prevProps and prevState as arguments, so you can compare the current and previous state/props.

### componentWillUnmount()

componentWillUnmount() is a lifecycle method in React that is called just before a component is removed from the DOM. It is typically used to perform any cleanup or teardown that the component needs before it is removed.

Some common use cases for componentWillUnmount() include:

- Removing event listeners: If a component has set up event listeners in componentDidMount(), it can use componentWillUnmount() to remove those listeners before the component is removed from the DOM.
- Clearing timers or intervals: If a component has set up timers or intervals in componentDidMount(), it can use componentWillUnmount() to clear those timers or intervals before the component is removed from the DOM.
- Canceling network requests: If a component has made network requests in componentDidMount(), it can use componentWillUnmount() to cancel those requests before the component is removed from the DOM.

It's important to note that componentWillUnmount() is called only once during the component's lifecycle, when it is removed from the DOM, so it's not the best place to put methods that need to be called on every update or when component is hidden.
