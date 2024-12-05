# `dataOciDataSafeSecurityAssessmentSecurityFeatures` Submodule <a name="`dataOciDataSafeSecurityAssessmentSecurityFeatures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessmentSecurityFeatures <a name="DataOciDataSafeSecurityAssessmentSecurityFeatures" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features oci_data_safe_security_assessment_security_features}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_features

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  access_level: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter]] = None,
  id: str = None,
  target_id: str = None,
  targets_with_column_encryption: str = None,
  targets_with_database_vault: str = None,
  targets_with_external_authentication: str = None,
  targets_with_fine_grained_audit: str = None,
  targets_with_global_authentication: str = None,
  targets_with_network_encryption: str = None,
  targets_with_password_authentication: str = None,
  targets_with_privilege_analysis: str = None,
  targets_with_tablespace_encryption: str = None,
  targets_with_traditional_audit: str = None,
  targets_with_unified_audit: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#access_level DataOciDataSafeSecurityAssessmentSecurityFeatures#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#id DataOciDataSafeSecurityAssessmentSecurityFeatures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#target_id DataOciDataSafeSecurityAssessmentSecurityFeatures#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithColumnEncryption">targets_with_column_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_column_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_column_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithDatabaseVault">targets_with_database_vault</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_database_vault DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_database_vault}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithExternalAuthentication">targets_with_external_authentication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_external_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_external_authentication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithFineGrainedAudit">targets_with_fine_grained_audit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_fine_grained_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_fine_grained_audit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithGlobalAuthentication">targets_with_global_authentication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_global_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_global_authentication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithNetworkEncryption">targets_with_network_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_network_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_network_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithPasswordAuthentication">targets_with_password_authentication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_password_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_password_authentication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithPrivilegeAnalysis">targets_with_privilege_analysis</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_privilege_analysis DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_privilege_analysis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithTablespaceEncryption">targets_with_tablespace_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_tablespace_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_tablespace_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithTraditionalAudit">targets_with_traditional_audit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_traditional_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_traditional_audit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithUnifiedAudit">targets_with_unified_audit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_unified_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_unified_audit}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#access_level DataOciDataSafeSecurityAssessmentSecurityFeatures#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#filter DataOciDataSafeSecurityAssessmentSecurityFeatures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#id DataOciDataSafeSecurityAssessmentSecurityFeatures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#target_id DataOciDataSafeSecurityAssessmentSecurityFeatures#target_id}.

---

##### `targets_with_column_encryption`<sup>Optional</sup> <a name="targets_with_column_encryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithColumnEncryption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_column_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_column_encryption}.

---

##### `targets_with_database_vault`<sup>Optional</sup> <a name="targets_with_database_vault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithDatabaseVault"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_database_vault DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_database_vault}.

---

##### `targets_with_external_authentication`<sup>Optional</sup> <a name="targets_with_external_authentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithExternalAuthentication"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_external_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_external_authentication}.

---

##### `targets_with_fine_grained_audit`<sup>Optional</sup> <a name="targets_with_fine_grained_audit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithFineGrainedAudit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_fine_grained_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_fine_grained_audit}.

---

##### `targets_with_global_authentication`<sup>Optional</sup> <a name="targets_with_global_authentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithGlobalAuthentication"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_global_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_global_authentication}.

---

##### `targets_with_network_encryption`<sup>Optional</sup> <a name="targets_with_network_encryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithNetworkEncryption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_network_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_network_encryption}.

---

##### `targets_with_password_authentication`<sup>Optional</sup> <a name="targets_with_password_authentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithPasswordAuthentication"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_password_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_password_authentication}.

---

##### `targets_with_privilege_analysis`<sup>Optional</sup> <a name="targets_with_privilege_analysis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithPrivilegeAnalysis"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_privilege_analysis DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_privilege_analysis}.

---

##### `targets_with_tablespace_encryption`<sup>Optional</sup> <a name="targets_with_tablespace_encryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithTablespaceEncryption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_tablespace_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_tablespace_encryption}.

---

##### `targets_with_traditional_audit`<sup>Optional</sup> <a name="targets_with_traditional_audit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithTraditionalAudit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_traditional_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_traditional_audit}.

---

