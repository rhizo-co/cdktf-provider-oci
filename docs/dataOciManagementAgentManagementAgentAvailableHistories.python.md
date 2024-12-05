# `dataOciManagementAgentManagementAgentAvailableHistories` Submodule <a name="`dataOciManagementAgentManagementAgentAvailableHistories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementAgentManagementAgentAvailableHistories <a name="DataOciManagementAgentManagementAgentAvailableHistories" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories oci_management_agent_management_agent_available_histories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_available_histories

dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  management_agent_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentAvailableHistoriesFilter]] = None,
  id: str = None,
  time_availability_status_ended_greater_than: str = None,
  time_availability_status_started_less_than: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#management_agent_id DataOciManagementAgentManagementAgentAvailableHistories#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#id DataOciManagementAgentManagementAgentAvailableHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.timeAvailabilityStatusEndedGreaterThan">time_availability_status_ended_greater_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_ended_greater_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_ended_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.timeAvailabilityStatusStartedLessThan">time_availability_status_started_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_started_less_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_started_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.managementAgentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#management_agent_id DataOciManagementAgentManagementAgentAvailableHistories#management_agent_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#filter DataOciManagementAgentManagementAgentAvailableHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#id DataOciManagementAgentManagementAgentAvailableHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_availability_status_ended_greater_than`<sup>Optional</sup> <a name="time_availability_status_ended_greater_than" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.timeAvailabilityStatusEndedGreaterThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_ended_greater_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_ended_greater_than}.

---

##### `time_availability_status_started_less_than`<sup>Optional</sup> <a name="time_availability_status_started_less_than" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.timeAvailabilityStatusStartedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_started_less_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_started_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusEndedGreaterThan">reset_time_availability_status_ended_greater_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusStartedLessThan">reset_time_availability_status_started_less_than</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentAvailableHistoriesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_time_availability_status_ended_greater_than` <a name="reset_time_availability_status_ended_greater_than" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusEndedGreaterThan"></a>

```python
def reset_time_availability_status_ended_greater_than() -> None
```

##### `reset_time_availability_status_started_less_than` <a name="reset_time_availability_status_started_less_than" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusStartedLessThan"></a>

```python
def reset_time_availability_status_started_less_than() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciManagementAgentManagementAgentAvailableHistories resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_available_histories

dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_available_histories

dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_available_histories

dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_available_histories

dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciManagementAgentManagementAgentAvailableHistories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciManagementAgentManagementAgentAvailableHistories to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciManagementAgentManagementAgentAvailableHistories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementAgentManagementAgentAvailableHistories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.availabilityHistories">availability_histories</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList">DataOciManagementAgentManagementAgentAvailableHistoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentIdInput">management_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThanInput">time_availability_status_ended_greater_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThanInput">time_availability_status_started_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThan">time_availability_status_ended_greater_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThan">time_availability_status_started_less_than</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `availability_histories`<sup>Required</sup> <a name="availability_histories" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.availabilityHistories"></a>

```python
availability_histories: DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filter"></a>

```python
filter: DataOciManagementAgentManagementAgentAvailableHistoriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList">DataOciManagementAgentManagementAgentAvailableHistoriesFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentAvailableHistoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `management_agent_id_input`<sup>Optional</sup> <a name="management_agent_id_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentIdInput"></a>

```python
management_agent_id_input: str
```

- *Type:* str

---

##### `time_availability_status_ended_greater_than_input`<sup>Optional</sup> <a name="time_availability_status_ended_greater_than_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThanInput"></a>

```python
time_availability_status_ended_greater_than_input: str
```

- *Type:* str

---

##### `time_availability_status_started_less_than_input`<sup>Optional</sup> <a name="time_availability_status_started_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThanInput"></a>

```python
time_availability_status_started_less_than_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `time_availability_status_ended_greater_than`<sup>Required</sup> <a name="time_availability_status_ended_greater_than" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThan"></a>

```python
time_availability_status_ended_greater_than: str
```

- *Type:* str

---

##### `time_availability_status_started_less_than`<sup>Required</sup> <a name="time_availability_status_started_less_than" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThan"></a>

```python
time_availability_status_started_less_than: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories <a name="DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_available_histories

dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories()
```


### DataOciManagementAgentManagementAgentAvailableHistoriesConfig <a name="DataOciManagementAgentManagementAgentAvailableHistoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_available_histories

dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  management_agent_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentAvailableHistoriesFilter]] = None,
  id: str = None,
  time_availability_status_ended_greater_than: str = None,
  time_availability_status_started_less_than: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#management_agent_id DataOciManagementAgentManagementAgentAvailableHistories#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#id DataOciManagementAgentManagementAgentAvailableHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusEndedGreaterThan">time_availability_status_ended_greater_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_ended_greater_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_ended_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusStartedLessThan">time_availability_status_started_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_started_less_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_started_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#management_agent_id DataOciManagementAgentManagementAgentAvailableHistories#management_agent_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentAvailableHistoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#filter DataOciManagementAgentManagementAgentAvailableHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#id DataOciManagementAgentManagementAgentAvailableHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_availability_status_ended_greater_than`<sup>Optional</sup> <a name="time_availability_status_ended_greater_than" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusEndedGreaterThan"></a>

```python
time_availability_status_ended_greater_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_ended_greater_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_ended_greater_than}.

---

##### `time_availability_status_started_less_than`<sup>Optional</sup> <a name="time_availability_status_started_less_than" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusStartedLessThan"></a>

```python
time_availability_status_started_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_started_less_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_started_less_than}.

---

### DataOciManagementAgentManagementAgentAvailableHistoriesFilter <a name="DataOciManagementAgentManagementAgentAvailableHistoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_available_histories

dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#name DataOciManagementAgentManagementAgentAvailableHistories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#values DataOciManagementAgentManagementAgentAvailableHistories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#regex DataOciManagementAgentManagementAgentAvailableHistories#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#name DataOciManagementAgentManagementAgentAvailableHistories#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#values DataOciManagementAgentManagementAgentAvailableHistories#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#regex DataOciManagementAgentManagementAgentAvailableHistories#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList <a name="DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_available_histories

dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference <a name="DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_available_histories

dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.availabilityStatus">availability_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusEnded">time_availability_status_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusStarted">time_availability_status_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_status`<sup>Required</sup> <a name="availability_status" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `time_availability_status_ended`<sup>Required</sup> <a name="time_availability_status_ended" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusEnded"></a>

```python
time_availability_status_ended: str
```

- *Type:* str

---

##### `time_availability_status_started`<sup>Required</sup> <a name="time_availability_status_started" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusStarted"></a>

```python
time_availability_status_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories</a>

---


### DataOciManagementAgentManagementAgentAvailableHistoriesFilterList <a name="DataOciManagementAgentManagementAgentAvailableHistoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_available_histories

dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentAvailableHistoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>]]

---


### DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference <a name="DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_available_histories

dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciManagementAgentManagementAgentAvailableHistoriesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>]

---



