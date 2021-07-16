const clickContainerAttrRegEx = /^<(.*?) ([^>]*)>/

class ClickHandler {

    w: Window

    constructor(window: Window) {

        this.w = window;

    }

    listen () {

        this.w.addEventListener('click', (event: Event) => {

            
            const target = event.target as HTMLElement

            
            fetch(process.env.FUNNEL_SINK_CLICKS_ENDPOINT, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                  },
                body: JSON.stringify({outerHTML: target.outerHTML})
            })
            .then(res => res.text())
            .then(res => console.log('fetch res', res))


        })
    }
    
}
