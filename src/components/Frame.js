export default function Frame({children, caption}) {
    return (
        <div className={'border flex flex-col'}>
            {children}
            <div className={'p-2'}>
                {caption}
            </div>
        </div>
    )
}