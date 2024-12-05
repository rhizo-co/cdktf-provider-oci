# `coreCrossConnect` Submodule <a name="`coreCrossConnect` Submodule" id="rhizo-co-terraform-provider-oci.coreCrossConnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreCrossConnect <a name="CoreCrossConnect" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect oci_core_cross_connect}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect

coreCrossConnect.CoreCrossConnect(
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
  location_name: str,
  port_speed_shape_name: str,
  cross_connect_group_id: str = None,
  customer_reference_name: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  far_cross_connect_or_cross_connect_group_id: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_active: typing.Union[bool, IResolvable] = None,
  macsec_properties: CoreCrossConnectMacsecProperties = None,
  near_cross_connect_or_cross_connect_group_id: str = None,
  timeouts: CoreCrossConnectTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#compartment_id CoreCrossConnect#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.locationName">location_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#location_name CoreCrossConnect#location_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.portSpeedShapeName">port_speed_shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#port_speed_shape_name CoreCrossConnect#port_speed_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.crossConnectGroupId">cross_connect_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#cross_connect_group_id CoreCrossConnect#cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.customerReferenceName">customer_reference_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#customer_reference_name CoreCrossConnect#customer_reference_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#defined_tags CoreCrossConnect#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#display_name CoreCrossConnect#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.farCrossConnectOrCrossConnectGroupId">far_cross_connect_or_cross_connect_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#far_cross_connect_or_cross_connect_group_id CoreCrossConnect#far_cross_connect_or_cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#freeform_tags CoreCrossConnect#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#id CoreCrossConnect#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_active CoreCrossConnect#is_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.macsecProperties">macsec_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a></code> | macsec_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.nearCrossConnectOrCrossConnectGroupId">near_cross_connect_or_cross_connect_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#near_cross_connect_or_cross_connect_group_id CoreCrossConnect#near_cross_connect_or_cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#compartment_id CoreCrossConnect#compartment_id}.

---

##### `location_name`<sup>Required</sup> <a name="location_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.locationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#location_name CoreCrossConnect#location_name}.

---

##### `port_speed_shape_name`<sup>Required</sup> <a name="port_speed_shape_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.portSpeedShapeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#port_speed_shape_name CoreCrossConnect#port_speed_shape_name}.

---

##### `cross_connect_group_id`<sup>Optional</sup> <a name="cross_connect_group_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.crossConnectGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#cross_connect_group_id CoreCrossConnect#cross_connect_group_id}.

---

##### `customer_reference_name`<sup>Optional</sup> <a name="customer_reference_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.customerReferenceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#customer_reference_name CoreCrossConnect#customer_reference_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#defined_tags CoreCrossConnect#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#display_name CoreCrossConnect#display_name}.

---

##### `far_cross_connect_or_cross_connect_group_id`<sup>Optional</sup> <a name="far_cross_connect_or_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.farCrossConnectOrCrossConnectGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#far_cross_connect_or_cross_connect_group_id CoreCrossConnect#far_cross_connect_or_cross_connect_group_id}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#freeform_tags CoreCrossConnect#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#id CoreCrossConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_active`<sup>Optional</sup> <a name="is_active" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.isActive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_active CoreCrossConnect#is_active}.

---

##### `macsec_properties`<sup>Optional</sup> <a name="macsec_properties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.macsecProperties"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a>

macsec_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#macsec_properties CoreCrossConnect#macsec_properties}

---

##### `near_cross_connect_or_cross_connect_group_id`<sup>Optional</sup> <a name="near_cross_connect_or_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.nearCrossConnectOrCrossConnectGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#near_cross_connect_or_cross_connect_group_id CoreCrossConnect#near_cross_connect_or_cross_connect_group_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#timeouts CoreCrossConnect#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putMacsecProperties">put_macsec_properties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetCrossConnectGroupId">reset_cross_connect_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetCustomerReferenceName">reset_customer_reference_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetFarCrossConnectOrCrossConnectGroupId">reset_far_cross_connect_or_cross_connect_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetIsActive">reset_is_active</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetMacsecProperties">reset_macsec_properties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetNearCrossConnectOrCrossConnectGroupId">reset_near_cross_connect_or_cross_connect_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_macsec_properties` <a name="put_macsec_properties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putMacsecProperties"></a>

```python
def put_macsec_properties(
  state: str,
  encryption_cipher: str = None,
  is_unprotected_traffic_allowed: typing.Union[bool, IResolvable] = None,
  primary_key: CoreCrossConnectMacsecPropertiesPrimaryKey = None
) -> None
```

###### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putMacsecProperties.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#state CoreCrossConnect#state}.

---

###### `encryption_cipher`<sup>Optional</sup> <a name="encryption_cipher" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putMacsecProperties.parameter.encryptionCipher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#encryption_cipher CoreCrossConnect#encryption_cipher}.

---

###### `is_unprotected_traffic_allowed`<sup>Optional</sup> <a name="is_unprotected_traffic_allowed" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putMacsecProperties.parameter.isUnprotectedTrafficAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_unprotected_traffic_allowed CoreCrossConnect#is_unprotected_traffic_allowed}.

---

###### `primary_key`<sup>Optional</sup> <a name="primary_key" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putMacsecProperties.parameter.primaryKey"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#primary_key CoreCrossConnect#primary_key}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#create CoreCrossConnect#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#delete CoreCrossConnect#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#update CoreCrossConnect#update}.

---

##### `reset_cross_connect_group_id` <a name="reset_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetCrossConnectGroupId"></a>

```python
def reset_cross_connect_group_id() -> None
```

##### `reset_customer_reference_name` <a name="reset_customer_reference_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetCustomerReferenceName"></a>

```python
def reset_customer_reference_name() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_far_cross_connect_or_cross_connect_group_id` <a name="reset_far_cross_connect_or_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetFarCrossConnectOrCrossConnectGroupId"></a>

```python
def reset_far_cross_connect_or_cross_connect_group_id() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_active` <a name="reset_is_active" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetIsActive"></a>

```python
def reset_is_active() -> None
```

##### `reset_macsec_properties` <a name="reset_macsec_properties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetMacsecProperties"></a>

```python
def reset_macsec_properties() -> None
```

##### `reset_near_cross_connect_or_cross_connect_group_id` <a name="reset_near_cross_connect_or_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetNearCrossConnectOrCrossConnectGroupId"></a>

```python
def reset_near_cross_connect_or_cross_connect_group_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreCrossConnect resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect

coreCrossConnect.CoreCrossConnect.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect

coreCrossConnect.CoreCrossConnect.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect

coreCrossConnect.CoreCrossConnect.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect

coreCrossConnect.CoreCrossConnect.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreCrossConnect resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreCrossConnect to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreCrossConnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreCrossConnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.macsecProperties">macsec_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference">CoreCrossConnectMacsecPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.ociLogicalDeviceName">oci_logical_device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.ociPhysicalDeviceName">oci_physical_device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference">CoreCrossConnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.crossConnectGroupIdInput">cross_connect_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.customerReferenceNameInput">customer_reference_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.farCrossConnectOrCrossConnectGroupIdInput">far_cross_connect_or_cross_connect_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.isActiveInput">is_active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.locationNameInput">location_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.macsecPropertiesInput">macsec_properties_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.nearCrossConnectOrCrossConnectGroupIdInput">near_cross_connect_or_cross_connect_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portSpeedShapeNameInput">port_speed_shape_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.crossConnectGroupId">cross_connect_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.customerReferenceName">customer_reference_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.farCrossConnectOrCrossConnectGroupId">far_cross_connect_or_cross_connect_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.locationName">location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.nearCrossConnectOrCrossConnectGroupId">near_cross_connect_or_cross_connect_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portSpeedShapeName">port_speed_shape_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `macsec_properties`<sup>Required</sup> <a name="macsec_properties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.macsecProperties"></a>

```python
macsec_properties: CoreCrossConnectMacsecPropertiesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference">CoreCrossConnectMacsecPropertiesOutputReference</a>

---

##### `oci_logical_device_name`<sup>Required</sup> <a name="oci_logical_device_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.ociLogicalDeviceName"></a>

```python
oci_logical_device_name: str
```

- *Type:* str

---

##### `oci_physical_device_name`<sup>Required</sup> <a name="oci_physical_device_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.ociPhysicalDeviceName"></a>

```python
oci_physical_device_name: str
```

- *Type:* str

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeouts"></a>

```python
timeouts: CoreCrossConnectTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference">CoreCrossConnectTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `cross_connect_group_id_input`<sup>Optional</sup> <a name="cross_connect_group_id_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.crossConnectGroupIdInput"></a>

```python
cross_connect_group_id_input: str
```

- *Type:* str

---

##### `customer_reference_name_input`<sup>Optional</sup> <a name="customer_reference_name_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.customerReferenceNameInput"></a>

```python
customer_reference_name_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `far_cross_connect_or_cross_connect_group_id_input`<sup>Optional</sup> <a name="far_cross_connect_or_cross_connect_group_id_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.farCrossConnectOrCrossConnectGroupIdInput"></a>

```python
far_cross_connect_or_cross_connect_group_id_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_active_input`<sup>Optional</sup> <a name="is_active_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.isActiveInput"></a>

```python
is_active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_name_input`<sup>Optional</sup> <a name="location_name_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.locationNameInput"></a>

```python
location_name_input: str
```

- *Type:* str

---

##### `macsec_properties_input`<sup>Optional</sup> <a name="macsec_properties_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.macsecPropertiesInput"></a>

```python
macsec_properties_input: CoreCrossConnectMacsecProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a>

---

##### `near_cross_connect_or_cross_connect_group_id_input`<sup>Optional</sup> <a name="near_cross_connect_or_cross_connect_group_id_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.nearCrossConnectOrCrossConnectGroupIdInput"></a>

```python
near_cross_connect_or_cross_connect_group_id_input: str
```

- *Type:* str

---

##### `port_speed_shape_name_input`<sup>Optional</sup> <a name="port_speed_shape_name_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portSpeedShapeNameInput"></a>

```python
port_speed_shape_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreCrossConnectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cross_connect_group_id`<sup>Required</sup> <a name="cross_connect_group_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.crossConnectGroupId"></a>

```python
cross_connect_group_id: str
```

- *Type:* str

---

##### `customer_reference_name`<sup>Required</sup> <a name="customer_reference_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.customerReferenceName"></a>

```python
customer_reference_name: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `far_cross_connect_or_cross_connect_group_id`<sup>Required</sup> <a name="far_cross_connect_or_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.farCrossConnectOrCrossConnectGroupId"></a>

```python
far_cross_connect_or_cross_connect_group_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.isActive"></a>

```python
is_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_name`<sup>Required</sup> <a name="location_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.locationName"></a>

```python
location_name: str
```

- *Type:* str

---

##### `near_cross_connect_or_cross_connect_group_id`<sup>Required</sup> <a name="near_cross_connect_or_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.nearCrossConnectOrCrossConnectGroupId"></a>

```python
near_cross_connect_or_cross_connect_group_id: str
```

- *Type:* str

---

##### `port_speed_shape_name`<sup>Required</sup> <a name="port_speed_shape_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portSpeedShapeName"></a>

```python
port_speed_shape_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreCrossConnectConfig <a name="CoreCrossConnectConfig" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect

coreCrossConnect.CoreCrossConnectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  location_name: str,
  port_speed_shape_name: str,
  cross_connect_group_id: str = None,
  customer_reference_name: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  far_cross_connect_or_cross_connect_group_id: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_active: typing.Union[bool, IResolvable] = None,
  macsec_properties: CoreCrossConnectMacsecProperties = None,
  near_cross_connect_or_cross_connect_group_id: str = None,
  timeouts: CoreCrossConnectTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#compartment_id CoreCrossConnect#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.locationName">location_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#location_name CoreCrossConnect#location_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.portSpeedShapeName">port_speed_shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#port_speed_shape_name CoreCrossConnect#port_speed_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.crossConnectGroupId">cross_connect_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#cross_connect_group_id CoreCrossConnect#cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.customerReferenceName">customer_reference_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#customer_reference_name CoreCrossConnect#customer_reference_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#defined_tags CoreCrossConnect#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#display_name CoreCrossConnect#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.farCrossConnectOrCrossConnectGroupId">far_cross_connect_or_cross_connect_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#far_cross_connect_or_cross_connect_group_id CoreCrossConnect#far_cross_connect_or_cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#freeform_tags CoreCrossConnect#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#id CoreCrossConnect#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_active CoreCrossConnect#is_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.macsecProperties">macsec_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a></code> | macsec_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.nearCrossConnectOrCrossConnectGroupId">near_cross_connect_or_cross_connect_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#near_cross_connect_or_cross_connect_group_id CoreCrossConnect#near_cross_connect_or_cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#compartment_id CoreCrossConnect#compartment_id}.

---

##### `location_name`<sup>Required</sup> <a name="location_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.locationName"></a>

```python
location_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#location_name CoreCrossConnect#location_name}.

---

##### `port_speed_shape_name`<sup>Required</sup> <a name="port_speed_shape_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.portSpeedShapeName"></a>

```python
port_speed_shape_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#port_speed_shape_name CoreCrossConnect#port_speed_shape_name}.

---

##### `cross_connect_group_id`<sup>Optional</sup> <a name="cross_connect_group_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.crossConnectGroupId"></a>

```python
cross_connect_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#cross_connect_group_id CoreCrossConnect#cross_connect_group_id}.

---

##### `customer_reference_name`<sup>Optional</sup> <a name="customer_reference_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.customerReferenceName"></a>

```python
customer_reference_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#customer_reference_name CoreCrossConnect#customer_reference_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#defined_tags CoreCrossConnect#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#display_name CoreCrossConnect#display_name}.

---

##### `far_cross_connect_or_cross_connect_group_id`<sup>Optional</sup> <a name="far_cross_connect_or_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.farCrossConnectOrCrossConnectGroupId"></a>

```python
far_cross_connect_or_cross_connect_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#far_cross_connect_or_cross_connect_group_id CoreCrossConnect#far_cross_connect_or_cross_connect_group_id}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#freeform_tags CoreCrossConnect#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#id CoreCrossConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_active`<sup>Optional</sup> <a name="is_active" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.isActive"></a>

```python
is_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_active CoreCrossConnect#is_active}.

---

##### `macsec_properties`<sup>Optional</sup> <a name="macsec_properties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.macsecProperties"></a>

```python
macsec_properties: CoreCrossConnectMacsecProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a>

macsec_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#macsec_properties CoreCrossConnect#macsec_properties}

---

##### `near_cross_connect_or_cross_connect_group_id`<sup>Optional</sup> <a name="near_cross_connect_or_cross_connect_group_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.nearCrossConnectOrCrossConnectGroupId"></a>

```python
near_cross_connect_or_cross_connect_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#near_cross_connect_or_cross_connect_group_id CoreCrossConnect#near_cross_connect_or_cross_connect_group_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.timeouts"></a>

```python
timeouts: CoreCrossConnectTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#timeouts CoreCrossConnect#timeouts}

---

### CoreCrossConnectMacsecProperties <a name="CoreCrossConnectMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect

coreCrossConnect.CoreCrossConnectMacsecProperties(
  state: str,
  encryption_cipher: str = None,
  is_unprotected_traffic_allowed: typing.Union[bool, IResolvable] = None,
  primary_key: CoreCrossConnectMacsecPropertiesPrimaryKey = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#state CoreCrossConnect#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.encryptionCipher">encryption_cipher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#encryption_cipher CoreCrossConnect#encryption_cipher}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.isUnprotectedTrafficAllowed">is_unprotected_traffic_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_unprotected_traffic_allowed CoreCrossConnect#is_unprotected_traffic_allowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.primaryKey">primary_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a></code> | primary_key block. |

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#state CoreCrossConnect#state}.

---

##### `encryption_cipher`<sup>Optional</sup> <a name="encryption_cipher" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.encryptionCipher"></a>

```python
encryption_cipher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#encryption_cipher CoreCrossConnect#encryption_cipher}.

---

##### `is_unprotected_traffic_allowed`<sup>Optional</sup> <a name="is_unprotected_traffic_allowed" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.isUnprotectedTrafficAllowed"></a>

```python
is_unprotected_traffic_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_unprotected_traffic_allowed CoreCrossConnect#is_unprotected_traffic_allowed}.

---

##### `primary_key`<sup>Optional</sup> <a name="primary_key" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.primaryKey"></a>

```python
primary_key: CoreCrossConnectMacsecPropertiesPrimaryKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#primary_key CoreCrossConnect#primary_key}

---

### CoreCrossConnectMacsecPropertiesPrimaryKey <a name="CoreCrossConnectMacsecPropertiesPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect

coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey(
  connectivity_association_key_secret_id: str,
  connectivity_association_name_secret_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretId">connectivity_association_key_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_key_secret_id CoreCrossConnect#connectivity_association_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretId">connectivity_association_name_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_name_secret_id CoreCrossConnect#connectivity_association_name_secret_id}. |

---

##### `connectivity_association_key_secret_id`<sup>Required</sup> <a name="connectivity_association_key_secret_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretId"></a>

```python
connectivity_association_key_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_key_secret_id CoreCrossConnect#connectivity_association_key_secret_id}.

---

##### `connectivity_association_name_secret_id`<sup>Required</sup> <a name="connectivity_association_name_secret_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretId"></a>

```python
connectivity_association_name_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_name_secret_id CoreCrossConnect#connectivity_association_name_secret_id}.

---

### CoreCrossConnectTimeouts <a name="CoreCrossConnectTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect

coreCrossConnect.CoreCrossConnectTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#create CoreCrossConnect#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#delete CoreCrossConnect#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#update CoreCrossConnect#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#create CoreCrossConnect#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#delete CoreCrossConnect#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#update CoreCrossConnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreCrossConnectMacsecPropertiesOutputReference <a name="CoreCrossConnectMacsecPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect

coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.putPrimaryKey">put_primary_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetEncryptionCipher">reset_encryption_cipher</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetIsUnprotectedTrafficAllowed">reset_is_unprotected_traffic_allowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetPrimaryKey">reset_primary_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_primary_key` <a name="put_primary_key" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.putPrimaryKey"></a>

```python
def put_primary_key(
  connectivity_association_key_secret_id: str,
  connectivity_association_name_secret_id: str
) -> None
```

###### `connectivity_association_key_secret_id`<sup>Required</sup> <a name="connectivity_association_key_secret_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.putPrimaryKey.parameter.connectivityAssociationKeySecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_key_secret_id CoreCrossConnect#connectivity_association_key_secret_id}.

---

###### `connectivity_association_name_secret_id`<sup>Required</sup> <a name="connectivity_association_name_secret_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.putPrimaryKey.parameter.connectivityAssociationNameSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_name_secret_id CoreCrossConnect#connectivity_association_name_secret_id}.

---

##### `reset_encryption_cipher` <a name="reset_encryption_cipher" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetEncryptionCipher"></a>

```python
def reset_encryption_cipher() -> None
```

##### `reset_is_unprotected_traffic_allowed` <a name="reset_is_unprotected_traffic_allowed" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetIsUnprotectedTrafficAllowed"></a>

```python
def reset_is_unprotected_traffic_allowed() -> None
```

##### `reset_primary_key` <a name="reset_primary_key" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetPrimaryKey"></a>

```python
def reset_primary_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.primaryKey">primary_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference">CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.encryptionCipherInput">encryption_cipher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowedInput">is_unprotected_traffic_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.primaryKeyInput">primary_key_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.encryptionCipher">encryption_cipher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed">is_unprotected_traffic_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.primaryKey"></a>

```python
primary_key: CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference">CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference</a>

---

##### `encryption_cipher_input`<sup>Optional</sup> <a name="encryption_cipher_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.encryptionCipherInput"></a>

```python
encryption_cipher_input: str
```

- *Type:* str

---

##### `is_unprotected_traffic_allowed_input`<sup>Optional</sup> <a name="is_unprotected_traffic_allowed_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowedInput"></a>

```python
is_unprotected_traffic_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `primary_key_input`<sup>Optional</sup> <a name="primary_key_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.primaryKeyInput"></a>

```python
primary_key_input: CoreCrossConnectMacsecPropertiesPrimaryKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a>

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `encryption_cipher`<sup>Required</sup> <a name="encryption_cipher" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.encryptionCipher"></a>

```python
encryption_cipher: str
```

- *Type:* str

---

##### `is_unprotected_traffic_allowed`<sup>Required</sup> <a name="is_unprotected_traffic_allowed" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed"></a>

```python
is_unprotected_traffic_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: CoreCrossConnectMacsecProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a>

---


### CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference <a name="CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect

coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion">connectivity_association_key_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion">connectivity_association_name_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretIdInput">connectivity_association_key_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretIdInput">connectivity_association_name_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId">connectivity_association_key_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId">connectivity_association_name_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connectivity_association_key_secret_version`<sup>Required</sup> <a name="connectivity_association_key_secret_version" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion"></a>

```python
connectivity_association_key_secret_version: str
```

- *Type:* str

---

##### `connectivity_association_name_secret_version`<sup>Required</sup> <a name="connectivity_association_name_secret_version" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion"></a>

```python
connectivity_association_name_secret_version: str
```

- *Type:* str

---

##### `connectivity_association_key_secret_id_input`<sup>Optional</sup> <a name="connectivity_association_key_secret_id_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretIdInput"></a>

```python
connectivity_association_key_secret_id_input: str
```

- *Type:* str

---

##### `connectivity_association_name_secret_id_input`<sup>Optional</sup> <a name="connectivity_association_name_secret_id_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretIdInput"></a>

```python
connectivity_association_name_secret_id_input: str
```

- *Type:* str

---

##### `connectivity_association_key_secret_id`<sup>Required</sup> <a name="connectivity_association_key_secret_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId"></a>

```python
connectivity_association_key_secret_id: str
```

- *Type:* str

---

##### `connectivity_association_name_secret_id`<sup>Required</sup> <a name="connectivity_association_name_secret_id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId"></a>

```python
connectivity_association_name_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.internalValue"></a>

```python
internal_value: CoreCrossConnectMacsecPropertiesPrimaryKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a>

---


### CoreCrossConnectTimeoutsOutputReference <a name="CoreCrossConnectTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect

coreCrossConnect.CoreCrossConnectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreCrossConnectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a>]

---



