
namespace Arducam {
    const ARDUCHIP_TEST1 = 0x00;
    const ARDUCHIP_FIFO  = 0x04;  //FIFO and I2C control
    const FIFO_CLEAR_MASK = 0x01;
    const FIFO_START_MASK = 0x02;
    const ARDUCHIP_TRIG = 0x41;
    const CAP_DONE_MASK = 0x08;
    const FIFO_SIZE1	= 0x42  //Camera write FIFO size[7:0] for burst to read
    const FIFO_SIZE2	= 0x43  //Camera write FIFO size[15:8]
    const FIFO_SIZE3	= 0x44  //Camera write FIFO size[18:16]
    const MAX_FIFO_SIZE = 0x5FFFF
    const BURST_FIFO_READ = 0x3C

    let jpeg = [{ addr: 0xe0, value: 0x14 }, { addr: 0xe1, value: 0x77 }, { addr: 0xe5, value: 0x1f }, { addr: 0xd7, value: 0x03 }, { addr: 0xda, value: 0x10 }, { addr: 0xe0, value: 0x00 }, { addr: 0xFF, value: 0x01 }, { addr: 0x04, value: 0x08 }, { addr: 0xff, value: 0xff }]
    let yuv = [{ addr: 0xFF, value:0x00 }, { addr: 0x05, value:0x00 }, { addr: 0xDA, value:0x10 }, { addr: 0xD7, value:0x03 }, { addr: 0xDF, value:0x00 }, { addr: 0x33, value:0x80 }, { addr: 0x3C, value:0x40 }, { addr: 0xe1, value:0x77 }, { addr: 0x00, value:0x00 }, { addr: 0xff, value:0xff }]
    let jpegInit = [{ addr: 0xff, value: 0x00 }, { addr: 0x2c, value: 0xff }, { addr: 0x2e, value: 0xdf }, { addr: 0xff, value: 0x01 }, { addr: 0x3c, value: 0x32 }, { addr: 0x11, value: 0x00 }, { addr: 0x09, value: 0x02 }, { addr: 0x04, value: 0x28 }, { addr: 0x13, value: 0xe5 }, { addr: 0x14, value: 0x48 }, { addr: 0x2c, value: 0x0c }, { addr: 0x33, value: 0x78 }, { addr: 0x3a, value: 0x33 }, { addr: 0x3b, value: 0xfB }, { addr: 0x3e, value: 0x00 }, { addr: 0x43, value: 0x11 }, { addr: 0x16, value: 0x10 }, { addr: 0x39, value: 0x92 }, { addr: 0x35, value: 0xda }, { addr: 0x22, value: 0x1a }, { addr: 0x37, value: 0xc3 }, { addr: 0x23, value: 0x00 }, { addr: 0x34, value: 0xc0 }, { addr: 0x36, value: 0x1a }, { addr: 0x06, value: 0x88 }, { addr: 0x07, value: 0xc0 }, { addr: 0x0d, value: 0x87 }, { addr: 0x0e, value: 0x41 }, { addr: 0x4c, value: 0x00 }, { addr: 0x48, value: 0x00 }, { addr: 0x5B, value: 0x00 }, { addr: 0x42, value: 0x03 }, { addr: 0x4a, value: 0x81 }, { addr: 0x21, value: 0x99 }, { addr: 0x24, value: 0x40 }, { addr: 0x25, value: 0x38 }, { addr: 0x26, value: 0x82 }, { addr: 0x5c, value: 0x00 }, { addr: 0x63, value: 0x00 }, { addr: 0x61, value: 0x70 }, { addr: 0x62, value: 0x80 }, { addr: 0x7c, value: 0x05 }, { addr: 0x20, value: 0x80 }, { addr: 0x28, value: 0x30 }, { addr: 0x6c, value: 0x00 }, { addr: 0x6d, value: 0x80 }, { addr: 0x6e, value: 0x00 }, { addr: 0x70, value: 0x02 }, { addr: 0x71, value: 0x94 }, { addr: 0x73, value: 0xc1 }, { addr: 0x12, value: 0x40 }, { addr: 0x17, value: 0x11 }, { addr: 0x18, value: 0x43 }, { addr: 0x19, value: 0x00 }, { addr: 0x1a, value: 0x4b }, { addr: 0x32, value: 0x09 }, { addr: 0x37, value: 0xc0 }, { addr: 0x4f, value: 0x60 }, { addr: 0x50, value: 0xa8 }, { addr: 0x6d, value: 0x00 }, { addr: 0x3d, value: 0x38 }, { addr: 0x46, value: 0x3f }, { addr: 0x4f, value: 0x60 }, { addr: 0x0c, value: 0x3c }, { addr: 0xff, value: 0x00 }, { addr: 0xe5, value: 0x7f }, { addr: 0xf9, value: 0xc0 }, { addr: 0x41, value: 0x24 }, { addr: 0xe0, value: 0x14 }, { addr: 0x76, value: 0xff }, { addr: 0x33, value: 0xa0 }, { addr: 0x42, value: 0x20 }, { addr: 0x43, value: 0x18 }, { addr: 0x4c, value: 0x00 }, { addr: 0x87, value: 0xd5 }, { addr: 0x88, value: 0x3f }, { addr: 0xd7, value: 0x03 }, { addr: 0xd9, value: 0x10 }, { addr: 0xd3, value: 0x82 }, { addr: 0xc8, value: 0x08 }, { addr: 0xc9, value: 0x80 }, { addr: 0x7c, value: 0x00 }, { addr: 0x7d, value: 0x00 }, { addr: 0x7c, value: 0x03 }, { addr: 0x7d, value: 0x48 }, { addr: 0x7d, value: 0x48 }, { addr: 0x7c, value: 0x08 }, { addr: 0x7d, value: 0x20 }, { addr: 0x7d, value: 0x10 }, { addr: 0x7d, value: 0x0e }, { addr: 0x90, value: 0x00 }, { addr: 0x91, value: 0x0e }, { addr: 0x91, value: 0x1a }, { addr: 0x91, value: 0x31 }, { addr: 0x91, value: 0x5a }, { addr: 0x91, value: 0x69 }, { addr: 0x91, value: 0x75 }, { addr: 0x91, value: 0x7e }, { addr: 0x91, value: 0x88 }, { addr: 0x91, value: 0x8f }, { addr: 0x91, value: 0x96 }, { addr: 0x91, value: 0xa3 }, { addr: 0x91, value: 0xaf }, { addr: 0x91, value: 0xc4 }, { addr: 0x91, value: 0xd7 }, { addr: 0x91, value: 0xe8 }, { addr: 0x91, value: 0x20 }, { addr: 0x92, value: 0x00 }, { addr: 0x93, value: 0x06 }, { addr: 0x93, value: 0xe3 }, { addr: 0x93, value: 0x05 }, { addr: 0x93, value: 0x05 }, { addr: 0x93, value: 0x00 }, { addr: 0x93, value: 0x04 }, { addr: 0x93, value: 0x00 }, { addr: 0x93, value: 0x00 }, { addr: 0x93, value: 0x00 }, { addr: 0x93, value: 0x00 }, { addr: 0x93, value: 0x00 }, { addr: 0x93, value: 0x00 }, { addr: 0x93, value: 0x00 }, { addr: 0x96, value: 0x00 }, { addr: 0x97, value: 0x08 }, { addr: 0x97, value: 0x19 }, { addr: 0x97, value: 0x02 }, { addr: 0x97, value: 0x0c }, { addr: 0x97, value: 0x24 }, { addr: 0x97, value: 0x30 }, { addr: 0x97, value: 0x28 }, { addr: 0x97, value: 0x26 }, { addr: 0x97, value: 0x02 }, { addr: 0x97, value: 0x98 }, { addr: 0x97, value: 0x80 }, { addr: 0x97, value: 0x00 }, { addr: 0x97, value: 0x00 }, { addr: 0xc3, value: 0xed }, { addr: 0xa4, value: 0x00 }, { addr: 0xa8, value: 0x00 }, { addr: 0xc5, value: 0x11 }, { addr: 0xc6, value: 0x51 }, { addr: 0xbf, value: 0x80 }, { addr: 0xc7, value: 0x10 }, { addr: 0xb6, value: 0x66 }, { addr: 0xb8, value: 0xA5 }, { addr: 0xb7, value: 0x64 }, { addr: 0xb9, value: 0x7C }, { addr: 0xb3, value: 0xaf }, { addr: 0xb4, value: 0x97 }, { addr: 0xb5, value: 0xFF }, { addr: 0xb0, value: 0xC5 }, { addr: 0xb1, value: 0x94 }, { addr: 0xb2, value: 0x0f }, { addr: 0xc4, value: 0x5c }, { addr: 0xc0, value: 0x64 }, { addr: 0xc1, value: 0x4B }, { addr: 0x8c, value: 0x00 }, { addr: 0x86, value: 0x3D }, { addr: 0x50, value: 0x00 }, { addr: 0x51, value: 0xC8 }, { addr: 0x52, value: 0x96 }, { addr: 0x53, value: 0x00 }, { addr: 0x54, value: 0x00 }, { addr: 0x55, value: 0x00 }, { addr: 0x5a, value: 0xC8 }, { addr: 0x5b, value: 0x96 }, { addr: 0x5c, value: 0x00 }, { addr: 0xd3, value: 0x00 }, { addr: 0xc3, value: 0xed }, { addr: 0x7f, value: 0x00 }, { addr: 0xda, value: 0x00 }, { addr: 0xe5, value: 0x1f }, { addr: 0xe1, value: 0x67 }, { addr: 0xe0, value: 0x00 }, { addr: 0xdd, value: 0x7f }, { addr: 0x05, value: 0x00 }, { addr: 0x12, value: 0x40 }, { addr: 0xd3, value: 0x04 }, { addr: 0xc0, value: 0x16 }, { addr: 0xC1, value: 0x12 }, { addr: 0x8c, value: 0x00 }, { addr: 0x86, value: 0x3d }, { addr: 0x50, value: 0x00 }, { addr: 0x51, value: 0x2C }, { addr: 0x52, value: 0x24 }, { addr: 0x53, value: 0x00 }, { addr: 0x54, value: 0x00 }, { addr: 0x55, value: 0x00 }, { addr: 0x5A, value: 0x2c }, { addr: 0x5b, value: 0x24 }, { addr: 0x5c, value: 0x00 }, { addr: 0xff, value: 0xff }]
    let jpeg320_240 = [{ addr: 0xff, value: 0x01 }, { addr: 0x12, value: 0x40 }, { addr: 0x17, value: 0x11 }, { addr: 0x18, value: 0x43 }, { addr: 0x19, value: 0x00 }, { addr: 0x1a, value: 0x4b }, { addr: 0x32, value: 0x09 }, { addr: 0x4f, value: 0xca }, { addr: 0x50, value: 0xa8 }, { addr: 0x5a, value: 0x23 }, { addr: 0x6d, value: 0x00 }, { addr: 0x39, value: 0x12 }, { addr: 0x35, value: 0xda }, { addr: 0x22, value: 0x1a }, { addr: 0x37, value: 0xc3 }, { addr: 0x23, value: 0x00 }, { addr: 0x34, value: 0xc0 }, { addr: 0x36, value: 0x1a }, { addr: 0x06, value: 0x88 }, { addr: 0x07, value: 0xc0 }, { addr: 0x0d, value: 0x87 }, { addr: 0x0e, value: 0x41 }, { addr: 0x4c, value: 0x00 }, { addr: 0xff, value: 0x00 }, { addr: 0xe0, value: 0x04 }, { addr: 0xc0, value: 0x64 }, { addr: 0xc1, value: 0x4b }, { addr: 0x86, value: 0x35 }, { addr: 0x50, value: 0x89 }, { addr: 0x51, value: 0xc8 }, { addr: 0x52, value: 0x96 }, { addr: 0x53, value: 0x00 }, { addr: 0x54, value: 0x00 }, { addr: 0x55, value: 0x00 }, { addr: 0x57, value: 0x00 }, { addr: 0x5a, value: 0x50 }, { addr: 0x5b, value: 0x3c }, { addr: 0x5c, value: 0x00 }, { addr: 0xe0, value: 0x00 }, { addr: 0xff, value: 0xff }]
    
