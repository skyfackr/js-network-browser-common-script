var OSS_REGION=''
var OSS_ENDP=''
var OSS_AK=''
var OSS_AKS=''
var OSS_STS=''
var OSS_BUCKET=''
var OSS_POLITY=''
//var OSS_SIGN=''
var OSS_UPLOAD_DIR=''
function setRegion(region)
{
    OSS_REGION=region
}
function setEndpoint(url)
{
    OSS_ENDP=url
}
function setAK(ak)
{
    OSS_AK=ak
}
function setAKS(aks)
{
    OSS_AKS=aks
}
function setSTS(sts)
{
    OSS_STS=sts
}
function setBucket(bucket)
{
    OSS_BUCKET=bucket
}
function makeOSSUrl()
{
    return 'https://'+OSS_BUCKET+'.'+OSS_ENDP
}
function calSignature()
{
    var enc=CryptoJS
}
function setPolity(polity)
{
    OSS_POLITY=polity
}
function setUploadDir(dir)
{
    OSS_UPLOAD_DIR=dir
}
function buildElement()
{
    var ans=document.createElement('form')
    ans.setAttribute('action',makeOSSUrl())
    ans.setAttribute('method','post')
    ans.setAttribute('enctype','multipart/form-data')
    childInputList=[
        ['text','OSSAccessKeyId',OSS_AK],
        ['text','policy',OSS_POLITY],
        ['text','Signature',calSignature()]
    ]
}
function buildOneInputElement(type,name,value)
{
    var ans=document.createElement('input')
    ans.setAttribute('type',type)
    ans.setAttribute('name',name)
    ans.setAttribute('value',value)
    return ans
}
function loadJS(url)
{
    var em=document.createElement('script')
    em.setAttribute('src',url)
    document.getElementsByTagName('head')[0].appendChild(em)
}
function initial()
{
    var reqpackage=[
        'https://cdn.bootcdn.net/ajax/libs/crypto-js/4.0.0/crypto-js.min.js',
        'https://cdn.bootcdn.net/ajax/libs/require.js/2.3.6/require.min.js',
        'https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js'
    ]
    reqpackage.forEach((url)=>{
        loadJS(url)
    })
}
initial()