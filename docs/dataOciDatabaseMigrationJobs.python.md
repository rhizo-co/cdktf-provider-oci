# `dataOciDatabaseMigrationJobs` Submodule <a name="`dataOciDatabaseMigrationJobs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMigrationJobs <a name="DataOciDatabaseMigrationJobs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs oci_database_migration_jobs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  migration_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseMigrationJobsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.migrationId">migration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#migration_id DataOciDatabaseMigrationJobs#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#display_name DataOciDatabaseMigrationJobs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter">DataOciDatabaseMigrationJobsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#id DataOciDatabaseMigrationJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#state DataOciDatabaseMigrationJobs#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `migration_id`<sup>Required</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.migrationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#migration_id DataOciDatabaseMigrationJobs#migration_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#display_name DataOciDatabaseMigrationJobs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter">DataOciDatabaseMigrationJobsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#filter DataOciDatabaseMigrationJobs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#id DataOciDatabaseMigrationJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#state DataOciDatabaseMigrationJobs#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseMigrationJobsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter">DataOciDatabaseMigrationJobsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseMigrationJobs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseMigrationJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseMigrationJobs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseMigrationJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMigrationJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList">DataOciDatabaseMigrationJobsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.jobCollection">job_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList">DataOciDatabaseMigrationJobsJobCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter">DataOciDatabaseMigrationJobsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.migrationIdInput">migration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.migrationId">migration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.filter"></a>

```python
filter: DataOciDatabaseMigrationJobsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList">DataOciDatabaseMigrationJobsFilterList</a>

---

##### `job_collection`<sup>Required</sup> <a name="job_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.jobCollection"></a>

```python
job_collection: DataOciDatabaseMigrationJobsJobCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList">DataOciDatabaseMigrationJobsJobCollectionList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseMigrationJobsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter">DataOciDatabaseMigrationJobsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `migration_id_input`<sup>Optional</sup> <a name="migration_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.migrationIdInput"></a>

```python
migration_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `migration_id`<sup>Required</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.migrationId"></a>

```python
migration_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMigrationJobsConfig <a name="DataOciDatabaseMigrationJobsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  migration_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseMigrationJobsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.migrationId">migration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#migration_id DataOciDatabaseMigrationJobs#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#display_name DataOciDatabaseMigrationJobs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter">DataOciDatabaseMigrationJobsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#id DataOciDatabaseMigrationJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#state DataOciDatabaseMigrationJobs#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `migration_id`<sup>Required</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.migrationId"></a>

```python
migration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#migration_id DataOciDatabaseMigrationJobs#migration_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#display_name DataOciDatabaseMigrationJobs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseMigrationJobsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter">DataOciDatabaseMigrationJobsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#filter DataOciDatabaseMigrationJobs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#id DataOciDatabaseMigrationJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#state DataOciDatabaseMigrationJobs#state}.

---

### DataOciDatabaseMigrationJobsFilter <a name="DataOciDatabaseMigrationJobsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#name DataOciDatabaseMigrationJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#values DataOciDatabaseMigrationJobs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#regex DataOciDatabaseMigrationJobs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#name DataOciDatabaseMigrationJobs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#values DataOciDatabaseMigrationJobs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_jobs#regex DataOciDatabaseMigrationJobs#regex}.

---

### DataOciDatabaseMigrationJobsJobCollection <a name="DataOciDatabaseMigrationJobsJobCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollection()
```


### DataOciDatabaseMigrationJobsJobCollectionItems <a name="DataOciDatabaseMigrationJobsJobCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItems()
```


### DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersions <a name="DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersions()
```


### DataOciDatabaseMigrationJobsJobCollectionItemsProgress <a name="DataOciDatabaseMigrationJobsJobCollectionItemsProgress" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgress()
```


### DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhases <a name="DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhases()
```


### DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtract <a name="DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtract" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtract"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtract.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtract()
```


### DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocation <a name="DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocation()
```


### DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjects <a name="DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjects.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjects()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMigrationJobsFilterList <a name="DataOciDatabaseMigrationJobsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationJobsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter">DataOciDatabaseMigrationJobsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseMigrationJobsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter">DataOciDatabaseMigrationJobsFilter</a>]]

---


### DataOciDatabaseMigrationJobsFilterOutputReference <a name="DataOciDatabaseMigrationJobsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter">DataOciDatabaseMigrationJobsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseMigrationJobsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsFilter">DataOciDatabaseMigrationJobsFilter</a>]

---


### DataOciDatabaseMigrationJobsJobCollectionItemsList <a name="DataOciDatabaseMigrationJobsJobCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference <a name="DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.migrationId">migration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.parameterFileVersions">parameter_file_versions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList">DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.progress">progress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList">DataOciDatabaseMigrationJobsJobCollectionItemsProgressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.suspendTrigger">suspend_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.unsupportedObjects">unsupported_objects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList">DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItems">DataOciDatabaseMigrationJobsJobCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `migration_id`<sup>Required</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.migrationId"></a>