##### `targets_with_unified_audit`<sup>Optional</sup> <a name="targets_with_unified_audit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.Initializer.parameter.targetsWithUnifiedAudit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_unified_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_unified_audit}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetId">reset_target_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithColumnEncryption">reset_targets_with_column_encryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithDatabaseVault">reset_targets_with_database_vault</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithExternalAuthentication">reset_targets_with_external_authentication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithFineGrainedAudit">reset_targets_with_fine_grained_audit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithGlobalAuthentication">reset_targets_with_global_authentication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithNetworkEncryption">reset_targets_with_network_encryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithPasswordAuthentication">reset_targets_with_password_authentication</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithPrivilegeAnalysis">reset_targets_with_privilege_analysis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithTablespaceEncryption">reset_targets_with_tablespace_encryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithTraditionalAudit">reset_targets_with_traditional_audit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithUnifiedAudit">reset_targets_with_unified_audit</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetId"></a>

```python
def reset_target_id() -> None
```

##### `reset_targets_with_column_encryption` <a name="reset_targets_with_column_encryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithColumnEncryption"></a>

```python
def reset_targets_with_column_encryption() -> None
```

##### `reset_targets_with_database_vault` <a name="reset_targets_with_database_vault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithDatabaseVault"></a>

```python
def reset_targets_with_database_vault() -> None
```

##### `reset_targets_with_external_authentication` <a name="reset_targets_with_external_authentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithExternalAuthentication"></a>

```python
def reset_targets_with_external_authentication() -> None
```

##### `reset_targets_with_fine_grained_audit` <a name="reset_targets_with_fine_grained_audit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithFineGrainedAudit"></a>

```python
def reset_targets_with_fine_grained_audit() -> None
```

##### `reset_targets_with_global_authentication` <a name="reset_targets_with_global_authentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithGlobalAuthentication"></a>

```python
def reset_targets_with_global_authentication() -> None
```

##### `reset_targets_with_network_encryption` <a name="reset_targets_with_network_encryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithNetworkEncryption"></a>

```python
def reset_targets_with_network_encryption() -> None
```

##### `reset_targets_with_password_authentication` <a name="reset_targets_with_password_authentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithPasswordAuthentication"></a>

```python
def reset_targets_with_password_authentication() -> None
```

##### `reset_targets_with_privilege_analysis` <a name="reset_targets_with_privilege_analysis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithPrivilegeAnalysis"></a>

```python
def reset_targets_with_privilege_analysis() -> None
```

##### `reset_targets_with_tablespace_encryption` <a name="reset_targets_with_tablespace_encryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithTablespaceEncryption"></a>

```python
def reset_targets_with_tablespace_encryption() -> None
```

##### `reset_targets_with_traditional_audit` <a name="reset_targets_with_traditional_audit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithTraditionalAudit"></a>

```python
def reset_targets_with_traditional_audit() -> None
```

##### `reset_targets_with_unified_audit` <a name="reset_targets_with_unified_audit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.resetTargetsWithUnifiedAudit"></a>

```python
def reset_targets_with_unified_audit() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentSecurityFeatures resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_features

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_features

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_features

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_features

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentSecurityFeatures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentSecurityFeatures to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSecurityAssessmentSecurityFeatures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentSecurityFeatures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.securityFeatureCollection">security_feature_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithColumnEncryptionInput">targets_with_column_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithDatabaseVaultInput">targets_with_database_vault_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithExternalAuthenticationInput">targets_with_external_authentication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithFineGrainedAuditInput">targets_with_fine_grained_audit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithGlobalAuthenticationInput">targets_with_global_authentication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithNetworkEncryptionInput">targets_with_network_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPasswordAuthenticationInput">targets_with_password_authentication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPrivilegeAnalysisInput">targets_with_privilege_analysis_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTablespaceEncryptionInput">targets_with_tablespace_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTraditionalAuditInput">targets_with_traditional_audit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithUnifiedAuditInput">targets_with_unified_audit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithColumnEncryption">targets_with_column_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithDatabaseVault">targets_with_database_vault</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithExternalAuthentication">targets_with_external_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithFineGrainedAudit">targets_with_fine_grained_audit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithGlobalAuthentication">targets_with_global_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithNetworkEncryption">targets_with_network_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPasswordAuthentication">targets_with_password_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPrivilegeAnalysis">targets_with_privilege_analysis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTablespaceEncryption">targets_with_tablespace_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTraditionalAudit">targets_with_traditional_audit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithUnifiedAudit">targets_with_unified_audit</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.filter"></a>

```python
filter: DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList</a>

