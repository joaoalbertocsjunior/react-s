const Tag = ({ element: Element, props, children }) => {
    return (
        <Element {...props}>
            {children}
        </Element>
    );
};

const SelfClosingTag = ({ element: Element, props }) => {
    return <Element {...props} />;
};

const Render = (structure) => {
    return structure.map((item, index) => {
        const { selfClosing, _dynamicProps, name, element, children, ...props } = item;
		
        const TagType = typeof element === 'string' ? (selfClosing ? SelfClosingTag : Tag) : element;

        const tagParams = { element, props };

        if (!selfClosing && children) {
            if (Array.isArray(children)) {
                tagParams.children = Render(children);
            } else {
                tagParams.children = children;
            };
        };

        return <TagType key={index} {...tagParams} />;
    });
};

export default Render;
