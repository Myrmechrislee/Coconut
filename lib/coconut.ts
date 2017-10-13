/// <reference path="index.d.ts" />

import dgram = require('dgram');
import pug = require('pug');
import ext_zip = require('extract-zip');
import uuid = require('uuid/v4');
import {Response} from "./response";

export class CoconutServer {
    private UDP_Server: dgram.Socket;
    private Handlers: ((_in: Incomming_Msg<any>, _out: Response<any>, err: Error) => void)[];
    constructor(type: dgram.SocketType, port: number) {
        var self = this;
        this.UDP_Server = dgram.createSocket(type);

        this.UDP_Server.on('message', function(msg, rinfo){
            self.Handlers.forEach(item => {
                item(JSON.parse(msg.toString('utf8')), new Response(self.UDP_Server, rinfo), undefined);
            });
        });
    }
    appendHandler<TBody>(handler: (_in: Incomming_Msg<TBody>, _out: Response<TBody>, err: Error) => void): void {
        this.Handlers.push(handler);
    }
}