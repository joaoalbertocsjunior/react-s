class Element {
    constructor({ name, element }) {
        this.name = name || 'Element';
        this.element = element || null;
        this.children = []; 

        this._dynamicProps = {};

        return new Proxy(this, {
            get: (target, prop) => {
                if (prop in target) {
                    return target[prop];
                } else if (prop in target._dynamicProps) {
                    return target._dynamicProps[prop];
                }
                target._dynamicProps[prop] = null;
                return null;
            },
            set: (target, prop, value) => {
                if (prop in target) {
                    target[prop] = value;
                } else {
                    target._dynamicProps[prop] = value;
                }
                return true;
            },
            ownKeys: (target) => {
                return [...Object.keys(target), ...Object.keys(target._dynamicProps)];
            },
            getOwnPropertyDescriptor: (target, prop) => {
                if (prop in target) {
                    return Reflect.getOwnPropertyDescriptor(target, prop);
                } else if (prop in target._dynamicProps) {
                    return {
                        configurable: true,
                        enumerable: true,
                        value: target._dynamicProps[prop]
                    };
                }
                return undefined;
            }
        });
    }
};

module.exports = Element;

