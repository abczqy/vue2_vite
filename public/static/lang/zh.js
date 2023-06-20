// module.exports = { 旧版本导出
const zh = {
  language: '中文',
  // 头部
	head: {
    //PC样式
		more: '更多',
		hide: '隐藏',
    //移动端样式
    expand: '展开更多',
    collapse: '收起'
	},
  // 首页
  index: {
    nav: {
      search: '按算法名称搜索',
      video: '您的浏览器不支持Video标签。'
    },

    product: {
      title: '云图睿视边缘计算硬件平台AI-BOX',
      desc: '云图睿视边缘计算智能终端AI-BOX，是全球首款，也是唯一一款支持多传感器接入和算法灵活调度的人工智能边缘计算硬件。',
      point1: '小巧便携',
      point2: '接口丰富',
      point3: '性能强劲',
      point4: '预置AI标准化能力',
      learnMore: '了解详情',
    },
    os: {
      title: '边缘操作系统BEACON OS',
      desc: '云图睿视BEACON OS是专为边缘计算和AI运行而生的操作系统。内置统一的AI能力支撑平台，支持当前所有市场主流算法框架所训练的算法模型。BeaconOS所运行的算法均已定义好输入和输出格式并且遵循行业标准，通过类似App Store的方式完成下载安装，极大的加快了算法部署的效率。',
      point1: '开放',
      point2: '标准',
      point3: '安全',
      ads: {
        a1: '基于Linux打造',
        a2: '提供远程运维能力',
        a3: '机器视觉框架基于Intel OpenVINO',
        a4: '适配Intel中央处理器和各AI协处理器',

        b1: '沙盒和证书加密保证系统安全',
        b2: '适配遵循AI计算盒参考设计的硬件',
        b3: '物联网框架基于EdgeX Foundry',
        b4: '可运行于端、边、云提供标准能力支撑',

        t1: '* 注：包括Intel ATOM，赛扬，酷睿，至强，Movidius，Xe，FPGA',
        t2: '* 注：AI计算盒参考设计 https://ccechina.intel.cn/aiboxHome'
      },
      learnMore: '了解详情'
    },

    store: {
      store: '算法商城',
      desc: '所有算法由第三方算法开发团队训练开发，并使用云图睿视SDK进行标准化封装，下载后可直接在已安装云图睿视Beacon OS的硬件上运行，无需开发。算法上线前，云图睿视对算法开发者所提供的数据进行审核和验证。算法定价由算法开发者自主制定，算法订阅提供年订阅和永久订阅两种模式。云图睿视提供算法增量训练平台，在该平台上算法开发者可以进一步优化算法精度。进行增量训练后的算法，其归属权依然属于算法开发团队。',
      aiNumber: '约500种算法',
      free: '30天免费试用',
      unsub: '支持无条件退订',
      see: '查看详情'
    }
  },

  // 设备
  product: {
    banner_desc: '云图睿视边缘计算硬件平台',
    title: {
      name: '边缘计算硬件平台AI-BOX',
      overview: '概览',
      specs: '技术规格',
      buy: '登录后购买'
    },
    intro: {
      fullName: '云图睿视边缘计算硬件平台AI-BOX',
      intro: '提供标准算例和通用算法框架支撑。基于IntelAI推导加速器的设备，预置各类主流算法框架及多种算法，提供标准化的输入与输出。',
      video: '观看视频',
      power: '提供标准算力',
      frame: '和通用算法框架支撑'
    },
    size: {
      title: '身材纤细',
      volume: '整机规格尺寸小巧美观：124*62*32mm',
      weight: '重量轻巧：270克，携带/安装方便',
      thermolysis: '散热：无风扇设计'
    },
    performance: {
      title: '性能强劲',
      frequency: '4核 1.1Ghz 最高2.2Ghz4G,',
      ram: 'RAM/32G Flash,8 TOPS AI 算力'
    },
    interface: {
      title: '接口丰富',
      p1: '预置AI标准化能力,支持AI主流算法框架,预置28类算法。',
      p2: '预置图像预处理算法,算法统一配置，动态配置,输入输出。',
      p3: '标准化,最大8个算法用例同时运行。',
      optional: '4G/5G 可选 '
    },
    advantages: {
      title: '产品优势',
      title1: '简单',
      line1: '即插即用，不改变原监控系统，接口简单方便，采用HTTP输出标准JSON。',
      line2: '管理简单,浏览器直接管理设备易操作。',
      title2: '统一',
      line3: '接口输出结构统一,适用与任意检测算法。',
      line4: '数据统一汇集至网关，统一处理。',
      title3: '灵活',
      line5: '算法商城提供丰富算法，可任意下载切换。',
      line6: '开发者社区支持，芯片厂商直接对接。',
      line7: '支持自行部署算法，或上传至算法商城提供给其他用户。',
      title4: '注释',
      line8: '需为算法商城所提供的检测算法。',
      line9: '算法商城可批量部署算法和运维工作。',
      line10: '可选收费或免费模式提供，支持共同维护完善生态。',
    },
    point: {
      param: '技术参数（需技术确认提供哪些参数对外公示合适）',
      use: '技术参数（需技术确认提供哪些参数对外公示合适）'
    },

    // ----- 信步科技 ---------
    // SV-U1150
    U1150:{
      deviceTitle:"SV-U1150",
      companyName:"深圳市信步科技有限公司",
      overview:"产品概述",
      overviewItem:"AI-BOX通用计算平台, 采用第11代 Intel Core 或 Celeron 处理器 ( Tiger Lake )",
      features:"产品特点",
      featuresItem1:"采用第11代 Intel Core 或 Celeron 处理器 ( Tiger Lake )",
      featuresItem2:"提供 2*Intel 千兆网口, 6*USB 3.0, 6*COM, 2*HDMI 等丰富 IO",
      featuresItem3:"提供 2*M.2, 1*Mini-PCIe, 支持 WiFi/4G 模块, SATA",
      featuresItem4:"支持 Intel OpenVINO 深度学习加速计算",
      featuresItem5:"紧凑小尺寸, 无风扇一体式散热设计",
      specification:"规格详情",
      cpuInfo:"CPU",
      cpuInfoItem:"Intel® 11th CoreTM i7-1165G7, i5-1135G7, i3-1115G4 28W default, 12W/15W BIOS optional or Celeron® 6305E CPU",
      memoryInfo:"内存",
      memoryInfoItem:"DDR4-3200, 2*SO-DIMM, up to 64 GB",
      storageInfo:"硬盘",
      storageInfoItem:"1*SATA 3.0 , 1*M.2 (Key-M, 2280, PCIe x4/ SATA SSD)",
      expansionInterface:"扩展接口",
      expansionInterfaceItem:"1*M.2 (Key-E, 2230, PCIe+USB, Wifi+BT), 1*Mini-PCIe  (PCIe/USB, Wifi/4G)",
      biosInfo:"BIOS",
      biosInfoItem:"AMI UEFI BIOS",
      systemInfo:"系统",
      systemInfoItem:"Windows 10, Linux",
      ioInfo:"I/O 接口",
      ethernetInfo:"网口",
      ethernetInfoItem:"2*Intel® 1Gbps PCIe Ethernet Controller, RJ45",
      serialInfo:"串口",
      serialInfoItem:"3*RS232, 2*RS232/ TTL, 1*RS232/ RS485/ TTL",
      usbInfo:"USB",
      usbInfoItem:"6*USB 3.0, 4*USB 2.0",
      audioInfo:"音频",
      audioInfoItem:"Realtek® 5.1 channel HDA Codec, with MIC/Line-out",
      GPIOInfo:"GPIO",
      GPIOInfoItem:"8*Programmable GPIO",
      DisplayInfo:"显示",
      DisplayInterface:"接口显示",
      DisplayInterfaceItem:"2*HDMI: max resolution up to 4096*2160@30Hz 1*LVDS/eDP:LVDS, Dual Channel 24 bit, max resolution up to 1920*1200@60Hz eDP, max resolution up to 3840x2160@60Hz",
      MultipleDisplay:"多重显示",
      MultipleDisplayItem:"Triple",
      MechanicalEnvironment:"机械 & 环境",
      MechanicalEnvironmentInfo:"尺寸",
      MechanicalEnvironmentItem:"166*125*47mm",
      PowerInput:"电源输入",
      PowerInputItem:"DC 12V",
      Temperature:"温度",
      TemperatureItem:"工作温度: 0℃~60℃,  存储温度: -25℃~75℃",
      RelativeHumidity:"相对湿度",
      RelativeHumidityItem:"工作湿度: 10%~90%， 存储湿度：5%~95%， 不凝结",
    },
    //SV-IEM
    IEM:{
      deviceTitle:"SV-IEM", // SV-IEM
      companyName:"深圳市信步科技有限公司", // Shenzhen Seavo Technology Co.,Ltd
      overview:"产品概述", // Product Overview
      overviewItem:"机器视觉计算平台, 采用第11代 Intel Core 或 Celeron 处理器 (Tiger Lake), IEM 模块化规范设计", // Machine vision computing platform, using 11th generation Intel Core or Celeron processors (Tiger Lake), IEM modular specification design
      features:"产品特点", // Product Features
      featuresItem1:"采用第11代 Intel Core 或 Celeron 处理器 (Tiger Lake)", // Powered by 11th generation Intel Core or Celeron processors (Tiger Lake)
      featuresItem2:"提供5个Intel 千兆网口, 支持4路 POE 供电", // Provide 5 Intel Gigabit network ports, support 4 POE power supply
      featuresItem3:"4*USB 3.0, 2*COM, 1*HDMI, 1*LVDS/eDP", // 4*USB 3.0, 2*COM, 1*HDMI, 1*LVDS/eDP
      featuresItem4:"采用 Intel IEM 模块化规范设计，可灵活搭配 I/O 扩展模块", // Designed with Intel IEM modular specification, flexible with I/O expansion modules
      featuresItem5:"提供3*M.2, 支持 PCIe x4 NVMe SSD, 4G/5G, Wifi+BT", // Provides 3*M.2, supports PCIe x4 NVMe SSD, 4G/5G, Wifi+BT
      specification:"规格详情",
      cpuInfo:"CPU",
      cpuInfoItem:"Intel® 11th CoreTM i7-1165G7, i5-1135G7, i3-1115G4 28W default, 12W/15W BIOS optional or Celeron® 6305E CPU",
		  memoryInfo:"内存", //Memory
      memoryInfoItem:"Support DDR4 3200 MHz, 2*SO-DIMM Slot, up to 64GB",
      storageInfo:"硬盘", //Storage
      storageInfoItem:"1*M.2 (NGFF) Key-M Slot (PCIe x4 Gen4 NVMe SSD, 2242/2280) 1*SATA 3.0",
      expansionInterface:"扩展接口", //Expansion Interface
      expansionInterfaceItem:"1*M.2 (NGFF) Key-B Slot (PCIe + USB, Support 4G/5G, 3042/3052) 1*M.2 (NGFF) Key-E Slot (PCIe + USB, Support Wifi+BT, 2230) 1*EIO Connector, for I/O Expansion, e.g. 2*GbE LAN, 4*COM, 1*HDMI, 2*DP",
      biosInfo:"BIOS",
      biosInfoItem:"AMI UEFI BIOS",
      systemInfo:"系统", //System
      systemInfoItem:"Windows 10 64-bit, Linux", // Windows 10 64-bit, Linux
      ioInfo:"I/O 接口",//I/O Interface
      ethernetInfo:"网口",//Ethernet
      ethernetInfoItem:"5*Intel® 1Gbps PCIe Ethernet Controller, RJ45 4*LAN Support POE",
      serialInfo:"串口",//Serial
      serialInfoItem:"2*RS232/485 (COM1/2, Full lanes, DB9/M/ Header) 2*RS232 (COM3/4, 2 lanes, Header)",
      usbInfo:"USB",
      usbInfoItem:"4*USB3.0 (TYPE-A, Rear I/O) 2*USB2.0 (Header, Internal)",
      audioInfo:"音频",//Audio
      audioInfoItem:"Realtek ALC662 5.1 Channel HDA Codec 1*Line-Out + MIC 2in1 3.5mm Jack 2*Amplifier, 5-W (per channel) into an 8-Ω Loads",
      DisplayInfo:"显示",//Display
      DisplayInterface:"接口显示",//Display Interface
      DisplayInterfaceItem:"1*HDMI: max resolution up to 4096*2160@24Hz 1*LVDS/eDP: LVDS maxresolution up to 1920*1200@60Hz (default) or eDP max resolution up to 4096*2304@60Hz",
      MultipleDisplay:"多重显示",//Multiple Display
      MultipleDisplayItem:"Dual",
      MechanicalEnvironment:"机械 & 环境",//Mechanical & Environment
      MechanicalEnvironmentInfo:"尺寸",//Dimension
      MechanicalEnvironmentItem:"210*140*65mm",
      PowerInput:"电源输入",//Power Input
      PowerInputItem:"DC 24V 1*ATX 4P Power InputRight Angle Connector 1*DC 24V Power Input Φ2.5mm Jack",
      Temperature:"温度",
      TemperatureItem:"工作温度: 0℃~60℃,  存储温度: -25℃~75℃",//Operation: 10%~90%, Storage: 5%~95%, non-condensing
      RelativeHumidity:"相对湿度",//Relative Humidity
      RelativeHumidityItem:"工作湿度: 10%~90%, 存储湿度: 5%~95%, 不凝结",
    },
    //D221
    D221:{
      deviceTitle:"SV-D221",
      companyName:"深圳市信步科技有限公司",//Shenzhen Seavo Technology Co.,Ltd
      overview:"产品概述",//Product Overview
      overviewItem:"AI-BOX通用计算平台, 采用第11代 Intel Core 或 Celeron 处理器 ( Tiger Lake )",//5G+AI edge computing gateway, SCM core modular design, supports 11th generation Intel Core or Celeron processors (Tiger Lake)
		  features:"产品特点",//Product Features
		  featuresItem1:"可根据边缘AI计算需求，灵活选择信步SCM-C核心模块",//Flexible selection of Shinebu SCM-C core modules based on edge AI computing requirements
		  featuresItem2:"支持选用第11代Intel Core或Celeron处理器 (Tiger Lake)",//Supports optional 11th generation Intel Core or Celeron processors (Tiger Lake)
		  featuresItem3:"提供2个千兆网口, 4*USB, 3*COM, HDMI等接口",//Provides 2 Gigabit LAN ports, 4*USB, 3*COM, HDMI and other interfaces
		  featuresItem4:"提供3*M.2, 支持5G/4G模块, WiFi+BT模块, SATA",//Provide 3*M.2, support 5G/4G module, WiFi+BT module, SATA
		  featuresItem5:"提供基于Intel OpenVINO的AI开发套件",//Provides Intel OpenVINO-based AI development kit
		  featuresItem6:"143*96*43mm小巧尺寸, DC 12-28V供电",//143*96*43mm compact size, DC 12-28V power supply
		  specification:"规格详情",//Specification
		  cpuInfo:"CPU",
		  cpuInfoItem:"Intel® 11th CoreTM i3/i5/i7 or Celeron® CPU, Intel® 6/7/8th CoreTM i3/i5/i7, or Celeron® CPU, Intel® Celeron® J1900/J1800 CPU",
			memoryInfo:"内存",//Memory
		  memoryInfoItem:"DDR4 Memory, 1*SO-DIMM, up to 16 GB,DDR4 Memory, 1*SO-DIMM, up to 16 GB,DDR3L Memory, 1*SO-DIMM, up to 8 GB",
		  storageInfo:"硬盘",//Storage
		  storageInfoItem:"1*eMMC 8/16/32G optional on SCM Module, 1*SATA",
      expansionInterface:"扩展接口",//Expansion Interface
      expansionInterfaceItem:"1*M.2 (Key-B, 3042-4G, 3052-5G), 1*M.2 (Key-B, 2242, SATA), 1*M.2 (Key-E, 2230, Wifi+BT)",
      ioInfo:"I/O 接口",//I/O Interface
      ethernetInfo:"网口",//Ethernet
      ethernetInfoItem:"2* Intel® 1Gbps PCIe Ethernet Controller, RJ45",
      serialInfo:"串口",//Serial
      serialInfoItem:"2*COM port or header, RS232/485, 1*COM in terminal block, RS232/485",
      usbInfo:"USB",
      usbInfoItem:"2*USB3.0 (Rear I/O), 2*USB2.0 (Header)",
      audioInfo:"音频",//Audio
      audioInfoItem:"Audio with MIC and Line-out",
      GPIOInfo:"GPIO",
      GPIOInfoItem:"8*Programmable GPIO",
      FeatureInterface:"功能界面",//Feature Interface
      FeatureInterfaceItem:"1*SIM Pin Header",
      DisplayInfo:"显示",//Display
      DisplayInterface:"接口显示",//Display Interface
      DisplayInterfaceItem:"1*HDMI",
      MechanicalEnvironment:"机械 & 环境",//Mechanical & Environment
      MechanicalEnvironmentInfo:"尺寸",
      MechanicalEnvironmentItem:"143*96*43mm",//Dimension
      PowerInput:"电源输入",//Power Input
      PowerInputItem:"DC 12V",
      Temperature:"温度",//Temperature
      TemperatureItem:"工作温度: 0℃~60℃,  存储温度: -20℃~75℃",//Operation: 0℃~60℃, Storage: -20℃~75℃
      RelativeHumidity:"相对湿度",//Relative Humidity
      RelativeHumidityItem:"工作湿度: 10%~90%, 存储湿度: 5%~95%, 不凝结",
    },
    //U1160
    U1160:{
      deviceTitle:"SV-U1160",
      companyName:"深圳市信步科技有限公司",//Shenzhen Seavo Technology Co.,Ltd
      overview:"产品概述",//Product Overview
      overviewItem:"AI-BOX通用计算平台, 采用第11代 Intel Core 或 Celeron 处理器 ( Tiger Lake )",//5G+AI edge computing gateway, SCM core modular design, supports 11th generation Intel Core or Celeron processors (Tiger Lake)
		  features:"产品特点",//Product Features
		  
      featuresItem1:"采用第11代Intel Core或Celeron处理器 (Tiger Lake)-C核心模块",//Flexible selection of Shinebu SCM-C core modules based on edge AI computing requirements
		  featuresItem2:" 单双千兆网口可选, 4*USB 3.0, 8*USB 2.0, 4*COM ",//Supports optional 11th generation Intel Core or Celeron processors (Tiger Lake)
		  featuresItem3:" 1*mSATA, 1*M.2 Wifi+BT, 1*M.2 PCIe x4/ SSD ",//Provides 2 Gigabit LAN ports, 4*USB, 3*COM, HDMI and other interfaces
		  featuresItem4:" 支持HDMI, DP, eDP, LVDS/eDP四屏独立显示 ",//Provide 3*M.2, support 5G/4G module, WiFi+BT module, SATA
		  featuresItem5:" 支持Intel OpenVINO深度学习加速计算 ",//Provides Intel OpenVINO-based AI development kit
		  specification:"规格详情",//Specification
		  cpuInfo:"CPU",
		  cpuInfoItem:"Intel® 11th CoreTM i7-1165G7, i5-1135G7, i3-1115G4 28W default, 12W/15W BIOS optional or Celeron® 6305E CPU",
			memoryInfo:"内存",//Memory
		  memoryInfoItem:" DDR4 Memory, 1*SO-DIMM, up to 16 GB ",
		  storageInfo:"硬盘",//Storage
		  storageInfoItem:" 1*SATA 3.0, 1*mSATA ",
      expansionInterface:"扩展接口",//Expansion Interface
      expansionInterfaceItem:" 1*M.2 (Key-E, 2230, Wifi+BT), 1*M.2 (Key-M, 2242/2280, PCIe x4/ SATA SSD)",
      biosInfo: 'BIOS',
      biosInfoItem: ' AMI UEFI BIOS ',
      systemInfo: '系统',
      systemInfoItem: ' Windows 10, Linux ',
      ioInfo:"I/O 接口",//I/O Interface
      ethernetInfo:"网口",//Ethernet
      ethernetInfoItem:" 1/2* Realtek® 1Gbps PCIe Ethernet Controller, RJ45",
      serialInfo:"串口",//Serial
      serialInfoItem:" 3*RS232, 1*RS232/RS485 ",
      usbInfo:"USB",
      usbInfoItem:" 4*USB 3.0, 8*USB 2.0 ",
      audioInfo:"音频",//Audio
      audioInfoItem:" Realtek® 5.1 channel HDA Codec, with MIC/Line-out and Amplifier",
      GPIOInfo:"GPIO",
      GPIOInfoItem:"8*Programmable GPIO",
      //其他
      otherinfo: '其它', //Other
      otherinfoInfo: ' 1*Cash Drawer Control header ',

      DisplayInfo:"显示",//Display
      DisplayInterface:"接口显示",//Display Interface
      DisplayInterfaceItem:"1*HDMI",
      MultipleDisplay: '多重显示', //Multiple Display
      MultipleDisplayInfo: ' Quad ',
    
      MechanicalEnvironment:"机械 & 环境",//Mechanical & Environment
      MechanicalEnvironmentInfo:"尺寸", //Dimension
      MechanicalEnvironmentItem:" 200*214*39mm ",//Dimension
      PowerInput:"电源输入",//Power Input
      PowerInputItem:"DC 12V",
      Temperature:"温度",//Temperature
      TemperatureItem:"工作温度: 0℃~60℃,  存储温度: -20℃~75℃",//Operation: 0℃~60℃, Storage: -20℃~75℃
      RelativeHumidity:"相对湿度",//Relative Humidity
      RelativeHumidityItem:"工作湿度: 10%~90%, 存储湿度: 5%~95%, 不凝结",
    },
    //B2651
    B2651:{
      deviceTitle:"SV-B2651",
      companyName:"深圳市信步科技有限公司",
      overview:"产品概述",//Product Overview
      overviewItem:"工业边缘计算平台, SCM核心模块化设计, 灵活满足机器视觉,运动控制等负载整合需求",//Industrial edge computing platform, SCM core modular design, flexible to meet the machine vision, Motion control and other load integration requirements
      features: "产品特点",//Product Features
      featuresItem1: "可根据工业边缘计算需求, 灵活选择信步SCM-D/C核心模块",//Flexible choice of Cybersys SCM-D/C core modules to meet industrial edge computing needs
      featuresItem2: "支持第6/7/8/9/11代Intel Core, Celeron桌面级或移动级处理器",//Supports 6th/7th/8th/9th/11th generation Intel Core, Celeron desktop or mobile processors
      featuresItem3: "2*Intel千兆网口, 最多支持4*USB 3.0, 6*USB 2.0, 6*COM",//2*Intel Gigabit LAN ports, support up to 4*USB 3.0, 6*USB 2.0, 6*COM
      featuresItem4: "1*VGA, 1*HDMI, 1*LVDS/eDP",//1*VGA, 1*HDMI, 1*LVDS/eDP
      featuresItem5: "提供1*M.2, 2*Mini-PCIe, PCIe x16丰富扩展",//Provide 1*M.2, 2*Mini-PCIe, PCIe x16 rich expansion
      featuresItem6: "235*155*57mm, DC 12V供电",//235*155*57mm, DC 12V power supply
      specification: "规格详情",//Specification
      cpuInfo: "CPU",
      cpuInfoItem:"Intel® 6th/7th/8th/9th CoreTM i3/i5/i7, Pentium®, Celeron® CPU; Intel® 11th CoreTM i3/i5/i7 or Celeron® CPU; Intel® 6/7/8th CoreTM i3/i5/i7, or Celeron® CPU; Intel® Celeron® J1900/J1800 CPU",
      memoryInfo:"内存",//Memory
      memoryInfoItem:"DDR4-2133/2400/2666, 2*SO-DIMM, up to 32 GB;DDR4 Memory, 1*SO-DIMM, up to 16 GB;DDR4 Memory, 1*SO-DIMM, up to 16 GB;DDR3L-1333, 1*SO-DIMM, upto 8 GB",
      storageInfo:"硬盘",//Storage
      storageInfoItem:"1*mSATA/ M.2 (Key-M, 2242/2280, PCIe x4 NVMe/ SATA SSD); 1*SATA 3.0/2.0;",
      expansionInterface:"扩展接口",//Expansion Interface
      expansionInterfaceItem:"1*M.2 (Key-E, 2230/2242/2280, WIFI+BT); 2*Mini-PCIe (1*mSATA, 1*Wifi/3G/4G); 1*PCIe x16 Golden Finger; SCM-D: 2*PCIe x1 + 1*PCIe x4 + 1*PCIe x16 + 1*USB; SCM-C: 2*PCIe x1 + 1*PCIe x4 + 1*USB;",
      biosInfo:"BIOS",
      biosInfoItem:"AMI UEFI BIOS",
      systemInfo:"系统",//System
      systemInfoItem:"Windows 10, Linux;SCM-C (Bay Trail): Windows7/8.1/10, Linux",
      ioInfo:"I/O 接口",//I/O Interface
      ethernetInfo:"网口",//Ethernet
      ethernetInfoItem:"2* Intel® 1Gbps PCIe Ethernet Controller, RJ45",
      serialInfo:"串口",//Serial
      serialInfoItem:"4*RS232, 2*RS232/RS485",
      usbInfo:"USB",
      usbInfoItem:"4*USB 3.0, 6*USB 2.0;SCM-C (Bay Trail): 1*USB3.0, 9*USB 2.0",
      audioInfo:"音频",//Audio
      audioInfoItem:"Audio with MIC/Line-out and Amplifier",
      GPIOInfo:"GPIO",
      GPIOInfoItem:"8*Programmable GPIO",
      DisplayInfo:"显示",//Display
      DisplayInterface:"接口显示",//Display Interface
      DisplayInterfaceItem:"1*VGA, 1*HDMI, 1*LVDS/eDP",
      MechanicalEnvironment:"机械 & 环境",//Mechanical & Environment
      MechanicalEnvironmentInfo:"尺寸",//Dimension
      MechanicalEnvironmentItem:"235*155*57mm",
      PowerInput:"电源输入",//Power Input
      PowerInputItem:"DC 12V",//DC 12V
      Temperature:"温度",//Temperature
      TemperatureItem:"工作温度: 0℃~60℃,  存储温度: -20℃~75℃",//Operation: 0℃~60℃, Storage: -20℃~75℃
      RelativeHumidity:"相对湿度",//Relative Humidity
      RelativeHumidityItem:"工作湿度: 10%~90%， 存储湿度：5%~95%， 不凝结"
    },
    // 南京泰尼狗
    TINYGO: {
      AI5033: {
        deviceTitle:"AI5033",
        companyName:"南京泰尼狗智能技术有限公司", // "Nanjing Tiny Dog Intelligent Technology Co.,Ltd"
        overview:"产品概述", // Product Overview
        overviewItem:"AI5033是一款无风扇低功耗高性能嵌入式整机, 整机采用 铝合金结构挤压成形 ，结构紧凑，具备较高的 防磁、防尘、防腐蚀、防辐射、防冲击的能力，也有高效自主散热的性能；主板搭载Intel Tiger Lake-U 嵌入式处理器 ，具备高效能，性能稳定的特点；适用于VR、视频监控、AI 深度学习等强悍AI 计算的应用平台。",
        // overviewItem:"AI5033 is a fanless, low-power, high-performance embedded machine, the whole machine using aluminum alloy structure extrusion molding, compact structure, with high anti-magnetic, dust, corrosion, radiation, impact resistance, but also efficient independent cooling performance; the motherboard is equipped with Intel Tiger Lake-U embedded processor, with high performance, stable performance characteristics; suitable for VR, video surveillance, AI deep learning and other strong AI computing application platform.",
        features:"产品特点", // Product Features
        featuresItem1:"整机密闭无风扇设计, 整合AI 计算和工控特性",
        // featuresItem1:"Fanless design, integrated AI computing and industrial control features",
        featuresItem2:"Intel 11代赛扬嵌入式CPU自带AI算力，满足AI边缘计算 应用场景需求",
        // featuresItem2:"Intel 11th generation Celeron embedded CPUs come with AI computing power to meet the needs of AI edge computing application scenarios",
        featuresItem3:"整机功耗小，性能优良，环境适应性强，除广泛应用于机器视觉、高速公路、车道控制、机械检测设备、智能交通、智慧工厂、智能电力控制、数控设备制造；也能适用于VR、视频监控、AI 以及深度学习等方面的领域", // 4*USB 3.0, 2*COM, 1*HDMI, 1*LVDS/eDP
        // featuresItem3:"It is widely used in machine vision, highway, lane control, mechanical testing equipment, intelligent transportation, smart factory, intelligent power control, CNC equipment manufacturing; it can also be applied to VR, video surveillance, AI and deep learning.",
        
        specification:"规格详情",//Specification
        cpuInfo:"CPU",
        cpuInfoItem:"板载Intel® Tiger Lake-U Celeron 6305 1.80 GHz 15W",
        // cpuInfoItem:"Onboard Intel® Tiger Lake-U Celeron 6305 1.80 GHz 15W",
        memoryInfo:"内存", //Memory
        memoryInfoItem:"1* DDR4 SO-DIMM，Normal 8GB，Up to 16GB",
        storageInfo:"存储", //Storage
        storageInfoItem:"1*M.2 SSD Slot (Support PCIE and SATA Signal),mini PCIE(SATA/PCIe either-or)",
        systemInfo:"系统", //System
        systemInfoItem:"Windows 10 / Linux / Unix", // Windows 10 64-bit, Linux
        expansionInterface:"其他接口", //Other interfaces
        expansionInterfaceItem:"2*COM (Support RS-232,RS-422,RS-485), 3*USB3.1(10Gbps), 1*USB2.0(480Mbps) 1*Audio(2CH), SIM+4G Model (SATA/PCIe either-or),",

        ioInfo:"I/O 接口",//I/O Interface
        ethernetInfo:"网络",//Ethernet
        ethernetInfoItem:"i211(1000Mbps ) , i219-LM (1000Mbps )",

        Wireless: '无线通信',//Wireless Communication
        WirelessItem: '1*WIFI (SATA/PCIe either-or), SIM+4G Model (SATA/PCIe either-or)',
        DisplayInfo:"显示",//Display
        DisplayInfoInterface:"显示接口",//Display
        DisplayInfoItem:"4*HDMI (Support 4K 60p Hz) 1*Type C (Support Display and data transfer)",

        Environment:"环境",//Mechanical & Environment
        Size:"尺寸",
        Sizeinfo:"198mm(L)x 144.7mm(W)x 47mm(H)",
        PowerInput:"电源输入",//Power Input
        PowerInputItem:"12V/5A",
        Temperature:"工作温度",//Temperature
        TemperatureItem:"-10℃~50℃",//Operation: 0℃~60℃, Storage: -25℃~75℃
        RelativeHumidity:"相对湿度",//Relative Humidity
        RelativeHumidityItem:"5%~95%",
      },
      AI_7702: {
        deviceTitle:"AI-7702",
        companyName:"南京泰尼狗智能技术有限公司", // "Nanjing Tiny Dog Intelligent Technology Co.,Ltd"
        overview:"产品概述", // Product Overview
        overviewItem1:"AI-7702 是一款无风扇低功耗高性能嵌入式工控整机，机壳采用铝合金挤压成形，结构紧凑、坚固、无风扇设计，鳍片外壳兼作散热用；具有优良的密封防尘、散热与抗振性能，可以满足在污染大、灰尘多、电磁干扰严重等恶劣环境中的使用。",
        overviewItem2:"AI-7702 也是一款嵌入式高性能 AI 计算平台，搭载第 11 代 Intel Tiger Lake-U 系列嵌入式处理器，板载 SDRAM LPDDR4 8G 内存，最大支持 24GB；6 个 COM 口；HDMI*3+VGA（内部预留 eDP 接口，VGA 和 eDP 二选一），2*LAN, 4*USB3.0+4*USB2.0，1*Mini PCIe，支持 4G 及 Wifi/BT 等无线功能；1*mSATA 全高插槽；2 个 M.2 接口（支持 NVMe SSD 或 AI 加速模块）；1*SATA3.0 2.5 寸硬盘用于存储；高性能，丰富的 IO 功能接口，整机背板预留 PCIE16X 插槽（实际 4X 速率）+PCIE8X 插槽（实际 1X 速率）用于扩展箱体，也非常适用于 VR、视频监控、AI 以及深度学习等强悍 AI 计算平台的应用。",
        features:"产品特点", // Product Features
        featuresItem1:"整机密闭无风扇设计 , 整合 AI 算力和工控特性；",
        featuresItem2:"石墨烯散热系统，获得更高散热效率；",
        featuresItem3:"第 11 代嵌入式 CPU 自带 AI 算力，满足 AI 边缘计算应用场景需求；", // 4*USB 3.0, 2*COM, 1*HDMI, 1*LVDS/eDP
        featuresItem4:"多 M.2、MINIPCIE 插槽用于 AI 加速卡扩展，满足 AI 服务器等级需求；",
        featuresItem5:"2* 千兆网口、6* 串口（采用隔离、浪涌和静电设计保护），保证系统在复杂环境下可靠稳定运行；",
        featuresItem6:"整机功耗小，性能优良，环境适应性强，除广泛应用于机器视觉、高速公路车道控制、机械检测设备、智能交通、智慧工厂、智能电力控制、数控设备制造、环保监测、制药设备、风电监测、轮胎硫化、工业自动化控制等工业现场领域外；也能适用于 VR、视频监控、AI 以及深度学习等方面的领域。",
        specification:"规格详情",//Specification
        cpuInfo:"CPU",
        cpuInfoItem:"板载Intel® FCBGA1449 GEN11 i3/i5/i7 Pentium / Celeron CPU",
        memoryInfo:"内存", //Memory
        memoryInfoItem:"板载 SDRAM LPDDR4 8G 内存，最大支持 24GB",
        storageInfo:"存储", //Storage
        storageInfoItem:"1*2.5 寸减震硬盘安装位置，标配 1* 硬盘，2*M.2 2280 NVMe 接口，1*mSATA 接口",
        systemInfo:"系统", //System
        systemInfoItem:"Windows 10 / Linux", // Windows 10 64-bit, Linux
        expansionInterface:"其他接口", //Other interfaces
        expansionInterfaceItem:"6*COM（COM1 ～ COM2 为 RS-232/422/485 可选）/ 4*USB3.0 + 4*USB2.0 / 1*16-bit GPIO/ 1*AUDIO：Mic-in，Line-out",
        bus: '扩展总线',
        busItem: '1*Mini-PCIe 扩展槽 ( 带 1*SIM 卡槽 )、2*M.2 标配（可选 2*Mini-PCIe，Co-Lay）',
        ioInfo:"I/O 接口",//I/O Interface
        ethernetInfo:"网络",//Ethernet
        ethernetInfoItem:"2*10/100/1000Mbps RJ45 网口",
        Wireless: '无线通信',//Wireless Communication
        WirelessItem: '1*WIFI (SATA/PCIe either-or), SIM+4G Model (SATA/PCIe either-or)',
        DisplayInfo:"显示",//Display
        DisplayInfoInterface:"显示接口",//Display
        DisplayInfoItem:"HDMI*3+VGA（内部预留 eDP 接口，VGA 和 eDP 二选一）",
        Environment:"环境",//Mechanical & Environment
        Size:"尺寸",
        Sizeinfo:"200.6mm *232mm *68mm( 无扩展） / 228.2mm *232mm *73mm( 带壁挂条）",
        PowerInput:"电源输入",//Power Input
        PowerInputItem:"支持 9~36V DC 宽电压输入",
        WorkingEnvironment: '工作环境',
        WorkingEnvironmentItem: '0℃～ 50℃（机械硬盘）；5% ～ 90%（非凝结状态）',
        StorageEnvironment: '存储环境',
        StorageEnvironmentItem: '-20℃～ 60℃；5% ～ 90%（非凝结状态）',
      }
    },
    // 深圳优哲
    UZEL: {
      US_C5500: {
        deviceTitle:"US-C5500",
        companyName: '深圳优哲信息技术有限公司',
        overview:"产品概述",
        overviewItem: 'US-C5500是一款高性能的人工智能边缘工作站。主要应用于视频编解码、视频分析、人工智能、深度学习、机器视觉等领域。该产品采用最新的Intel Tigerlake U平台，低功耗高性能；板载内存颗粒，组成双通道，极大提高了内存频率和稳定性；支持4G和5G模块和SIM卡，满足通信需求',
        features:"产品特点",
        featuresItem1: '支持Intel Tigerlake UP3 系列CPU',
        featuresItem2: '板载双通道8G 4266 MHz LPDDR4X内存',
        featuresItem3: '支持4路4K@60fps HDMI输出和1路4K@60fps HDMI输入',
        featuresItem4: '支持M.2接口5G通信模块扩展 ',
        featuresItem5: '支持2个USB3.0和1个千兆网口',
        featuresItem6: '整机尺寸197×197×35 mm',

        specification:"规格详情",//Specification
        //
        cpuInfo:"CPU",
        cpuInfoItem:"支持 Intel Tigerlake U 系列 Celeron / Core I3 / I5 / I7 CPU，功耗12W ~ 28W",
        memoryInfo:"内存",//Memory
        memoryInfoItem:"板载双通道8G LPDDR4X内存，可定制扩容，赛扬6305E：LPDDR4X / 3733 MHz",
        storageInfo:"硬盘",//Storage
        storageInfoItem:"1×M.2 接口2260固态硬盘，1×SATA 3.0",
        expansionInterface:"扩展接口",//Expansion Interface
        expansionInterfaceItem:"支持1个Mini-PCIE标准定义接口，支持M.2接口4G / 5G模块扩展，支持SIM卡接插",
        
        ioInfo:"I/O 接口",//I/O Interface
        //
        DisplayInfo:"显示",
        DisplayInfoItem:"4×HDMI  4K @60fps独立显示，1×HDMI 4K @60fps 输入",
        usbInfo:"USB",
        usbInfoItem:"2×USB3.0",
        ethernetInfo:"网口",//Ethernet
        ethernetInfoItem:"1×1000M 网口",
        audioInfo:"音频",//Audio
        audioInfoItem:"1×Line_out，1×Mic_in",

        //前面板
        panel: '前面板',
        //按键
        button: '按键',
        buttonItem: '1×PWR 按键（带灯，关机为黄光，开机为绿光）1×针孔Reset 按键',
        //Indicator lights
        light: '指示灯',
        lightItem: '1×HD 系统指示灯；1×LAN 指示灯；1×系统指示灯',

        //电源
        //供电
        power: '电源',
        powerItem: 'DC 12V 直流输入',
        //环境
        environment: '环境',
        size: '尺寸',
        sizeItem: '197×197×35 mm',
        color: '颜色',
        colorItem: '黑色铝合金机箱',
        temperature: '温度',
        temperatureItem: '-10 ~ 60 ℃工作温度，-20 ~ 80 ℃存储温度'
      },
      US_M5520: {
        deviceTitle:"US-M5520",
        companyName: '深圳优哲信息技术有限公司',
        overview:"产品概述",
        overviewItem: 'US-M5520是一款低功耗高性能的人工智能边缘服务器/工作站。主要应用于视频分析、人工智能、深度学习、机器视觉等领域。该产品采用最新的 Intel Tigerlake U 平台，搭配Movidius VPU 平台，最大算力可达 60T。整机采用模块化设计，充分结合 CPU 和 VPU 的优势性能，满足不同行业对算力和功能接口的需求。',
        features:"产品特点",
        featuresItem1: '支持 Intel Tigerlake U 系列 CPU',
        featuresItem2: '支持 2280 M.2 SSD',
        featuresItem3: '2×SoDIMM 插槽，最大支持 32G DDR4 内存',
        featuresItem4: '支持 4 路 HDMI 独立显示',
        featuresItem5: '支持 2 个 PCIE×4 和 2 个 Mini-PCIE 扩展',
        featuresItem6: '支持 2 个 USB3.0 和 2 个千兆网口',
        featuresItem7: '整机尺寸 196×196×44 mm',

        specification:"规格详情",//Specification
        //
        cpuInfo:"CPU",
        cpuInfoItem:"支持 Intel Tigerlake U 系列 Celeron / Pentium / I3 / I5 / I7 CPU",
        memoryInfo:"内存",//Memory
        memoryInfoItem:"2×SODIMM 内存槽，最大支持 32G DDR4 笔记本内存",
        storageInfo:"硬盘",//Storage
        storageInfoItem:"1×M.2 接口 2280 固态硬盘",
        expansionInterface:"扩展接口",//Expansion Interface
        expansionInterfaceItem:"支持 2 个 PCIE ×4，2 个 Mini-PCIE 标准定义接口",
        
        ioInfo:"I/O 接口",//I/O Interface
        //
        DisplayInfo:"显示",
        DisplayInfoItem:"4×HDMI 独立显示",
        usbInfo:"USB",
        usbInfoItem:"2×USB3.0",
        ethernetInfo:"网口",//Ethernet
        ethernetInfoItem:"2×1000M 网口",
        audioInfo:"音频",//Audio
        audioInfoItem:"1×Line_ out，1×Line_in",

        //前面板
        panel: '前面板',
        //按键
        button: '按键',
        buttonItem: '1×PWR 按键（带灯，关机为黄光，开机为绿光）',
        //Indicator lights
        light: '指示灯',
        lightItem: '1×HD 系统指示灯；2×LAN 指示灯；1×系统指示灯',

        //电源
        //供电
        power: '电源',
        powerItem: '12V / 5A 电源适配器',
        //环境
        environment: '环境',
        size: '尺寸',
        sizeItem: '196×196×44 mm',
        color: '颜色',
        colorItem: '黑色铝合金机身',
        temperature: '温度',
        temperatureItem: '0 ~ 45 ℃工作温度，-20 ~ 80 ℃存储温度'
      }
    },
    // 凌华科技
    ADLINK: {
      ROScube_Pico_TGL :{
        deviceTitle:"ROScube Pico TGL",
        companyName:"凌华科技（中国）有限公司", //"ADLINK Technology (China) Co.,Ltd"
        overview:"产品概述",// "Product Overview"
        overviewItem:"凌华科技的ROScube Pico TGL是一款支持ROS 2的实时机器人控制器。基于第11代英特尔®酷睿™i7/i5/i3处理器和英特尔®虹膜®Xe显卡的实时机器人控制器，具有卓越的I/O连接性，支持各种传感器和执行器。并支持各种传感器和执行器，可用于无限的机器人应用。具备卓越的I/O连接性，支持各种传感器和执行器，可用于无限的机器人应用。ROScube Pico TGL支持凌华科技Neuron SDK开发的全部资源。SDK开发的全部资源，是开发工业用途服务的完美平台。机器人应用，如自主移动机器人（AMR）和自主移动工业机器人(AMIR)",
        //overviewItem:"ADLINK’s ROScube Pico TGL is a real-time ROS 2 enabled robotic controller based on the 11th Gen Intel® Core™ i7/i5/i3 processors with Intel® Iris® Xe Graphics featuring exceptional I/O connectivity and supporting a wide variety of sensors and actuators for unlimited robotic applications. The ROScube Pico TGL supports the full complement of resources developed with ADLINK Neuron SDK, a perfect platform for development of industrial use service robotic applications such as autonomous mobile robots (AMR) and autonomous mobile industrial robots (AMIR)",
        features: "产品特点",//Product Features
        featuresItem1: "用于ROS 2开发的x86-64主流架构",//x86-64 mainstream architecture for ROS 2 development
        featuresItem2: "坚固的、安全的连接，带有锁定的USB端口",//Ruggedized, secure connectivity with locking USB ports
        featuresItem3: "一体化的软硬件实时机制",//Integrated hard and soft real-time mechanism

        specification: "规格详情",//Specification
        cpuInfo: "CPU",
        cpuInfoItem:"Intel® Core™ i7-1185G7E, i5-1145G7E, i3-1115G4E 28W",
        memoryInfo:"内存",//Memory
        memoryInfoItem:"2x 16GB DDR4 3200MHz, 2x 8GB DDR4 3200MHz, 2x 4GB DDR4 3200MHz",
        storageInfo:"存储",//Storage
        storageInfoItem:"256GB NVMe, 128GB NVMe, 64GB NVMe",
        expansionInterface:"扩展接口",//Expansion Interface
        expansionInterfaceItem:"1*M.2 (Key-E, 2230/2242/2280, WIFI+BT); 2*Mini-PCIe (1*mSATA, 1*Wifi/3G/4G); 1*PCIe x16 Golden Finger; SCM-D: 2*PCIe x1 + 1*PCIe x4 + 1*PCIe x16 + 1*USB; SCM-C: 2*PCIe x1 + 1*PCIe x4 + 1*USB;",
        systemInfo:"系统",//System
        systemInfoItem:"Ubuntu 20.04",
        
        ioInfo:"I/O 接口",//I/O Interface
        ethernetInfo:"网口",//Ethernet
        ethernetInfoItem:"1x 1GbE, 1x 2.5GbE, 1x Intel® i219LM, 1x Intel® i225LM",

        otherInfo:"其他 I/O 接口",//Other I/O interface
        serialInfo:"系列端口",//Series Ports
        serialInfoItem:"COM 1: RS-232",
        powerManage: '电源管理', //Power Management,
        powerManageItem: 'COM 2: 1x power button, 1x reset button, 1x power LED',

        usbInfo:"USB",
        usbInfoItem:"1x USB 3.2 Gen2 Type A port with lockable connectors; 1x USB 3.2 Gen2 Type A port, 2x USB 3.2 Gen2 Type C ports",
        audioInfo:"音频",//Audio
        audioInfoItem:"1x headphone, 1x microphone jack",
        Display: '显示',
        DisplayInterface:"显示接口",//Display Interface
        DisplayInterfaceItem:"1x DP, 1x HDMI",

        environment:"机械 & 环境",//Mechanical & Environment
        size:"尺寸",//Dimension
        sizeItem: "140 x 110 x 63 mm (5.5 x 4.33 x 2.48 inches)",
        weight: '重量',
        weightItem: '1.02 kg',
        PowerInput:"电源",//Power Input
        PowerInputItem:"12-19VDC (±10% tolerance, reverse polarity protection)",//DC 12V

        Temperature:"温度",//Temperature
        OperatingTemperature:"工作温度",
        OperatingTemperatureItem:"0℃~60℃",//Operation: 0℃~60℃, Storage: -20℃~75℃
        StorageTemperature:"存储温度",//Relative Humidity
        StorageTemperatureItem:"-40℃~85℃"
      }
    },
    // 大唐科技
    MAXTANG: {
      UMIM: {
        deviceTitle:"UMIM",
        companyName:"深圳市大唐计算机有限公司", // "Shenzhen Maxtang Computer Coporation., LTD",
        overview:"产品概述", // "Product Overview",
        overviewItem:"Maxtang@U2 UMIMTL系列是一系列基于 Intel® Tiger lake-U 核心 和 Celeron处理器的嵌入式indsutrila PC。Tiger Lake-U Core和Celeron处理器。这些高性能的处理器使你能够在工作和日常生活中处理各种复杂的计算任务。类型适用范围。人工智能箱、教具控制器、AGV、机器人和CNC。",
        // overviewItem:"The Maxtang@U2 UMIMTL seris is a series of embedded indsutrila PC based on the Intel® Tiger lake-U Core and Celeron processors. The high-performance processors allow you to handle all kinds of complicated computing tasks in your work and daily life. Typeicall applicaion secnior: AI box, instrudy controller, AGV, robotics and CNC.",
        features:"产品特点", // "Product Features",
        featuresItem1:"Intel® Tiger Lake-U Core和Celeron CPU",
        featuresItem2:"双通道DDR4内存",
        featuresItem3:"高达64GB更快的SSD存储（NVMe+mSATA）",
        featuresItem4:"三千兆字节的LAN网络",
        featuresItem5:"3x USB2.0, 3x USB3.0, 4x COM",
        featuresItem6:"VGA & HDMI 2.0",
        featuresItem7:"电源：9V-36V直流输入",
        featuresItem8:"全铝机身",

        specification: "规格详情",
        Processor: '处理器', //'Processor',
        cpu:"CPU",
        cpuItem:"6305，i3-1115G4，i5-1145G7E，i7-1185G7E",
        bios: 'BIOS',
        biosItem: 'AMI 16MB UEFI BIOS',
        memory:"内存", //Memory
        memorytype:"类型", //Type
        memorytypeItem:"2x SO-DIMM DDR4（最大容量64GB）", //Max capacity 64 GB

        ioInfo: 'I/O 接口',
        display: '显示', //Display
        gpu: 'GPU',
        gpuItem: 'Intel UHD Graphics 610/620 (Based on CPU)',
        multidisplay: '多种显示',
        multidisplayItem: 'HDMI2.0 + VGA',

        ethernetInfo:"网络",//Ethernet
        ethernetInfoItem:"3x RJ-45",
        audio: '音频',
        audioItem: 'Line-out, mic-in, audio header, amplifier header',

        storageInfo:"存储", //Storage
        storageInfoItem:"1x M.2_M for 2280 SSD (NMVe/SATA), 1x mSATA, 1x SATA",
        systemInfo:"系统", //System
        systemInfoItem:"Windows 10, Linux",

        expansionInterface:"其他接口", //Other interfaces
        expansionInterfaceItem:"1x M.2_E for NGFF Wi-Fi",

        //ioInfo:"I/O 接口",//I/O Interface


        Wireless: '无线通信',//Wireless Communication
        WirelessItem: '1*WIFI (SATA/PCIe either-or), SIM+4G Model (SATA/PCIe either-or)',
        DisplayInfo:"显示",//Display
        DisplayInfoInterface:"GPU",//Display
        DisplayInfoItem:"Intel UHD Graphics 610/620 (Based on CPU)",

        Environment:"机械 & 环境",//Mechanical & Environment
        Size:"尺寸",
        Sizeinfo:"260 mm x 156 mm x 62.5 mm",
        PowerInput:"电源输入",//Power Input
        PowerInputItem:"9V-36V DC-in",
        OperatingTemperature:"工作温度",
        OperatingTemperatureItem:"-20°C ~ 60°C",
        StorageTemperature:"存储温度",
        StorageTemperatureItem:"-40°C ~ 80°C"
      }
    },

    // 苏州源控
    SPESTECH: {
      CIS_PJ19_LW01: {
        deviceTitle: 'CIS-PJ19-LW01',
        companyName: '苏州源控电子科技有限公司',
        overview: '介绍', // 'Overview'
        overviewItem: 'CIS-PJ19-LW01是一款无风扇工业PC。产品搭载 Intel Atom J1900四核2.0G高性能CPU平台，支持12～24V宽压输入，具有高稳定性的Intel双千兆网口，双个串口，六个USB，VGA+HDMI双路显示等功能。产品特有的CPU侦测报警灯可以即时反馈产品状况以及可以在-20～60度的环境温度下稳定运行，支持导轨、桌面以及壁挂安装，可满足不同领域的应用需求。',

        features: '特性', //'Features',
        featuresItem1: 'Intel Atom J1900平台',
        featuresItem2: '支持12～24V宽压DC-IN输入',
        featuresItem3: '支持2COM，COM口支持RS232/422/485时，可通过BIOS调整',
        featuresItem4: '支持VGA，HDMI双显',
        featuresItem5: '支持M.2 ,SATA多种类型接口存储设备扩展',
        featuresItem6: '支持USB自我恢复功能',
        featuresItem7: '具备OS recover还原功能，有效降低售后维护费用',
        featuresItem8: '支持Wi-Fi，4G模块扩展',
        featuresItem9: '内部具备8-bit可编程DIO接口',
        featuresItem10: '具备远程开关，解决PC在设备中不易开关的困扰',
        featuresItem11: '具有CPU侦测报警灯，可以随时监控PC工作是否存在异常',
        
        //规格
        specification: '规格', //'Specification',
        //# 1
        system: '系统', //'System',

        cpu: '处理器',//'Processor',
        cpuInfo: 'Intel® Bay Trail Celeron® J1900 processor (2.00 GHz)',
        memory:'内存', //'Memory',
        memoryInfo:'支持 1 x DDR3L 1333/1600 SO-DIMM slot, up to 8GB', //'Supports 1 x DDR3L 1333/1600 SO-DIMM slot, up to 8GB',
        bios: 'BIOS',
        biosInfo: 'AMI 128Mbit SPI Flash',
        os: '操作系统', //'OS',
        osInfo: '支持 Windows 7 32/64bit，Windows 10 64bit，Linux', //'Support Windows 7 32/64bit, Windows 10 64bit, Linux',
        dog: '看门狗定时器', //'Watchdog Timer',
        dogInfo: 'System reset，programmable 255 levels timer interval，from 1~255 sec/min',
        // # 2
        exio: '外部接口', //'External I/O',

        ethernet: '网口', //'Ethernet',
        ethernetInfo: '2x RJ45 Intel® i211AT GbE (10/100/1000 Mbps)',
        video: '显示', //'Video',
        videoInfo: '1 x VGA: max resolution up to 2560 x 1600; 1 x HDMI: max resolution up to 1920 x 1200',
        audio: '音频',//'Audio',
        audioInfo: '1 x Audio(Line-out&Mic-in 2 in 1)',
        com: '串口',//'COM',
        comInfo: '2 x COM (RS232/422/485 )',
        usb: 'USB',
        usbInfo: '1 x USB 3.0，5 x USB 2.0',
        button: '按钮',//'Button',
        buttonInfo: '1 x Power button w/LED',
        recover: '系统还原',//'System Recover',
        recoverInfo: '1 x OS recovery button',
        led: '指示灯',//'LED',
        ledInfo: '1 x HDD LED , 1 x ALARM LED（侦测 CPU 核心温度，一旦超了既有设定温度后闪烁）',
        remote: '远程开关',//'Remote ON-OFF',
        remoteInfo: '1 x Remote SW',

        //# 3 - 内部接口
        inio: '内部接口',//'Internal I/O',
        expansion: '扩展接口', //'Expansion',
        expansionInfo: '2 x Full-size Mini-PCIe Slot , 1 x M.2 2242 slot (only support SSD) , 1 x M.2 2230 slot for Wifi module',

        gpio: 'GPIO',
        gpioInfo: '1 x 8bit programmable GPIO',
        // usb: 'usb',
        usbInfo2: '2 x USB 2.0 pin hecom',
        com2: 'COM',
        comInfo2: '2 x RS232',
        sata: 'SATA',
        sataInfo: '1 x SATA 2.0，带有 SATA power',
        // sataInfo: '1 x SATA 2.0 with SATA power',
        sim: 'SIM',
        simInfo: '1 x SIM Card Slot',

        //# 4 - 电源
        power: '电源',//'Power',
        powerInput: '电源输入',//'Power Input',
        powerInputInfo: '12~24V DC ，凤凰接头 2P',
        // powerInputInfo: '12~24V DC , Phoenix connector 2P',

        //# 5 - 环境
        env: '环境' , //'Environmental',
        opTemp: '操作温度',//'Operation Temp',
        opTempInfo: '-20℃ ~ 60℃ (SSD) ，0℃ ~ 40℃ (HDD)',
        stTemp: '存储温度',//'Storage Temp',
        stTempInfo: ' -40℃ ~ 70℃',
        hum: '湿度',//'Relative Humidity',
        humInfo: '5% ~ 95%, 非凝结状态 Non-condensing',
        ran: '随机振动',//'Random Vibration',
        ranInfo: '5~500Hz, 1Grms (HDD)operation , 5~500Hz, 2Grms (SSD)operation',
        sin: '正弦振动', //'Sine Vibration',
        sinInfo: '5~500Hz, 2G Non-operatsin',

        //# 6 - 机构？
        Mechanical: '机械', //'Mechanical',

        Housing: '外观',//'Housing',
        HousingInfo: '铝合金', //'Aluminum Alloy',
        Mounting: '安装方式',//'Mounting',
        MountingInfo1: '标配：桌面式 (Desk-Mount), 壁挂式 (Wall-Mount)',
        MountingInfo2: '可选：导轨式 (DIN-Rail)，VESA-mount (75 x 75mm）',
        Dimension: '尺寸',//'Dimension',
        DimensionInfo: '159.3 x 129 x 38.4mm',
        weight: '重量',//'Weight',
        weightInfo: '1.3 KG',

        //# 7 - 认证
        Certification: '认证',//'Certification',
        Safety: '安规认证',//'Safety Certification',
        SafetyInfo: 'CCC',    
      },
      CIS_RTLU_LW01: {
        deviceTitle: 'CIS-RTLU-LW01',
        companyName: '苏州源控电子科技有限公司',
        overview: '介绍', // 'Overview'
        overviewItem: 'CIS-RTLU-LW01 是一款无风扇工业PC。产品搭载Intel 第11代10nm制程最新高性能 CPU 平台，支持9 ～ 36V 宽压输入，支持四个 Intel 千兆网口，其中一路网口可支持 2.5GbE 速率，同时具备最多八个串口，六个 USB，16-bit 可编程 GPIO，VGA+HDMI 双路显示等功能。产品特有的 CPU 温度侦测报警灯可以及时反馈产品运行状况。可以在 -20 ～ 60 度的环境温度下稳定运行，可满足不同领域的应用需求。',

        features: '特性', //'Features',
        featuresItem1: '支持Intel第11代 10nm制程Tigerlake UP3 CPU',
        featuresItem2: '支持9～36V宽压DC-in输入',
        featuresItem3: '最多支持8COM，COM口支持RS232/422/485时，可通过BIOS调整',
        featuresItem4: '支持1个2.5GbE速度网口以及3个千兆网口',
        featuresItem5: '支持VGA，HDMI双显',
        featuresItem6: '支持M.2 2280存储接口支持SATA/PCIe x4 NVMe SSD',
        featuresItem7: '支持USB自我恢复功能',
        featuresItem8: '具备OS recover还原功能，有效降低售后维护费用',
        featuresItem9: '支持Wi-Fi，4G/5G模块扩展',
        featuresItem10: '具备16-bit可编程GPIO接口',
        featuresItem11: '具备远程开关，解决PC在设备中不易开关的困扰',
        featuresItem12: '具有CPU侦测报警灯，可以随时监控PC工作是否存在异常',
        //规格
        specification: '规格', //'Specification',
        //# 1
        system: '系统', //'System',

        cpu: '处理器',//'Processor',
        cpuInfo: 'Intel 11th i7/i5/i3/Celeron 处理器 (Tiger lake UP3)i3-1115G4/i5-1135G7/i7-1165G76305E/i3-1115G4E/i5-1145G7E/i7-1185G7E',
        memory:'内存', //'Memory',
        memoryInfo:'1 x DDR4 3200 MHz SO-DIMM, Up to 64 GB', 
        graphics: '图形',
        graphicsInfo: 'CPU 集成显卡，Gen 12 Gfx，i5/i7 支持 Iris', 
        storage: '存储',
        storageInfo: '1 x 2.5" SATA 2.0 HDD/SSD bay，板卡预留接口；1 x M.2 2280 SSD slot ，支持 SATA/NVME PCEx4 SSD', 
        os: '操作系统', //'OS',
        osInfo: 'Windows 10, Linux，Andriod', 
        dog: '看门狗定时器', //'Watchdog Timer',
        dogInfo: 'Programmable 255 levels timer interval，from 1~255 sec/min',
        // # 2
        exio: '外部接口', //'External I/O',

        ethernet: '网口', //'Ethernet',
        ethernetInfo: '1x RJ45 Intel® i225LM GbE (10/100/1000/2500 Mbps)，支持 TSN 功能 3 x RJ45 Intel® i210AT GbE (10/100/1000 Mbps)',
        video: '显示', //'Video',
        videoInfo: '1x HDMI ：max resolution up to 4096x2304@60Hz，1x VGA：max resolution up to 1920 x 1200@60Hz',
        audio: '音频',//'Audio',
        audioInfo: '1 x Audio(Line-out&Mic-in 2 in 1)',
        com: '串口',//'COM',
        comInfo: '最大支持 8 x COM (COM 1 ～ 4: RS232/422/485 auto-flow optional by BIOS，COM5 ～ 6：RS232，COM7 ～：RS485 ) 默认 6 个 COM port',
        usb: 'USB',
        usbInfo: '4 x USB 3.1 （GEN2），2 x USB 2.0',
        gpio: 'GPIO',
        gpioInfo: '1 x 8bit programmable GPIO',
        button: '按钮',//'Button',
        buttonInfo: '1 x Power button w/LED，采用通用的开关按键小板',
        recover: '系统还原',//'System Recover',
        recoverInfo: '1 x Reset button',

        led: '指示灯',//'LED',
        ledInfo: '1 x HDD LED (Red blink for Data read or write)，1 x ALARM LED （侦测 CPU 核心温度，一旦超了既有设定温度后闪烁）', 
        remote: '远程开关',//'Remote ON-OFF',
        remoteInfo: '1 x Remote ON-OFF',

        //# 3 - 内部接口
        inio: '内部接口',//'Internal I/O',
        expansion: '扩展接口', //'Expansion',
        expansionInfo: '1 x Full-size Mini-PCIe Slot （USB/PCIe） ， 1 x M.2 3042/3052 slot for 5G 模块，1 x M.2 2280 slot 支持 SATA/PCIe NVME ， 1 x M.2 2230 slot for Wifi module 支持 Wi-Fi6',
    
        sim: 'SIM',
        simInfo: '1 x Nano SIM Card Slot ， 目前支持 4G/5G 卡',
        sata: 'SATA',
        sataInfo: '1 x SATA3 + SATA power',
        powerLED: 'Power/LED',
        powerLEDInfo: 'for 开关按键板',
        usbInfo2: '2x USB connector （2x5Pin）',
        gpio: 'GPIO',
        gpioInfo2: '1 x 8bit GPIO connector （2x5pin）',

        can: 'CAN',
        canInfo: '2 x CAN2.0B connector',
        fan: 'Fan',
        fanInfo2: '1 x 4 pin （可支持，默认不上件）',

        //# 4 - 电源
        power: '电源',//'Power',
        powerInput: '电源输入',//'Power Input',
        powerInputInfo: '9~36V DC ，凤凰接头 2P',
       
        //# 5 - 环境
        env: '环境' , //'Environmental',
        opTemp: '操作温度',//'Operation Temp',
        opTempInfo: '-10℃ ~ 60℃ (SSD) ，0℃ ~ 40℃ (HDD)',
        stTemp: '存储温度',//'Storage Temp',
        stTempInfo: ' -40℃ ~ 85℃',
        hum: '湿度',//'Relative Humidity',
        humInfo: '5% ~ 95%, 非凝结状态',
        ran: '振动',//'Vibration',
        ranInfo: 'SSD: 5~500Hz, 2Grms operation ， HDD: 5~500Hz, 1Grms operation',
        shock: '机械冲击', //'Sine Vibration',
        shockInfo: 'Operation: 10G@11ms ， Non-operation: 30G@11ms',

        //# 6 - 机构？
        Mechanical: '机械', //'Mechanical',

        Housing: '外观',//'Housing',
        HousingInfo: '铝合金', //'Aluminum Alloy',
        Mounting: '安装方式',//'Mounting',
        MountingInfo: '桌面式 (Desk-Mount), 壁挂式 (Wall-Mount)，VESA-mount (75 x 75mm），导轨式 (DIN-Rail) 依靠支架实现',
        Dimension: '尺寸',//'Dimension',
        DimensionInfo: '245 x 153 x 58mm',

        //# 7 - 认证
        Certification: '认证',//'Certification',
        Safety: '安规认证',//'Safety Certification',
        SafetyInfo: 'CCC , CE , FCC',    
      },
    }
  },

  // 操作系统
  os: {
    //banner
    banner_title: 'BEACON OS',
    banner_desc: '标准化硬件操作系统',
    //floor_1
    os_title: 'BEACON OS',
    os_intro: '边缘操作系统基于Linux打造，为物联网边缘计算和人工智能构建一个通用的开放框架。支持算法商城各类算法独立运行，更支持连接各种物联网传感器。实现算法按需部署，设备即插即用组件生态系统，加速物联网和人工智能的部署。',
    //floor_2 系统功能
    sys_title: 'BEACON OS 系统功能',
    feature_1: '高性能多线程 AI 推理服务，支持市面上几乎所有的算法模型',
    feature_2: '结合多种物联网设备和摄像头融合逻辑输出',
    feature_3: '支持 RTSP/RTMP 输出到流媒体服务器',
    feature_4: '纳入 EdgeX Foundry 平台可以支持物联网设备定制化开发',
    feature_5: '支持控制设备，支持输出音视频到音视频设备，支持HTTP/HTTPS 输出结构化数据和图像数据到Web服务器',
    feature_6: '支持AI算法场景服务叠加，共同处理事务',
    //floor_3 设备管理
    dev_title: '设备管理',
    dev_intro: '设备自身配置：ip地址、网关 | AI管理配置：视频源参数、AI算法参数、接收地址配置 | 用户管理配置',
    title_1: '命令行', //'Command Line'
    title_2: '设备配置',//'Product Configuration'
    title_3: '视频展示',//'Video Show'
    title_4: '算法展示'//'Algorithm Demonstrations'
  },

  // 底部
  footer: {
    list: '产品列表',
    about: '关于我们',
    links: '友情链接',
    follow: '关注我们',

    getTouch: '联系我们',
    help: '告诉我们如何能帮助您，我们资深的专业人士将尽快与您联系。',
    agree: '请同意云图睿视隐私条款',
    success: '提交成功',
    error: '提交失败',

    yt: '关于云图',
    services: '产品服务',
    solutions: '解决方案',
    problems: '常见问题',
    cases: '客户案例',
    contact: '联系我们',

    swipe: '扫一扫，联系我们',
    license_1: '增值电信业务经营许可证编号: 川B2-20210534  |  ',
    license_2: ' 蜀ICP备20010534号'
  },

  // 提示
  alert:{
    title:'标题',
    confirmButton:'确定',
    content_sys_dev_ing:'系统建设中。。。'
  },

  // 关于云图
  about:{
    abus: '关于我们',
    product: '产品服务',
    solution: '解决方案',
    problem: '常见问题',
    case: '客户案例',
    partner: '合作伙伴及客户',
    contact: '联系我们',
    //产品服务
    pg1: '云图睿视是2017年成立于成都的高新技术企业，为联合电子科技大学机器视觉和人工智能实验室共同成立。我们的目标旨在帮助企业和政府在海量数据产生的今天，以保证关键数据能被快速筛选、快速处理和快速响应。云图睿视拥有的SCB（Smart City Box城市智能终端），是目前全球首款，也是唯一一款支持多传感器接入的人工智能边缘计算平台。',
    pg2: '云图睿视物联网AI边缘计算终端硬件设备AIBOX与应用平台的支持服务，旨在满足用户和企业客户的需求，提供多种场景应用需求下的多样化算法选择。产品设备除支持当前各主流框架系统应用软件的融合外，同时还兼备体积小巧、场景应用范围广泛、使用便捷、操作灵活、即插即用等综合优势特色。并支持用户可在平台算法商城内根据所需自主选择各类算法的叠加，进行灵活搭配与自由组合，从而最大程度地有效提高和实现客户对现有资源的有效整合升级，及整体综合利用率和用户生产力，来帮助确保兼具高效赋能与实用性的更好客户体验。',
    pg3: '同时，AI生态链的合作伙伴也可将自主算法分享至平台算法商城，以提供给客户订阅选择，可自主选择用户需付费或免费提供订阅的使用方式。并可在本算法商城平台上，对自主所分享提供的所有算法，进行统一管理和相应维护升级。且可对已被用户所订阅的各类算法数量与对应数据情况，进行随时统计查看，以了解自主算法产品在市场上对应的实际需求情况，便于帮助算法提供企业做出有利的市场分析和数据参考决策。',
    // 解决方案
    safety: '公共安全',
    city: '智慧城市',
    fire: '森林防火',
    husbandry: '智慧农牧',
    // 常见问题
    q1: '产品交付时间',
    a1: '于订单确认后的30-45天进行相应产品交付。',
    q2: '服务订阅方式',
    a2: '算法商城内灵活选择，直接在线订阅，即时动态下发。',
    q3: '开发者算法定价',
    a3: '由享有算法的开发者进行自主定价，确认对相应算法分享提供的方式和对应订阅价格。',
    q4: '产品试用',
    a4: '若您对我们的人工智能边缘计算终端设备“云图睿视AI-BOX”感兴趣，或有项目可融合以进行相互合作话，请直接联系网站下方我们的销售人员进行具体沟通接洽。',
    // 联系我们
    address: '公司地址：',
    add: '四川省成都市高新西区天映路11号3栋6楼',
    person: '联系人：',
    yangl: '杨 楠',
    tel: '联系电话：',
    email: '联系邮箱：',        
    tel_val: '15802823011',
    email_val:'nyang@EdgeVision.ai',
    // 您的联络方式
    yours: '您的联络方式',
    name: '姓 名',
    mobile: '手 机',
    company: '公 司',
    post: '职 务',
    direction: '了解方向',
    more: '更多内容',
    submit: '提交',
    nameTip: '请输入您的姓名',
    mobileTip: '请输入您的手机',
    mobileErr: '手机格式不正确',
    descTip: '请输入描述内容',
    p_name: '您的姓名',
    p_mobile: '您的手机',
    p_company: '您的公司',
    p_post: '您的职务',
    p_desc: '描述内容...',
    error: '接口错误，请联系管理员',
    success: '提交成功',
    //客户案例
    case_title:'客户案例',
    //合作伙伴
    partners_title:'合作伙伴',
  },

  // 案例和行业
  case: {
    // 一级子页面: case
    case1: {
      solutions:"解决方案",
      solutionsShow:"云图睿视解决方案&案例展示",
      leftProfile:"云图睿视团队自主开发所打造的标准化智能终端硬件AI-BOX与OS操作系统一体化边缘计算设备，可直接为算法开发者或客户使用者提供标准的系统框架与统一的算力标准，且兼容目前市场上所有主流算法开发与应用框架，并能适配兼容于市场上当前各种常见传感器，即插即用，无需转换，简单快捷、实用方便。",
      rightProfile:"云图睿视产品所内置自带的算法商城，也为算法开发供应者与算法实际需求应用方，或者相关行业的终端运营集成商等，提供了一个行业信息丰富、应用场景解决方案与算法多样、行业及终端应用场景算法需求旺盛的有效信息沟通对接平台。可实现让算法开发提供者与算法需求者及终端使用客户间，进行直接相关联与对接。从而可实现从根本源头上直接为双方共架一座有效沟通的桥梁。",
      programValue:"方案价值",
      programOverview:"方案概述",
      frameworkService:"框架及服务场景",
      viewDetails:"查看详情",
      moreCases:"查看更多案例",
    },
    // 二级子页面: 行业 industry
    case2: {
      banner: {
        title: '智慧城市',
        desc: '利用AI-box和摄像头结合或创新概念，将城市的系统和服务打通、集成，以提 升资源运用的效率，优化城市管理和服务，以及改善市民生活质量'
      },
      floor1: {
        title: '合作伙伴'
      },
      floor2: {
        title: '解决方案'
      },
      floor3: {
        title: '算法及设备列表',
        jump: '点击打开算法商城查看算法详情'
      },
      empty: '暂无数据'
    },
    // 三级子页面 解决方案
    case3: {
      provide: '方案提供方：',
      overview: '方案概述',
      value: '方案价值',
      frame: '框架及服务场景',
      case: '用例或规范环境',
      ai: '相关算法&硬件',
      customer: '客户声音及用户效果',
      effect: '用户效果'
    },
    case3_sinoits_traffic: {
      overview: {
        title: '概述', //'Overview',
        p1: '智慧交通已经被证明是解决交通拥堵，减少交通事故，提高居民生活质量的有效途径。近年来，通过人工智能 (AI) 、计算机视觉、云计算、物联网、边缘计算、数字孪生等技术的创新与落地，智慧交通在车联网、智能红绿灯、自动收费、智慧停车等领域实现了广泛应用，构建了具备感知能力、可实现智慧决策的智慧交通系统，为社会经济的运行深度赋能。',
        // p1: 'Smart transportation has been proven to be an effective way to solve traffic congestion, reduce traffic accidents and improve the quality of life of residents. In recent years, through the innovation and implementation of artificial intelligence (AI), computer vision, cloud computing, Internet of Things, edge computing, digital twin and other technologies, smart transportation has been widely used in the fields of vehicle networking, intelligent traffic lights, automatic toll collection, smart parking, etc., and has built a smart transportation system with sensing capability and intelligent decision-making, which is deeply empowered for the operation of social economy.',
        p2: '英特尔拥有面向不同应用场景的云到端解决方案，能够为合作伙伴在智慧交通等各个领域的发展提供创新技术支持。通过与生态合作伙伴深化合作，英特尔正在将领先技术与创新能力相结合，推动中国乃至全球智慧交通领域的创新及应用进程。',
        // p2: 'Intel has cloud-to-end solutions for different application scenarios and can provide innovative technical support for partners' development in various fields such as smart transportation. By deepening cooperation with eco-partners, Intel is combining leading technologies and innovative capabilities to drive the innovation and application process in the field of intelligent transportation in China and globally.',
        p3: '为了满足高速公路联网收费、重点车辆监管以及智慧物流管理的需求，卓视智通在云图睿视的 AI 计算盒基础之上，推出了小神瞳收费车型识别管理方案。该方案在小神瞳一体机上融合了卓视智通自主研发的车辆识别算法，并通过基于第11代英特尔® 酷睿™ 处理器、英特尔® Myriad™ Movidius™ VPU的云图睿视 AI 计算盒，实现AI负载的边缘端处理，能够准确识别各种收费车型，将其作为人工收费数据稽核的辅助手段，并有望接入收费数据稽查平台，实现全面自动化数据稽核与取证，提升高速公路收费管理的严格化、规范化，同时降低交通安全隐患。'
        // p3: 'In order to meet the needs of networked highway toll collection, key vehicle supervision and intelligent logistics management, Sinoits has launched the Little God's Pupil toll vehicle identification management solution based on the AI computing box of Yuntu EdgeVision. The solution incorporates Sinoitst's self-developed vehicle identification algorithm on the small ShenZhen all-in-one machine, and realizes the edge-end processing of AI load through the 11th generation Intel® Core™ processor and Intel® Myriad™ Movidius™ VPU-based CloudTuRuiSight AI computing box, which can accurately identify various toll models and use them as an auxiliary means for manual toll data auditing, and It is expected to be connected to the toll data auditing platform to realize comprehensive automated data auditing and forensics, enhancing the strictness and standardization of highway toll management while reducing traffic safety hazards.'
      },
      social: {
        title: '智慧交通加速社会经济运行', //'Smart transportation accelerates socio-economic operation',
        p1: '对交通基础设施进行数字化升级，推动智慧交通的建设，已成为全球各主要国家交通管理部门的重要任务。中国政府于2019年9月发布了《交通强国建设纲要》。该纲要提出，不断推进现代综合交通运输体系的发展，到2035年将中国基本建设成为世界交通强国。2020年8月，交通运输部印发《关于推动交通运输领域新型基础设施建设的指导意见》，提出要提升公路全周期数字化水平。2021 年 2 月，中国发布了《国家综合立体交通网规划纲要》，提出要打造基于城市信息模型平台、集城市动态静态数据于一体的智慧出行平台。',
        //p1: 'Digitally upgrading transportation infrastructure and promoting smart transportation have become important tasks for transportation authorities in major countries around the world. The Chinese government released the "Outline for the Construction of a Strong Transportation Country" in September 2019. The outline proposes to continuously promote the development of a modern comprehensive transportation system and to basically build China into a world transportation power by 2035.In August 2020, the Ministry of Transport issued the "Guidance on Promoting the Construction of New Infrastructure in the Transportation Sector", which proposes to upgrade the digitalization of the whole cycle of highways.In February 2021, China released the "Outline of the National Comprehensive Three-dimensional Transportation Network Planning 》, proposing to build a smart travel platform based on the city information model platform and integrating dynamic and static data of the city.',
        p2: '在政策、数字化技术创新的因素的综合驱动下，智慧交通在中国呈现出蓬勃发展的态势。智研咨询发布的《2021-2027年中国智慧交通行业市场经营管理及投资前景预测报告》显示，2020年中国智慧交通行业市场规模为1000亿元，同比增长22.7%，其中中国高速公路智慧化市场规模为632亿元，同比增长14.7% 1。蓬勃的智慧交通市场在进一步提升交通效率、安全性的同时，也激发了智慧交通领域的创新潜力。',
        //p2: 'Driven by a combination of policy, digital technology innovation factors, smart transportation in China has shown a booming development. According to the "China Smart Transportation Industry Market Operation Management and Investment Prospect Forecast Report 2021-2027" released by Wisdom Research Consulting, the market size of China's smart transportation industry in 2020 is 100 billion yuan, up 22.7% year-on-year, of which the market size of China's highway wisdom is 63.2 billion yuan, up 14.7% year-on-year.1 The booming smart transportation market is further improving traffic efficiency and safety, while also stimulating the potential for innovation in the field of intelligent transportation.',
        p3: '围绕着智慧交通的技术创新与体系构建，越来越多的组织参与其中，这既包括产业链上游的智慧交通的管理、规划与需求部门，产业链中游的系统集成商，也包括产业链下游的硬件产品提供商、OEM、独立软件开发商，他们共同构建了活跃的智慧交通生态体系。 在该生态体系的驱动下，智慧交通呈现出如下重要的发展特点：',
        //p3: 'Around the technological innovation and system construction of smart transportation, more and more organizations are involved, which include both the management, planning and demand departments of smart transportation in the upstream of the industry chain, system integrators in the midstream of the industry chain, as well as hardware product providers, OEMs, and independent software developers in the downstream of the industry chain, who together build an active smart transportation ecosystem. Driven by this ecosystem, intelligent transportation presents the following important development characteristics:',
        li_1: 'MEC 与 C-V2X 深度融合，实现车路协同',
        // li_1: 'Deep integration of MEC and C-V2X for vehicle-road collaboration',
        li_1_txt: '多接入边缘计算 (Multi-access Edge Computing, MEC) 是一种网络架构概念，可在蜂窝网络的边缘实现云计算功能和IT服务环境。它不仅能够将数据转移到边缘侧进行处理，降低海量数据跨网络进行传输与处理的压力，还可以与蜂窝车联网 (C-V2X) 无线通信技术进行协同，构建多车协同、路测智能等应用场景，满足信息共享与分发、智慧交叉路口控制、交通协同调度、危险驾驶提醒、违章提醒、车辆感知共享等应用的需求。',
        // li_1_txt: 'Multi-access Edge Computing (MEC) is a network architecture concept that enables cloud computing capabilities and IT service environments at the edge of cellular networks. It can not only transfer data to the edge side for processing and reduce the pressure of massive data transmission and processing across the network, but also collaborate with C-V2X wireless communication technology to build multi-vehicle collaboration, road test intelligence and other application scenarios to meet the needs of information sharing and distribution, intelligent intersection control, collaborative traffic dispatch, dangerous driving alert, violation alert, vehicle awareness sharing and other applications. It can meet the needs of applications such as information sharing and distribution, intelligent intersection control, collaborative traffic dispatching, dangerous driving alert, violation alert, and vehicle awareness sharing.',
        li_2: '实现端到端的 AI 能力融合布局',
        // li_2: 'Achieve end-to-end AI capability convergence layout',
        li_2_txt: 'AI 技术是智慧交通系统得以落地的关键。由于 AI 算法的训练与推理需要强大的算力作为支撑，因此传统的方案更多地赖于云端的算力支持，但这种算力布局难以满足智慧交通场景在延迟、稳定性等方面的需求。通过从边缘端到云端的 AI 算力布局，将能够在边缘端实现部分 AI 负载的处理，降低网络传输所带来的延迟与不稳定性，同时还能发挥云端集中管理、资源敏捷分配等优势。',
        // li_2_txt: 'AI technology is the key to the implementation of intelligent transportation systems. Since the training and reasoning of AI algorithms require strong computing power as support, traditional solutions rely more on the computing power support in the cloud, but this computing power layout is difficult to meet the needs of intelligent transportation scenarios in terms of latency and stability. Through the layout of AI computing power from the edge to the cloud, it will be possible to realize part of the AI load processing at the edge, reduce the latency and instability caused by network transmission, and also take advantage of centralized management and agile resource allocation in the cloud.',
        li_3: '实现多种负载的集中处理',
        // li_3: 'Enables centralized processing of multiple loads',
        li_3_txt: '在高速公路、城市交通等不同场景中，正在持续引入创新的智慧交通应用，这带来了对于计算、存储、网络等基础资源的不同要求。如果沿用分散化的处理模式，将会导致成本提升、数据孤岛、运维复杂等问题。而工作负载整合意味着在更少的独立设备上运行更多的新旧工作负载，从而减少占用空间，降低系统和环境的复杂性。这种实现智慧交通的方法可以帮助交通管理部门在减少资本支出 (CapEx) 的同时，通过提高效率、简化运营、改善设备的维护与生命周期末期服务支持来削减运营支出 (OpEx)。',
        // li_3_txt: 'Innovative smart transportation applications are being continuously introduced in different scenarios such as highways and urban transportation, which brings different requirements for infrastructure resources such as computing, storage, and network. Following a decentralized processing model will lead to higher costs, data silos, and complex operations and maintenance. Workload consolidation, on the other hand, means running more old and new workloads on fewer independent devices, thereby reducing the footprint and reducing the complexity of the system and environment. This approach to smart transportation can help transportation management reduce capital expenditures (CapEx) while cutting operational expenses (OpEx) by increasing efficiency, streamlining operations, and improving maintenance and end-of-life service support for equipment.',
      },
      charge: {
        title: '高速公路收费：从人工收费到智慧收费',
        // title: 'Highway tolling: from manual tolling to intelligent tolling',
        p1: '在智慧交通体系中，面向高速公路等场景的车辆收费是一个极为重要的环节，收费的效率与准确度将在很大程度上影响高速公路的通行效率，并对于社会经济的运行带来长运影响。在很长的一段历史时期，高速收费都依赖于人工来实现，这种方式由于无法适应现代化交通体系的需求，频临淘汰的边缘。',
        // p1: 'In the intelligent transportation system, for the highway and other scenarios of the vehicle toll is an extremely important link, the efficiency and accuracy of the toll will largely affect the efficiency of highway traffic, and for the operation of the social economy to bring long-haul impact. In a long period of history, highway toll collection relies on manual implementation, and this method is often on the verge of elimination because it cannot adapt to the needs of modern transportation system.',
        p2: '电子收费系统（ETC: Electronic Toll Collection）应运而生，并成为构建安全、便捷、高效、绿色的现代综合交通运输体系的重要组成部分。2019年5月，中国交通运输部办公厅印发《关于大力推动高速公路ETC发展应用工作的通知》，要求积极推动ETC的安装使用，为取消高速公路省界收费站创造条件。交通运输部公布的数据显示，截至2020年 10月26日，全国高速公路ETC使用率超 65.98%。其中客车ETC使用率超过70%，货车ETC使用率超过53%，在提升通行效率、促进精细化交通管理等方面发挥了重要价值',
        // p2: 'The Electronic Toll Collection (ETC: Electronic Toll Collection) system came into being and became an important part of building a safe, convenient, efficient and green modern comprehensive transportation system.In May 2019, the General Office of the Ministry of Transport of China issued the Notice on Vigorously Promoting the Development and Application of Expressway ETC, requiring active promotion of ETC installation and use, and create conditions for the abolition of highway provincial boundary toll stations. The data released by the Ministry of Transport shows that as of October 26, 2020, the national highway ETC utilization rate exceeded 65.98%. Among them, the usage rate of ETC for passenger vehicles exceeded 70%, and the usage rate of ETC for trucks exceeded 53%, which played an important value in improving the efficiency of traffic and promoting refined traffic management.',
        p3: '但与此同时，对于大型客车、货车及专项作业车辆而言，由于不同车型收费标准不一致，收费难、稽核难的问题普遍存在，难以满足精细化管理与缴费的需求。2020 年 1 月 1日，由交通运输部发布的《收费公路车辆通行费车型分类》正式执行，明确了车辆类别体系、客车分类参数、货车分类参数等新标准，不同车辆类别对应着不同的收费标准，这也给收费与稽核工作带来了如下的挑战：',
        // p3: 'However, at the same time, for large buses, trucks and special operation vehicles, due to the inconsistent toll standards of different models, the problem of difficult toll collection and auditing is common, which is difficult to meet the demand of fine management and toll payment. Parameters and other new standards, different vehicle categories correspond to different toll standards, which also brings the following challenges to the work of toll collection and auditing.',
        li_1: '大型客车、货车及专项作业车辆等车辆在型号、核载质量、轴型等方面存在着广泛的差异，并会对于收费标准带来实际的影响。由于车型的分类复杂而多样，因此精准识别这些车型极具挑战。',
        // li_1: 'Vehicles such as large buses, trucks and special operation vehicles have a wide range of differences in model, certified mass and axle type, and can have a real impact on the tariff. Accurate identification of these vehicles is challenging due to their complex and diverse classification.',
        li_2: '如果以人工方式进行车辆车型识别、收费、稽核等工作，将会产生较高的人力资源成本，同时在效率上也无法满足智慧交通的需求。',
        // li_2: 'If the work of vehicle model identification, charging and auditing is carried out manually, it will incur high human resource cost and also cannot meet the demand of intelligent transportation in terms of efficiency.',
        li_3: '如何更及时、精准地发现交通违法违规行为也是一个重要挑战。特别是在国家大力倡导取消高速公路省界收费站的背景下，高速公路上的人工检查关口数量显著减少，通过科技手段强化交通监管，有效遏制车辆通过车辆改装、套牌、遮挡号牌、不挂牌等非常规手段进行逃费、交通违法等行为，也就成为势在必行的举措。',
        // li_3: 'How to detect traffic violations in a more timely and accurate manner is also an important challenge. Especially in the context of the national vigorously advocate the abolition of highway provincial boundary toll stations, the number of manual inspection gates on the highway significantly reduced, through technological means to strengthen traffic supervision, effectively curb vehicles through vehicle modification, registration plates, obscuring the number plate, no license plate and other unconventional means to evade fees, traffic violations, etc., has also become an imperative initiative.',
      },
      basedIntel: {
        title: '基于英特尔® 架构的小神瞳收费车型识别管理方案',
        // title: 'Intel® architecture-based toll car identification management solution',
        p1: '卓视智通小神瞳收费车型识别管理方案采用边缘计算、AI智能图像识别等技术，集智能相机、边缘计算、智能补光、物联网监控、雷达感知等技术于一体。系统采用多视频三维车辆识别专利技术，通过正、侧、尾三向视觉融合分析，对车脸、车身、车尾三维特征图像采集和车身图像还原分析，成功实现对车头特征、车身特征（车长、轴数、轴距、轴型、轮数、侧身图像特征等）、车尾特征的实时采集，为车辆根据车身特征进行车辆类型的划分、车身特征的比对分析提供重要数据支撑。而且可在距离车辆不到1米的近距离条件下，采用多帧图像特征融合和深度特征识别技术，对超长车辆车身图像采集、还原，并识别车身特征信息。',
        // p1: 'Sinoits small god pupil toll model identification management program adopts edge computing, AI intelligent image recognition and other technologies, integrating intelligent camera, edge computing, intelligent light filling, IOT monitoring, radar perception and other technologies in one. The system adopts multi-video three-dimensional vehicle identification patented technology, through the front, side and tail three-way visual fusion analysis, the vehicle face, body, rear three-dimensional feature image acquisition and body image restoration analysis, and successfully realize the real-time acquisition of vehicle head features, body features (vehicle length, axle number, wheelbase, axle type, wheel number, side body image features, etc.), and rear features, for the vehicle according to the body features for vehicle type division, the The comparison analysis of body features provides important data support. And can be less than 1 meter away from the vehicle in close proximity conditions, the use of multi-frame image feature fusion and depth feature recognition technology, the ultra-long vehicle body image acquisition, restoration, and identification of body feature information.',
        p2: '这一方案的识别结果可完美对接高速公路ETC、MTC收费系统和收费车型视图大数据稽核平台。通过对车辆微特征进行多级级联，并采用专用算法生成虚拟车牌，可通过虚拟号牌对无牌车、遮挡号牌的车辆图像快速检索、比对并生成行车轨迹。',
        // p2: 'The recognition results of this program can be perfectly docked to the highway ETC, MTC tolling system and toll model view big data auditing platform. Through multi-level cascade of vehicle micro features and special algorithm to generate virtual license plate, it can quickly retrieve, compare and generate travel trajectory through virtual license plate to vehicle images of unlicensed vehicles and obscured license plate.',
        p3: '该解决方案的主要边缘产品为小神瞳一体机，该一体机搭载车脸相机、车尾相机、辅助检测、车身相机、车身补光、尾牌补光、前牌补光、车脸补光等组件，能够提供良好的车脸识别图片，并昼夜支持车牌、品牌、年款、颜色、车辆类型等4000维度精细化特征识别。',
        // p3: 'The main edge product of the solution is the small god pupil all-in-one machine, which is equipped with face camera, tail camera, auxiliary detection, body camera, body fill light, tail plate fill light, front plate fill light, face fill light and other components, which can provide good face recognition pictures and support 4000 dimensions of fine feature recognition such as license plate, brand, year, color, vehicle type, etc. day and night.',
        p4: '小神瞳一体机集成了搭载第11代英特尔酷睿处理器和英特尔® Myriad™ Movidius™ VPU的云图睿视 AI 计算盒，运行于边缘侧，能够提供通用算法框架支撑，同时支持所有主流人工智能框架训练出的算法模型，可帮助开发人员及客户缩短开发时间及成本，支持多元化的计算需求和不同的应用场景，实现视觉等数据的 AI 处理。',
        // p4: 'The all-in-one is equipped with the 11th generation Intel Core processor and Intel® Myriad™ Movidius™ VPU, and runs on the edge side. It can help developers and customers reduce development time and cost, support diversified computing requirements and different application scenarios, and realize AI processing of visual and other data.',
        p5: '云图睿视 AI 计算盒基于英特尔® AI 计算盒参考设计打造而成，为 AI 应用提供了高性价比的硬件选项，能够帮助卓视智通构建高集成度的边缘平台。在基于英特尔架构的小神瞳一体机上，卓视智通打造了混合架构，实现了多种 AI 应用的异构化处理。',
        // p5: 'Built on the Intel® AI Compute Box reference design, the Yuntu EdgeVision AI Compute Box provides cost-effective hardware options for AI applications and can help Sinoits build a highly integrated edge platform. On the Intel-based Xiaoshen Pupil All-in-One, Sinoits has built a hybrid architecture that enables heterogeneous processing of multiple AI applications.',
        p6: '其中，图片拼接等应用基于第11代英特尔酷睿处理器来完成，该处理器具备强大的算力、广泛的产品选项、I/O 集成功能、优异的扩展性与兼容性，能够完善地兼容小神瞳一体机内部的各种组件。此外，该处理器还集成了英特尔® 核芯显卡，拥有丰富的图形性能，能够很好地满足图片拼接、视频编解码等应用的需求。',
        // p6: 'Among them, applications such as picture stitching are done based on the 11th generation Intel Core processor, which has powerful arithmetic, extensive product options, I/O integration, excellent scalability and compatibility, and is perfectly compatible with various components inside the Xiaoshen Pupil All-in-One. In addition, the processor also integrates Intel® Core graphics with rich graphics performance, which can well meet the needs of applications such as picture stitching and video encoding and decoding.',
        p7: '英特尔® Myriad™ Movidius™ VPU则为低功耗、高性能的计算机视觉智能提供了独特的解决方案，能够支持不断更新的智能和自动设备，显著加速计算机视觉智能应用。',
        // p7: 'The Intel® Myriad™ Movidius™ VPU, on the other hand, provides a unique solution for low-power, high-performance computer vision intelligence that can support constantly updated smart and automated devices and significantly accelerate computer vision intelligence applications.',
        p8: '云图睿视 AI 计算盒还通过 Beacon OS整合了 OpenVINO™ 工具套件、英特尔® SVET等框架，能够为AI运行提供系统级的标准支撑。同时，Beacon OS还内置了 EdgeX 等其他丰富的IoT组件，能够支撑摄像头和其他传感器的接入和分析，为场景综合感知提供强大的软件基础。',
        // p8: 'The Yuntu EdgeVision AI Computing Box also integrates frameworks such as OpenVINO™ tool suite and Intel® SVET through Beacon OS, which can provide system-level standard support for AI operation. At the same time, Beacon OS is also built-in with other rich IoT components such as EdgeX, which can support the access and analysis of cameras and other sensors, providing a powerful software foundation for comprehensive scene perception.',
        p9: '小神瞳一体机集成了卓视智通多视频流三维收费车型识别算法，并通过 OpenVINO™ 工具套件进行了性能优化。OpenVINO 工具套件支持加快部署广泛的深度学习推理应用和解决方案，可支持开发人员使用行业标准人工智能框架、标准或自定义层，将深度学习推理轻松集成到应用中，在英特尔® 硬件（包括加速器）中扩展工作负载并改善性能。借助面向预推理模型的内置模型优化器（Model Optimizer，MO），和面向专用硬件加速的推理引擎（Inference Engine，IE）运行时，OpenVINO 工具套件可在英特尔不同平台上部署并加速神经网络模型，能够在保持精度的同时显著提高图像推理速度。',
        // p9: 'The OpenVINO tool suite supports accelerated deployment of a wide range of deep learning inference applications and solutions, enabling developers to easily integrate deep learning inference into applications using industry standard AI frameworks, standard or custom layers Scaling workloads and improving performance in Intel® hardware, including gas pedals. With a built-in Model Optimizer (MO) for pre-inference models and an Inference Engine (IE) runtime for dedicated hardware acceleration, the OpenVINO tool suite deploys and accelerates neural network models on different Intel platforms, enabling significant improvements in image inference speed while maintaining accuracy.',
        p10: '卓视智通对于加速前后的性能表现进行了测试，测试数据显示，在使用 OpenVINO 工具套件与英特尔 Myriad Movidius VPU 之后，算法的性能从 0.6 FPS 提升到 3 FPS，提升幅度达 5 倍 3。同时，由于该方案能够在不对硬件进行大幅投入的前提下，提升性能，因此能够将总体拥有成本 (TCO) 降低 50%-80%，实现更好的经济性。',
        // p10: 'The performance of the algorithm was tested before and after acceleration, and the test data showed that after using OpenVINO tool suite and Intel Myriad Movidius VPU, the performance of the algorithm improved from 0.6 FPS to 3 FPS, which is 5 times 3. At the same time, because the solution can improve the performance without significant investment in hardware, it The solution can reduce the total cost of ownership (TCO) by 50-80%, enabling better economics.',
        p11: '加速之后，在小神瞳一体机上运行多视频流三维收费车型识别算法的性能显著提升，从而避免了使用独立 GPU 所带来的高昂采购、空间、运维等成本，同时也能够更好地应对小神瞳一体机特殊的边缘应用场景。',
        // p11: 'After the acceleration, the performance of the multi-stream 3D toll car recognition algorithm running on the Pixar All-in-One is significantly improved, thus avoiding the high procurement, space, and operation and maintenance costs associated with using a standalone GPU, and also better able to cope with the special edge application scenarios of the Pixar All-in-One.',
        p12: '通过将车辆特征信息、车牌、IC卡、OBU等数据信息深度挖掘和多维度分析，小神瞳收费车型识别管理方案可为高速公路收费车辆路径识别、高速公路收费大数据稽查等多种业务需求提供可靠的数据支撑。在系统检测数据抽样测试中，解决方案能够在车速0~40KM/H的条件下，实现超过 97% 的车型识别准确率。',
        // p12: 'Through deep mining and multi-dimensional analysis of vehicle feature information, license plate, IC card, OBU and other data information, the Little God Pupil toll model recognition management solution can provide reliable data support for various business needs such as highway toll vehicle path recognition and highway toll big data auditing. In a sample test of system detection data, the solution was able to achieve an accuracy rate of more than 97% in vehicle identification under the conditions of vehicle speed 0~40KM/H.',
        
        p13: '对于交通管理工作，部署小神瞳收费车型识别管理方案能够带来如下收益：',
        li_1: '准确识别划分收费车型，实现按型发卡、按型收费等核心功能，可以作为人工收费数据稽核的辅助手段并逐渐代替人工稽核，后期通过数据优化提升可接入收费数据稽查平台，实现全面自动化数据稽核与取证；',
        // li_1: 'It can be used as an auxiliary means of manual charging data auditing and gradually replace manual auditing, and can be connected to the charging data auditing platform later through data optimization and enhancement to realize comprehensive automated data auditing and forensics.',
        li_2: '有效应对通过套牌、遮挡号牌、不挂牌等非常规手段进行逃费的嫌疑车辆，可规避收费漏洞，遏制逃费行为；',
        // li_2: 'Effectively responding to suspected vehicles that evade tolls through unconventional means such as sleeve plates, obscured number plates and unlisted plates, which can circumvent toll loopholes and curb toll evasion.',
        li_3: '通过对于车辆信息的AI图像识别，提供了更加深入的智慧洞察，便于交通管理部门进行智慧管理。',

        card_1: '“我们从一开始就聚焦于AI的场景化应用落地，并在智慧交通领域得到了尤为深入的应用。通过融合我们在算法、方案设计等方面的长期创新，以及英特尔端到端的 AI 技术优势，我们能够高效、准确地识别车型等重要信息，确保交通安全，提高通行效率，从而形成安全、高效和环保的智慧交通系统。”',
        // card_1: '"We have focused on the scenario-based application implementation of AI from the beginning, and have been particularly deeply engaged in the smart transportation sector. By incorporating our long-term innovation in algorithms, solution design and other areas, as well as the advantages of Intel's end-to-end AI technology, we are able to efficiently and accurately identify important information such as vehicle models to ensure traffic safety and improve traffic efficiency, resulting in a safe, efficient and environmentally friendly intelligent transportation system."',
        card_2: '“智慧交通是 AI 非常重要的应用场景，我们提供的 AI 计算盒产品能够具备卓越性能，能够为运行各种算法提供可靠支持。云图睿视将与英特尔、卓视智通进行深入合作，推动算法在一体化解决方案中的集成，推动智慧交通建设目标的实现。”',
        // card_2: '"Smart transportation is a very important application scenario for AI, and the AI compute box products we provide can have excellent performance and can provide reliable support for running various algorithms. Yuntu RuiShi will cooperate deeply with Intel and ZhuoShiZhiTong to promote the integration of algorithms in the integrated solution and to promote the realization of the construction goals of smart transportation."',
      
        sinoits: '卓视智通',
        yt: '云图睿视'
      },
      practice: {
        title: '小神瞳一体机赋能智慧交通应用实践',
        // title: 'Little God's pupil all-in-one machine to enable the practice of intelligent transportation applications',
        p1: '目前，小神瞳一体机已经广泛应用于多个智慧交通应用场景，在全国各地交通管理部门的管理实践中发挥了重要角色：',
        // p1: 'At present, the Little God pupil all-in-one machine has been widely used in a number of intelligent traffic application scenarios, playing an important role in the management practices of traffic management departments across the country.',

        li1: '河南省高速公司管理中心高速公路 ETC/MTC 收费管理',
        // li1: 'Expressway ETC/MTC Toll Management of Henan Provincial Expressway Company Management Center',
        li1_txt: '河南省高速公司管理中心将小神瞳一体机安装于收费站的ETC/MTC收费车道，通过智能三维视频连续扫描，采集完整的过车过程并进行检测，识别出车牌，车长宽高，车轴，轴型，车型等多维车辆信息，输出精准数据并上传收费平台，配合OBU、CPC的比对，发现大车小标，卡签不符等情况，保证车型、号牌信息准确性后精准收费，大大减少了通行费的损失。',
        // li1_txt: 'The management center of Henan Provincial Expressway Company installs the small god pupil all-in-one machine in the ETC/MTC toll lane of the toll station. Through intelligent three-dimensional video continuous scanning, it collects the complete passing process and detects it, identifies the multi-dimensional vehicle information such as license plate, car length, width, height, axle, axle type and model, outputs accurate data and uploads it to the toll platform, cooperates with the comparison of OBU and CPC, finds the big car and small mark, the card signature does not match etc. to ensure the accuracy of vehicle type and number plate information and then charge accurately, which greatly reduces the loss of tolls.',
        li2: '江苏服务区车辆实施管控',
        // li2: 'Jiangsu service area vehicle implementation control',
        li2_txt: '江苏高速公路服务区基于小神瞳一体机的智能三维视觉识别技术+大数据分析技术，对各类车辆车身进行全过程扫描、检测、识别，输出车辆车牌车型轴数、外廓尺寸等多维车辆微特征信息及车身高清图片，对服务区进出车辆实时管控，和进出口车辆信息对比，为后续监控督察提供有力的数据支撑。',
        // li2_txt: 'Jiangsu highway service area based on small God pupil all-in-one machine intelligent three-dimensional visual recognition technology + big data analysis technology, all kinds of vehicle body scanning, detection, identification, output vehicle license plate model axle number, outline size and other multi-dimensional vehicle micro features information and body high-definition pictures, real-time control of the service area in and out of the vehicle, and import and export vehicle information comparison, for the follow-up monitoring inspectors to provide powerful data support.',
        li3: '高速公路拒超管理',
        // li3: 'Expressway refusal super management',
        li3_txt: '在该场景中，小神瞳一体机可以安装于拒超站/车道，通过智能三维视频连续扫描，完整输出车脸高清图、车尾高清图、还原车身全景高清大图和不少于5秒的过车视频记录。记录车辆不同角度全景图片和驶入称重设备完整过程，为收费入口拒超、出口称重复核业务提供清晰完整的图像和车型数据。同时识别收费车型，可校验ETC天线读取结果，保证车型/轴型、号牌信息准确性；并与称重数据结合完成信息匹配，形成完成的拒超信息采集，统一上传治超/收费系统。',
        // li3_txt: 'In this scenario, the small god pupil all-in-one machine can be installed in the refuse to overtake station / lane, through the intelligent three-dimensional video continuous scanning, complete output car face HD picture, car rear HD picture, restore the body panoramic HD large picture and not less than 5 seconds of the overtaking video record. It records panoramic pictures of vehicles from different angles and the complete process of driving into the weighing equipment, providing clear and complete images and model data for toll entrance refusal and export weighing repeat verification business. At the same time, it identifies the toll model and can verify the ETC antenna reading results to ensure the accuracy of model/axle type and number plate information; it also combines with the weighing data to complete information matching and form the completed information collection for rejecting overtaking and uploading to the overtaking/charging system in a unified manner.',
      },
      smarter: {
        title: '边缘 AI 让交通管理更加智慧',
        // title: 'Edge AI makes traffic management smarter',
        p1: '在交通管理这一场景，边缘 AI 有着重要的应用意义。通过在边缘终端处理 AI 负载，而非云端处理，交通管理部门能够更加高效地对于交通监管视频进行 AI 分析，满足费用自动稽核、违法违规行为智能定位等应用需求。同时，边缘 AI 应用也有助于降低网络传输所带来的处理延迟，提升应用的可用性。此外，边缘终端所汇聚的数据还能够与路段中心子系统、省部级联网中心进行交互，通过“云-边-端”融合来满足更多智慧交通的管理需求。',
        p2: '在“云-边-端”融合的架构基础上，卓视智通正在与云图睿视、英特尔继续合作，在小神瞳一体机中融入更多算法，满足改造车辆识别等功能的需求。而除了高速公路之外，该解决方案还能够广泛应用于车路协同、物流园区等场景，通过车型识别等能力提供强大的智慧能力支撑，加速交通体系运行的效率并节约成本。基于开放和成熟的架构，该解决方案可以根据业务场景需要灵活快速的部署和调整相关算法并支持多算法运行，包括车辆识别，车型识别，路面积水/破损检测，恶劣天气检测等，所有的算法均通过OTA方式下发，为AI和边缘计算提供强大、稳定、灵活的基础，也最大程度保护用户投资。',
        p3: '以数据为中心的英特尔将以世界领先的端到端技术、强大的底层算力以及丰富的产品组合，联合卓视智通、云图睿视等产业界伙伴，助力于包括中国市场在内的全球智慧交通产业的不断创新和发展。通过丰富的产品和解决方案组合，覆盖终端、边缘和云端的各个环节，满足数据计算、存储和转发、车道设备控制、数据分析和计算机视觉处理等多种负载的需求，积极赋能智慧交通的不断创新。',
        // p1: 'In the traffic management scenario, edge AI has important application implications. By processing AI loads at the edge terminals instead of in the cloud, traffic management departments can more efficiently perform AI analysis of traffic monitoring videos to meet the needs of applications such as automatic cost auditing and intelligent localization of violations. At the same time, edge AI applications also help reduce processing delays caused by network transmission and improve the availability of applications. In addition, the data aggregated by the edge terminal can also interact with the central subsystem of road sections and provincial networking centers to meet more intelligent traffic management needs through "cloud-edge-end" integration.',
        // p2: 'On the basis of the "cloud - edge - end" fusion architecture, Sinoits is continuing to cooperate with Yuntu EdgeVision and Intel to integrate more algorithms in the small ShenZhen all-in-one machine to meet the needs of transforming vehicle identification and other functions. And in addition to highways, the solution can also be widely used in scenarios such as vehicle-road coordination and logistics parks, providing strong intelligent capability support through capabilities such as vehicle identification, accelerating the efficiency of traffic system operations and saving costs. Based on the open and mature architecture, the solution can flexibly and quickly deploy and adjust relevant algorithms and support multiple algorithm operation according to the needs of business scenarios, including vehicle identification, vehicle model identification, road surface water/damage detection, bad weather detection, etc. All algorithms are issued through OTA, providing a strong, stable and flexible foundation for AI and edge computing, and also protecting user investment to the greatest extent.',
        // p3: 'With the world's leading end-to-end technology, powerful underlying computing power and rich product portfolio, data-centric Intel will join hands with industry partners such as Sinoits and Yuntu EdgeVision to help the continuous innovation and development of the global intelligent transportation industry, including the Chinese market. Through a rich portfolio of products and solutions, covering all aspects of the terminal, edge and cloud, we meet the needs of various loads such as data computation, storage and forwarding, lane device control, data analysis and computer vision processing, and actively enable the continuous innovation of intelligent transportation.',
      },
      aboutZs: {
        title: '关于卓视智通',
        // title: 'About Sinoits',
        p1: '卓视智通是一家国际领先的人工智能科技公司，由世界知名的计算机视觉科学家和国内外资深专家团队创立，公司基于5G+AI技术，完全自主研发了先进的车脸识别、交通视频融合感知及车路协同产品，目前已广泛应用于包括北京在内的全国二十余省市和数万公里的高速公路。',
        // p1: 'Sinoits is a leading international artificial intelligence technology company founded by a team of world-renowned computer vision scientists and senior experts from home and abroad. Based on 5G+AI technology, the company has developed advanced face recognition, traffic video fusion perception and vehicle-road coordination products completely independently, which have been widely used in more than 20 provinces and cities and tens of thousands of kilometers of highways in China, including Beijing.',
      },
      aboutYt: {
        title: '关于云图睿视',
        // title: 'About Yuntu EdgeVision',
        p1: '成都云图睿视科技有限公司成立于2017年。云图睿视通过其自研的边缘计算AI-Box，Beacon OS操作系统和算法商城，整合AI生态的算法供应商、硬件供应商和解决方案供应商等众多合作伙伴。通过标准的基础架构，公司帮助用户自行选择其所需人工智能算法并在15分钟内完成部署和运行，解决人工智能行业算法找不到和算法难部署的两个核心痛点。云图睿视与英特尔在2020年推出《人工智能边缘计算盒参考设计》为边缘计算提供更进一步的标准规范。云图睿视的愿景是用AI将人从繁琐劳动中解脱，创造更大的价值，通过我们的努力，我们希望人工智能像空气和水一样，成为人人都能享用的基础能力。',
        // p1: 'Chengdu Yuntu EdgeVision Technology Co., Ltd. was established in 2017. Through its self-researched edge computing AI-Box, Beacon OS operating system and algorithm mall, Yuntu RuiShi integrates many partners such as algorithm providers, hardware providers and solution providers of AI ecology. Through the standard infrastructure, the company helps users to choose the AI algorithms they need and deploy and run them within 15 minutes, solving the two core pain points of the AI industry: algorithms cannot be found and algorithms are difficult to deploy. In 2020, CloudTrust and Intel will launch the "AI Edge Computing Box Reference Design" to provide a further standard specification for edge computing. The vision of Yuntu RuiShi is to use AI to free people from tedious labor and create greater value. Through our efforts, we hope that AI, like air and water, will become a basic capability that everyone can enjoy.',
      },
      aboutIntel: {
        title: '关于英特尔',
        // title: 'About Intel',
        p1: '英特尔（NASDAQ: INTC）作为行业引领者，创造改变世界的技术，推动全球进步并让生活丰富多彩。在摩尔定律的启迪下，我们不断致力于推进半导体设计与制造，帮助我们的客户应对最重大的挑战。通过将智能融入云、网络、边缘和各种计算设备，我们释放数据潜能，助力商业和社会变得更美好。如需了解英特尔创新的更多信息，请访问英特尔中国新闻中心newsroom.intel.cn以及官方网站intel.cn。',
        // p1: "Intel (NASDAQ: INTC) is an industry leader in creating the world-changing technologies that drive global progress and enrich lives. Inspired by Moore's Law, we are continually working to advance semiconductor design and manufacturing to help our customers meet their greatest challenges. By bringing intelligence to the cloud, the network, the edge and a variety of computing devices, we unlock the potential of data to help make business and society a better place. For more information on Intel innovations, please visit the Intel China Newsroom at newsroom.intel.cn and the official website at intel.cn."
      },
      
      citation: {
        c1: '1 数据援引自智研数据https://www.chyxx.com/research/202012/916515.html',
        c2: '2 数据援引自交通部网站：https://www.mot.gov.cn/2020wangshangzhibo/jingjiyx/zhibozhaiyao/202010/t20201028_3481017.html',
        c3: '3,4,5 数据援引自卓视智通内部测试结果。',
        // c1: '1 Data cited from Smart Research Data https://www.chyxx.com/research/202012/916515.html',
        // c2: '2 Data cited from the Ministry of Transportation website: https://www.mot.gov.cn/2020wangshangzhibo/jingjiyx/zhibozhaiyao/202010/t20201028_3481017.html',
        // c3: '3,4,5 The data is quoted from the internal test results of Sinoits.',
      },
      explain: {
        e1: '实际性能受使用情况、配置和其他因素的差异影响。更多信息请见www.Intel.com/PerformanceIndex。',
        e2: '具体成本和结果可能不同。',
        e3: '没有任何产品或组件是绝对安全的。',
        e4: '英特尔并不控制或审计第三方数据。请您审查该内容，咨询其他来源，并确认提及数据是否准确。',
        e5: '©英特尔公司版权所有。英特尔、英特尔标识以及其他英特尔商标是英特尔公司或其子公司在美国和/或其他国家的商标。',
        e6: '文中涉及的其它名称及品牌属于各自所有者资产。',
        // e1: 'Actual performance is affected by differences in usage, configuration and other factors. For more information, see www.Intel.com/PerformanceIndex.',
        // e2: 'Specific costs and results may vary.',
        // e3: 'No product or component is perfectly safe.',
        // e4: 'Intel does not control or audit third-party data. You are asked to review the content, consult other sources, and confirm that the data mentioned is accurate.',
        // e5: 'Copyright © Intel Corporation. Intel, the Intel logo, and other Intel trademarks are trademarks of Intel Corporation or its subsidiaries in the United States and/or other countries.',
        // e6: 'Other names and brands mentioned in the text are the property of their respective owners.',
      },

      pic: {
        p1: '图 1. 小神瞳收费车型识别管理方案对车辆进行特征识别',
        p2: '图 2. 小神瞳收费车型识别管理方案拓扑架构',
        p3: '图 3. 小神瞳一体机',
        p4: '图 4. 第11代英特尔酷睿处理器可满足图片拼接、视频编解码等应用需求',
        p5: '图 5. 卓视智通使用OpenVINO 工具套件与英特尔 Myriad Movidius VPU 进行算法加速',
        p6: '图 6. 优化前后性能对比 4',
        p7: '图 7. 小神瞳一体机用于 ETC/MTC 收费管理',
        p8: '图 8. 小神瞳一体机用于车辆实时管控'
      }
    }
  },

  // 隐私政策
  privacy: {
    title: '隐私政策', //Privacy Policy
    c1: '云图睿视是专注于人工智能边缘计算的公司，目标旨在帮助企业和政府在海量数据产生的当下，以保证关键数据能被快速筛选、快速处理和快速响应。我们致力于提供行业标准和生态建设，合作伙伴也遍及各行各业。因此，我们承诺对通过这一过程获得的任何个人信息进行全面保护，因为我们认识到牢记个人利益和权利的社会责任。因此，我们完全遵守有关个人隐私的法律和法规。',
    c2: '我们紧跟影响网络安全的社会、商业和经济趋势。我们努力通过我们的管理系统来适应，该系统旨在不断保护个人信息，以履行我们的职责，具体如下。',
    p1: '1.我们的业务包括硬件、软件、算法平台。我们确保通过您自愿填写的内容中收集的任何个人信息将只用于此目的，不会以任何不适当的方式使用。',
    p2: '2.云图睿视遵守政府要求的所有法律，以及与处理私人信息有关的外部细则或守则。',
    p3: '3.我们不断部署和更新我们的技术和组织安全措施，以防止我们拥有的任何个人信息的丢失、滥用或更改。为了做到这一点，除了整顿内部规章制度外，我们还进行了广泛的投资，并将您的个人信息的最佳利益铭记在心。',
    p4: '4.我们积极倾向于并以最大的诚意回应任何关于处理个人信息的投诉或担忧。在云图睿视，我们也高度重视法律的遵守。',
    p5: '5.我们不断地更新我们的隐私政策和管理系统，以适应不断变化的环境，从而保证你的信息安全。',
    p6: '6.本政策的副本将分发给我们在云图睿视的所有员工，以及任何附属公司。该隐私政策是公开的，显示在我们的主页上，任何人都可以访问。',
    p7: '7.此外，为了改善本网站的服务，我们使用谷歌公司的谷歌分析。分析可能通过伴随产生的文本文件 "Cookie "进行，部分用户信息如IP地址可能被谷歌公司收集，用于网站使用分析，向出版商报告，以及其他服务。通过使用本网站，您将被视为同意由谷歌公司以上述方式和目的进行此类数据处理。',
    end: '可以通过用户的浏览器操作来拒绝 "Cookie"。但是，本网站的一些功能可能无法使用。'
  }
}
