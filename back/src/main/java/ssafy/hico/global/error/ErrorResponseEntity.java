package ssafy.hico.global.error;

import lombok.Builder;
import lombok.Data;
import org.springframework.http.ResponseEntity;
@Data
@Builder
public class ErrorResponseEntity {
    private int statusCode; //HttpStatusCode
    private String statusName; //HttpStatus Name
    private String message; //Custom message

    public static ResponseEntity<ErrorResponseEntity> toResponseEntity(ErrorCode ec) {
        return ResponseEntity
                .status(ec.getHttpStatus())
                .body(ErrorResponseEntity.builder()
                        .statusCode(ec.getHttpStatus().value())
                        .statusName(ec.name())
                        .message(ec.getMessage())
                        .build());
    }
}
