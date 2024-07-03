export default function Frame({children, caption}) {
    return (
        <div className={'nx-border nx-flex nx-flex-col nx-rounded nx-p-2'}>
            {children}
            <div className={'nx-text-center nx-text-sm py-2'}>
                {caption}
            </div>
        </div>
    )
}