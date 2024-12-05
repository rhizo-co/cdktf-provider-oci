# `dataOciDataSafeSecurityPolicyReports` Submodule <a name="`dataOciDataSafeSecurityPolicyReports` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyReports <a name="DataOciDataSafeSecurityPolicyReports" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports oci_data_safe_security_policy_reports}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_reports

dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportsFilter]] = None,
  id: str = None,
  security_policy_report_id: str = None,
  state: str = None,
  target_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#compartment_id DataOciDataSafeSecurityPolicyReports#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#access_level DataOciDataSafeSecurityPolicyReports#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#compartment_id_in_subtree DataOciDataSafeSecurityPolicyReports#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#display_name DataOciDataSafeSecurityPolicyReports#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter">DataOciDataSafeSecurityPolicyReportsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#id DataOciDataSafeSecurityPolicyReports#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#security_policy_report_id DataOciDataSafeSecurityPolicyReports#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#state DataOciDataSafeSecurityPolicyReports#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#target_id DataOciDataSafeSecurityPolicyReports#target_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#compartment_id DataOciDataSafeSecurityPolicyReports#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#access_level DataOciDataSafeSecurityPolicyReports#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#compartment_id_in_subtree DataOciDataSafeSecurityPolicyReports#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#display_name DataOciDataSafeSecurityPolicyReports#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter">DataOciDataSafeSecurityPolicyReportsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#filter DataOciDataSafeSecurityPolicyReports#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#id DataOciDataSafeSecurityPolicyReports#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_policy_report_id`<sup>Optional</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.securityPolicyReportId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#security_policy_report_id DataOciDataSafeSecurityPolicyReports#security_policy_report_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#state DataOciDataSafeSecurityPolicyReports#state}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#target_id DataOciDataSafeSecurityPolicyReports#target_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetSecurityPolicyReportId">reset_security_policy_report_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetTargetId">reset_target_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter">DataOciDataSafeSecurityPolicyReportsFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_security_policy_report_id` <a name="reset_security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetSecurityPolicyReportId"></a>

```python
def reset_security_policy_report_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.resetTargetId"></a>

```python
def reset_target_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReports resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_reports

dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_reports

dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_reports

dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_reports

dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReports resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyReports to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSecurityPolicyReports that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyReports to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList">DataOciDataSafeSecurityPolicyReportsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.securityPolicyReportCollection">security_policy_report_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList">DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter">DataOciDataSafeSecurityPolicyReportsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.securityPolicyReportIdInput">security_policy_report_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.filter"></a>

```python
filter: DataOciDataSafeSecurityPolicyReportsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList">DataOciDataSafeSecurityPolicyReportsFilterList</a>

---

##### `security_policy_report_collection`<sup>Required</sup> <a name="security_policy_report_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.securityPolicyReportCollection"></a>

```python
security_policy_report_collection: DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList">DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter">DataOciDataSafeSecurityPolicyReportsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `security_policy_report_id_input`<sup>Optional</sup> <a name="security_policy_report_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.securityPolicyReportIdInput"></a>

```python
security_policy_report_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_policy_report_id`<sup>Required</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.securityPolicyReportId"></a>

```python
security_policy_report_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReports.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyReportsConfig <a name="DataOciDataSafeSecurityPolicyReportsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_reports

dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportsFilter]] = None,
  id: str = None,
  security_policy_report_id: str = None,
  state: str = None,
  target_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#compartment_id DataOciDataSafeSecurityPolicyReports#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#access_level DataOciDataSafeSecurityPolicyReports#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#compartment_id_in_subtree DataOciDataSafeSecurityPolicyReports#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#display_name DataOciDataSafeSecurityPolicyReports#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter">DataOciDataSafeSecurityPolicyReportsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#id DataOciDataSafeSecurityPolicyReports#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.securityPolicyReportId">security_policy_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#security_policy_report_id DataOciDataSafeSecurityPolicyReports#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#state DataOciDataSafeSecurityPolicyReports#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#target_id DataOciDataSafeSecurityPolicyReports#target_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#compartment_id DataOciDataSafeSecurityPolicyReports#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#access_level DataOciDataSafeSecurityPolicyReports#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#compartment_id_in_subtree DataOciDataSafeSecurityPolicyReports#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#display_name DataOciDataSafeSecurityPolicyReports#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter">DataOciDataSafeSecurityPolicyReportsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#filter DataOciDataSafeSecurityPolicyReports#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#id DataOciDataSafeSecurityPolicyReports#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_policy_report_id`<sup>Optional</sup> <a name="security_policy_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.securityPolicyReportId"></a>

```python
security_policy_report_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#security_policy_report_id DataOciDataSafeSecurityPolicyReports#security_policy_report_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#state DataOciDataSafeSecurityPolicyReports#state}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#target_id DataOciDataSafeSecurityPolicyReports#target_id}.

---

### DataOciDataSafeSecurityPolicyReportsFilter <a name="DataOciDataSafeSecurityPolicyReportsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_reports

dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#name DataOciDataSafeSecurityPolicyReports#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#values DataOciDataSafeSecurityPolicyReports#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#regex DataOciDataSafeSecurityPolicyReports#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#name DataOciDataSafeSecurityPolicyReports#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#values DataOciDataSafeSecurityPolicyReports#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_reports#regex DataOciDataSafeSecurityPolicyReports#regex}.

---

### DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollection <a name="DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_reports

dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollection()
```


### DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItems <a name="DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_reports

dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityPolicyReportsFilterList <a name="DataOciDataSafeSecurityPolicyReportsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_reports

dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyReportsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter">DataOciDataSafeSecurityPolicyReportsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSecurityPolicyReportsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter">DataOciDataSafeSecurityPolicyReportsFilter</a>]]

---


### DataOciDataSafeSecurityPolicyReportsFilterOutputReference <a name="DataOciDataSafeSecurityPolicyReportsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_reports

dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter">DataOciDataSafeSecurityPolicyReportsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSecurityPolicyReportsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsFilter">DataOciDataSafeSecurityPolicyReportsFilter</a>]

---


### DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList <a name="DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_reports

dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference <a name="DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_reports

dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItems">DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItems">DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItems</a>

---


### DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList <a name="DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_reports

dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference <a name="DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_security_policy_reports

dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList">DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollection">DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList">DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReports.DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollection">DataOciDataSafeSecurityPolicyReportsSecurityPolicyReportCollection</a>

---



