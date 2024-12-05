# `dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs` Submodule <a name="`dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs oci_data_safe_security_assessment_findings_change_audit_logs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_findings_change_audit_logs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs;

DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Builder.create(Construct scope, java.lang.String id)
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
    .securityAssessmentId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter>)
//  .findingKey(java.lang.String)
//  .findingTitle(java.lang.String)
//  .id(java.lang.String)
//  .isRiskDeferred(java.lang.Boolean)
//  .isRiskDeferred(IResolvable)
//  .modifiedBy(java.lang.String)
//  .severity(java.lang.String)
//  .timeUpdatedGreaterThanOrEqualTo(java.lang.String)
//  .timeUpdatedLessThan(java.lang.String)
//  .timeValidUntilGreaterThanOrEqualTo(java.lang.String)
//  .timeValidUntilLessThan(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.securityAssessmentId">securityAssessmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#security_assessment_id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.findingKey">findingKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_key DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.findingTitle">findingTitle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_title DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.isRiskDeferred">isRiskDeferred</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#is_risk_deferred DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#is_risk_deferred}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.modifiedBy">modifiedBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#modified_by DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#modified_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#severity DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.timeUpdatedGreaterThanOrEqualTo">timeUpdatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.timeUpdatedLessThan">timeUpdatedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.timeValidUntilGreaterThanOrEqualTo">timeValidUntilGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.timeValidUntilLessThan">timeValidUntilLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `securityAssessmentId`<sup>Required</sup> <a name="securityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.securityAssessmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#security_assessment_id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#security_assessment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#filter DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#filter}

---

##### `findingKey`<sup>Optional</sup> <a name="findingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.findingKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_key DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_key}.

---

##### `findingTitle`<sup>Optional</sup> <a name="findingTitle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.findingTitle"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_title DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_title}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isRiskDeferred`<sup>Optional</sup> <a name="isRiskDeferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.isRiskDeferred"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#is_risk_deferred DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#is_risk_deferred}.

---

##### `modifiedBy`<sup>Optional</sup> <a name="modifiedBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.modifiedBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#modified_by DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#modified_by}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.severity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#severity DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#severity}.

---

##### `timeUpdatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.timeUpdatedGreaterThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_greater_than_or_equal_to}.

---

##### `timeUpdatedLessThan`<sup>Optional</sup> <a name="timeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.timeUpdatedLessThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_less_than}.

---

##### `timeValidUntilGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeValidUntilGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.timeValidUntilGreaterThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_greater_than_or_equal_to}.

---

##### `timeValidUntilLessThan`<sup>Optional</sup> <a name="timeValidUntilLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.timeValidUntilLessThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetFindingKey">resetFindingKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetFindingTitle">resetFindingTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetIsRiskDeferred">resetIsRiskDeferred</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetModifiedBy">resetModifiedBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetTimeUpdatedGreaterThanOrEqualTo">resetTimeUpdatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetTimeUpdatedLessThan">resetTimeUpdatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetTimeValidUntilGreaterThanOrEqualTo">resetTimeValidUntilGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetTimeValidUntilLessThan">resetTimeValidUntilLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetFindingKey` <a name="resetFindingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetFindingKey"></a>

```java
public void resetFindingKey()
```

##### `resetFindingTitle` <a name="resetFindingTitle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetFindingTitle"></a>

```java
public void resetFindingTitle()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetId"></a>

```java
public void resetId()
```

##### `resetIsRiskDeferred` <a name="resetIsRiskDeferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetIsRiskDeferred"></a>

```java
public void resetIsRiskDeferred()
```

##### `resetModifiedBy` <a name="resetModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetModifiedBy"></a>

```java
public void resetModifiedBy()
```

##### `resetSeverity` <a name="resetSeverity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetSeverity"></a>

```java
public void resetSeverity()
```

##### `resetTimeUpdatedGreaterThanOrEqualTo` <a name="resetTimeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetTimeUpdatedGreaterThanOrEqualTo"></a>

```java
public void resetTimeUpdatedGreaterThanOrEqualTo()
```

##### `resetTimeUpdatedLessThan` <a name="resetTimeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetTimeUpdatedLessThan"></a>

```java
public void resetTimeUpdatedLessThan()
```

##### `resetTimeValidUntilGreaterThanOrEqualTo` <a name="resetTimeValidUntilGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetTimeValidUntilGreaterThanOrEqualTo"></a>

```java
public void resetTimeValidUntilGreaterThanOrEqualTo()
```

##### `resetTimeValidUntilLessThan` <a name="resetTimeValidUntilLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetTimeValidUntilLessThan"></a>

```java
public void resetTimeValidUntilLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_findings_change_audit_logs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs;

DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_findings_change_audit_logs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs;

DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_findings_change_audit_logs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs;

DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_findings_change_audit_logs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs;

DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingsChangeAuditLogCollection">findingsChangeAuditLogCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingKeyInput">findingKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingTitleInput">findingTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.isRiskDeferredInput">isRiskDeferredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.modifiedByInput">modifiedByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.securityAssessmentIdInput">securityAssessmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeUpdatedGreaterThanOrEqualToInput">timeUpdatedGreaterThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeUpdatedLessThanInput">timeUpdatedLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeValidUntilGreaterThanOrEqualToInput">timeValidUntilGreaterThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeValidUntilLessThanInput">timeValidUntilLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingKey">findingKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingTitle">findingTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.isRiskDeferred">isRiskDeferred</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.modifiedBy">modifiedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.securityAssessmentId">securityAssessmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeUpdatedGreaterThanOrEqualTo">timeUpdatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeUpdatedLessThan">timeUpdatedLessThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeValidUntilGreaterThanOrEqualTo">timeValidUntilGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeValidUntilLessThan">timeValidUntilLessThan</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.filter"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList</a>

---

##### `findingsChangeAuditLogCollection`<sup>Required</sup> <a name="findingsChangeAuditLogCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingsChangeAuditLogCollection"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList getFindingsChangeAuditLogCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>>

---

##### `findingKeyInput`<sup>Optional</sup> <a name="findingKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingKeyInput"></a>

```java
public java.lang.String getFindingKeyInput();
```

- *Type:* java.lang.String

---

##### `findingTitleInput`<sup>Optional</sup> <a name="findingTitleInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingTitleInput"></a>

```java
public java.lang.String getFindingTitleInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isRiskDeferredInput`<sup>Optional</sup> <a name="isRiskDeferredInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.isRiskDeferredInput"></a>

```java
public java.lang.Object getIsRiskDeferredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `modifiedByInput`<sup>Optional</sup> <a name="modifiedByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.modifiedByInput"></a>

```java
public java.lang.String getModifiedByInput();
```

- *Type:* java.lang.String

---

##### `securityAssessmentIdInput`<sup>Optional</sup> <a name="securityAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.securityAssessmentIdInput"></a>

```java
public java.lang.String getSecurityAssessmentIdInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `timeUpdatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeUpdatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeUpdatedGreaterThanOrEqualToInput"></a>

```java
public java.lang.String getTimeUpdatedGreaterThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `timeUpdatedLessThanInput`<sup>Optional</sup> <a name="timeUpdatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeUpdatedLessThanInput"></a>

```java
public java.lang.String getTimeUpdatedLessThanInput();
```

- *Type:* java.lang.String

---

##### `timeValidUntilGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeValidUntilGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeValidUntilGreaterThanOrEqualToInput"></a>

```java
public java.lang.String getTimeValidUntilGreaterThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `timeValidUntilLessThanInput`<sup>Optional</sup> <a name="timeValidUntilLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeValidUntilLessThanInput"></a>

```java
public java.lang.String getTimeValidUntilLessThanInput();
```

- *Type:* java.lang.String

---

##### `findingKey`<sup>Required</sup> <a name="findingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingKey"></a>

```java
public java.lang.String getFindingKey();
```

- *Type:* java.lang.String

---

##### `findingTitle`<sup>Required</sup> <a name="findingTitle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingTitle"></a>

```java
public java.lang.String getFindingTitle();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isRiskDeferred`<sup>Required</sup> <a name="isRiskDeferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.isRiskDeferred"></a>

```java
public java.lang.Object getIsRiskDeferred();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `modifiedBy`<sup>Required</sup> <a name="modifiedBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.modifiedBy"></a>

```java
public java.lang.String getModifiedBy();
```

- *Type:* java.lang.String

---

##### `securityAssessmentId`<sup>Required</sup> <a name="securityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.securityAssessmentId"></a>

```java
public java.lang.String getSecurityAssessmentId();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `timeUpdatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeUpdatedGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeUpdatedGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

---

##### `timeUpdatedLessThan`<sup>Required</sup> <a name="timeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeUpdatedLessThan"></a>

```java
public java.lang.String getTimeUpdatedLessThan();
```

- *Type:* java.lang.String

---

##### `timeValidUntilGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeValidUntilGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeValidUntilGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeValidUntilGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

---

##### `timeValidUntilLessThan`<sup>Required</sup> <a name="timeValidUntilLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeValidUntilLessThan"></a>

