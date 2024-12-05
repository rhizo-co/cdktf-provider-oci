# `dataOciDatabaseManagementJobExecutionsStatuses` Submodule <a name="`dataOciDatabaseManagementJobExecutionsStatuses` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementJobExecutionsStatuses <a name="DataOciDatabaseManagementJobExecutionsStatuses" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses oci_database_management_job_executions_statuses}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_job_executions_statuses

dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses(
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
  end_time: str,
  start_time: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementJobExecutionsStatusesFilter]] = None,
  id: str = None,
  managed_database_group_id: str = None,
  managed_database_id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#compartment_id DataOciDatabaseManagementJobExecutionsStatuses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#end_time DataOciDatabaseManagementJobExecutionsStatuses#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#start_time DataOciDatabaseManagementJobExecutionsStatuses#start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter">DataOciDatabaseManagementJobExecutionsStatusesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#id DataOciDatabaseManagementJobExecutionsStatuses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.managedDatabaseGroupId">managed_database_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#managed_database_group_id DataOciDatabaseManagementJobExecutionsStatuses#managed_database_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#managed_database_id DataOciDatabaseManagementJobExecutionsStatuses#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#name DataOciDatabaseManagementJobExecutionsStatuses#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#compartment_id DataOciDatabaseManagementJobExecutionsStatuses#compartment_id}.

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.endTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#end_time DataOciDatabaseManagementJobExecutionsStatuses#end_time}.

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#start_time DataOciDatabaseManagementJobExecutionsStatuses#start_time}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter">DataOciDatabaseManagementJobExecutionsStatusesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#filter DataOciDatabaseManagementJobExecutionsStatuses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#id DataOciDatabaseManagementJobExecutionsStatuses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_database_group_id`<sup>Optional</sup> <a name="managed_database_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.managedDatabaseGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#managed_database_group_id DataOciDatabaseManagementJobExecutionsStatuses#managed_database_group_id}.

---

##### `managed_database_id`<sup>Optional</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#managed_database_id DataOciDatabaseManagementJobExecutionsStatuses#managed_database_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#name DataOciDatabaseManagementJobExecutionsStatuses#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetManagedDatabaseGroupId">reset_managed_database_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetManagedDatabaseId">reset_managed_database_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementJobExecutionsStatusesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter">DataOciDatabaseManagementJobExecutionsStatusesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_managed_database_group_id` <a name="reset_managed_database_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetManagedDatabaseGroupId"></a>

```python
def reset_managed_database_group_id() -> None
```

##### `reset_managed_database_id` <a name="reset_managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetManagedDatabaseId"></a>

```python
def reset_managed_database_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementJobExecutionsStatuses resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_job_executions_statuses

dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_job_executions_statuses

dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_job_executions_statuses

dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_job_executions_statuses

dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementJobExecutionsStatuses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementJobExecutionsStatuses to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementJobExecutionsStatuses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementJobExecutionsStatuses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList">DataOciDatabaseManagementJobExecutionsStatusesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.jobExecutionsStatusSummaryCollection">job_executions_status_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter">DataOciDatabaseManagementJobExecutionsStatusesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseGroupIdInput">managed_database_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseGroupId">managed_database_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.filter"></a>

```python
filter: DataOciDatabaseManagementJobExecutionsStatusesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList">DataOciDatabaseManagementJobExecutionsStatusesFilterList</a>

---

##### `job_executions_status_summary_collection`<sup>Required</sup> <a name="job_executions_status_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.jobExecutionsStatusSummaryCollection"></a>

```python
job_executions_status_summary_collection: DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementJobExecutionsStatusesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter">DataOciDatabaseManagementJobExecutionsStatusesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_database_group_id_input`<sup>Optional</sup> <a name="managed_database_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseGroupIdInput"></a>

```python
managed_database_group_id_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_database_group_id`<sup>Required</sup> <a name="managed_database_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseGroupId"></a>

```python
managed_database_group_id: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementJobExecutionsStatusesConfig <a name="DataOciDatabaseManagementJobExecutionsStatusesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_job_executions_statuses

dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  end_time: str,
  start_time: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementJobExecutionsStatusesFilter]] = None,
  id: str = None,
  managed_database_group_id: str = None,
  managed_database_id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#compartment_id DataOciDatabaseManagementJobExecutionsStatuses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#end_time DataOciDatabaseManagementJobExecutionsStatuses#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#start_time DataOciDatabaseManagementJobExecutionsStatuses#start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter">DataOciDatabaseManagementJobExecutionsStatusesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#id DataOciDatabaseManagementJobExecutionsStatuses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.managedDatabaseGroupId">managed_database_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#managed_database_group_id DataOciDatabaseManagementJobExecutionsStatuses#managed_database_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#managed_database_id DataOciDatabaseManagementJobExecutionsStatuses#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#name DataOciDatabaseManagementJobExecutionsStatuses#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#compartment_id DataOciDatabaseManagementJobExecutionsStatuses#compartment_id}.

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#end_time DataOciDatabaseManagementJobExecutionsStatuses#end_time}.

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#start_time DataOciDatabaseManagementJobExecutionsStatuses#start_time}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementJobExecutionsStatusesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter">DataOciDatabaseManagementJobExecutionsStatusesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#filter DataOciDatabaseManagementJobExecutionsStatuses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#id DataOciDatabaseManagementJobExecutionsStatuses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_database_group_id`<sup>Optional</sup> <a name="managed_database_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.managedDatabaseGroupId"></a>

```python
managed_database_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#managed_database_group_id DataOciDatabaseManagementJobExecutionsStatuses#managed_database_group_id}.

---

##### `managed_database_id`<sup>Optional</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#managed_database_id DataOciDatabaseManagementJobExecutionsStatuses#managed_database_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#name DataOciDatabaseManagementJobExecutionsStatuses#name}.

---

### DataOciDatabaseManagementJobExecutionsStatusesFilter <a name="DataOciDatabaseManagementJobExecutionsStatusesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_job_executions_statuses

dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#name DataOciDatabaseManagementJobExecutionsStatuses#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#values DataOciDatabaseManagementJobExecutionsStatuses#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#regex DataOciDatabaseManagementJobExecutionsStatuses#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#name DataOciDatabaseManagementJobExecutionsStatuses#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#values DataOciDatabaseManagementJobExecutionsStatuses#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#regex DataOciDatabaseManagementJobExecutionsStatuses#regex}.

---

### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_job_executions_statuses

dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection()
```


### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_job_executions_statuses

dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementJobExecutionsStatusesFilterList <a name="DataOciDatabaseManagementJobExecutionsStatusesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_job_executions_statuses

dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter">DataOciDatabaseManagementJobExecutionsStatusesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementJobExecutionsStatusesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter">DataOciDatabaseManagementJobExecutionsStatusesFilter</a>]]

---


### DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference <a name="DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_job_executions_statuses

dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter">DataOciDatabaseManagementJobExecutionsStatusesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementJobExecutionsStatusesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter">DataOciDatabaseManagementJobExecutionsStatusesFilter</a>]

---


### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_job_executions_statuses

dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_job_executions_statuses

dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems</a>

---


### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_job_executions_statuses

dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_job_executions_statuses

dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection</a>

---



