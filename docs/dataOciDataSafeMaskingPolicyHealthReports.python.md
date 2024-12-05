# `dataOciDataSafeMaskingPolicyHealthReports` Submodule <a name="`dataOciDataSafeMaskingPolicyHealthReports` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingPolicyHealthReports <a name="DataOciDataSafeMaskingPolicyHealthReports" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports oci_data_safe_masking_policy_health_reports}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_reports

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPolicyHealthReportsFilter]] = None,
  id: str = None,
  masking_policy_health_report_id: str = None,
  masking_policy_id: str = None,
  state: str = None,
  target_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#compartment_id DataOciDataSafeMaskingPolicyHealthReports#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#access_level DataOciDataSafeMaskingPolicyHealthReports#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#compartment_id_in_subtree DataOciDataSafeMaskingPolicyHealthReports#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#display_name DataOciDataSafeMaskingPolicyHealthReports#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#id DataOciDataSafeMaskingPolicyHealthReports#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.maskingPolicyHealthReportId">masking_policy_health_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReports#masking_policy_health_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#masking_policy_id DataOciDataSafeMaskingPolicyHealthReports#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#state DataOciDataSafeMaskingPolicyHealthReports#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#target_id DataOciDataSafeMaskingPolicyHealthReports#target_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#compartment_id DataOciDataSafeMaskingPolicyHealthReports#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#access_level DataOciDataSafeMaskingPolicyHealthReports#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#compartment_id_in_subtree DataOciDataSafeMaskingPolicyHealthReports#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#display_name DataOciDataSafeMaskingPolicyHealthReports#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#filter DataOciDataSafeMaskingPolicyHealthReports#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#id DataOciDataSafeMaskingPolicyHealthReports#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masking_policy_health_report_id`<sup>Optional</sup> <a name="masking_policy_health_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.maskingPolicyHealthReportId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReports#masking_policy_health_report_id}.

---

##### `masking_policy_id`<sup>Optional</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.maskingPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#masking_policy_id DataOciDataSafeMaskingPolicyHealthReports#masking_policy_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#state DataOciDataSafeMaskingPolicyHealthReports#state}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#target_id DataOciDataSafeMaskingPolicyHealthReports#target_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetMaskingPolicyHealthReportId">reset_masking_policy_health_report_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetMaskingPolicyId">reset_masking_policy_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetTargetId">reset_target_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPolicyHealthReportsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_masking_policy_health_report_id` <a name="reset_masking_policy_health_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetMaskingPolicyHealthReportId"></a>

```python
def reset_masking_policy_health_report_id() -> None
```

##### `reset_masking_policy_id` <a name="reset_masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetMaskingPolicyId"></a>

```python
def reset_masking_policy_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.resetTargetId"></a>

```python
def reset_target_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyHealthReports resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_reports

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_reports

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_reports

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_reports

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyHealthReports resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeMaskingPolicyHealthReports to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeMaskingPolicyHealthReports that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingPolicyHealthReports to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList">DataOciDataSafeMaskingPolicyHealthReportsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportCollection">masking_policy_health_report_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportIdInput">masking_policy_health_report_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyIdInput">masking_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportId">masking_policy_health_report_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.filter"></a>

```python
filter: DataOciDataSafeMaskingPolicyHealthReportsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList">DataOciDataSafeMaskingPolicyHealthReportsFilterList</a>

---

##### `masking_policy_health_report_collection`<sup>Required</sup> <a name="masking_policy_health_report_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportCollection"></a>

```python
masking_policy_health_report_collection: DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPolicyHealthReportsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `masking_policy_health_report_id_input`<sup>Optional</sup> <a name="masking_policy_health_report_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportIdInput"></a>

```python
masking_policy_health_report_id_input: str
```

- *Type:* str

---

##### `masking_policy_id_input`<sup>Optional</sup> <a name="masking_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyIdInput"></a>

```python
masking_policy_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `masking_policy_health_report_id`<sup>Required</sup> <a name="masking_policy_health_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyHealthReportId"></a>

```python
masking_policy_health_report_id: str
```

- *Type:* str

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReports.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingPolicyHealthReportsConfig <a name="DataOciDataSafeMaskingPolicyHealthReportsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_reports

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPolicyHealthReportsFilter]] = None,
  id: str = None,
  masking_policy_health_report_id: str = None,
  masking_policy_id: str = None,
  state: str = None,
  target_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#compartment_id DataOciDataSafeMaskingPolicyHealthReports#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#access_level DataOciDataSafeMaskingPolicyHealthReports#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#compartment_id_in_subtree DataOciDataSafeMaskingPolicyHealthReports#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#display_name DataOciDataSafeMaskingPolicyHealthReports#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#id DataOciDataSafeMaskingPolicyHealthReports#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.maskingPolicyHealthReportId">masking_policy_health_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReports#masking_policy_health_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#masking_policy_id DataOciDataSafeMaskingPolicyHealthReports#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#state DataOciDataSafeMaskingPolicyHealthReports#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#target_id DataOciDataSafeMaskingPolicyHealthReports#target_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#compartment_id DataOciDataSafeMaskingPolicyHealthReports#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#access_level DataOciDataSafeMaskingPolicyHealthReports#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#compartment_id_in_subtree DataOciDataSafeMaskingPolicyHealthReports#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#display_name DataOciDataSafeMaskingPolicyHealthReports#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPolicyHealthReportsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#filter DataOciDataSafeMaskingPolicyHealthReports#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#id DataOciDataSafeMaskingPolicyHealthReports#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masking_policy_health_report_id`<sup>Optional</sup> <a name="masking_policy_health_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.maskingPolicyHealthReportId"></a>

```python
masking_policy_health_report_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReports#masking_policy_health_report_id}.

---

##### `masking_policy_id`<sup>Optional</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#masking_policy_id DataOciDataSafeMaskingPolicyHealthReports#masking_policy_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#state DataOciDataSafeMaskingPolicyHealthReports#state}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#target_id DataOciDataSafeMaskingPolicyHealthReports#target_id}.

---

### DataOciDataSafeMaskingPolicyHealthReportsFilter <a name="DataOciDataSafeMaskingPolicyHealthReportsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_reports

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#name DataOciDataSafeMaskingPolicyHealthReports#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#values DataOciDataSafeMaskingPolicyHealthReports#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#regex DataOciDataSafeMaskingPolicyHealthReports#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#name DataOciDataSafeMaskingPolicyHealthReports#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#values DataOciDataSafeMaskingPolicyHealthReports#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_reports#regex DataOciDataSafeMaskingPolicyHealthReports#regex}.

---

### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_reports

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection()
```


### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_reports

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingPolicyHealthReportsFilterList <a name="DataOciDataSafeMaskingPolicyHealthReportsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_reports

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPolicyHealthReportsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>]]

---


### DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_reports

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeMaskingPolicyHealthReportsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsFilter">DataOciDataSafeMaskingPolicyHealthReportsFilter</a>]

---


### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_reports

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_reports

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItems</a>

---


### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_reports

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_reports

dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReports.DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection">DataOciDataSafeMaskingPolicyHealthReportsMaskingPolicyHealthReportCollection</a>

---



