window.onerror = function (errorMessage, file, line, col, error) {
  const errorInfo = {
    message: errorMessage,
    href: window.location.href,
    stack: error.stack,
    screen: {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }
  fetch('http://localhost:3000/error', {method: 'post', body: JSON.stringify(errorInfo)})

  console.dir(errorMessage, file, line, col, error);
};

class FormatError extends SyntaxError {
  constructor(...props) {
    super(...props);
    this.name = "FormatError";
  }
}

try {
  throw new Error(111);
} catch (error) {
    console.dir(String(error));
    throw error;
}

console.log(1);
