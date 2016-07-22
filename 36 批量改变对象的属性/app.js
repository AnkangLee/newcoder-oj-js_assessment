function alterObjects(constructor, greeting) {
    return constructor.prototype.greeting = greeting;
}
