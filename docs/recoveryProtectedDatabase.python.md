# `recoveryProtectedDatabase` Submodule <a name="`recoveryProtectedDatabase` Submodule" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecoveryProtectedDatabase <a name="RecoveryProtectedDatabase" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database oci_recovery_protected_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_protected_database

recoveryProtectedDatabase.RecoveryProtectedDatabase(
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
  db_unique_name: str,
  display_name: str,
  password: str,
  protection_policy_id: str,
  recovery_service_subnets: typing.Union[IResolvable, typing.List[RecoveryProtectedDatabaseRecoveryServiceSubnets]],
  database_id: str = None,
  database_size: str = None,
  defined_tags: typing.Mapping[str] = None,
  deletion_schedule: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_redo_logs_shipped: typing.Union[bool, IResolvable] = None,
  subscription_id: str = None,
  timeouts: RecoveryProtectedDatabaseTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#compartment_id RecoveryProtectedDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.dbUniqueName">db_unique_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#db_unique_name RecoveryProtectedDatabase#db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#display_name RecoveryProtectedDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#password RecoveryProtectedDatabase#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.protectionPolicyId">protection_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#protection_policy_id RecoveryProtectedDatabase#protection_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.recoveryServiceSubnets">recovery_service_subnets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>]]</code> | recovery_service_subnets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#database_id RecoveryProtectedDatabase#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.databaseSize">database_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#database_size RecoveryProtectedDatabase#database_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#defined_tags RecoveryProtectedDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.deletionSchedule">deletion_schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#deletion_schedule RecoveryProtectedDatabase#deletion_schedule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#freeform_tags RecoveryProtectedDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#id RecoveryProtectedDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.isRedoLogsShipped">is_redo_logs_shipped</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#is_redo_logs_shipped RecoveryProtectedDatabase#is_redo_logs_shipped}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#subscription_id RecoveryProtectedDatabase#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#compartment_id RecoveryProtectedDatabase#compartment_id}.

---

##### `db_unique_name`<sup>Required</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.dbUniqueName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#db_unique_name RecoveryProtectedDatabase#db_unique_name}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#display_name RecoveryProtectedDatabase#display_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#password RecoveryProtectedDatabase#password}.

---

##### `protection_policy_id`<sup>Required</sup> <a name="protection_policy_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.protectionPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#protection_policy_id RecoveryProtectedDatabase#protection_policy_id}.

---

##### `recovery_service_subnets`<sup>Required</sup> <a name="recovery_service_subnets" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.recoveryServiceSubnets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>]]

recovery_service_subnets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#recovery_service_subnets RecoveryProtectedDatabase#recovery_service_subnets}

---

##### `database_id`<sup>Optional</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.databaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#database_id RecoveryProtectedDatabase#database_id}.

---

##### `database_size`<sup>Optional</sup> <a name="database_size" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.databaseSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#database_size RecoveryProtectedDatabase#database_size}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#defined_tags RecoveryProtectedDatabase#defined_tags}.

---

##### `deletion_schedule`<sup>Optional</sup> <a name="deletion_schedule" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.deletionSchedule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#deletion_schedule RecoveryProtectedDatabase#deletion_schedule}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#freeform_tags RecoveryProtectedDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#id RecoveryProtectedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_redo_logs_shipped`<sup>Optional</sup> <a name="is_redo_logs_shipped" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.isRedoLogsShipped"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#is_redo_logs_shipped RecoveryProtectedDatabase#is_redo_logs_shipped}.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#subscription_id RecoveryProtectedDatabase#subscription_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#timeouts RecoveryProtectedDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putRecoveryServiceSubnets">put_recovery_service_subnets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDatabaseId">reset_database_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDatabaseSize">reset_database_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDeletionSchedule">reset_deletion_schedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetIsRedoLogsShipped">reset_is_redo_logs_shipped</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_recovery_service_subnets` <a name="put_recovery_service_subnets" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putRecoveryServiceSubnets"></a>

```python
def put_recovery_service_subnets(
  value: typing.Union[IResolvable, typing.List[RecoveryProtectedDatabaseRecoveryServiceSubnets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putRecoveryServiceSubnets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#create RecoveryProtectedDatabase#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#delete RecoveryProtectedDatabase#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#update RecoveryProtectedDatabase#update}.

---

##### `reset_database_id` <a name="reset_database_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDatabaseId"></a>

```python
def reset_database_id() -> None
```

##### `reset_database_size` <a name="reset_database_size" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDatabaseSize"></a>

```python
def reset_database_size() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_deletion_schedule` <a name="reset_deletion_schedule" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDeletionSchedule"></a>

```python
def reset_deletion_schedule() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_redo_logs_shipped` <a name="reset_is_redo_logs_shipped" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetIsRedoLogsShipped"></a>

```python
def reset_is_redo_logs_shipped() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RecoveryProtectedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_protected_database

recoveryProtectedDatabase.RecoveryProtectedDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_protected_database

recoveryProtectedDatabase.RecoveryProtectedDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_protected_database

recoveryProtectedDatabase.RecoveryProtectedDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_protected_database

recoveryProtectedDatabase.RecoveryProtectedDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RecoveryProtectedDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RecoveryProtectedDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RecoveryProtectedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RecoveryProtectedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.healthDetails">health_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isReadOnlyResource">is_read_only_resource</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList">RecoveryProtectedDatabaseMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.policyLockedDateTime">policy_locked_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.recoveryServiceSubnets">recovery_service_subnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList">RecoveryProtectedDatabaseRecoveryServiceSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference">RecoveryProtectedDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.vpcUserName">vpc_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseSizeInput">database_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dbUniqueNameInput">db_unique_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.deletionScheduleInput">deletion_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isRedoLogsShippedInput">is_redo_logs_shipped_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.protectionPolicyIdInput">protection_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.recoveryServiceSubnetsInput">recovery_service_subnets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseSize">database_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.deletionSchedule">deletion_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isRedoLogsShipped">is_redo_logs_shipped</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.protectionPolicyId">protection_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `health`<sup>Required</sup> <a name="health" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `health_details`<sup>Required</sup> <a name="health_details" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.healthDetails"></a>

```python
health_details: str
```

- *Type:* str

---

##### `is_read_only_resource`<sup>Required</sup> <a name="is_read_only_resource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isReadOnlyResource"></a>

```python
is_read_only_resource: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.metrics"></a>

```python
metrics: RecoveryProtectedDatabaseMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList">RecoveryProtectedDatabaseMetricsList</a>

---

##### `policy_locked_date_time`<sup>Required</sup> <a name="policy_locked_date_time" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.policyLockedDateTime"></a>

```python
policy_locked_date_time: str
```

- *Type:* str

---

##### `recovery_service_subnets`<sup>Required</sup> <a name="recovery_service_subnets" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.recoveryServiceSubnets"></a>

```python
recovery_service_subnets: RecoveryProtectedDatabaseRecoveryServiceSubnetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList">RecoveryProtectedDatabaseRecoveryServiceSubnetsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeouts"></a>

```python
timeouts: RecoveryProtectedDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference">RecoveryProtectedDatabaseTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `vpc_user_name`<sup>Required</sup> <a name="vpc_user_name" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.vpcUserName"></a>

```python
vpc_user_name: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `database_size_input`<sup>Optional</sup> <a name="database_size_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseSizeInput"></a>

```python
database_size_input: str
```

- *Type:* str

---

##### `db_unique_name_input`<sup>Optional</sup> <a name="db_unique_name_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dbUniqueNameInput"></a>

```python
db_unique_name_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_schedule_input`<sup>Optional</sup> <a name="deletion_schedule_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.deletionScheduleInput"></a>

```python
deletion_schedule_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_redo_logs_shipped_input`<sup>Optional</sup> <a name="is_redo_logs_shipped_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isRedoLogsShippedInput"></a>

```python
is_redo_logs_shipped_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `protection_policy_id_input`<sup>Optional</sup> <a name="protection_policy_id_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.protectionPolicyIdInput"></a>

```python
protection_policy_id_input: str
```

- *Type:* str

---

##### `recovery_service_subnets_input`<sup>Optional</sup> <a name="recovery_service_subnets_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.recoveryServiceSubnetsInput"></a>

```python
recovery_service_subnets_input: typing.Union[IResolvable, typing.List[RecoveryProtectedDatabaseRecoveryServiceSubnets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>]]

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RecoveryProtectedDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `database_size`<sup>Required</sup> <a name="database_size" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseSize"></a>

```python
database_size: str
```

- *Type:* str

---

##### `db_unique_name`<sup>Required</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_schedule`<sup>Required</sup> <a name="deletion_schedule" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.deletionSchedule"></a>

```python
deletion_schedule: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_redo_logs_shipped`<sup>Required</sup> <a name="is_redo_logs_shipped" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isRedoLogsShipped"></a>

```python
is_redo_logs_shipped: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `protection_policy_id`<sup>Required</sup> <a name="protection_policy_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.protectionPolicyId"></a>

```python
protection_policy_id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RecoveryProtectedDatabaseConfig <a name="RecoveryProtectedDatabaseConfig" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_protected_database

recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  db_unique_name: str,
  display_name: str,
  password: str,
  protection_policy_id: str,
  recovery_service_subnets: typing.Union[IResolvable, typing.List[RecoveryProtectedDatabaseRecoveryServiceSubnets]],
  database_id: str = None,
  database_size: str = None,
  defined_tags: typing.Mapping[str] = None,
  deletion_schedule: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_redo_logs_shipped: typing.Union[bool, IResolvable] = None,
  subscription_id: str = None,
  timeouts: RecoveryProtectedDatabaseTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#compartment_id RecoveryProtectedDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#db_unique_name RecoveryProtectedDatabase#db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#display_name RecoveryProtectedDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#password RecoveryProtectedDatabase#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.protectionPolicyId">protection_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#protection_policy_id RecoveryProtectedDatabase#protection_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.recoveryServiceSubnets">recovery_service_subnets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>]]</code> | recovery_service_subnets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#database_id RecoveryProtectedDatabase#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.databaseSize">database_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#database_size RecoveryProtectedDatabase#database_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#defined_tags RecoveryProtectedDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.deletionSchedule">deletion_schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#deletion_schedule RecoveryProtectedDatabase#deletion_schedule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#freeform_tags RecoveryProtectedDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#id RecoveryProtectedDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.isRedoLogsShipped">is_redo_logs_shipped</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#is_redo_logs_shipped RecoveryProtectedDatabase#is_redo_logs_shipped}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#subscription_id RecoveryProtectedDatabase#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#compartment_id RecoveryProtectedDatabase#compartment_id}.

---

##### `db_unique_name`<sup>Required</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#db_unique_name RecoveryProtectedDatabase#db_unique_name}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#display_name RecoveryProtectedDatabase#display_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#password RecoveryProtectedDatabase#password}.

---

##### `protection_policy_id`<sup>Required</sup> <a name="protection_policy_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.protectionPolicyId"></a>

```python
protection_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#protection_policy_id RecoveryProtectedDatabase#protection_policy_id}.

---

##### `recovery_service_subnets`<sup>Required</sup> <a name="recovery_service_subnets" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.recoveryServiceSubnets"></a>

```python
recovery_service_subnets: typing.Union[IResolvable, typing.List[RecoveryProtectedDatabaseRecoveryServiceSubnets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>]]

recovery_service_subnets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#recovery_service_subnets RecoveryProtectedDatabase#recovery_service_subnets}

---

##### `database_id`<sup>Optional</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#database_id RecoveryProtectedDatabase#database_id}.

---

##### `database_size`<sup>Optional</sup> <a name="database_size" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.databaseSize"></a>

```python
database_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#database_size RecoveryProtectedDatabase#database_size}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#defined_tags RecoveryProtectedDatabase#defined_tags}.

---

##### `deletion_schedule`<sup>Optional</sup> <a name="deletion_schedule" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.deletionSchedule"></a>

```python
deletion_schedule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#deletion_schedule RecoveryProtectedDatabase#deletion_schedule}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#freeform_tags RecoveryProtectedDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#id RecoveryProtectedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_redo_logs_shipped`<sup>Optional</sup> <a name="is_redo_logs_shipped" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.isRedoLogsShipped"></a>

```python
is_redo_logs_shipped: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#is_redo_logs_shipped RecoveryProtectedDatabase#is_redo_logs_shipped}.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#subscription_id RecoveryProtectedDatabase#subscription_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.timeouts"></a>

```python
timeouts: RecoveryProtectedDatabaseTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#timeouts RecoveryProtectedDatabase#timeouts}

---

### RecoveryProtectedDatabaseMetrics <a name="RecoveryProtectedDatabaseMetrics" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetrics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_protected_database

recoveryProtectedDatabase.RecoveryProtectedDatabaseMetrics()
```


### RecoveryProtectedDatabaseRecoveryServiceSubnets <a name="RecoveryProtectedDatabaseRecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_protected_database

recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets(
  recovery_service_subnet_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets.property.recoveryServiceSubnetId">recovery_service_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#recovery_service_subnet_id RecoveryProtectedDatabase#recovery_service_subnet_id}. |

---

##### `recovery_service_subnet_id`<sup>Required</sup> <a name="recovery_service_subnet_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets.property.recoveryServiceSubnetId"></a>

```python
recovery_service_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#recovery_service_subnet_id RecoveryProtectedDatabase#recovery_service_subnet_id}.

---

### RecoveryProtectedDatabaseTimeouts <a name="RecoveryProtectedDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_protected_database

recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#create RecoveryProtectedDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#delete RecoveryProtectedDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#update RecoveryProtectedDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#create RecoveryProtectedDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#delete RecoveryProtectedDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#update RecoveryProtectedDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecoveryProtectedDatabaseMetricsList <a name="RecoveryProtectedDatabaseMetricsList" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_protected_database

recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RecoveryProtectedDatabaseMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RecoveryProtectedDatabaseMetricsOutputReference <a name="RecoveryProtectedDatabaseMetricsOutputReference" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_protected_database

recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceEstimateInGbs">backup_space_estimate_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceUsedInGbs">backup_space_used_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.currentRetentionPeriodInSeconds">current_retention_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.dbSizeInGbs">db_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.isRedoLogsEnabled">is_redo_logs_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.minimumRecoveryNeededInDays">minimum_recovery_needed_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.unprotectedWindowInSeconds">unprotected_window_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetrics">RecoveryProtectedDatabaseMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_space_estimate_in_gbs`<sup>Required</sup> <a name="backup_space_estimate_in_gbs" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceEstimateInGbs"></a>

```python
backup_space_estimate_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_space_used_in_gbs`<sup>Required</sup> <a name="backup_space_used_in_gbs" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceUsedInGbs"></a>

```python
backup_space_used_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_retention_period_in_seconds`<sup>Required</sup> <a name="current_retention_period_in_seconds" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.currentRetentionPeriodInSeconds"></a>

```python
current_retention_period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_size_in_gbs`<sup>Required</sup> <a name="db_size_in_gbs" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.dbSizeInGbs"></a>

```python
db_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_redo_logs_enabled`<sup>Required</sup> <a name="is_redo_logs_enabled" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.isRedoLogsEnabled"></a>

```python
is_redo_logs_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `minimum_recovery_needed_in_days`<sup>Required</sup> <a name="minimum_recovery_needed_in_days" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.minimumRecoveryNeededInDays"></a>

```python
minimum_recovery_needed_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unprotected_window_in_seconds`<sup>Required</sup> <a name="unprotected_window_in_seconds" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.unprotectedWindowInSeconds"></a>

```python
unprotected_window_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.internalValue"></a>

```python
internal_value: RecoveryProtectedDatabaseMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetrics">RecoveryProtectedDatabaseMetrics</a>

---


### RecoveryProtectedDatabaseRecoveryServiceSubnetsList <a name="RecoveryProtectedDatabaseRecoveryServiceSubnetsList" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_protected_database

recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RecoveryProtectedDatabaseRecoveryServiceSubnets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>]]

---


### RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference <a name="RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_protected_database

recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetIdInput">recovery_service_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId">recovery_service_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `recovery_service_subnet_id_input`<sup>Optional</sup> <a name="recovery_service_subnet_id_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetIdInput"></a>

```python
recovery_service_subnet_id_input: str
```

- *Type:* str

---

##### `recovery_service_subnet_id`<sup>Required</sup> <a name="recovery_service_subnet_id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId"></a>

```python
recovery_service_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RecoveryProtectedDatabaseRecoveryServiceSubnets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>]

---


### RecoveryProtectedDatabaseTimeoutsOutputReference <a name="RecoveryProtectedDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import recovery_protected_database

recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RecoveryProtectedDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a>]

---



