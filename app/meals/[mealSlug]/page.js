//localhost:3000/meals/something[may be abc/ or /test or /other, etc.. )
import Image from 'next/image';
import classes from './page.module.css';
import { getMeal } from '@/lib/meals';
export default function MealDetailsPage({params}){
    const meal = getMeal(params.mealSlug);
    console.log(meal)

    return(
        <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src="" alt="Meal image" fill />
            </div>
            <div className={classes.headerText}>
                <h1>{meal.title}</h1>
                <p className={classes.creator}>
                    by <a href={`mailto:${'EMAIL'}`}>NAME</a>
                </p>
                <p className={classes.summary}>SUMMARY</p>
            </div>
        </header>
        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{
                __html: '...',
            }}>

            </p>
        </main>
        </>
    )
}