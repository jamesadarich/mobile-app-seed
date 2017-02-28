import "tns-platform-declarations/android.d";

export class Receiver extends android.content.BroadcastReceiver {
    public onReceive(context: android.content.Context, intent: android.content.Intent) {
        const serviceIntent = new android.content.Intent(context, Receiver.class);
        serviceIntent.putExtra("something", intent.getSerializableExtra(""));
        context.startService(serviceIntent);

    }
}

export class Item {
    id: number;
    name: string;
    role: string;
}
