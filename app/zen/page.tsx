import { Suspense } from 'react';
import ZenComponent from '../components/ZenComponent'

export default async function Zen() {
    return (
        <main>
            <p className="p-4">
                <Suspense fallback={<span>Loading...</span>}>
                    <ZenComponent />
                </Suspense>
            </p>
        </main>
    )
}