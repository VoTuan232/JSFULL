"use strict";

/*
*******************Trả về 1 giá trị single******************

    let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
    }, [initial]); // nếu ko có initial => accumulator là item đầu tiên, item là item thứ 2

    accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
    item – is the current array item.
    index – is its position.
    array – is the array.
*/

// Sort lại theo một trường
let all_times = [
  {
    id: 10622,
    day: 6,
    day_string: "Sat",
    time_block: 7,
    time_string: "10pm - Midnight",
    next_occurrence: "2017-07-15T21:09:09.000-07:00"
  },
  {
    id: 10621,
    day: 3,
    day_string: "Wed",
    time_block: 4,
    time_string: "4pm - 6pm",
    next_occurrence: "2017-07-12T21:09:07.000-07:00"
  },
  {
    id: 10620,
    day: 1,
    day_string: "Mon",
    time_block: 4,
    time_string: "4pm - 6pm",
    next_occurrence: "2017-07-10T21:09:06.000-07:00"
  },
  {
    id: 10619,
    day: 3,
    day_string: "Wed",
    time_block: 2,
    time_string: "12pm - 2pm",
    next_occurrence: "2017-07-12T21:09:05.000-07:00"
  },
  {
    id: 10618,
    day: 5,
    day_string: "Fri",
    time_block: 2,
    time_string: "12pm - 2pm",
    next_occurrence: "2017-07-14T21:09:04.000-07:00"
  },
  {
    id: 10617,
    day: 1,
    day_string: "Mon",
    time_block: 1,
    time_string: "10am - 12pm",
    next_occurrence: "2017-07-10T21:09:02.000-07:00"
  },
  {
    id: 10616,
    day: 1,
    day_string: "Mon",
    time_block: 2,
    time_string: "12pm - 2pm",
    next_occurrence: "2017-07-10T21:09:01.000-07:00"
  },
  {
    id: 10615,
    day: 1,
    day_string: "Mon",
    time_block: 3,
    time_string: "2pm - 4pm",
    next_occurrence: "2017-07-10T20:39:32.000-07:00"
  },
  {
    id: 10614,
    day: 0,
    day_string: "Sun",
    time_block: 4,
    time_string: "4pm - 6pm",
    next_occurrence: "2017-07-16T20:02:06.000-07:00"
  },
  {
    id: 10612,
    day: 2,
    day_string: "Tues",
    time_block: 4,
    time_string: "4pm - 6pm",
    next_occurrence: "2017-07-11T20:00:39.000-07:00"
  },
  {
    id: 2542,
    day: 1,
    day_string: "Mon",
    time_block: 5,
    time_string: "6pm - 8pm",
    next_occurrence: "2017-07-10T15:43:33.000-07:00"
  }
];

let new_times = all_times
  .slice(0)
  .sort((a, b) => a.time_block - b.time_block)
  .reduce((obj, item, index) => {
    if (!obj[item.day_string]) {
      obj[item.day_string] = [item];
    } else {
      obj[item.day_string] = [...obj[item.day_string], item];
    }
    return obj;
  }, {});

console.log(new_times);
