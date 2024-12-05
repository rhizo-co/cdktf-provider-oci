# `logAnalyticsLogAnalyticsPreferencesManagement` Submodule <a name="`logAnalyticsLogAnalyticsPreferencesManagement` Submodule" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsLogAnalyticsPreferencesManagement <a name="LogAnalyticsLogAnalyticsPreferencesManagement" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management oci_log_analytics_log_analytics_preferences_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_preferences_management

logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace: str,
  id: str = None,
  items: typing.Union[IResolvable, typing.List[LogAnalyticsLogAnalyticsPreferencesManagementItems]] = None,
  timeouts: LogAnalyticsLogAnalyticsPreferencesManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#namespace LogAnalyticsLogAnalyticsPreferencesManagement#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#id LogAnalyticsLogAnalyticsPreferencesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems">LogAnalyticsLogAnalyticsPreferencesManagementItems</a>]]</code> | items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts">LogAnalyticsLogAnalyticsPreferencesManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#namespace LogAnalyticsLogAnalyticsPreferencesManagement#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#id LogAnalyticsLogAnalyticsPreferencesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems">LogAnalyticsLogAnalyticsPreferencesManagementItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#items LogAnalyticsLogAnalyticsPreferencesManagement#items}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts">LogAnalyticsLogAnalyticsPreferencesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#timeouts LogAnalyticsLogAnalyticsPreferencesManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.putItems">put_items</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.resetItems">reset_items</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_items` <a name="put_items" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[LogAnalyticsLogAnalyticsPreferencesManagementItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems">LogAnalyticsLogAnalyticsPreferencesManagementItems</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#create LogAnalyticsLogAnalyticsPreferencesManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#delete LogAnalyticsLogAnalyticsPreferencesManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#update LogAnalyticsLogAnalyticsPreferencesManagement#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_items` <a name="reset_items" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.resetItems"></a>

```python
def reset_items() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LogAnalyticsLogAnalyticsPreferencesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_preferences_management

logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_preferences_management

logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_preferences_management

logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_preferences_management

logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LogAnalyticsLogAnalyticsPreferencesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogAnalyticsLogAnalyticsPreferencesManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogAnalyticsLogAnalyticsPreferencesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsLogAnalyticsPreferencesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList">LogAnalyticsLogAnalyticsPreferencesManagementItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference">LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems">LogAnalyticsLogAnalyticsPreferencesManagementItems</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts">LogAnalyticsLogAnalyticsPreferencesManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.items"></a>

```python
items: LogAnalyticsLogAnalyticsPreferencesManagementItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList">LogAnalyticsLogAnalyticsPreferencesManagementItemsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.timeouts"></a>

```python
timeouts: LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference">LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[LogAnalyticsLogAnalyticsPreferencesManagementItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems">LogAnalyticsLogAnalyticsPreferencesManagementItems</a>]]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LogAnalyticsLogAnalyticsPreferencesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts">LogAnalyticsLogAnalyticsPreferencesManagementTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsLogAnalyticsPreferencesManagementConfig <a name="LogAnalyticsLogAnalyticsPreferencesManagementConfig" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_preferences_management

logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace: str,
  id: str = None,
  items: typing.Union[IResolvable, typing.List[LogAnalyticsLogAnalyticsPreferencesManagementItems]] = None,
  timeouts: LogAnalyticsLogAnalyticsPreferencesManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#namespace LogAnalyticsLogAnalyticsPreferencesManagement#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#id LogAnalyticsLogAnalyticsPreferencesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems">LogAnalyticsLogAnalyticsPreferencesManagementItems</a>]]</code> | items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts">LogAnalyticsLogAnalyticsPreferencesManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#namespace LogAnalyticsLogAnalyticsPreferencesManagement#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#id LogAnalyticsLogAnalyticsPreferencesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[LogAnalyticsLogAnalyticsPreferencesManagementItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems">LogAnalyticsLogAnalyticsPreferencesManagementItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#items LogAnalyticsLogAnalyticsPreferencesManagement#items}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementConfig.property.timeouts"></a>

```python
timeouts: LogAnalyticsLogAnalyticsPreferencesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts">LogAnalyticsLogAnalyticsPreferencesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#timeouts LogAnalyticsLogAnalyticsPreferencesManagement#timeouts}

---

### LogAnalyticsLogAnalyticsPreferencesManagementItems <a name="LogAnalyticsLogAnalyticsPreferencesManagementItems" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_preferences_management

logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#name LogAnalyticsLogAnalyticsPreferencesManagement#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#value LogAnalyticsLogAnalyticsPreferencesManagement#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#name LogAnalyticsLogAnalyticsPreferencesManagement#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#value LogAnalyticsLogAnalyticsPreferencesManagement#value}.

---

### LogAnalyticsLogAnalyticsPreferencesManagementTimeouts <a name="LogAnalyticsLogAnalyticsPreferencesManagementTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_preferences_management

logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#create LogAnalyticsLogAnalyticsPreferencesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#delete LogAnalyticsLogAnalyticsPreferencesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#update LogAnalyticsLogAnalyticsPreferencesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#create LogAnalyticsLogAnalyticsPreferencesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#delete LogAnalyticsLogAnalyticsPreferencesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_preferences_management#update LogAnalyticsLogAnalyticsPreferencesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsLogAnalyticsPreferencesManagementItemsList <a name="LogAnalyticsLogAnalyticsPreferencesManagementItemsList" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_preferences_management

logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems">LogAnalyticsLogAnalyticsPreferencesManagementItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogAnalyticsLogAnalyticsPreferencesManagementItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems">LogAnalyticsLogAnalyticsPreferencesManagementItems</a>]]

---


### LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference <a name="LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_preferences_management

logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems">LogAnalyticsLogAnalyticsPreferencesManagementItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogAnalyticsLogAnalyticsPreferencesManagementItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementItems">LogAnalyticsLogAnalyticsPreferencesManagementItems</a>]

---


### LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference <a name="LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import log_analytics_log_analytics_preferences_management

logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts">LogAnalyticsLogAnalyticsPreferencesManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogAnalyticsLogAnalyticsPreferencesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsPreferencesManagement.LogAnalyticsLogAnalyticsPreferencesManagementTimeouts">LogAnalyticsLogAnalyticsPreferencesManagementTimeouts</a>]

---



