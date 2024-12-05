# `dataOciDatabaseAutonomousDatabases` Submodule <a name="`dataOciDatabaseAutonomousDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabases <a name="DataOciDatabaseAutonomousDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases oci_database_autonomous_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases(
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
  autonomous_container_database_id: str = None,
  db_version: str = None,
  db_workload: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabasesFilter]] = None,
  id: str = None,
  infrastructure_type: str = None,
  is_data_guard_enabled: typing.Union[bool, IResolvable] = None,
  is_free_tier: typing.Union[bool, IResolvable] = None,
  is_refreshable_clone: typing.Union[bool, IResolvable] = None,
  is_resource_pool_leader: typing.Union[bool, IResolvable] = None,
  lifecycle_state_not_equal_to: str = None,
  resource_pool_leader_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#compartment_id DataOciDatabaseAutonomousDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#autonomous_container_database_id DataOciDatabaseAutonomousDatabases#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.dbVersion">db_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#db_version DataOciDatabaseAutonomousDatabases#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.dbWorkload">db_workload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#db_workload DataOciDatabaseAutonomousDatabases#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#display_name DataOciDatabaseAutonomousDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter">DataOciDatabaseAutonomousDatabasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#id DataOciDatabaseAutonomousDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.infrastructureType">infrastructure_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#infrastructure_type DataOciDatabaseAutonomousDatabases#infrastructure_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.isDataGuardEnabled">is_data_guard_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_data_guard_enabled DataOciDatabaseAutonomousDatabases#is_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.isFreeTier">is_free_tier</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_free_tier DataOciDatabaseAutonomousDatabases#is_free_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.isRefreshableClone">is_refreshable_clone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_refreshable_clone DataOciDatabaseAutonomousDatabases#is_refreshable_clone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.isResourcePoolLeader">is_resource_pool_leader</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_resource_pool_leader DataOciDatabaseAutonomousDatabases#is_resource_pool_leader}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.lifecycleStateNotEqualTo">lifecycle_state_not_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#lifecycle_state_not_equal_to DataOciDatabaseAutonomousDatabases#lifecycle_state_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.resourcePoolLeaderId">resource_pool_leader_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#resource_pool_leader_id DataOciDatabaseAutonomousDatabases#resource_pool_leader_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#state DataOciDatabaseAutonomousDatabases#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#compartment_id DataOciDatabaseAutonomousDatabases#compartment_id}.

---

##### `autonomous_container_database_id`<sup>Optional</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.autonomousContainerDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#autonomous_container_database_id DataOciDatabaseAutonomousDatabases#autonomous_container_database_id}.

---

##### `db_version`<sup>Optional</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.dbVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#db_version DataOciDatabaseAutonomousDatabases#db_version}.

---

##### `db_workload`<sup>Optional</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.dbWorkload"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#db_workload DataOciDatabaseAutonomousDatabases#db_workload}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#display_name DataOciDatabaseAutonomousDatabases#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter">DataOciDatabaseAutonomousDatabasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#filter DataOciDatabaseAutonomousDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#id DataOciDatabaseAutonomousDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructure_type`<sup>Optional</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.infrastructureType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#infrastructure_type DataOciDatabaseAutonomousDatabases#infrastructure_type}.

---

##### `is_data_guard_enabled`<sup>Optional</sup> <a name="is_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.isDataGuardEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_data_guard_enabled DataOciDatabaseAutonomousDatabases#is_data_guard_enabled}.

---

##### `is_free_tier`<sup>Optional</sup> <a name="is_free_tier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.isFreeTier"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_free_tier DataOciDatabaseAutonomousDatabases#is_free_tier}.

---

##### `is_refreshable_clone`<sup>Optional</sup> <a name="is_refreshable_clone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.isRefreshableClone"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_refreshable_clone DataOciDatabaseAutonomousDatabases#is_refreshable_clone}.

---

##### `is_resource_pool_leader`<sup>Optional</sup> <a name="is_resource_pool_leader" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.isResourcePoolLeader"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_resource_pool_leader DataOciDatabaseAutonomousDatabases#is_resource_pool_leader}.

---

##### `lifecycle_state_not_equal_to`<sup>Optional</sup> <a name="lifecycle_state_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.lifecycleStateNotEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#lifecycle_state_not_equal_to DataOciDatabaseAutonomousDatabases#lifecycle_state_not_equal_to}.

---

##### `resource_pool_leader_id`<sup>Optional</sup> <a name="resource_pool_leader_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.resourcePoolLeaderId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#resource_pool_leader_id DataOciDatabaseAutonomousDatabases#resource_pool_leader_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#state DataOciDatabaseAutonomousDatabases#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetAutonomousContainerDatabaseId">reset_autonomous_container_database_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDbVersion">reset_db_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDbWorkload">reset_db_workload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetInfrastructureType">reset_infrastructure_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsDataGuardEnabled">reset_is_data_guard_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsFreeTier">reset_is_free_tier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsRefreshableClone">reset_is_refreshable_clone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsResourcePoolLeader">reset_is_resource_pool_leader</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetLifecycleStateNotEqualTo">reset_lifecycle_state_not_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetResourcePoolLeaderId">reset_resource_pool_leader_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabasesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter">DataOciDatabaseAutonomousDatabasesFilter</a>]]

---

##### `reset_autonomous_container_database_id` <a name="reset_autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetAutonomousContainerDatabaseId"></a>

```python
def reset_autonomous_container_database_id() -> None
```

##### `reset_db_version` <a name="reset_db_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDbVersion"></a>

```python
def reset_db_version() -> None
```

##### `reset_db_workload` <a name="reset_db_workload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDbWorkload"></a>

```python
def reset_db_workload() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_infrastructure_type` <a name="reset_infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetInfrastructureType"></a>

```python
def reset_infrastructure_type() -> None
```

##### `reset_is_data_guard_enabled` <a name="reset_is_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsDataGuardEnabled"></a>

```python
def reset_is_data_guard_enabled() -> None
```

##### `reset_is_free_tier` <a name="reset_is_free_tier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsFreeTier"></a>

```python
def reset_is_free_tier() -> None
```

##### `reset_is_refreshable_clone` <a name="reset_is_refreshable_clone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsRefreshableClone"></a>

```python
def reset_is_refreshable_clone() -> None
```

##### `reset_is_resource_pool_leader` <a name="reset_is_resource_pool_leader" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetIsResourcePoolLeader"></a>

```python
def reset_is_resource_pool_leader() -> None
```

##### `reset_lifecycle_state_not_equal_to` <a name="reset_lifecycle_state_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetLifecycleStateNotEqualTo"></a>

