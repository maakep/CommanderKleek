export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}

export function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
};

export class QuantityArray {
    constructor(state, unit) {
        this.array = new Array();
        this.state = state;
    }

    // this isnt working
    push(object) {
        this.array.push(object);
    }

    // this isnt working
    splice(start, deleteCount = 1) {
        this.array.splice(start, deleteCount);
    }
}