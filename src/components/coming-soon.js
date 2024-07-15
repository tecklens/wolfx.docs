export default function ComingSoon() {
    return (
        <div className='h-svh nx-w-full nx-flex nx-justify-center nx-my-8'>
            <div className='nx-m-auto nx-flex nx-h-full nx-w-full nx-flex-col nx-items-center nx-justify-center nx-gap-2'>
                <img src={'/images/planet.png'} width={72} height={72} alt={'planet coming soon'}/>
                <h1 className='nx-text-3xl nx-font-bold nx-leading-tight'>Coming Soon 👀</h1>
                <p className='nx-text-center nx-text-muted-foreground'>
                    This page has not been created yet. <br/>
                    Stay tuned though!
                </p>
            </div>
        </div>
    )
}