```python
def reset_lifecycle_state_not_equal_to() -> None
```

##### `reset_resource_pool_leader_id` <a name="reset_resource_pool_leader_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetResourcePoolLeaderId"></a>

```python
def reset_resource_pool_leader_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabases resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabases to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseAutonomousDatabases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousDatabases">autonomous_databases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList">DataOciDatabaseAutonomousDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousContainerDatabaseIdInput">autonomous_container_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbVersionInput">db_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbWorkloadInput">db_workload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter">DataOciDatabaseAutonomousDatabasesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.infrastructureTypeInput">infrastructure_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isDataGuardEnabledInput">is_data_guard_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isFreeTierInput">is_free_tier_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isRefreshableCloneInput">is_refreshable_clone_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isResourcePoolLeaderInput">is_resource_pool_leader_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycleStateNotEqualToInput">lifecycle_state_not_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.resourcePoolLeaderIdInput">resource_pool_leader_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbWorkload">db_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isDataGuardEnabled">is_data_guard_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isFreeTier">is_free_tier</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isRefreshableClone">is_refreshable_clone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isResourcePoolLeader">is_resource_pool_leader</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycleStateNotEqualTo">lifecycle_state_not_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.resourcePoolLeaderId">resource_pool_leader_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomous_databases`<sup>Required</sup> <a name="autonomous_databases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousDatabases"></a>

```python
autonomous_databases: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.filter"></a>

```python
filter: DataOciDatabaseAutonomousDatabasesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList">DataOciDatabaseAutonomousDatabasesFilterList</a>

---

##### `autonomous_container_database_id_input`<sup>Optional</sup> <a name="autonomous_container_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousContainerDatabaseIdInput"></a>

```python
autonomous_container_database_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `db_version_input`<sup>Optional</sup> <a name="db_version_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbVersionInput"></a>

```python
db_version_input: str
```

- *Type:* str

---

##### `db_workload_input`<sup>Optional</sup> <a name="db_workload_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbWorkloadInput"></a>

```python
db_workload_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter">DataOciDatabaseAutonomousDatabasesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `infrastructure_type_input`<sup>Optional</sup> <a name="infrastructure_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.infrastructureTypeInput"></a>

```python
infrastructure_type_input: str
```

- *Type:* str

---

##### `is_data_guard_enabled_input`<sup>Optional</sup> <a name="is_data_guard_enabled_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isDataGuardEnabledInput"></a>

```python
is_data_guard_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_free_tier_input`<sup>Optional</sup> <a name="is_free_tier_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isFreeTierInput"></a>

```python
is_free_tier_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_refreshable_clone_input`<sup>Optional</sup> <a name="is_refreshable_clone_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isRefreshableCloneInput"></a>

```python
is_refreshable_clone_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_resource_pool_leader_input`<sup>Optional</sup> <a name="is_resource_pool_leader_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isResourcePoolLeaderInput"></a>

```python
is_resource_pool_leader_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lifecycle_state_not_equal_to_input`<sup>Optional</sup> <a name="lifecycle_state_not_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycleStateNotEqualToInput"></a>

```python
lifecycle_state_not_equal_to_input: str
```

- *Type:* str

---

##### `resource_pool_leader_id_input`<sup>Optional</sup> <a name="resource_pool_leader_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.resourcePoolLeaderIdInput"></a>

```python
resource_pool_leader_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.autonomousContainerDatabaseId"></a>

```python
autonomous_container_database_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `db_workload`<sup>Required</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

---

##### `is_data_guard_enabled`<sup>Required</sup> <a name="is_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isDataGuardEnabled"></a>

```python
is_data_guard_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_free_tier`<sup>Required</sup> <a name="is_free_tier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isFreeTier"></a>

```python
is_free_tier: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_refreshable_clone`<sup>Required</sup> <a name="is_refreshable_clone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isRefreshableClone"></a>

```python
is_refreshable_clone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_resource_pool_leader`<sup>Required</sup> <a name="is_resource_pool_leader" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.isResourcePoolLeader"></a>

```python
is_resource_pool_leader: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lifecycle_state_not_equal_to`<sup>Required</sup> <a name="lifecycle_state_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.lifecycleStateNotEqualTo"></a>

```python
lifecycle_state_not_equal_to: str
```

- *Type:* str

---

##### `resource_pool_leader_id`<sup>Required</sup> <a name="resource_pool_leader_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.resourcePoolLeaderId"></a>

```python
resource_pool_leader_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabases.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabasesAutonomousDatabases <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabases()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek()
```


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb()
```


### DataOciDatabaseAutonomousDatabasesConfig <a name="DataOciDatabaseAutonomousDatabasesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  autonomous_container_database_id: str = None,
  db_version: str = None,
  db_workload: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabasesFilter]] = None,
  id: str = None,
  infrastructure_type: str = None,
  is_data_guard_enabled: typing.Union[bool, IResolvable] = None,
  is_free_tier: typing.Union[bool, IResolvable] = None,
  is_refreshable_clone: typing.Union[bool, IResolvable] = None,
  is_resource_pool_leader: typing.Union[bool, IResolvable] = None,
  lifecycle_state_not_equal_to: str = None,
  resource_pool_leader_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#compartment_id DataOciDatabaseAutonomousDatabases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#autonomous_container_database_id DataOciDatabaseAutonomousDatabases#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dbVersion">db_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#db_version DataOciDatabaseAutonomousDatabases#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dbWorkload">db_workload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#db_workload DataOciDatabaseAutonomousDatabases#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#display_name DataOciDatabaseAutonomousDatabases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter">DataOciDatabaseAutonomousDatabasesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#id DataOciDatabaseAutonomousDatabases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#infrastructure_type DataOciDatabaseAutonomousDatabases#infrastructure_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isDataGuardEnabled">is_data_guard_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_data_guard_enabled DataOciDatabaseAutonomousDatabases#is_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isFreeTier">is_free_tier</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_free_tier DataOciDatabaseAutonomousDatabases#is_free_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isRefreshableClone">is_refreshable_clone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_refreshable_clone DataOciDatabaseAutonomousDatabases#is_refreshable_clone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isResourcePoolLeader">is_resource_pool_leader</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_resource_pool_leader DataOciDatabaseAutonomousDatabases#is_resource_pool_leader}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.lifecycleStateNotEqualTo">lifecycle_state_not_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#lifecycle_state_not_equal_to DataOciDatabaseAutonomousDatabases#lifecycle_state_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.resourcePoolLeaderId">resource_pool_leader_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#resource_pool_leader_id DataOciDatabaseAutonomousDatabases#resource_pool_leader_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#state DataOciDatabaseAutonomousDatabases#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#compartment_id DataOciDatabaseAutonomousDatabases#compartment_id}.

---

##### `autonomous_container_database_id`<sup>Optional</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.autonomousContainerDatabaseId"></a>

```python
autonomous_container_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#autonomous_container_database_id DataOciDatabaseAutonomousDatabases#autonomous_container_database_id}.

