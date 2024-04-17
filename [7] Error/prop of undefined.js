function safeGetProperty(obj, prop) {
  try {
    return obj[prop];
  }
  catch(error) {
    if (error instanceof TypeError) {
      return undefined;
    }
    throw error;
  }
}

console.log(safeGetProperty(undefined, 'name'))