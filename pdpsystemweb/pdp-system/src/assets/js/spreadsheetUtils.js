import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css';
import * as GC from '@grapecity/spread-sheets';
import '@grapecity/spread-sheets/dist/gc.spread.sheets.resources.zh.16.2.2.min.js';

export function initializeSpread() {
  GC.Spread.Common.CultureManager.culture("zh-cn");
  const spread = new GC.Spread.Sheets.Workbook(document.getElementById("spreadContainer"));
  const sheet = spread.getActiveSheet();
  sheet.setValue(0, 0, "表A:                                                    研发中心员工月度PDP计划");
  sheet.setValue(2, 0, "序号");
  sheet.setValue(2, 1, "类别");
  sheet.setValue(2, 2, "考核内容");
  sheet.setValue(2, 3, "指标定义");
  sheet.setValue(1, 4, "权重");
  sheet.setValue(1, 5, "工作达成情况(%)");
  sheet.setValue(1, 6, "评分");
  sheet.setValue(2, 6, "（根据指标数据来源收集结果，计算得分）");
  sheet.setValue(3, 6, "考核实际结果");
  sheet.setValue(3, 7, "自评分");
  sheet.setValue(3, 8, "上级评分");
  sheet.setValue(4, 0, "1");
  sheet.setValue(5, 0, "2");
  sheet.setValue(6, 0, "3");
  sheet.setValue(7, 0, "4");
  sheet.setValue(8, 0, "5");
  sheet.setValue(9, 0, "6");
  sheet.setValue(4, 1, "关键工作任务（50%）");
  sheet.setValue(4, 3, "      权重=[(计划花费天数/22)*30%]*难度系数难度系数≌f(新技术or新思路or工作强度or缺陷深广度)∈(0，1]达成率=完成工作包数/总工作包数     ");

  sheet.setValue(5, 3, "权重=[(计划花费天数/22)*30%]*难度系数难度系数≌f(新技术or新思路or工作强度or缺陷深广度)∈(0，1]达成率=完成工作包数/总工作包数");

  sheet.setValue(6, 3, "权重=[(计划花费天数/22)*30%]*难度系数难度系数≌f(新技术or新思路or工作强度or缺陷深广度)∈(0，1]达成率=完成工作包数/总工作包数");

  sheet.setValue(7, 3, "权重=[(计划花费天数/22)*30%]*难度系数难度系数≌f(新技术or新思路or工作强度or缺陷深广度)∈(0，1]达成率=完成工作包数/总工作包数");
  sheet.setValue(4, 4, "15%");
  sheet.setValue(5, 4, "100%");
  sheet.setValue(6, 4, "100%");
  sheet.setValue(7, 4, "100%");
  sheet.setValue(10, 0, "7");
  sheet.setValue(21, 0, "总分:");
  sheet.setValue(22, 0, "审核:");
  sheet.setValue(23, 0, "时间:");
  sheet.setValue(14, 1, "工作态度（10％）");
  sheet.setValue(19, 1, "技能提升项（5%）");
  sheet.setValue(1, 0, "姓名:");
  sheet.setValue(11, 0, "8");
  sheet.setValue(12, 0, "9");
  sheet.setValue(13, 0, "10");
  sheet.setValue(10, 1, "工作质量（35%）");
  sheet.setValue(10, 2, "项目输出通过率");
  sheet.setValue(11, 2, "研发缺陷关闭率");
  sheet.setValue(12, 2, "缺陷问题反馈数");
  sheet.setValue(13, 2, "内审问题");

  sheet.setValue(14, 2, "责任心");
  sheet.setValue(15, 2, "积极性");
  sheet.setValue(16, 2, "团队意识");
  sheet.setValue(17, 2, "学习意识");

  sheet.setValue(18, 2, "服从意识");
  sheet.setValue(19, 2, "学习内容");
  sheet.setValue(20, 2, "制定规范");

  sheet.setValue(10, 3, "100%满分，低于100%0分，不涉及5分");
  sheet.setValue(11, 3, "100%奖励2分，90%至100%满分，低于90%0分，不涉及5分率");
  sheet.setValue(12, 3, "0反馈满分，反馈1个或以上0分");
  sheet.setValue(13, 3, "被发现1个扣2分");

  sheet.setValue(14, 3, "有强烈的工作责任心，从来没有失职行为");
  sheet.setValue(15, 3, "积极性很高，总是主动反映各方面的工作任务");
  sheet.setValue(16, 3, "有强烈的团队意识，非常乐意配合其他同事完成职责外的工作");
  sheet.setValue(17, 3, "有强烈的学习意识，工作能力不断得到提高");

  sheet.setValue(18, 3, "对上级的工作安排总是非常乐意接受");
  sheet.setValue(19, 3, "学习专业知识");
  sheet.setValue(20, 3, "每做一个规范加5分");

  sheet.setValue(10, 4, "15%");
  sheet.setValue(11, 4, "10%");
  sheet.setValue(12, 4, "10%");
  sheet.setValue(13, 4, "/ ");

  sheet.setValue(14, 4, "2%");
  sheet.setValue(15, 4, "2%");
  sheet.setValue(16, 4, "2%");
  sheet.setValue(17, 4, "2%");

  sheet.setValue(18, 4, "2%");
  sheet.setValue(19, 4, "2%");
  sheet.setValue(20, 4, "/");
  sheet.setValue(14, 0, "11");
  sheet.setValue(15, 0, "12");

  sheet.setValue(16, 0, "13");
  sheet.setValue(17, 0, "14");

  sheet.setValue(18, 0, "15");
  sheet.setValue(19, 0, "16");

  sheet.setValue(20, 0, "17");
  sheet.setValue(4, 0, "1");
  sheet.setValue(4, 0, "1");

  sheet.setValue(4, 0, "1");
  sheet.setValue(4, 0, "1");

  sheet.setValue(4, 0, "1");
  sheet.setValue(4, 0, "1");
  sheet.setValue(4, 0, "1");

  sheet.setValue(4, 0, "1");
  sheet.setValue(4, 0, "1");
  sheet.setValue(4, 0, "1");

  sheet.setValue(4, 0, "1");
  sheet.setValue(4, 0, "1");
  sheet.setValue(4, 0, "1");



  // 设置列宽
  sheet.setColumnWidth(0, 70);
  sheet.setColumnWidth(1, 90);
  sheet.setColumnWidth(2, 210);
  sheet.setColumnWidth(3, 320);
  sheet.setColumnWidth(4, 70);
  sheet.setColumnWidth(5, 90);
  sheet.setColumnWidth(6, 120);
  sheet.setColumnWidth(7, 80);
  sheet.setColumnWidth(8, 100);
  //设置行高
  sheet.setRowHeight(0, 35);
  sheet.setRowHeight(1, 70);
  sheet.setRowHeight(2, 35);
  sheet.setRowHeight(3, 35);
  sheet.setRowHeight(4, 120);
  sheet.setRowHeight(5, 120);
  sheet.setRowHeight(6, 120);
  sheet.setRowHeight(7, 120);
  sheet.setRowHeight(8, 35);
  sheet.setRowHeight(9, 35);
  sheet.setRowHeight(10, 35);
  sheet.setRowHeight(11, 35);
  sheet.setRowHeight(12, 35);
  sheet.setRowHeight(13, 35);
  sheet.setRowHeight(14, 35);

  sheet.setRowHeight(15, 35);
  sheet.setRowHeight(16, 35);
  sheet.setRowHeight(17, 35);
  sheet.setRowHeight(18, 35);

  sheet.setRowHeight(19, 35);
  sheet.setRowHeight(20, 35);
  sheet.setRowHeight(21, 35);
  sheet.setRowHeight(22, 35);
  sheet.setRowHeight(23, 35);
  //背景颜色
  sheet.getCell(2, 0).backColor("#FFFF99");
  sheet.getCell(2, 1).backColor("#FFFF99");
  sheet.getCell(2, 2).backColor("#FFFF99");
  sheet.getCell(2, 3).backColor("#FFFF99");
  sheet.getCell(2, 4).backColor("#FFFF99");
  sheet.getCell(1, 4).backColor("#FFFF99");
  sheet.getCell(1, 5).backColor("#FFFF99");
  sheet.getCell(3, 6).backColor("#C0C0C0");
  sheet.getCell(3, 7).backColor("#C0C0C0");
  sheet.getCell(3, 8).backColor("#C0C0C0");
  sheet.getCell(2, 6).backColor("#C0C0C0");
  sheet.getCell(1, 6).backColor("#C0C0C0");
  sheet.getCell(0, 0).backColor("#FF9900");
  //文字水平方向
  // sheet.getCell(1, 1).hAlign(GC.Spread.Sheets.HorizontalAlign.left);
  // sheet.getCell(2, 1).hAlign(GC.Spread.Sheets.HorizontalAlign.left);
  // sheet.getCell(12, 0).hAlign(GC.Spread.Sheets.HorizontalAlign.left);
  // sheet.getCell(40, 0).hAlign(GC.Spread.Sheets.HorizontalAlign.left);
   //文字加粗
  sheet.getCell(0, 0).font("bold 16px Arial");
  //更改字体颜色
  sheet.getCell(0, 0).foreColor('#006600');
  //字体自动换行
  const defaultStyle = new GC.Spread.Sheets.Style();
  defaultStyle.wordWrap = true;
  defaultStyle.textIndent = 1; // 设置缩进的像素值
  defaultStyle.hAlign = GC.Spread.Sheets.HorizontalAlign.center;
  defaultStyle.vAlign = GC.Spread.Sheets.VerticalAlign.center;
  
// 设置默认样式
  sheet.setDefaultStyle(defaultStyle);

//单元格加粗
  var lineStyle = GC.Spread.Sheets.LineStyle.thin;
  var lineBorder = new GC.Spread.Sheets.LineBorder('#000000', lineStyle);

  var sheetArea = GC.Spread.Sheets.SheetArea.viewport;

  var range = sheet.getRange("A1:I24");
  range.setBorder(lineBorder, { all: true }, sheetArea);

  // var dange = sheet.getRange("B19:F25");
  // dange.setBorder(lineBorder, { all: true }, sheetArea);

  // var sange = sheet.getRange("L5:P11");
  // sange.setBorder(lineBorder, { all: true }, sheetArea);

  // var rande = sheet.getRange("A15:S15");
  // rande.setBorder(lineBorder, { all: true }, sheetArea);

  // var zande = sheet.getRange("L19:P25");
  // zande.setBorder(lineBorder, { all: true }, sheetArea);

  // var aande = sheet.getRange("B32:F39");
  // aande.setBorder(lineBorder, { all: true }, sheetArea);

  // var bande = sheet.getRange("L32:P39");
  // bande.setBorder(lineBorder, { all: true }, sheetArea);

  // var eande = sheet.getRange("B46:F53");
  // eande.setBorder(lineBorder, { all: true }, sheetArea);

  // var fande = sheet.getRange("L46:P53");
  // fande.setBorder(lineBorder, { all: true }, sheetArea);

  //

  //设置中轴线
  // sheet.getCell(3, 7).diagonalUp(new GC.Spread.Sheets.LineBorder('black', GC.Spread.Sheets.LineStyle.thick));
  // sheet.getCell(3, 9).diagonalDown(new GC.Spread.Sheets.LineBorder('black', GC.Spread.Sheets.LineStyle.thick));
  // sheet.getCell(30, 7).diagonalUp(new GC.Spread.Sheets.LineBorder('black', GC.Spread.Sheets.LineStyle.thick));
  // sheet.getCell(30, 9).diagonalDown(new GC.Spread.Sheets.LineBorder('black', GC.Spread.Sheets.LineStyle.thick));
  sheet.addSpan(0, 0, 1, 9);
  sheet.addSpan(1, 0, 1, 4);
  sheet.addSpan(1, 6, 1, 3);
  sheet.addSpan(2, 6, 1, 3);
  sheet.addSpan(21, 0, 1, 7);
  sheet.addSpan(22, 0, 1, 9);
  sheet.addSpan(23, 0, 1, 9);
//竖向换格子
  sheet.addSpan(2, 0, 2, 1);
  sheet.addSpan(2, 1, 2, 1);
  sheet.addSpan(2, 2, 2, 1);
  sheet.addSpan(2, 3, 2, 1);
  sheet.addSpan(1, 4, 3, 1);
  sheet.addSpan(1, 5, 3, 1);
  sheet.addSpan(4, 1, 6, 1);
  sheet.addSpan(10, 1, 4, 1);
  sheet.addSpan(14, 1, 5, 1);
  sheet.addSpan(19, 1, 2, 1);
  spread.refresh();
}