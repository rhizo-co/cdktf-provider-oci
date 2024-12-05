# `osmanagementManagedInstance` Submodule <a name="`osmanagementManagedInstance` Submodule" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsmanagementManagedInstance <a name="OsmanagementManagedInstance" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance oci_osmanagement_managed_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_id: str,
  id: str = None,
  is_data_collection_authorized: typing.Union[bool, IResolvable] = None,
  notification_topic_id: str = None,
  timeouts: OsmanagementManagedInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#managed_instance_id OsmanagementManagedInstance#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#id OsmanagementManagedInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.isDataCollectionAuthorized">is_data_collection_authorized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#is_data_collection_authorized OsmanagementManagedInstance#is_data_collection_authorized}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.notificationTopicId">notification_topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#notification_topic_id OsmanagementManagedInstance#notification_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#managed_instance_id OsmanagementManagedInstance#managed_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#id OsmanagementManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_data_collection_authorized`<sup>Optional</sup> <a name="is_data_collection_authorized" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.isDataCollectionAuthorized"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#is_data_collection_authorized OsmanagementManagedInstance#is_data_collection_authorized}.

---

##### `notification_topic_id`<sup>Optional</sup> <a name="notification_topic_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.notificationTopicId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#notification_topic_id OsmanagementManagedInstance#notification_topic_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#timeouts OsmanagementManagedInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetIsDataCollectionAuthorized">reset_is_data_collection_authorized</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetNotificationTopicId">reset_notification_topic_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#create OsmanagementManagedInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#delete OsmanagementManagedInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#update OsmanagementManagedInstance#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_data_collection_authorized` <a name="reset_is_data_collection_authorized" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetIsDataCollectionAuthorized"></a>

```python
def reset_is_data_collection_authorized() -> None
```

##### `reset_notification_topic_id` <a name="reset_notification_topic_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetNotificationTopicId"></a>

```python
def reset_notification_topic_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OsmanagementManagedInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OsmanagementManagedInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OsmanagementManagedInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OsmanagementManagedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsmanagementManagedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.autonomous">autonomous</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList">OsmanagementManagedInstanceAutonomousList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.bugUpdatesAvailable">bug_updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.childSoftwareSources">child_software_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList">OsmanagementManagedInstanceChildSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.enhancementUpdatesAvailable">enhancement_updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isRebootRequired">is_reboot_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.kspliceEffectiveKernelVersion">ksplice_effective_kernel_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lastBoot">last_boot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lastCheckin">last_checkin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceGroups">managed_instance_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList">OsmanagementManagedInstanceManagedInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osKernelVersion">os_kernel_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osName">os_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.otherUpdatesAvailable">other_updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.parentSoftwareSource">parent_software_source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList">OsmanagementManagedInstanceParentSoftwareSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.scheduledJobCount">scheduled_job_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.securityUpdatesAvailable">security_updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference">OsmanagementManagedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.updatesAvailable">updates_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.workRequestCount">work_request_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isDataCollectionAuthorizedInput">is_data_collection_authorized_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.notificationTopicIdInput">notification_topic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isDataCollectionAuthorized">is_data_collection_authorized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.notificationTopicId">notification_topic_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous`<sup>Required</sup> <a name="autonomous" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.autonomous"></a>

```python
autonomous: OsmanagementManagedInstanceAutonomousList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList">OsmanagementManagedInstanceAutonomousList</a>

---

##### `bug_updates_available`<sup>Required</sup> <a name="bug_updates_available" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.bugUpdatesAvailable"></a>

```python
bug_updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `child_software_sources`<sup>Required</sup> <a name="child_software_sources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.childSoftwareSources"></a>

```python
child_software_sources: OsmanagementManagedInstanceChildSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList">OsmanagementManagedInstanceChildSoftwareSourcesList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enhancement_updates_available`<sup>Required</sup> <a name="enhancement_updates_available" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.enhancementUpdatesAvailable"></a>

