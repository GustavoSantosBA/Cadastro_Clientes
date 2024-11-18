import { Injectable } from "@angular/core";
import Swal, { SweetAlertIcon } from "sweetalert2";

@Injectable({ providedIn: "root" })
export class SweetAlertService {
  successMsg(title: string, message: string, reload: boolean = false, justificado: boolean = false) {
    Swal.fire({
      title: title,
      text: message,
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: "OK",
      customClass: {
        htmlContainer: justificado ? 'text-justificado' : '',
      }
      
    }).then(() => {
      if (reload)
        location.reload();
    }
    );
  }

  errorMsg(title: string, message: string, justificado: boolean = false) {
    Swal.fire({
      title: title,
      text: message,
      icon: "error",
      showCancelButton: false,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: "OK",
      customClass: {
        htmlContainer: justificado ? 'text-justificado' : '',
      }
    });
  }

  infoMsg(title: string, message: string, justificado: boolean = false) {
    Swal.fire({
      title: title,
      text: message,
      icon: "info",
      showCancelButton: false,
      confirmButtonColor: "rgb(3, 142, 220)",
      confirmButtonText: "OK",
      customClass: {
        htmlContainer: justificado ? 'text-justificado' : '',
      }
    });
  }

  infoMsgWithAction(title: string, message: string, okAction: Function) {
    Swal.fire({
      title: title,
      text: message,
      icon: "info",
      showCancelButton: false,
      confirmButtonColor: "rgb(3, 142, 220)",
      confirmButtonText: "OK",
    }).then(() =>{
      okAction();
    });
  }

  confirm(
    title: string,
    message: string,
    confirmAction: Function,
    confirmButtonText?:string,
    justificado: boolean = false
  ) {
    Swal.fire({
      title: title,
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: confirmButtonText == null ? "Desativar" :confirmButtonText,
      cancelButtonText: "Cancelar",
      customClass: {
        htmlContainer: justificado ? 'text-justificado' : '',
      }
    }).then((result) => {
      if (result.value) {
        confirmAction();
      }
    });
  }

  confirmCustomIcon(
    title: string,
    message: string,
    confirmedTitle: string,
    confirmedMessage: string,
    customIcon: string,
    customIconColor:string,
    confirmAction: Function,
    confirmButtonText?:string,
    justificado: boolean = false
  ) {
    Swal.fire({
      title: title,
      text: message,
      iconHtml: customIcon,
      iconColor: customIconColor,
      showCancelButton: true,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: confirmButtonText == null ? "Desativar" :confirmButtonText,
      cancelButtonText: "Cancelar",
      customClass: {
        htmlContainer: justificado ? 'text-justificado' : '',
      }
    }).then((result) => {
      if (result.value) {
        confirmAction();
        Swal.fire({
          title: confirmedTitle,
          text: confirmedMessage,
          confirmButtonColor: "rgb(3, 142, 220)",
          icon: "success",
        });
      }
    });
  }
  
  confirmRedirect(
    title: string,
    message: string,
    confirmAction: Function,
    justificado: boolean = false
  ) {
    Swal.fire({
      title: title,
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      customClass: {
        htmlContainer: justificado ? 'text-justificado' : '',
      }
    }).then((result) => {
      if (result.value) {
        confirmAction();
      }
    });
  }

  confirmSave(
    title: string,
    message: string,
    confirmAction: Function,
    justificado: boolean = false
  ) {
    Swal.fire({
      title: title,
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: "Continuar",
      cancelButtonText: "Cancelar",
      customClass: {
        htmlContainer: justificado ? 'text-justificado' : '',
      }
    }).then((result) => {
      if (result.value) {
        confirmAction();
      }
    });
  }

  confirmCuston(
    title: string,
    message: string,
    confirmedTitle: string,
    confirmedMessage: string,
    confirmeButtonText: string,
    cancelButtonText: string,
    confirmIcon: SweetAlertIcon,
    reverseButtons: boolean,
    confirmAction: Function,
    justificado: boolean = false
  ) {
    Swal.fire({
      title: title,
      text: message,
      icon: confirmIcon,
      showCancelButton: true,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: confirmeButtonText,
      cancelButtonText: cancelButtonText,
      reverseButtons: reverseButtons,
      customClass: {
        htmlContainer: justificado ? 'text-justificado' : '',
      }
    }).then((result) => {
      if (result.value) {
        confirmAction();
        Swal.fire({
          title: confirmedTitle,
          text: confirmedMessage,
          confirmButtonColor: "rgb(3, 142, 220)",
          icon: "success",
        });
      }
    });
  }


  confirmCustonHtml(
    title: string,
    message: string,
    confirmedTitle: string,
    confirmedMessage: string,
    confirmeButtonText: string,
    cancelButtonText: string,
    confirmIcon: SweetAlertIcon,
    reverseButtons: boolean,
    confirmAction: Function,
    justificado: boolean = false
  ) {
    Swal.fire({
      title: title,
      html: message,
      icon: confirmIcon,
      showCancelButton: true,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: confirmeButtonText,
      cancelButtonText: cancelButtonText,
      reverseButtons: reverseButtons,
      customClass: {
        htmlContainer: justificado ? 'text-justificado' : '',
      }
    }).then((result) => {
      if (result.value) {
        confirmAction();
        Swal.fire({
          title: confirmedTitle,
          text: confirmedMessage,
          confirmButtonColor: "rgb(3, 142, 220)",
          icon: "success",
        });
      }
    });
  }

  cancel(
    title: string,
    message: string,
    confirmButtonText: string,
    cancelButtonText: string,
    confirmedTitle: string,
    confirmedMessage: string,
    cancelTitle: string,
    cancelMessage: string,
    confirmAction: Function,
    cancelAction?: Function,
    justificado: boolean = false
  ) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger ms-2",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: title,
        text: message,
        icon: "warning",
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        showCancelButton: true,
        customClass: {
          htmlContainer: justificado ? 'text-justificado' : '',
        }
      })
      .then((result) => {
        if (result.value) {
          confirmAction();
          Swal.fire({
            title: confirmedTitle,
            text: confirmedMessage,
            confirmButtonColor: "rgb(3, 142, 220)",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          if (cancelAction) {
            cancelAction();
          }
          Swal.fire({
            title: cancelTitle,
            text: cancelMessage,
            confirmButtonColor: "rgb(3, 142, 220)",
            icon: "error",
          });
        }
      });
  }

  confirmSimNao(
    title: string,
    message: string,
    confirmAction: Function,
    justificado: boolean = false
  ) {
    Swal.fire({
      title: title,
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(3, 142, 220)",
      cancelButtonColor: "rgb(243, 78, 78)",
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      customClass: {
        htmlContainer: justificado ? 'text-justificado' : '',
      }
    }).then((result) => {
      if (result.value) {
        confirmAction();
      }
    });
  }

  infoMsgRedirect(title: string, message: string, confirmAction: Function, justificado: boolean = false) {
    Swal.fire({
      title: title,
      text: message,
      icon: "info",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showCancelButton: false,
      confirmButtonColor: "rgb(3, 142, 220)",
      confirmButtonText: "OK",
      customClass: {
        htmlContainer: justificado ? 'text-justificado' : '',
      }
    }).then((result) => {
      if (result.value) {
        confirmAction();
      }
    });
  }

}
