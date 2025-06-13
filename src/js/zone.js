export default function () {
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	const zoneMap = {
		"Asia/Jakarta": "WIB",
		"Asia/Pontianak": "WIB",
		"Asia/Makassar": "WITA",
		"Asia/Jayapura": "WIT",
	};

	return zoneMap[timeZone] || "Zona waktu tidak dikenali";
}
