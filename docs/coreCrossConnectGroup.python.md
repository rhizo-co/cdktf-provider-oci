# `coreCrossConnectGroup` Submodule <a name="`coreCrossConnectGroup` Submodule" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreCrossConnectGroup <a name="CoreCrossConnectGroup" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group oci_core_cross_connect_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect_group

coreCrossConnectGroup.CoreCrossConnectGroup(
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
  customer_reference_name: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  macsec_properties: CoreCrossConnectGroupMacsecProperties = None,
  timeouts: CoreCrossConnectGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#compartment_id CoreCrossConnectGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.customerReferenceName">customer_reference_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#customer_reference_name CoreCrossConnectGroup#customer_reference_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#defined_tags CoreCrossConnectGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#display_name CoreCrossConnectGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#freeform_tags CoreCrossConnectGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#id CoreCrossConnectGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.macsecProperties">macsec_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a></code> | macsec_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts">CoreCrossConnectGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#compartment_id CoreCrossConnectGroup#compartment_id}.

---

##### `customer_reference_name`<sup>Optional</sup> <a name="customer_reference_name" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.customerReferenceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#customer_reference_name CoreCrossConnectGroup#customer_reference_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#defined_tags CoreCrossConnectGroup#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#display_name CoreCrossConnectGroup#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#freeform_tags CoreCrossConnectGroup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#id CoreCrossConnectGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `macsec_properties`<sup>Optional</sup> <a name="macsec_properties" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.macsecProperties"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a>

macsec_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#macsec_properties CoreCrossConnectGroup#macsec_properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts">CoreCrossConnectGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#timeouts CoreCrossConnectGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putMacsecProperties">put_macsec_properties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetCustomerReferenceName">reset_customer_reference_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetMacsecProperties">reset_macsec_properties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_macsec_properties` <a name="put_macsec_properties" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putMacsecProperties"></a>

```python
def put_macsec_properties(
  state: str,
  encryption_cipher: str = None,
  is_unprotected_traffic_allowed: typing.Union[bool, IResolvable] = None,
  primary_key: CoreCrossConnectGroupMacsecPropertiesPrimaryKey = None
) -> None
```

###### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putMacsecProperties.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#state CoreCrossConnectGroup#state}.

---

###### `encryption_cipher`<sup>Optional</sup> <a name="encryption_cipher" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putMacsecProperties.parameter.encryptionCipher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#encryption_cipher CoreCrossConnectGroup#encryption_cipher}.

---

###### `is_unprotected_traffic_allowed`<sup>Optional</sup> <a name="is_unprotected_traffic_allowed" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putMacsecProperties.parameter.isUnprotectedTrafficAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#is_unprotected_traffic_allowed CoreCrossConnectGroup#is_unprotected_traffic_allowed}.

---

###### `primary_key`<sup>Optional</sup> <a name="primary_key" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putMacsecProperties.parameter.primaryKey"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#primary_key CoreCrossConnectGroup#primary_key}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#create CoreCrossConnectGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#delete CoreCrossConnectGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#update CoreCrossConnectGroup#update}.

---

##### `reset_customer_reference_name` <a name="reset_customer_reference_name" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetCustomerReferenceName"></a>

```python
def reset_customer_reference_name() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_macsec_properties` <a name="reset_macsec_properties" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetMacsecProperties"></a>

```python
def reset_macsec_properties() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreCrossConnectGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect_group

coreCrossConnectGroup.CoreCrossConnectGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect_group

coreCrossConnectGroup.CoreCrossConnectGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect_group

coreCrossConnectGroup.CoreCrossConnectGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect_group

coreCrossConnectGroup.CoreCrossConnectGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreCrossConnectGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreCrossConnectGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreCrossConnectGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreCrossConnectGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.macsecProperties">macsec_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference">CoreCrossConnectGroupMacsecPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.ociLogicalDeviceName">oci_logical_device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.ociPhysicalDeviceName">oci_physical_device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference">CoreCrossConnectGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.customerReferenceNameInput">customer_reference_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.macsecPropertiesInput">macsec_properties_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts">CoreCrossConnectGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.customerReferenceName">customer_reference_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `macsec_properties`<sup>Required</sup> <a name="macsec_properties" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.macsecProperties"></a>

```python
macsec_properties: CoreCrossConnectGroupMacsecPropertiesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference">CoreCrossConnectGroupMacsecPropertiesOutputReference</a>

---

##### `oci_logical_device_name`<sup>Required</sup> <a name="oci_logical_device_name" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.ociLogicalDeviceName"></a>

```python
oci_logical_device_name: str
```

- *Type:* str

---

##### `oci_physical_device_name`<sup>Required</sup> <a name="oci_physical_device_name" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.ociPhysicalDeviceName"></a>

```python
oci_physical_device_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeouts"></a>

```python
timeouts: CoreCrossConnectGroupTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference">CoreCrossConnectGroupTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `customer_reference_name_input`<sup>Optional</sup> <a name="customer_reference_name_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.customerReferenceNameInput"></a>

```python
customer_reference_name_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `macsec_properties_input`<sup>Optional</sup> <a name="macsec_properties_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.macsecPropertiesInput"></a>

```python
macsec_properties_input: CoreCrossConnectGroupMacsecProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreCrossConnectGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts">CoreCrossConnectGroupTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `customer_reference_name`<sup>Required</sup> <a name="customer_reference_name" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.customerReferenceName"></a>

```python
customer_reference_name: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreCrossConnectGroupConfig <a name="CoreCrossConnectGroupConfig" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect_group

coreCrossConnectGroup.CoreCrossConnectGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  customer_reference_name: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  macsec_properties: CoreCrossConnectGroupMacsecProperties = None,
  timeouts: CoreCrossConnectGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#compartment_id CoreCrossConnectGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.customerReferenceName">customer_reference_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#customer_reference_name CoreCrossConnectGroup#customer_reference_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#defined_tags CoreCrossConnectGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#display_name CoreCrossConnectGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#freeform_tags CoreCrossConnectGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#id CoreCrossConnectGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.macsecProperties">macsec_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a></code> | macsec_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts">CoreCrossConnectGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#compartment_id CoreCrossConnectGroup#compartment_id}.

---

##### `customer_reference_name`<sup>Optional</sup> <a name="customer_reference_name" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.customerReferenceName"></a>

```python
customer_reference_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#customer_reference_name CoreCrossConnectGroup#customer_reference_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#defined_tags CoreCrossConnectGroup#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#display_name CoreCrossConnectGroup#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#freeform_tags CoreCrossConnectGroup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#id CoreCrossConnectGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `macsec_properties`<sup>Optional</sup> <a name="macsec_properties" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.macsecProperties"></a>

```python
macsec_properties: CoreCrossConnectGroupMacsecProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a>

macsec_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#macsec_properties CoreCrossConnectGroup#macsec_properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.timeouts"></a>

```python
timeouts: CoreCrossConnectGroupTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts">CoreCrossConnectGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#timeouts CoreCrossConnectGroup#timeouts}

---

### CoreCrossConnectGroupMacsecProperties <a name="CoreCrossConnectGroupMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect_group

coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties(
  state: str,
  encryption_cipher: str = None,
  is_unprotected_traffic_allowed: typing.Union[bool, IResolvable] = None,
  primary_key: CoreCrossConnectGroupMacsecPropertiesPrimaryKey = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#state CoreCrossConnectGroup#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.encryptionCipher">encryption_cipher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#encryption_cipher CoreCrossConnectGroup#encryption_cipher}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.isUnprotectedTrafficAllowed">is_unprotected_traffic_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#is_unprotected_traffic_allowed CoreCrossConnectGroup#is_unprotected_traffic_allowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.primaryKey">primary_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a></code> | primary_key block. |

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#state CoreCrossConnectGroup#state}.

---

##### `encryption_cipher`<sup>Optional</sup> <a name="encryption_cipher" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.encryptionCipher"></a>

```python
encryption_cipher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#encryption_cipher CoreCrossConnectGroup#encryption_cipher}.

---

##### `is_unprotected_traffic_allowed`<sup>Optional</sup> <a name="is_unprotected_traffic_allowed" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.isUnprotectedTrafficAllowed"></a>

```python
is_unprotected_traffic_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#is_unprotected_traffic_allowed CoreCrossConnectGroup#is_unprotected_traffic_allowed}.

---

##### `primary_key`<sup>Optional</sup> <a name="primary_key" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.primaryKey"></a>

```python
primary_key: CoreCrossConnectGroupMacsecPropertiesPrimaryKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#primary_key CoreCrossConnectGroup#primary_key}

---

### CoreCrossConnectGroupMacsecPropertiesPrimaryKey <a name="CoreCrossConnectGroupMacsecPropertiesPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect_group

coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey(
  connectivity_association_key_secret_id: str,
  connectivity_association_name_secret_id: str,
  connectivity_association_key_secret_version: str = None,
  connectivity_association_name_secret_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretId">connectivity_association_key_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_key_secret_id CoreCrossConnectGroup#connectivity_association_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretId">connectivity_association_name_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_name_secret_id CoreCrossConnectGroup#connectivity_association_name_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretVersion">connectivity_association_key_secret_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_key_secret_version CoreCrossConnectGroup#connectivity_association_key_secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretVersion">connectivity_association_name_secret_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_name_secret_version CoreCrossConnectGroup#connectivity_association_name_secret_version}. |

---

##### `connectivity_association_key_secret_id`<sup>Required</sup> <a name="connectivity_association_key_secret_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretId"></a>

```python
connectivity_association_key_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_key_secret_id CoreCrossConnectGroup#connectivity_association_key_secret_id}.

---

##### `connectivity_association_name_secret_id`<sup>Required</sup> <a name="connectivity_association_name_secret_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretId"></a>

```python
connectivity_association_name_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_name_secret_id CoreCrossConnectGroup#connectivity_association_name_secret_id}.

---

##### `connectivity_association_key_secret_version`<sup>Optional</sup> <a name="connectivity_association_key_secret_version" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretVersion"></a>

```python
connectivity_association_key_secret_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_key_secret_version CoreCrossConnectGroup#connectivity_association_key_secret_version}.

---

##### `connectivity_association_name_secret_version`<sup>Optional</sup> <a name="connectivity_association_name_secret_version" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretVersion"></a>

```python
connectivity_association_name_secret_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_name_secret_version CoreCrossConnectGroup#connectivity_association_name_secret_version}.

---

### CoreCrossConnectGroupTimeouts <a name="CoreCrossConnectGroupTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect_group

coreCrossConnectGroup.CoreCrossConnectGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#create CoreCrossConnectGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#delete CoreCrossConnectGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#update CoreCrossConnectGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#create CoreCrossConnectGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#delete CoreCrossConnectGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#update CoreCrossConnectGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreCrossConnectGroupMacsecPropertiesOutputReference <a name="CoreCrossConnectGroupMacsecPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect_group

coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.putPrimaryKey">put_primary_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetEncryptionCipher">reset_encryption_cipher</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetIsUnprotectedTrafficAllowed">reset_is_unprotected_traffic_allowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetPrimaryKey">reset_primary_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_primary_key` <a name="put_primary_key" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.putPrimaryKey"></a>

```python
def put_primary_key(
  connectivity_association_key_secret_id: str,
  connectivity_association_name_secret_id: str,
  connectivity_association_key_secret_version: str = None,
  connectivity_association_name_secret_version: str = None
) -> None
```

###### `connectivity_association_key_secret_id`<sup>Required</sup> <a name="connectivity_association_key_secret_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.putPrimaryKey.parameter.connectivityAssociationKeySecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_key_secret_id CoreCrossConnectGroup#connectivity_association_key_secret_id}.

---

###### `connectivity_association_name_secret_id`<sup>Required</sup> <a name="connectivity_association_name_secret_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.putPrimaryKey.parameter.connectivityAssociationNameSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_name_secret_id CoreCrossConnectGroup#connectivity_association_name_secret_id}.

---

###### `connectivity_association_key_secret_version`<sup>Optional</sup> <a name="connectivity_association_key_secret_version" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.putPrimaryKey.parameter.connectivityAssociationKeySecretVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_key_secret_version CoreCrossConnectGroup#connectivity_association_key_secret_version}.

---

###### `connectivity_association_name_secret_version`<sup>Optional</sup> <a name="connectivity_association_name_secret_version" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.putPrimaryKey.parameter.connectivityAssociationNameSecretVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_name_secret_version CoreCrossConnectGroup#connectivity_association_name_secret_version}.

---

##### `reset_encryption_cipher` <a name="reset_encryption_cipher" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetEncryptionCipher"></a>

```python
def reset_encryption_cipher() -> None
```

##### `reset_is_unprotected_traffic_allowed` <a name="reset_is_unprotected_traffic_allowed" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetIsUnprotectedTrafficAllowed"></a>

```python
def reset_is_unprotected_traffic_allowed() -> None
```

##### `reset_primary_key` <a name="reset_primary_key" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetPrimaryKey"></a>

```python
def reset_primary_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.primaryKey">primary_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference">CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.encryptionCipherInput">encryption_cipher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowedInput">is_unprotected_traffic_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.primaryKeyInput">primary_key_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.encryptionCipher">encryption_cipher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed">is_unprotected_traffic_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.primaryKey"></a>

```python
primary_key: CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference">CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference</a>

---

##### `encryption_cipher_input`<sup>Optional</sup> <a name="encryption_cipher_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.encryptionCipherInput"></a>

```python
encryption_cipher_input: str
```

- *Type:* str

---

##### `is_unprotected_traffic_allowed_input`<sup>Optional</sup> <a name="is_unprotected_traffic_allowed_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowedInput"></a>

```python
is_unprotected_traffic_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `primary_key_input`<sup>Optional</sup> <a name="primary_key_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.primaryKeyInput"></a>

```python
primary_key_input: CoreCrossConnectGroupMacsecPropertiesPrimaryKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a>

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `encryption_cipher`<sup>Required</sup> <a name="encryption_cipher" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.encryptionCipher"></a>

```python
encryption_cipher: str
```

- *Type:* str

---

##### `is_unprotected_traffic_allowed`<sup>Required</sup> <a name="is_unprotected_traffic_allowed" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed"></a>

```python
is_unprotected_traffic_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: CoreCrossConnectGroupMacsecProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a>

---


### CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference <a name="CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect_group

coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resetConnectivityAssociationKeySecretVersion">reset_connectivity_association_key_secret_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resetConnectivityAssociationNameSecretVersion">reset_connectivity_association_name_secret_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connectivity_association_key_secret_version` <a name="reset_connectivity_association_key_secret_version" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resetConnectivityAssociationKeySecretVersion"></a>

```python
def reset_connectivity_association_key_secret_version() -> None
```

##### `reset_connectivity_association_name_secret_version` <a name="reset_connectivity_association_name_secret_version" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resetConnectivityAssociationNameSecretVersion"></a>

```python
def reset_connectivity_association_name_secret_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretIdInput">connectivity_association_key_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersionInput">connectivity_association_key_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretIdInput">connectivity_association_name_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersionInput">connectivity_association_name_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId">connectivity_association_key_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion">connectivity_association_key_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId">connectivity_association_name_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion">connectivity_association_name_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connectivity_association_key_secret_id_input`<sup>Optional</sup> <a name="connectivity_association_key_secret_id_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretIdInput"></a>

```python
connectivity_association_key_secret_id_input: str
```

- *Type:* str

---

##### `connectivity_association_key_secret_version_input`<sup>Optional</sup> <a name="connectivity_association_key_secret_version_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersionInput"></a>

```python
connectivity_association_key_secret_version_input: str
```

- *Type:* str

---

##### `connectivity_association_name_secret_id_input`<sup>Optional</sup> <a name="connectivity_association_name_secret_id_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretIdInput"></a>

```python
connectivity_association_name_secret_id_input: str
```

- *Type:* str

---

##### `connectivity_association_name_secret_version_input`<sup>Optional</sup> <a name="connectivity_association_name_secret_version_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersionInput"></a>

```python
connectivity_association_name_secret_version_input: str
```

- *Type:* str

---

##### `connectivity_association_key_secret_id`<sup>Required</sup> <a name="connectivity_association_key_secret_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId"></a>

```python
connectivity_association_key_secret_id: str
```

- *Type:* str

---

##### `connectivity_association_key_secret_version`<sup>Required</sup> <a name="connectivity_association_key_secret_version" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion"></a>

```python
connectivity_association_key_secret_version: str
```

- *Type:* str

---

##### `connectivity_association_name_secret_id`<sup>Required</sup> <a name="connectivity_association_name_secret_id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId"></a>

```python
connectivity_association_name_secret_id: str
```

- *Type:* str

---

##### `connectivity_association_name_secret_version`<sup>Required</sup> <a name="connectivity_association_name_secret_version" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion"></a>

```python
connectivity_association_name_secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.internalValue"></a>

```python
internal_value: CoreCrossConnectGroupMacsecPropertiesPrimaryKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a>

---


### CoreCrossConnectGroupTimeoutsOutputReference <a name="CoreCrossConnectGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_cross_connect_group

coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts">CoreCrossConnectGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreCrossConnectGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts">CoreCrossConnectGroupTimeouts</a>]

---



