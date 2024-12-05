# `dataOciDataSafeSecurityAssessmentFinding` Submodule <a name="`dataOciDataSafeSecurityAssessmentFinding` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessmentFinding <a name="DataOciDataSafeSecurityAssessmentFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding oci_data_safe_security_assessment_finding}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_finding

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding(
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
  access_level: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentFindingFilter]] = None,
  finding_key: str = None,
  id: str = None,
  is_top_finding: typing.Union[bool, IResolvable] = None,
  references: str = None,
  severity: str = None,
  state: str = None,
  target_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.securityAssessmentId">security_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#security_assessment_id DataOciDataSafeSecurityAssessmentFinding#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#access_level DataOciDataSafeSecurityAssessmentFinding#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFinding#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.findingKey">finding_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#finding_key DataOciDataSafeSecurityAssessmentFinding#finding_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#id DataOciDataSafeSecurityAssessmentFinding#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.isTopFinding">is_top_finding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#is_top_finding DataOciDataSafeSecurityAssessmentFinding#is_top_finding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.references">references</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#references DataOciDataSafeSecurityAssessmentFinding#references}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.severity">severity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#severity DataOciDataSafeSecurityAssessmentFinding#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#state DataOciDataSafeSecurityAssessmentFinding#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#target_id DataOciDataSafeSecurityAssessmentFinding#target_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_assessment_id`<sup>Required</sup> <a name="security_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.securityAssessmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#security_assessment_id DataOciDataSafeSecurityAssessmentFinding#security_assessment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#access_level DataOciDataSafeSecurityAssessmentFinding#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFinding#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#filter DataOciDataSafeSecurityAssessmentFinding#filter}

---

##### `finding_key`<sup>Optional</sup> <a name="finding_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.findingKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#finding_key DataOciDataSafeSecurityAssessmentFinding#finding_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#id DataOciDataSafeSecurityAssessmentFinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_top_finding`<sup>Optional</sup> <a name="is_top_finding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.isTopFinding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#is_top_finding DataOciDataSafeSecurityAssessmentFinding#is_top_finding}.

---

##### `references`<sup>Optional</sup> <a name="references" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.references"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#references DataOciDataSafeSecurityAssessmentFinding#references}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.severity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#severity DataOciDataSafeSecurityAssessmentFinding#severity}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#state DataOciDataSafeSecurityAssessmentFinding#state}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#target_id DataOciDataSafeSecurityAssessmentFinding#target_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetFindingKey">reset_finding_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetIsTopFinding">reset_is_top_finding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetReferences">reset_references</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetSeverity">reset_severity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetTargetId">reset_target_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentFindingFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_finding_key` <a name="reset_finding_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetFindingKey"></a>

```python
def reset_finding_key() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_top_finding` <a name="reset_is_top_finding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetIsTopFinding"></a>

```python
def reset_is_top_finding() -> None
```

##### `reset_references` <a name="reset_references" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetReferences"></a>

```python
def reset_references() -> None
```

##### `reset_severity` <a name="reset_severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetSeverity"></a>

```python
def reset_severity() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.resetTargetId"></a>

```python
def reset_target_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFinding resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_finding

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_finding

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_finding

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_finding

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentFinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSecurityAssessmentFinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentFinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList">DataOciDataSafeSecurityAssessmentFindingFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findings">findings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList">DataOciDataSafeSecurityAssessmentFindingFindingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findingKeyInput">finding_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.isTopFindingInput">is_top_finding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.referencesInput">references_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.securityAssessmentIdInput">security_assessment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findingKey">finding_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.isTopFinding">is_top_finding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.references">references</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.securityAssessmentId">security_assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.filter"></a>

```python
filter: DataOciDataSafeSecurityAssessmentFindingFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList">DataOciDataSafeSecurityAssessmentFindingFilterList</a>

---

##### `findings`<sup>Required</sup> <a name="findings" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findings"></a>

```python
findings: DataOciDataSafeSecurityAssessmentFindingFindingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList">DataOciDataSafeSecurityAssessmentFindingFindingsList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentFindingFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>]]

