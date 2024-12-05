# `dataOciDataSafeTargetDatabases` Submodule <a name="`dataOciDataSafeTargetDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeTargetDatabases <a name="DataOciDataSafeTargetDatabases" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases oci_data_safe_target_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases(
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
  associated_resource_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  database_type: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesFilter]] = None,
  id: str = None,
  infrastructure_type: str = None,
  state: str = None,
  target_database_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#compartment_id DataOciDataSafeTargetDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#access_level DataOciDataSafeTargetDatabases#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.associatedResourceId">associated_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#associated_resource_id DataOciDataSafeTargetDatabases#associated_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#compartment_id_in_subtree DataOciDataSafeTargetDatabases#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.databaseType">database_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#database_type DataOciDataSafeTargetDatabases#database_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#display_name DataOciDataSafeTargetDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter">DataOciDataSafeTargetDatabasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#id DataOciDataSafeTargetDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.infrastructureType">infrastructure_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#infrastructure_type DataOciDataSafeTargetDatabases#infrastructure_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#state DataOciDataSafeTargetDatabases#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.targetDatabaseId">target_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#target_database_id DataOciDataSafeTargetDatabases#target_database_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#compartment_id DataOciDataSafeTargetDatabases#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#access_level DataOciDataSafeTargetDatabases#access_level}.

---

##### `associated_resource_id`<sup>Optional</sup> <a name="associated_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.associatedResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#associated_resource_id DataOciDataSafeTargetDatabases#associated_resource_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#compartment_id_in_subtree DataOciDataSafeTargetDatabases#compartment_id_in_subtree}.

---

##### `database_type`<sup>Optional</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.databaseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#database_type DataOciDataSafeTargetDatabases#database_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#display_name DataOciDataSafeTargetDatabases#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter">DataOciDataSafeTargetDatabasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#filter DataOciDataSafeTargetDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#id DataOciDataSafeTargetDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructure_type`<sup>Optional</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.infrastructureType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#infrastructure_type DataOciDataSafeTargetDatabases#infrastructure_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#state DataOciDataSafeTargetDatabases#state}.

---

##### `target_database_id`<sup>Optional</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.Initializer.parameter.targetDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#target_database_id DataOciDataSafeTargetDatabases#target_database_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetAssociatedResourceId">reset_associated_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetDatabaseType">reset_database_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetInfrastructureType">reset_infrastructure_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetTargetDatabaseId">reset_target_database_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter">DataOciDataSafeTargetDatabasesFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_associated_resource_id` <a name="reset_associated_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetAssociatedResourceId"></a>

```python
def reset_associated_resource_id() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_database_type` <a name="reset_database_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetDatabaseType"></a>

```python
def reset_database_type() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_infrastructure_type` <a name="reset_infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetInfrastructureType"></a>

```python
def reset_infrastructure_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_target_database_id` <a name="reset_target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.resetTargetDatabaseId"></a>

```python
def reset_target_database_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeTargetDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeTargetDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeTargetDatabases to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeTargetDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeTargetDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList">DataOciDataSafeTargetDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.targetDatabases">target_databases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList">DataOciDataSafeTargetDatabasesTargetDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.associatedResourceIdInput">associated_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.databaseTypeInput">database_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter">DataOciDataSafeTargetDatabasesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.infrastructureTypeInput">infrastructure_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.targetDatabaseIdInput">target_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.associatedResourceId">associated_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.targetDatabaseId">target_database_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.filter"></a>

```python
filter: DataOciDataSafeTargetDatabasesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList">DataOciDataSafeTargetDatabasesFilterList</a>

---

##### `target_databases`<sup>Required</sup> <a name="target_databases" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.targetDatabases"></a>

```python
target_databases: DataOciDataSafeTargetDatabasesTargetDatabasesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList">DataOciDataSafeTargetDatabasesTargetDatabasesList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `associated_resource_id_input`<sup>Optional</sup> <a name="associated_resource_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.associatedResourceIdInput"></a>

```python
associated_resource_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database_type_input`<sup>Optional</sup> <a name="database_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.databaseTypeInput"></a>

```python
database_type_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter">DataOciDataSafeTargetDatabasesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `infrastructure_type_input`<sup>Optional</sup> <a name="infrastructure_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.infrastructureTypeInput"></a>

```python
infrastructure_type_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `target_database_id_input`<sup>Optional</sup> <a name="target_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.targetDatabaseIdInput"></a>

```python
target_database_id_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `associated_resource_id`<sup>Required</sup> <a name="associated_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.associatedResourceId"></a>

```python
associated_resource_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_database_id`<sup>Required</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.targetDatabaseId"></a>