---

##### `db_version`<sup>Optional</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#db_version DataOciDatabaseAutonomousDatabases#db_version}.

---

##### `db_workload`<sup>Optional</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#db_workload DataOciDatabaseAutonomousDatabases#db_workload}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#display_name DataOciDatabaseAutonomousDatabases#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter">DataOciDatabaseAutonomousDatabasesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#filter DataOciDatabaseAutonomousDatabases#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#id DataOciDatabaseAutonomousDatabases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructure_type`<sup>Optional</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#infrastructure_type DataOciDatabaseAutonomousDatabases#infrastructure_type}.

---

##### `is_data_guard_enabled`<sup>Optional</sup> <a name="is_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isDataGuardEnabled"></a>

```python
is_data_guard_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_data_guard_enabled DataOciDatabaseAutonomousDatabases#is_data_guard_enabled}.

---

##### `is_free_tier`<sup>Optional</sup> <a name="is_free_tier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isFreeTier"></a>

```python
is_free_tier: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_free_tier DataOciDatabaseAutonomousDatabases#is_free_tier}.

---

##### `is_refreshable_clone`<sup>Optional</sup> <a name="is_refreshable_clone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isRefreshableClone"></a>

```python
is_refreshable_clone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_refreshable_clone DataOciDatabaseAutonomousDatabases#is_refreshable_clone}.

---

##### `is_resource_pool_leader`<sup>Optional</sup> <a name="is_resource_pool_leader" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.isResourcePoolLeader"></a>

```python
is_resource_pool_leader: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#is_resource_pool_leader DataOciDatabaseAutonomousDatabases#is_resource_pool_leader}.

---

##### `lifecycle_state_not_equal_to`<sup>Optional</sup> <a name="lifecycle_state_not_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.lifecycleStateNotEqualTo"></a>

```python
lifecycle_state_not_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#lifecycle_state_not_equal_to DataOciDatabaseAutonomousDatabases#lifecycle_state_not_equal_to}.

---

##### `resource_pool_leader_id`<sup>Optional</sup> <a name="resource_pool_leader_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.resourcePoolLeaderId"></a>

```python
resource_pool_leader_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#resource_pool_leader_id DataOciDatabaseAutonomousDatabases#resource_pool_leader_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#state DataOciDatabaseAutonomousDatabases#state}.

---

### DataOciDatabaseAutonomousDatabasesFilter <a name="DataOciDatabaseAutonomousDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#name DataOciDatabaseAutonomousDatabases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#values DataOciDatabaseAutonomousDatabases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#regex DataOciDatabaseAutonomousDatabases#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#name DataOciDatabaseAutonomousDatabases#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#values DataOciDatabaseAutonomousDatabases#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_databases#regex DataOciDatabaseAutonomousDatabases#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.apexVersion">apex_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.ordsVersion">ords_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apex_version`<sup>Required</sup> <a name="apex_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.apexVersion"></a>

```python
apex_version: str
```

- *Type:* str

---

##### `ords_version`<sup>Required</sup> <a name="ords_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.ordsVersion"></a>

```python
ords_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetails</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.manualBackupBucketName">manual_backup_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.manualBackupType">manual_backup_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manual_backup_bucket_name`<sup>Required</sup> <a name="manual_backup_bucket_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.manualBackupBucketName"></a>

```python
manual_backup_bucket_name: str
```

- *Type:* str

---

##### `manual_backup_type`<sup>Required</sup> <a name="manual_backup_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.manualBackupType"></a>

```python
manual_backup_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfig</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.allConnectionStrings">all_connection_strings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.dedicated">dedicated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.high">high</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.low">low</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.medium">medium</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.profiles">profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_connection_strings`<sup>Required</sup> <a name="all_connection_strings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.allConnectionStrings"></a>

```python
all_connection_strings: StringMap
```

- *Type:* cdktf.StringMap

---

##### `dedicated`<sup>Required</sup> <a name="dedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.dedicated"></a>

```python
dedicated: str
```

- *Type:* str

---

##### `high`<sup>Required</sup> <a name="high" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.high"></a>

```python
high: str
```

- *Type:* str

---

##### `low`<sup>Required</sup> <a name="low" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.low"></a>

```python
low: str
```

- *Type:* str

---

##### `medium`<sup>Required</sup> <a name="medium" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.medium"></a>

```python
medium: str
```

- *Type:* str

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.profiles"></a>

```python
profiles: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.consumerGroup">consumer_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.hostFormat">host_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.isRegional">is_regional</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.sessionMode">session_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.syntaxFormat">syntax_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.tlsAuthentication">tls_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_group`<sup>Required</sup> <a name="consumer_group" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```python
consumer_group: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `host_format`<sup>Required</sup> <a name="host_format" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```python
host_format: str
```

- *Type:* str

---

##### `is_regional`<sup>Required</sup> <a name="is_regional" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.isRegional"></a>

```python
is_regional: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `session_mode`<sup>Required</sup> <a name="session_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```python
session_mode: str
```

- *Type:* str

---

##### `syntax_format`<sup>Required</sup> <a name="syntax_format" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```python
syntax_format: str
```

- *Type:* str

---

##### `tls_authentication`<sup>Required</sup> <a name="tls_authentication" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```python
tls_authentication: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfilesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsProfiles</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.apexUrl">apex_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.databaseTransformsUrl">database_transforms_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.graphStudioUrl">graph_studio_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.machineLearningNotebookUrl">machine_learning_notebook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">machine_learning_user_management_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.mongoDbUrl">mongo_db_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.ordsUrl">ords_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.sqlDevWebUrl">sql_dev_web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apex_url`<sup>Required</sup> <a name="apex_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.apexUrl"></a>

```python
apex_url: str
```

- *Type:* str

---

##### `database_transforms_url`<sup>Required</sup> <a name="database_transforms_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```python
database_transforms_url: str
```

- *Type:* str

---

##### `graph_studio_url`<sup>Required</sup> <a name="graph_studio_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```python
graph_studio_url: str
```

- *Type:* str

---

##### `machine_learning_notebook_url`<sup>Required</sup> <a name="machine_learning_notebook_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```python
machine_learning_notebook_url: str
```

- *Type:* str

---

##### `machine_learning_user_management_url`<sup>Required</sup> <a name="machine_learning_user_management_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```python
machine_learning_user_management_url: str
```

- *Type:* str

---

##### `mongo_db_url`<sup>Required</sup> <a name="mongo_db_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```python
mongo_db_url: str
```

- *Type:* str

---

##### `ords_url`<sup>Required</sup> <a name="ords_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.ordsUrl"></a>

```python
ords_url: str
```

- *Type:* str

---

##### `sql_dev_web_url`<sup>Required</sup> <a name="sql_dev_web_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```python
sql_dev_web_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContacts</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">max_idle_time_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_idle_time_in_minutes`<sup>Required</sup> <a name="max_idle_time_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```python
max_idle_time_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetails</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole">arn_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabaseProvider">autonomous_database_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName">certificate_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName">directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey">okv_kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri">okv_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri">service_endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri">vault_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_role`<sup>Required</sup> <a name="arn_role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole"></a>

