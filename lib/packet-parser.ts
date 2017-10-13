export class Packet {
    packet: string;
    constructor(incomming_packet: Buffer) {
        this.packet = incomming_packet.toString('hex');
    }
}