```python
target_database_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabases.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeTargetDatabasesConfig <a name="DataOciDataSafeTargetDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  access_level: str = None,
  associated_resource_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  database_type: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesFilter]] = None,
  id: str = None,
  infrastructure_type: str = None,
  state: str = None,
  target_database_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#compartment_id DataOciDataSafeTargetDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#access_level DataOciDataSafeTargetDatabases#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.associatedResourceId">associated_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#associated_resource_id DataOciDataSafeTargetDatabases#associated_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#compartment_id_in_subtree DataOciDataSafeTargetDatabases#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.databaseType">database_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#database_type DataOciDataSafeTargetDatabases#database_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#display_name DataOciDataSafeTargetDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter">DataOciDataSafeTargetDatabasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#id DataOciDataSafeTargetDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#infrastructure_type DataOciDataSafeTargetDatabases#infrastructure_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#state DataOciDataSafeTargetDatabases#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.targetDatabaseId">target_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#target_database_id DataOciDataSafeTargetDatabases#target_database_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#compartment_id DataOciDataSafeTargetDatabases#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#access_level DataOciDataSafeTargetDatabases#access_level}.

---

##### `associated_resource_id`<sup>Optional</sup> <a name="associated_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.associatedResourceId"></a>

```python
associated_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#associated_resource_id DataOciDataSafeTargetDatabases#associated_resource_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#compartment_id_in_subtree DataOciDataSafeTargetDatabases#compartment_id_in_subtree}.

---

##### `database_type`<sup>Optional</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#database_type DataOciDataSafeTargetDatabases#database_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#display_name DataOciDataSafeTargetDatabases#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter">DataOciDataSafeTargetDatabasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#filter DataOciDataSafeTargetDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#id DataOciDataSafeTargetDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructure_type`<sup>Optional</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#infrastructure_type DataOciDataSafeTargetDatabases#infrastructure_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#state DataOciDataSafeTargetDatabases#state}.

---

##### `target_database_id`<sup>Optional</sup> <a name="target_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesConfig.property.targetDatabaseId"></a>

```python
target_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#target_database_id DataOciDataSafeTargetDatabases#target_database_id}.

---

### DataOciDataSafeTargetDatabasesFilter <a name="DataOciDataSafeTargetDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#name DataOciDataSafeTargetDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#values DataOciDataSafeTargetDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#regex DataOciDataSafeTargetDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#name DataOciDataSafeTargetDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#values DataOciDataSafeTargetDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_databases#regex DataOciDataSafeTargetDatabases#regex}.

---

### DataOciDataSafeTargetDatabasesTargetDatabases <a name="DataOciDataSafeTargetDatabasesTargetDatabases" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabases()
```


### DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOption <a name="DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOption" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOption"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOption.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOption()
```


### DataOciDataSafeTargetDatabasesTargetDatabasesCredentials <a name="DataOciDataSafeTargetDatabasesTargetDatabasesCredentials" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentials()
```


### DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetails <a name="DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetails()
```


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetails <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetails()
```


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetails <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetails()
```


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfig <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfig()
```


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabases <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabases" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabases()
```


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetails <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetails()
```


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfig <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfig()
```


### DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfig <a name="DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeTargetDatabasesFilterList <a name="DataOciDataSafeTargetDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter">DataOciDataSafeTargetDatabasesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeTargetDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter">DataOciDataSafeTargetDatabasesFilter</a>]]

---


### DataOciDataSafeTargetDatabasesFilterOutputReference <a name="DataOciDataSafeTargetDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter">DataOciDataSafeTargetDatabasesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeTargetDatabasesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesFilter">DataOciDataSafeTargetDatabasesFilter</a>]

---


### DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList <a name="DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference <a name="DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.property.datasafePrivateEndpointId">datasafe_private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.property.onPremConnectorId">on_prem_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOption">DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `datasafe_private_endpoint_id`<sup>Required</sup> <a name="datasafe_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.property.datasafePrivateEndpointId"></a>

```python
datasafe_private_endpoint_id: str
```

- *Type:* str

---

##### `on_prem_connector_id`<sup>Required</sup> <a name="on_prem_connector_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.property.onPremConnectorId"></a>

```python
on_prem_connector_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOption
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOption">DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOption</a>

---


### DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList <a name="DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference <a name="DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentials">DataOciDataSafeTargetDatabasesTargetDatabasesCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasesTargetDatabasesCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentials">DataOciDataSafeTargetDatabasesTargetDatabasesCredentials</a>

---


### DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList <a name="DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference <a name="DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetails">DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetails">DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetails</a>

---


### DataOciDataSafeTargetDatabasesTargetDatabasesList <a name="DataOciDataSafeTargetDatabasesTargetDatabasesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference <a name="DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.associatedResourceIds">associated_resource_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.connectionOption">connection_option</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList">DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList">DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.databaseDetails">database_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList">DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.peerTargetDatabaseDetails">peer_target_database_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.peerTargetDatabases">peer_target_databases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList">DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabases">DataOciDataSafeTargetDatabasesTargetDatabases</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associated_resource_ids`<sup>Required</sup> <a name="associated_resource_ids" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.associatedResourceIds"></a>

```python
associated_resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_option`<sup>Required</sup> <a name="connection_option" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.connectionOption"></a>

