<template>
    <div class="excel-table">
        <table class="custom-table">
            <tbody>
                <tr>
                    <td class="cell" colspan="9" style="font-size: 25px;font-weight: 1000;">研发中心员工月度pdp计划</td>
                </tr>
                <tr>
                    <td class="cell" colspan="4"></td>
                    <td class="cell" rowspan="3">权重</td>
                    <td class="cell" rowspan="3" style="min-width:30px">工作达成情况</td>
                    <td class="cell" colspan="3">评分</td>

                </tr>
                <tr>
                    <td class="cell" rowspan="2">序号</td>
                    <td class="cell" rowspan="2">类别</td>
                    <td class="cell" rowspan="2">考核内容</td>
                    <td class="cell" rowspan="2">指标定义</td>

                    <td class="cell" colspan="3">根据指标数据来源收集结果，计算得分</td>
                </tr>
                <tr>
                    <td class="cell">考核实际结果</td>
                    <td class="cell">自评分</td>
                    <td class="cell">上级评分</td>
                </tr>

                <tr>
                    <td class="cell" >1</td>
                    <td class="cell" rowspan="6"> 关键工作任务（50%）</td>
                    <td class="cell" contenteditable="true" @input="updateContent1($event)">
                    </td>
                    <td class="cell">权重=[(计划花费天数/22)*30%]*难度系数
                        难度系数≌f(新技术or新思路or工作强度or缺陷深广度)∈(0，1]
                        达成率=完成工作包数/总工作包数</td>
                    <td class="cell" contenteditable="true"  @input="updateContent2($event)">
                    </td>
                    <td class="cell" contenteditable="true" @input="updateContent3($event)">
                    </td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true" @input="updateContent4($event)"></td>
                    <td class="cell" contenteditable="true"></td>
                </tr>
                <tr>
                    <td class="cell" contenteditable="true">2</td>

                    <td class="cell" contenteditable="true" @input="updateContent5($event)">
                    </td>
                    <td class="cell">权重=[(计划花费天数/22)*30%]*难度系数
                        难度系数≌f(新技术or新思路or工作强度or缺陷深广度)∈(0，1]
                        达成率=完成工作包数/总工作包数</td>
                    <td class="cell" contenteditable="true" @input="updateContent6($event)">
                    </td>
                    <td class="cell" contenteditable="true" @input="updateContent7($event)">
                    </td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true" @input="updateContent8($event)"></td>
                    <td class="cell" contenteditable="true"></td>

                </tr>

                <tr>
                    <td class="cell" contenteditable="true">3</td>
                    <td class="cell" contenteditable="true" @input="updateContent9($event)">
                    </td>
                    <td class="cell">权重=[(计划花费天数/22)*30%]*难度系数
                        难度系数≌f(新技术or新思路or工作强度or缺陷深广度)∈(0，1]
                        达成率=完成工作包数/总工作包数</td>
                    <td class="cell" contenteditable="true" @input="updateContent10($event)">
                    </td>
                    <td class="cell" contenteditable="true" @input="updateContent11($event)">

                    </td>
                    <td class="cell" contenteditable="true" ></td>
                    <td class="cell" contenteditable="true" @input="updateContent12($event)">
                    </td>
                    <td class="cell" contenteditable="true"></td>
                </tr>

                <tr>
                    <td class="cell">4</td>

                    <td class="cell" contenteditable="true" @input="updateContent13($event)"> 
                    </td>
                    <td class="cell">权重=[(计划花费天数/22)*30%]*难度系数
                        难度系数≌f(新技术or新思路or工作强度or缺陷深广度)∈(0L,1]
                        达成率=完成工作包数/总工作包数</td>
                    <td class="cell" contenteditable="true" @input="updateContent14($event)">
                    </td>
                    <td class="cell" contenteditable="true" @input="updateContent15($event)">
                    </td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true" @input="updateContent16($event)">
                    </td>
                    <td class="cell" contenteditable="true"></td>
                </tr>

                <tr>
                    <td class="cell">5</td>

                    <td class="cell" contenteditable="true" @input="updateContent17($event)">
                    </td>
                    <td class="cell" >权重=[(计划花费天数/22)*30%]*难度系数 难度系数≌f(新技术or新思路or工作强度or缺陷深广度)∈(0L,1] 达成率=完成工作包数/总工作包数</td>
                    <td class="cell" contenteditable="true" @input="updateContent18($event)">
                    </td>
                    <td class="cell" contenteditable="true" @input="updateContent19($event)">
                    </td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true" @input="updateContent20($event)">
                    </td>
                    <td class="cell" contenteditable="true"></td>
                </tr>

                <tr>
                    <td class="cell">6</td>

                    <td class="cell" contenteditable="true" @input="updateContent21($event)">
                    </td>
                    <td class="cell" >权重=[(计划花费天数/22)*30%]*难度系数 难度系数≌f(新技术or新思路or工作强度or缺陷深广度)∈(0L,1] 达成率=完成工作包数/总工作包数</td>
                    <td class="cell" contenteditable="true" @input="updateContent22($event)">
                    </td>
                    <td class="cell" contenteditable="true" @input="updateContent23($event)">
                    </td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true" @input="updateContent24($event)"></td>
                    <td class="cell" contenteditable="true"></td>

                </tr>
                <tr>
                    <td class="cell">7</td>
                    <td class="cell" rowspan="4"> 工作质量（35%） </td>
                    <td class="cell">项目输出通过率</td>
                    <td class="cell">100%满分，低于100%0分，不涉及5分</td>
                    <td class="cell">15%</td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell">15</td>
                    <td class="cell" contenteditable="true"></td>
                </tr>

                <tr>
                    <td class="cell">8</td>

                    <td class="cell">研发缺陷关闭率</td>
                    <td class="cell">100%奖励2分，90%至100%满分，低于90%0分，不涉及5分</td>
                    <td class="cell">10%</td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell">10</td>
                    <td class="cell" contenteditable="true"></td>
                </tr>

                <tr>
                    <td class="cell">9</td>

                    <td class="cell">缺陷问题反馈数</td>
                    <td class="cell">0反馈满分，反馈1个或以上0分</td>
                    <td class="cell">10%</td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell">10</td>
                    <td class="cell" contenteditable="true"></td>
                </tr>

                <tr>
                    <td class="cell">10</td>
 
                    <td class="cell">内审问题</td>
                    <td class="cell">被发现1个扣2分</td>
                    <td class="cell" contenteditable="true">/</td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell"></td>
                    <td class="cell" contenteditable="true"></td>
                </tr>

                <tr>
                    <td class="cell">11</td>
                    <td class="cell" rowspan="5">工作
                        态度
                        （10％）</td>
                    <td class="cell">责任心</td>
                    <td class="cell">有强烈的工作责任心，从来没有失职行为</td>
                    <td class="cell">2%</td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell">1</td>
                    <td class="cell" contenteditable="true"></td>
                </tr>

                <tr>
                    <td class="cell">12</td>

                    <td class="cell">积极性</td>
                    <td class="cell">积极性很高，总是主动反映各方面的工作任务</td>
                    <td class="cell">2%</td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell"> 1</td>
                    <td class="cell" contenteditable="true"></td>
                </tr>

                <tr>
                    <td class="cell">13</td>

                    <td class="cell">团队意识</td>
                    <td class="cell">有强烈的团队意识，非常乐意配合其他同事完成职责外的工作</td>
                    <td class="cell">2%</td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell">2</td>
                    <td class="cell" contenteditable="true"></td>
                </tr>
                <tr>
                    <td class="cell">14</td>

                    <td class="cell">学习意识</td>
                    <td class="cell">有强烈的学习意识，工作能力不断得到提高</td>
                    <td class="cell">2%</td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell">2</td>
                    <td class="cell" contenteditable="true"></td>
                </tr>
                <tr>
                    <td class="cell">15</td>

                    <td class="cell">服从意识</td>
                    <td class="cell">对上级的工作安排总是非常乐意接受</td>
                    <td class="cell">2%</td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell">2</td>
                    <td class="cell" contenteditable="true"></td>
                </tr>

                <tr>
                    <td class="cell">16</td>
                    <td class="cell" rowspan="2">技能提升项（5%）</td>
                    <td class="cell">学习内容</td>
                    <td class="cell">学习专业知识</td>
                    <td class="cell">5%</td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell">5</td>
                    <td class="cell" contenteditable="true"></td>
                </tr>

                <tr>
                    <td class="cell">17</td>

                    <td class="cell">制定规范</td>
                    <td class="cell">每做一个规范加5分</td>
                    <td class="cell" contenteditable="true">/</td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true"></td>
                </tr>

                <tr>
                    <td class="cell" colspan="7">总分</td>

                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true"></td>
                </tr>
                <tr>
                    <td class="cell" colspan="2">被考核人:</td>

                    <td class="cell" colspan="2" contenteditable="true"></td>

                    <td class="cell" colspan="2">审批人:</td>

                    <td class="cell" colspan="3" contenteditable="true" @input="updateContent25($event)"></td>

                </tr>

                <tr>
                    <td class="cell" colspan="2">时间:</td>
                    <td class="cell" colspan="7" contenteditable="true" ></td>
                </tr>


            </tbody>
        </table>
        <button class="oBtn" @click="submitData">提交</button>

    </div>
