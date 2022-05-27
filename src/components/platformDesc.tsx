interface IconProps {
    platform: string
}

const getIcon = (platform: string) => {
    switch (platform) {
        case "Wii":
          return (
            <span>The Wii, a console created by Nintendo, launched its first version in 2006. Known for its famous “Wii Sports,” as well as for its Wii controller, the Wii was the next step in Nintendo’s line of consoles and handheld devices at the time.</span>
          );
        case "NES":
            return (
                <span>The Nintendo Entertainment System, a console created by Nintendo, was first released in 1983. The NES was one of the best selling consoles of its time, and majorly impacted the US gaming industry following a crash in 1983.</span>
            );
        case "GB":
            return (
                <span>The Gameboy, a handheld 8 bit device, was created by Nintendo and first released in 1989. This device was a physical combination of the NES features, as well as Game and Watch hardware. </span>
        );
        case "GB":
            return (
                <span>The DS, a handheld device created by Nintendo, was first released in 2004. DS, most commonly referring to “Dual Screens,” made light of the DS’s unique feature: two LCD screens working together.</span>
            );
        case "X360":
            return (
               <span>The Xbox, a console created by Microsoft, launched its first version in 2001. Since then, there have been multiple iterations of the console, including the Xbox 360(2005), Xbox One(2013), and Xbox Series X and S(2020).</span>
            );
        case "PS3":
            return (
               <span>The Playstation, a console created by Sony, launched its first version in 1994. Since then, there have been four more iterations, with the Playstation 5 being the latest to date.</span>
            );
        case "PS2":
            return (
                <span>The Playstation, a console created by Sony, launched its first version in 1994. Since then, there have been four more iterations, with the Playstation 5 being the latest to date.</span>
            );
        case "GBA":
            return (
                <span>The Gameboy Advanced, a handheld 32-bit device, was created by Nintendo and released in 2001. This device was inspired by the original Gameboy, which was released years prior.</span>
            );
        case "SNES":
            return (
                <span>The Super Nintendo Entertainment System, a console created by Nintendo, was first released in 1990. The SNES was the sequel to the NES, and introduced many upgrades, including advanced graphic and sound capabilities.</span>
            );
        case "3DS":
            return (
               <span>The 3DS, a continuation of the DS, is a handheld gaming console made by Nintendo, and was first released in 2011. Along with its dual screens, with came from the DS, this device could additionally display stereoscopic 3D.</span>
            );
        case "PS4":
            return (
               <span>The Playstation, a console created by Sony, launched its first version in 1994. Since then, there have been four more iterations, with the Playstation 5 being the latest to date.</span>
            );
        case "DS":
            return (
                <span>The DS, a handheld device created by Nintendo, was first released in 2004. DS, most commonly referring to “Dual Screens,” made light of the DS’s unique feature: two LCD screens working together.</span>
                )
        case "Default":
            return (
                <div>Hey</div>
            );
    }
}

const PlatformDesc = (props: IconProps) => {
    let svg = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372.368 372.573">
            <path d="M167.617 371.807c-28.683-2.747-57.723-13.048-82.669-29.324-20.904-13.64-25.625-19.246-25.625-30.435 0-22.475 24.712-61.84 66.993-106.716 24.012-25.486 57.46-55.36 61.077-54.55 7.03 1.572 63.25 56.41 84.297 82.224 33.28 40.822 48.58 74.246 40.808 89.147-5.91 11.328-42.573 33.467-69.508 41.973-22.2 7.01-51.356 9.98-75.373 7.68zM31.09 288.68C13.72 262.03 4.942 235.795.705 197.848c-1.4-12.53-.898-19.697 3.177-45.415C8.96 120.38 27.215 83.297 49.149 60.476c9.342-9.72 10.176-9.957 21.563-6.12 13.829 4.658 28.596 14.857 51.499 35.566l13.362 12.083-7.297 8.964c-33.872 41.612-69.63 100.597-83.105 137.09-7.326 19.838-10.281 39.752-7.129 48.043 2.128 5.597.173 3.51-6.953-7.422zm304.916 4.533c1.716-8.377-.455-23.763-5.542-39.28-11.016-33.606-47.84-96.124-81.652-138.63l-10.645-13.382 11.516-10.574c15.036-13.806 25.476-22.074 36.74-29.094 8.89-5.54 21.592-10.445 27.052-10.445 3.366 0 15.217 12.299 24.784 25.72 14.817 20.789 25.718 45.988 31.24 72.22 3.569 16.95 3.866 53.232.575 70.14-2.7 13.876-8.403 31.875-13.966 44.082-4.168 9.146-14.535 26.91-19.078 32.69-2.336 2.972-2.338 2.966-1.024-3.447zM170.689 45.463c-15.602-7.923-39.67-16.428-52.965-18.716-4.661-.802-12.612-1.25-17.67-.994-10.969.554-10.479-.02 7.119-8.334 14.63-6.912 26.833-10.976 43.4-14.455 18.636-3.913 53.666-3.959 72.005-.094 19.808 4.174 43.133 12.854 56.276 20.942l3.907 2.404-8.963-.453c-17.81-.899-43.766 6.296-71.632 19.858-8.406 4.09-15.718 7.357-16.25 7.26-.533-.098-7.385-3.436-15.227-7.419z"/>
        </svg>
    );
    

    return (
        <div className="max-w-2xl">
            {getIcon(props.platform)}
        </div>
    );
}

export default PlatformDesc