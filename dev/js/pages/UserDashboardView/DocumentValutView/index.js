import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SET_MENUBAR_STATE } from '@constants/types';
import Header from '@components/Header';
import NotificationWidget from '@components/NotificationWidget';
import ProfileWidget from '@components/ProfileWidget';
import { isMobileView, loaderView } from '@constants';
import BlankScreen from '@components/BlankScreen';
import LoadingWidget from '@components/LoadingWidget';
import CustomButton from '@components/CustomButton';
import CustomSelect from '@components/CustomSelect';
import CustomSearch from '@components/CustomSearch';
import { getDocumentsList, deleteDocument, downloadDocument } from '@actions';
import DocumentCard from '@components/DocumentCard';
import FileUpload from '@components/FileUpload';
import CustomToaster from '@components/CustomToaster';
import DeleteConfirmationPopup from '@components/DeleteConfirmationPopup';
import { container, filters, uploadMobileCta } from './style.js';
import { body } from '../style.js';

const PriorityList = [
    {
        id: 1,
        val: 'all'
    },
    {
        id: 2,
        val: 'you'
    },
    {
        id: 0,
        val: 'Consultant'
    }
]

const TaskView = ()=>{
    const history = useHistory();
    const dispatch = useDispatch();
    const documentsInfo = useSelector(state=>state.DOCUMENT_VAULT);
    const { documentListLoading, documentList } = documentsInfo;

    const [uploadedBy, setUploadedBy] = useState(PriorityList[0]);
    const [searchVal, setSearchVal] = useState('');
    const [openUploadDocumentModal, setOpenUploadModal] = useState(false);
    const [showDeleteConfirmation, setDeleteConfirmation] = useState(false);
    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })
    const [loading, setLoading] = useState('');
    const [selectedDeleteDocument, setDeleteDocument] = useState('');
    const [filterList, setFilterList] = useState([]);

    useEffect(()=>{
        dispatch(
            {
                type: SET_MENUBAR_STATE,
                payload: {
                    activeWidget: 'vault'
                }
            }
        )
        fetchDocuments();
    },[])

    const fetchDocuments = ()=>{
        getDocumentsList({}, dispatch);
    }

    const handleUploadedByChange = (val)=>{
        setUploadedBy(val);
        const { id } = val;
        let selectedDocList = [...documentList];
        if(searchVal){
            selectedDocList = [...filterList];
        }
        const newFilterList = selectedDocList.filter((doc)=>{
            const { user_id } = doc;
            if(id==0){
                return !user_id
            }else if(id==2){
                return !!user_id;
            }
            return true;
        });
        setFilterList(newFilterList);
    }

    const handleResponse = (resp, msg='Uploaded Successfully', fetchNewData = true)=>{
        if(resp){
            setToasterInfo({
                isVisible: true,
                isError: false,
                isSuccess: true,
                msg
            });
            if(fetchNewData){
                fetchDocuments();
            }
        }else{
            setToasterInfo({
                isVisible: true,
                isError: true,
                isSuccess: false,
                msg: 'Failed, Try again later'
            });
        }
        setTimeout(() => {
            hideToaster();
        }, 1000);
    }

    const uploadFile = (val, resp)=>{
        toggleUploadModal();
        handleResponse(resp, 'Document Uploaded Successfully');
    }

    const toggleUploadModal = ()=>{
        setOpenUploadModal(val=>!val);
    }

    const handleSearch = (val)=>{
        const { id =1 } = uploadedBy;
        let selectedDocList = [...documentList];
        if(id!==1){
            selectedDocList = [...filterList];
        }
        setSearchVal(val);
        try{
            let filterList = [];
            selectedDocList.map((doc)=>{
                const { doc_type } = doc;
                let name = doc_type.toLowerCase();
                let searchString = val.toLowerCase();
                if(name.includes(searchString)){
                    let index = name.indexOf(searchString);
                    filterList.push({
                        ...doc,
                        rank: index
                    })
                }
            })
            filterList = filterList.sort((x,y)=>{
                return x.rank-y.rank
            })
            setFilterList(filterList);
        }catch(e) {

        }
    }

    const hideToaster = ()=>{
        setToasterInfo({
            isVisible: false
        })
    }

    const deleteDocumentClicked = ({id})=>{
        setDeleteDocument(id);
        toggleDeletePopup()
    }

    const deletePopupHandler = ()=>{
        toggleDeletePopup();
        setLoading(true);
        deleteDocument({id: selectedDeleteDocument}, dispatch, (resp, err)=>{
            setLoading(false);
            handleResponse(resp, 'Deleted Successfully');
        })
    }

    const downloadImg = (data, contentType)=>{
        let type='png';
        if(contentType){
            type = contentType.split('/')[1];
        }
        const resp = `data:${contentType};base64, ${data}`;
        var link=document.createElement('a');
        console.log('link is', link);
        link.href=resp;
        link.download=`new.${type}`;
        link.click();        
    }

    const downloadDocumentClicked = ({id, docId})=>{
        setLoading(true);
        downloadDocument({ docId }, dispatch, (resp, err)=>{
            setLoading(false);
            if(resp && resp.file_data){
                let contentType = resp.content_type;
                
                downloadImg(resp.file_data, contentType);
            }
        })
    }

    const toggleDeletePopup = ()=>{
        setDeleteConfirmation(val=>!val);
    }

    const { id =1 } = uploadedBy;
    let documentListFiltered = [...documentList];
    if(id!==1 || searchVal){
        documentListFiltered = [...filterList];
    }
     
    return(
        <div className={body + '    ' + 'p-relative pt-5'}>
            <div className="mainView">
            <div className="subHeaderTop">
            <div className="headerContent">
            <img className="img-fluid keelTopLogo" src={ASSETS_BASE_URL + "/images/common/keelIcon.svg"} alt="home" onClick={()=>history.push('/')} />

                    {/* <img className="img-fluid" src={ASSETS_BASE_URL + "/images/common/bell.svg"} /> */}
                    {/* <NotificationWidget /> */}
                    <ProfileWidget />
                    </div>
                </div>
                <Header headerText="All your documents are safe with us!">
                    <div className="headerView">
                        <div className={uploadMobileCta}>
                            <CustomButton text="Upload Document" icon={`${ASSETS_BASE_URL}/images/common/uploadedDocs.svg`} clickHandler={toggleUploadModal} margin="0px 8px 0px 0px" padding="6px 20px" borderRadius="10px" backgroundColor="#363B64" fontSize="12px"/>
                        </div>
                        {/* <NotificationWidget/>
                        <ProfileWidget/> */}
                    </div>
                </Header>
                <div className={container}>
                <CustomToaster {...toasterInfo} hideToaster={hideToaster}/>
                    {
                        openUploadDocumentModal ?<FileUpload isUploadToServer fileUploadModalClosed={toggleUploadModal} uploadFile={uploadFile}/>:null
                    }
                    {
                        showDeleteConfirmation?<DeleteConfirmationPopup togglePopup={toggleDeletePopup} deletePopupHandler={deletePopupHandler}/>:null
                    }
                    <div className={filters}>
                        <div className="uploadBy">
                            <span className="btn">Uploaded By</span>
                            <CustomSelect options={PriorityList} defaultOption={uploadedBy} clickHandler={handleUploadedByChange} mpadding="2px 12px" mfontSize="14px"/>

                        </div>
                        <div className="documentCta">
                            <div className="searchBar">
                                <CustomSearch handleChange={handleSearch} value={searchVal} padding="6px 16px"/>
                            </div>
                            <div className="uploadCTA">
                                <CustomButton text="Upload Document" icon={`${ASSETS_BASE_URL}/images/common/uploadedDocs.svg`} clickHandler={toggleUploadModal} margin="0px 8px 0px 0px" padding="10px 28px" borderRadius="4px" backgroundColor="#4267B2" fontSize="12px"/>
                            </div>
                        </div>
                        <div className="mobileDropDown">
                            <span className="btn">Uploaded By</span>
                            <CustomSelect options={PriorityList} defaultOption={uploadedBy} clickHandler={handleUploadedByChange}/>
                        </div>
                    </div>
                    {
                        documentListLoading || loading?<div className={loaderView}><LoadingWidget/></div>:
                        <div className="documentList">
                            {
                                documentListFiltered.length?
                                documentListFiltered.map((document)=>{
                                    return <DocumentCard key={document.id} documentData={document} deleteDocumentClicked={deleteDocumentClicked} downloadDocumentClicked={downloadDocumentClicked}/>
                                })
                                :<BlankScreen message=""/>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default TaskView;