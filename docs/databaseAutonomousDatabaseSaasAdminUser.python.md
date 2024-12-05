# `databaseAutonomousDatabaseSaasAdminUser` Submodule <a name="`databaseAutonomousDatabaseSaasAdminUser` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousDatabaseSaasAdminUser <a name="DatabaseAutonomousDatabaseSaasAdminUser" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user oci_database_autonomous_database_saas_admin_user}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_saas_admin_user

databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_database_id: str,
  access_type: str = None,
  duration: typing.Union[int, float] = None,
  id: str = None,
  password: str = None,
  secret_id: str = None,
  secret_version_number: typing.Union[int, float] = None,
  timeouts: DatabaseAutonomousDatabaseSaasAdminUserTimeouts = None,
  time_saas_admin_user_enabled: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#autonomous_database_id DatabaseAutonomousDatabaseSaasAdminUser#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.accessType">access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#access_type DatabaseAutonomousDatabaseSaasAdminUser#access_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.duration">duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#duration DatabaseAutonomousDatabaseSaasAdminUser#duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#id DatabaseAutonomousDatabaseSaasAdminUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#password DatabaseAutonomousDatabaseSaasAdminUser#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#secret_id DatabaseAutonomousDatabaseSaasAdminUser#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.secretVersionNumber">secret_version_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#secret_version_number DatabaseAutonomousDatabaseSaasAdminUser#secret_version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts">DatabaseAutonomousDatabaseSaasAdminUserTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.timeSaasAdminUserEnabled">time_saas_admin_user_enabled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#time_saas_admin_user_enabled DatabaseAutonomousDatabaseSaasAdminUser#time_saas_admin_user_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.autonomousDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#autonomous_database_id DatabaseAutonomousDatabaseSaasAdminUser#autonomous_database_id}.

---

##### `access_type`<sup>Optional</sup> <a name="access_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.accessType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#access_type DatabaseAutonomousDatabaseSaasAdminUser#access_type}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.duration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#duration DatabaseAutonomousDatabaseSaasAdminUser#duration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#id DatabaseAutonomousDatabaseSaasAdminUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#password DatabaseAutonomousDatabaseSaasAdminUser#password}.

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.secretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#secret_id DatabaseAutonomousDatabaseSaasAdminUser#secret_id}.

---

##### `secret_version_number`<sup>Optional</sup> <a name="secret_version_number" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.secretVersionNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#secret_version_number DatabaseAutonomousDatabaseSaasAdminUser#secret_version_number}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts">DatabaseAutonomousDatabaseSaasAdminUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#timeouts DatabaseAutonomousDatabaseSaasAdminUser#timeouts}

---

##### `time_saas_admin_user_enabled`<sup>Optional</sup> <a name="time_saas_admin_user_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.Initializer.parameter.timeSaasAdminUserEnabled"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#time_saas_admin_user_enabled DatabaseAutonomousDatabaseSaasAdminUser#time_saas_admin_user_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetAccessType">reset_access_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetSecretId">reset_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetSecretVersionNumber">reset_secret_version_number</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetTimeSaasAdminUserEnabled">reset_time_saas_admin_user_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#create DatabaseAutonomousDatabaseSaasAdminUser#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#delete DatabaseAutonomousDatabaseSaasAdminUser#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#update DatabaseAutonomousDatabaseSaasAdminUser#update}.

---

##### `reset_access_type` <a name="reset_access_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetAccessType"></a>

```python
def reset_access_type() -> None
```

##### `reset_duration` <a name="reset_duration" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_password` <a name="reset_password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_secret_id` <a name="reset_secret_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetSecretId"></a>

```python
def reset_secret_id() -> None
```

##### `reset_secret_version_number` <a name="reset_secret_version_number" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetSecretVersionNumber"></a>

```python
def reset_secret_version_number() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_saas_admin_user_enabled` <a name="reset_time_saas_admin_user_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.resetTimeSaasAdminUserEnabled"></a>

```python
def reset_time_saas_admin_user_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseAutonomousDatabaseSaasAdminUser resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_saas_admin_user

databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_saas_admin_user

databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_saas_admin_user

databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_saas_admin_user

databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseAutonomousDatabaseSaasAdminUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseAutonomousDatabaseSaasAdminUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseAutonomousDatabaseSaasAdminUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousDatabaseSaasAdminUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference">DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.autonomousDatabaseIdInput">autonomous_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretVersionNumberInput">secret_version_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts">DatabaseAutonomousDatabaseSaasAdminUserTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeSaasAdminUserEnabledInput">time_saas_admin_user_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretVersionNumber">secret_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeSaasAdminUserEnabled">time_saas_admin_user_enabled</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeouts"></a>

```python
timeouts: DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference">DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference</a>

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `autonomous_database_id_input`<sup>Optional</sup> <a name="autonomous_database_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.autonomousDatabaseIdInput"></a>

