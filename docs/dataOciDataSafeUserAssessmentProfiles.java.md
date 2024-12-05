# `dataOciDataSafeUserAssessmentProfiles` Submodule <a name="`dataOciDataSafeUserAssessmentProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeUserAssessmentProfiles <a name="DataOciDataSafeUserAssessmentProfiles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles oci_data_safe_user_assessment_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_user_assessment_profiles.DataOciDataSafeUserAssessmentProfiles;

DataOciDataSafeUserAssessmentProfiles.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .userAssessmentId(java.lang.String)
//  .accessLevel(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .failedLoginAttemptsGreaterThanOrEqual(java.lang.String)
//  .failedLoginAttemptsLessThan(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeUserAssessmentProfilesFilter>)
//  .id(java.lang.String)
//  .inactiveAccountTimeGreaterThanOrEqual(java.lang.String)
//  .inactiveAccountTimeLessThan(java.lang.String)
//  .isUserCreated(java.lang.Boolean)
//  .isUserCreated(IResolvable)
//  .passwordLockTimeGreaterThanOrEqual(java.lang.String)
//  .passwordLockTimeLessThan(java.lang.String)
//  .passwordVerificationFunction(java.lang.String)
//  .profileName(java.lang.String)
//  .sessionsPerUserGreaterThanOrEqual(java.lang.String)
//  .sessionsPerUserLessThan(java.lang.String)
//  .targetId(java.lang.String)
//  .userCountGreaterThanOrEqual(java.lang.String)
//  .userCountLessThan(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id DataOciDataSafeUserAssessmentProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.userAssessmentId">userAssessmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_assessment_id DataOciDataSafeUserAssessmentProfiles#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#access_level DataOciDataSafeUserAssessmentProfiles#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id_in_subtree DataOciDataSafeUserAssessmentProfiles#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.failedLoginAttemptsGreaterThanOrEqual">failedLoginAttemptsGreaterThanOrEqual</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.failedLoginAttemptsLessThan">failedLoginAttemptsLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_less_than DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#id DataOciDataSafeUserAssessmentProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.inactiveAccountTimeGreaterThanOrEqual">inactiveAccountTimeGreaterThanOrEqual</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#inactive_account_time_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.inactiveAccountTimeLessThan">inactiveAccountTimeLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_less_than DataOciDataSafeUserAssessmentProfiles#inactive_account_time_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.isUserCreated">isUserCreated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#is_user_created DataOciDataSafeUserAssessmentProfiles#is_user_created}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.passwordLockTimeGreaterThanOrEqual">passwordLockTimeGreaterThanOrEqual</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#password_lock_time_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.passwordLockTimeLessThan">passwordLockTimeLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_less_than DataOciDataSafeUserAssessmentProfiles#password_lock_time_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.passwordVerificationFunction">passwordVerificationFunction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_verification_function DataOciDataSafeUserAssessmentProfiles#password_verification_function}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.profileName">profileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#profile_name DataOciDataSafeUserAssessmentProfiles#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.sessionsPerUserGreaterThanOrEqual">sessionsPerUserGreaterThanOrEqual</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#sessions_per_user_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.sessionsPerUserLessThan">sessionsPerUserLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_less_than DataOciDataSafeUserAssessmentProfiles#sessions_per_user_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#target_id DataOciDataSafeUserAssessmentProfiles#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.userCountGreaterThanOrEqual">userCountGreaterThanOrEqual</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#user_count_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.userCountLessThan">userCountLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_less_than DataOciDataSafeUserAssessmentProfiles#user_count_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id DataOciDataSafeUserAssessmentProfiles#compartment_id}.

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.userAssessmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_assessment_id DataOciDataSafeUserAssessmentProfiles#user_assessment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.accessLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#access_level DataOciDataSafeUserAssessmentProfiles#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id_in_subtree DataOciDataSafeUserAssessmentProfiles#compartment_id_in_subtree}.

---

##### `failedLoginAttemptsGreaterThanOrEqual`<sup>Optional</sup> <a name="failedLoginAttemptsGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.failedLoginAttemptsGreaterThanOrEqual"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_greater_than_or_equal}.

---

##### `failedLoginAttemptsLessThan`<sup>Optional</sup> <a name="failedLoginAttemptsLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.failedLoginAttemptsLessThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_less_than DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_less_than}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#filter DataOciDataSafeUserAssessmentProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#id DataOciDataSafeUserAssessmentProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inactiveAccountTimeGreaterThanOrEqual`<sup>Optional</sup> <a name="inactiveAccountTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.inactiveAccountTimeGreaterThanOrEqual"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#inactive_account_time_greater_than_or_equal}.