---

##### `finding_key_input`<sup>Optional</sup> <a name="finding_key_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findingKeyInput"></a>

```python
finding_key_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_top_finding_input`<sup>Optional</sup> <a name="is_top_finding_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.isTopFindingInput"></a>

```python
is_top_finding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `references_input`<sup>Optional</sup> <a name="references_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.referencesInput"></a>

```python
references_input: str
```

- *Type:* str

---

##### `security_assessment_id_input`<sup>Optional</sup> <a name="security_assessment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.securityAssessmentIdInput"></a>

```python
security_assessment_id_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `finding_key`<sup>Required</sup> <a name="finding_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.findingKey"></a>

```python
finding_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_top_finding`<sup>Required</sup> <a name="is_top_finding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.isTopFinding"></a>

```python
is_top_finding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `references`<sup>Required</sup> <a name="references" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.references"></a>

```python
references: str
```

- *Type:* str

---

##### `security_assessment_id`<sup>Required</sup> <a name="security_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.securityAssessmentId"></a>

```python
security_assessment_id: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentFindingConfig <a name="DataOciDataSafeSecurityAssessmentFindingConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_finding

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_assessment_id: str,
  access_level: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentFindingFilter]] = None,
  finding_key: str = None,
  id: str = None,
  is_top_finding: typing.Union[bool, IResolvable] = None,
  references: str = None,
  severity: str = None,
  state: str = None,
  target_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.securityAssessmentId">security_assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#security_assessment_id DataOciDataSafeSecurityAssessmentFinding#security_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#access_level DataOciDataSafeSecurityAssessmentFinding#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFinding#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.findingKey">finding_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#finding_key DataOciDataSafeSecurityAssessmentFinding#finding_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#id DataOciDataSafeSecurityAssessmentFinding#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.isTopFinding">is_top_finding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#is_top_finding DataOciDataSafeSecurityAssessmentFinding#is_top_finding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.references">references</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#references DataOciDataSafeSecurityAssessmentFinding#references}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.severity">severity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#severity DataOciDataSafeSecurityAssessmentFinding#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#state DataOciDataSafeSecurityAssessmentFinding#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#target_id DataOciDataSafeSecurityAssessmentFinding#target_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_assessment_id`<sup>Required</sup> <a name="security_assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.securityAssessmentId"></a>

```python
security_assessment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#security_assessment_id DataOciDataSafeSecurityAssessmentFinding#security_assessment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#access_level DataOciDataSafeSecurityAssessmentFinding#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFinding#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentFindingFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#filter DataOciDataSafeSecurityAssessmentFinding#filter}

---

##### `finding_key`<sup>Optional</sup> <a name="finding_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.findingKey"></a>

```python
finding_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#finding_key DataOciDataSafeSecurityAssessmentFinding#finding_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#id DataOciDataSafeSecurityAssessmentFinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_top_finding`<sup>Optional</sup> <a name="is_top_finding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.isTopFinding"></a>

```python
is_top_finding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#is_top_finding DataOciDataSafeSecurityAssessmentFinding#is_top_finding}.

---

##### `references`<sup>Optional</sup> <a name="references" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.references"></a>

```python
references: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#references DataOciDataSafeSecurityAssessmentFinding#references}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#severity DataOciDataSafeSecurityAssessmentFinding#severity}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#state DataOciDataSafeSecurityAssessmentFinding#state}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#target_id DataOciDataSafeSecurityAssessmentFinding#target_id}.

---

### DataOciDataSafeSecurityAssessmentFindingFilter <a name="DataOciDataSafeSecurityAssessmentFindingFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_finding

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#name DataOciDataSafeSecurityAssessmentFinding#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#values DataOciDataSafeSecurityAssessmentFinding#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#regex DataOciDataSafeSecurityAssessmentFinding#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#name DataOciDataSafeSecurityAssessmentFinding#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#values DataOciDataSafeSecurityAssessmentFinding#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding#regex DataOciDataSafeSecurityAssessmentFinding#regex}.

