/*

    React Native gives us component + APIs

    React is used to display react native

    rendering on phone:

    Views get compiled into native code

    Logic (stays in JS form and is not compiled)

    React Native compiles views into native vies
        In order for the phone to understand JS it uses a JS Virtual Machine (using a JS engine)
        this is called core (the JS engine that powers the safari browser)

        our JS code is shipped with a JS VM

        the JS core code communicates via the native platform API

        React Native uses the RN Bridge to communicate between the native platform API and 
        the JS VM engine

        JS VM Engine <-----RN Bridge----> Native Platform/API (message broker pattern)


        Hermes -> Android apps were a bit slower (IoS had native js on the phone),

        Hermes is a new JS engine optimised for android


        In React Native there is no CSS

            the CSS that we use in RN is built with JS

            e.g.
                it does not use units (it just figures out best way to display stuff on the screen)
                





*/