---

##### `inactiveAccountTimeLessThan`<sup>Optional</sup> <a name="inactiveAccountTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.inactiveAccountTimeLessThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_less_than DataOciDataSafeUserAssessmentProfiles#inactive_account_time_less_than}.

---

##### `isUserCreated`<sup>Optional</sup> <a name="isUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.isUserCreated"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#is_user_created DataOciDataSafeUserAssessmentProfiles#is_user_created}.

---

##### `passwordLockTimeGreaterThanOrEqual`<sup>Optional</sup> <a name="passwordLockTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.passwordLockTimeGreaterThanOrEqual"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#password_lock_time_greater_than_or_equal}.

---

##### `passwordLockTimeLessThan`<sup>Optional</sup> <a name="passwordLockTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.passwordLockTimeLessThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_less_than DataOciDataSafeUserAssessmentProfiles#password_lock_time_less_than}.

---

##### `passwordVerificationFunction`<sup>Optional</sup> <a name="passwordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.passwordVerificationFunction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_verification_function DataOciDataSafeUserAssessmentProfiles#password_verification_function}.

---

##### `profileName`<sup>Optional</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.profileName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#profile_name DataOciDataSafeUserAssessmentProfiles#profile_name}.

---

##### `sessionsPerUserGreaterThanOrEqual`<sup>Optional</sup> <a name="sessionsPerUserGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.sessionsPerUserGreaterThanOrEqual"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#sessions_per_user_greater_than_or_equal}.

---

##### `sessionsPerUserLessThan`<sup>Optional</sup> <a name="sessionsPerUserLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.sessionsPerUserLessThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_less_than DataOciDataSafeUserAssessmentProfiles#sessions_per_user_less_than}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.targetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#target_id DataOciDataSafeUserAssessmentProfiles#target_id}.

---

##### `userCountGreaterThanOrEqual`<sup>Optional</sup> <a name="userCountGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.userCountGreaterThanOrEqual"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#user_count_greater_than_or_equal}.

---

##### `userCountLessThan`<sup>Optional</sup> <a name="userCountLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.Initializer.parameter.userCountLessThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_less_than DataOciDataSafeUserAssessmentProfiles#user_count_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFailedLoginAttemptsGreaterThanOrEqual">resetFailedLoginAttemptsGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFailedLoginAttemptsLessThan">resetFailedLoginAttemptsLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetInactiveAccountTimeGreaterThanOrEqual">resetInactiveAccountTimeGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetInactiveAccountTimeLessThan">resetInactiveAccountTimeLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetIsUserCreated">resetIsUserCreated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordLockTimeGreaterThanOrEqual">resetPasswordLockTimeGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordLockTimeLessThan">resetPasswordLockTimeLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordVerificationFunction">resetPasswordVerificationFunction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetProfileName">resetProfileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetSessionsPerUserGreaterThanOrEqual">resetSessionsPerUserGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetSessionsPerUserLessThan">resetSessionsPerUserLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetUserCountGreaterThanOrEqual">resetUserCountGreaterThanOrEqual</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetUserCountLessThan">resetUserCountLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataSafeUserAssessmentProfilesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>>

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetCompartmentIdInSubtree"></a>

```java
public void resetCompartmentIdInSubtree()
```

##### `resetFailedLoginAttemptsGreaterThanOrEqual` <a name="resetFailedLoginAttemptsGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFailedLoginAttemptsGreaterThanOrEqual"></a>

```java
public void resetFailedLoginAttemptsGreaterThanOrEqual()
```

##### `resetFailedLoginAttemptsLessThan` <a name="resetFailedLoginAttemptsLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFailedLoginAttemptsLessThan"></a>

