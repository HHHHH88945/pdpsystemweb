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
                        {{ monthList.content[0] }}
                    </td>
                    <td class="cell">权重=[(计划花费天数/22)*30%]*难度系数
                        难度系数≌f(新技术or新思路or工作强度or缺陷深广度)∈(0，1]
                        达成率=完成工作包数/总工作包数</td>
                    <td class="cell" contenteditable="true"  @input="updateContent2($event)">{{ monthList.mWeight[0]}}
                    </td>
                    <td class="cell" contenteditable="true" @input="updateContent3($event)">{{ monthList.cStatus[0]}}
                    </td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true" @input="updateContent4($event)">{{ monthList.myMark[0]}}</td>
                    <td class="cell" contenteditable="true"></td>
                </tr>
                <tr>
                    <td class="cell" contenteditable="true">2</td>

                    <td class="cell" contenteditable="true" @input="updateContent5($event)">
                        {{ monthList.content[1] }}
                    </td>
                    <td class="cell">权重=[(计划花费天数/22)*30%]*难度系数
                        难度系数≌f(新技术or新思路or工作强度or缺陷深广度)∈(0，1]
                        达成率=完成工作包数/总工作包数</td>
                    <td class="cell" contenteditable="true" @input="updateContent6($event)">{{ monthList.mWeight[1]}}
                    </td>
                    <td class="cell" contenteditable="true" @input="updateContent7($event)">{{ monthList.cStatus[1]}}
                    </td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true" @input="updateContent8($event)">{{ monthList.myMark[1]}}</td>
                    <td class="cell" contenteditable="true"></td>

                </tr>

                <tr>
                    <td class="cell" contenteditable="true">3</td>
                    <td class="cell" contenteditable="true" @input="updateContent9($event)">
                        {{ monthList.content[2] }}
                    </td>
                    <td class="cell">权重=[(计划花费天数/22)*30%]*难度系数
                        难度系数≌f(新技术or新思路or工作强度or缺陷深广度)∈(0，1]
                        达成率=完成工作包数/总工作包数</td>
                    <td class="cell" contenteditable="true" @input="updateContent10($event)">{{ monthList.mWeight[2]}}
                    </td>
                    <td class="cell" contenteditable="true" @input="updateContent11($event)">{{ monthList.cStatus[2]}}

                    </td>
                    <td class="cell" contenteditable="true" ></td>
                    <td class="cell" contenteditable="true" @input="updateContent12($event)">{{ monthList.myMark[2]}}
                    </td>
                    <td class="cell" contenteditable="true"></td>
                </tr>

                <tr>
                    <td class="cell">4</td>

                    <td class="cell" contenteditable="true" @input="updateContent13($event)"> 
                        {{ monthList.content[3] }}
                    </td>
                    <td class="cell">权重=[(计划花费天数/22)*30%]*难度系数
                        难度系数≌f(新技术or新思路or工作强度or缺陷深广度)∈(0L,1]
                        达成率=完成工作包数/总工作包数</td>
                    <td class="cell" contenteditable="true" @input="updateContent14($event)">{{ monthList.mWeight[3]}}
                    </td>
                    <td class="cell" contenteditable="true" @input="updateContent15($event)">{{ monthList.cStatus[3]}}
                    </td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true" @input="updateContent16($event)">{{ monthList.myMark[3]}}
                    </td>
                    <td class="cell" contenteditable="true"></td>
                </tr>

                <tr>
                    <td class="cell">5</td>

                    <td class="cell" contenteditable="true" @input="updateContent17($event)">
                        {{ monthList.content[4] }}
                    </td>
                    <td class="cell" contenteditable="true">权重=[(计划花费天数/22)*30%]*难度系数 难度系数≌f(新技术or新思路or工作强度or缺陷深广度)∈(0L,1] 达成率=完成工作包数/总工作包数</td>
                    <td class="cell" contenteditable="true" @input="updateContent18($event)">{{ monthList.mWeight[4]}}
                    </td>
                    <td class="cell" contenteditable="true" @input="updateContent19($event)">{{ monthList.cStatus[4]}}
                    </td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true" @input="updateContent20($event)">{{ monthList.myMark[4]}}
                    </td>
                    <td class="cell" contenteditable="true"></td>
                </tr>

                <tr>
                    <td class="cell">6</td>

                    <td class="cell" contenteditable="true" @input="updateContent21($event)">
                        {{ monthList.content[5] }}
                    </td>
                    <td class="cell" contenteditable="true">权重=[(计划花费天数/22)*30%]*难度系数 难度系数≌f(新技术or新思路or工作强度or缺陷深广度)∈(0L,1] 达成率=完成工作包数/总工作包数</td>
                    <td class="cell" contenteditable="true" @input="updateContent22($event)">{{ monthList.mWeight[5]}}
                    </td>
                    <td class="cell" contenteditable="true" @input="updateContent23($event)">{{ monthList.cStatus[5]}}
                    </td>
                    <td class="cell" contenteditable="true"></td>
                    <td class="cell" contenteditable="true" @input="updateContent24($event)">{{ monthList.myMark[5]}}</td>
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

                    <td class="cell" colspan="3" contenteditable="true" @input="updateContent25($event)">{{monthList.leader}}</td>

                </tr>

                <tr>
                    <td class="cell" colspan="2">时间:</td>
                    <td class="cell" colspan="7" contenteditable="true" ></td>
                </tr>


            </tbody>
        </table>
       

    </div>
</template>



<script>
    import axios from "axios";

    export default {
        data() {
            return {
                monthList: [], // 存储后台返回的数据
            };
        },
        mounted() {
            const subDate = this.$route.query.subDate;
            //  console.info(subDate);
        // const sunDate = subDate.replace(/\//g, "-");
        // console.info(sunDate);
        this.fetchData(subDate); // 在组件
        },
        methods: {
            
            fetchData(subDate) {
                
                const url = "/admin/months/checkMonths";
                const params = {
                    userId: localStorage.getItem("userId"),
                    userName: localStorage.getItem("userName"),
                    monthDate: subDate
                }
       // 使用axios或其他方式向后台发送请求
                
                axios
                    .post(url, params)
                    .then((response) => {
                        console.info(response);
                        this.monthList = response.resultSetData;
                    })
                    
                    .catch((error) => {
                        console.error(error);
                    });
                  
           
            },
        },
    };
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

    
</style>