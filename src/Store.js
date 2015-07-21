const modals = [];

const Store = {
  createModal(isOpen = false){
    modals.push(isOpen);
    return modals.length - 1;
  },
  getState(index){
    if (modals.indexOf(index) === -1) {
      return false;
    }
    return modals[index];
  },
  setState(index, value){
    modals[index] = value;
  }
};

export default Store;
