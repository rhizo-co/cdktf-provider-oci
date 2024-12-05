# `dataOciCloudMigrationsReplicationSchedules` Submodule <a name="`dataOciCloudMigrationsReplicationSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsReplicationSchedules <a name="DataOciCloudMigrationsReplicationSchedules" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules oci_cloud_migrations_replication_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_replication_schedules

dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsReplicationSchedulesFilter]] = None,
  id: str = None,
  replication_schedule_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#compartment_id DataOciCloudMigrationsReplicationSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#display_name DataOciCloudMigrationsReplicationSchedules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter">DataOciCloudMigrationsReplicationSchedulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#id DataOciCloudMigrationsReplicationSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.replicationScheduleId">replication_schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#replication_schedule_id DataOciCloudMigrationsReplicationSchedules#replication_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#state DataOciCloudMigrationsReplicationSchedules#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#compartment_id DataOciCloudMigrationsReplicationSchedules#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#display_name DataOciCloudMigrationsReplicationSchedules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter">DataOciCloudMigrationsReplicationSchedulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#filter DataOciCloudMigrationsReplicationSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#id DataOciCloudMigrationsReplicationSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replication_schedule_id`<sup>Optional</sup> <a name="replication_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.replicationScheduleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#replication_schedule_id DataOciCloudMigrationsReplicationSchedules#replication_schedule_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#state DataOciCloudMigrationsReplicationSchedules#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetReplicationScheduleId">reset_replication_schedule_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsReplicationSchedulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter">DataOciCloudMigrationsReplicationSchedulesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_replication_schedule_id` <a name="reset_replication_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetReplicationScheduleId"></a>

```python
def reset_replication_schedule_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsReplicationSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_replication_schedules

dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_replication_schedules

dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_replication_schedules

dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_replication_schedules

dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudMigrationsReplicationSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudMigrationsReplicationSchedules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudMigrationsReplicationSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsReplicationSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList">DataOciCloudMigrationsReplicationSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.replicationScheduleCollection">replication_schedule_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList">DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter">DataOciCloudMigrationsReplicationSchedulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.replicationScheduleIdInput">replication_schedule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.replicationScheduleId">replication_schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.filter"></a>

```python
filter: DataOciCloudMigrationsReplicationSchedulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList">DataOciCloudMigrationsReplicationSchedulesFilterList</a>

---

##### `replication_schedule_collection`<sup>Required</sup> <a name="replication_schedule_collection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.replicationScheduleCollection"></a>

```python
replication_schedule_collection: DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList">DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsReplicationSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter">DataOciCloudMigrationsReplicationSchedulesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `replication_schedule_id_input`<sup>Optional</sup> <a name="replication_schedule_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.replicationScheduleIdInput"></a>

```python
replication_schedule_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `replication_schedule_id`<sup>Required</sup> <a name="replication_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.replicationScheduleId"></a>

```python
replication_schedule_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsReplicationSchedulesConfig <a name="DataOciCloudMigrationsReplicationSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_replication_schedules

dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsReplicationSchedulesFilter]] = None,
  id: str = None,
  replication_schedule_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#compartment_id DataOciCloudMigrationsReplicationSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#display_name DataOciCloudMigrationsReplicationSchedules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter">DataOciCloudMigrationsReplicationSchedulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#id DataOciCloudMigrationsReplicationSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.replicationScheduleId">replication_schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#replication_schedule_id DataOciCloudMigrationsReplicationSchedules#replication_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#state DataOciCloudMigrationsReplicationSchedules#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#compartment_id DataOciCloudMigrationsReplicationSchedules#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#display_name DataOciCloudMigrationsReplicationSchedules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsReplicationSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter">DataOciCloudMigrationsReplicationSchedulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#filter DataOciCloudMigrationsReplicationSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#id DataOciCloudMigrationsReplicationSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replication_schedule_id`<sup>Optional</sup> <a name="replication_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.replicationScheduleId"></a>

```python
replication_schedule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#replication_schedule_id DataOciCloudMigrationsReplicationSchedules#replication_schedule_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#state DataOciCloudMigrationsReplicationSchedules#state}.

---

### DataOciCloudMigrationsReplicationSchedulesFilter <a name="DataOciCloudMigrationsReplicationSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_replication_schedules

dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#name DataOciCloudMigrationsReplicationSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#values DataOciCloudMigrationsReplicationSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#regex DataOciCloudMigrationsReplicationSchedules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#name DataOciCloudMigrationsReplicationSchedules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#values DataOciCloudMigrationsReplicationSchedules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_replication_schedules#regex DataOciCloudMigrationsReplicationSchedules#regex}.

---

### DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection <a name="DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_replication_schedules

dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection()
```


### DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems <a name="DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_replication_schedules

dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudMigrationsReplicationSchedulesFilterList <a name="DataOciCloudMigrationsReplicationSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_replication_schedules

dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsReplicationSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter">DataOciCloudMigrationsReplicationSchedulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCloudMigrationsReplicationSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter">DataOciCloudMigrationsReplicationSchedulesFilter</a>]]

---


### DataOciCloudMigrationsReplicationSchedulesFilterOutputReference <a name="DataOciCloudMigrationsReplicationSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_replication_schedules

dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter">DataOciCloudMigrationsReplicationSchedulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCloudMigrationsReplicationSchedulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesFilter">DataOciCloudMigrationsReplicationSchedulesFilter</a>]

---


### DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList <a name="DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_replication_schedules

dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference <a name="DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_replication_schedules

dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.executionRecurrences">execution_recurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems">DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `execution_recurrences`<sup>Required</sup> <a name="execution_recurrences" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.executionRecurrences"></a>

```python
execution_recurrences: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems">DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItems</a>

---


### DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList <a name="DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_replication_schedules

dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference <a name="DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_migrations_replication_schedules

dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList">DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection">DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.property.items"></a>

```python
items: DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList">DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsReplicationSchedules.DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection">DataOciCloudMigrationsReplicationSchedulesReplicationScheduleCollection</a>

---



