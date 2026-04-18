cat > index.js << 'EOF'
import makeWASocket from '@whiskeysockets/baileys';
import qrcode from 'qrcode-terminal';

console.log('⚔️ MINI ZETSU - Démarrage... ⚔️');

const sock = makeWASocket({
    printQRInTerminal: true,
    auth: { state: { creds: {}, keys: {} } }
});

sock.ev.on('connection.update', (update) => {
    if (update.qr) {
        console.log('📱 Scanne ce QR code :');
        qrcode.generate(update.qr, { small: true });
    }
    if (update.connection === 'open') {
        console.log('✅ MINI ZETSU connecté !');
    }
});
EOF
