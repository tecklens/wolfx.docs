import SyntaxHighlighter from 'react-syntax-highlighter';

export default function CodeExample({code, title = 'RESPONSE'}) {
  return (
    <div className={'nx-flex nx-flex-col nx-rounded-lg nx-overflow-hidden nx-text-sm nx-border dark:nx-border-neutral-800'}>
      <div className={'nx-px-2 nx-font-semibold nx-py-1 nx-bg-gray-200 dark:nx-bg-gray-50/10 border-b'}>{title}</div>
      <SyntaxHighlighter language="java">
        {code}
      </SyntaxHighlighter>
    </div>
  )
}