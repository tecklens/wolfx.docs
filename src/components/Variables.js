export default function Variables({variables}) {
    return (
        <div className={'nx-flex nx-flex-col'}>
            {variables.map(e => {
                return (
                    <div className={'nx-flex nx-flex-col nx-gap-2'} key={e.name} id={`variables_${e.name}`}>
                        <div className={'nx-flex nx-flex-col nx-border-b nx-py-2'}>
                            <div className={'nx-flex'}>
                                <div className={'nx-flex nx-items-center nx-text-gray-600 dark:nx-text-gray-300 nx-gap-2'}>
                                    <div className={'nx-mr-2 nx-text-gray-900 dark:nx-text-white nx-font-bold'}>{e.name}</div>
                                    <div className={'nx-text-xs'}>{e.type}</div>
                                    {e.required ?
                                        <div className={'nx-text-xs nx-rounded nx-px-2 nx-font-bold'}
                                             style={{
                                                 color: 'rgb(220 38 38)',
                                                 backgroundColor: '#fee1e1'
                                             }}
                                        >required</div> :
                                        <div className={'nx-text-xs nx-rounded nx-px-2 nx-font-bold'}>optional</div>}
                                </div>
                            </div>
                            <div className={'nx-text-xs'}>{e.description ?? ''}</div>
                        </div>
                        {e.children ?
                            <div className={'nx-flex nx-flex-col nx-ml-4'}>
                                <Variables variables={e.children}/>
                            </div>
                            : null}
                    </div>)
            })}
        </div>
    )
}
