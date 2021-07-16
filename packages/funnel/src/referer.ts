

export class RefererSnapper {
    
    w: Window

    constructor(window: Window) {

        this.w = window;

    }

    snap () {
         /*
         * Get page referrer
         *  from monomo https://github.com/matomo-org/matomo/blob/fa66bc580852c2b098ba5ea7f7ba57048f258714/js/piwik.js#L553
         */
        
        var referrer = '';

        try {
            referrer = this.w.top.document.referrer;
        } catch (e) {
            if (this.w.parent) {
                try {
                    referrer = this.w.parent.document.referrer;
                } catch (e2) {
                    referrer = '';
                }
            }
        }

        if (referrer === '') {
            referrer = this.w.document.referrer;
        }

        fetch(process.env.FUNNEL_SINK_CLICKS_ENDPOINT, {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
              },
            body: JSON.stringify({referrer})
        })
        .then(res => res.text())
        .then(res => console.log('fetch res', res))

    }
}
