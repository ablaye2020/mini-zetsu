cat > index.js << 'EOF'
const { default: makeWASocket } = require('@whiskeysockets/baileys');
const qrcode = require('qrcode-terminal');

console.log('⚔️ MINI ZETSU - Démarrage... ⚔️');

const sock = makeWASocket({
    printQRInTerminal: true,
    auth: { state: { creds: {}, keys: {} } }
});

sock.ev.on('connection.update', (update) => {
    if (update.qr) {
        qrcode.generate(update.qr, { small: true });
    }
    if (update.connection === 'open') {
        console.log('✅ MINI ZETSU CONNECTÉ !');
    }
});
EOF
