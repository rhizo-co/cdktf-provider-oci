# `coreVnicAttachment` Submodule <a name="`coreVnicAttachment` Submodule" id="rhizo-co-terraform-provider-oci.coreVnicAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVnicAttachment <a name="CoreVnicAttachment" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment oci_core_vnic_attachment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_vnic_attachment

coreVnicAttachment.CoreVnicAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  create_vnic_details: CoreVnicAttachmentCreateVnicDetails,
  instance_id: str,
  display_name: str = None,
  id: str = None,
  nic_index: typing.Union[int, float] = None,
  timeouts: CoreVnicAttachmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.createVnicDetails">create_vnic_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a></code> | create_vnic_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#instance_id CoreVnicAttachment#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#id CoreVnicAttachment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.nicIndex">nic_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nic_index CoreVnicAttachment#nic_index}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_vnic_details`<sup>Required</sup> <a name="create_vnic_details" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.createVnicDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a>

create_vnic_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#create_vnic_details CoreVnicAttachment#create_vnic_details}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#instance_id CoreVnicAttachment#instance_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#id CoreVnicAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nic_index`<sup>Optional</sup> <a name="nic_index" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.nicIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nic_index CoreVnicAttachment#nic_index}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#timeouts CoreVnicAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails">put_create_vnic_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetNicIndex">reset_nic_index</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_create_vnic_details` <a name="put_create_vnic_details" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails"></a>

```python
def put_create_vnic_details(
  assign_ipv6_ip: typing.Union[bool, IResolvable] = None,
  assign_private_dns_record: typing.Union[bool, IResolvable] = None,
  assign_public_ip: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  hostname_label: str = None,
  ipv6_address_ipv6_subnet_cidr_pair_details: typing.Union[IResolvable, typing.List[CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails]] = None,
  nsg_ids: typing.List[str] = None,
  private_ip: str = None,
  security_attributes: typing.Mapping[str] = None,
  skip_source_dest_check: typing.Union[bool, IResolvable] = None,
  subnet_id: str = None,
  vlan_id: str = None
) -> None
```

###### `assign_ipv6_ip`<sup>Optional</sup> <a name="assign_ipv6_ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails.parameter.assignIpv6Ip"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_ipv6ip CoreVnicAttachment#assign_ipv6ip}.

---

###### `assign_private_dns_record`<sup>Optional</sup> <a name="assign_private_dns_record" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails.parameter.assignPrivateDnsRecord"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_private_dns_record CoreVnicAttachment#assign_private_dns_record}.

---

###### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails.parameter.assignPublicIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_public_ip CoreVnicAttachment#assign_public_ip}.

---

###### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#defined_tags CoreVnicAttachment#defined_tags}.

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}.

---

###### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#freeform_tags CoreVnicAttachment#freeform_tags}.

---

###### `hostname_label`<sup>Optional</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails.parameter.hostnameLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#hostname_label CoreVnicAttachment#hostname_label}.

---

###### `ipv6_address_ipv6_subnet_cidr_pair_details`<sup>Optional</sup> <a name="ipv6_address_ipv6_subnet_cidr_pair_details" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails.parameter.ipv6AddressIpv6SubnetCidrPairDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]]

ipv6address_ipv6subnet_cidr_pair_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#ipv6address_ipv6subnet_cidr_pair_details CoreVnicAttachment#ipv6address_ipv6subnet_cidr_pair_details}

---

###### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nsg_ids CoreVnicAttachment#nsg_ids}.

---

###### `private_ip`<sup>Optional</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails.parameter.privateIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#private_ip CoreVnicAttachment#private_ip}.

---

###### `security_attributes`<sup>Optional</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails.parameter.securityAttributes"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#security_attributes CoreVnicAttachment#security_attributes}.

---

###### `skip_source_dest_check`<sup>Optional</sup> <a name="skip_source_dest_check" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails.parameter.skipSourceDestCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#skip_source_dest_check CoreVnicAttachment#skip_source_dest_check}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#subnet_id CoreVnicAttachment#subnet_id}.

---

###### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putCreateVnicDetails.parameter.vlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#vlan_id CoreVnicAttachment#vlan_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#create CoreVnicAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#delete CoreVnicAttachment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#update CoreVnicAttachment#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_nic_index` <a name="reset_nic_index" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetNicIndex"></a>

```python
def reset_nic_index() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreVnicAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_vnic_attachment

coreVnicAttachment.CoreVnicAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_vnic_attachment

coreVnicAttachment.CoreVnicAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_vnic_attachment

coreVnicAttachment.CoreVnicAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_vnic_attachment

coreVnicAttachment.CoreVnicAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreVnicAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreVnicAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreVnicAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreVnicAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.createVnicDetails">create_vnic_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference">CoreVnicAttachmentCreateVnicDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference">CoreVnicAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vlanTag">vlan_tag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vnicId">vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.createVnicDetailsInput">create_vnic_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.nicIndexInput">nic_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.nicIndex">nic_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `create_vnic_details`<sup>Required</sup> <a name="create_vnic_details" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.createVnicDetails"></a>

```python
create_vnic_details: CoreVnicAttachmentCreateVnicDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference">CoreVnicAttachmentCreateVnicDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeouts"></a>

