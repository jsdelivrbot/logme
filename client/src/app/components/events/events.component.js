"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var event_service_1 = require('../../services/events/event.service');
var activity_service_1 = require('../../services/events/activity.service');
var EventsComponent = (function () {
    function EventsComponent(route, eventService, router, activityService) {
        var _this = this;
        this.route = route;
        this.eventService = eventService;
        this.router = router;
        this.activityService = activityService;
        this.valid = false;
        this.eventService.getTasks()
            .subscribe(function (events) {
            _this.events = events;
        });
    }
    EventsComponent.prototype.ngOnInit = function () {
        // Capture the token  if available
        this.firstname = localStorage.getItem('firstname');
        this.lastname = localStorage.getItem('lastname');
        this.valid = this.route.snapshot.queryParams['valid'];
    };
    EventsComponent.prototype.editlog = function (task) {
        var _this = this;
        var logcount = parseInt(task.loggedin) + 1;
        var _task = {
            _id: task._id,
            username: task.username,
            activity: task.activity,
            loggedin: logcount
        };
        this.activityService.editActivity(_task).subscribe(function (data) {
            _this.eventService.getTasks()
                .subscribe(function (events) {
                _this.events = events;
            });
            _this.router.navigate(['/events'], { queryParams: { valid: true } });
        });
    };
    EventsComponent.prototype.viewoccurrence = function (occur) {
        this.router.navigate(['/viewoccurrence'], { queryParams: { id: occur } });
    };
    EventsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'events',
            templateUrl: 'events.component.html'
        }), 
        __metadata('design:paramtypes', [router_2.ActivatedRoute, event_service_1.EventService, router_1.Router, activity_service_1.ActivityService])
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;
//# sourceMappingURL=events.component.js.map