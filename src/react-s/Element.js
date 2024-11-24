class Element {
    constructor({ name: name, element: element }) {
        this.name = name;
        this.element = element;
        this.props = new Proxy({}, {
            get: (target, prop) => {
                if (!(prop in target)) {
                    target[prop] = {};
                }
                return target[prop];
            },
            set: (target, prop, value) => {
                target[prop] = value;
                return true;
            }
        });
        this.contents = null;
    };
};

module.exports = Element;