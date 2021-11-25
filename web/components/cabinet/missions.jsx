import { CheckIcon } from '@heroicons/react/outline'

const features = [
    {
        name: 'Etablissement des comptes annuels'
    },
    {
        name: 'Gestion patrimoniale'
    },
    {
        name: 'Pilotage de l’activité (tableau de bord, situation, budget)'
    },
    {
        name: 'Audit légal'
    },
    {
        name: 'Fiscalité (liasse fiscale, impôt sur le revenu, IFI)'
    },
    {
        name: 'Accompagnement dans la création et la transmission d’entreprises'
    },
    {
        name: 'Missions de présentation des comptes de campagne'
    },
    {
        name: 'Missions particulières de commissariat aux comptes (commissariat aux apports, à la transformation)'
    },
]

export default function Missions() {
    return (
        <div className="bg-white">
            <div className="px-4 sm:px-6 lg:px-24">
                <div className="border-b-2 border-gray-200 py-20 sm:py-32 lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div>
                        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-900">CBS Expert-comptable</h2>
                        <p className="mt-4 text-lg text-gray-500">
                            propose les missions suivantes :
                        </p>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:col-span-2">
                        <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative">
                                    <dt>
                                        <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                    </dt>
                                    <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}