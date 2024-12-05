# `fleetSoftwareUpdateFsuCollection` Submodule <a name="`fleetSoftwareUpdateFsuCollection` Submodule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetSoftwareUpdateFsuCollection <a name="FleetSoftwareUpdateFsuCollection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection oci_fleet_software_update_fsu_collection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection(
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
  service_type: str,
  source_major_version: str,
  type: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  fleet_discovery: FleetSoftwareUpdateFsuCollectionFleetDiscovery = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: FleetSoftwareUpdateFsuCollectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#compartment_id FleetSoftwareUpdateFsuCollection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.serviceType">service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#service_type FleetSoftwareUpdateFsuCollection#service_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.sourceMajorVersion">source_major_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#source_major_version FleetSoftwareUpdateFsuCollection#source_major_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#type FleetSoftwareUpdateFsuCollection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#defined_tags FleetSoftwareUpdateFsuCollection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#display_name FleetSoftwareUpdateFsuCollection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.fleetDiscovery">fleet_discovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a></code> | fleet_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#freeform_tags FleetSoftwareUpdateFsuCollection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#id FleetSoftwareUpdateFsuCollection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#compartment_id FleetSoftwareUpdateFsuCollection#compartment_id}.

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.serviceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#service_type FleetSoftwareUpdateFsuCollection#service_type}.

---

##### `source_major_version`<sup>Required</sup> <a name="source_major_version" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.sourceMajorVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#source_major_version FleetSoftwareUpdateFsuCollection#source_major_version}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#type FleetSoftwareUpdateFsuCollection#type}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#defined_tags FleetSoftwareUpdateFsuCollection#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#display_name FleetSoftwareUpdateFsuCollection#display_name}.

---

##### `fleet_discovery`<sup>Optional</sup> <a name="fleet_discovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.fleetDiscovery"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a>

fleet_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#fleet_discovery FleetSoftwareUpdateFsuCollection#fleet_discovery}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#freeform_tags FleetSoftwareUpdateFsuCollection#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#id FleetSoftwareUpdateFsuCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#timeouts FleetSoftwareUpdateFsuCollection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putFleetDiscovery">put_fleet_discovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetFleetDiscovery">reset_fleet_discovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_fleet_discovery` <a name="put_fleet_discovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putFleetDiscovery"></a>

```python
def put_fleet_discovery(
  strategy: str,
  filters: typing.Union[IResolvable, typing.List[FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters]] = None,
  fsu_discovery_id: str = None,
  query: str = None,
  targets: typing.List[str] = None
) -> None
```

###### `strategy`<sup>Required</sup> <a name="strategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putFleetDiscovery.parameter.strategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#strategy FleetSoftwareUpdateFsuCollection#strategy}.

---

###### `filters`<sup>Optional</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putFleetDiscovery.parameter.filters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>]]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#filters FleetSoftwareUpdateFsuCollection#filters}

---

###### `fsu_discovery_id`<sup>Optional</sup> <a name="fsu_discovery_id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putFleetDiscovery.parameter.fsuDiscoveryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#fsu_discovery_id FleetSoftwareUpdateFsuCollection#fsu_discovery_id}.

---

###### `query`<sup>Optional</sup> <a name="query" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putFleetDiscovery.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#query FleetSoftwareUpdateFsuCollection#query}.

---

###### `targets`<sup>Optional</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putFleetDiscovery.parameter.targets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#targets FleetSoftwareUpdateFsuCollection#targets}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#create FleetSoftwareUpdateFsuCollection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#delete FleetSoftwareUpdateFsuCollection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#update FleetSoftwareUpdateFsuCollection#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_fleet_discovery` <a name="reset_fleet_discovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetFleetDiscovery"></a>