```java
public void resetFailedLoginAttemptsLessThan()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetId"></a>

```java
public void resetId()
```

##### `resetInactiveAccountTimeGreaterThanOrEqual` <a name="resetInactiveAccountTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetInactiveAccountTimeGreaterThanOrEqual"></a>

```java
public void resetInactiveAccountTimeGreaterThanOrEqual()
```

##### `resetInactiveAccountTimeLessThan` <a name="resetInactiveAccountTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetInactiveAccountTimeLessThan"></a>

```java
public void resetInactiveAccountTimeLessThan()
```

##### `resetIsUserCreated` <a name="resetIsUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetIsUserCreated"></a>

```java
public void resetIsUserCreated()
```

##### `resetPasswordLockTimeGreaterThanOrEqual` <a name="resetPasswordLockTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordLockTimeGreaterThanOrEqual"></a>

```java
public void resetPasswordLockTimeGreaterThanOrEqual()
```

##### `resetPasswordLockTimeLessThan` <a name="resetPasswordLockTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordLockTimeLessThan"></a>

```java
public void resetPasswordLockTimeLessThan()
```

##### `resetPasswordVerificationFunction` <a name="resetPasswordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetPasswordVerificationFunction"></a>

```java
public void resetPasswordVerificationFunction()
```

##### `resetProfileName` <a name="resetProfileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetProfileName"></a>

```java
public void resetProfileName()
```

##### `resetSessionsPerUserGreaterThanOrEqual` <a name="resetSessionsPerUserGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetSessionsPerUserGreaterThanOrEqual"></a>

```java
public void resetSessionsPerUserGreaterThanOrEqual()
```

##### `resetSessionsPerUserLessThan` <a name="resetSessionsPerUserLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetSessionsPerUserLessThan"></a>

```java
public void resetSessionsPerUserLessThan()
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetTargetId"></a>

```java
public void resetTargetId()
```

##### `resetUserCountGreaterThanOrEqual` <a name="resetUserCountGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetUserCountGreaterThanOrEqual"></a>

```java
public void resetUserCountGreaterThanOrEqual()
```

##### `resetUserCountLessThan` <a name="resetUserCountLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.resetUserCountLessThan"></a>

```java
public void resetUserCountLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeUserAssessmentProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_user_assessment_profiles.DataOciDataSafeUserAssessmentProfiles;

DataOciDataSafeUserAssessmentProfiles.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_user_assessment_profiles.DataOciDataSafeUserAssessmentProfiles;

DataOciDataSafeUserAssessmentProfiles.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_user_assessment_profiles.DataOciDataSafeUserAssessmentProfiles;

DataOciDataSafeUserAssessmentProfiles.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_user_assessment_profiles.DataOciDataSafeUserAssessmentProfiles;

DataOciDataSafeUserAssessmentProfiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataSafeUserAssessmentProfiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataSafeUserAssessmentProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataSafeUserAssessmentProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataSafeUserAssessmentProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeUserAssessmentProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList">DataOciDataSafeUserAssessmentProfilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profiles">profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList">DataOciDataSafeUserAssessmentProfilesProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsGreaterThanOrEqualInput">failedLoginAttemptsGreaterThanOrEqualInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsLessThanInput">failedLoginAttemptsLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeGreaterThanOrEqualInput">inactiveAccountTimeGreaterThanOrEqualInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeLessThanInput">inactiveAccountTimeLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.isUserCreatedInput">isUserCreatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeGreaterThanOrEqualInput">passwordLockTimeGreaterThanOrEqualInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeLessThanInput">passwordLockTimeLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordVerificationFunctionInput">passwordVerificationFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profileNameInput">profileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserGreaterThanOrEqualInput">sessionsPerUserGreaterThanOrEqualInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserLessThanInput">sessionsPerUserLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.targetIdInput">targetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userAssessmentIdInput">userAssessmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountGreaterThanOrEqualInput">userCountGreaterThanOrEqualInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountLessThanInput">userCountLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsGreaterThanOrEqual">failedLoginAttemptsGreaterThanOrEqual</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsLessThan">failedLoginAttemptsLessThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeGreaterThanOrEqual">inactiveAccountTimeGreaterThanOrEqual</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeLessThan">inactiveAccountTimeLessThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.isUserCreated">isUserCreated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeGreaterThanOrEqual">passwordLockTimeGreaterThanOrEqual</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeLessThan">passwordLockTimeLessThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordVerificationFunction">passwordVerificationFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profileName">profileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserGreaterThanOrEqual">sessionsPerUserGreaterThanOrEqual</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserLessThan">sessionsPerUserLessThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userAssessmentId">userAssessmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountGreaterThanOrEqual">userCountGreaterThanOrEqual</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountLessThan">userCountLessThan</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.filter"></a>

```java
public DataOciDataSafeUserAssessmentProfilesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList">DataOciDataSafeUserAssessmentProfilesFilterList</a>

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profiles"></a>

