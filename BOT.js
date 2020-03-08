var response = null;
var bearerToken = 'iy703xS2iGnRchEl46wTO9deczBVzLYHBI2J2TfRvsSpthkuLXOmFXJ26hrccVmU6xStCC0_Ad9-eS1_FhhqacU6kRcrzDOZSF6gLDt0kkngglgiv2wu2pWdcH0_QFSkAZXZ08DGWnlRUP94CWQ5K1dempYKWbKN5e2v7Ypu3g0XO6rquq_efpAVy59MFWoH3mpsctvAo734LEYBReQJKFUeg_DNel7a078PyarMZw8GhzOvGO9OjO9beIazYgWvQq0KDiKU5ZHKL1octCSGy474MgDuYQfDU5OF-DJq1Rvnk7J4jjcmZG9aaQwucdEuF5hdJQ';
var jobCount = 0;
var headerParams = {
    'Authorization': 'bearer ' + bearerToken + ''
};

function removedCandidateTotalApplyJobList() {
    setTimeout(function () {
        $.each(response, function (i, v) {
            obj = {
                type: 'get',
                url: 'https://api.kariyer.net/jb/v1/api/jobs/appliedjobdelete?dummyId=' + v.id + '&appliedProcess=JobAppliedRemovable',
                headers: headerParams,
                data: [],
                dataType: 'json',
                processData: false,
                success: function (data) {
                    console.log(data);
                }
            };
            $.ajax(obj);
        });
    }, 3000);
}
function candidateTotalApplyJobList() {
    obj = {
        type: 'get',
        url: 'https://api.kariyer.net/jb/v1/api/jobs/jobapply/applyjoblist?take=20&skip=0&keyword=&applicationType=0',
        headers: headerParams,
        data: [],
        dataType: 'json',
        processData: false,
        success: function (data) {
            response = data.result.candidateApplyJobList;
            console.log('Veri Çekildi Çekilen Başvuru Sayısı : ' + response.length + '');
            removedCandidateTotalApplyJobList();
        }
    };
    $.ajax(obj);
}

for (var i = 0; i < 200; i++) {
    candidateTotalApplyJobList();
}

//Veri Çekildi Çekilen Başvuru Sayısı: 0