```python
def reset_fleet_discovery() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FleetSoftwareUpdateFsuCollection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FleetSoftwareUpdateFsuCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FleetSoftwareUpdateFsuCollection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FleetSoftwareUpdateFsuCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FleetSoftwareUpdateFsuCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.activeFsuCycle">active_fsu_cycle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList">FleetSoftwareUpdateFsuCollectionActiveFsuCycleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fleetDiscovery">fleet_discovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference">FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.targetCount">target_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference">FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fleetDiscoveryInput">fleet_discovery_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.serviceTypeInput">service_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.sourceMajorVersionInput">source_major_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.sourceMajorVersion">source_major_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active_fsu_cycle`<sup>Required</sup> <a name="active_fsu_cycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.activeFsuCycle"></a>

```python
active_fsu_cycle: FleetSoftwareUpdateFsuCollectionActiveFsuCycleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList">FleetSoftwareUpdateFsuCollectionActiveFsuCycleList</a>

---

##### `fleet_discovery`<sup>Required</sup> <a name="fleet_discovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fleetDiscovery"></a>

```python
fleet_discovery: FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference">FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_count`<sup>Required</sup> <a name="target_count" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.targetCount"></a>

```python
target_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeouts"></a>

```python
timeouts: FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference">FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `fleet_discovery_input`<sup>Optional</sup> <a name="fleet_discovery_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fleetDiscoveryInput"></a>

```python
fleet_discovery_input: FleetSoftwareUpdateFsuCollectionFleetDiscovery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a>

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_type_input`<sup>Optional</sup> <a name="service_type_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.serviceTypeInput"></a>

```python
service_type_input: str
```

- *Type:* str

---

##### `source_major_version_input`<sup>Optional</sup> <a name="source_major_version_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.sourceMajorVersionInput"></a>

```python
source_major_version_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FleetSoftwareUpdateFsuCollectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `source_major_version`<sup>Required</sup> <a name="source_major_version" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.sourceMajorVersion"></a>

```python
source_major_version: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FleetSoftwareUpdateFsuCollectionActiveFsuCycle <a name="FleetSoftwareUpdateFsuCollectionActiveFsuCycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycle"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycle.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycle()
```


### FleetSoftwareUpdateFsuCollectionConfig <a name="FleetSoftwareUpdateFsuCollectionConfig" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  service_type: str,
  source_major_version: str,
  type: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  fleet_discovery: FleetSoftwareUpdateFsuCollectionFleetDiscovery = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: FleetSoftwareUpdateFsuCollectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#compartment_id FleetSoftwareUpdateFsuCollection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.serviceType">service_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#service_type FleetSoftwareUpdateFsuCollection#service_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.sourceMajorVersion">source_major_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#source_major_version FleetSoftwareUpdateFsuCollection#source_major_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#type FleetSoftwareUpdateFsuCollection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#defined_tags FleetSoftwareUpdateFsuCollection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#display_name FleetSoftwareUpdateFsuCollection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.fleetDiscovery">fleet_discovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a></code> | fleet_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#freeform_tags FleetSoftwareUpdateFsuCollection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#id FleetSoftwareUpdateFsuCollection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#compartment_id FleetSoftwareUpdateFsuCollection#compartment_id}.

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#service_type FleetSoftwareUpdateFsuCollection#service_type}.

---

##### `source_major_version`<sup>Required</sup> <a name="source_major_version" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.sourceMajorVersion"></a>

```python
source_major_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#source_major_version FleetSoftwareUpdateFsuCollection#source_major_version}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#type FleetSoftwareUpdateFsuCollection#type}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#defined_tags FleetSoftwareUpdateFsuCollection#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#display_name FleetSoftwareUpdateFsuCollection#display_name}.

---

##### `fleet_discovery`<sup>Optional</sup> <a name="fleet_discovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.fleetDiscovery"></a>

```python
fleet_discovery: FleetSoftwareUpdateFsuCollectionFleetDiscovery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a>

fleet_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#fleet_discovery FleetSoftwareUpdateFsuCollection#fleet_discovery}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#freeform_tags FleetSoftwareUpdateFsuCollection#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#id FleetSoftwareUpdateFsuCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.timeouts"></a>

```python
timeouts: FleetSoftwareUpdateFsuCollectionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#timeouts FleetSoftwareUpdateFsuCollection#timeouts}

