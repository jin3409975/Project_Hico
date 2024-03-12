package ssafy.hico.domain.member.dto.request;

import lombok.Data;
import lombok.NoArgsConstructor;
import ssafy.hico.domain.member.entity.Gender;
import ssafy.hico.domain.member.entity.Role;
import java.time.LocalDate;

@Data
@NoArgsConstructor
public class MemberSignUpRequest {
    private String email;
    private String password;
    private String name;
    private LocalDate birthDate;
    private Gender gender;
    private Role role;
    private String code;
}
