export default function Variables({variables}) {
  return (
    <div className={'nx-flex nx-flex-col'}>
      {variables.map(e => {
        return (<div key={e.name} id={`variables_${e.name}`} className={'nx-flex nx-flex-col nx-border-b nx-py-2'}>
          <div className={'nx-flex'}>
            <div className={'nx-flex nx-items-center nx-text-gray-600'}>
              <div className={'nx-mr-2'}>{e.name}</div>
              <div className={'nx-text-xs'}>{e.type}</div>
            </div>
          </div>
          <div>{e.description ?? ''}</div>
        </div>)
      })}
    </div>
  )
}