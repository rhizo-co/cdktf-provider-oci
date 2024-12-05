# `dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs` Submodule <a name="`dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs oci_data_safe_security_assessment_findings_change_audit_logs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_findings_change_audit_logs

dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_assessment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter]] = None,
  finding_key: str = None,
  finding_title: str = None,
  id: str = None,
  is_risk_deferred: typing.Union[bool, IResolvable] = None,
  modified_by: str = None,
  severity: str = None,
  time_updated_greater_than_or_equal_to: str = None,
  time_updated_less_than: str = None,
  time_valid_until_greater_than_or_equal_to: str = None,
  time_valid_until_less_than: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.securityAssessmentId">security_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#security_assessment_id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.findingKey">finding_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_key DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.findingTitle">finding_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_title DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.isRiskDeferred">is_risk_deferred</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#is_risk_deferred DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#is_risk_deferred}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.modifiedBy">modified_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#modified_by DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#modified_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.severity">severity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#severity DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.timeUpdatedGreaterThanOrEqualTo">time_updated_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.timeUpdatedLessThan">time_updated_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.timeValidUntilGreaterThanOrEqualTo">time_valid_until_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.timeValidUntilLessThan">time_valid_until_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_assessment_id`<sup>Required</sup> <a name="security_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.securityAssessmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#security_assessment_id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#security_assessment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#filter DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#filter}

---

##### `finding_key`<sup>Optional</sup> <a name="finding_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.findingKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_key DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_key}.

---

##### `finding_title`<sup>Optional</sup> <a name="finding_title" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.findingTitle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_title DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_title}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_risk_deferred`<sup>Optional</sup> <a name="is_risk_deferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.isRiskDeferred"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#is_risk_deferred DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#is_risk_deferred}.

---

##### `modified_by`<sup>Optional</sup> <a name="modified_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.modifiedBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#modified_by DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#modified_by}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.severity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#severity DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#severity}.

---

##### `time_updated_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_updated_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.timeUpdatedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_greater_than_or_equal_to}.

---

##### `time_updated_less_than`<sup>Optional</sup> <a name="time_updated_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.timeUpdatedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_less_than}.

---

##### `time_valid_until_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_valid_until_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.timeValidUntilGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_greater_than_or_equal_to}.

---

##### `time_valid_until_less_than`<sup>Optional</sup> <a name="time_valid_until_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.Initializer.parameter.timeValidUntilLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetFindingKey">reset_finding_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetFindingTitle">reset_finding_title</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetIsRiskDeferred">reset_is_risk_deferred</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetModifiedBy">reset_modified_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetSeverity">reset_severity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetTimeUpdatedGreaterThanOrEqualTo">reset_time_updated_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetTimeUpdatedLessThan">reset_time_updated_less_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetTimeValidUntilGreaterThanOrEqualTo">reset_time_valid_until_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetTimeValidUntilLessThan">reset_time_valid_until_less_than</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_finding_key` <a name="reset_finding_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetFindingKey"></a>

```python
def reset_finding_key() -> None
```

##### `reset_finding_title` <a name="reset_finding_title" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetFindingTitle"></a>

```python
def reset_finding_title() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_risk_deferred` <a name="reset_is_risk_deferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetIsRiskDeferred"></a>

```python
def reset_is_risk_deferred() -> None
```

##### `reset_modified_by` <a name="reset_modified_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetModifiedBy"></a>

```python
def reset_modified_by() -> None
```

##### `reset_severity` <a name="reset_severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetSeverity"></a>

```python
def reset_severity() -> None
```

##### `reset_time_updated_greater_than_or_equal_to` <a name="reset_time_updated_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetTimeUpdatedGreaterThanOrEqualTo"></a>

```python
def reset_time_updated_greater_than_or_equal_to() -> None
```

##### `reset_time_updated_less_than` <a name="reset_time_updated_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetTimeUpdatedLessThan"></a>

```python
def reset_time_updated_less_than() -> None
```

##### `reset_time_valid_until_greater_than_or_equal_to` <a name="reset_time_valid_until_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetTimeValidUntilGreaterThanOrEqualTo"></a>

```python
def reset_time_valid_until_greater_than_or_equal_to() -> None
```

##### `reset_time_valid_until_less_than` <a name="reset_time_valid_until_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.resetTimeValidUntilLessThan"></a>