```python
arn_role: str
```

- *Type:* str

---

##### `autonomous_database_provider`<sup>Required</sup> <a name="autonomous_database_provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabaseProvider"></a>

```python
autonomous_database_provider: str
```

- *Type:* str

---

##### `certificate_directory_name`<sup>Required</sup> <a name="certificate_directory_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```python
certificate_directory_name: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `directory_name`<sup>Required</sup> <a name="directory_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName"></a>

```python
directory_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `okv_kms_key`<sup>Required</sup> <a name="okv_kms_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey"></a>

```python
okv_kms_key: str
```

- *Type:* str

---

##### `okv_uri`<sup>Required</sup> <a name="okv_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri"></a>

```python
okv_uri: str
```

- *Type:* str

---

##### `service_endpoint_uri`<sup>Required</sup> <a name="service_endpoint_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```python
service_endpoint_uri: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `vault_uri`<sup>Required</sup> <a name="vault_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri"></a>

```python
vault_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKey</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.encryptionKey">encryption_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.timeActivated">time_activated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.encryptionKey"></a>

```python
encryption_key: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryEncryptionKeyList</a>

---

##### `time_activated`<sup>Required</sup> <a name="time_activated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.timeActivated"></a>

```python
time_activated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntry</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.arnRole">arn_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.autonomousDatabaseProvider">autonomous_database_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.certificateDirectoryName">certificate_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.directoryName">directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.okvKmsKey">okv_kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.okvUri">okv_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.serviceEndpointUri">service_endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.vaultUri">vault_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_role`<sup>Required</sup> <a name="arn_role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.arnRole"></a>

```python
arn_role: str
```

- *Type:* str

---

##### `autonomous_database_provider`<sup>Required</sup> <a name="autonomous_database_provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.autonomousDatabaseProvider"></a>

```python
autonomous_database_provider: str
```

- *Type:* str

---

##### `certificate_directory_name`<sup>Required</sup> <a name="certificate_directory_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```python
certificate_directory_name: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `directory_name`<sup>Required</sup> <a name="directory_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.directoryName"></a>

```python
directory_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `okv_kms_key`<sup>Required</sup> <a name="okv_kms_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.okvKmsKey"></a>

```python
okv_kms_key: str
```

- *Type:* str

---

##### `okv_uri`<sup>Required</sup> <a name="okv_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.okvUri"></a>

```python
okv_uri: str
```

- *Type:* str

---

##### `service_endpoint_uri`<sup>Required</sup> <a name="service_endpoint_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```python
service_endpoint_uri: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `vault_uri`<sup>Required</sup> <a name="vault_uri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.vaultUri"></a>

