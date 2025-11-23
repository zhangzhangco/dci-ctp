# CS2000 Spectroradiometer 控制库

适用于 Konica Minolta CS-2000/CS-2000A 分光辐射亮度计的 TypeScript 控制库。

## 功能特点

- ✅ 完整的 RS-232C 串口通信支持
- ✅ Mock 模式支持（无需真实硬件即可开发和测试）
- ✅ 色度测量（Lv, x, y, u', v', CCT, Δuv 等）
- ✅ TypeScript 类型安全
- ✅ 独立 CLI 工具
- ✅ 错误处理和超时保护

## 快速开始

### 安装依赖

```bash
npm install serialport @serialport/parser-delimiter
```

### 基础使用

```typescript
import { CS2000 } from '@/lib/hardware/cs2000';

// Mock 模式（用于开发和测试）
const device = new CS2000({ 
  portPath: 'COM1', 
  mock: true 
});

await device.connect();

// 执行测量
const estimatedTime = await device.measure();
console.log(`测量耗时约 ${estimatedTime} 秒`);

// 读取色度数据
const data = await device.readColorimetricData();
console.log(`亮度: ${data.Lv} cd/m²`);
console.log(`色度坐标: x=${data.x}, y=${data.y}`);
console.log(`色温: ${data.T} K`);

await device.disconnect();
```

### 真实设备使用

```typescript
const device = new CS2000({ 
  portPath: '/dev/tty.usbserial-1234', // macOS
  // portPath: 'COM3', // Windows
  baudRate: 115200,
  mock: false 
});

await device.connect();
await device.setRemoteMode(true);

// 执行测量...
```

## Mock 模式

Mock 模式无需真实硬件即可模拟 CS2000 设备的所有功能，非常适合：

- 前端开发和 UI 调试
- 自动化测试
- 演示和培训
- 在没有硬件的环境中开发

Mock 模式生成的数据符合真实 CS2000 的响应格式，包括：
- 符合 D65 白点的色度值 (x=0.3127, y=0.3290)
- 合理的亮度值（100 cd/m²）
- 相关色温 6500K
- 其他符合规范的色度学数据

## API 文档

### 构造函数

```typescript
new CS2000(config: CS2000Config)
```

**CS2000Config:**
- `portPath: string` - 串口路径（例如 'COM3' 或 '/dev/ttyUSB0'）
- `baudRate?: number` - 波特率，默认 115200
- `mock?: boolean` - 是否启用 Mock 模式，默认 false

### 方法

#### `connect(): Promise<void>`
连接到设备。Mock 模式下立即返回。

#### `disconnect(): Promise<void>`
断开设备连接。

#### `isDeviceConnected(): boolean`
检查设备是否已连接。用于心跳检测。

#### `getIdentification(): Promise<string>`
获取设备识别信息。
- 返回格式: `"CS-2000,1,MOCK123"` (Mock 模式)

#### `setRemoteMode(enable: boolean): Promise<void>`
设置远程控制模式。真实设备需要启用远程模式才能接受命令。

#### `measure(): Promise<number>`
执行一次测量。
- 返回预计测量时间（秒）
- 测量完成后需调用 `readColorimetricData()` 读取数据

#### `readColorimetricData(): Promise<ColorimetricData>`
读取色度测量数据。

**ColorimetricData:**
```typescript
{
  x: number;          // CIE 1931 色度坐标 x
  y: number;          // CIE 1931 色度坐标 y
  Lv: number;         // 亮度 (cd/m²)
  X: number;          // CIE XYZ 三刺激值 X
  Y: number;          // CIE XYZ 三刺激值 Y
  Z: number;          // CIE XYZ 三刺激值 Z
  u_prime: number;    // u' (CIE 1976 UCS)
  v_prime: number;    // v' (CIE 1976 UCS)
  T: number;          // 相关色温 (K)
  d_uv: number;       // Δuv 距黑体轨迹偏移
  lambda_d: number;   // 主波长 (nm)
  Pe: number;         // 激发纯度
}
```

