# `dataOciOperatorAccessControlAccessRequests` Submodule <a name="`dataOciOperatorAccessControlAccessRequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlAccessRequests <a name="DataOciOperatorAccessControlAccessRequests" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests oci_operator_access_control_access_requests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlAccessRequestsFilter]] = None,
  id: str = None,
  resource_name: str = None,
  resource_type: str = None,
  state: str = None,
  time_end: str = None,
  time_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#compartment_id DataOciOperatorAccessControlAccessRequests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#id DataOciOperatorAccessControlAccessRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_name DataOciOperatorAccessControlAccessRequests#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_type DataOciOperatorAccessControlAccessRequests#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#state DataOciOperatorAccessControlAccessRequests#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_end DataOciOperatorAccessControlAccessRequests#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_start DataOciOperatorAccessControlAccessRequests#time_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#compartment_id DataOciOperatorAccessControlAccessRequests#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#filter DataOciOperatorAccessControlAccessRequests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#id DataOciOperatorAccessControlAccessRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_name`<sup>Optional</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.resourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_name DataOciOperatorAccessControlAccessRequests#resource_name}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_type DataOciOperatorAccessControlAccessRequests#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#state DataOciOperatorAccessControlAccessRequests#state}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.timeEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_end DataOciOperatorAccessControlAccessRequests#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.Initializer.parameter.timeStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_start DataOciOperatorAccessControlAccessRequests#time_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetResourceName">reset_resource_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetTimeEnd">reset_time_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetTimeStart">reset_time_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlAccessRequestsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_name` <a name="reset_resource_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetResourceName"></a>

```python
def reset_resource_name() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_time_end` <a name="reset_time_end" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetTimeEnd"></a>

```python
def reset_time_end() -> None
```

##### `reset_time_start` <a name="reset_time_start" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.resetTimeStart"></a>

```python
def reset_time_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequests resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOperatorAccessControlAccessRequests to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOperatorAccessControlAccessRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlAccessRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.accessRequestCollection">access_request_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList">DataOciOperatorAccessControlAccessRequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeEndInput">time_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeStartInput">time_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_request_collection`<sup>Required</sup> <a name="access_request_collection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.accessRequestCollection"></a>

```python
access_request_collection: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.filter"></a>

```python
filter: DataOciOperatorAccessControlAccessRequestsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList">DataOciOperatorAccessControlAccessRequestsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlAccessRequestsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `time_end_input`<sup>Optional</sup> <a name="time_end_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeEndInput"></a>

```python
time_end_input: str
```

- *Type:* str

---

##### `time_start_input`<sup>Optional</sup> <a name="time_start_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeStartInput"></a>

```python
time_start_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequests.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlAccessRequestsAccessRequestCollection <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection()
```


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems()
```


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails()
```


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails()
```


### DataOciOperatorAccessControlAccessRequestsConfig <a name="DataOciOperatorAccessControlAccessRequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlAccessRequestsFilter]] = None,
  id: str = None,
  resource_name: str = None,
  resource_type: str = None,
  state: str = None,
  time_end: str = None,
  time_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#compartment_id DataOciOperatorAccessControlAccessRequests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#id DataOciOperatorAccessControlAccessRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_name DataOciOperatorAccessControlAccessRequests#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_type DataOciOperatorAccessControlAccessRequests#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#state DataOciOperatorAccessControlAccessRequests#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_end DataOciOperatorAccessControlAccessRequests#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_start DataOciOperatorAccessControlAccessRequests#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#compartment_id DataOciOperatorAccessControlAccessRequests#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlAccessRequestsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#filter DataOciOperatorAccessControlAccessRequests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#id DataOciOperatorAccessControlAccessRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_name`<sup>Optional</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_name DataOciOperatorAccessControlAccessRequests#resource_name}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#resource_type DataOciOperatorAccessControlAccessRequests#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#state DataOciOperatorAccessControlAccessRequests#state}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_end DataOciOperatorAccessControlAccessRequests#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsConfig.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#time_start DataOciOperatorAccessControlAccessRequests#time_start}.

---

