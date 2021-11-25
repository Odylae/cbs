export default function Signature() {
    return (
        <section
            className="px-4 sm:px-6 py-20 sm:py-32 lg:flex lg:items-center lg:px-24"
            aria-labelledby="newsletter-heading"
        >
            <div className="lg:w-0 lg:flex-1">
                <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-900" id="newsletter-heading">
                    CBS Expert-comptable,
                </h2>
                <p className="mt-3 mb-10 max-w-3xl text-lg text-blue-gray-500">
                    partenaire dans la réalisation de vos projets !
                </p>
            </div>
            <div>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-6 sm:space-y-0">
                    <div className="sm:col-span-2">
                        <div className="space-y-4">
                            <div className="text-lg leading-6 text-left sm:text-right font-medium space-y-1">
                                <h3>Sacha DAVID</h3>
                                <p className="text-indigo-600">Expert-Comptable et Commissaire Aux Comptes</p>
                            </div>
                        </div>
                    </div>
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img className="h-52 object-cover shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}