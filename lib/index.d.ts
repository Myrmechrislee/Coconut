interface RemoteInfo {
    address: string;
    family: string;
    port: number;
}

interface AddressInfo {
    address: string;
    family: string;
    port: number;
}

interface BindOptions {
    port: number;
    address?: string;
    exclusive?: boolean;
}

type SocketType = "udp4" | "udp6";

interface SocketOptions {
    type: SocketType;
    reuseAddr?: boolean;
}
interface Mime_Type {
    'begin-connection': '_serv/begin',
    'html': 'text/html',
    'jpg': 'image/jpg',
    'jpeg': 'image/jpg',
    'gif': 'image/gif',
    'png': 'image/png',
    'css': 'text/stylesheet',
    'js': 'text/javascript',
    'json-data': 'text/json',
    'lookup': '_serv/connection-lookup',
    'download-zip': 'text/zip',
    'plain': 'text/plain'
}
interface RenderStringType {
    'pug': 'pug'
}
interface CoconutHeaders {
    _id: string;
    mine_type: keyof Mime_Type;
    finish: boolean;
}
interface Incomming_Msg<T> {
    headers: Headers;
    addressInfo: AddressInfo;
    body: T;
}
interface Outgoing_data<TBody> {
    header: {
        _id: string;
        mine_type: keyof Mime_Type;
    }
    body?: TBody;
}