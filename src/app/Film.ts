export class Film {
    title: string;
    genre: string;
    year: number;
    duration: number;
    description: string;
}

export const Films: Film[] = [
    {
        title: 'One Flew Over the Cuckoo’s Nest',
        genre: 'DRAMA',
        year: 1978,
        duration: 67,
        // tslint:disable-next-line: max-line-length
        description: 'Based on the Ken Kesey novel, this is considered to be one the greatest films ever made. It has won five major Academy Awards, numerous Golden Globes and BAFTAs. But that doesn’t really matter. What matters is us, and we’re telling you that you gotta watch it. It’s the story of Randle McMurphy, who, despite not being mentally ill, is moved from prison to a mental institution. McMurphy ends up leading a revolution and starts to plan an escape. It does not go well.'
    },

    {
        title: 'Vertigo',
        genre: 'HORROR',
        year: 1958,
        duration: 120,
        // tslint:disable-next-line: max-line-length
        description: 'Some might say Vertigo is about some dude who’s afraid of heights. But we’re classy. It’s about a detective who’s afraid of heights. He basically becomes obsessed with his pal’s wife, who has more than a few tricks up her sleeve. Once you think you know what’s going on, you don’t. The suspense will kill you and you won’t be able to look away while John ‘Scottie’ Ferguson spirals into madness.'
    },

    {
        title: 'Apocalypse Now',
        genre: 'COMEDIA',
        year: 1979,
        duration: 87,
        // tslint:disable-next-line: max-line-length
        description: 'This war epic, starring Martin Sheen, Marlon Brando, and Robert Duvall (swoon, much?) follows Captain Benjamin L. Willard as he embarks upon a secret mission to kill a presumed insane traitor. Widely noted for the problems it experienced during production – including an overweight and unprepared Brando (same), Sheen’s near-fatal on-set heart attack and expensive sets being destroyed by severe weather.'
    }
];
