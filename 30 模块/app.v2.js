function createModule(greeting, name) {
    return {
        greeting,
        name,
        sayIt() {
            return this.greeting + ', ' + this.name;
        }
    }
}