```java
public DataOciDataSafeUserAssessmentProfilesProfilesList getProfiles();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList">DataOciDataSafeUserAssessmentProfilesProfilesList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInSubtreeInput"></a>

```java
public java.lang.Object getCompartmentIdInSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failedLoginAttemptsGreaterThanOrEqualInput`<sup>Optional</sup> <a name="failedLoginAttemptsGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsGreaterThanOrEqualInput"></a>

```java
public java.lang.String getFailedLoginAttemptsGreaterThanOrEqualInput();
```

- *Type:* java.lang.String

---

##### `failedLoginAttemptsLessThanInput`<sup>Optional</sup> <a name="failedLoginAttemptsLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsLessThanInput"></a>

```java
public java.lang.String getFailedLoginAttemptsLessThanInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inactiveAccountTimeGreaterThanOrEqualInput`<sup>Optional</sup> <a name="inactiveAccountTimeGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeGreaterThanOrEqualInput"></a>

```java
public java.lang.String getInactiveAccountTimeGreaterThanOrEqualInput();
```

- *Type:* java.lang.String

---

##### `inactiveAccountTimeLessThanInput`<sup>Optional</sup> <a name="inactiveAccountTimeLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeLessThanInput"></a>

```java
public java.lang.String getInactiveAccountTimeLessThanInput();
```

- *Type:* java.lang.String

---

##### `isUserCreatedInput`<sup>Optional</sup> <a name="isUserCreatedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.isUserCreatedInput"></a>

```java
public java.lang.Object getIsUserCreatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordLockTimeGreaterThanOrEqualInput`<sup>Optional</sup> <a name="passwordLockTimeGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeGreaterThanOrEqualInput"></a>

```java
public java.lang.String getPasswordLockTimeGreaterThanOrEqualInput();
```

- *Type:* java.lang.String

---

##### `passwordLockTimeLessThanInput`<sup>Optional</sup> <a name="passwordLockTimeLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeLessThanInput"></a>

```java
public java.lang.String getPasswordLockTimeLessThanInput();
```

- *Type:* java.lang.String

---

##### `passwordVerificationFunctionInput`<sup>Optional</sup> <a name="passwordVerificationFunctionInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordVerificationFunctionInput"></a>

```java
public java.lang.String getPasswordVerificationFunctionInput();
```

- *Type:* java.lang.String

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profileNameInput"></a>

```java
public java.lang.String getProfileNameInput();
```

- *Type:* java.lang.String

---

##### `sessionsPerUserGreaterThanOrEqualInput`<sup>Optional</sup> <a name="sessionsPerUserGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserGreaterThanOrEqualInput"></a>

```java
public java.lang.String getSessionsPerUserGreaterThanOrEqualInput();
```

- *Type:* java.lang.String

---

##### `sessionsPerUserLessThanInput`<sup>Optional</sup> <a name="sessionsPerUserLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserLessThanInput"></a>

```java
public java.lang.String getSessionsPerUserLessThanInput();
```

- *Type:* java.lang.String

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.targetIdInput"></a>

```java
public java.lang.String getTargetIdInput();
```

- *Type:* java.lang.String

---

##### `userAssessmentIdInput`<sup>Optional</sup> <a name="userAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userAssessmentIdInput"></a>

```java
public java.lang.String getUserAssessmentIdInput();
```

- *Type:* java.lang.String

---

##### `userCountGreaterThanOrEqualInput`<sup>Optional</sup> <a name="userCountGreaterThanOrEqualInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountGreaterThanOrEqualInput"></a>

```java
public java.lang.String getUserCountGreaterThanOrEqualInput();
```

- *Type:* java.lang.String

---

##### `userCountLessThanInput`<sup>Optional</sup> <a name="userCountLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountLessThanInput"></a>

```java
public java.lang.String getUserCountLessThanInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failedLoginAttemptsGreaterThanOrEqual`<sup>Required</sup> <a name="failedLoginAttemptsGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsGreaterThanOrEqual"></a>

```java
public java.lang.String getFailedLoginAttemptsGreaterThanOrEqual();
```

- *Type:* java.lang.String

---

##### `failedLoginAttemptsLessThan`<sup>Required</sup> <a name="failedLoginAttemptsLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.failedLoginAttemptsLessThan"></a>

```java
public java.lang.String getFailedLoginAttemptsLessThan();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inactiveAccountTimeGreaterThanOrEqual`<sup>Required</sup> <a name="inactiveAccountTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeGreaterThanOrEqual"></a>

```java
public java.lang.String getInactiveAccountTimeGreaterThanOrEqual();
```

- *Type:* java.lang.String

---

##### `inactiveAccountTimeLessThan`<sup>Required</sup> <a name="inactiveAccountTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.inactiveAccountTimeLessThan"></a>

```java
public java.lang.String getInactiveAccountTimeLessThan();
```

- *Type:* java.lang.String

---

##### `isUserCreated`<sup>Required</sup> <a name="isUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.isUserCreated"></a>

```java
public java.lang.Object getIsUserCreated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordLockTimeGreaterThanOrEqual`<sup>Required</sup> <a name="passwordLockTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeGreaterThanOrEqual"></a>

```java
public java.lang.String getPasswordLockTimeGreaterThanOrEqual();
```

- *Type:* java.lang.String

---

##### `passwordLockTimeLessThan`<sup>Required</sup> <a name="passwordLockTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordLockTimeLessThan"></a>

```java
public java.lang.String getPasswordLockTimeLessThan();
```

- *Type:* java.lang.String

---

##### `passwordVerificationFunction`<sup>Required</sup> <a name="passwordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.passwordVerificationFunction"></a>

```java
public java.lang.String getPasswordVerificationFunction();
```

- *Type:* java.lang.String

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

---

##### `sessionsPerUserGreaterThanOrEqual`<sup>Required</sup> <a name="sessionsPerUserGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserGreaterThanOrEqual"></a>

```java
public java.lang.String getSessionsPerUserGreaterThanOrEqual();
```

- *Type:* java.lang.String

---

##### `sessionsPerUserLessThan`<sup>Required</sup> <a name="sessionsPerUserLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.sessionsPerUserLessThan"></a>

```java
public java.lang.String getSessionsPerUserLessThan();
```

- *Type:* java.lang.String

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userAssessmentId"></a>

```java
public java.lang.String getUserAssessmentId();
```

- *Type:* java.lang.String

---

##### `userCountGreaterThanOrEqual`<sup>Required</sup> <a name="userCountGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountGreaterThanOrEqual"></a>

```java
public java.lang.String getUserCountGreaterThanOrEqual();
```

- *Type:* java.lang.String

---

##### `userCountLessThan`<sup>Required</sup> <a name="userCountLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.userCountLessThan"></a>

```java
public java.lang.String getUserCountLessThan();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfiles.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeUserAssessmentProfilesConfig <a name="DataOciDataSafeUserAssessmentProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_user_assessment_profiles.DataOciDataSafeUserAssessmentProfilesConfig;

DataOciDataSafeUserAssessmentProfilesConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .userAssessmentId(java.lang.String)
//  .accessLevel(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .failedLoginAttemptsGreaterThanOrEqual(java.lang.String)
//  .failedLoginAttemptsLessThan(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeUserAssessmentProfilesFilter>)
//  .id(java.lang.String)
//  .inactiveAccountTimeGreaterThanOrEqual(java.lang.String)
//  .inactiveAccountTimeLessThan(java.lang.String)
//  .isUserCreated(java.lang.Boolean)
//  .isUserCreated(IResolvable)
//  .passwordLockTimeGreaterThanOrEqual(java.lang.String)
//  .passwordLockTimeLessThan(java.lang.String)
//  .passwordVerificationFunction(java.lang.String)
//  .profileName(java.lang.String)
//  .sessionsPerUserGreaterThanOrEqual(java.lang.String)
//  .sessionsPerUserLessThan(java.lang.String)
//  .targetId(java.lang.String)
//  .userCountGreaterThanOrEqual(java.lang.String)
//  .userCountLessThan(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id DataOciDataSafeUserAssessmentProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userAssessmentId">userAssessmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_assessment_id DataOciDataSafeUserAssessmentProfiles#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#access_level DataOciDataSafeUserAssessmentProfiles#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id_in_subtree DataOciDataSafeUserAssessmentProfiles#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.failedLoginAttemptsGreaterThanOrEqual">failedLoginAttemptsGreaterThanOrEqual</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.failedLoginAttemptsLessThan">failedLoginAttemptsLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_less_than DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#id DataOciDataSafeUserAssessmentProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.inactiveAccountTimeGreaterThanOrEqual">inactiveAccountTimeGreaterThanOrEqual</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#inactive_account_time_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.inactiveAccountTimeLessThan">inactiveAccountTimeLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_less_than DataOciDataSafeUserAssessmentProfiles#inactive_account_time_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.isUserCreated">isUserCreated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#is_user_created DataOciDataSafeUserAssessmentProfiles#is_user_created}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordLockTimeGreaterThanOrEqual">passwordLockTimeGreaterThanOrEqual</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#password_lock_time_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordLockTimeLessThan">passwordLockTimeLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_less_than DataOciDataSafeUserAssessmentProfiles#password_lock_time_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordVerificationFunction">passwordVerificationFunction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_verification_function DataOciDataSafeUserAssessmentProfiles#password_verification_function}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.profileName">profileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#profile_name DataOciDataSafeUserAssessmentProfiles#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.sessionsPerUserGreaterThanOrEqual">sessionsPerUserGreaterThanOrEqual</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#sessions_per_user_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.sessionsPerUserLessThan">sessionsPerUserLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_less_than DataOciDataSafeUserAssessmentProfiles#sessions_per_user_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#target_id DataOciDataSafeUserAssessmentProfiles#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userCountGreaterThanOrEqual">userCountGreaterThanOrEqual</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#user_count_greater_than_or_equal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userCountLessThan">userCountLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_less_than DataOciDataSafeUserAssessmentProfiles#user_count_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id DataOciDataSafeUserAssessmentProfiles#compartment_id}.

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userAssessmentId"></a>