```python
vault_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKey</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.timeActivated">time_activated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `time_activated`<sup>Required</sup> <a name="time_activated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.timeActivated"></a>

```python
time_activated: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntry</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.lagTimeInSeconds">lag_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged">time_data_guard_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">time_disaster_recovery_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `lag_time_in_seconds`<sup>Required</sup> <a name="lag_time_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```python
lag_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_data_guard_role_changed`<sup>Required</sup> <a name="time_data_guard_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```python
time_data_guard_role_changed: str
```

- *Type:* str

---

##### `time_disaster_recovery_role_changed`<sup>Required</sup> <a name="time_disaster_recovery_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```python
time_disaster_recovery_role_changed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDb</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.isDisabled">is_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.repeatCadence">repeat_cadence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.timeOfBackup">time_of_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_disabled`<sup>Required</sup> <a name="is_disabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```python
is_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `repeat_cadence`<sup>Required</sup> <a name="repeat_cadence" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```python
repeat_cadence: str
```

- *Type:* str

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_of_backup`<sup>Required</sup> <a name="time_of_backup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```python
time_of_backup: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupSchedule</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.actualUsedDataStorageSizeInTbs">actual_used_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.allocatedStorageSizeInTbs">allocated_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.apexDetails">apex_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.arePrimaryWhitelistedIpsUsed">are_primary_whitelisted_ips_used</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousContainerDatabaseId">autonomous_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousDatabaseBackupId">autonomous_database_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousMaintenanceScheduleType">autonomous_maintenance_schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autoRefreshFrequencyInSeconds">auto_refresh_frequency_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autoRefreshPointLagInSeconds">auto_refresh_point_lag_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.availableUpgradeVersions">available_upgrade_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.backupConfig">backup_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.backupRetentionPeriodInDays">backup_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.byolComputeCountLimit">byol_compute_count_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.cloneType">clone_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.connectionStrings">connection_strings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.connectionUrls">connection_urls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.customerContacts">customer_contacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.databaseEdition">database_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.databaseManagementStatus">database_management_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataguardRegionType">dataguard_region_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataSafeStatus">data_safe_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataStorageSizeInTbs">data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbToolsDetails">db_tools_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbWorkload">db_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.disasterRecoveryRegionType">disaster_recovery_region_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.disasterRecoveryType">disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.encryptionKey">encryption_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.encryptionKeyHistoryEntry">encryption_key_history_entry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.failedDataRecoveryInSeconds">failed_data_recovery_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.infrastructureType">infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.inMemoryAreaInGbs">in_memory_area_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.inMemoryPercentage">in_memory_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAccessControlEnabled">is_access_control_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAutoScalingEnabled">is_auto_scaling_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAutoScalingForStorageEnabled">is_auto_scaling_for_storage_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDataGuardEnabled">is_data_guard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDedicated">is_dedicated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDevTier">is_dev_tier</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isFreeTier">is_free_tier</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isLocalDataGuardEnabled">is_local_data_guard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isMtlsConnectionRequired">is_mtls_connection_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isPreview">is_preview</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isPreviewVersionWithServiceTermsAccepted">is_preview_version_with_service_terms_accepted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isReconnectCloneEnabled">is_reconnect_clone_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isRefreshableClone">is_refreshable_clone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isRemoteDataGuardEnabled">is_remote_data_guard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isReplicateAutomaticBackups">is_replicate_automatic_backups</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isShrinkOnly">is_shrink_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyHistoryEntry">key_history_entry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyStoreId">key_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyStoreWalletName">key_store_wallet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyLifecycleDetails">kms_key_lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit">local_adg_auto_failover_max_data_loss_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localDisasterRecoveryType">local_disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localStandbyDb">local_standby_db</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.longTermBackupSchedule">long_term_backup_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.maxCpuCoreCount">max_cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.memoryPerOracleComputeUnitInGbs">memory_per_oracle_compute_unit_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.netServicesArchitecture">net_services_architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.nextLongTermBackupTimeStamp">next_long_term_backup_time_stamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.openMode">open_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.operationsInsightsStatus">operations_insights_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.peerDbIds">peer_db_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.permissionLevel">permission_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpoint">private_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpointLabel">private_endpoint_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.provisionableCpus">provisionable_cpus</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.publicConnectionUrls">public_connection_urls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.publicEndpoint">public_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.refreshableMode">refreshable_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.refreshableStatus">refreshable_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.remoteDisasterRecoveryConfiguration">remote_disaster_recovery_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.remoteDisasterRecoveryType">remote_disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.resourcePoolLeaderId">resource_pool_leader_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.resourcePoolSummary">resource_pool_summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.rotateKeyTrigger">rotate_key_trigger</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.scheduledOperations">scheduled_operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.secretVersionNumber">secret_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.securityAttributes">security_attributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.serviceConsoleUrl">service_console_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.shrinkAdbTrigger">shrink_adb_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.standbyDb">standby_db</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.standbyWhitelistedIps">standby_whitelisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.supportedRegionsToCloneTo">supported_regions_to_clone_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.switchoverTo">switchover_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.switchoverToRemotePeerId">switchover_to_remote_peer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDataGuardRoleChanged">time_data_guard_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDeletionOfFreeAutonomousDatabase">time_deletion_of_free_autonomous_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDisasterRecoveryRoleChanged">time_disaster_recovery_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeLocalDataGuardEnabled">time_local_data_guard_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeMaintenanceBegin">time_maintenance_begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeMaintenanceEnd">time_maintenance_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfAutoRefreshStart">time_of_auto_refresh_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfJoiningResourcePool">time_of_joining_resource_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastFailover">time_of_last_failover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastRefresh">time_of_last_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastRefreshPoint">time_of_last_refresh_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastSwitchover">time_of_last_switchover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfNextRefresh">time_of_next_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeReclamationOfFreeAutonomousDatabase">time_reclamation_of_free_autonomous_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeUndeleted">time_undeleted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeUntilReconnectCloneEnabled">time_until_reconnect_clone_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.totalBackupStorageSizeInGbs">total_backup_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.usedDataStorageSizeInGbs">used_data_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.usedDataStorageSizeInTbs">used_data_storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.useLatestAvailableBackupTimeStamp">use_latest_available_backup_time_stamp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.whitelistedIps">whitelisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabases">DataOciDatabaseAutonomousDatabasesAutonomousDatabases</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actual_used_data_storage_size_in_tbs`<sup>Required</sup> <a name="actual_used_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.actualUsedDataStorageSizeInTbs"></a>

```python
actual_used_data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `allocated_storage_size_in_tbs`<sup>Required</sup> <a name="allocated_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.allocatedStorageSizeInTbs"></a>

```python
allocated_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `apex_details`<sup>Required</sup> <a name="apex_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.apexDetails"></a>

```python
apex_details: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesApexDetailsList</a>

---

##### `are_primary_whitelisted_ips_used`<sup>Required</sup> <a name="are_primary_whitelisted_ips_used" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.arePrimaryWhitelistedIpsUsed"></a>

```python
are_primary_whitelisted_ips_used: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `autonomous_container_database_id`<sup>Required</sup> <a name="autonomous_container_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousContainerDatabaseId"></a>

```python
autonomous_container_database_id: str
```

- *Type:* str

---

##### `autonomous_database_backup_id`<sup>Required</sup> <a name="autonomous_database_backup_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousDatabaseBackupId"></a>

```python
autonomous_database_backup_id: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `autonomous_maintenance_schedule_type`<sup>Required</sup> <a name="autonomous_maintenance_schedule_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autonomousMaintenanceScheduleType"></a>

```python
autonomous_maintenance_schedule_type: str
```

- *Type:* str

---

##### `auto_refresh_frequency_in_seconds`<sup>Required</sup> <a name="auto_refresh_frequency_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autoRefreshFrequencyInSeconds"></a>

```python
auto_refresh_frequency_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_refresh_point_lag_in_seconds`<sup>Required</sup> <a name="auto_refresh_point_lag_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.autoRefreshPointLagInSeconds"></a>

```python
auto_refresh_point_lag_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `available_upgrade_versions`<sup>Required</sup> <a name="available_upgrade_versions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.availableUpgradeVersions"></a>

```python
available_upgrade_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_config`<sup>Required</sup> <a name="backup_config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.backupConfig"></a>

```python
backup_config: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesBackupConfigList</a>

---

##### `backup_retention_period_in_days`<sup>Required</sup> <a name="backup_retention_period_in_days" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.backupRetentionPeriodInDays"></a>

```python
backup_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `byol_compute_count_limit`<sup>Required</sup> <a name="byol_compute_count_limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.byolComputeCountLimit"></a>

```python
byol_compute_count_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `clone_type`<sup>Required</sup> <a name="clone_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.cloneType"></a>

```python
clone_type: str
```

- *Type:* str

---

##### `cluster_placement_group_id`<sup>Required</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.clusterPlacementGroupId"></a>

```python
cluster_placement_group_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `connection_strings`<sup>Required</sup> <a name="connection_strings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.connectionStrings"></a>

```python
connection_strings: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStringsList</a>

---

##### `connection_urls`<sup>Required</sup> <a name="connection_urls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.connectionUrls"></a>

```python
connection_urls: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrlsList</a>

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_contacts`<sup>Required</sup> <a name="customer_contacts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.customerContacts"></a>

