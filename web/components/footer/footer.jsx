import Link from 'next/link'

const navigation = {
    main: [
        { name: 'Le cabinet', href: '/cabinet' },
        { name: 'Contact', href: '/contact' },
        { name: 'Recrutement', href: '/recrutement' },
    ],
    social: [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/cbs-expert-comptable/',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
            ),
        },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-gray-900">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <Link href={item.href}>
                            <div key={item.name} className="px-5 py-2">
                                <a className="text-base text-gray-100 hover:text-gray-300 cursor-pointer">
                                    {item.name}
                                </a>
                            </div>
                        </Link>
                    ))}
                    <div className="px-5 py-2">
                        <a href="https://90550391-quadraweb.cegid.com/qws/" target="_blank" className="text-base text-gray-100 hover:text-gray-300">
                            Quadra Web
                        </a>
                    </div>
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} target="_blank" className="text-gray-100 hover:text-gray-300">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-8 w-8" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <p className="my-8 text-center text-base text-gray-100">CBS Expert-comptable est un cabinet d’expert comptable indépendant et à taille humaine, orienté dans le conseil et l’accompagnement des chefs d’entreprise.</p>
                <Link href="/mentionsLegales">
                    <div className="text-center">
                        <a className="text-base text-gray-100 hover:text-gray-300 cursor-pointer">
                            Mentions légales
                        </a>
                    </div>
                </Link>
            </div>
        </footer>
    )
}