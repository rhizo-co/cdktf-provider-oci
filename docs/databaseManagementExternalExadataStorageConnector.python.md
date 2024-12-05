# `databaseManagementExternalExadataStorageConnector` Submodule <a name="`databaseManagementExternalExadataStorageConnector` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalExadataStorageConnector <a name="DatabaseManagementExternalExadataStorageConnector" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector oci_database_management_external_exadata_storage_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_storage_connector

databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_id: str,
  connection_uri: str,
  connector_name: str,
  credential_info: DatabaseManagementExternalExadataStorageConnectorCredentialInfo,
  storage_server_id: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DatabaseManagementExternalExadataStorageConnectorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#agent_id DatabaseManagementExternalExadataStorageConnector#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.connectionUri">connection_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#connection_uri DatabaseManagementExternalExadataStorageConnector#connection_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.connectorName">connector_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#connector_name DatabaseManagementExternalExadataStorageConnector#connector_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.credentialInfo">credential_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo">DatabaseManagementExternalExadataStorageConnectorCredentialInfo</a></code> | credential_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.storageServerId">storage_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#storage_server_id DatabaseManagementExternalExadataStorageConnector#storage_server_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#defined_tags DatabaseManagementExternalExadataStorageConnector#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#freeform_tags DatabaseManagementExternalExadataStorageConnector#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#id DatabaseManagementExternalExadataStorageConnector#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts">DatabaseManagementExternalExadataStorageConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.agentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#agent_id DatabaseManagementExternalExadataStorageConnector#agent_id}.

---

##### `connection_uri`<sup>Required</sup> <a name="connection_uri" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.connectionUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#connection_uri DatabaseManagementExternalExadataStorageConnector#connection_uri}.

---

##### `connector_name`<sup>Required</sup> <a name="connector_name" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.connectorName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#connector_name DatabaseManagementExternalExadataStorageConnector#connector_name}.

---

##### `credential_info`<sup>Required</sup> <a name="credential_info" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.credentialInfo"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo">DatabaseManagementExternalExadataStorageConnectorCredentialInfo</a>

credential_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#credential_info DatabaseManagementExternalExadataStorageConnector#credential_info}

---

##### `storage_server_id`<sup>Required</sup> <a name="storage_server_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.storageServerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#storage_server_id DatabaseManagementExternalExadataStorageConnector#storage_server_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#defined_tags DatabaseManagementExternalExadataStorageConnector#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#freeform_tags DatabaseManagementExternalExadataStorageConnector#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#id DatabaseManagementExternalExadataStorageConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts">DatabaseManagementExternalExadataStorageConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#timeouts DatabaseManagementExternalExadataStorageConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putCredentialInfo">put_credential_info</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_credential_info` <a name="put_credential_info" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putCredentialInfo"></a>

```python
def put_credential_info(
  password: str,
  username: str,
  ssl_trust_store_location: str = None,
  ssl_trust_store_password: str = None,
  ssl_trust_store_type: str = None
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putCredentialInfo.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#password DatabaseManagementExternalExadataStorageConnector#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putCredentialInfo.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#username DatabaseManagementExternalExadataStorageConnector#username}.

---

###### `ssl_trust_store_location`<sup>Optional</sup> <a name="ssl_trust_store_location" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putCredentialInfo.parameter.sslTrustStoreLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#ssl_trust_store_location DatabaseManagementExternalExadataStorageConnector#ssl_trust_store_location}.

---

###### `ssl_trust_store_password`<sup>Optional</sup> <a name="ssl_trust_store_password" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putCredentialInfo.parameter.sslTrustStorePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#ssl_trust_store_password DatabaseManagementExternalExadataStorageConnector#ssl_trust_store_password}.

---

###### `ssl_trust_store_type`<sup>Optional</sup> <a name="ssl_trust_store_type" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putCredentialInfo.parameter.sslTrustStoreType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#ssl_trust_store_type DatabaseManagementExternalExadataStorageConnector#ssl_trust_store_type}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#create DatabaseManagementExternalExadataStorageConnector#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#delete DatabaseManagementExternalExadataStorageConnector#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#update DatabaseManagementExternalExadataStorageConnector#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalExadataStorageConnector resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_storage_connector

databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_storage_connector

databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_storage_connector

databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_storage_connector

databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseManagementExternalExadataStorageConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseManagementExternalExadataStorageConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseManagementExternalExadataStorageConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalExadataStorageConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.additionalDetails">additional_details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.credentialInfo">credential_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference">DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.exadataInfrastructureId">exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.internalId">internal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference">DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connectionUriInput">connection_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connectorNameInput">connector_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.credentialInfoInput">credential_info_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo">DatabaseManagementExternalExadataStorageConnectorCredentialInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.storageServerIdInput">storage_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts">DatabaseManagementExternalExadataStorageConnectorTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connectionUri">connection_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connectorName">connector_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.storageServerId">storage_server_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_details`<sup>Required</sup> <a name="additional_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.additionalDetails"></a>

