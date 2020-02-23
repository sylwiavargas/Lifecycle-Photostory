let stories = [
    {
      id: 1, 
      img: "1-planning",
      imgDesc: "A developer company has closed a deal on a new building.",
      lifecycle: " ",
      lifecycleDesc: "The component has been called by its parent."
    }, 
    {
      id: 2, 
      img: "2-builders-plan",
      imgDesc: "Before the work begins, the builders check out the blueprint to establish what tools, materials and crew they are getting already, the materials they need to order and what they are actually building.",
      lifecycle: "Constructor",
      lifecycleDesc: "Constructor fires up first. It evaluates the props (tools, materials and crew in the analogy), creates initial state (materials to be ordered) and binds functions (tasks)."
    }, 
    {
      id: 3,
      img: "3-scaffolding",
      imgDesc: "Now, it's time to set up the scaffolding and the structure of the building.",
      lifecycle: "Render",
      lifecycleDesc: "Render evaluates state and props, and returns JSX which is then translated into a DOM node (element) and connects it to callback functions. Render needs to be a pure function (every time needs to produce the same outcome), which means that you cannot insert setState there. If you do, you'll enter the infinite loop of rerenders because changes in state make the component re-render."
    },
    {
      id: 4,
      img: "4-mounted",
      imgDesc: "The scaffolding has been finished, everyone is ready for action.",
      lifecycle: "componentDidMount",
      lifecycleDesc: "Now that your component is already sketched out, you can do whatever you want: go wild with fetching, setting the state, starting a timer, whatever you want. Your app won't crash because you have solid foundations and structure for this kind of a party!"
    },
    {
      id: 5,
      img: "5-updated",
      imgDesc: "Wow, how amazing, this new machinery has finally arrived from the HQ so we can now change how the interior looks!",
      lifecycle: "componentDidUpdate",
      lifecycleDesc: "componentDidUpdate checks if the prevProps and prevState are different than the ones that are about to come. That means that you can set a tracker that checks for a specific value of props/state and if so, an action can be performed. Think about this method when your component should rerender but doesn't."
    },
    {
      id: 6,
      img: "6-shouldUpdate",
      imgDesc: "There was some miscommunication with the HQ and they send two workers too many today. We won't need their help so we might as well not react to them at all.",
      lifecycle: "shouldComponentUpdate",
      lifecycleDesc: "shouldComponentUpdate checks the incoming props and state. In the method definition put a boolean expression that will help the component decide if it's time for a good rerender of it should chill and not jeopardize the app performance with its unnecessary actions."
    },
    {
      id: 7,
      img: "7-catch",
      imgDesc: "Isn't it helpful to have someone watch out for you from a safe place and provide a fallback solutions if your action is about to fail?",
      lifecycle: "componentDidCatch",
      lifecycleDesc: "componentDidCatch is a miraculous solution for when your app is breaking because e.g. you're trying to map over something that's not an array. This lifecycle method will spot the error and instead of having the whole app crash, it will display a 'something went wrong' page"
    },
    {
      id: 8,
      img: "8-unmount",
      imgDesc: "50 years later, the building is no longer attractive and will be destroyed. Before that, perhaps we should make sure no one is inside?",
      lifecycle: "componentWillUnmount",
      lifecycleDesc: "componentWillUnmount is your last chance to pull an autosave or end any kind of async processes."
    },
  ]

  export default stories;