    function writeReg(addr: number, data: number) {
        pins.digitalWritePin(DigitalPin.P0, 0);
        pins.spiWrite(addr | 0x80);
        pins.spiWrite(data);
        pins.digitalWritePin(DigitalPin.P0, 1);
    }

    function readReg(addr: number) {
        pins.digitalWritePin(DigitalPin.P0, 0);
        pins.spiWrite(addr);
        let value = pins.spiWrite(0x00)
        pins.digitalWritePin(DigitalPin.P0, 1); 
        
        return value;

    }
    interface reg {
        addr: number,
        value: number
    }
    



    function wrSensorReg8_8(id: number, data: number) {
        let buffer = pins.createBuffer(2)
        buffer.setUint8(0, id)
        buffer.setUint8(1, data)
        pins.i2cWriteBuffer(0x30, buffer)
    }

    function wrSensorRegs8_8(regs: SensorReg[]) {
        regs.forEach(function (reg: SensorReg, index: number) {
          wrSensorReg8_8(reg.addr, reg.value)
        })
    } 

    function readFrame() {
        // get length
        let length = ((readReg(FIFO_SIZE3) << 16) | (readReg(FIFO_SIZE2) << 8) | readReg(FIFO_SIZE1)) & 0x07fffff;
        if (length >= MAX_FIFO_SIZE || length == 0) {
            return
        }
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.spiWrite(BURST_FIFO_READ)
        while (length--) {
            let buf = pins.createBuffer(1)
            buf.setUint8(0, pins.spiWrite(0))
            serial.writeBuffer(buf)
        }
        pins.digitalWritePin(DigitalPin.P0, 1)
        return;
    }