```python
additional_details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `credential_info`<sup>Required</sup> <a name="credential_info" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.credentialInfo"></a>

```python
credential_info: DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference">DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exadata_infrastructure_id`<sup>Required</sup> <a name="exadata_infrastructure_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.exadataInfrastructureId"></a>

```python
exadata_infrastructure_id: str
```

- *Type:* str

---

##### `internal_id`<sup>Required</sup> <a name="internal_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.internalId"></a>

```python
internal_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.timeouts"></a>

```python
timeouts: DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference">DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `connection_uri_input`<sup>Optional</sup> <a name="connection_uri_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connectionUriInput"></a>

```python
connection_uri_input: str
```

- *Type:* str

---

##### `connector_name_input`<sup>Optional</sup> <a name="connector_name_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connectorNameInput"></a>

```python
connector_name_input: str
```

- *Type:* str

---

##### `credential_info_input`<sup>Optional</sup> <a name="credential_info_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.credentialInfoInput"></a>

```python
credential_info_input: DatabaseManagementExternalExadataStorageConnectorCredentialInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo">DatabaseManagementExternalExadataStorageConnectorCredentialInfo</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `storage_server_id_input`<sup>Optional</sup> <a name="storage_server_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.storageServerIdInput"></a>

```python
storage_server_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseManagementExternalExadataStorageConnectorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts">DatabaseManagementExternalExadataStorageConnectorTimeouts</a>]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `connection_uri`<sup>Required</sup> <a name="connection_uri" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connectionUri"></a>

```python
connection_uri: str
```

- *Type:* str

---

##### `connector_name`<sup>Required</sup> <a name="connector_name" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.connectorName"></a>

```python
connector_name: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `storage_server_id`<sup>Required</sup> <a name="storage_server_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.storageServerId"></a>

```python
storage_server_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalExadataStorageConnectorConfig <a name="DatabaseManagementExternalExadataStorageConnectorConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_storage_connector

databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_id: str,
  connection_uri: str,
  connector_name: str,
  credential_info: DatabaseManagementExternalExadataStorageConnectorCredentialInfo,
  storage_server_id: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DatabaseManagementExternalExadataStorageConnectorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#agent_id DatabaseManagementExternalExadataStorageConnector#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.connectionUri">connection_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#connection_uri DatabaseManagementExternalExadataStorageConnector#connection_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.connectorName">connector_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#connector_name DatabaseManagementExternalExadataStorageConnector#connector_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.credentialInfo">credential_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo">DatabaseManagementExternalExadataStorageConnectorCredentialInfo</a></code> | credential_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.storageServerId">storage_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#storage_server_id DatabaseManagementExternalExadataStorageConnector#storage_server_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#defined_tags DatabaseManagementExternalExadataStorageConnector#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#freeform_tags DatabaseManagementExternalExadataStorageConnector#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#id DatabaseManagementExternalExadataStorageConnector#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts">DatabaseManagementExternalExadataStorageConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#agent_id DatabaseManagementExternalExadataStorageConnector#agent_id}.

---

##### `connection_uri`<sup>Required</sup> <a name="connection_uri" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.connectionUri"></a>

```python
connection_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#connection_uri DatabaseManagementExternalExadataStorageConnector#connection_uri}.

---

##### `connector_name`<sup>Required</sup> <a name="connector_name" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.connectorName"></a>

```python
connector_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#connector_name DatabaseManagementExternalExadataStorageConnector#connector_name}.

---

##### `credential_info`<sup>Required</sup> <a name="credential_info" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.credentialInfo"></a>

```python
credential_info: DatabaseManagementExternalExadataStorageConnectorCredentialInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo">DatabaseManagementExternalExadataStorageConnectorCredentialInfo</a>

credential_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#credential_info DatabaseManagementExternalExadataStorageConnector#credential_info}

---

##### `storage_server_id`<sup>Required</sup> <a name="storage_server_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.storageServerId"></a>

```python
storage_server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#storage_server_id DatabaseManagementExternalExadataStorageConnector#storage_server_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#defined_tags DatabaseManagementExternalExadataStorageConnector#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#freeform_tags DatabaseManagementExternalExadataStorageConnector#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#id DatabaseManagementExternalExadataStorageConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorConfig.property.timeouts"></a>

