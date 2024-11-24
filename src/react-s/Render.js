const Tag = ({ element: Element, props, contents }) => {
    return (
        <Element {...props}>
            {contents}
        </Element>
    );
};

const SelfClosingTag = ({ element: Element, props }) => {
    return <Element {...props} />;
};

const Render = (structure) => {
    return structure.map((item, index) => {
        const { element, selfClosing, props, contents } = item;

        const TagType = typeof element === 'string' ? (selfClosing ? SelfClosingTag : Tag) : element;

        const tagParams = { element, props };

        if (!selfClosing && contents) {
            if (Array.isArray(contents)) {
                tagParams.contents = Render(contents);
            } else {
                tagParams.contents = contents;
            };
        };

        return <TagType key={index} {...tagParams} />;
    });
};

export default Render;
