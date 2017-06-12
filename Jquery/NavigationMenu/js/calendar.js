$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
      console.log('hi');
      header: {
         left: 'prev,next today',
         center: 'title',
         right: 'month,agendaWeek,agendaDay'
     },
     editable: true,
     eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'Event',
                start: '2016-12-26'
            },

            {
                id: 999,
                title: 'Event',
                start: '2016-12-28T16:00:00'
            },
            {
                title: 'Conference',
                start: '2016-12-29',
                end: '2015-12-31'
            }]
    });


});