```python
timeouts: DatabaseManagementExternalExadataStorageConnectorTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts">DatabaseManagementExternalExadataStorageConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#timeouts DatabaseManagementExternalExadataStorageConnector#timeouts}

---

### DatabaseManagementExternalExadataStorageConnectorCredentialInfo <a name="DatabaseManagementExternalExadataStorageConnectorCredentialInfo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_storage_connector

databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo(
  password: str,
  username: str,
  ssl_trust_store_location: str = None,
  ssl_trust_store_password: str = None,
  ssl_trust_store_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#password DatabaseManagementExternalExadataStorageConnector#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#username DatabaseManagementExternalExadataStorageConnector#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.sslTrustStoreLocation">ssl_trust_store_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#ssl_trust_store_location DatabaseManagementExternalExadataStorageConnector#ssl_trust_store_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.sslTrustStorePassword">ssl_trust_store_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#ssl_trust_store_password DatabaseManagementExternalExadataStorageConnector#ssl_trust_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.sslTrustStoreType">ssl_trust_store_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#ssl_trust_store_type DatabaseManagementExternalExadataStorageConnector#ssl_trust_store_type}. |

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#password DatabaseManagementExternalExadataStorageConnector#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#username DatabaseManagementExternalExadataStorageConnector#username}.

---

##### `ssl_trust_store_location`<sup>Optional</sup> <a name="ssl_trust_store_location" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.sslTrustStoreLocation"></a>

```python
ssl_trust_store_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#ssl_trust_store_location DatabaseManagementExternalExadataStorageConnector#ssl_trust_store_location}.

---

##### `ssl_trust_store_password`<sup>Optional</sup> <a name="ssl_trust_store_password" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.sslTrustStorePassword"></a>

```python
ssl_trust_store_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#ssl_trust_store_password DatabaseManagementExternalExadataStorageConnector#ssl_trust_store_password}.

---

##### `ssl_trust_store_type`<sup>Optional</sup> <a name="ssl_trust_store_type" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo.property.sslTrustStoreType"></a>

```python
ssl_trust_store_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#ssl_trust_store_type DatabaseManagementExternalExadataStorageConnector#ssl_trust_store_type}.

---

### DatabaseManagementExternalExadataStorageConnectorTimeouts <a name="DatabaseManagementExternalExadataStorageConnectorTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_storage_connector

databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#create DatabaseManagementExternalExadataStorageConnector#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#delete DatabaseManagementExternalExadataStorageConnector#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#update DatabaseManagementExternalExadataStorageConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#create DatabaseManagementExternalExadataStorageConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#delete DatabaseManagementExternalExadataStorageConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_connector#update DatabaseManagementExternalExadataStorageConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference <a name="DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_storage_connector

databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resetSslTrustStoreLocation">reset_ssl_trust_store_location</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resetSslTrustStorePassword">reset_ssl_trust_store_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resetSslTrustStoreType">reset_ssl_trust_store_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ssl_trust_store_location` <a name="reset_ssl_trust_store_location" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resetSslTrustStoreLocation"></a>

```python
def reset_ssl_trust_store_location() -> None
```

##### `reset_ssl_trust_store_password` <a name="reset_ssl_trust_store_password" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resetSslTrustStorePassword"></a>

```python
def reset_ssl_trust_store_password() -> None
```

##### `reset_ssl_trust_store_type` <a name="reset_ssl_trust_store_type" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resetSslTrustStoreType"></a>

```python
def reset_ssl_trust_store_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreLocationInput">ssl_trust_store_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStorePasswordInput">ssl_trust_store_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreTypeInput">ssl_trust_store_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreLocation">ssl_trust_store_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStorePassword">ssl_trust_store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreType">ssl_trust_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo">DatabaseManagementExternalExadataStorageConnectorCredentialInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `ssl_trust_store_location_input`<sup>Optional</sup> <a name="ssl_trust_store_location_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreLocationInput"></a>

```python
ssl_trust_store_location_input: str
```

- *Type:* str

---

##### `ssl_trust_store_password_input`<sup>Optional</sup> <a name="ssl_trust_store_password_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStorePasswordInput"></a>

```python
ssl_trust_store_password_input: str
```

- *Type:* str

---

##### `ssl_trust_store_type_input`<sup>Optional</sup> <a name="ssl_trust_store_type_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreTypeInput"></a>

```python
ssl_trust_store_type_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `ssl_trust_store_location`<sup>Required</sup> <a name="ssl_trust_store_location" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreLocation"></a>

```python
ssl_trust_store_location: str
```

- *Type:* str

---

##### `ssl_trust_store_password`<sup>Required</sup> <a name="ssl_trust_store_password" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStorePassword"></a>

```python
ssl_trust_store_password: str
```

- *Type:* str

---

##### `ssl_trust_store_type`<sup>Required</sup> <a name="ssl_trust_store_type" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreType"></a>

```python
ssl_trust_store_type: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseManagementExternalExadataStorageConnectorCredentialInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorCredentialInfo">DatabaseManagementExternalExadataStorageConnectorCredentialInfo</a>

---


### DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference <a name="DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_storage_connector

databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts">DatabaseManagementExternalExadataStorageConnectorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseManagementExternalExadataStorageConnectorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageConnector.DatabaseManagementExternalExadataStorageConnectorTimeouts">DatabaseManagementExternalExadataStorageConnectorTimeouts</a>]

---



