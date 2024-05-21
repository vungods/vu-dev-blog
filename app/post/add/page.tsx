"use client"
import CustomMarkdown from '@/app/components/organisms/CustomMarkdown/CustomMarkdown';
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
- [Links](https://reactjs.org)

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
- First item
  - Subitem 1
  - Subitem 2
- Second item

### Blockquotes
> This is a blockquote example.

### Ordered List
1. First item
2. Second item
3. Third item
  `);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 h-screen">
      <div className="w-full flex flex-row gap-6 h-full">
        <div className="w-1/2 flex flex-col h-full">
          <h2 className="text-xl font-bold mb-4">Markdown Input</h2>
          <textarea
            value={markdown}
            onChange={handleInputChange}
            placeholder="Write your markdown here..."
            className="w-full flex-grow p-4 text-base border border-gray-300 rounded-md"
          />
        </div>
        <div className="w-1/2 flex flex-col h-full">
          <h2 className="text-xl font-bold mb-4">Rendered Content</h2>
          <div className="p-4 border border-gray-300 rounded-md bg-gray-50 flex-grow overflow-auto">
            <CustomMarkdown markdown={markdown} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
