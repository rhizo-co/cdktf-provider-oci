# `dataOciDataSafeDatabaseSecurityConfigs` Submodule <a name="`dataOciDataSafeDatabaseSecurityConfigs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeDatabaseSecurityConfigs <a name="DataOciDataSafeDatabaseSecurityConfigs" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs oci_data_safe_database_security_configs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs(
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
  database_security_config_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeDatabaseSecurityConfigsFilter]] = None,
  id: str = None,
  state: str = None,
  target_id: str = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id DataOciDataSafeDatabaseSecurityConfigs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#access_level DataOciDataSafeDatabaseSecurityConfigs#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id_in_subtree DataOciDataSafeDatabaseSecurityConfigs#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.databaseSecurityConfigId">database_security_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#database_security_config_id DataOciDataSafeDatabaseSecurityConfigs#database_security_config_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#display_name DataOciDataSafeDatabaseSecurityConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#id DataOciDataSafeDatabaseSecurityConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#state DataOciDataSafeDatabaseSecurityConfigs#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#target_id DataOciDataSafeDatabaseSecurityConfigs#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_greater_than_or_equal_to DataOciDataSafeDatabaseSecurityConfigs#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_less_than DataOciDataSafeDatabaseSecurityConfigs#time_created_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id DataOciDataSafeDatabaseSecurityConfigs#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#access_level DataOciDataSafeDatabaseSecurityConfigs#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id_in_subtree DataOciDataSafeDatabaseSecurityConfigs#compartment_id_in_subtree}.

---

##### `database_security_config_id`<sup>Optional</sup> <a name="database_security_config_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.databaseSecurityConfigId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#database_security_config_id DataOciDataSafeDatabaseSecurityConfigs#database_security_config_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#display_name DataOciDataSafeDatabaseSecurityConfigs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#filter DataOciDataSafeDatabaseSecurityConfigs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#id DataOciDataSafeDatabaseSecurityConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#state DataOciDataSafeDatabaseSecurityConfigs#state}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#target_id DataOciDataSafeDatabaseSecurityConfigs#target_id}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.timeCreatedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_greater_than_or_equal_to DataOciDataSafeDatabaseSecurityConfigs#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.timeCreatedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_less_than DataOciDataSafeDatabaseSecurityConfigs#time_created_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetDatabaseSecurityConfigId">reset_database_security_config_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTargetId">reset_target_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTimeCreatedGreaterThanOrEqualTo">reset_time_created_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTimeCreatedLessThan">reset_time_created_less_than</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeDatabaseSecurityConfigsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_database_security_config_id` <a name="reset_database_security_config_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetDatabaseSecurityConfigId"></a>

```python
def reset_database_security_config_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_target_id` <a name="reset_target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTargetId"></a>

```python
def reset_target_id() -> None
```

##### `reset_time_created_greater_than_or_equal_to` <a name="reset_time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTimeCreatedGreaterThanOrEqualTo"></a>

```python
def reset_time_created_greater_than_or_equal_to() -> None
```

##### `reset_time_created_less_than` <a name="reset_time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTimeCreatedLessThan"></a>

```python
def reset_time_created_less_than() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeDatabaseSecurityConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeDatabaseSecurityConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeDatabaseSecurityConfigs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeDatabaseSecurityConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeDatabaseSecurityConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigCollection">database_security_config_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList">DataOciDataSafeDatabaseSecurityConfigsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigIdInput">database_security_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedGreaterThanOrEqualToInput">time_created_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedLessThanInput">time_created_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigId">database_security_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `database_security_config_collection`<sup>Required</sup> <a name="database_security_config_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigCollection"></a>

```python
database_security_config_collection: DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.filter"></a>

```python
filter: DataOciDataSafeDatabaseSecurityConfigsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList">DataOciDataSafeDatabaseSecurityConfigsFilterList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database_security_config_id_input`<sup>Optional</sup> <a name="database_security_config_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigIdInput"></a>

```python
database_security_config_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeDatabaseSecurityConfigsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `time_created_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedGreaterThanOrEqualToInput"></a>

```python
time_created_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_created_less_than_input`<sup>Optional</sup> <a name="time_created_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedLessThanInput"></a>

```python
time_created_less_than_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database_security_config_id`<sup>Required</sup> <a name="database_security_config_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigId"></a>

