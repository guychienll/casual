import * as React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { v4 as uuid } from 'uuid';

export default function MDXCode(props) {
    const shouldBeInline = React.Children.toArray(props.children).every(
        (el) => typeof el === 'string' && !el.includes('\n')
    );
    return shouldBeInline ? (
        <code {...props} />
    ) : (
        <CodeBlock
            {...props}
            scope={{
                uuid,
                React,
            }}
        />
    );
}
