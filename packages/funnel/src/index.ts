import { ClickHandler } from './click'
import { RefererSnapper } from './referer'


const initialize = (event: Event) => {

    console.log('funnel index onload event', event)

    const clickHandler = new ClickHandler(window)    

    clickHandler.listen()

    const refererHandler = new RefererSnapper(window)
    refererHandler.snap()

}

window.addEventListener('load', initialize, true)