```java
public java.lang.String getTimeValidUntilLessThan();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_findings_change_audit_logs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig;

DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.builder()
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
    .securityAssessmentId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter>)
//  .findingKey(java.lang.String)
//  .findingTitle(java.lang.String)
//  .id(java.lang.String)
//  .isRiskDeferred(java.lang.Boolean)
//  .isRiskDeferred(IResolvable)
//  .modifiedBy(java.lang.String)
//  .severity(java.lang.String)
//  .timeUpdatedGreaterThanOrEqualTo(java.lang.String)
//  .timeUpdatedLessThan(java.lang.String)
//  .timeValidUntilGreaterThanOrEqualTo(java.lang.String)
//  .timeValidUntilLessThan(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.securityAssessmentId">securityAssessmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#security_assessment_id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.findingKey">findingKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_key DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.findingTitle">findingTitle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_title DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.isRiskDeferred">isRiskDeferred</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#is_risk_deferred DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#is_risk_deferred}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.modifiedBy">modifiedBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#modified_by DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#modified_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#severity DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.timeUpdatedGreaterThanOrEqualTo">timeUpdatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.timeUpdatedLessThan">timeUpdatedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.timeValidUntilGreaterThanOrEqualTo">timeValidUntilGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.timeValidUntilLessThan">timeValidUntilLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `securityAssessmentId`<sup>Required</sup> <a name="securityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.securityAssessmentId"></a>

```java
public java.lang.String getSecurityAssessmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#security_assessment_id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#security_assessment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#filter DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#filter}

---

##### `findingKey`<sup>Optional</sup> <a name="findingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.findingKey"></a>

```java
public java.lang.String getFindingKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_key DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_key}.

---

##### `findingTitle`<sup>Optional</sup> <a name="findingTitle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.findingTitle"></a>

```java
public java.lang.String getFindingTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_title DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_title}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isRiskDeferred`<sup>Optional</sup> <a name="isRiskDeferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.isRiskDeferred"></a>

```java
public java.lang.Object getIsRiskDeferred();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#is_risk_deferred DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#is_risk_deferred}.

---

##### `modifiedBy`<sup>Optional</sup> <a name="modifiedBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.modifiedBy"></a>

```java
public java.lang.String getModifiedBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#modified_by DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#modified_by}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#severity DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#severity}.

---

##### `timeUpdatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.timeUpdatedGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeUpdatedGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_greater_than_or_equal_to}.

---

##### `timeUpdatedLessThan`<sup>Optional</sup> <a name="timeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.timeUpdatedLessThan"></a>

```java
public java.lang.String getTimeUpdatedLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_less_than}.

---

##### `timeValidUntilGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeValidUntilGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.timeValidUntilGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeValidUntilGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_greater_than_or_equal_to}.

---

##### `timeValidUntilLessThan`<sup>Optional</sup> <a name="timeValidUntilLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.timeValidUntilLessThan"></a>

```java
public java.lang.String getTimeValidUntilLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_less_than}.

---

### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_findings_change_audit_logs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter;

DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#name DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#values DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#regex DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#name DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#values DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#regex DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#regex}.

---

### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_findings_change_audit_logs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection;

DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection.builder()
    .build();
```


### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_findings_change_audit_logs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems;

DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_findings_change_audit_logs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList;

new DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.get"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>>

---


### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_findings_change_audit_logs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference;

new DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>

---


### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_findings_change_audit_logs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList;

new DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.get"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_findings_change_audit_logs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference;

new DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.assessmentId">assessmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.findingKey">findingKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.findingTitle">findingTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.isRiskDeferred">isRiskDeferred</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.justification">justification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.modifiedBy">modifiedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.oracleDefinedSeverity">oracleDefinedSeverity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.previousSeverity">previousSeverity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.timeValidUntil">timeValidUntil</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.assessmentId"></a>

```java
public java.lang.String getAssessmentId();
```

- *Type:* java.lang.String

---

##### `findingKey`<sup>Required</sup> <a name="findingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.findingKey"></a>

```java
public java.lang.String getFindingKey();
```

- *Type:* java.lang.String

---

##### `findingTitle`<sup>Required</sup> <a name="findingTitle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.findingTitle"></a>

```java
public java.lang.String getFindingTitle();
```

- *Type:* java.lang.String

---

##### `isRiskDeferred`<sup>Required</sup> <a name="isRiskDeferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.isRiskDeferred"></a>

```java
public IResolvable getIsRiskDeferred();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `justification`<sup>Required</sup> <a name="justification" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.justification"></a>

```java
public java.lang.String getJustification();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `modifiedBy`<sup>Required</sup> <a name="modifiedBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.modifiedBy"></a>

```java
public java.lang.String getModifiedBy();
```

- *Type:* java.lang.String

---

##### `oracleDefinedSeverity`<sup>Required</sup> <a name="oracleDefinedSeverity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.oracleDefinedSeverity"></a>

```java
public java.lang.String getOracleDefinedSeverity();
```

- *Type:* java.lang.String

---

##### `previousSeverity`<sup>Required</sup> <a name="previousSeverity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.previousSeverity"></a>

```java
public java.lang.String getPreviousSeverity();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `timeValidUntil`<sup>Required</sup> <a name="timeValidUntil" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.timeValidUntil"></a>

```java
public java.lang.String getTimeValidUntil();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems</a>

---


### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_findings_change_audit_logs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList;

new DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.get"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_findings_change_audit_logs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference;

new DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.property.items"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection</a>

---



