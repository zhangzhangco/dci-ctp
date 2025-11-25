import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, FlaskConical, Building, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="container mx-auto py-10 space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 md:p-12 animate-fade-in">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="relative text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
            LED Cinema CTP Test System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            DCI 合规性测试平台 - 管理 LED 影院显示系统的三阶段测试流程
          </p>
        </div>
      </div>

      {/* Phase Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="card-hover group border-2 hover:border-primary/50 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                <Monitor className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="group-hover:text-primary transition-colors">Phase 1: 设备级测试</CardTitle>
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
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                管理设备
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="card-hover group border-2 hover:border-primary/50 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
                <FlaskConical className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="group-hover:text-primary transition-colors">Phase 2: 系统级测试</CardTitle>
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
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                CTP 总览
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="card-hover group border-2 hover:border-primary/50 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all">
                <Building className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <CardTitle className="group-hover:text-primary transition-colors">Phase 3: 影厅级测试</CardTitle>
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
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                测试记录
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Quick Start Guide */}
      <Card className="animate-fade-in border-primary/20" style={{ animationDelay: '0.4s' }}>
        <CardHeader>
          <CardTitle className="text-2xl">快速开始</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="space-y-3">
            <li className="flex items-start space-x-3 group">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-all">1</span>
              <p className="text-sm pt-1">在 <Link href="/devices" className="text-primary font-medium underline hover:text-primary/80">设备管理</Link> 中添加需要测试的 LED 设备</p>
            </li>
            <li className="flex items-start space-x-3 group">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-all">2</span>
              <p className="text-sm pt-1">在 <Link href="/sessions" className="text-primary font-medium underline hover:text-primary/80">测试会话</Link> 中创建新的测试轮次</p>
            </li>
            <li className="flex items-start space-x-3 group">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-all">3</span>
              <p className="text-sm pt-1">根据测试阶段，填写相应的测量数据</p>
            </li>
            <li className="flex items-start space-x-3 group">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-all">4</span>
              <p className="text-sm pt-1">在 <Link href="/ctp" className="text-primary font-medium underline hover:text-primary/80">CTP 总览</Link> 中查看合规性结果</p>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}

