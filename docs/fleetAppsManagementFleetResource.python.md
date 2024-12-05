# `fleetAppsManagementFleetResource` Submodule <a name="`fleetAppsManagementFleetResource` Submodule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetAppsManagementFleetResource <a name="FleetAppsManagementFleetResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource oci_fleet_apps_management_fleet_resource}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_resource

fleetAppsManagementFleetResource.FleetAppsManagementFleetResource(
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
  fleet_id: str,
  resource_id: str,
  tenancy_id: str,
  id: str = None,
  resource_region: str = None,
  resource_type: str = None,
  timeouts: FleetAppsManagementFleetResourceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#compartment_id FleetAppsManagementFleetResource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#fleet_id FleetAppsManagementFleetResource#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_id FleetAppsManagementFleetResource#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#tenancy_id FleetAppsManagementFleetResource#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#id FleetAppsManagementFleetResource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.resourceRegion">resource_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_region FleetAppsManagementFleetResource#resource_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_type FleetAppsManagementFleetResource#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#compartment_id FleetAppsManagementFleetResource#compartment_id}.

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.fleetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#fleet_id FleetAppsManagementFleetResource#fleet_id}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_id FleetAppsManagementFleetResource#resource_id}.

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.tenancyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#tenancy_id FleetAppsManagementFleetResource#tenancy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#id FleetAppsManagementFleetResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_region`<sup>Optional</sup> <a name="resource_region" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.resourceRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_region FleetAppsManagementFleetResource#resource_region}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_type FleetAppsManagementFleetResource#resource_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#timeouts FleetAppsManagementFleetResource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetResourceRegion">reset_resource_region</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#create FleetAppsManagementFleetResource#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#delete FleetAppsManagementFleetResource#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#update FleetAppsManagementFleetResource#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_region` <a name="reset_resource_region" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetResourceRegion"></a>

```python
def reset_resource_region() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FleetAppsManagementFleetResource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_resource

fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_resource

fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_resource

fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_resource

fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FleetAppsManagementFleetResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FleetAppsManagementFleetResource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FleetAppsManagementFleetResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FleetAppsManagementFleetResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.applicationType">application_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.compartment">compartment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.complianceState">compliance_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.environmentType">environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.productCount">product_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.targetCount">target_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.tenancyName">tenancy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference">FleetAppsManagementFleetResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceRegionInput">resource_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.tenancyIdInput">tenancy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceRegion">resource_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_type`<sup>Required</sup> <a name="application_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.applicationType"></a>

```python
application_type: str
```

- *Type:* str

---

##### `compartment`<sup>Required</sup> <a name="compartment" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.compartment"></a>

```python
compartment: str
```

- *Type:* str

---

##### `compliance_state`<sup>Required</sup> <a name="compliance_state" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.complianceState"></a>

```python
compliance_state: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `environment_type`<sup>Required</sup> <a name="environment_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.environmentType"></a>

```python
environment_type: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `product_count`<sup>Required</sup> <a name="product_count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.productCount"></a>

```python
product_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_count`<sup>Required</sup> <a name="target_count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.targetCount"></a>

```python
target_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tenancy_name`<sup>Required</sup> <a name="tenancy_name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.tenancyName"></a>

```python
tenancy_name: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.timeouts"></a>

```python
timeouts: FleetAppsManagementFleetResourceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference">FleetAppsManagementFleetResourceTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_region_input`<sup>Optional</sup> <a name="resource_region_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceRegionInput"></a>

```python
resource_region_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `tenancy_id_input`<sup>Optional</sup> <a name="tenancy_id_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.tenancyIdInput"></a>

```python
tenancy_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FleetAppsManagementFleetResourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_region`<sup>Required</sup> <a name="resource_region" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceRegion"></a>

```python
resource_region: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FleetAppsManagementFleetResourceConfig <a name="FleetAppsManagementFleetResourceConfig" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_resource

fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  fleet_id: str,
  resource_id: str,
  tenancy_id: str,
  id: str = None,
  resource_region: str = None,
  resource_type: str = None,
  timeouts: FleetAppsManagementFleetResourceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#compartment_id FleetAppsManagementFleetResource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#fleet_id FleetAppsManagementFleetResource#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_id FleetAppsManagementFleetResource#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#tenancy_id FleetAppsManagementFleetResource#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#id FleetAppsManagementFleetResource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.resourceRegion">resource_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_region FleetAppsManagementFleetResource#resource_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_type FleetAppsManagementFleetResource#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#compartment_id FleetAppsManagementFleetResource#compartment_id}.

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#fleet_id FleetAppsManagementFleetResource#fleet_id}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_id FleetAppsManagementFleetResource#resource_id}.

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#tenancy_id FleetAppsManagementFleetResource#tenancy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#id FleetAppsManagementFleetResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_region`<sup>Optional</sup> <a name="resource_region" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.resourceRegion"></a>

```python
resource_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_region FleetAppsManagementFleetResource#resource_region}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_type FleetAppsManagementFleetResource#resource_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.timeouts"></a>

```python
timeouts: FleetAppsManagementFleetResourceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#timeouts FleetAppsManagementFleetResource#timeouts}

---

### FleetAppsManagementFleetResourceTimeouts <a name="FleetAppsManagementFleetResourceTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_resource

fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#create FleetAppsManagementFleetResource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#delete FleetAppsManagementFleetResource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#update FleetAppsManagementFleetResource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#create FleetAppsManagementFleetResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#delete FleetAppsManagementFleetResource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#update FleetAppsManagementFleetResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetAppsManagementFleetResourceTimeoutsOutputReference <a name="FleetAppsManagementFleetResourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_apps_management_fleet_resource

fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FleetAppsManagementFleetResourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a>]

---