### DataOciOperatorAccessControlAccessRequestsFilter <a name="DataOciOperatorAccessControlAccessRequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#name DataOciOperatorAccessControlAccessRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#values DataOciOperatorAccessControlAccessRequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#regex DataOciOperatorAccessControlAccessRequests#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#name DataOciOperatorAccessControlAccessRequests#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#values DataOciOperatorAccessControlAccessRequests#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_requests#regex DataOciOperatorAccessControlAccessRequests#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalAction">approval_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalAdditionalMessage">approval_additional_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalComment">approval_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approverId">approver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.timeApprovedForAccess">time_approved_for_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.timeOfAuthorization">time_of_authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_action`<sup>Required</sup> <a name="approval_action" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalAction"></a>

```python
approval_action: str
```

- *Type:* str

---

##### `approval_additional_message`<sup>Required</sup> <a name="approval_additional_message" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalAdditionalMessage"></a>

```python
approval_additional_message: str
```

- *Type:* str

---

##### `approval_comment`<sup>Required</sup> <a name="approval_comment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approvalComment"></a>

```python
approval_comment: str
```

- *Type:* str

---

##### `approver_id`<sup>Required</sup> <a name="approver_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.approverId"></a>

```python
approver_id: str
```

- *Type:* str

---

##### `time_approved_for_access`<sup>Required</sup> <a name="time_approved_for_access" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.timeApprovedForAccess"></a>

```python
time_approved_for_access: str
```

- *Type:* str

---

##### `time_of_authorization`<sup>Required</sup> <a name="time_of_authorization" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.timeOfAuthorization"></a>

```python
time_of_authorization: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetails</a>

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalAction">approval_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalAdditionalMessage">approval_additional_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalComment">approval_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approverId">approver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.timeApprovedForAccess">time_approved_for_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.timeOfAuthorization">time_of_authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_action`<sup>Required</sup> <a name="approval_action" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalAction"></a>

```python
approval_action: str
```

- *Type:* str

---

##### `approval_additional_message`<sup>Required</sup> <a name="approval_additional_message" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalAdditionalMessage"></a>

```python
approval_additional_message: str
```

- *Type:* str

---

##### `approval_comment`<sup>Required</sup> <a name="approval_comment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approvalComment"></a>

```python
approval_comment: str
```

- *Type:* str

---

##### `approver_id`<sup>Required</sup> <a name="approver_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.approverId"></a>

```python
approver_id: str
```

- *Type:* str

---

##### `time_approved_for_access`<sup>Required</sup> <a name="time_approved_for_access" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.timeApprovedForAccess"></a>

```python
time_approved_for_access: str
```

- *Type:* str

---

##### `time_of_authorization`<sup>Required</sup> <a name="time_of_authorization" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.timeOfAuthorization"></a>

```python
time_of_authorization: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetails</a>

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.accessReasonSummary">access_reason_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.actionRequestsList">action_requests_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.approverComment">approver_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.approverDetails">approver_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.auditType">audit_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.closureComment">closure_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.extendDuration">extend_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.extensionApproverDetails">extension_approver_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.isAutoApproved">is_auto_approved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.isValidateAssignment">is_validate_assignment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfApprovers">number_of_approvers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfApproversRequired">number_of_approvers_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfExtensionApprovers">number_of_extension_approvers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlAdditionalMessage">opctl_additional_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlId">opctl_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlName">opctl_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.operatorId">operator_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.requestId">request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.subResourceList">sub_resource_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.systemMessage">system_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfCreation">time_of_creation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfModification">time_of_modification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfUserCreation">time_of_user_creation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeRequestedForFutureAccess">time_requested_for_future_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.workflowId">workflow_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_reason_summary`<sup>Required</sup> <a name="access_reason_summary" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.accessReasonSummary"></a>

```python
access_reason_summary: str
```

- *Type:* str

---

##### `action_requests_list`<sup>Required</sup> <a name="action_requests_list" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.actionRequestsList"></a>

```python
action_requests_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approver_comment`<sup>Required</sup> <a name="approver_comment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.approverComment"></a>

