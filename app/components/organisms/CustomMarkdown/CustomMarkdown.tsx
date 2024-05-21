"use client"
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import remarkGfm from 'remark-gfm';

interface CustomMarkdownProps {
    markdown: string;
}

const CustomMarkdown: React.FC<CustomMarkdownProps> = ({ markdown }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
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
                },
                ul: ({ node, ...props }) => <ul className="list-disc ml-5" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal ml-5" {...props} />,
                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                a: ({ node, ...props }) => <a className="text-blue-500 hover:underline" {...props} />, 

            }}
        >
            {markdown}
        </ReactMarkdown>
    );
};

export default CustomMarkdown;
