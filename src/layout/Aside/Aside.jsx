import AsideList from "./AsideList"
import './styles.css'

const Aside = () => {

  const menu = [
    {
      label: 'Introduction',
      path: '/docs/getStarted',
      icon: '',
      children: [
        {
          label: 'REST',
          path: '/docs/rest',
          icon: '',
        },
        {
          label: 'Info and Pagination',
          path: '/docs/infoAndPagination',
          icon: '',
        },
      ]
    },
    {
      label: 'Character',
      path: '/character',
      icon: '',
      children: [
        {
          label: 'Character scheme',
          path: '/character-scheme',
          icon: '',
        },
        {
          label: 'Get all characters',
          path: '/get-all-characters',
          icon: '',
        },
        {
          label: 'Get a single character',
          path: '/get-a-single-character',
          icon: '',
        },
        {
          label: 'Get a mulitply characters',
          path: '/get-a-mulitply-characters',
          icon: '',
        },
        {
          label: 'Filter characters',
          path: '/filter-characters',
          icon: '',
        }
      ]
    },
    {
      label: 'Location',
      path: '/location',
      icon: '',
      children:[
        {
          label: 'Location scheme',
          path: '/location-scheme',
          icon: '',
        }
      ]
    }
  ]

  return (
    <aside className="h-full mt-[113px] w-80 px-6 py-3">
      <div className="flex flex-col gap-2">
        {menu.map((item, index) => (
          <AsideList key={index} menu={item} />
        ))}
      </div>	
    </aside>
  )
}

export default Aside