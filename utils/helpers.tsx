export const makeSingleArray = (images) => {
  let resultArray = [];

  images.map((item) => {
    item.forEach((image) => resultArray.push(image));
  });

  return resultArray;
};

export const formatWorkTime = (workTime) => {
  const formattedTime = {
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  };

  Object.keys(workTime).forEach((day) => {
    const currentDay = workTime[day][0];

    if (currentDay.closed) {
      formattedTime[day] = "Stängt";
    } else {
      formattedTime[day] = `${currentDay.start} - ${currentDay.end}`;
    }
  });

  return formattedTime;
};

export const getTodayWorktime = (workTime) => {
  const currentDay = new Date().getDay();

  if (currentDay === 1) {
    return workTime["monday"];
  } else if (currentDay === 2) {
    return workTime["tuesday"];
  } else if (currentDay === 3) {
    return workTime["wednesday"];
  } else if (currentDay === 4) {
    return workTime["thursday"];
  } else if (currentDay === 5) {
    return workTime["friday"];
  } else if (currentDay === 6) {
    return workTime["saturday"];
  } else {
    return workTime["sunday"];
  }
};

export const mergeAllEvents = (events) => {
  const allEvents = [];

  const { eventsOne, eventsTwo } = events;

  Object.keys(eventsOne).map((itemKey) => allEvents.push(eventsOne[itemKey]));

  Object.keys(eventsTwo).map((itemKey) => allEvents.push(eventsTwo[itemKey]));

  return allEvents;
};

export const setEventPages = (totalPages) => {
  const result = [];

  for (let i = 1; i <= totalPages; i++) {
    result.push(i);
  }

  return result;
};

export const setReviewPages = (totalPages) => {
  const result = [];

  for (let i = 1; i <= totalPages; i++) {
    result.push(i);
  }

  return result;
};