```python
enhancement_updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_reboot_required`<sup>Required</sup> <a name="is_reboot_required" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isRebootRequired"></a>

```python
is_reboot_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ksplice_effective_kernel_version`<sup>Required</sup> <a name="ksplice_effective_kernel_version" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.kspliceEffectiveKernelVersion"></a>

```python
ksplice_effective_kernel_version: str
```

- *Type:* str

---

##### `last_boot`<sup>Required</sup> <a name="last_boot" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lastBoot"></a>

```python
last_boot: str
```

- *Type:* str

---

##### `last_checkin`<sup>Required</sup> <a name="last_checkin" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.lastCheckin"></a>

```python
last_checkin: str
```

- *Type:* str

---

##### `managed_instance_groups`<sup>Required</sup> <a name="managed_instance_groups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceGroups"></a>

```python
managed_instance_groups: OsmanagementManagedInstanceManagedInstanceGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList">OsmanagementManagedInstanceManagedInstanceGroupsList</a>

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `os_kernel_version`<sup>Required</sup> <a name="os_kernel_version" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osKernelVersion"></a>

```python
os_kernel_version: str
```

- *Type:* str

---

##### `os_name`<sup>Required</sup> <a name="os_name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osName"></a>

```python
os_name: str
```

- *Type:* str

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `other_updates_available`<sup>Required</sup> <a name="other_updates_available" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.otherUpdatesAvailable"></a>

```python
other_updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_software_source`<sup>Required</sup> <a name="parent_software_source" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.parentSoftwareSource"></a>

```python
parent_software_source: OsmanagementManagedInstanceParentSoftwareSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList">OsmanagementManagedInstanceParentSoftwareSourceList</a>

---

##### `scheduled_job_count`<sup>Required</sup> <a name="scheduled_job_count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.scheduledJobCount"></a>

```python
scheduled_job_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_updates_available`<sup>Required</sup> <a name="security_updates_available" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.securityUpdatesAvailable"></a>

```python
security_updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.timeouts"></a>

```python
timeouts: OsmanagementManagedInstanceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference">OsmanagementManagedInstanceTimeoutsOutputReference</a>

---

##### `updates_available`<sup>Required</sup> <a name="updates_available" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.updatesAvailable"></a>

```python
updates_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `work_request_count`<sup>Required</sup> <a name="work_request_count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.workRequestCount"></a>

```python
work_request_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_data_collection_authorized_input`<sup>Optional</sup> <a name="is_data_collection_authorized_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isDataCollectionAuthorizedInput"></a>

```python
is_data_collection_authorized_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `notification_topic_id_input`<sup>Optional</sup> <a name="notification_topic_id_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.notificationTopicIdInput"></a>

```python
notification_topic_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OsmanagementManagedInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_data_collection_authorized`<sup>Required</sup> <a name="is_data_collection_authorized" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.isDataCollectionAuthorized"></a>

```python
is_data_collection_authorized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `notification_topic_id`<sup>Required</sup> <a name="notification_topic_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.notificationTopicId"></a>

```python
notification_topic_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OsmanagementManagedInstanceAutonomous <a name="OsmanagementManagedInstanceAutonomous" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous()
```


### OsmanagementManagedInstanceChildSoftwareSources <a name="OsmanagementManagedInstanceChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources()
```


### OsmanagementManagedInstanceConfig <a name="OsmanagementManagedInstanceConfig" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_id: str,
  id: str = None,
  is_data_collection_authorized: typing.Union[bool, IResolvable] = None,
  notification_topic_id: str = None,
  timeouts: OsmanagementManagedInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#managed_instance_id OsmanagementManagedInstance#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#id OsmanagementManagedInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.isDataCollectionAuthorized">is_data_collection_authorized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#is_data_collection_authorized OsmanagementManagedInstance#is_data_collection_authorized}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.notificationTopicId">notification_topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#notification_topic_id OsmanagementManagedInstance#notification_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#managed_instance_id OsmanagementManagedInstance#managed_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#id OsmanagementManagedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_data_collection_authorized`<sup>Optional</sup> <a name="is_data_collection_authorized" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.isDataCollectionAuthorized"></a>

