- [x] Why would you use class component over function components (removing hooks from the question)?

If you wanted to use some of the more obscure react lifecycle methods, you would have to build out your app using class components.

- [x] Name three lifecycle methods and their purposes.

1. constructor() - Used for initializing local state by making this.state an object and binding event handler methods to an instance

2. render() - This is the only required method in a class component. It examines this.props and this.state and returns react elements, arrays and fragments, portals, strings and numbers, and booleans / null.

3. componentDidMount() -  This is called right after the component mounts. Initialization that requires DOM nodes should go here.

- [x] What is the purpose of a custom hook?

The purpose of a custom hook is to put the state and stateful logic all in one place in such a way that it reusable and convenient if you need another similar hook later. It cleans up code and makes it possible for developers to not have to rewrite logic for every similar component.

- [x] Why is it important to test our apps?

Testing surfaces bugs faster, makes us think about edge cases, makes our applications more robust, and serves as documentation. Automated testing also removes the need for expensive manual testing (and the tests will look nice with very little effort).