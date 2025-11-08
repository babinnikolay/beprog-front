let userProgress = {};

export async function getUserProgress(userId) {
  return userProgress[userId] || { lastCompletedPart: 1 };
}

export async function completePart(userId, partNumber) {
  if (!userProgress[userId]) {
    userProgress[userId] = { lastCompletedPart: partNumber };
  } else if (partNumber > userProgress[userId].lastCompletedPart) {
    userProgress[userId].lastCompletedPart = partNumber;
  }
  return userProgress[userId];
}