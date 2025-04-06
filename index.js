#!/usr/bin/env node

const argv = process.argv.slice(2);
import { createHash } from 'crypto';

const [service_name, account_name, pass_phrase] = argv;

if (!service_name || !account_name || !pass_phrase) {
    console.error("Usage: pwd <service_name> <account_name> <pass_phrase>");
    console.error("As service name use google.com not account.google.com");
    process.exit(1);
}

const full = service_name + account_name + pass_phrase;

function encrypThis(input) {
    const hash = createHash('md5')
        .update(input)
        .digest('hex');
    
    return `A${hash}_`;
}

const encryptedValue = encrypThis(full);

console.log(encryptedValue);