```python
migration_id: str
```

- *Type:* str

---

##### `parameter_file_versions`<sup>Required</sup> <a name="parameter_file_versions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.parameterFileVersions"></a>

```python
parameter_file_versions: DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList">DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList</a>

---

##### `progress`<sup>Required</sup> <a name="progress" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.progress"></a>

```python
progress: DataOciDatabaseMigrationJobsJobCollectionItemsProgressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList">DataOciDatabaseMigrationJobsJobCollectionItemsProgressList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `suspend_trigger`<sup>Required</sup> <a name="suspend_trigger" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.suspendTrigger"></a>

```python
suspend_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unsupported_objects`<sup>Required</sup> <a name="unsupported_objects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.unsupportedObjects"></a>

```python
unsupported_objects: DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList">DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationJobsJobCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItems">DataOciDatabaseMigrationJobsJobCollectionItems</a>

---


### DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList <a name="DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference <a name="DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.isCurrent">is_current</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.isFactory">is_factory</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersions">DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_current`<sup>Required</sup> <a name="is_current" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.isCurrent"></a>

```python
is_current: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_factory`<sup>Required</sup> <a name="is_factory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.isFactory"></a>

```python
is_factory: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersions">DataOciDatabaseMigrationJobsJobCollectionItemsParameterFileVersions</a>

---


### DataOciDatabaseMigrationJobsJobCollectionItemsProgressList <a name="DataOciDatabaseMigrationJobsJobCollectionItemsProgressList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference <a name="DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.property.currentPhase">current_phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.property.currentStatus">current_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.property.phases">phases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList">DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgress">DataOciDatabaseMigrationJobsJobCollectionItemsProgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_phase`<sup>Required</sup> <a name="current_phase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.property.currentPhase"></a>

```python
current_phase: str
```

- *Type:* str

---

##### `current_status`<sup>Required</sup> <a name="current_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.property.currentStatus"></a>

```python
current_status: str
```

- *Type:* str

---

##### `phases`<sup>Required</sup> <a name="phases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.property.phases"></a>

```python
phases: DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList">DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationJobsJobCollectionItemsProgress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgress">DataOciDatabaseMigrationJobsJobCollectionItemsProgress</a>

---


### DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList <a name="DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference <a name="DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtract">DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtract</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtract
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtract">DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtract</a>

---


### DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList <a name="DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList <a name="DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference <a name="DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocation">DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocation">DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocation</a>

---


### DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference <a name="DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.durationInMs">duration_in_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.editableParameterFiles">editable_parameter_files</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.extract">extract</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList">DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.isAdvisorReportAvailable">is_advisor_report_available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.issue">issue</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.isSuspendAvailable">is_suspend_available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.logLocation">log_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList">DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.progress">progress</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhases">DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhases</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `duration_in_ms`<sup>Required</sup> <a name="duration_in_ms" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.durationInMs"></a>

```python
duration_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `editable_parameter_files`<sup>Required</sup> <a name="editable_parameter_files" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.editableParameterFiles"></a>

```python
editable_parameter_files: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `extract`<sup>Required</sup> <a name="extract" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.extract"></a>

```python
extract: DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList">DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesExtractList</a>

---

##### `is_advisor_report_available`<sup>Required</sup> <a name="is_advisor_report_available" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.isAdvisorReportAvailable"></a>

```python
is_advisor_report_available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `issue`<sup>Required</sup> <a name="issue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.issue"></a>

```python
issue: str
```

- *Type:* str

---

##### `is_suspend_available`<sup>Required</sup> <a name="is_suspend_available" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.isSuspendAvailable"></a>

```python
is_suspend_available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `log_location`<sup>Required</sup> <a name="log_location" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.logLocation"></a>

```python
log_location: DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList">DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesLogLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `progress`<sup>Required</sup> <a name="progress" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.progress"></a>

```python
progress: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhasesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhases
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhases">DataOciDatabaseMigrationJobsJobCollectionItemsProgressPhases</a>

---


### DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList <a name="DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference <a name="DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjects">DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjectsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjects
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjects">DataOciDatabaseMigrationJobsJobCollectionItemsUnsupportedObjects</a>

---


### DataOciDatabaseMigrationJobsJobCollectionList <a name="DataOciDatabaseMigrationJobsJobCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMigrationJobsJobCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMigrationJobsJobCollectionOutputReference <a name="DataOciDatabaseMigrationJobsJobCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_migration_jobs

dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList">DataOciDatabaseMigrationJobsJobCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollection">DataOciDatabaseMigrationJobsJobCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseMigrationJobsJobCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionItemsList">DataOciDatabaseMigrationJobsJobCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMigrationJobsJobCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobs.DataOciDatabaseMigrationJobsJobCollection">DataOciDatabaseMigrationJobsJobCollection</a>

---