```python
autonomous_database_id_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `secret_version_number_input`<sup>Optional</sup> <a name="secret_version_number_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretVersionNumberInput"></a>

```python
secret_version_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseAutonomousDatabaseSaasAdminUserTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts">DatabaseAutonomousDatabaseSaasAdminUserTimeouts</a>]

---

##### `time_saas_admin_user_enabled_input`<sup>Optional</sup> <a name="time_saas_admin_user_enabled_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeSaasAdminUserEnabledInput"></a>

```python
time_saas_admin_user_enabled_input: str
```

- *Type:* str

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_version_number`<sup>Required</sup> <a name="secret_version_number" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.secretVersionNumber"></a>

```python
secret_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_saas_admin_user_enabled`<sup>Required</sup> <a name="time_saas_admin_user_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.timeSaasAdminUserEnabled"></a>

```python
time_saas_admin_user_enabled: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousDatabaseSaasAdminUserConfig <a name="DatabaseAutonomousDatabaseSaasAdminUserConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_saas_admin_user

databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_database_id: str,
  access_type: str = None,
  duration: typing.Union[int, float] = None,
  id: str = None,
  password: str = None,
  secret_id: str = None,
  secret_version_number: typing.Union[int, float] = None,
  timeouts: DatabaseAutonomousDatabaseSaasAdminUserTimeouts = None,
  time_saas_admin_user_enabled: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#autonomous_database_id DatabaseAutonomousDatabaseSaasAdminUser#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.accessType">access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#access_type DatabaseAutonomousDatabaseSaasAdminUser#access_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#duration DatabaseAutonomousDatabaseSaasAdminUser#duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#id DatabaseAutonomousDatabaseSaasAdminUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#password DatabaseAutonomousDatabaseSaasAdminUser#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#secret_id DatabaseAutonomousDatabaseSaasAdminUser#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.secretVersionNumber">secret_version_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#secret_version_number DatabaseAutonomousDatabaseSaasAdminUser#secret_version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts">DatabaseAutonomousDatabaseSaasAdminUserTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.timeSaasAdminUserEnabled">time_saas_admin_user_enabled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#time_saas_admin_user_enabled DatabaseAutonomousDatabaseSaasAdminUser#time_saas_admin_user_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#autonomous_database_id DatabaseAutonomousDatabaseSaasAdminUser#autonomous_database_id}.

---

##### `access_type`<sup>Optional</sup> <a name="access_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#access_type DatabaseAutonomousDatabaseSaasAdminUser#access_type}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#duration DatabaseAutonomousDatabaseSaasAdminUser#duration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#id DatabaseAutonomousDatabaseSaasAdminUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#password DatabaseAutonomousDatabaseSaasAdminUser#password}.

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#secret_id DatabaseAutonomousDatabaseSaasAdminUser#secret_id}.

---

##### `secret_version_number`<sup>Optional</sup> <a name="secret_version_number" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.secretVersionNumber"></a>

```python
secret_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#secret_version_number DatabaseAutonomousDatabaseSaasAdminUser#secret_version_number}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.timeouts"></a>

```python
timeouts: DatabaseAutonomousDatabaseSaasAdminUserTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts">DatabaseAutonomousDatabaseSaasAdminUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#timeouts DatabaseAutonomousDatabaseSaasAdminUser#timeouts}

---

##### `time_saas_admin_user_enabled`<sup>Optional</sup> <a name="time_saas_admin_user_enabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserConfig.property.timeSaasAdminUserEnabled"></a>

```python
time_saas_admin_user_enabled: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#time_saas_admin_user_enabled DatabaseAutonomousDatabaseSaasAdminUser#time_saas_admin_user_enabled}.

---

### DatabaseAutonomousDatabaseSaasAdminUserTimeouts <a name="DatabaseAutonomousDatabaseSaasAdminUserTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_saas_admin_user

databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#create DatabaseAutonomousDatabaseSaasAdminUser#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#delete DatabaseAutonomousDatabaseSaasAdminUser#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#update DatabaseAutonomousDatabaseSaasAdminUser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#create DatabaseAutonomousDatabaseSaasAdminUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#delete DatabaseAutonomousDatabaseSaasAdminUser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_saas_admin_user#update DatabaseAutonomousDatabaseSaasAdminUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference <a name="DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_saas_admin_user

databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts">DatabaseAutonomousDatabaseSaasAdminUserTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseAutonomousDatabaseSaasAdminUserTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSaasAdminUser.DatabaseAutonomousDatabaseSaasAdminUserTimeouts">DatabaseAutonomousDatabaseSaasAdminUserTimeouts</a>]

---