---

### DataOciDataSafeSecurityAssessmentFindingFindings <a name="DataOciDataSafeSecurityAssessmentFindingFindings" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_finding

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings()
```


### DataOciDataSafeSecurityAssessmentFindingFindingsReferences <a name="DataOciDataSafeSecurityAssessmentFindingFindingsReferences" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_finding

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentFindingFilterList <a name="DataOciDataSafeSecurityAssessmentFindingFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_finding

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentFindingFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityAssessmentFindingFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>]]

---


### DataOciDataSafeSecurityAssessmentFindingFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_finding

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSecurityAssessmentFindingFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFilter">DataOciDataSafeSecurityAssessmentFindingFilter</a>]

---


### DataOciDataSafeSecurityAssessmentFindingFindingsList <a name="DataOciDataSafeSecurityAssessmentFindingFindingsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_finding

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_finding

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.assessmentId">assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.details">details</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.hasTargetDbRiskLevelChanged">has_target_db_risk_level_changed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.isRiskModified">is_risk_modified</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.isTopFinding">is_top_finding</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.justification">justification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.oneline">oneline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.oracleDefinedSeverity">oracle_defined_severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.references">references</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList">DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.remarks">remarks</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.timeValidUntil">time_valid_until</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings">DataOciDataSafeSecurityAssessmentFindingFindings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assessment_id`<sup>Required</sup> <a name="assessment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.assessmentId"></a>

```python
assessment_id: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.details"></a>

```python
details: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `has_target_db_risk_level_changed`<sup>Required</sup> <a name="has_target_db_risk_level_changed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.hasTargetDbRiskLevelChanged"></a>

```python
has_target_db_risk_level_changed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_risk_modified`<sup>Required</sup> <a name="is_risk_modified" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.isRiskModified"></a>

```python
is_risk_modified: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_top_finding`<sup>Required</sup> <a name="is_top_finding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.isTopFinding"></a>

```python
is_top_finding: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `justification`<sup>Required</sup> <a name="justification" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.justification"></a>

```python
justification: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `oneline`<sup>Required</sup> <a name="oneline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.oneline"></a>

```python
oneline: str
```

- *Type:* str

---

##### `oracle_defined_severity`<sup>Required</sup> <a name="oracle_defined_severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.oracleDefinedSeverity"></a>

```python
oracle_defined_severity: str
```

- *Type:* str

---

##### `references`<sup>Required</sup> <a name="references" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.references"></a>

```python
references: DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList">DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList</a>

---

##### `remarks`<sup>Required</sup> <a name="remarks" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.remarks"></a>

```python
remarks: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `time_valid_until`<sup>Required</sup> <a name="time_valid_until" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.timeValidUntil"></a>

```python
time_valid_until: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentFindingFindings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindings">DataOciDataSafeSecurityAssessmentFindingFindings</a>

---


### DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList <a name="DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_finding

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_assessment_finding

dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.cis">cis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.gdpr">gdpr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.obp">obp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.stig">stig</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences">DataOciDataSafeSecurityAssessmentFindingFindingsReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cis`<sup>Required</sup> <a name="cis" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.cis"></a>

```python
cis: str
```

- *Type:* str

---

##### `gdpr`<sup>Required</sup> <a name="gdpr" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.gdpr"></a>

```python
gdpr: str
```

- *Type:* str

---

##### `obp`<sup>Required</sup> <a name="obp" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.obp"></a>

```python
obp: str
```

- *Type:* str

---

##### `stig`<sup>Required</sup> <a name="stig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.stig"></a>

```python
stig: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferencesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityAssessmentFindingFindingsReferences
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFinding.DataOciDataSafeSecurityAssessmentFindingFindingsReferences">DataOciDataSafeSecurityAssessmentFindingFindingsReferences</a>

---



