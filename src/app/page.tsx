import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, FlaskConical, Building } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">LED Cinema CTP Test System</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          DCI 合规性测试平台 - 管理 LED 影院显示系统的三阶段测试流程
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mt-12">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Monitor className="h-6 w-6 text-primary" />
              <CardTitle>Phase 1: 设备级测试</CardTitle>
            </div>
            <CardDescription>
              在实验室环境下测试 LED 屏本体的物理性能
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              测试项目：亮度、对比度、灰阶、色彩精度、均匀性
            </p>
            <Link href="/devices">
              <Button variant="outline" className="w-full">
                管理设备
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <FlaskConical className="h-6 w-6 text-primary" />
              <CardTitle>Phase 2: 系统级测试</CardTitle>
            </div>
            <CardDescription>
              CTP 原生测试 - 完整链路合规性验证
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              DCP → 服务器 → 处理器 → LED 屏
            </p>
            <Link href="/ctp">
              <Button variant="outline" className="w-full">
                CTP 总览
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Building className="h-6 w-6 text-primary" />
              <CardTitle>Phase 3: 影厅级测试</CardTitle>
            </div>
            <CardDescription>
              真实影厅环境下的呈现质量验证
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              环境光、视角、安装质量、观影体验
            </p>
            <Link href="/sessions">
              <Button variant="outline" className="w-full">
                测试记录
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>快速开始</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>在 <Link href="/devices" className="text-primary underline">设备管理</Link> 中添加需要测试的 LED 设备</li>
              <li>在 <Link href="/sessions" className="text-primary underline">测试会话</Link> 中创建新的测试轮次</li>
              <li>根据测试阶段，填写相应的测量数据</li>
              <li>在 <Link href="/ctp" className="text-primary underline">CTP 总览</Link> 中查看合规性结果</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
