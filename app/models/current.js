import DS from 'ember-data';




export default DS.Model.extend({
    datetime: DS.attr('date'),
    dewpoint: DS.attr('number'),
    evapotranspiration: DS.attr('number'),
    heatIndex: DS.attr('number'),
    humidity: DS.attr('number'),
    lastdata: DS.attr('string'),
    normalizedPressure: DS.attr('number'),
    pressure: DS.attr('number'),
    rain0rate: DS.attr('number'),
    raintotal: DS.attr('number'),
    rain0totalSumday: DS.attr('number'),
    rain0totalMonthsum: DS.attr('number'),
    rain0TotalLast24Hours: DS.attr('number'),
    solarRadiation: DS.attr('number'),
    tempF: DS.attr('number'),
    tempFDaysMax: DS.attr('number'),
    tempFDaysMaxTime: DS.attr('moment'),
    tempFDaysMin: DS.attr('number'),
    tempFDaysMinTime: DS.attr('moment'),
    uptime: DS.attr('date'),
    uvindex: DS.attr('number'),
    wind: DS.attr('number'),
    windAverage: DS.attr('number'),
    windAvgLast10Mins: DS.attr('number'),
    windChill: DS.attr('number'),
    windChillAvgLast30Mins: DS.attr('number'),
    windChillAvgLastHour: DS.attr('number'),
    windChillMinToday: DS.attr('number'),
    windChillMinTodayTime: DS.attr('date'),
    windDirection: DS.attr('number'),
    windMaxLast10Mins: DS.attr('number'),
    windMaxLast2Mins: DS.attr('number'),
    windMaxLast5Mins: DS.attr('number'),
    windSpeedDaysMax: DS.attr('number'),
    windSpeedDaysMaxTime: DS.attr('moment'),
    windSpeedDaysMin: DS.attr('number'),
    windSpeedDaysMinTime: DS.attr('moment'),

});