    export enum IMAGE_FORMAT {
        BMP = 0x00,
        JPEG = 0x01,
        RAW = 0x02,
    }

    export enum IMAGE_RESOLUTION {
         
        OV2640_320x240 = 2, 
         OV2640_640x480 = 4	, 
         OV2640_800x600 = 5	, 
         OV2640_1600x1200 = 8,
    }




    /**
     * Init Camera First
     * @param pin share pin
     * @param format image fromat
     */
    //% blockId=camera_init block="Init Camera with format $format and resolution $reso"
    export function initCamera(format: IMAGE_FORMAT, reso: IMAGE_RESOLUTION) {
        pins.digitalWritePin(DigitalPin.P0, 1);
        writeReg(0x07, 0x80);
        basic.pause(100);
        writeReg(0x07, 0x00);
        basic.pause(100);

        while(true) {
            writeReg(ARDUCHIP_TEST1, 0x55);
            let value = readReg(ARDUCHIP_TEST1);
            if (value != 0x55) {
                basic.showIcon(IconNames.Sad)
                basic.pause(1000); 
                basic.clearScreen();
                continue;
            } else {
                basic.showIcon(IconNames.Happy)
                break;
            }
        }

        wrSensorReg8_8(0xff, 0x01)
        // wrSensorReg8_8(0x12, 0x80)
        basic.pause(100);
        // format = IMAGE_FORMAT.JPEG
        if (format == IMAGE_FORMAT.JPEG) {
            wrSensorRegs8_8(OV2640_JPEG_INIT)
            wrSensorRegs8_8(OV2640_YUV422);
            wrSensorRegs8_8(OV2640_JPEG);
            wrSensorReg8_8(0xff, 0x01);
            wrSensorReg8_8(0x15, 0x00);
            wrSensorRegs8_8(OV2640_320x240_JPEG);

        } else {
            // wrSensorRegs8_8(OV2640_QVGA);
        }
    }

    /**
     * capture
     */
    //% blockId=camera_capture block="capture"
    export function capture() {
        writeReg(ARDUCHIP_FIFO, FIFO_CLEAR_MASK);
        writeReg(ARDUCHIP_FIFO, FIFO_START_MASK);

        while(!(readReg(ARDUCHIP_TRIG) & CAP_DONE_MASK)) {
            // wait capture finished
        }
        readFrame();
        
    }

    
    
}