</template>




<script> 

export default
        {
            data() {
                return {
                    content1: '',
                    content2: '',
                    content3: '',
                    content4: '',
                    content5: '',
                    content6: '',
                    content7: '',
                    content8: '',
                    content9: '',
                    content10: '',
                    content11: '',
                    content12: '',
                    content13: '',
                    content14: '',
                    content15: '',
                    content16: '',
                    content17: '',
                    content18: '',
                    content19: '',
                    content20: '',
                    content21: '',
                    content22: '',
                    content23: '',
                    content24: '',
                    content25: '',
                    content26: '',
                    content28:'',
                    currentDate: new Date().getMonth() + 1,
                }
            },
            methods: {
                updateContent1(event) {
            this.content1 = event.target.innerText;
        },
        updateContent2(event) {
            this.content2 = event.target.innerText;
        },
        updateContent3(event) {
            this.content3 = event.target.innerText;
        },
        updateContent4(event) {
            this.content4 = event.target.innerText;
        },
        updateContent5(event) {
            this.content5 = event.target.innerText;
        },
        updateContent6(event) {
            this.content6 = event.target.innerText;
        },
        updateContent7(event) {
            this.content7 = event.target.innerText;
        },
        updateContent8(event) {
            this.content8 = event.target.innerText;
        },
        updateContent9(event) {
            this.content9 = event.target.innerText;
        },
        updateContent10(event) {
            this.content10 = event.target.innerText;
        },
        updateContent11(event) {
            this.content11 = event.target.innerText;
        },
        updateContent12(event) {
            this.content12 = event.target.innerText;
        },
        updateContent13(event) {
            this.content13 = event.target.innerText;
        },
        updateContent14(event) {
            this.content14 = event.target.innerText;
        },
        updateContent15(event) {
            this.content15 = event.target.innerText;
        },
        updateContent16(event) {
            this.content16 = event.target.innerText;
        },
        updateContent17(event) {
            this.content17= event.target.innerText;
        },
        updateContent18(event) {
            this.content18 = event.target.innerText;
        },
        updateContent19(event) {
            this.content19 = event.target.innerText;
        },
        updateContent20(event) {
            this.content20 = event.target.innerText;
        },
        updateContent21(event) {
            this.content21 = event.target.innerText;
        },
        updateContent22(event) {
            this.content22 = event.target.innerText;
        },
        updateContent23(event) {
            this.content23 = event.target.innerText;
        },
        updateContent24(event) {
            this.content24 = event.target.innerText;
        },
        updateContent25(event) {
            this.content25 = event.target.innerText;
        },
    
         submitData() {
                    const data = {
                        // mContent: [this.content1, this.content5,this.content9,this.content13,this.content17,this.content21]
                        // ,mWeight: [this.content2, this.content6,this.content10,this.content14,this.content18,this.content22],
                        // comStatus: [this.content3, this.content7,this.content11,this.content15,this.content19,this.content23],
                        // mMark:  [this.content4, this.content8,this.content12,this.content16,this.content20,this.content24],
                        monList:[this.content1,this.content2,this.content3,this.content4,this.content5,this.content6,this.content7,this.content8,
                            this.content9,this.content10,this.content11,this.content12,this.content13,this.content14,this.content15,this.content16,
                            this.content17,this.content18,this.content19,this.content20,this.content21,this.content22,this.content23,this.content24],

                        leader:this.content25,
                        monthDate:  this.getMonthDate(),
                        months: this.currentDate,
                        userId:  localStorage.getItem("userId"),
                        userName: localStorage.getItem("userName")
                    }
                    //debugger;//测试
                    
                    this.axios.post('/admin/months/setMonths', data).then(response => { this.showMessage(response.msg,'success'); }).catch(error => {
                        console.log(error);
                    });
                    //点击提交得时候页面会显示提交成功
                    
                },
            getMonthDate() {
                // 获取当前时间的年月日的逻辑
                const date = new Date();
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();
                return `${year}-${month}-${day}`;
            },
            }
        } 