```python
customer_contacts: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesCustomerContactsList</a>

---

##### `database_edition`<sup>Required</sup> <a name="database_edition" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.databaseEdition"></a>

```python
database_edition: str
```

- *Type:* str

---

##### `database_management_status`<sup>Required</sup> <a name="database_management_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.databaseManagementStatus"></a>

```python
database_management_status: str
```

- *Type:* str

---

##### `dataguard_region_type`<sup>Required</sup> <a name="dataguard_region_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataguardRegionType"></a>

```python
dataguard_region_type: str
```

- *Type:* str

---

##### `data_safe_status`<sup>Required</sup> <a name="data_safe_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataSafeStatus"></a>

```python
data_safe_status: str
```

- *Type:* str

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_tbs`<sup>Required</sup> <a name="data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dataStorageSizeInTbs"></a>

```python
data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `db_tools_details`<sup>Required</sup> <a name="db_tools_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbToolsDetails"></a>

```python
db_tools_details: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesDbToolsDetailsList</a>

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `db_workload`<sup>Required</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `disaster_recovery_region_type`<sup>Required</sup> <a name="disaster_recovery_region_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.disasterRecoveryRegionType"></a>

```python
disaster_recovery_region_type: str
```

- *Type:* str

---

##### `disaster_recovery_type`<sup>Required</sup> <a name="disaster_recovery_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.disasterRecoveryType"></a>

```python
disaster_recovery_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.encryptionKey"></a>

```python
encryption_key: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyList</a>

---

##### `encryption_key_history_entry`<sup>Required</sup> <a name="encryption_key_history_entry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.encryptionKeyHistoryEntry"></a>

```python
encryption_key_history_entry: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesEncryptionKeyHistoryEntryList</a>

---

##### `failed_data_recovery_in_seconds`<sup>Required</sup> <a name="failed_data_recovery_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.failedDataRecoveryInSeconds"></a>

```python
failed_data_recovery_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_type`<sup>Required</sup> <a name="infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.infrastructureType"></a>

```python
infrastructure_type: str
```

- *Type:* str

---

##### `in_memory_area_in_gbs`<sup>Required</sup> <a name="in_memory_area_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.inMemoryAreaInGbs"></a>

```python
in_memory_area_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_memory_percentage`<sup>Required</sup> <a name="in_memory_percentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.inMemoryPercentage"></a>

```python
in_memory_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_access_control_enabled`<sup>Required</sup> <a name="is_access_control_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAccessControlEnabled"></a>

```python
is_access_control_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_auto_scaling_enabled`<sup>Required</sup> <a name="is_auto_scaling_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAutoScalingEnabled"></a>

```python
is_auto_scaling_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_auto_scaling_for_storage_enabled`<sup>Required</sup> <a name="is_auto_scaling_for_storage_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isAutoScalingForStorageEnabled"></a>

```python
is_auto_scaling_for_storage_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_data_guard_enabled`<sup>Required</sup> <a name="is_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDataGuardEnabled"></a>

```python
is_data_guard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_dedicated`<sup>Required</sup> <a name="is_dedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDedicated"></a>

```python
is_dedicated: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_dev_tier`<sup>Required</sup> <a name="is_dev_tier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isDevTier"></a>

```python
is_dev_tier: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_free_tier`<sup>Required</sup> <a name="is_free_tier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isFreeTier"></a>

```python
is_free_tier: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_local_data_guard_enabled`<sup>Required</sup> <a name="is_local_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isLocalDataGuardEnabled"></a>

```python
is_local_data_guard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_mtls_connection_required`<sup>Required</sup> <a name="is_mtls_connection_required" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isMtlsConnectionRequired"></a>

```python
is_mtls_connection_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_preview`<sup>Required</sup> <a name="is_preview" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isPreview"></a>

```python
is_preview: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_preview_version_with_service_terms_accepted`<sup>Required</sup> <a name="is_preview_version_with_service_terms_accepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isPreviewVersionWithServiceTermsAccepted"></a>

```python
is_preview_version_with_service_terms_accepted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_reconnect_clone_enabled`<sup>Required</sup> <a name="is_reconnect_clone_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isReconnectCloneEnabled"></a>

```python
is_reconnect_clone_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_refreshable_clone`<sup>Required</sup> <a name="is_refreshable_clone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isRefreshableClone"></a>

```python
is_refreshable_clone: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_remote_data_guard_enabled`<sup>Required</sup> <a name="is_remote_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isRemoteDataGuardEnabled"></a>

```python
is_remote_data_guard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_replicate_automatic_backups`<sup>Required</sup> <a name="is_replicate_automatic_backups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isReplicateAutomaticBackups"></a>

```python
is_replicate_automatic_backups: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_shrink_only`<sup>Required</sup> <a name="is_shrink_only" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.isShrinkOnly"></a>

```python
is_shrink_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key_history_entry`<sup>Required</sup> <a name="key_history_entry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyHistoryEntry"></a>

```python
key_history_entry: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesKeyHistoryEntryList</a>

---

##### `key_store_id`<sup>Required</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyStoreId"></a>

```python
key_store_id: str
```

- *Type:* str

---

##### `key_store_wallet_name`<sup>Required</sup> <a name="key_store_wallet_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.keyStoreWalletName"></a>

```python
key_store_wallet_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kms_key_lifecycle_details`<sup>Required</sup> <a name="kms_key_lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyLifecycleDetails"></a>

```python
kms_key_lifecycle_details: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `local_adg_auto_failover_max_data_loss_limit`<sup>Required</sup> <a name="local_adg_auto_failover_max_data_loss_limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```python
local_adg_auto_failover_max_data_loss_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_disaster_recovery_type`<sup>Required</sup> <a name="local_disaster_recovery_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localDisasterRecoveryType"></a>

```python
local_disaster_recovery_type: str
```

- *Type:* str

---

##### `local_standby_db`<sup>Required</sup> <a name="local_standby_db" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.localStandbyDb"></a>

```python
local_standby_db: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLocalStandbyDbList</a>

---

##### `long_term_backup_schedule`<sup>Required</sup> <a name="long_term_backup_schedule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.longTermBackupSchedule"></a>