## CLI 工具

提供了独立的命令行工具用于测试和调试：

```bash
# 运行 CLI
npx tsx src/lib/hardware/cs2000/demo.ts
```

**功能菜单：**
1. 连接 (Mock 模式)
2. 连接 (真实设备)
3. 获取设备识别
4. 执行测量
5. 读取色度数据
6. 断开连接
0. 退出

## 错误处理

库定义了完整的错误代码枚举：

```typescript
import { CS2000Error } from '@/lib/hardware/cs2000';

try {
  await device.measure();
} catch (error) {
  if (error.message.includes(CS2000Error.TIMEOUT)) {
    console.error('设备通信超时');
  } else if (error.message.includes(CS2000Error.ER02)) {
    console.error('测量错误 - 检查测量条件');
  }
}
```

**常见错误代码：**
- `OK00` - 正常完成
- `ER00` - 无效命令
- `ER02` - 测量错误
- `ER10` - 超出测量范围
- `ER20` - 无数据
- `TIMEOUT` - 通信超时

## 技术规格

- **通信协议**: RS-232C
- **波特率**: 115200 bps (默认)
- **数据位**: 8
- **停止位**: 1
- **校验**: 无
- **命令终止符**: CR+LF (`\r\n`)

## 注意事项

1. **真实设备使用前**：
   - 确保设备已正确连接到串口
   - 确认串口路径正确（Windows: `COM*`, macOS/Linux: `/dev/tty*`）
   - 设备需要预热至少 30 分钟以获得稳定测量

2. **测量注意事项**：
   - 测量前确保光源稳定
   - 保持测量距离和角度一致
   - 避免环境光干扰
   - 首次测量可能需要较长时间

3. **Mock 模式限制**：
   - 不执行真实测量
   - 返回固定的模拟数据
   - 仅用于开发和测试，不能用于实际校准

## 示例场景

### 场景 1: 快速测量并显示结果

```typescript
import { CS2000 } from '@/lib/hardware/cs2000';

async function quickMeasure() {
  const device = new CS2000({ portPath: 'COM3', mock: false });
  
  try {
    await device.connect();
    await device.setRemoteMode(true);
    
    console.log('开始测量...');
    await device.measure();
    
    const data = await device.readColorimetricData();
    console.log(`
      测量结果:
      亮度: ${data.Lv.toFixed(2)} cd/m²
      色度: (${data.x.toFixed(4)}, ${data.y.toFixed(4)})
      色温: ${data.T.toFixed(0)} K
      Δuv: ${data.d_uv.toFixed(4)}
    `);
  } finally {
    await device.disconnect();
  }
}
```

### 场景 2: React 组件中使用

```typescript
import { CS2000, ColorimetricData } from '@/lib/hardware/cs2000';

function MeasurementComponent() {
  const [data, setData] = useState<ColorimetricData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleMeasure = async () => {
    const device = new CS2000({ portPath: 'COM3', mock: true });
    
    try {
      setIsLoading(true);
      await device.connect();
      await device.measure();
      const result = await device.readColorimetricData();
      setData(result);
    } catch (error) {
      console.error('测量失败:', error);
    } finally {
      setIsLoading(false);
      await device.disconnect();
    }
  };
  
  return (
    <div>
      <button onClick={handleMeasure} disabled={isLoading}>
        {isLoading ? '测量中...' : '开始测量'}
      </button>
      {data && (
        <div>
          <p>亮度: {data.Lv} cd/m²</p>
          <p>色度: ({data.x}, {data.y})</p>
        </div>
      )}
    </div>
  );
}
```

## 许可证

此库为项目内部使用。

## 相关文档

- [CS-2000/CS-2000A 用户手册](https://www.konicaminolta.com)
- [DCI 规范文档](https://www.dcimovies.com/)
