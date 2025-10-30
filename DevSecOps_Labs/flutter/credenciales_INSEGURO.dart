
// credenciales_INSEGURO.dart
// Demostración: NO hacer esto en apps móviles.
import 'dart:io';

void savePasswordInsecure(String password) async {
  final file = File('/storage/emulated/0/pass.txt');
  await file.writeAsString(password); // ❌ Texto plano en almacenamiento externo
  print("Password guardada en: ${file.path}"); // ❌ Log de ruta sensible
}

// Simulación de uso
void main() {
  savePasswordInsecure("N3xa@123");
}
