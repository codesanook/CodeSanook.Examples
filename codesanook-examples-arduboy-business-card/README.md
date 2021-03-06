# Arduboy Business Card

## Idea

https://community.arduboy.com/t/qr-code-business-card-how-to/5453

## Generate QR code

To generate QR code image, change data query string value.
https://api.qrserver.com/v1/create-qr-code/?size=64x64&data=https://www.codesanook.com

## Convert QR code image to char array

To convert QR code image to char array, use the follow tool
https://teamarg.github.io/arduboy-image-converter/

## Example QR code variable

The content of QR code is https://www.codesanook.com

```
    const unsigned char PROGMEM qrCode[] =
    {
        // width, height,
        64, 64,
        0xff, 0x01, 0x01, 0xf9, 0xf9, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0xf9, 0xf9, 0x01, 0x01, 0x01, 0xff, 0xff, 0xe7, 0xe7, 0xe7, 0x01, 0x01, 0x1f, 0x1f, 0x1f, 0x07, 0x07, 0xe7, 0xe7, 0xe7, 0xff, 0xff, 0x1f, 0x1f, 0x1f, 0xe7, 0xe7, 0xe1, 0xe1, 0xe1, 0xff, 0xff, 0x01, 0x01, 0x01, 0xf9, 0xf9, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0xf9, 0xf9, 0x01, 0x01, 0x01, 0xff,
        0xff, 0x00, 0x00, 0x7f, 0x7f, 0x60, 0x60, 0x60, 0x60, 0x60, 0x60, 0x60, 0x60, 0x7f, 0x7f, 0x00, 0x00, 0x00, 0xff, 0xff, 0x1c, 0x1c, 0x1c, 0xfc, 0xfc, 0x03, 0x03, 0x03, 0xfc, 0xfc, 0x63, 0x63, 0x63, 0x80, 0x80, 0x1c, 0x1c, 0x1c, 0x9c, 0x9c, 0x00, 0x00, 0x00, 0xff, 0xff, 0x00, 0x00, 0x00, 0x7f, 0x7f, 0x60, 0x60, 0x60, 0x60, 0x60, 0x60, 0x60, 0x60, 0x7f, 0x7f, 0x00, 0x00, 0x00, 0xff,
        0xff, 0x8c, 0x8c, 0x8c, 0x8c, 0x8c, 0x8c, 0x8c, 0x0c, 0x0c, 0x0c, 0x0c, 0x0c, 0x7c, 0x7c, 0x8c, 0x8c, 0x8c, 0x0f, 0x0f, 0x0c, 0x0c, 0x0c, 0x0f, 0x0f, 0x8c, 0x8c, 0x8c, 0xff, 0xff, 0x80, 0x80, 0x80, 0x0f, 0x0f, 0x8c, 0x8c, 0x8c, 0x83, 0x83, 0x70, 0x70, 0x70, 0x0f, 0x0f, 0xfc, 0xfc, 0xfc, 0x0c, 0x0c, 0xfc, 0xfc, 0xfc, 0x8c, 0x8c, 0xfc, 0xfc, 0xfc, 0x0c, 0x0c, 0xfc, 0xfc, 0xfc, 0xff,
        0xff, 0x3f, 0x3f, 0xc1, 0xc1, 0xff, 0xff, 0xff, 0xce, 0xce, 0x0e, 0x0e, 0x0e, 0x0e, 0x0e, 0x31, 0x31, 0x31, 0xf0, 0xf0, 0xfe, 0xfe, 0xfe, 0x00, 0x00, 0xcf, 0xcf, 0xcf, 0x01, 0x01, 0x31, 0x31, 0x31, 0x30, 0x30, 0x01, 0x01, 0x01, 0x01, 0x01, 0xce, 0xce, 0xce, 0x00, 0x00, 0x31, 0x31, 0x31, 0x00, 0x00, 0x31, 0x31, 0x31, 0xf1, 0xf1, 0x3f, 0x3f, 0x3f, 0x30, 0x30, 0x01, 0x01, 0x01, 0xff,
        0xff, 0x00, 0x00, 0xff, 0xff, 0x07, 0x07, 0x07, 0xff, 0xff, 0xf8, 0xf8, 0xf8, 0x3e, 0x3e, 0xc6, 0xc6, 0xc6, 0xff, 0xff, 0x3f, 0x3f, 0x3f, 0x06, 0x06, 0x39, 0x39, 0x39, 0xfe, 0xfe, 0xf8, 0xf8, 0xf8, 0xc0, 0xc0, 0x06, 0x06, 0x06, 0xc6, 0xc6, 0x01, 0x01, 0x01, 0x00, 0x00, 0xc6, 0xc6, 0xc6, 0x00, 0x00, 0x06, 0x06, 0x06, 0xc1, 0xc1, 0xfe, 0xfe, 0xfe, 0xc0, 0xc0, 0x06, 0x06, 0x06, 0xff,
        0xff, 0x18, 0x18, 0x1f, 0x1f, 0x18, 0x18, 0x18, 0x18, 0x18, 0x1f, 0x1f, 0x1f, 0x18, 0x18, 0x18, 0x18, 0x18, 0xf8, 0xf8, 0x00, 0x00, 0x00, 0x1f, 0x1f, 0x00, 0x00, 0x00, 0xe0, 0xe0, 0xf8, 0xf8, 0xf8, 0x00, 0x00, 0xf8, 0xf8, 0xf8, 0xe7, 0xe7, 0x00, 0x00, 0x00, 0xf8, 0xf8, 0x18, 0x18, 0x18, 0xf8, 0xf8, 0x00, 0x00, 0x00, 0xe7, 0xe7, 0x18, 0x18, 0x18, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0xff,
        0xff, 0x00, 0x00, 0xff, 0xff, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0xff, 0xff, 0x00, 0x00, 0x00, 0xff, 0xff, 0x03, 0x03, 0x03, 0x03, 0x03, 0x1f, 0x1f, 0x1f, 0x80, 0x80, 0xe3, 0xe3, 0xe3, 0x03, 0x03, 0x7c, 0x7c, 0x7c, 0x63, 0x63, 0x80, 0x80, 0x80, 0xe3, 0xe3, 0x83, 0x83, 0x83, 0xe3, 0xe3, 0x80, 0x80, 0x80, 0x1c, 0x1c, 0x03, 0x03, 0x03, 0x9f, 0x9f, 0x1f, 0x1f, 0x1f, 0xff,
        0xff, 0x80, 0x80, 0x8f, 0x8f, 0x8c, 0x8c, 0x8c, 0x8c, 0x8c, 0x8c, 0x8c, 0x8c, 0x8f, 0x8f, 0x80, 0x80, 0x80, 0xff, 0xff, 0x80, 0x80, 0x80, 0xf0, 0xf0, 0x8c, 0x8c, 0x8c, 0xf3, 0xf3, 0x83, 0x83, 0x83, 0x8c, 0x8c, 0x8c, 0x8c, 0x8c, 0xf0, 0xf0, 0xf3, 0xf3, 0xf3, 0xf3, 0xf3, 0xff, 0xff, 0xff, 0x83, 0x83, 0x83, 0x83, 0x83, 0x80, 0x80, 0x8c, 0x8c, 0x8c, 0x8f, 0x8f, 0x80, 0x80, 0x80, 0xff,
    };
```
