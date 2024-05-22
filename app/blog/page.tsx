import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown: string = `
# Hello, World!

This is a simple markdown example.

## Features

- Easy to use
- Supports **bold** and *italic* text
- Code blocks

\`\`\`javascript
console.log('Hello, world!');
\`\`\`
`;

const MarkdownRenderer: React.FC = () => {
  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