```python
def reset_time_valid_until_less_than() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_findings_change_audit_logs

dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_findings_change_audit_logs

dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_findings_change_audit_logs

dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_findings_change_audit_logs

dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingsChangeAuditLogCollection">findings_change_audit_log_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingKeyInput">finding_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingTitleInput">finding_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.isRiskDeferredInput">is_risk_deferred_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.modifiedByInput">modified_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.securityAssessmentIdInput">security_assessment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeUpdatedGreaterThanOrEqualToInput">time_updated_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeUpdatedLessThanInput">time_updated_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeValidUntilGreaterThanOrEqualToInput">time_valid_until_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeValidUntilLessThanInput">time_valid_until_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingKey">finding_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingTitle">finding_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.isRiskDeferred">is_risk_deferred</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.securityAssessmentId">security_assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeUpdatedGreaterThanOrEqualTo">time_updated_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeUpdatedLessThan">time_updated_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeValidUntilGreaterThanOrEqualTo">time_valid_until_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeValidUntilLessThan">time_valid_until_less_than</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.filter"></a>

```python
filter: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList</a>

---

##### `findings_change_audit_log_collection`<sup>Required</sup> <a name="findings_change_audit_log_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingsChangeAuditLogCollection"></a>

```python
findings_change_audit_log_collection: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>]]

---

##### `finding_key_input`<sup>Optional</sup> <a name="finding_key_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingKeyInput"></a>

```python
finding_key_input: str
```

- *Type:* str

---

##### `finding_title_input`<sup>Optional</sup> <a name="finding_title_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingTitleInput"></a>

```python
finding_title_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_risk_deferred_input`<sup>Optional</sup> <a name="is_risk_deferred_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.isRiskDeferredInput"></a>

```python
is_risk_deferred_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `modified_by_input`<sup>Optional</sup> <a name="modified_by_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.modifiedByInput"></a>

```python
modified_by_input: str
```

- *Type:* str

---

##### `security_assessment_id_input`<sup>Optional</sup> <a name="security_assessment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.securityAssessmentIdInput"></a>

```python
security_assessment_id_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `time_updated_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_updated_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeUpdatedGreaterThanOrEqualToInput"></a>

```python
time_updated_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_updated_less_than_input`<sup>Optional</sup> <a name="time_updated_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeUpdatedLessThanInput"></a>

```python
time_updated_less_than_input: str
```

- *Type:* str

---

##### `time_valid_until_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_valid_until_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeValidUntilGreaterThanOrEqualToInput"></a>

```python
time_valid_until_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_valid_until_less_than_input`<sup>Optional</sup> <a name="time_valid_until_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeValidUntilLessThanInput"></a>

```python
time_valid_until_less_than_input: str
```

- *Type:* str

---

##### `finding_key`<sup>Required</sup> <a name="finding_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingKey"></a>

```python
finding_key: str
```

- *Type:* str

---

##### `finding_title`<sup>Required</sup> <a name="finding_title" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.findingTitle"></a>

```python
finding_title: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_risk_deferred`<sup>Required</sup> <a name="is_risk_deferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.isRiskDeferred"></a>

```python
is_risk_deferred: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `security_assessment_id`<sup>Required</sup> <a name="security_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.securityAssessmentId"></a>

```python
security_assessment_id: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `time_updated_greater_than_or_equal_to`<sup>Required</sup> <a name="time_updated_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeUpdatedGreaterThanOrEqualTo"></a>

```python
time_updated_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_updated_less_than`<sup>Required</sup> <a name="time_updated_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeUpdatedLessThan"></a>

```python
time_updated_less_than: str
```

- *Type:* str

---

##### `time_valid_until_greater_than_or_equal_to`<sup>Required</sup> <a name="time_valid_until_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeValidUntilGreaterThanOrEqualTo"></a>

```python
time_valid_until_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_valid_until_less_than`<sup>Required</sup> <a name="time_valid_until_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.timeValidUntilLessThan"></a>

