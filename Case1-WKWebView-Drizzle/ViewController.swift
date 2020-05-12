//
//  ViewController.swift
//  app
//
//  Created by Patricia on 11/02/2020.
//  Copyright © 2020 IWEB. All rights reserved.
//

import UIKit
import WebKit

let MessageHandler = "didFetchValue"

class ViewController: UIViewController {

    var valueKey: String!
    var needRequest: Bool!
    var lastMessage: String!
    var webView: WKWebView!
    @IBOutlet weak var label: UILabel!
    @IBOutlet weak var resetButton: UIButton!
    @IBOutlet weak var moreButton: UIButton!
    @IBOutlet weak var lessButton: UIButton!
    
    var script: String!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
               
        let config = WKWebViewConfiguration()
        
        let contentController = WKUserContentController()
        
        let drizzleScriptPath = Bundle.main.path(forResource: "packedDrizzle", ofType: "js", inDirectory: "JavascriptCode")
        let drizzleScriptString = try! String(contentsOfFile: drizzleScriptPath!, encoding: .utf8)
        let drizzleFetchValueScript = WKUserScript(source: drizzleScriptString, injectionTime: .atDocumentEnd, forMainFrameOnly: true)
        contentController.addUserScript(drizzleFetchValueScript)
        print("Drizzle importado")
        
        let truffleContractScriptPath = Bundle.main.path(forResource: "Contador", ofType: "js", inDirectory: "JavascriptCode")
        let truffleContractScriptString = try! String(contentsOfFile: truffleContractScriptPath!, encoding: .utf8)
        let truffleContractFetchValueScript = WKUserScript(source: truffleContractScriptString, injectionTime: .atDocumentEnd, forMainFrameOnly: true)
        contentController.addUserScript(truffleContractFetchValueScript)
        print("Contador importado")

        contentController.add(self, name: MessageHandler)
        config.userContentController = contentController
        
        self.webView = WKWebView(frame: CGRect.init(), configuration: config)
        
        let scriptPath = Bundle.main.path(forResource: "app", ofType: "js", inDirectory: "JavascriptCode")!
        self.script = try! String(contentsOfFile: scriptPath, encoding: .utf8)
        self.webView.load(URLRequest(url: URL(fileURLWithPath: scriptPath)))
        
        print("¿Cargando app.js?")
        print(self.webView.isLoading ? "Sí. Hay que esperar" : "Ya he terminado!")
        while (self.webView.isLoading) {
            CFRunLoopRunInMode(CFRunLoopMode.defaultMode, 0.1, false)
        }
        print(self.webView.isLoading ? "Sí. Hay que esperar" : "Ya he terminado!")
        print("")
        
        self.lastMessage = ""
        self.needRequest = true
        self.valueKey = ""
        self.webView.evaluateJavaScript(self.script+"setup()", completionHandler: nil)
    }
    
    @IBAction func incr(_ sender: UIButton) {
        print("-----------------")
        print("Incrementando valor")
        self.needRequest = true
        self.webView.evaluateJavaScript(self.script+"incr()", completionHandler: nil)
    }
    
    @IBAction func decr(_ sender: UIButton) {
        print("-----------------")
        print("Decrementando valor")
        self.needRequest = true
        self.webView.evaluateJavaScript(self.script+"decr()", completionHandler: nil)
    }
    
    @IBAction func reset(_ sender: UIButton) {
        print("-----------------")
        print("Restableciendo valor")
        self.needRequest = true
        self.webView.evaluateJavaScript(self.script+"reset()", completionHandler: nil)
    }
    
}

extension ViewController: WKScriptMessageHandler, WKNavigationDelegate {
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        
        let body = message.body as! String
        
        if body.localizedStandardContains("Estado actualizado") && self.lastMessage == "Estado actualizado" {
            // No imprimo mensajes duplicados. Ya he tomado medidas en el primer mensaje.
        } else if (body.localizedStandardContains("clave") && self.valueKey.hasPrefix("0x")) {
            // Me han pasado la clave del atributo valor, pero ya la tengo guardada.
        } else if (body.localizedStandardContains("clave") && !self.valueKey.hasPrefix("0x")) {
            // Me han pasado la clave del atributo valor, la guardo porque aún no la tengo.
            print(body)
            self.valueKey = "\(String(describing: body.split(separator: " ").last!))"
        } else if (body.localizedStandardContains("valor") && String(body.last!) == self.label.text) {
            // Me llega el mismo valor, informo pero no lo actualizo.
            print("Mismo valor, aún no ha cambiado")
        } else if (body.localizedStandardContains("Estado actualizado") && !self.needRequest && self.valueKey.hasPrefix("0x")){
            // El estado se ha actualizado y ya he hecho cacheCall(). Ya tengo la clave almacenada. Hago getValue()
            print(body)
            let key: String! = self.valueKey
            self.webView.evaluateJavaScript(self.script+"getValue(\"\(key!)\")", completionHandler: nil)
        } else if (body.localizedStandardContains("Estado actualizado")){
            // El estado se ha actualizado y aun no he hecho cacheCall(). Pido la clave
            print(body)
            self.needRequest = false
            self.webView.evaluateJavaScript(self.script+"getKey()", completionHandler: nil)
        } else if (body.localizedStandardContains("valor")) {
            // Me han pasado el valor. A partir de aqui, cualquier actualizacion necesita hacer cacheCall() de nuevo
            print(body)
            self.label.text = "\(String(describing: body.split(separator: " ").last!))"
            self.needRequest = true
        } else {
            print(body)
        }
        self.lastMessage = body

        // Para mandar varios paramteros y recogerlos
        // https://medium.com/john-lewis-software-engineering/ios-wkwebview-communication-using-javascript-and-swift-ee077e0127eb
    }

}