---

##### `security_feature_collection`<sup>Required</sup> <a name="security_feature_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.securityFeatureCollection"></a>

```python
security_feature_collection: DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `targets_with_column_encryption_input`<sup>Optional</sup> <a name="targets_with_column_encryption_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithColumnEncryptionInput"></a>

```python
targets_with_column_encryption_input: str
```

- *Type:* str

---

##### `targets_with_database_vault_input`<sup>Optional</sup> <a name="targets_with_database_vault_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithDatabaseVaultInput"></a>

```python
targets_with_database_vault_input: str
```

- *Type:* str

---

##### `targets_with_external_authentication_input`<sup>Optional</sup> <a name="targets_with_external_authentication_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithExternalAuthenticationInput"></a>

```python
targets_with_external_authentication_input: str
```

- *Type:* str

---

##### `targets_with_fine_grained_audit_input`<sup>Optional</sup> <a name="targets_with_fine_grained_audit_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithFineGrainedAuditInput"></a>

```python
targets_with_fine_grained_audit_input: str
```

- *Type:* str

---

##### `targets_with_global_authentication_input`<sup>Optional</sup> <a name="targets_with_global_authentication_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithGlobalAuthenticationInput"></a>

```python
targets_with_global_authentication_input: str
```

- *Type:* str

---

##### `targets_with_network_encryption_input`<sup>Optional</sup> <a name="targets_with_network_encryption_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithNetworkEncryptionInput"></a>

```python
targets_with_network_encryption_input: str
```

- *Type:* str

---

##### `targets_with_password_authentication_input`<sup>Optional</sup> <a name="targets_with_password_authentication_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPasswordAuthenticationInput"></a>

```python
targets_with_password_authentication_input: str
```

- *Type:* str

---

##### `targets_with_privilege_analysis_input`<sup>Optional</sup> <a name="targets_with_privilege_analysis_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPrivilegeAnalysisInput"></a>

```python
targets_with_privilege_analysis_input: str
```

- *Type:* str

---

##### `targets_with_tablespace_encryption_input`<sup>Optional</sup> <a name="targets_with_tablespace_encryption_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTablespaceEncryptionInput"></a>

```python
targets_with_tablespace_encryption_input: str
```

- *Type:* str

---

##### `targets_with_traditional_audit_input`<sup>Optional</sup> <a name="targets_with_traditional_audit_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTraditionalAuditInput"></a>

```python
targets_with_traditional_audit_input: str
```

- *Type:* str

---

##### `targets_with_unified_audit_input`<sup>Optional</sup> <a name="targets_with_unified_audit_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithUnifiedAuditInput"></a>

```python
targets_with_unified_audit_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `targets_with_column_encryption`<sup>Required</sup> <a name="targets_with_column_encryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithColumnEncryption"></a>

```python
targets_with_column_encryption: str
```

- *Type:* str

---

##### `targets_with_database_vault`<sup>Required</sup> <a name="targets_with_database_vault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithDatabaseVault"></a>

```python
targets_with_database_vault: str
```

- *Type:* str

---

##### `targets_with_external_authentication`<sup>Required</sup> <a name="targets_with_external_authentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithExternalAuthentication"></a>

```python
targets_with_external_authentication: str
```

- *Type:* str

---

##### `targets_with_fine_grained_audit`<sup>Required</sup> <a name="targets_with_fine_grained_audit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithFineGrainedAudit"></a>

```python
targets_with_fine_grained_audit: str
```

- *Type:* str

---

##### `targets_with_global_authentication`<sup>Required</sup> <a name="targets_with_global_authentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithGlobalAuthentication"></a>

```python
targets_with_global_authentication: str
```

- *Type:* str

---

##### `targets_with_network_encryption`<sup>Required</sup> <a name="targets_with_network_encryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithNetworkEncryption"></a>

```python
targets_with_network_encryption: str
```

- *Type:* str

---

##### `targets_with_password_authentication`<sup>Required</sup> <a name="targets_with_password_authentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPasswordAuthentication"></a>

```python
targets_with_password_authentication: str
```

- *Type:* str

---

