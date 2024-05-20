"use client"
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>(`
# Welcome to Markdown Editor

This is a simple markdown editor with **syntax highlighting**.

## Features
- Easy to use
- Supports **bold** and *italic* text
- Code blocks with syntax highlighting
- Images

## Example Code

Here is an example of a code block with JavaScript syntax highlighting:

\`\`\`javascript
console.log('Hello, world!');
\`\`\`

## Example Image

Below is an example image:

![React Logo](https://reactjs.org/logo-og.png)

## More Examples

### Nested Lists
1. First item
   - Subitem 1
   - Subitem 2
2. Second item

### Blockquotes
> This is a blockquote example.
  `);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-4">Markdown Input</h2>
        <textarea
          value={markdown}
          onChange={handleInputChange}
          placeholder="Write your markdown here..."
          className="w-full h-64 p-4 text-base border border-gray-300 rounded-md"
        />
      </div>
      <div className="w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-4">Rendered Content</h2>
        <div className="p-4 border border-gray-300 rounded-md bg-gray-50 min-h-64">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mb-3" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-xl font-bold mb-2" {...props} />,
              h4: ({ node, ...props }) => <h4 className="text-lg font-bold mb-2" {...props} />,
              h5: ({ node, ...props }) => <h5 className="text-base font-bold mb-2" {...props} />,
              h6: ({ node, ...props }) => <h6 className="text-sm font-bold mb-2" {...props} />,
              code: ({ node, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  <SyntaxHighlighter
                  style={docco as unknown as Record<string, React.CSSProperties>}
                  language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