```python
is_data_collection_authorized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#is_data_collection_authorized OsmanagementManagedInstance#is_data_collection_authorized}.

---

##### `notification_topic_id`<sup>Optional</sup> <a name="notification_topic_id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.notificationTopicId"></a>

```python
notification_topic_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#notification_topic_id OsmanagementManagedInstance#notification_topic_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceConfig.property.timeouts"></a>

```python
timeouts: OsmanagementManagedInstanceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#timeouts OsmanagementManagedInstance#timeouts}

---

### OsmanagementManagedInstanceManagedInstanceGroups <a name="OsmanagementManagedInstanceManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups()
```


### OsmanagementManagedInstanceParentSoftwareSource <a name="OsmanagementManagedInstanceParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource()
```


### OsmanagementManagedInstanceTimeouts <a name="OsmanagementManagedInstanceTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#create OsmanagementManagedInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#delete OsmanagementManagedInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#update OsmanagementManagedInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#create OsmanagementManagedInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#delete OsmanagementManagedInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance#update OsmanagementManagedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsmanagementManagedInstanceAutonomousList <a name="OsmanagementManagedInstanceAutonomousList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsmanagementManagedInstanceAutonomousOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OsmanagementManagedInstanceAutonomousOutputReference <a name="OsmanagementManagedInstanceAutonomousOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.isAutoUpdateEnabled">is_auto_update_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous">OsmanagementManagedInstanceAutonomous</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_auto_update_enabled`<sup>Required</sup> <a name="is_auto_update_enabled" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.isAutoUpdateEnabled"></a>

```python
is_auto_update_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomousOutputReference.property.internalValue"></a>

```python
internal_value: OsmanagementManagedInstanceAutonomous
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceAutonomous">OsmanagementManagedInstanceAutonomous</a>

---


### OsmanagementManagedInstanceChildSoftwareSourcesList <a name="OsmanagementManagedInstanceChildSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsmanagementManagedInstanceChildSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OsmanagementManagedInstanceChildSoftwareSourcesOutputReference <a name="OsmanagementManagedInstanceChildSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources">OsmanagementManagedInstanceChildSoftwareSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSourcesOutputReference.property.internalValue"></a>

```python
internal_value: OsmanagementManagedInstanceChildSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceChildSoftwareSources">OsmanagementManagedInstanceChildSoftwareSources</a>

---


### OsmanagementManagedInstanceManagedInstanceGroupsList <a name="OsmanagementManagedInstanceManagedInstanceGroupsList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsmanagementManagedInstanceManagedInstanceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OsmanagementManagedInstanceManagedInstanceGroupsOutputReference <a name="OsmanagementManagedInstanceManagedInstanceGroupsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups">OsmanagementManagedInstanceManagedInstanceGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroupsOutputReference.property.internalValue"></a>

```python
internal_value: OsmanagementManagedInstanceManagedInstanceGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceManagedInstanceGroups">OsmanagementManagedInstanceManagedInstanceGroups</a>

---


### OsmanagementManagedInstanceParentSoftwareSourceList <a name="OsmanagementManagedInstanceParentSoftwareSourceList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OsmanagementManagedInstanceParentSoftwareSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OsmanagementManagedInstanceParentSoftwareSourceOutputReference <a name="OsmanagementManagedInstanceParentSoftwareSourceOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource">OsmanagementManagedInstanceParentSoftwareSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSourceOutputReference.property.internalValue"></a>

```python
internal_value: OsmanagementManagedInstanceParentSoftwareSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceParentSoftwareSource">OsmanagementManagedInstanceParentSoftwareSource</a>

---


### OsmanagementManagedInstanceTimeoutsOutputReference <a name="OsmanagementManagedInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import osmanagement_managed_instance

osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OsmanagementManagedInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstance.OsmanagementManagedInstanceTimeouts">OsmanagementManagedInstanceTimeouts</a>]

---



