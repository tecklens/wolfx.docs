export default function RateLimiting() {
    return (
        <div className={'nx-w-full nx-flex nx-flex-col'}>
            <div className={'nx-flex nx-font-bold nx-text-sm nx-border-b'}>
                <div style={{width: 100}}>User Plan</div>
                <div>Limit</div>
            </div>
            <div className={'nx-flex nx-text-sm nx-border-b nx-py-2'}>
                <div style={{width: 100}}>Free</div>
                <div>5 request / second</div>
            </div>
            <div className={'nx-flex nx-text-sm nx-border-b nx-py-2'}>
                <div style={{width: 100}}>Pro</div>
                <div>100 request / second</div>
            </div>
            <div className={'nx-flex nx-text-sm nx-border-b nx-py-2'}>
                <div style={{width: 100}}>Scaler</div>
                <div>500 request / second</div>
            </div>
        </div>
    );
};