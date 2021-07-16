(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
class ClickHandler {
    constructor(window) {
        this.w = window;
    }
    listen() {
        this.w.addEventListener('click', (event) => {
            console.log('funnel ClickHandler click event', event);
            fetch("http://localhost:9292/event/clicks", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify(event)
            })
                .then(res => res.text())
                .then(res => console.log('fetch res', res));
        });
    }
}
const initialize = (event) => {
    console.log('funnel index onload event', event);
    const clickHandler = new ClickHandler(window);
    clickHandler.listen();
};
window.addEventListener('load', initialize, true);

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5uZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Z1bm5lbC8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7QUNSQSxNQUFNLFlBQVk7SUFJZCxZQUFZLE1BQWM7UUFFdEIsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7SUFFcEIsQ0FBQztJQUVELE1BQU07UUFFRixJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQVksRUFBRSxFQUFFO1lBRTlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsS0FBSyxDQUFDO1lBQ3JELEtBQUssQ0FBQyxvQ0FBdUMsRUFBRTtnQkFDM0MsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFO29CQUNMLGNBQWMsRUFBRSxnQ0FBZ0M7aUJBQ2pEO2dCQUNILElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQzthQUM5QixDQUFDO2lCQUNELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFHL0MsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBR0QsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtJQUVoQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLEtBQUssQ0FBQztJQUUvQyxNQUFNLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFFN0MsWUFBWSxDQUFDLE1BQU0sRUFBRTtBQUV6QixDQUFDO0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIlxuXG5jbGFzcyBDbGlja0hhbmRsZXIge1xuXG4gICAgdzogV2luZG93XG5cbiAgICBjb25zdHJ1Y3Rvcih3aW5kb3c6IFdpbmRvdykge1xuXG4gICAgICAgIHRoaXMudyA9IHdpbmRvdztcblxuICAgIH1cblxuICAgIGxpc3RlbiAoKSB7XG5cbiAgICAgICAgdGhpcy53LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZnVubmVsIENsaWNrSGFuZGxlciBjbGljayBldmVudCcsIGV2ZW50KVxuICAgICAgICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuRlVOTkVMX1NJTktfQ0xJQ0tTX0VORFBPSU5ULCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGV2ZW50KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKCdmZXRjaCByZXMnLCByZXMpKVxuXG5cbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG59XG5cblxuY29uc3QgaW5pdGlhbGl6ZSA9IChldmVudDogRXZlbnQpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKCdmdW5uZWwgaW5kZXggb25sb2FkIGV2ZW50JywgZXZlbnQpXG5cbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSBuZXcgQ2xpY2tIYW5kbGVyKHdpbmRvdylcblxuICAgIGNsaWNrSGFuZGxlci5saXN0ZW4oKVxuXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdGlhbGl6ZSwgdHJ1ZSlcbiJdLCJzb3VyY2VSb290IjoiIn0=