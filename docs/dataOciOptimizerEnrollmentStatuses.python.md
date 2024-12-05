# `dataOciOptimizerEnrollmentStatuses` Submodule <a name="`dataOciOptimizerEnrollmentStatuses` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOptimizerEnrollmentStatuses <a name="DataOciOptimizerEnrollmentStatuses" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses oci_optimizer_enrollment_statuses}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_enrollment_statuses

dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOptimizerEnrollmentStatusesFilter]] = None,
  id: str = None,
  state: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#compartment_id DataOciOptimizerEnrollmentStatuses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#id DataOciOptimizerEnrollmentStatuses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#state DataOciOptimizerEnrollmentStatuses#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#status DataOciOptimizerEnrollmentStatuses#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#compartment_id DataOciOptimizerEnrollmentStatuses#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#filter DataOciOptimizerEnrollmentStatuses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#id DataOciOptimizerEnrollmentStatuses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#state DataOciOptimizerEnrollmentStatuses#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#status DataOciOptimizerEnrollmentStatuses#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOptimizerEnrollmentStatusesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOptimizerEnrollmentStatuses resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_enrollment_statuses

dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_enrollment_statuses

dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_enrollment_statuses

dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_enrollment_statuses

dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOptimizerEnrollmentStatuses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOptimizerEnrollmentStatuses to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOptimizerEnrollmentStatuses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOptimizerEnrollmentStatuses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.enrollmentStatusCollection">enrollment_status_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList">DataOciOptimizerEnrollmentStatusesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `enrollment_status_collection`<sup>Required</sup> <a name="enrollment_status_collection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.enrollmentStatusCollection"></a>

```python
enrollment_status_collection: DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.filter"></a>

```python
filter: DataOciOptimizerEnrollmentStatusesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList">DataOciOptimizerEnrollmentStatusesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOptimizerEnrollmentStatusesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOptimizerEnrollmentStatusesConfig <a name="DataOciOptimizerEnrollmentStatusesConfig" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_enrollment_statuses

dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOptimizerEnrollmentStatusesFilter]] = None,
  id: str = None,
  state: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#compartment_id DataOciOptimizerEnrollmentStatuses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#id DataOciOptimizerEnrollmentStatuses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#state DataOciOptimizerEnrollmentStatuses#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#status DataOciOptimizerEnrollmentStatuses#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#compartment_id DataOciOptimizerEnrollmentStatuses#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOptimizerEnrollmentStatusesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#filter DataOciOptimizerEnrollmentStatuses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#id DataOciOptimizerEnrollmentStatuses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#state DataOciOptimizerEnrollmentStatuses#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#status DataOciOptimizerEnrollmentStatuses#status}.

---

### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_enrollment_statuses

dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection()
```


### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_enrollment_statuses

dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems()
```


### DataOciOptimizerEnrollmentStatusesFilter <a name="DataOciOptimizerEnrollmentStatusesFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_enrollment_statuses

dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#name DataOciOptimizerEnrollmentStatuses#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#values DataOciOptimizerEnrollmentStatuses#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#regex DataOciOptimizerEnrollmentStatuses#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#name DataOciOptimizerEnrollmentStatuses#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#values DataOciOptimizerEnrollmentStatuses#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#regex DataOciOptimizerEnrollmentStatuses#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_enrollment_statuses

dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_enrollment_statuses

dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.enrollmentStatusId">enrollment_status_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `enrollment_status_id`<sup>Required</sup> <a name="enrollment_status_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.enrollmentStatusId"></a>

```python
enrollment_status_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems</a>

---


### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_enrollment_statuses

dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_enrollment_statuses

dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.items"></a>

```python
items: DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection</a>

---


### DataOciOptimizerEnrollmentStatusesFilterList <a name="DataOciOptimizerEnrollmentStatusesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_enrollment_statuses

dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOptimizerEnrollmentStatusesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOptimizerEnrollmentStatusesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>]]

---


### DataOciOptimizerEnrollmentStatusesFilterOutputReference <a name="DataOciOptimizerEnrollmentStatusesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_enrollment_statuses

dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOptimizerEnrollmentStatusesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter">DataOciOptimizerEnrollmentStatusesFilter</a>]

---