</script>


<style scoped>
    .excel-table {
        display: flex;
        gap: 10px;
        flex-grow: 1;
    }

    /* .custom-table tr:nth-child(2) td:first-child {
        min-width: 800px;
    } */
    .custom-table tr:nth-child(2) td:nth-child(3) {
        width: 80px;
    }

    .custom-table tr:nth-child(2) td:nth-child(2) {
        width: 80px;
    }

    .custom-table tr:nth-child(3) td:nth-child(3) {
        min-width: 400px;
    }

    .custom-table tr:nth-child(5) td:nth-child(7) {
        min-width: 100px;
    }

    .custom-table tr:nth-child(3) td:nth-child(-n+4) {
        background-color: #FFFF99;
        font-weight: 1000;
        font-size: 15px;
    }

    .custom-table tr:nth-child(2) td:nth-child(2) {
        background-color: #FFFF99;
        font-weight: 1000;
        font-size: 15px;
    }

    .custom-table tr:nth-child(2) td:nth-child(3) {
        background-color: #FFFF99;
        font-weight: 1000;
        font-size: 15px;

    }

    .custom-table tr:nth-child(5) td:nth-child(9) {

        max-width: 150px;
    }

    .custom-table tr:nth-child(2) td:nth-child(4) {
        background-color: #C0C0C0;
        font-weight: 1000;
        font-size: 15px;
    }

    .custom-table tr:nth-child(3) td:nth-child(5) {
        background-color: #C0C0C0;
        font-weight: 1000;
        font-size: 15px;
    }

    .custom-table tr:nth-child(4) td:nth-child(1),
    .custom-table tr:nth-child(4) td:nth-child(2),
    .custom-table tr:nth-child(4) td:nth-child(3) {
        background-color: #C0C0C0;
        font-weight: 1000;
        font-size: 15px;
    }


    .custom-table tr:nth-child(1) {
        height: 50px;
    }

    .custom-table tr:nth-child(2),
    tr:nth-child(3) {
        height: 60px;
    }

    /* 除了什么 */
    .custom-table tr:not(:first-child):not(:nth-child(2)):not(:nth-child(3)) td:first-child {
        width: 50px;
    }

    .custom-table tr td:nth-child(2) {
        width: 120px;
    }

    /* .custom-table tr td:nth-child(3) {
        min-width: 400px;
    } */


    table {
        width: 100%;
        border-collapse: collapse;
        table-layout: auto;
        font-family: "Arial", sans-serif;
        font-size: 15px;
    }

    th,
    td {
        border: 1px solid #ccc;
        padding: 4px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        padding: 3px;
    }

    th {
        background-color: #007bff;
        color: #fff;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    .cell {
        min-width: 60px;
        max-width: 150px;
    }

    .oBtn {
        width: 100%;
        height: 50px;
        font-size: 30px;
        font-weight: 1000px;
        position: fixed;
        bottom: 0;
        background-color: #ADD8E6;
        box-shadow: 0 0 5px #FFA500, 0 0 10px #FFA500;
        border: 1px solid cyan;
        border-radius: 10%;
    }

    .oBtn:hover {
        box-shadow: 0 0 5px #FFA500, 0 0 10px #FFFFFF, 0 0 20px #D3D3D3, 0 0 30px #FFFF00, 0 0 50px #FF0000;
    }
</style>