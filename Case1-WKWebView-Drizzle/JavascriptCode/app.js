var globalObject;

function setup() {
    globalObject = {
        drizzle: [],
        drizzleState: {},
        account: ''
    }
    // let drizzle know what contract we want
    const options = {
        contracts: [ Contador ],
        web3: {
            fallback: {
                type: "ws",
                url: "ws://127.0.0.1:7545"
            }
        }
    };

    // setup the drizzle store and drizzle
    globalObject.drizzle = new Drizzle.Drizzle(options);
    
    globalObject.drizzle.store.subscribe(() => {
        const drizzleState = globalObject.drizzle.store.getState();
        if (globalObject.drizzle.store.getState().drizzleStatus.initialized) {
            //cada vez que cambia algo, actualizo el objeto con el estado
            globalObject.drizzleState = drizzleState;
            webkit.messageHandlers.didFetchValue.postMessage("Estado actualizado");
        }
    });
}

function getKey() {
    if (globalObject.drizzleState.drizzleStatus.initialized) {
        let key = globalObject.drizzle.contracts.Contador.methods.valor.cacheCall();
        webkit.messageHandlers.didFetchValue.postMessage("Mensaje recibido: La clave es "+key);
    } else {
        let string = JSON.stringify(globalObject.drizzleState)
        webkit.messageHandlers.didFetchValue.postMessage("No inicializado. Drizzle state: "+string);
    }
}

function getValue(key) {
    if (globalObject.drizzleState.drizzleStatus.initialized) {
        let valor = globalObject.drizzleState.contracts.Contador.valor[key].value;
        webkit.messageHandlers.didFetchValue.postMessage("Mensaje recibido: El valor es "+valor);
    } else {
        let string = JSON.stringify(globalObject.drizzleState)
        webkit.messageHandlers.didFetchValue.postMessage("No inicializado. Drizzle state: "+string);
    }
}

function incr() {
    if (globalObject.drizzleState.drizzleStatus.initialized) {
        globalObject.drizzle.contracts.Contador.methods.incr.cacheSend({from: globalObject.drizzleState.accounts[0]});
    } else {
        let string = JSON.stringify(globalObject.drizzleState)
        webkit.messageHandlers.didFetchValue.postMessage("No inicializado. Drizzle state: "+string);
    }
}

function decr() {
    if (globalObject.drizzleState.drizzleStatus.initialized) {
        globalObject.drizzle.contracts.Contador.methods.decr.cacheSend({from: globalObject.drizzleState.accounts[0]});
    } else {
        let string = JSON.stringify(globalObject.drizzleState)
        webkit.messageHandlers.didFetchValue.postMessage("No inicializado. Drizzle state: "+string);
    }
}

function reset() {
    if (globalObject.drizzleState.drizzleStatus.initialized) {
        globalObject.drizzle.contracts.Contador.methods.reset.cacheSend({from: globalObject.drizzleState.accounts[0]});
    } else {
        let string = JSON.stringify(globalObject.drizzleState)
        webkit.messageHandlers.didFetchValue.postMessage("No inicializado. Drizzle state: "+string);
    }
}