```python
connection_option: DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList">DataOciDataSafeTargetDatabasesTargetDatabasesConnectionOptionList</a>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.credentials"></a>

```python
credentials: DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList">DataOciDataSafeTargetDatabasesTargetDatabasesCredentialsList</a>

---

##### `database_details`<sup>Required</sup> <a name="database_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.databaseDetails"></a>

```python
database_details: DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList">DataOciDataSafeTargetDatabasesTargetDatabasesDatabaseDetailsList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `peer_target_database_details`<sup>Required</sup> <a name="peer_target_database_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.peerTargetDatabaseDetails"></a>

```python
peer_target_database_details: DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList</a>

---

##### `peer_target_databases`<sup>Required</sup> <a name="peer_target_databases" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.peerTargetDatabases"></a>

```python
peer_target_databases: DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.tlsConfig"></a>

```python
tls_config: DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList">DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasesTargetDatabases
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabases">DataOciDataSafeTargetDatabasesTargetDatabases</a>

---


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetails">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetails">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetails</a>

---


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.property.databaseDetails">database_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.property.dataguardAssociationId">dataguard_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetails">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_details`<sup>Required</sup> <a name="database_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.property.databaseDetails"></a>

```python
database_details: DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsDatabaseDetailsList</a>

---

##### `dataguard_association_id`<sup>Required</sup> <a name="dataguard_association_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.property.dataguardAssociationId"></a>

```python
dataguard_association_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.property.tlsConfig"></a>

```python
tls_config: DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetails">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetails</a>

---


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.property.certificateStoreType">certificate_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.property.keyStoreContent">key_store_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.property.storePassword">store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.property.trustStoreContent">trust_store_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfig">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_store_type`<sup>Required</sup> <a name="certificate_store_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.property.certificateStoreType"></a>

```python
certificate_store_type: str
```

- *Type:* str

---

##### `key_store_content`<sup>Required</sup> <a name="key_store_content" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.property.keyStoreContent"></a>

```python
key_store_content: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `store_password`<sup>Required</sup> <a name="store_password" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.property.storePassword"></a>

```python
store_password: str
```

- *Type:* str

---

##### `trust_store_content`<sup>Required</sup> <a name="trust_store_content" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.property.trustStoreContent"></a>

```python
trust_store_content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfig">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabaseDetailsTlsConfig</a>

---


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetails">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetails">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetails</a>

---


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.databaseDetails">database_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.databaseUniqueName">database_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.dataguardAssociationId">dataguard_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.key">key</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabases">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabases</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_details`<sup>Required</sup> <a name="database_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.databaseDetails"></a>

```python
database_details: DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesDatabaseDetailsList</a>

---

##### `database_unique_name`<sup>Required</sup> <a name="database_unique_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.databaseUniqueName"></a>

```python
database_unique_name: str
```

- *Type:* str

---

##### `dataguard_association_id`<sup>Required</sup> <a name="dataguard_association_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.dataguardAssociationId"></a>

```python
dataguard_association_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.key"></a>

```python
key: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.tlsConfig"></a>

```python
tls_config: DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabases
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabases">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabases</a>

---


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference <a name="DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.property.certificateStoreType">certificate_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.property.keyStoreContent">key_store_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.property.storePassword">store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.property.trustStoreContent">trust_store_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfig">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_store_type`<sup>Required</sup> <a name="certificate_store_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.property.certificateStoreType"></a>

```python
certificate_store_type: str
```

- *Type:* str

---

##### `key_store_content`<sup>Required</sup> <a name="key_store_content" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.property.keyStoreContent"></a>

```python
key_store_content: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `store_password`<sup>Required</sup> <a name="store_password" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.property.storePassword"></a>

```python
store_password: str
```

- *Type:* str

---

##### `trust_store_content`<sup>Required</sup> <a name="trust_store_content" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.property.trustStoreContent"></a>

```python
trust_store_content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfig">DataOciDataSafeTargetDatabasesTargetDatabasesPeerTargetDatabasesTlsConfig</a>

---


### DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList <a name="DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference <a name="DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_target_databases

dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.property.certificateStoreType">certificate_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.property.keyStoreContent">key_store_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.property.storePassword">store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.property.trustStoreContent">trust_store_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfig">DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_store_type`<sup>Required</sup> <a name="certificate_store_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.property.certificateStoreType"></a>

```python
certificate_store_type: str
```

- *Type:* str

---

##### `key_store_content`<sup>Required</sup> <a name="key_store_content" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.property.keyStoreContent"></a>

```python
key_store_content: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `store_password`<sup>Required</sup> <a name="store_password" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.property.storePassword"></a>

```python
store_password: str
```

- *Type:* str

---

##### `trust_store_content`<sup>Required</sup> <a name="trust_store_content" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.property.trustStoreContent"></a>

```python
trust_store_content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabases.DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfig">DataOciDataSafeTargetDatabasesTargetDatabasesTlsConfig</a>

---



