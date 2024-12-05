# `fleetAppsManagementFleetCredential` Submodule <a name="`fleetAppsManagementFleetCredential` Submodule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetAppsManagementFleetCredential <a name="FleetAppsManagementFleetCredential" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential oci_fleet_apps_management_fleet_credential}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_credential

fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential(
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
  display_name: str,
  entity_specifics: FleetAppsManagementFleetCredentialEntitySpecifics,
  fleet_id: str,
  password: FleetAppsManagementFleetCredentialPassword,
  user: FleetAppsManagementFleetCredentialUser,
  id: str = None,
  timeouts: FleetAppsManagementFleetCredentialTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#compartment_id FleetAppsManagementFleetCredential#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#display_name FleetAppsManagementFleetCredential#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.entitySpecifics">entity_specifics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a></code> | entity_specifics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#fleet_id FleetAppsManagementFleetCredential#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a></code> | password block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a></code> | user block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#id FleetAppsManagementFleetCredential#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#compartment_id FleetAppsManagementFleetCredential#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#display_name FleetAppsManagementFleetCredential#display_name}.

---

##### `entity_specifics`<sup>Required</sup> <a name="entity_specifics" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.entitySpecifics"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a>

entity_specifics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#entity_specifics FleetAppsManagementFleetCredential#entity_specifics}

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.fleetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#fleet_id FleetAppsManagementFleetCredential#fleet_id}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.password"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#password FleetAppsManagementFleetCredential#password}

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.user"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#user FleetAppsManagementFleetCredential#user}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#id FleetAppsManagementFleetCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#timeouts FleetAppsManagementFleetCredential#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putEntitySpecifics">put_entity_specifics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putPassword">put_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putUser">put_user</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_entity_specifics` <a name="put_entity_specifics" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putEntitySpecifics"></a>

```python
def put_entity_specifics(
  credential_level: str,
  resource_id: str,
  target: str
) -> None
```

###### `credential_level`<sup>Required</sup> <a name="credential_level" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putEntitySpecifics.parameter.credentialLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_level FleetAppsManagementFleetCredential#credential_level}.

---

###### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putEntitySpecifics.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#resource_id FleetAppsManagementFleetCredential#resource_id}.

---

###### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putEntitySpecifics.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#target FleetAppsManagementFleetCredential#target}.

---

##### `put_password` <a name="put_password" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putPassword"></a>

```python
def put_password(
  credential_type: str,
  key_id: str = None,
  key_version: str = None,
  secret_id: str = None,
  secret_version: str = None,
  value: str = None,
  vault_id: str = None
) -> None
```

###### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putPassword.parameter.credentialType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_type FleetAppsManagementFleetCredential#credential_type}.

---

###### `key_id`<sup>Optional</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putPassword.parameter.keyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_id FleetAppsManagementFleetCredential#key_id}.

---

###### `key_version`<sup>Optional</sup> <a name="key_version" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putPassword.parameter.keyVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_version FleetAppsManagementFleetCredential#key_version}.

---

###### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putPassword.parameter.secretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_id FleetAppsManagementFleetCredential#secret_id}.

---

###### `secret_version`<sup>Optional</sup> <a name="secret_version" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putPassword.parameter.secretVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_version FleetAppsManagementFleetCredential#secret_version}.

---

###### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putPassword.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#value FleetAppsManagementFleetCredential#value}.

---

###### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putPassword.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#vault_id FleetAppsManagementFleetCredential#vault_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#create FleetAppsManagementFleetCredential#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#delete FleetAppsManagementFleetCredential#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#update FleetAppsManagementFleetCredential#update}.

---

##### `put_user` <a name="put_user" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putUser"></a>

```python
def put_user(
  credential_type: str,
  key_id: str = None,
  key_version: str = None,
  secret_id: str = None,
  secret_version: str = None,
  value: str = None,
  vault_id: str = None
) -> None
```

###### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putUser.parameter.credentialType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_type FleetAppsManagementFleetCredential#credential_type}.

---

###### `key_id`<sup>Optional</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putUser.parameter.keyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_id FleetAppsManagementFleetCredential#key_id}.

---

###### `key_version`<sup>Optional</sup> <a name="key_version" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putUser.parameter.keyVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_version FleetAppsManagementFleetCredential#key_version}.

---

###### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putUser.parameter.secretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_id FleetAppsManagementFleetCredential#secret_id}.

---

###### `secret_version`<sup>Optional</sup> <a name="secret_version" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putUser.parameter.secretVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_version FleetAppsManagementFleetCredential#secret_version}.

---

###### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putUser.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#value FleetAppsManagementFleetCredential#value}.

---

###### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.putUser.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#vault_id FleetAppsManagementFleetCredential#vault_id}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FleetAppsManagementFleetCredential resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_credential

fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_credential

fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_credential

fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_credential

fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FleetAppsManagementFleetCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FleetAppsManagementFleetCredential to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FleetAppsManagementFleetCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FleetAppsManagementFleetCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.entitySpecifics">entity_specifics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference">FleetAppsManagementFleetCredentialEntitySpecificsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference">FleetAppsManagementFleetCredentialPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference">FleetAppsManagementFleetCredentialTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference">FleetAppsManagementFleetCredentialUserOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.entitySpecificsInput">entity_specifics_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.passwordInput">password_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.userInput">user_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entity_specifics`<sup>Required</sup> <a name="entity_specifics" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.entitySpecifics"></a>

```python
entity_specifics: FleetAppsManagementFleetCredentialEntitySpecificsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference">FleetAppsManagementFleetCredentialEntitySpecificsOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.password"></a>

```python
password: FleetAppsManagementFleetCredentialPasswordOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference">FleetAppsManagementFleetCredentialPasswordOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeouts"></a>

```python
timeouts: FleetAppsManagementFleetCredentialTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference">FleetAppsManagementFleetCredentialTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.user"></a>

```python
user: FleetAppsManagementFleetCredentialUserOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference">FleetAppsManagementFleetCredentialUserOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `entity_specifics_input`<sup>Optional</sup> <a name="entity_specifics_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.entitySpecificsInput"></a>

```python
entity_specifics_input: FleetAppsManagementFleetCredentialEntitySpecifics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a>

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.passwordInput"></a>

```python
password_input: FleetAppsManagementFleetCredentialPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FleetAppsManagementFleetCredentialTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a>]

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.userInput"></a>

