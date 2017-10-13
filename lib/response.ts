/// <reference path="index.d.ts" />
import dgram = require('dgram');
import uuid = require('uuid/v4');

export class Response<TBody> {
    private Server: dgram.Socket;
    private headers: CoconutHeaders = {
        _id: "" + uuid(),
        finish: true,
        mine_type: 'plain'
    };
    private client: dgram.AddressInfo;
    constructor(server: dgram.Socket, clientInfo: dgram.AddressInfo) {
        this.Server = server;
        this.client = clientInfo;
    }
    /**
     * Send data to client
     * @param msg message to send to client
     * @param finish finish the message
     */
    send(msg: TBody, finish?: boolean): void {
        var o: {headers: CoconutHeaders, body?: TBody} = {
            headers: this.headers,
            body: msg
        }
        this.Server.send(
            new Buffer(JSON.stringify(o)),
            this.client.port,
            this.client.address
        )
    };
    Download() {
        
    }
}