```python
timeouts: CoreVnicAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference">CoreVnicAttachmentTimeoutsOutputReference</a>

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

##### `vlan_tag`<sup>Required</sup> <a name="vlan_tag" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vlanTag"></a>

```python
vlan_tag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vnic_id`<sup>Required</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

---

##### `create_vnic_details_input`<sup>Optional</sup> <a name="create_vnic_details_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.createVnicDetailsInput"></a>

```python
create_vnic_details_input: CoreVnicAttachmentCreateVnicDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `nic_index_input`<sup>Optional</sup> <a name="nic_index_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.nicIndexInput"></a>

```python
nic_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreVnicAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `nic_index`<sup>Required</sup> <a name="nic_index" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.nicIndex"></a>

```python
nic_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVnicAttachmentConfig <a name="CoreVnicAttachmentConfig" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_vnic_attachment

coreVnicAttachment.CoreVnicAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  create_vnic_details: CoreVnicAttachmentCreateVnicDetails,
  instance_id: str,
  display_name: str = None,
  id: str = None,
  nic_index: typing.Union[int, float] = None,
  timeouts: CoreVnicAttachmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.createVnicDetails">create_vnic_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a></code> | create_vnic_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#instance_id CoreVnicAttachment#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#id CoreVnicAttachment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.nicIndex">nic_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nic_index CoreVnicAttachment#nic_index}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_vnic_details`<sup>Required</sup> <a name="create_vnic_details" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.createVnicDetails"></a>

```python
create_vnic_details: CoreVnicAttachmentCreateVnicDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a>

create_vnic_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#create_vnic_details CoreVnicAttachment#create_vnic_details}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#instance_id CoreVnicAttachment#instance_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#id CoreVnicAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nic_index`<sup>Optional</sup> <a name="nic_index" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.nicIndex"></a>

```python
nic_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nic_index CoreVnicAttachment#nic_index}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentConfig.property.timeouts"></a>

```python
timeouts: CoreVnicAttachmentTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#timeouts CoreVnicAttachment#timeouts}

---

### CoreVnicAttachmentCreateVnicDetails <a name="CoreVnicAttachmentCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_vnic_attachment

coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails(
  assign_ipv6_ip: typing.Union[bool, IResolvable] = None,
  assign_private_dns_record: typing.Union[bool, IResolvable] = None,
  assign_public_ip: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  hostname_label: str = None,
  ipv6_address_ipv6_subnet_cidr_pair_details: typing.Union[IResolvable, typing.List[CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails]] = None,
  nsg_ids: typing.List[str] = None,
  private_ip: str = None,
  security_attributes: typing.Mapping[str] = None,
  skip_source_dest_check: typing.Union[bool, IResolvable] = None,
  subnet_id: str = None,
  vlan_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignIpv6Ip">assign_ipv6_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_ipv6ip CoreVnicAttachment#assign_ipv6ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignPrivateDnsRecord">assign_private_dns_record</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_private_dns_record CoreVnicAttachment#assign_private_dns_record}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignPublicIp">assign_public_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_public_ip CoreVnicAttachment#assign_public_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#defined_tags CoreVnicAttachment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#freeform_tags CoreVnicAttachment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.hostnameLabel">hostname_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#hostname_label CoreVnicAttachment#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6_address_ipv6_subnet_cidr_pair_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]]</code> | ipv6address_ipv6subnet_cidr_pair_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nsg_ids CoreVnicAttachment#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#private_ip CoreVnicAttachment#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#security_attributes CoreVnicAttachment#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.skipSourceDestCheck">skip_source_dest_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#skip_source_dest_check CoreVnicAttachment#skip_source_dest_check}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#subnet_id CoreVnicAttachment#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.vlanId">vlan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#vlan_id CoreVnicAttachment#vlan_id}. |

---

##### `assign_ipv6_ip`<sup>Optional</sup> <a name="assign_ipv6_ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignIpv6Ip"></a>

```python
assign_ipv6_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_ipv6ip CoreVnicAttachment#assign_ipv6ip}.

---

##### `assign_private_dns_record`<sup>Optional</sup> <a name="assign_private_dns_record" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignPrivateDnsRecord"></a>

```python
assign_private_dns_record: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_private_dns_record CoreVnicAttachment#assign_private_dns_record}.

---

##### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.assignPublicIp"></a>

```python
assign_public_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#assign_public_ip CoreVnicAttachment#assign_public_ip}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#defined_tags CoreVnicAttachment#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#display_name CoreVnicAttachment#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#freeform_tags CoreVnicAttachment#freeform_tags}.

---

##### `hostname_label`<sup>Optional</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.hostnameLabel"></a>

```python
hostname_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#hostname_label CoreVnicAttachment#hostname_label}.

---

##### `ipv6_address_ipv6_subnet_cidr_pair_details`<sup>Optional</sup> <a name="ipv6_address_ipv6_subnet_cidr_pair_details" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```python
ipv6_address_ipv6_subnet_cidr_pair_details: typing.Union[IResolvable, typing.List[CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]]

ipv6address_ipv6subnet_cidr_pair_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#ipv6address_ipv6subnet_cidr_pair_details CoreVnicAttachment#ipv6address_ipv6subnet_cidr_pair_details}

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#nsg_ids CoreVnicAttachment#nsg_ids}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#private_ip CoreVnicAttachment#private_ip}.

---

##### `security_attributes`<sup>Optional</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.securityAttributes"></a>

```python
security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#security_attributes CoreVnicAttachment#security_attributes}.

---

##### `skip_source_dest_check`<sup>Optional</sup> <a name="skip_source_dest_check" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.skipSourceDestCheck"></a>

```python
skip_source_dest_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#skip_source_dest_check CoreVnicAttachment#skip_source_dest_check}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#subnet_id CoreVnicAttachment#subnet_id}.

---

##### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#vlan_id CoreVnicAttachment#vlan_id}.

---

### CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails <a name="CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_vnic_attachment

coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails(
  ipv6_address: str = None,
  ipv6_subnet_cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#ipv6_address CoreVnicAttachment#ipv6_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr">ipv6_subnet_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#ipv6_subnet_cidr CoreVnicAttachment#ipv6_subnet_cidr}. |

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#ipv6_address CoreVnicAttachment#ipv6_address}.

---

##### `ipv6_subnet_cidr`<sup>Optional</sup> <a name="ipv6_subnet_cidr" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr"></a>

```python
ipv6_subnet_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#ipv6_subnet_cidr CoreVnicAttachment#ipv6_subnet_cidr}.

---

### CoreVnicAttachmentTimeouts <a name="CoreVnicAttachmentTimeouts" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_vnic_attachment

coreVnicAttachment.CoreVnicAttachmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#create CoreVnicAttachment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#delete CoreVnicAttachment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#update CoreVnicAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#create CoreVnicAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#delete CoreVnicAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_vnic_attachment#update CoreVnicAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_vnic_attachment

coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]]

---


### CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_vnic_attachment

coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6Address">reset_ipv6_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr">reset_ipv6_subnet_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ipv6_address` <a name="reset_ipv6_address" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6Address"></a>

```python
def reset_ipv6_address() -> None
```

##### `reset_ipv6_subnet_cidr` <a name="reset_ipv6_subnet_cidr" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr"></a>

```python
def reset_ipv6_subnet_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6AddressInput">ipv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput">ipv6_subnet_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_address_input`<sup>Optional</sup> <a name="ipv6_address_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6AddressInput"></a>

```python
ipv6_address_input: str
```

- *Type:* str

---

##### `ipv6_subnet_cidr_input`<sup>Optional</sup> <a name="ipv6_subnet_cidr_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput"></a>

```python
ipv6_subnet_cidr_input: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `ipv6_subnet_cidr`<sup>Required</sup> <a name="ipv6_subnet_cidr" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```python
ipv6_subnet_cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]

---


### CoreVnicAttachmentCreateVnicDetailsOutputReference <a name="CoreVnicAttachmentCreateVnicDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_vnic_attachment

coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails">put_ipv6_address_ipv6_subnet_cidr_pair_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignIpv6Ip">reset_assign_ipv6_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignPrivateDnsRecord">reset_assign_private_dns_record</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignPublicIp">reset_assign_public_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetHostnameLabel">reset_hostname_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails">reset_ipv6_address_ipv6_subnet_cidr_pair_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetPrivateIp">reset_private_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSecurityAttributes">reset_security_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSkipSourceDestCheck">reset_skip_source_dest_check</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetVlanId">reset_vlan_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ipv6_address_ipv6_subnet_cidr_pair_details` <a name="put_ipv6_address_ipv6_subnet_cidr_pair_details" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails"></a>

```python
def put_ipv6_address_ipv6_subnet_cidr_pair_details(
  value: typing.Union[IResolvable, typing.List[CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]]

---

##### `reset_assign_ipv6_ip` <a name="reset_assign_ipv6_ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignIpv6Ip"></a>

```python
def reset_assign_ipv6_ip() -> None
```

##### `reset_assign_private_dns_record` <a name="reset_assign_private_dns_record" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignPrivateDnsRecord"></a>

```python
def reset_assign_private_dns_record() -> None
```

##### `reset_assign_public_ip` <a name="reset_assign_public_ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetAssignPublicIp"></a>

```python
def reset_assign_public_ip() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_hostname_label` <a name="reset_hostname_label" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetHostnameLabel"></a>

```python
def reset_hostname_label() -> None
```

##### `reset_ipv6_address_ipv6_subnet_cidr_pair_details` <a name="reset_ipv6_address_ipv6_subnet_cidr_pair_details" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails"></a>

```python
def reset_ipv6_address_ipv6_subnet_cidr_pair_details() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```

##### `reset_security_attributes` <a name="reset_security_attributes" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSecurityAttributes"></a>

```python
def reset_security_attributes() -> None
```

##### `reset_skip_source_dest_check` <a name="reset_skip_source_dest_check" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSkipSourceDestCheck"></a>

```python
def reset_skip_source_dest_check() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_vlan_id` <a name="reset_vlan_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.resetVlanId"></a>

```python
def reset_vlan_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6_address_ipv6_subnet_cidr_pair_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignIpv6IpInput">assign_ipv6_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPrivateDnsRecordInput">assign_private_dns_record_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPublicIpInput">assign_public_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.hostnameLabelInput">hostname_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput">ipv6_address_ipv6_subnet_cidr_pair_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.securityAttributesInput">security_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.skipSourceDestCheckInput">skip_source_dest_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.vlanIdInput">vlan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignIpv6Ip">assign_ipv6_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord">assign_private_dns_record</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPublicIp">assign_public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.hostnameLabel">hostname_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.securityAttributes">security_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.skipSourceDestCheck">skip_source_dest_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.vlanId">vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_address_ipv6_subnet_cidr_pair_details`<sup>Required</sup> <a name="ipv6_address_ipv6_subnet_cidr_pair_details" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```python
ipv6_address_ipv6_subnet_cidr_pair_details: CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `assign_ipv6_ip_input`<sup>Optional</sup> <a name="assign_ipv6_ip_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignIpv6IpInput"></a>

```python
assign_ipv6_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `assign_private_dns_record_input`<sup>Optional</sup> <a name="assign_private_dns_record_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPrivateDnsRecordInput"></a>

```python
assign_private_dns_record_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `assign_public_ip_input`<sup>Optional</sup> <a name="assign_public_ip_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPublicIpInput"></a>

```python
assign_public_ip_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname_label_input`<sup>Optional</sup> <a name="hostname_label_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.hostnameLabelInput"></a>

```python
hostname_label_input: str
```

- *Type:* str

---

##### `ipv6_address_ipv6_subnet_cidr_pair_details_input`<sup>Optional</sup> <a name="ipv6_address_ipv6_subnet_cidr_pair_details_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput"></a>

```python
ipv6_address_ipv6_subnet_cidr_pair_details_input: typing.Union[IResolvable, typing.List[CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">CoreVnicAttachmentCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>]]

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `security_attributes_input`<sup>Optional</sup> <a name="security_attributes_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.securityAttributesInput"></a>

```python
security_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `skip_source_dest_check_input`<sup>Optional</sup> <a name="skip_source_dest_check_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.skipSourceDestCheckInput"></a>

```python
skip_source_dest_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `vlan_id_input`<sup>Optional</sup> <a name="vlan_id_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.vlanIdInput"></a>

```python
vlan_id_input: str
```

- *Type:* str

---

##### `assign_ipv6_ip`<sup>Required</sup> <a name="assign_ipv6_ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignIpv6Ip"></a>

```python
assign_ipv6_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `assign_private_dns_record`<sup>Required</sup> <a name="assign_private_dns_record" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord"></a>

```python
assign_private_dns_record: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `assign_public_ip`<sup>Required</sup> <a name="assign_public_ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.assignPublicIp"></a>

```python
assign_public_ip: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname_label`<sup>Required</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.hostnameLabel"></a>

```python
hostname_label: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `security_attributes`<sup>Required</sup> <a name="security_attributes" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.securityAttributes"></a>

```python
security_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `skip_source_dest_check`<sup>Required</sup> <a name="skip_source_dest_check" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.skipSourceDestCheck"></a>

```python
skip_source_dest_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.vlanId"></a>

```python
vlan_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CoreVnicAttachmentCreateVnicDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentCreateVnicDetails">CoreVnicAttachmentCreateVnicDetails</a>

---


### CoreVnicAttachmentTimeoutsOutputReference <a name="CoreVnicAttachmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_vnic_attachment

coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreVnicAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVnicAttachment.CoreVnicAttachmentTimeouts">CoreVnicAttachmentTimeouts</a>]

---



