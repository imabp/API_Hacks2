import React from "react";
import { WaveBTN } from "../../components";
const HackThemes = () => {
    const [hint1, setHint1] = React.useState(false);
    return (
        <div className="text-xl px-6 md:px-12 pt-10 h-screen">
            <h1>🌈 hack-a-theme</h1><br />
            <p>themes are very important to know your project use cases.
                <br />
                <div className="fontLight">
                at api hacks, we encourage our hackers to be more creative
                by providing an open theme. <br />
                you can choose any tech stack, just make sure, it is presentable.
                </div>
                <br />
                few themes, that we feel are good to go with, are:
                <br /><br />
                💻 developer tools
                <div className="fontLight">
                    developer tools improves developer experience.<br /> we would love to
                    see your hack in building developer tools using apis.<br />

                </div>
                <br />
                🏠 work from home
                <div className="fontLight">
                    during these unprecedented times, we are working from home.<br />
                    why not build next productivity tool or something helps
                    people who are working from home.
                </div>
                <br />
                🎨 open themes
                <div className="fontLight">
                    as said, we love your creativity, so if you have any theme in your mind, go ahead
                    with that. just make sure, you describe the problem well.
                </div>

                <WaveBTN type="btn-fade" text={hint1 ? "ohh wow!" : "need some hints"} onClick={() => { setHint1(!hint1) }} />

                {hint1 &&
                    <><br />shhh... just an idea, you can build an extension to<br /> schedule msteam meeting and use microsoft auth.
                    </>
                }<br /><br />
            </p>
        </div>
    );
};
export default HackThemes;