```python
user_input: FleetAppsManagementFleetCredentialUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredential.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FleetAppsManagementFleetCredentialConfig <a name="FleetAppsManagementFleetCredentialConfig" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_credential

fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  entity_specifics: FleetAppsManagementFleetCredentialEntitySpecifics,
  fleet_id: str,
  password: FleetAppsManagementFleetCredentialPassword,
  user: FleetAppsManagementFleetCredentialUser,
  id: str = None,
  timeouts: FleetAppsManagementFleetCredentialTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#compartment_id FleetAppsManagementFleetCredential#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#display_name FleetAppsManagementFleetCredential#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.entitySpecifics">entity_specifics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a></code> | entity_specifics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#fleet_id FleetAppsManagementFleetCredential#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a></code> | password block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a></code> | user block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#id FleetAppsManagementFleetCredential#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#compartment_id FleetAppsManagementFleetCredential#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#display_name FleetAppsManagementFleetCredential#display_name}.

---

##### `entity_specifics`<sup>Required</sup> <a name="entity_specifics" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.entitySpecifics"></a>

```python
entity_specifics: FleetAppsManagementFleetCredentialEntitySpecifics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a>

entity_specifics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#entity_specifics FleetAppsManagementFleetCredential#entity_specifics}

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#fleet_id FleetAppsManagementFleetCredential#fleet_id}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.password"></a>

```python
password: FleetAppsManagementFleetCredentialPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#password FleetAppsManagementFleetCredential#password}

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.user"></a>

```python
user: FleetAppsManagementFleetCredentialUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#user FleetAppsManagementFleetCredential#user}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#id FleetAppsManagementFleetCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialConfig.property.timeouts"></a>

