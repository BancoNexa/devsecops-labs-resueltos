
// credenciales_SEGURO.dart
// Requiere dependencia: flutter_secure_storage (en proyecto real).
// Aquí simulamos la API para fines didácticos.
class SecureStorage {
  final Map<String, String> _kv = {};
  Future<void> write({required String key, required String value}) async {
    // Simulación de cifrado + almacenamiento seguro
    _kv[key] = "***CIFRADO***" + value; 
  }
  Future<String?> read({required String key}) async => _kv[key];
}

final storage = SecureStorage();

Future<void> savePasswordSecure(String password) async {
  // ✅ No loguear credenciales, ni rutas
  await storage.write(key: 'password', value: password);
}

void main() async {
  await savePasswordSecure("N3xa@123");
}
