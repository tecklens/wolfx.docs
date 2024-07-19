export default function CardEndpoint({title = "ENDPOINTS", url = '', method = 'GET'}) {

  const getColorMethod = () => {
    switch (method) {
      case "GET":
        return 'blue';
      case "POST":
        return 'green';
      default:
        return 'gray'
    }
  }

  return (
    <div className={'nx-border dark:nx-border-neutral-800 nx-flex nx-flex-col nx-rounded-lg nx-text-sm nx-my-2 nx-overflow-hidden'} style={{minWidth: '280px', width: '100%'}}>
      <div className={'nx-px-2 nx-font-semibold nx-py-1 nx-bg-gray-200 dark:nx-bg-gray-50/10 border-b'}>{title}</div>
      <div className={'nx-flex nx-px-2 nx-py-1 nx-bg-gray-100 dark:nx-bg-black/60'}>
        <div className={'nx-font-semibold'} style={{color: getColorMethod()}}>{method?.toUpperCase()}</div>
        <div className={'nx-ml-2'}>{url}</div>
      </div>
    </div>
  )
}
