// create a base class to handle state
class StateObserver extends HTMLElement {
  constructor() {
    super();
    StateObserver.instances.push(this);
  }
  stateUpdate(update) {
    StateObserver.lastState = StateObserver.state;
    StateObserver.state = update;
    StateObserver.instances.forEach((i) => {
      if (!i.onStateUpdate) return;
      i.onStateUpdate(update, StateObserver.lastState);
    });
  }
}

StateObserver.instances = [];
StateObserver.state = {};
StateObserver.lastState = {};

// create a web component which will react to state changes
class CustomReactive extends StateObserver {
  onStateUpdate(state, lastState) {
    if (state.someProp === lastState.someProp) return;
    this.innerHTML = `input is: ${state.someProp}`;
  }
}
customElements.define("reactive", CustomReactive);

class CustomObserved extends StateObserver {
  connectedCallback() {
    this.querySelector("input").addEventListener("input", (e) => {
      this.stateUpdate({ someProp: e.target.value });
    });
  }
}
customElements.define("observed", CustomObserved);