```python
time_valid_until_less_than: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_findings_change_audit_logs

dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_assessment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter]] = None,
  finding_key: str = None,
  finding_title: str = None,
  id: str = None,
  is_risk_deferred: typing.Union[bool, IResolvable] = None,
  modified_by: str = None,
  severity: str = None,
  time_updated_greater_than_or_equal_to: str = None,
  time_updated_less_than: str = None,
  time_valid_until_greater_than_or_equal_to: str = None,
  time_valid_until_less_than: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.securityAssessmentId">security_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#security_assessment_id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.findingKey">finding_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_key DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.findingTitle">finding_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_title DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.isRiskDeferred">is_risk_deferred</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#is_risk_deferred DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#is_risk_deferred}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.modifiedBy">modified_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#modified_by DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#modified_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.severity">severity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#severity DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.timeUpdatedGreaterThanOrEqualTo">time_updated_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.timeUpdatedLessThan">time_updated_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.timeValidUntilGreaterThanOrEqualTo">time_valid_until_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.timeValidUntilLessThan">time_valid_until_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_assessment_id`<sup>Required</sup> <a name="security_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.securityAssessmentId"></a>

```python
security_assessment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#security_assessment_id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#security_assessment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#filter DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#filter}

---

##### `finding_key`<sup>Optional</sup> <a name="finding_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.findingKey"></a>

```python
finding_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_key DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_key}.

---

##### `finding_title`<sup>Optional</sup> <a name="finding_title" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.findingTitle"></a>

```python
finding_title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#finding_title DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#finding_title}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#id DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_risk_deferred`<sup>Optional</sup> <a name="is_risk_deferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.isRiskDeferred"></a>

```python
is_risk_deferred: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#is_risk_deferred DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#is_risk_deferred}.

---

##### `modified_by`<sup>Optional</sup> <a name="modified_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#modified_by DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#modified_by}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#severity DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#severity}.

---

##### `time_updated_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_updated_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.timeUpdatedGreaterThanOrEqualTo"></a>

```python
time_updated_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_greater_than_or_equal_to}.

---

##### `time_updated_less_than`<sup>Optional</sup> <a name="time_updated_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.timeUpdatedLessThan"></a>

```python
time_updated_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_updated_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_updated_less_than}.

---

##### `time_valid_until_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_valid_until_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.timeValidUntilGreaterThanOrEqualTo"></a>

```python
time_valid_until_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_greater_than_or_equal_to DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_greater_than_or_equal_to}.

---

##### `time_valid_until_less_than`<sup>Optional</sup> <a name="time_valid_until_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsConfig.property.timeValidUntilLessThan"></a>

```python
time_valid_until_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#time_valid_until_less_than DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#time_valid_until_less_than}.

---

### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_findings_change_audit_logs

dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#name DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#values DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#regex DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#name DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#values DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_findings_change_audit_logs#regex DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs#regex}.

---

### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_findings_change_audit_logs

dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection()
```


### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_findings_change_audit_logs

dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_findings_change_audit_logs

dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>]]

---


### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_findings_change_audit_logs

dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter</a>]

---


### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_findings_change_audit_logs

dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_findings_change_audit_logs

dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.assessmentId">assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.findingKey">finding_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.findingTitle">finding_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.isRiskDeferred">is_risk_deferred</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.justification">justification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.oracleDefinedSeverity">oracle_defined_severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.previousSeverity">previous_severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.timeValidUntil">time_valid_until</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assessment_id`<sup>Required</sup> <a name="assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.assessmentId"></a>

```python
assessment_id: str
```

- *Type:* str

---

##### `finding_key`<sup>Required</sup> <a name="finding_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.findingKey"></a>

```python
finding_key: str
```

- *Type:* str

---

##### `finding_title`<sup>Required</sup> <a name="finding_title" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.findingTitle"></a>

```python
finding_title: str
```

- *Type:* str

---

##### `is_risk_deferred`<sup>Required</sup> <a name="is_risk_deferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.isRiskDeferred"></a>

```python
is_risk_deferred: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `justification`<sup>Required</sup> <a name="justification" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.justification"></a>

```python
justification: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `oracle_defined_severity`<sup>Required</sup> <a name="oracle_defined_severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.oracleDefinedSeverity"></a>

```python
oracle_defined_severity: str
```

- *Type:* str

---

##### `previous_severity`<sup>Required</sup> <a name="previous_severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.previousSeverity"></a>

```python
previous_severity: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `time_valid_until`<sup>Required</sup> <a name="time_valid_until" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.timeValidUntil"></a>

```python
time_valid_until: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItems</a>

---


### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_findings_change_audit_logs

dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_findings_change_audit_logs

dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingsChangeAuditLogs.DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection">DataOciDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection</a>

---