##### `targets_with_privilege_analysis`<sup>Required</sup> <a name="targets_with_privilege_analysis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithPrivilegeAnalysis"></a>

```python
targets_with_privilege_analysis: str
```

- *Type:* str

---

##### `targets_with_tablespace_encryption`<sup>Required</sup> <a name="targets_with_tablespace_encryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTablespaceEncryption"></a>

```python
targets_with_tablespace_encryption: str
```

- *Type:* str

---

##### `targets_with_traditional_audit`<sup>Required</sup> <a name="targets_with_traditional_audit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithTraditionalAudit"></a>

```python
targets_with_traditional_audit: str
```

- *Type:* str

---

##### `targets_with_unified_audit`<sup>Required</sup> <a name="targets_with_unified_audit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.targetsWithUnifiedAudit"></a>

```python
targets_with_unified_audit: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeatures.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_features

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  access_level: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter]] = None,
  id: str = None,
  target_id: str = None,
  targets_with_column_encryption: str = None,
  targets_with_database_vault: str = None,
  targets_with_external_authentication: str = None,
  targets_with_fine_grained_audit: str = None,
  targets_with_global_authentication: str = None,
  targets_with_network_encryption: str = None,
  targets_with_password_authentication: str = None,
  targets_with_privilege_analysis: str = None,
  targets_with_tablespace_encryption: str = None,
  targets_with_traditional_audit: str = None,
  targets_with_unified_audit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#access_level DataOciDataSafeSecurityAssessmentSecurityFeatures#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#id DataOciDataSafeSecurityAssessmentSecurityFeatures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#target_id DataOciDataSafeSecurityAssessmentSecurityFeatures#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithColumnEncryption">targets_with_column_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_column_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_column_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithDatabaseVault">targets_with_database_vault</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_database_vault DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_database_vault}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithExternalAuthentication">targets_with_external_authentication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_external_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_external_authentication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithFineGrainedAudit">targets_with_fine_grained_audit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_fine_grained_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_fine_grained_audit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithGlobalAuthentication">targets_with_global_authentication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_global_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_global_authentication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithNetworkEncryption">targets_with_network_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_network_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_network_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithPasswordAuthentication">targets_with_password_authentication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_password_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_password_authentication}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithPrivilegeAnalysis">targets_with_privilege_analysis</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_privilege_analysis DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_privilege_analysis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithTablespaceEncryption">targets_with_tablespace_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_tablespace_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_tablespace_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithTraditionalAudit">targets_with_traditional_audit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_traditional_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_traditional_audit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithUnifiedAudit">targets_with_unified_audit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_unified_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_unified_audit}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#access_level DataOciDataSafeSecurityAssessmentSecurityFeatures#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentSecurityFeatures#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#filter DataOciDataSafeSecurityAssessmentSecurityFeatures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#id DataOciDataSafeSecurityAssessmentSecurityFeatures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#target_id DataOciDataSafeSecurityAssessmentSecurityFeatures#target_id}.

---

##### `targets_with_column_encryption`<sup>Optional</sup> <a name="targets_with_column_encryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithColumnEncryption"></a>

```python
targets_with_column_encryption: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_column_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_column_encryption}.

---

##### `targets_with_database_vault`<sup>Optional</sup> <a name="targets_with_database_vault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithDatabaseVault"></a>

```python
targets_with_database_vault: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_database_vault DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_database_vault}.

---

##### `targets_with_external_authentication`<sup>Optional</sup> <a name="targets_with_external_authentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithExternalAuthentication"></a>

```python
targets_with_external_authentication: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_external_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_external_authentication}.

---

##### `targets_with_fine_grained_audit`<sup>Optional</sup> <a name="targets_with_fine_grained_audit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithFineGrainedAudit"></a>

```python
targets_with_fine_grained_audit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_fine_grained_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_fine_grained_audit}.

---

##### `targets_with_global_authentication`<sup>Optional</sup> <a name="targets_with_global_authentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithGlobalAuthentication"></a>

```python
targets_with_global_authentication: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_global_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_global_authentication}.

---

##### `targets_with_network_encryption`<sup>Optional</sup> <a name="targets_with_network_encryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithNetworkEncryption"></a>

```python
targets_with_network_encryption: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_network_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_network_encryption}.

---

##### `targets_with_password_authentication`<sup>Optional</sup> <a name="targets_with_password_authentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithPasswordAuthentication"></a>

```python
targets_with_password_authentication: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_password_authentication DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_password_authentication}.