```java
public java.lang.String getUserAssessmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_assessment_id DataOciDataSafeUserAssessmentProfiles#user_assessment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#access_level DataOciDataSafeUserAssessmentProfiles#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#compartment_id_in_subtree DataOciDataSafeUserAssessmentProfiles#compartment_id_in_subtree}.

---

##### `failedLoginAttemptsGreaterThanOrEqual`<sup>Optional</sup> <a name="failedLoginAttemptsGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.failedLoginAttemptsGreaterThanOrEqual"></a>

```java
public java.lang.String getFailedLoginAttemptsGreaterThanOrEqual();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_greater_than_or_equal}.

---

##### `failedLoginAttemptsLessThan`<sup>Optional</sup> <a name="failedLoginAttemptsLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.failedLoginAttemptsLessThan"></a>

```java
public java.lang.String getFailedLoginAttemptsLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#failed_login_attempts_less_than DataOciDataSafeUserAssessmentProfiles#failed_login_attempts_less_than}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#filter DataOciDataSafeUserAssessmentProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#id DataOciDataSafeUserAssessmentProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inactiveAccountTimeGreaterThanOrEqual`<sup>Optional</sup> <a name="inactiveAccountTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.inactiveAccountTimeGreaterThanOrEqual"></a>

```java
public java.lang.String getInactiveAccountTimeGreaterThanOrEqual();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#inactive_account_time_greater_than_or_equal}.

---

##### `inactiveAccountTimeLessThan`<sup>Optional</sup> <a name="inactiveAccountTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.inactiveAccountTimeLessThan"></a>

```java
public java.lang.String getInactiveAccountTimeLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#inactive_account_time_less_than DataOciDataSafeUserAssessmentProfiles#inactive_account_time_less_than}.

---

##### `isUserCreated`<sup>Optional</sup> <a name="isUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.isUserCreated"></a>

```java
public java.lang.Object getIsUserCreated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#is_user_created DataOciDataSafeUserAssessmentProfiles#is_user_created}.

---

##### `passwordLockTimeGreaterThanOrEqual`<sup>Optional</sup> <a name="passwordLockTimeGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordLockTimeGreaterThanOrEqual"></a>

```java
public java.lang.String getPasswordLockTimeGreaterThanOrEqual();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#password_lock_time_greater_than_or_equal}.

---

##### `passwordLockTimeLessThan`<sup>Optional</sup> <a name="passwordLockTimeLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordLockTimeLessThan"></a>

```java
public java.lang.String getPasswordLockTimeLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_lock_time_less_than DataOciDataSafeUserAssessmentProfiles#password_lock_time_less_than}.

---

##### `passwordVerificationFunction`<sup>Optional</sup> <a name="passwordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.passwordVerificationFunction"></a>

```java
public java.lang.String getPasswordVerificationFunction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#password_verification_function DataOciDataSafeUserAssessmentProfiles#password_verification_function}.

---

##### `profileName`<sup>Optional</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#profile_name DataOciDataSafeUserAssessmentProfiles#profile_name}.

---

##### `sessionsPerUserGreaterThanOrEqual`<sup>Optional</sup> <a name="sessionsPerUserGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.sessionsPerUserGreaterThanOrEqual"></a>

