    /**创建大量的表单数据，并将数据插入表格中 */
    var _html='';
    for(var i=1;i<46;i++){
        _html=_html+'<tr><td>'+i+'</td><td>moyi</td><td>21</td></tr>';
    }
    $("#table").html(_html);
     page(3,15);
  

    /**currentPage表示当前的页号，totalRow表示每页显示的行数*/
    function page(currentPage,row){
        var table=document.getElementById("table");
        var sumRow=table.rows.length;  /**总的记录数（即总共有多少行） */
        var sumPage=Math.ceil(sumRow / row); /*总共的分页数（页码）* */
        var currentPage=currentPage;  /**当前的页码 */

        /**计算当前的页码的开始行记录，和结束行记录 */
        var startRow=(currentPage-1)*row+1;
        var endRow=currentPage*row;
        endRow=endRow>sumRow?sumRow:endRow;


        /**筛选出当前页的记录 */
        for(var i=1;i<=sumRow;i++){
            var irow=table.rows[i-1];
            if(i>=startRow&&i<=endRow){
                $(irow).addClass("show");
                $(irow).removeClass("hidden");
            }
            else{
                $(irow).addClass("hidden");
                $(irow).removeClass("show");
            }
        }   


        /**底部页码的设置 */
        /**当前页是第一页，则上一页不可点击 */
        /**当前页是最后一页，则下一页不可点击 */
        var template="";
        if(currentPage>1){
             template+='<a href="#" onClick="page('+(currentPage-1)+','+row+')"><上一页</a>';
            for(var i=1;i<=sumPage;i++){
                template+='<a href="#" onClick="page('+i+','+row+')">'+i+'</a>';
            }
        }
        else{
             template+='<上一页';
             for(var i=1;i<=sumPage;i++){
                template+='<a href="#" onClick="page('+i+','+row+')">'+i+'</a>';
            }
        }
        if(currentPage<sumPage){
            template+='<a href="#" onClick="page('+(currentPage+1)+','+row+')">下一页></a>';
        }
        else{
            template+='<下一页';
        }
        $("#page").html(template);
    }  