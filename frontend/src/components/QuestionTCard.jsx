export const Questions = ({ editorStatus, setEditorStatus }) => {
   return (
      <div>
         <Solo
            label={'Solo'}
            updateStatus={'SOLO'}
            currentStatus={editorStatus}
            onClickHandler={setEditorStatus}
         />

         <Friends
            label={'Friends'}
            updateStatus={'FRIENDS'}
            currentStatus={editorStatus}
            onClickHandler={setEditorStatus}
         />
      </div>
   );
};

export const Solo = ({
   label,
   updateStatus,
   currentStatus,
   onClickHandler
}) => {
   return (
      <div>
         <div>
            <i class="bx bx-male-sign" />
            <h1>Male</h1>
            <p>18-30</p>
            <p>31-50</p>
            <p>51+</p>
         </div>

         <div>
            <i class="bx bx-female-sign"></i>
            <h2>Female</h2>
            <p>18-30</p>
            <p>31-50</p>
            <p>51+</p>
         </div>
      </div>
   );
};

export const Friends = ({
   label,
   updateStatus,
   currentStatus,
   onClickHandler
}) => {
   return (
      <div>
         <p>18-30</p>
         <p>31-50</p>
         <p>51+</p>
      </div>
   );
};