```python
timeouts: FleetAppsManagementFleetCredentialTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#timeouts FleetAppsManagementFleetCredential#timeouts}

---

### FleetAppsManagementFleetCredentialEntitySpecifics <a name="FleetAppsManagementFleetCredentialEntitySpecifics" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_credential

fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics(
  credential_level: str,
  resource_id: str,
  target: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.credentialLevel">credential_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_level FleetAppsManagementFleetCredential#credential_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#resource_id FleetAppsManagementFleetCredential#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#target FleetAppsManagementFleetCredential#target}. |

---

##### `credential_level`<sup>Required</sup> <a name="credential_level" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.credentialLevel"></a>

```python
credential_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_level FleetAppsManagementFleetCredential#credential_level}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#resource_id FleetAppsManagementFleetCredential#resource_id}.

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#target FleetAppsManagementFleetCredential#target}.

---

### FleetAppsManagementFleetCredentialPassword <a name="FleetAppsManagementFleetCredentialPassword" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_credential

fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword(
  credential_type: str,
  key_id: str = None,
  key_version: str = None,
  secret_id: str = None,
  secret_version: str = None,
  value: str = None,
  vault_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.credentialType">credential_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_type FleetAppsManagementFleetCredential#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_id FleetAppsManagementFleetCredential#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.keyVersion">key_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_version FleetAppsManagementFleetCredential#key_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_id FleetAppsManagementFleetCredential#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.secretVersion">secret_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_version FleetAppsManagementFleetCredential#secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#value FleetAppsManagementFleetCredential#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#vault_id FleetAppsManagementFleetCredential#vault_id}. |

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_type FleetAppsManagementFleetCredential#credential_type}.

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_id FleetAppsManagementFleetCredential#key_id}.

---

##### `key_version`<sup>Optional</sup> <a name="key_version" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.keyVersion"></a>

```python
key_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_version FleetAppsManagementFleetCredential#key_version}.

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_id FleetAppsManagementFleetCredential#secret_id}.

---

##### `secret_version`<sup>Optional</sup> <a name="secret_version" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_version FleetAppsManagementFleetCredential#secret_version}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#value FleetAppsManagementFleetCredential#value}.

---

##### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#vault_id FleetAppsManagementFleetCredential#vault_id}.

---

### FleetAppsManagementFleetCredentialTimeouts <a name="FleetAppsManagementFleetCredentialTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_credential

fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#create FleetAppsManagementFleetCredential#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#delete FleetAppsManagementFleetCredential#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#update FleetAppsManagementFleetCredential#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#create FleetAppsManagementFleetCredential#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#delete FleetAppsManagementFleetCredential#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#update FleetAppsManagementFleetCredential#update}.

---

### FleetAppsManagementFleetCredentialUser <a name="FleetAppsManagementFleetCredentialUser" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_credential

fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser(
  credential_type: str,
  key_id: str = None,
  key_version: str = None,
  secret_id: str = None,
  secret_version: str = None,
  value: str = None,
  vault_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.credentialType">credential_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_type FleetAppsManagementFleetCredential#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_id FleetAppsManagementFleetCredential#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.keyVersion">key_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_version FleetAppsManagementFleetCredential#key_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_id FleetAppsManagementFleetCredential#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.secretVersion">secret_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_version FleetAppsManagementFleetCredential#secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#value FleetAppsManagementFleetCredential#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#vault_id FleetAppsManagementFleetCredential#vault_id}. |

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#credential_type FleetAppsManagementFleetCredential#credential_type}.

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_id FleetAppsManagementFleetCredential#key_id}.

---

##### `key_version`<sup>Optional</sup> <a name="key_version" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.keyVersion"></a>

```python
key_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#key_version FleetAppsManagementFleetCredential#key_version}.

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_id FleetAppsManagementFleetCredential#secret_id}.

---

##### `secret_version`<sup>Optional</sup> <a name="secret_version" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#secret_version FleetAppsManagementFleetCredential#secret_version}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#value FleetAppsManagementFleetCredential#value}.

---

##### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_credential#vault_id FleetAppsManagementFleetCredential#vault_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetAppsManagementFleetCredentialEntitySpecificsOutputReference <a name="FleetAppsManagementFleetCredentialEntitySpecificsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_credential

fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.credentialLevelInput">credential_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.credentialLevel">credential_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_level_input`<sup>Optional</sup> <a name="credential_level_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.credentialLevelInput"></a>

```python
credential_level_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `credential_level`<sup>Required</sup> <a name="credential_level" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.credentialLevel"></a>

```python
credential_level: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecificsOutputReference.property.internalValue"></a>

```python
internal_value: FleetAppsManagementFleetCredentialEntitySpecifics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialEntitySpecifics">FleetAppsManagementFleetCredentialEntitySpecifics</a>

---


### FleetAppsManagementFleetCredentialPasswordOutputReference <a name="FleetAppsManagementFleetCredentialPasswordOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_credential

fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetKeyId">reset_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetKeyVersion">reset_key_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetSecretId">reset_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetSecretVersion">reset_secret_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetVaultId">reset_vault_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_id` <a name="reset_key_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetKeyId"></a>

```python
def reset_key_id() -> None
```

##### `reset_key_version` <a name="reset_key_version" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetKeyVersion"></a>

```python
def reset_key_version() -> None
```

##### `reset_secret_id` <a name="reset_secret_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetSecretId"></a>

```python
def reset_secret_id() -> None
```

##### `reset_secret_version` <a name="reset_secret_version" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetSecretVersion"></a>

```python
def reset_secret_version() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_vault_id` <a name="reset_vault_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.resetVaultId"></a>

```python
def reset_vault_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.credentialTypeInput">credential_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyVersionInput">key_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyVersion">key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_type_input`<sup>Optional</sup> <a name="credential_type_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.credentialTypeInput"></a>

```python
credential_type_input: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `key_version_input`<sup>Optional</sup> <a name="key_version_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyVersionInput"></a>

```python
key_version_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `key_version`<sup>Required</sup> <a name="key_version" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.keyVersion"></a>

```python
key_version: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPasswordOutputReference.property.internalValue"></a>

```python
internal_value: FleetAppsManagementFleetCredentialPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialPassword">FleetAppsManagementFleetCredentialPassword</a>

---


### FleetAppsManagementFleetCredentialTimeoutsOutputReference <a name="FleetAppsManagementFleetCredentialTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_credential

fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FleetAppsManagementFleetCredentialTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialTimeouts">FleetAppsManagementFleetCredentialTimeouts</a>]

---


### FleetAppsManagementFleetCredentialUserOutputReference <a name="FleetAppsManagementFleetCredentialUserOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_credential

fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetKeyId">reset_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetKeyVersion">reset_key_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetSecretId">reset_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetSecretVersion">reset_secret_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetVaultId">reset_vault_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_id` <a name="reset_key_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetKeyId"></a>

```python
def reset_key_id() -> None
```

##### `reset_key_version` <a name="reset_key_version" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetKeyVersion"></a>

```python
def reset_key_version() -> None
```

##### `reset_secret_id` <a name="reset_secret_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetSecretId"></a>

```python
def reset_secret_id() -> None
```

##### `reset_secret_version` <a name="reset_secret_version" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetSecretVersion"></a>

```python
def reset_secret_version() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_vault_id` <a name="reset_vault_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.resetVaultId"></a>

```python
def reset_vault_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.credentialTypeInput">credential_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyVersionInput">key_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyVersion">key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_type_input`<sup>Optional</sup> <a name="credential_type_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.credentialTypeInput"></a>

```python
credential_type_input: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `key_version_input`<sup>Optional</sup> <a name="key_version_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyVersionInput"></a>

```python
key_version_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `key_version`<sup>Required</sup> <a name="key_version" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.keyVersion"></a>

```python
key_version: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUserOutputReference.property.internalValue"></a>

```python
internal_value: FleetAppsManagementFleetCredentialUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetCredential.FleetAppsManagementFleetCredentialUser">FleetAppsManagementFleetCredentialUser</a>

---



