export interface Mailer {
    id: string
    name: string
}

export interface List {
    id: string
    name:  string
}

export interface Mailing {
    id: string
    mailerId: string
    listID: string
    scheduleDateTime: string
}