```python
long_term_backup_schedule: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesLongTermBackupScheduleList</a>

---

##### `max_cpu_core_count`<sup>Required</sup> <a name="max_cpu_core_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.maxCpuCoreCount"></a>

```python
max_cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_oracle_compute_unit_in_gbs`<sup>Required</sup> <a name="memory_per_oracle_compute_unit_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.memoryPerOracleComputeUnitInGbs"></a>

```python
memory_per_oracle_compute_unit_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ncharacter_set`<sup>Required</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

---

##### `net_services_architecture`<sup>Required</sup> <a name="net_services_architecture" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.netServicesArchitecture"></a>

```python
net_services_architecture: str
```

- *Type:* str

---

##### `next_long_term_backup_time_stamp`<sup>Required</sup> <a name="next_long_term_backup_time_stamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.nextLongTermBackupTimeStamp"></a>

```python
next_long_term_backup_time_stamp: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ocpu_count`<sup>Required</sup> <a name="ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `open_mode`<sup>Required</sup> <a name="open_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.openMode"></a>

```python
open_mode: str
```

- *Type:* str

---

##### `operations_insights_status`<sup>Required</sup> <a name="operations_insights_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.operationsInsightsStatus"></a>

```python
operations_insights_status: str
```

- *Type:* str

---

##### `peer_db_ids`<sup>Required</sup> <a name="peer_db_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.peerDbIds"></a>

```python
peer_db_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permission_level`<sup>Required</sup> <a name="permission_level" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.permissionLevel"></a>

```python
permission_level: str
```

- *Type:* str

---

##### `private_endpoint`<sup>Required</sup> <a name="private_endpoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpoint"></a>

```python
private_endpoint: str
```

- *Type:* str

---

##### `private_endpoint_ip`<sup>Required</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

---

##### `private_endpoint_label`<sup>Required</sup> <a name="private_endpoint_label" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.privateEndpointLabel"></a>

```python
private_endpoint_label: str
```

- *Type:* str

---

##### `provisionable_cpus`<sup>Required</sup> <a name="provisionable_cpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.provisionableCpus"></a>

```python
provisionable_cpus: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `public_connection_urls`<sup>Required</sup> <a name="public_connection_urls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.publicConnectionUrls"></a>

```python
public_connection_urls: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList</a>

---

##### `public_endpoint`<sup>Required</sup> <a name="public_endpoint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.publicEndpoint"></a>

```python
public_endpoint: str
```

- *Type:* str

---

##### `refreshable_mode`<sup>Required</sup> <a name="refreshable_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.refreshableMode"></a>

```python
refreshable_mode: str
```

- *Type:* str

---

##### `refreshable_status`<sup>Required</sup> <a name="refreshable_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.refreshableStatus"></a>

```python
refreshable_status: str
```

- *Type:* str

---

##### `remote_disaster_recovery_configuration`<sup>Required</sup> <a name="remote_disaster_recovery_configuration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.remoteDisasterRecoveryConfiguration"></a>

```python
remote_disaster_recovery_configuration: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList</a>

---

##### `remote_disaster_recovery_type`<sup>Required</sup> <a name="remote_disaster_recovery_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.remoteDisasterRecoveryType"></a>

```python
remote_disaster_recovery_type: str
```

- *Type:* str

---

##### `resource_pool_leader_id`<sup>Required</sup> <a name="resource_pool_leader_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.resourcePoolLeaderId"></a>

```python
resource_pool_leader_id: str
```

- *Type:* str

---

##### `resource_pool_summary`<sup>Required</sup> <a name="resource_pool_summary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.resourcePoolSummary"></a>

```python
resource_pool_summary: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList</a>

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `rotate_key_trigger`<sup>Required</sup> <a name="rotate_key_trigger" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.rotateKeyTrigger"></a>

```python
rotate_key_trigger: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `scheduled_operations`<sup>Required</sup> <a name="scheduled_operations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.scheduledOperations"></a>

```python
scheduled_operations: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList</a>

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_version_number`<sup>Required</sup> <a name="secret_version_number" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.secretVersionNumber"></a>

```python
secret_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_attributes`<sup>Required</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.securityAttributes"></a>

```python
security_attributes: StringMap
```

- *Type:* cdktf.StringMap

---

##### `service_console_url`<sup>Required</sup> <a name="service_console_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.serviceConsoleUrl"></a>

```python
service_console_url: str
```

- *Type:* str

---

##### `shrink_adb_trigger`<sup>Required</sup> <a name="shrink_adb_trigger" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.shrinkAdbTrigger"></a>

```python
shrink_adb_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `standby_db`<sup>Required</sup> <a name="standby_db" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.standbyDb"></a>

```python
standby_db: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList</a>

---

##### `standby_whitelisted_ips`<sup>Required</sup> <a name="standby_whitelisted_ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.standbyWhitelistedIps"></a>

```python
standby_whitelisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `supported_regions_to_clone_to`<sup>Required</sup> <a name="supported_regions_to_clone_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.supportedRegionsToCloneTo"></a>

```python
supported_regions_to_clone_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `switchover_to`<sup>Required</sup> <a name="switchover_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.switchoverTo"></a>

```python
switchover_to: str
```

- *Type:* str

---

##### `switchover_to_remote_peer_id`<sup>Required</sup> <a name="switchover_to_remote_peer_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.switchoverToRemotePeerId"></a>

```python
switchover_to_remote_peer_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_data_guard_role_changed`<sup>Required</sup> <a name="time_data_guard_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDataGuardRoleChanged"></a>

```python
time_data_guard_role_changed: str
```

- *Type:* str

---

##### `time_deletion_of_free_autonomous_database`<sup>Required</sup> <a name="time_deletion_of_free_autonomous_database" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDeletionOfFreeAutonomousDatabase"></a>

```python
time_deletion_of_free_autonomous_database: str
```

- *Type:* str

---

##### `time_disaster_recovery_role_changed`<sup>Required</sup> <a name="time_disaster_recovery_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```python
time_disaster_recovery_role_changed: str
```

- *Type:* str

---

##### `time_local_data_guard_enabled`<sup>Required</sup> <a name="time_local_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeLocalDataGuardEnabled"></a>

```python
time_local_data_guard_enabled: str
```

- *Type:* str

---

##### `time_maintenance_begin`<sup>Required</sup> <a name="time_maintenance_begin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeMaintenanceBegin"></a>

```python
time_maintenance_begin: str
```

- *Type:* str

---

##### `time_maintenance_end`<sup>Required</sup> <a name="time_maintenance_end" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeMaintenanceEnd"></a>

```python
time_maintenance_end: str
```

- *Type:* str

---

##### `time_of_auto_refresh_start`<sup>Required</sup> <a name="time_of_auto_refresh_start" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfAutoRefreshStart"></a>

```python
time_of_auto_refresh_start: str
```

- *Type:* str

---

##### `time_of_joining_resource_pool`<sup>Required</sup> <a name="time_of_joining_resource_pool" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfJoiningResourcePool"></a>

```python
time_of_joining_resource_pool: str
```

- *Type:* str

---

##### `time_of_last_failover`<sup>Required</sup> <a name="time_of_last_failover" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastFailover"></a>

```python
time_of_last_failover: str
```

- *Type:* str

---

##### `time_of_last_refresh`<sup>Required</sup> <a name="time_of_last_refresh" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastRefresh"></a>

```python
time_of_last_refresh: str
```

- *Type:* str

---

##### `time_of_last_refresh_point`<sup>Required</sup> <a name="time_of_last_refresh_point" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastRefreshPoint"></a>

```python
time_of_last_refresh_point: str
```

- *Type:* str

---

##### `time_of_last_switchover`<sup>Required</sup> <a name="time_of_last_switchover" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfLastSwitchover"></a>

```python
time_of_last_switchover: str
```

- *Type:* str

---

##### `time_of_next_refresh`<sup>Required</sup> <a name="time_of_next_refresh" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeOfNextRefresh"></a>

```python
time_of_next_refresh: str
```

- *Type:* str

---

##### `time_reclamation_of_free_autonomous_database`<sup>Required</sup> <a name="time_reclamation_of_free_autonomous_database" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeReclamationOfFreeAutonomousDatabase"></a>

```python
time_reclamation_of_free_autonomous_database: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `time_undeleted`<sup>Required</sup> <a name="time_undeleted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeUndeleted"></a>

