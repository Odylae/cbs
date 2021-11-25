import Header from '../header/header'

export default function Presentation() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="relative z-10 bg-white lg:w-1/2">
                <svg
                    className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
                <Header />
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-24 py-20 sm:py-40">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl grid space-y-10 lg:w-11/12">
                            <span className="block xl:inline">CBS Expert comptable</span>{' '}
                            <span className="block text-primary xl:inline">Le cabinet de conseil pour changer de dimension</span>
                        </h1>
                    </div>
                </main>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    alt=""
                />
            </div>
        </div>
    )
}