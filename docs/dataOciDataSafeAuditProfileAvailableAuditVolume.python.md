# `dataOciDataSafeAuditProfileAvailableAuditVolume` Submodule <a name="`dataOciDataSafeAuditProfileAvailableAuditVolume` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditProfileAvailableAuditVolume <a name="DataOciDataSafeAuditProfileAvailableAuditVolume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume oci_data_safe_audit_profile_available_audit_volume}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_profile_available_audit_volume

dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audit_profile_id: str,
  work_request_id: str,
  id: str = None,
  month_in_consideration_greater_than: str = None,
  month_in_consideration_less_than: str = None,
  trail_location: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.auditProfileId">audit_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#audit_profile_id DataOciDataSafeAuditProfileAvailableAuditVolume#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.workRequestId">work_request_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#work_request_id DataOciDataSafeAuditProfileAvailableAuditVolume#work_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#id DataOciDataSafeAuditProfileAvailableAuditVolume#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.monthInConsiderationGreaterThan">month_in_consideration_greater_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#month_in_consideration_greater_than DataOciDataSafeAuditProfileAvailableAuditVolume#month_in_consideration_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.monthInConsiderationLessThan">month_in_consideration_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#month_in_consideration_less_than DataOciDataSafeAuditProfileAvailableAuditVolume#month_in_consideration_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.trailLocation">trail_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#trail_location DataOciDataSafeAuditProfileAvailableAuditVolume#trail_location}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_profile_id`<sup>Required</sup> <a name="audit_profile_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.auditProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#audit_profile_id DataOciDataSafeAuditProfileAvailableAuditVolume#audit_profile_id}.

---

##### `work_request_id`<sup>Required</sup> <a name="work_request_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.workRequestId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#work_request_id DataOciDataSafeAuditProfileAvailableAuditVolume#work_request_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#id DataOciDataSafeAuditProfileAvailableAuditVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `month_in_consideration_greater_than`<sup>Optional</sup> <a name="month_in_consideration_greater_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.monthInConsiderationGreaterThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#month_in_consideration_greater_than DataOciDataSafeAuditProfileAvailableAuditVolume#month_in_consideration_greater_than}.

---

##### `month_in_consideration_less_than`<sup>Optional</sup> <a name="month_in_consideration_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.monthInConsiderationLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#month_in_consideration_less_than DataOciDataSafeAuditProfileAvailableAuditVolume#month_in_consideration_less_than}.

---

##### `trail_location`<sup>Optional</sup> <a name="trail_location" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.Initializer.parameter.trailLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#trail_location DataOciDataSafeAuditProfileAvailableAuditVolume#trail_location}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetMonthInConsiderationGreaterThan">reset_month_in_consideration_greater_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetMonthInConsiderationLessThan">reset_month_in_consideration_less_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetTrailLocation">reset_trail_location</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_month_in_consideration_greater_than` <a name="reset_month_in_consideration_greater_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetMonthInConsiderationGreaterThan"></a>

```python
def reset_month_in_consideration_greater_than() -> None
```

##### `reset_month_in_consideration_less_than` <a name="reset_month_in_consideration_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetMonthInConsiderationLessThan"></a>

```python
def reset_month_in_consideration_less_than() -> None
```

##### `reset_trail_location` <a name="reset_trail_location" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.resetTrailLocation"></a>

```python
def reset_trail_location() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditProfileAvailableAuditVolume resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_profile_available_audit_volume

dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_profile_available_audit_volume

dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_profile_available_audit_volume

dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_profile_available_audit_volume

dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeAuditProfileAvailableAuditVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeAuditProfileAvailableAuditVolume to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeAuditProfileAvailableAuditVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditProfileAvailableAuditVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList">DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.auditProfileIdInput">audit_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.monthInConsiderationGreaterThanInput">month_in_consideration_greater_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.monthInConsiderationLessThanInput">month_in_consideration_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.trailLocationInput">trail_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.workRequestIdInput">work_request_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.auditProfileId">audit_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.monthInConsiderationGreaterThan">month_in_consideration_greater_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.monthInConsiderationLessThan">month_in_consideration_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.trailLocation">trail_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.workRequestId">work_request_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.items"></a>

```python
items: DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList">DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList</a>

---

##### `audit_profile_id_input`<sup>Optional</sup> <a name="audit_profile_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.auditProfileIdInput"></a>

```python
audit_profile_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `month_in_consideration_greater_than_input`<sup>Optional</sup> <a name="month_in_consideration_greater_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.monthInConsiderationGreaterThanInput"></a>

```python
month_in_consideration_greater_than_input: str
```

- *Type:* str

---

##### `month_in_consideration_less_than_input`<sup>Optional</sup> <a name="month_in_consideration_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.monthInConsiderationLessThanInput"></a>

```python
month_in_consideration_less_than_input: str
```

- *Type:* str

---

##### `trail_location_input`<sup>Optional</sup> <a name="trail_location_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.trailLocationInput"></a>

```python
trail_location_input: str
```

- *Type:* str

---

##### `work_request_id_input`<sup>Optional</sup> <a name="work_request_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.workRequestIdInput"></a>

```python
work_request_id_input: str
```

- *Type:* str

---

##### `audit_profile_id`<sup>Required</sup> <a name="audit_profile_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.auditProfileId"></a>

```python
audit_profile_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `month_in_consideration_greater_than`<sup>Required</sup> <a name="month_in_consideration_greater_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.monthInConsiderationGreaterThan"></a>