---

### FleetSoftwareUpdateFsuCollectionFleetDiscovery <a name="FleetSoftwareUpdateFsuCollectionFleetDiscovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery(
  strategy: str,
  filters: typing.Union[IResolvable, typing.List[FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters]] = None,
  fsu_discovery_id: str = None,
  query: str = None,
  targets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.strategy">strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#strategy FleetSoftwareUpdateFsuCollection#strategy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.filters">filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>]]</code> | filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.fsuDiscoveryId">fsu_discovery_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#fsu_discovery_id FleetSoftwareUpdateFsuCollection#fsu_discovery_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#query FleetSoftwareUpdateFsuCollection#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.targets">targets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#targets FleetSoftwareUpdateFsuCollection#targets}. |

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#strategy FleetSoftwareUpdateFsuCollection#strategy}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.filters"></a>

```python
filters: typing.Union[IResolvable, typing.List[FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>]]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#filters FleetSoftwareUpdateFsuCollection#filters}

---

##### `fsu_discovery_id`<sup>Optional</sup> <a name="fsu_discovery_id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.fsuDiscoveryId"></a>

```python
fsu_discovery_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#fsu_discovery_id FleetSoftwareUpdateFsuCollection#fsu_discovery_id}.

---

##### `query`<sup>Optional</sup> <a name="query" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#query FleetSoftwareUpdateFsuCollection#query}.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#targets FleetSoftwareUpdateFsuCollection#targets}.

---

### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters(
  type: str,
  entity_type: str = None,
  identifiers: typing.List[str] = None,
  mode: str = None,
  names: typing.List[str] = None,
  operator: str = None,
  tags: typing.Union[IResolvable, typing.List[FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags]] = None,
  versions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#type FleetSoftwareUpdateFsuCollection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.entityType">entity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#entity_type FleetSoftwareUpdateFsuCollection#entity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#identifiers FleetSoftwareUpdateFsuCollection#identifiers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#mode FleetSoftwareUpdateFsuCollection#mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.names">names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#names FleetSoftwareUpdateFsuCollection#names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#operator FleetSoftwareUpdateFsuCollection#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>]]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.versions">versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#versions FleetSoftwareUpdateFsuCollection#versions}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#type FleetSoftwareUpdateFsuCollection#type}.

---

##### `entity_type`<sup>Optional</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#entity_type FleetSoftwareUpdateFsuCollection#entity_type}.

---

##### `identifiers`<sup>Optional</sup> <a name="identifiers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.identifiers"></a>

```python
identifiers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#identifiers FleetSoftwareUpdateFsuCollection#identifiers}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#mode FleetSoftwareUpdateFsuCollection#mode}.

---

##### `names`<sup>Optional</sup> <a name="names" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.names"></a>

```python
names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#names FleetSoftwareUpdateFsuCollection#names}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#operator FleetSoftwareUpdateFsuCollection#operator}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#tags FleetSoftwareUpdateFsuCollection#tags}

---

##### `versions`<sup>Optional</sup> <a name="versions" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.versions"></a>

```python
versions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#versions FleetSoftwareUpdateFsuCollection#versions}.

---

### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags(
  key: str,
  value: str,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#key FleetSoftwareUpdateFsuCollection#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#value FleetSoftwareUpdateFsuCollection#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#namespace FleetSoftwareUpdateFsuCollection#namespace}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#key FleetSoftwareUpdateFsuCollection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#value FleetSoftwareUpdateFsuCollection#value}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#namespace FleetSoftwareUpdateFsuCollection#namespace}.

---

### FleetSoftwareUpdateFsuCollectionTimeouts <a name="FleetSoftwareUpdateFsuCollectionTimeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#create FleetSoftwareUpdateFsuCollection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#delete FleetSoftwareUpdateFsuCollection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#update FleetSoftwareUpdateFsuCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#create FleetSoftwareUpdateFsuCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#delete FleetSoftwareUpdateFsuCollection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#update FleetSoftwareUpdateFsuCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetSoftwareUpdateFsuCollectionActiveFsuCycleList <a name="FleetSoftwareUpdateFsuCollectionActiveFsuCycleList" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference <a name="FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycle">FleetSoftwareUpdateFsuCollectionActiveFsuCycle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.internalValue"></a>

```python
internal_value: FleetSoftwareUpdateFsuCollectionActiveFsuCycle
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycle">FleetSoftwareUpdateFsuCollectionActiveFsuCycle</a>