---

##### `targets_with_privilege_analysis`<sup>Optional</sup> <a name="targets_with_privilege_analysis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithPrivilegeAnalysis"></a>

```python
targets_with_privilege_analysis: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_privilege_analysis DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_privilege_analysis}.

---

##### `targets_with_tablespace_encryption`<sup>Optional</sup> <a name="targets_with_tablespace_encryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithTablespaceEncryption"></a>

```python
targets_with_tablespace_encryption: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_tablespace_encryption DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_tablespace_encryption}.

---

##### `targets_with_traditional_audit`<sup>Optional</sup> <a name="targets_with_traditional_audit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithTraditionalAudit"></a>

```python
targets_with_traditional_audit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_traditional_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_traditional_audit}.

---

##### `targets_with_unified_audit`<sup>Optional</sup> <a name="targets_with_unified_audit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesConfig.property.targetsWithUnifiedAudit"></a>

```python
targets_with_unified_audit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#targets_with_unified_audit DataOciDataSafeSecurityAssessmentSecurityFeatures#targets_with_unified_audit}.

---

### DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_features

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#name DataOciDataSafeSecurityAssessmentSecurityFeatures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#values DataOciDataSafeSecurityAssessmentSecurityFeatures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#regex DataOciDataSafeSecurityAssessmentSecurityFeatures#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#name DataOciDataSafeSecurityAssessmentSecurityFeatures#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#values DataOciDataSafeSecurityAssessmentSecurityFeatures#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_security_features#regex DataOciDataSafeSecurityAssessmentSecurityFeatures#regex}.

---

### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_features

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection()
```


### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_features

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_features

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>]]

---


### DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_features

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter">DataOciDataSafeSecurityAssessmentSecurityFeaturesFilter</a>]

---


### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_features

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_features

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.assessmentId">assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.columnEncryption">column_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.databaseVault">database_vault</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.externalAuthentication">external_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.fineGrainedAudit">fine_grained_audit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.globalAuthentication">global_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.networkEncryption">network_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.passwordAuthentication">password_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.privilegeAnalysis">privilege_analysis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.tablespaceEncryption">tablespace_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.traditionalAudit">traditional_audit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.unifiedAudit">unified_audit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assessment_id`<sup>Required</sup> <a name="assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.assessmentId"></a>

```python
assessment_id: str
```

- *Type:* str

---

##### `column_encryption`<sup>Required</sup> <a name="column_encryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.columnEncryption"></a>

```python
column_encryption: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `database_vault`<sup>Required</sup> <a name="database_vault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.databaseVault"></a>

```python
database_vault: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `external_authentication`<sup>Required</sup> <a name="external_authentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.externalAuthentication"></a>

```python
external_authentication: str
```

- *Type:* str

---

##### `fine_grained_audit`<sup>Required</sup> <a name="fine_grained_audit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.fineGrainedAudit"></a>

```python
fine_grained_audit: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `global_authentication`<sup>Required</sup> <a name="global_authentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.globalAuthentication"></a>

```python
global_authentication: str
```

- *Type:* str

---

##### `network_encryption`<sup>Required</sup> <a name="network_encryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.networkEncryption"></a>

```python
network_encryption: str
```

- *Type:* str

---

##### `password_authentication`<sup>Required</sup> <a name="password_authentication" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.passwordAuthentication"></a>

```python
password_authentication: str
```

- *Type:* str

---

##### `privilege_analysis`<sup>Required</sup> <a name="privilege_analysis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.privilegeAnalysis"></a>

```python
privilege_analysis: str
```

- *Type:* str

---

##### `tablespace_encryption`<sup>Required</sup> <a name="tablespace_encryption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.tablespaceEncryption"></a>

```python
tablespace_encryption: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `traditional_audit`<sup>Required</sup> <a name="traditional_audit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.traditionalAudit"></a>

```python
traditional_audit: str
```

- *Type:* str

---

##### `unified_audit`<sup>Required</sup> <a name="unified_audit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.unifiedAudit"></a>

```python
unified_audit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItems</a>

---


### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_features

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference <a name="DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_security_features

dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentSecurityFeatures.DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection">DataOciDataSafeSecurityAssessmentSecurityFeaturesSecurityFeatureCollection</a>

---



