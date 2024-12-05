# `managementAgentManagementAgent` Submodule <a name="`managementAgentManagementAgent` Submodule" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementAgentManagementAgent <a name="ManagementAgentManagementAgent" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent oci_management_agent_management_agent}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgent(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_agent_id: str,
  defined_tags: typing.Mapping[str] = None,
  deploy_plugins_id: typing.List[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: ManagementAgentManagementAgentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.managedAgentId">managed_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#managed_agent_id ManagementAgentManagementAgent#managed_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#defined_tags ManagementAgentManagementAgent#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.deployPluginsId">deploy_plugins_id</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#deploy_plugins_id ManagementAgentManagementAgent#deploy_plugins_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#display_name ManagementAgentManagementAgent#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#freeform_tags ManagementAgentManagementAgent#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#id ManagementAgentManagementAgent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts">ManagementAgentManagementAgentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_agent_id`<sup>Required</sup> <a name="managed_agent_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.managedAgentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#managed_agent_id ManagementAgentManagementAgent#managed_agent_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#defined_tags ManagementAgentManagementAgent#defined_tags}.

---

##### `deploy_plugins_id`<sup>Optional</sup> <a name="deploy_plugins_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.deployPluginsId"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#deploy_plugins_id ManagementAgentManagementAgent#deploy_plugins_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#display_name ManagementAgentManagementAgent#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#freeform_tags ManagementAgentManagementAgent#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#id ManagementAgentManagementAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts">ManagementAgentManagementAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#timeouts ManagementAgentManagementAgent#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.resetDeployPluginsId">reset_deploy_plugins_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#create ManagementAgentManagementAgent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#delete ManagementAgentManagementAgent#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#update ManagementAgentManagementAgent#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_deploy_plugins_id` <a name="reset_deploy_plugins_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.resetDeployPluginsId"></a>

```python
def reset_deploy_plugins_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ManagementAgentManagementAgent resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ManagementAgentManagementAgent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagementAgentManagementAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagementAgentManagementAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagementAgentManagementAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.availabilityStatus">availability_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.dataSourceList">data_source_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList">ManagementAgentManagementAgentDataSourceListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.dataSourceSummaryList">data_source_summary_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList">ManagementAgentManagementAgentDataSourceSummaryListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.installKeyId">install_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.installPath">install_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.installType">install_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.isAgentAutoUpgradable">is_agent_auto_upgradable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.isCustomerDeployed">is_customer_deployed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.managementAgentProperties">management_agent_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList">ManagementAgentManagementAgentManagementAgentPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.platformName">platform_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.platformType">platform_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.platformVersion">platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.pluginList">plugin_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList">ManagementAgentManagementAgentPluginListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.resourceArtifactVersion">resource_artifact_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.timeLastHeartbeat">time_last_heartbeat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference">ManagementAgentManagementAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.deployPluginsIdInput">deploy_plugins_id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.managedAgentIdInput">managed_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts">ManagementAgentManagementAgentTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.deployPluginsId">deploy_plugins_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.managedAgentId">managed_agent_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_status`<sup>Required</sup> <a name="availability_status" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `data_source_list`<sup>Required</sup> <a name="data_source_list" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.dataSourceList"></a>

```python
data_source_list: ManagementAgentManagementAgentDataSourceListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList">ManagementAgentManagementAgentDataSourceListStructList</a>

---

##### `data_source_summary_list`<sup>Required</sup> <a name="data_source_summary_list" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.dataSourceSummaryList"></a>

```python
data_source_summary_list: ManagementAgentManagementAgentDataSourceSummaryListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList">ManagementAgentManagementAgentDataSourceSummaryListStructList</a>

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `install_key_id`<sup>Required</sup> <a name="install_key_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.installKeyId"></a>

```python
install_key_id: str
```

- *Type:* str

---

##### `install_path`<sup>Required</sup> <a name="install_path" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.installPath"></a>

```python
install_path: str
```

- *Type:* str

---

##### `install_type`<sup>Required</sup> <a name="install_type" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.installType"></a>

```python
install_type: str
```

- *Type:* str

---

##### `is_agent_auto_upgradable`<sup>Required</sup> <a name="is_agent_auto_upgradable" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.isAgentAutoUpgradable"></a>

```python
is_agent_auto_upgradable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_customer_deployed`<sup>Required</sup> <a name="is_customer_deployed" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.isCustomerDeployed"></a>

```python
is_customer_deployed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `management_agent_properties`<sup>Required</sup> <a name="management_agent_properties" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.managementAgentProperties"></a>

```python
management_agent_properties: ManagementAgentManagementAgentManagementAgentPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList">ManagementAgentManagementAgentManagementAgentPropertiesList</a>

---

##### `platform_name`<sup>Required</sup> <a name="platform_name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.platformName"></a>

```python
platform_name: str
```

- *Type:* str

---

##### `platform_type`<sup>Required</sup> <a name="platform_type" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.platformType"></a>

```python
platform_type: str
```

- *Type:* str

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

---

##### `plugin_list`<sup>Required</sup> <a name="plugin_list" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.pluginList"></a>

```python
plugin_list: ManagementAgentManagementAgentPluginListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList">ManagementAgentManagementAgentPluginListStructList</a>

---

##### `resource_artifact_version`<sup>Required</sup> <a name="resource_artifact_version" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.resourceArtifactVersion"></a>

```python
resource_artifact_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_heartbeat`<sup>Required</sup> <a name="time_last_heartbeat" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.timeLastHeartbeat"></a>

```python
time_last_heartbeat: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.timeouts"></a>

```python
timeouts: ManagementAgentManagementAgentTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference">ManagementAgentManagementAgentTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deploy_plugins_id_input`<sup>Optional</sup> <a name="deploy_plugins_id_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.deployPluginsIdInput"></a>

```python
deploy_plugins_id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_agent_id_input`<sup>Optional</sup> <a name="managed_agent_id_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.managedAgentIdInput"></a>

```python
managed_agent_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ManagementAgentManagementAgentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts">ManagementAgentManagementAgentTimeouts</a>]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deploy_plugins_id`<sup>Required</sup> <a name="deploy_plugins_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.deployPluginsId"></a>

```python
deploy_plugins_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_agent_id`<sup>Required</sup> <a name="managed_agent_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.managedAgentId"></a>

```python
managed_agent_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementAgentManagementAgentConfig <a name="ManagementAgentManagementAgentConfig" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_agent_id: str,
  defined_tags: typing.Mapping[str] = None,
  deploy_plugins_id: typing.List[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: ManagementAgentManagementAgentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.managedAgentId">managed_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#managed_agent_id ManagementAgentManagementAgent#managed_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#defined_tags ManagementAgentManagementAgent#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.deployPluginsId">deploy_plugins_id</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#deploy_plugins_id ManagementAgentManagementAgent#deploy_plugins_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#display_name ManagementAgentManagementAgent#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#freeform_tags ManagementAgentManagementAgent#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#id ManagementAgentManagementAgent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts">ManagementAgentManagementAgentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_agent_id`<sup>Required</sup> <a name="managed_agent_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.managedAgentId"></a>

```python
managed_agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#managed_agent_id ManagementAgentManagementAgent#managed_agent_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#defined_tags ManagementAgentManagementAgent#defined_tags}.

---

##### `deploy_plugins_id`<sup>Optional</sup> <a name="deploy_plugins_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.deployPluginsId"></a>

```python
deploy_plugins_id: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#deploy_plugins_id ManagementAgentManagementAgent#deploy_plugins_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#display_name ManagementAgentManagementAgent#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#freeform_tags ManagementAgentManagementAgent#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#id ManagementAgentManagementAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentConfig.property.timeouts"></a>

```python
timeouts: ManagementAgentManagementAgentTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts">ManagementAgentManagementAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#timeouts ManagementAgentManagementAgent#timeouts}

---

### ManagementAgentManagementAgentDataSourceListMetricDimensions <a name="ManagementAgentManagementAgentDataSourceListMetricDimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensions()
```


### ManagementAgentManagementAgentDataSourceListStruct <a name="ManagementAgentManagementAgentDataSourceListStruct" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStruct()
```


### ManagementAgentManagementAgentDataSourceSummaryListStruct <a name="ManagementAgentManagementAgentDataSourceSummaryListStruct" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStruct()
```


### ManagementAgentManagementAgentManagementAgentProperties <a name="ManagementAgentManagementAgentManagementAgentProperties" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentProperties()
```


### ManagementAgentManagementAgentPluginListStruct <a name="ManagementAgentManagementAgentPluginListStruct" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStruct()
```


### ManagementAgentManagementAgentTimeouts <a name="ManagementAgentManagementAgentTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#create ManagementAgentManagementAgent#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#delete ManagementAgentManagementAgent#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#update ManagementAgentManagementAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#create ManagementAgentManagementAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#delete ManagementAgentManagementAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent#update ManagementAgentManagementAgent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementAgentManagementAgentDataSourceListMetricDimensionsList <a name="ManagementAgentManagementAgentDataSourceListMetricDimensionsList" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference <a name="ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensions">ManagementAgentManagementAgentDataSourceListMetricDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: ManagementAgentManagementAgentDataSourceListMetricDimensions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensions">ManagementAgentManagementAgentDataSourceListMetricDimensions</a>

---


### ManagementAgentManagementAgentDataSourceListStructList <a name="ManagementAgentManagementAgentDataSourceListStructList" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagementAgentManagementAgentDataSourceListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ManagementAgentManagementAgentDataSourceListStructOutputReference <a name="ManagementAgentManagementAgentDataSourceListStructOutputReference" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.allowMetrics">allow_metrics</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.connectionTimeout">connection_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.isDaemonSet">is_daemon_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.metricDimensions">metric_dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList">ManagementAgentManagementAgentDataSourceListMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.proxyUrl">proxy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.readDataLimit">read_data_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.readTimeout">read_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.scheduleMins">schedule_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStruct">ManagementAgentManagementAgentDataSourceListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_metrics`<sup>Required</sup> <a name="allow_metrics" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.allowMetrics"></a>

```python
allow_metrics: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_timeout`<sup>Required</sup> <a name="connection_timeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.connectionTimeout"></a>

```python
connection_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_daemon_set`<sup>Required</sup> <a name="is_daemon_set" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.isDaemonSet"></a>

```python
is_daemon_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `metric_dimensions`<sup>Required</sup> <a name="metric_dimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.metricDimensions"></a>

```python
metric_dimensions: ManagementAgentManagementAgentDataSourceListMetricDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListMetricDimensionsList">ManagementAgentManagementAgentDataSourceListMetricDimensionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `proxy_url`<sup>Required</sup> <a name="proxy_url" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.proxyUrl"></a>

```python
proxy_url: str
```

- *Type:* str

---

##### `read_data_limit`<sup>Required</sup> <a name="read_data_limit" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.readDataLimit"></a>

```python
read_data_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_timeout`<sup>Required</sup> <a name="read_timeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.readTimeout"></a>

```python
read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `schedule_mins`<sup>Required</sup> <a name="schedule_mins" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.scheduleMins"></a>

```python
schedule_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStructOutputReference.property.internalValue"></a>

```python
internal_value: ManagementAgentManagementAgentDataSourceListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceListStruct">ManagementAgentManagementAgentDataSourceListStruct</a>

---


### ManagementAgentManagementAgentDataSourceSummaryListStructList <a name="ManagementAgentManagementAgentDataSourceSummaryListStructList" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference <a name="ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.property.isDaemonSet">is_daemon_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStruct">ManagementAgentManagementAgentDataSourceSummaryListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_daemon_set`<sup>Required</sup> <a name="is_daemon_set" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.property.isDaemonSet"></a>

```python
is_daemon_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStructOutputReference.property.internalValue"></a>

```python
internal_value: ManagementAgentManagementAgentDataSourceSummaryListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentDataSourceSummaryListStruct">ManagementAgentManagementAgentDataSourceSummaryListStruct</a>

---


### ManagementAgentManagementAgentManagementAgentPropertiesList <a name="ManagementAgentManagementAgentManagementAgentPropertiesList" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagementAgentManagementAgentManagementAgentPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ManagementAgentManagementAgentManagementAgentPropertiesOutputReference <a name="ManagementAgentManagementAgentManagementAgentPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.property.units">units</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentProperties">ManagementAgentManagementAgentManagementAgentProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `units`<sup>Required</sup> <a name="units" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.property.units"></a>

```python
units: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: ManagementAgentManagementAgentManagementAgentProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentManagementAgentProperties">ManagementAgentManagementAgentManagementAgentProperties</a>

---


### ManagementAgentManagementAgentPluginListStructList <a name="ManagementAgentManagementAgentPluginListStructList" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagementAgentManagementAgentPluginListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ManagementAgentManagementAgentPluginListStructOutputReference <a name="ManagementAgentManagementAgentPluginListStructOutputReference" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.pluginDisplayName">plugin_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.pluginId">plugin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.pluginName">plugin_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.pluginStatus">plugin_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.pluginStatusMessage">plugin_status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.pluginVersion">plugin_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStruct">ManagementAgentManagementAgentPluginListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `plugin_display_name`<sup>Required</sup> <a name="plugin_display_name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.pluginDisplayName"></a>

```python
plugin_display_name: str
```

- *Type:* str

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

---

##### `plugin_name`<sup>Required</sup> <a name="plugin_name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.pluginName"></a>

```python
plugin_name: str
```

- *Type:* str

---

##### `plugin_status`<sup>Required</sup> <a name="plugin_status" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.pluginStatus"></a>

```python
plugin_status: str
```

- *Type:* str

---

##### `plugin_status_message`<sup>Required</sup> <a name="plugin_status_message" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.pluginStatusMessage"></a>

```python
plugin_status_message: str
```

- *Type:* str

---

##### `plugin_version`<sup>Required</sup> <a name="plugin_version" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.pluginVersion"></a>

```python
plugin_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStructOutputReference.property.internalValue"></a>

```python
internal_value: ManagementAgentManagementAgentPluginListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentPluginListStruct">ManagementAgentManagementAgentPluginListStruct</a>

---


### ManagementAgentManagementAgentTimeoutsOutputReference <a name="ManagementAgentManagementAgentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent

managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts">ManagementAgentManagementAgentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ManagementAgentManagementAgentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgent.ManagementAgentManagementAgentTimeouts">ManagementAgentManagementAgentTimeouts</a>]

---