```python
month_in_consideration_greater_than: str
```

- *Type:* str

---

##### `month_in_consideration_less_than`<sup>Required</sup> <a name="month_in_consideration_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.monthInConsiderationLessThan"></a>

```python
month_in_consideration_less_than: str
```

- *Type:* str

---

##### `trail_location`<sup>Required</sup> <a name="trail_location" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.trailLocation"></a>

```python
trail_location: str
```

- *Type:* str

---

##### `work_request_id`<sup>Required</sup> <a name="work_request_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.workRequestId"></a>

```python
work_request_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditProfileAvailableAuditVolumeConfig <a name="DataOciDataSafeAuditProfileAvailableAuditVolumeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_profile_available_audit_volume

dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audit_profile_id: str,
  work_request_id: str,
  id: str = None,
  month_in_consideration_greater_than: str = None,
  month_in_consideration_less_than: str = None,
  trail_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.auditProfileId">audit_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#audit_profile_id DataOciDataSafeAuditProfileAvailableAuditVolume#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.workRequestId">work_request_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#work_request_id DataOciDataSafeAuditProfileAvailableAuditVolume#work_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#id DataOciDataSafeAuditProfileAvailableAuditVolume#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.monthInConsiderationGreaterThan">month_in_consideration_greater_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#month_in_consideration_greater_than DataOciDataSafeAuditProfileAvailableAuditVolume#month_in_consideration_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.monthInConsiderationLessThan">month_in_consideration_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#month_in_consideration_less_than DataOciDataSafeAuditProfileAvailableAuditVolume#month_in_consideration_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.trailLocation">trail_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#trail_location DataOciDataSafeAuditProfileAvailableAuditVolume#trail_location}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_profile_id`<sup>Required</sup> <a name="audit_profile_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.auditProfileId"></a>

```python
audit_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#audit_profile_id DataOciDataSafeAuditProfileAvailableAuditVolume#audit_profile_id}.

---

##### `work_request_id`<sup>Required</sup> <a name="work_request_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.workRequestId"></a>

```python
work_request_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#work_request_id DataOciDataSafeAuditProfileAvailableAuditVolume#work_request_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#id DataOciDataSafeAuditProfileAvailableAuditVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `month_in_consideration_greater_than`<sup>Optional</sup> <a name="month_in_consideration_greater_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.monthInConsiderationGreaterThan"></a>

```python
month_in_consideration_greater_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#month_in_consideration_greater_than DataOciDataSafeAuditProfileAvailableAuditVolume#month_in_consideration_greater_than}.

---

##### `month_in_consideration_less_than`<sup>Optional</sup> <a name="month_in_consideration_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.monthInConsiderationLessThan"></a>

```python
month_in_consideration_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#month_in_consideration_less_than DataOciDataSafeAuditProfileAvailableAuditVolume#month_in_consideration_less_than}.

---

##### `trail_location`<sup>Optional</sup> <a name="trail_location" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeConfig.property.trailLocation"></a>

```python
trail_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volume#trail_location DataOciDataSafeAuditProfileAvailableAuditVolume#trail_location}.

---

### DataOciDataSafeAuditProfileAvailableAuditVolumeItems <a name="DataOciDataSafeAuditProfileAvailableAuditVolumeItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_profile_available_audit_volume

dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList <a name="DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_profile_available_audit_volume

dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference <a name="DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_audit_profile_available_audit_volume

dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.auditProfileId">audit_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.monthInConsideration">month_in_consideration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.trailLocation">trail_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.volume">volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItems">DataOciDataSafeAuditProfileAvailableAuditVolumeItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audit_profile_id`<sup>Required</sup> <a name="audit_profile_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.auditProfileId"></a>

```python
audit_profile_id: str
```

- *Type:* str

---

##### `month_in_consideration`<sup>Required</sup> <a name="month_in_consideration" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.monthInConsideration"></a>

```python
month_in_consideration: str
```

- *Type:* str

---

##### `trail_location`<sup>Required</sup> <a name="trail_location" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.trailLocation"></a>

```python
trail_location: str
```

- *Type:* str

---

##### `volume`<sup>Required</sup> <a name="volume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.volume"></a>

```python
volume: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeAuditProfileAvailableAuditVolumeItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolume.DataOciDataSafeAuditProfileAvailableAuditVolumeItems">DataOciDataSafeAuditProfileAvailableAuditVolumeItems</a>

---