```java
public java.lang.String getSessionsPerUserGreaterThanOrEqual();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#sessions_per_user_greater_than_or_equal}.

---

##### `sessionsPerUserLessThan`<sup>Optional</sup> <a name="sessionsPerUserLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.sessionsPerUserLessThan"></a>

```java
public java.lang.String getSessionsPerUserLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#sessions_per_user_less_than DataOciDataSafeUserAssessmentProfiles#sessions_per_user_less_than}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#target_id DataOciDataSafeUserAssessmentProfiles#target_id}.

---

##### `userCountGreaterThanOrEqual`<sup>Optional</sup> <a name="userCountGreaterThanOrEqual" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userCountGreaterThanOrEqual"></a>

```java
public java.lang.String getUserCountGreaterThanOrEqual();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_greater_than_or_equal DataOciDataSafeUserAssessmentProfiles#user_count_greater_than_or_equal}.

---

##### `userCountLessThan`<sup>Optional</sup> <a name="userCountLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesConfig.property.userCountLessThan"></a>

```java
public java.lang.String getUserCountLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#user_count_less_than DataOciDataSafeUserAssessmentProfiles#user_count_less_than}.

---

### DataOciDataSafeUserAssessmentProfilesFilter <a name="DataOciDataSafeUserAssessmentProfilesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_user_assessment_profiles.DataOciDataSafeUserAssessmentProfilesFilter;

DataOciDataSafeUserAssessmentProfilesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#name DataOciDataSafeUserAssessmentProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#values DataOciDataSafeUserAssessmentProfiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#regex DataOciDataSafeUserAssessmentProfiles#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#name DataOciDataSafeUserAssessmentProfiles#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#values DataOciDataSafeUserAssessmentProfiles#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_user_assessment_profiles#regex DataOciDataSafeUserAssessmentProfiles#regex}.

---

### DataOciDataSafeUserAssessmentProfilesProfiles <a name="DataOciDataSafeUserAssessmentProfilesProfiles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_user_assessment_profiles.DataOciDataSafeUserAssessmentProfilesProfiles;

DataOciDataSafeUserAssessmentProfilesProfiles.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeUserAssessmentProfilesFilterList <a name="DataOciDataSafeUserAssessmentProfilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_user_assessment_profiles.DataOciDataSafeUserAssessmentProfilesFilterList;

new DataOciDataSafeUserAssessmentProfilesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.get"></a>

```java
public DataOciDataSafeUserAssessmentProfilesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>>

---


### DataOciDataSafeUserAssessmentProfilesFilterOutputReference <a name="DataOciDataSafeUserAssessmentProfilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_user_assessment_profiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference;

new DataOciDataSafeUserAssessmentProfilesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesFilter">DataOciDataSafeUserAssessmentProfilesFilter</a>

---


### DataOciDataSafeUserAssessmentProfilesProfilesList <a name="DataOciDataSafeUserAssessmentProfilesProfilesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_user_assessment_profiles.DataOciDataSafeUserAssessmentProfilesProfilesList;

new DataOciDataSafeUserAssessmentProfilesProfilesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.get"></a>

```java
public DataOciDataSafeUserAssessmentProfilesProfilesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeUserAssessmentProfilesProfilesOutputReference <a name="DataOciDataSafeUserAssessmentProfilesProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_user_assessment_profiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference;

new DataOciDataSafeUserAssessmentProfilesProfilesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.compositeLimit">compositeLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.connectTime">connectTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.cpuPerCall">cpuPerCall</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.cpuPerSession">cpuPerSession</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.failedLoginAttempts">failedLoginAttempts</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.idleTime">idleTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.inactiveAccountTime">inactiveAccountTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.isUserCreated">isUserCreated</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.logicalReadsPerCall">logicalReadsPerCall</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.logicalReadsPerSession">logicalReadsPerSession</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordGraceTime">passwordGraceTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordLifeTime">passwordLifeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordLockTime">passwordLockTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordReuseMax">passwordReuseMax</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordReuseTime">passwordReuseTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordRolloverTime">passwordRolloverTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordVerificationFunction">passwordVerificationFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordVerificationFunctionDetails">passwordVerificationFunctionDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.privateSga">privateSga</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.profileName">profileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.sessionsPerUser">sessionsPerUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.userAssessmentId">userAssessmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.userCount">userCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles">DataOciDataSafeUserAssessmentProfilesProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compositeLimit`<sup>Required</sup> <a name="compositeLimit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.compositeLimit"></a>

```java
public java.lang.String getCompositeLimit();
```

- *Type:* java.lang.String

---

##### `connectTime`<sup>Required</sup> <a name="connectTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.connectTime"></a>

```java
public java.lang.String getConnectTime();
```

- *Type:* java.lang.String

---

##### `cpuPerCall`<sup>Required</sup> <a name="cpuPerCall" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.cpuPerCall"></a>

```java
public java.lang.String getCpuPerCall();
```

- *Type:* java.lang.String

---

##### `cpuPerSession`<sup>Required</sup> <a name="cpuPerSession" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.cpuPerSession"></a>

```java
public java.lang.String getCpuPerSession();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `failedLoginAttempts`<sup>Required</sup> <a name="failedLoginAttempts" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.failedLoginAttempts"></a>