```python
database_security_config_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_created_greater_than_or_equal_to`<sup>Required</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_created_less_than`<sup>Required</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeDatabaseSecurityConfigsConfig <a name="DataOciDataSafeDatabaseSecurityConfigsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig(
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
  database_security_config_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeDatabaseSecurityConfigsFilter]] = None,
  id: str = None,
  state: str = None,
  target_id: str = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id DataOciDataSafeDatabaseSecurityConfigs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#access_level DataOciDataSafeDatabaseSecurityConfigs#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id_in_subtree DataOciDataSafeDatabaseSecurityConfigs#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.databaseSecurityConfigId">database_security_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#database_security_config_id DataOciDataSafeDatabaseSecurityConfigs#database_security_config_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#display_name DataOciDataSafeDatabaseSecurityConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#id DataOciDataSafeDatabaseSecurityConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#state DataOciDataSafeDatabaseSecurityConfigs#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#target_id DataOciDataSafeDatabaseSecurityConfigs#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_greater_than_or_equal_to DataOciDataSafeDatabaseSecurityConfigs#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_less_than DataOciDataSafeDatabaseSecurityConfigs#time_created_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id DataOciDataSafeDatabaseSecurityConfigs#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#access_level DataOciDataSafeDatabaseSecurityConfigs#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id_in_subtree DataOciDataSafeDatabaseSecurityConfigs#compartment_id_in_subtree}.

---

##### `database_security_config_id`<sup>Optional</sup> <a name="database_security_config_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.databaseSecurityConfigId"></a>

```python
database_security_config_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#database_security_config_id DataOciDataSafeDatabaseSecurityConfigs#database_security_config_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#display_name DataOciDataSafeDatabaseSecurityConfigs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeDatabaseSecurityConfigsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#filter DataOciDataSafeDatabaseSecurityConfigs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#id DataOciDataSafeDatabaseSecurityConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#state DataOciDataSafeDatabaseSecurityConfigs#state}.

---

##### `target_id`<sup>Optional</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#target_id DataOciDataSafeDatabaseSecurityConfigs#target_id}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_greater_than_or_equal_to DataOciDataSafeDatabaseSecurityConfigs#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_less_than DataOciDataSafeDatabaseSecurityConfigs#time_created_less_than}.

---

### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection()
```


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems()
```


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig()
```


### DataOciDataSafeDatabaseSecurityConfigsFilter <a name="DataOciDataSafeDatabaseSecurityConfigsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#name DataOciDataSafeDatabaseSecurityConfigs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#values DataOciDataSafeDatabaseSecurityConfigs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#regex DataOciDataSafeDatabaseSecurityConfigs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#name DataOciDataSafeDatabaseSecurityConfigs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#values DataOciDataSafeDatabaseSecurityConfigs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#regex DataOciDataSafeDatabaseSecurityConfigs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.databaseSecurityConfigId">database_security_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.refreshTrigger">refresh_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.sqlFirewallConfig">sql_firewall_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeLastRefreshed">time_last_refreshed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `database_security_config_id`<sup>Required</sup> <a name="database_security_config_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.databaseSecurityConfigId"></a>

```python
database_security_config_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `refresh_trigger`<sup>Required</sup> <a name="refresh_trigger" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.refreshTrigger"></a>

```python
refresh_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sql_firewall_config`<sup>Required</sup> <a name="sql_firewall_config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.sqlFirewallConfig"></a>

```python
sql_firewall_config: DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_refreshed`<sup>Required</sup> <a name="time_last_refreshed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeLastRefreshed"></a>

```python
time_last_refreshed: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems</a>

---


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.excludeJob">exclude_job</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.timeStatusUpdated">time_status_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.violationLogAutoPurge">violation_log_auto_purge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_job`<sup>Required</sup> <a name="exclude_job" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.excludeJob"></a>

```python
exclude_job: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_status_updated`<sup>Required</sup> <a name="time_status_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.timeStatusUpdated"></a>

```python
time_status_updated: str
```

- *Type:* str

---

##### `violation_log_auto_purge`<sup>Required</sup> <a name="violation_log_auto_purge" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.violationLogAutoPurge"></a>

```python
violation_log_auto_purge: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig</a>

---


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection</a>

---


### DataOciDataSafeDatabaseSecurityConfigsFilterList <a name="DataOciDataSafeDatabaseSecurityConfigsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeDatabaseSecurityConfigsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>]]

---


### DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference <a name="DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_configs

dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeDatabaseSecurityConfigsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>]

---



