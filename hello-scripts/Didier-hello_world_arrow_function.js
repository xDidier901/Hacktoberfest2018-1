console.log(hello(() => "Hello World!"));

function hello(customFunction) {
    return customFunction();
}