```java
public java.lang.String getFailedLoginAttempts();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `idleTime`<sup>Required</sup> <a name="idleTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.idleTime"></a>

```java
public java.lang.String getIdleTime();
```

- *Type:* java.lang.String

---

##### `inactiveAccountTime`<sup>Required</sup> <a name="inactiveAccountTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.inactiveAccountTime"></a>

```java
public java.lang.String getInactiveAccountTime();
```

- *Type:* java.lang.String

---

##### `isUserCreated`<sup>Required</sup> <a name="isUserCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.isUserCreated"></a>

```java
public IResolvable getIsUserCreated();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `logicalReadsPerCall`<sup>Required</sup> <a name="logicalReadsPerCall" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.logicalReadsPerCall"></a>

```java
public java.lang.String getLogicalReadsPerCall();
```

- *Type:* java.lang.String

---

##### `logicalReadsPerSession`<sup>Required</sup> <a name="logicalReadsPerSession" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.logicalReadsPerSession"></a>

```java
public java.lang.String getLogicalReadsPerSession();
```

- *Type:* java.lang.String

---

##### `passwordGraceTime`<sup>Required</sup> <a name="passwordGraceTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordGraceTime"></a>

```java
public java.lang.String getPasswordGraceTime();
```

- *Type:* java.lang.String

---

##### `passwordLifeTime`<sup>Required</sup> <a name="passwordLifeTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordLifeTime"></a>

```java
public java.lang.String getPasswordLifeTime();
```

- *Type:* java.lang.String

---

##### `passwordLockTime`<sup>Required</sup> <a name="passwordLockTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordLockTime"></a>

```java
public java.lang.String getPasswordLockTime();
```

- *Type:* java.lang.String

---

##### `passwordReuseMax`<sup>Required</sup> <a name="passwordReuseMax" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordReuseMax"></a>

```java
public java.lang.String getPasswordReuseMax();
```

- *Type:* java.lang.String

---

##### `passwordReuseTime`<sup>Required</sup> <a name="passwordReuseTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordReuseTime"></a>

```java
public java.lang.String getPasswordReuseTime();
```

- *Type:* java.lang.String

---

##### `passwordRolloverTime`<sup>Required</sup> <a name="passwordRolloverTime" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordRolloverTime"></a>

```java
public java.lang.String getPasswordRolloverTime();
```

- *Type:* java.lang.String

---

##### `passwordVerificationFunction`<sup>Required</sup> <a name="passwordVerificationFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordVerificationFunction"></a>

```java
public java.lang.String getPasswordVerificationFunction();
```

- *Type:* java.lang.String

---

##### `passwordVerificationFunctionDetails`<sup>Required</sup> <a name="passwordVerificationFunctionDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.passwordVerificationFunctionDetails"></a>

```java
public java.lang.String getPasswordVerificationFunctionDetails();
```

- *Type:* java.lang.String

---

##### `privateSga`<sup>Required</sup> <a name="privateSga" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.privateSga"></a>

```java
public java.lang.String getPrivateSga();
```

- *Type:* java.lang.String

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

---

##### `sessionsPerUser`<sup>Required</sup> <a name="sessionsPerUser" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.sessionsPerUser"></a>

```java
public java.lang.String getSessionsPerUser();
```

- *Type:* java.lang.String

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.userAssessmentId"></a>

```java
public java.lang.String getUserAssessmentId();
```

- *Type:* java.lang.String

---

##### `userCount`<sup>Required</sup> <a name="userCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.userCount"></a>

```java
public java.lang.Number getUserCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfilesOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeUserAssessmentProfilesProfiles getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeUserAssessmentProfiles.DataOciDataSafeUserAssessmentProfilesProfiles">DataOciDataSafeUserAssessmentProfilesProfiles</a>

---



