import SyntaxHighlighter from 'react-syntax-highlighter';

export default function CodeExample({code, title = 'RESPONSE', language = 'java', status = 200}) {
    return (
        <div
            className={'nx-flex nx-flex-col nx-rounded-lg nx-overflow-hidden nx-text-sm nx-border dark:nx-border-neutral-800'}>
            <div className={'nx-flex nx-justify-between nx-px-2 nx-font-semibold nx-py-1 nx-bg-gray-200 dark:nx-bg-gray-50/10 border-b'}>
                <div
                    className={''}>{title}</div>

                <div style={{
                    color: status < 300 && status >= 200 ? 'green': 'nx-text-red-500'
                }}>
                    {status}
                </div>
            </div>
            <SyntaxHighlighter language={language}>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}