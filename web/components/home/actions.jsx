export default function Actions() {
    return (
        <div className="lg:relative">
            <div className="mx-auto max-w-[110rem] w-full py-20 sm:py-32 text-center lg:text-left lg:flex">
                <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16 flex flex-wrap content-between">
                    <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                        Vous avez besoin d’accompagnement pour votre (future) société ?
                    </h2>
                    <p className="mt-3 w-full mx-auto text-lg text-gray-500 sm:text-xl md:mt-5">
                        Offrez-vous un service de qualité pour grandir.
                    </p>
                    <div className="my-10 lg:mb-0 mx-auto lg:mx-0 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <a
                                href="/contact"
                                className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Contactez-nous
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16 flex flex-wrap content-between">
                    <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                        Vous souhaitez vivre une expérience unique ?
                    </h2>
                    <p className="mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 w-full">
                        Rejoignez notre équipe attentionnée et compétente.
                    </p>
                    <div className="my-10 lg:mb-0 mx-auto lg:mx-0  sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <a
                                href="/recrutement"
                                className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Rejoignez-nous
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}