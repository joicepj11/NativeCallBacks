package com.nativecallbacks;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class Message extends ReactContextBaseJavaModule {

    public Message(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    //this method registers with react native application
    @Override
    public String getName() {
        return "Message";
    }
    
    @ReactMethod
    public void displayGreetingMessage(String name , Callback callback){
        callback.invoke(name + " hello from react");
    }

}