```python
approver_comment: str
```

- *Type:* str

---

##### `approver_details`<sup>Required</sup> <a name="approver_details" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.approverDetails"></a>

```python
approver_details: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsApproverDetailsList</a>

---

##### `audit_type`<sup>Required</sup> <a name="audit_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.auditType"></a>

```python
audit_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `closure_comment`<sup>Required</sup> <a name="closure_comment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.closureComment"></a>

```python
closure_comment: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extend_duration`<sup>Required</sup> <a name="extend_duration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.extendDuration"></a>

```python
extend_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extension_approver_details`<sup>Required</sup> <a name="extension_approver_details" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.extensionApproverDetails"></a>

```python
extension_approver_details: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsExtensionApproverDetailsList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_auto_approved`<sup>Required</sup> <a name="is_auto_approved" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.isAutoApproved"></a>

```python
is_auto_approved: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_validate_assignment`<sup>Required</sup> <a name="is_validate_assignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.isValidateAssignment"></a>

```python
is_validate_assignment: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `number_of_approvers`<sup>Required</sup> <a name="number_of_approvers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfApprovers"></a>

```python
number_of_approvers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_approvers_required`<sup>Required</sup> <a name="number_of_approvers_required" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfApproversRequired"></a>

```python
number_of_approvers_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_extension_approvers`<sup>Required</sup> <a name="number_of_extension_approvers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.numberOfExtensionApprovers"></a>

```python
number_of_extension_approvers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opctl_additional_message`<sup>Required</sup> <a name="opctl_additional_message" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlAdditionalMessage"></a>

```python
opctl_additional_message: str
```

- *Type:* str

---

##### `opctl_id`<sup>Required</sup> <a name="opctl_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlId"></a>

```python
opctl_id: str
```

- *Type:* str

---

##### `opctl_name`<sup>Required</sup> <a name="opctl_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.opctlName"></a>

```python
opctl_name: str
```

- *Type:* str

---

##### `operator_id`<sup>Required</sup> <a name="operator_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.operatorId"></a>

```python
operator_id: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `request_id`<sup>Required</sup> <a name="request_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.requestId"></a>

```python
request_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `sub_resource_list`<sup>Required</sup> <a name="sub_resource_list" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.subResourceList"></a>

```python
sub_resource_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_message`<sup>Required</sup> <a name="system_message" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.systemMessage"></a>

```python
system_message: str
```

- *Type:* str

---

##### `time_of_creation`<sup>Required</sup> <a name="time_of_creation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfCreation"></a>

```python
time_of_creation: str
```

- *Type:* str

---

##### `time_of_modification`<sup>Required</sup> <a name="time_of_modification" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfModification"></a>

```python
time_of_modification: str
```

- *Type:* str

---

##### `time_of_user_creation`<sup>Required</sup> <a name="time_of_user_creation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeOfUserCreation"></a>

```python
time_of_user_creation: str
```

- *Type:* str

---

##### `time_requested_for_future_access`<sup>Required</sup> <a name="time_requested_for_future_access" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.timeRequestedForFutureAccess"></a>

```python
time_requested_for_future_access: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `workflow_id`<sup>Required</sup> <a name="workflow_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.workflowId"></a>

```python
workflow_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItems</a>

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference <a name="DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection">DataOciOperatorAccessControlAccessRequestsAccessRequestCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.items"></a>

```python
items: DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList">DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOperatorAccessControlAccessRequestsAccessRequestCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsAccessRequestCollection">DataOciOperatorAccessControlAccessRequestsAccessRequestCollection</a>

---


### DataOciOperatorAccessControlAccessRequestsFilterList <a name="DataOciOperatorAccessControlAccessRequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOperatorAccessControlAccessRequestsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlAccessRequestsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>]]

---


### DataOciOperatorAccessControlAccessRequestsFilterOutputReference <a name="DataOciOperatorAccessControlAccessRequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_requests

dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOperatorAccessControlAccessRequestsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequests.DataOciOperatorAccessControlAccessRequestsFilter">DataOciOperatorAccessControlAccessRequestsFilter</a>]

---