---


### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>]]

---


### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetEntityType">reset_entity_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetIdentifiers">reset_identifiers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetNames">reset_names</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetVersions">reset_versions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>]]

---

##### `reset_entity_type` <a name="reset_entity_type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetEntityType"></a>

```python
def reset_entity_type() -> None
```

##### `reset_identifiers` <a name="reset_identifiers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetIdentifiers"></a>

```python
def reset_identifiers() -> None
```

##### `reset_mode` <a name="reset_mode" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_names` <a name="reset_names" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetNames"></a>

```python
def reset_names() -> None
```

##### `reset_operator` <a name="reset_operator" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_tags` <a name="reset_tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_versions` <a name="reset_versions" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetVersions"></a>

```python
def reset_versions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.entityTypeInput">entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.identifiersInput">identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.namesInput">names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.versionsInput">versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.names">names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.versions">versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.tags"></a>

```python
tags: FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList</a>

---

##### `entity_type_input`<sup>Optional</sup> <a name="entity_type_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.entityTypeInput"></a>

```python
entity_type_input: str
```

- *Type:* str

---

##### `identifiers_input`<sup>Optional</sup> <a name="identifiers_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.identifiersInput"></a>

```python
identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `names_input`<sup>Optional</sup> <a name="names_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.namesInput"></a>

```python
names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `versions_input`<sup>Optional</sup> <a name="versions_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.versionsInput"></a>

```python
versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.identifiers"></a>

```python
identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `names`<sup>Required</sup> <a name="names" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.names"></a>

```python
names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `versions`<sup>Required</sup> <a name="versions" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.versions"></a>

```python
versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>]

---


### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>]]

---


### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags</a>]

---


### FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetFsuDiscoveryId">reset_fsu_discovery_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetTargets">reset_targets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filters` <a name="put_filters" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.putFilters"></a>

```python
def put_filters(
  value: typing.Union[IResolvable, typing.List[FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.putFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>]]

---

##### `reset_filters` <a name="reset_filters" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_fsu_discovery_id` <a name="reset_fsu_discovery_id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetFsuDiscoveryId"></a>

```python
def reset_fsu_discovery_id() -> None
```

##### `reset_query` <a name="reset_query" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_targets` <a name="reset_targets" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetTargets"></a>

```python
def reset_targets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.filters">filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.filtersInput">filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fsuDiscoveryIdInput">fsu_discovery_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.strategyInput">strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.targetsInput">targets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fsuDiscoveryId">fsu_discovery_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.targets">targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.filters"></a>

```python
filters: FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList</a>

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.filtersInput"></a>

```python
filters_input: typing.Union[IResolvable, typing.List[FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters</a>]]

---

##### `fsu_discovery_id_input`<sup>Optional</sup> <a name="fsu_discovery_id_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fsuDiscoveryIdInput"></a>

```python
fsu_discovery_id_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.strategyInput"></a>

```python
strategy_input: str
```

- *Type:* str

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.targetsInput"></a>

```python
targets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fsu_discovery_id`<sup>Required</sup> <a name="fsu_discovery_id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fsuDiscoveryId"></a>

```python
fsu_discovery_id: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: FleetSoftwareUpdateFsuCollectionFleetDiscovery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a>

---


### FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference <a name="FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fleet_software_update_fsu_collection

fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FleetSoftwareUpdateFsuCollectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a>]

---



