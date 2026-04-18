cat > index.js << 'EOF'
import makeWASocket from '@whiskeysockets/baileys';
import qrcode from 'qrcode-terminal';

console.log('⚔️ MINI ZETSU - Démarrage... ⚔️');

const sock = makeWASocket({
    printQRInTerminal: true,
    auth: { state: { creds: {}, keys: {} } },
    browser: ['Ubuntu', 'Chrome', '20.0.04']
});

sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect, qr } = update;
    
    if (qr) {
        console.log('📱 Scanne ce QR code :');
        qrcode.generate(qr, { small: true });
    }
    
    if (connection === 'open') {
        console.log('✅ MINI ZETSU connecté !');
    }
    
    if (connection === 'close') {
        console.log('❌ Déconnecté, reconnexion...');
        setTimeout(() => {
            process.exit(1);
        }, 3000);
    }
});
EOF