```python
time_undeleted: str
```

- *Type:* str

---

##### `time_until_reconnect_clone_enabled`<sup>Required</sup> <a name="time_until_reconnect_clone_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.timeUntilReconnectCloneEnabled"></a>

```python
time_until_reconnect_clone_enabled: str
```

- *Type:* str

---

##### `total_backup_storage_size_in_gbs`<sup>Required</sup> <a name="total_backup_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.totalBackupStorageSizeInGbs"></a>

```python
total_backup_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_data_storage_size_in_gbs`<sup>Required</sup> <a name="used_data_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.usedDataStorageSizeInGbs"></a>

```python
used_data_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_data_storage_size_in_tbs`<sup>Required</sup> <a name="used_data_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.usedDataStorageSizeInTbs"></a>

```python
used_data_storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `use_latest_available_backup_time_stamp`<sup>Required</sup> <a name="use_latest_available_backup_time_stamp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.useLatestAvailableBackupTimeStamp"></a>

```python
use_latest_available_backup_time_stamp: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `whitelisted_ips`<sup>Required</sup> <a name="whitelisted_ips" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.whitelistedIps"></a>

```python
whitelisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabases
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabases">DataOciDatabaseAutonomousDatabasesAutonomousDatabases</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.apexUrl">apex_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.databaseTransformsUrl">database_transforms_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.graphStudioUrl">graph_studio_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl">machine_learning_notebook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">machine_learning_user_management_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.mongoDbUrl">mongo_db_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.ordsUrl">ords_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.sqlDevWebUrl">sql_dev_web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apex_url`<sup>Required</sup> <a name="apex_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.apexUrl"></a>

```python
apex_url: str
```

- *Type:* str

---

##### `database_transforms_url`<sup>Required</sup> <a name="database_transforms_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```python
database_transforms_url: str
```

- *Type:* str

---

##### `graph_studio_url`<sup>Required</sup> <a name="graph_studio_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```python
graph_studio_url: str
```

- *Type:* str

---

##### `machine_learning_notebook_url`<sup>Required</sup> <a name="machine_learning_notebook_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```python
machine_learning_notebook_url: str
```

- *Type:* str

---

##### `machine_learning_user_management_url`<sup>Required</sup> <a name="machine_learning_user_management_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```python
machine_learning_user_management_url: str
```

- *Type:* str

---

##### `mongo_db_url`<sup>Required</sup> <a name="mongo_db_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```python
mongo_db_url: str
```

- *Type:* str

---

##### `ords_url`<sup>Required</sup> <a name="ords_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.ordsUrl"></a>

```python
ords_url: str
```

- *Type:* str

---

##### `sql_dev_web_url`<sup>Required</sup> <a name="sql_dev_web_url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```python
sql_dev_web_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrlsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesPublicConnectionUrls</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType">disaster_recovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups">is_replicate_automatic_backups</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby">is_snapshot_standby</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill">time_snapshot_standby_enabled_till</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disaster_recovery_type`<sup>Required</sup> <a name="disaster_recovery_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType"></a>

```python
disaster_recovery_type: str
```

- *Type:* str

---

##### `is_replicate_automatic_backups`<sup>Required</sup> <a name="is_replicate_automatic_backups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups"></a>

```python
is_replicate_automatic_backups: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_snapshot_standby`<sup>Required</sup> <a name="is_snapshot_standby" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby"></a>

```python
is_snapshot_standby: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `time_snapshot_standby_enabled_till`<sup>Required</sup> <a name="time_snapshot_standby_enabled_till" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill"></a>

```python
time_snapshot_standby_enabled_till: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesRemoteDisasterRecoveryConfiguration</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.isDisabled">is_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.poolSize">pool_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_disabled`<sup>Required</sup> <a name="is_disabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.isDisabled"></a>

```python
is_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `pool_size`<sup>Required</sup> <a name="pool_size" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.poolSize"></a>

```python
pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummaryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesResourcePoolSummary</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeek</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.dayOfWeek">day_of_week</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.scheduledStartTime">scheduled_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.scheduledStopTime">scheduled_stop_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.dayOfWeek"></a>

```python
day_of_week: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsDayOfWeekList</a>

---

##### `scheduled_start_time`<sup>Required</sup> <a name="scheduled_start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```python
scheduled_start_time: str
```

- *Type:* str

---

##### `scheduled_stop_time`<sup>Required</sup> <a name="scheduled_stop_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```python
scheduled_stop_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesScheduledOperations</a>

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference <a name="DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.lagTimeInSeconds">lag_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.timeDataGuardRoleChanged">time_data_guard_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">time_disaster_recovery_role_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `lag_time_in_seconds`<sup>Required</sup> <a name="lag_time_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```python
lag_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_data_guard_role_changed`<sup>Required</sup> <a name="time_data_guard_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```python
time_data_guard_role_changed: str
```

- *Type:* str

---

##### `time_disaster_recovery_role_changed`<sup>Required</sup> <a name="time_disaster_recovery_role_changed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```python
time_disaster_recovery_role_changed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDbOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb">DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb</a>

---


### DataOciDatabaseAutonomousDatabasesFilterList <a name="DataOciDatabaseAutonomousDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousDatabasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter">DataOciDatabaseAutonomousDatabasesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousDatabasesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter">DataOciDatabaseAutonomousDatabasesFilter</a>]]

---


### DataOciDatabaseAutonomousDatabasesFilterOutputReference <a name="DataOciDatabaseAutonomousDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_databases

dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter">DataOciDatabaseAutonomousDatabasesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseAutonomousDatabasesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabases.DataOciDatabaseAutonomousDatabasesFilter">DataOciDatabaseAutonomousDatabasesFilter</a>]

---



