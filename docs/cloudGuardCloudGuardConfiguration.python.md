# `cloudGuardCloudGuardConfiguration` Submodule <a name="`cloudGuardCloudGuardConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGuardCloudGuardConfiguration <a name="CloudGuardCloudGuardConfiguration" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration oci_cloud_guard_cloud_guard_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_cloud_guard_configuration

cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration(
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
  reporting_region: str,
  status: str,
  id: str = None,
  self_manage_resources: typing.Union[bool, IResolvable] = None,
  timeouts: CloudGuardCloudGuardConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#compartment_id CloudGuardCloudGuardConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.reportingRegion">reporting_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#reporting_region CloudGuardCloudGuardConfiguration#reporting_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#status CloudGuardCloudGuardConfiguration#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#id CloudGuardCloudGuardConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.selfManageResources">self_manage_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#self_manage_resources CloudGuardCloudGuardConfiguration#self_manage_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts">CloudGuardCloudGuardConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#compartment_id CloudGuardCloudGuardConfiguration#compartment_id}.

---

##### `reporting_region`<sup>Required</sup> <a name="reporting_region" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.reportingRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#reporting_region CloudGuardCloudGuardConfiguration#reporting_region}.

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#status CloudGuardCloudGuardConfiguration#status}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#id CloudGuardCloudGuardConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `self_manage_resources`<sup>Optional</sup> <a name="self_manage_resources" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.selfManageResources"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#self_manage_resources CloudGuardCloudGuardConfiguration#self_manage_resources}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts">CloudGuardCloudGuardConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#timeouts CloudGuardCloudGuardConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.resetSelfManageResources">reset_self_manage_resources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#create CloudGuardCloudGuardConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#delete CloudGuardCloudGuardConfiguration#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#update CloudGuardCloudGuardConfiguration#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_self_manage_resources` <a name="reset_self_manage_resources" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.resetSelfManageResources"></a>

```python
def reset_self_manage_resources() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudGuardCloudGuardConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_cloud_guard_configuration

cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_cloud_guard_configuration

cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_cloud_guard_configuration

cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_cloud_guard_configuration

cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudGuardCloudGuardConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudGuardCloudGuardConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudGuardCloudGuardConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudGuardCloudGuardConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference">CloudGuardCloudGuardConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.reportingRegionInput">reporting_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.selfManageResourcesInput">self_manage_resources_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts">CloudGuardCloudGuardConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.reportingRegion">reporting_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.selfManageResources">self_manage_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.timeouts"></a>

```python
timeouts: CloudGuardCloudGuardConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference">CloudGuardCloudGuardConfigurationTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `reporting_region_input`<sup>Optional</sup> <a name="reporting_region_input" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.reportingRegionInput"></a>

```python
reporting_region_input: str
```

- *Type:* str

---

##### `self_manage_resources_input`<sup>Optional</sup> <a name="self_manage_resources_input" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.selfManageResourcesInput"></a>

```python
self_manage_resources_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CloudGuardCloudGuardConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts">CloudGuardCloudGuardConfigurationTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `reporting_region`<sup>Required</sup> <a name="reporting_region" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.reportingRegion"></a>

```python
reporting_region: str
```

- *Type:* str

---

##### `self_manage_resources`<sup>Required</sup> <a name="self_manage_resources" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.selfManageResources"></a>

```python
self_manage_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGuardCloudGuardConfigurationConfig <a name="CloudGuardCloudGuardConfigurationConfig" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_cloud_guard_configuration

cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  reporting_region: str,
  status: str,
  id: str = None,
  self_manage_resources: typing.Union[bool, IResolvable] = None,
  timeouts: CloudGuardCloudGuardConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#compartment_id CloudGuardCloudGuardConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.reportingRegion">reporting_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#reporting_region CloudGuardCloudGuardConfiguration#reporting_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#status CloudGuardCloudGuardConfiguration#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#id CloudGuardCloudGuardConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.selfManageResources">self_manage_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#self_manage_resources CloudGuardCloudGuardConfiguration#self_manage_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts">CloudGuardCloudGuardConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#compartment_id CloudGuardCloudGuardConfiguration#compartment_id}.

---

##### `reporting_region`<sup>Required</sup> <a name="reporting_region" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.reportingRegion"></a>

```python
reporting_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#reporting_region CloudGuardCloudGuardConfiguration#reporting_region}.

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#status CloudGuardCloudGuardConfiguration#status}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#id CloudGuardCloudGuardConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `self_manage_resources`<sup>Optional</sup> <a name="self_manage_resources" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.selfManageResources"></a>

```python
self_manage_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#self_manage_resources CloudGuardCloudGuardConfiguration#self_manage_resources}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationConfig.property.timeouts"></a>

```python
timeouts: CloudGuardCloudGuardConfigurationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts">CloudGuardCloudGuardConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#timeouts CloudGuardCloudGuardConfiguration#timeouts}

---

### CloudGuardCloudGuardConfigurationTimeouts <a name="CloudGuardCloudGuardConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_cloud_guard_configuration

cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#create CloudGuardCloudGuardConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#delete CloudGuardCloudGuardConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#update CloudGuardCloudGuardConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#create CloudGuardCloudGuardConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#delete CloudGuardCloudGuardConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_cloud_guard_configuration#update CloudGuardCloudGuardConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGuardCloudGuardConfigurationTimeoutsOutputReference <a name="CloudGuardCloudGuardConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_cloud_guard_configuration

cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts">CloudGuardCloudGuardConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudGuardCloudGuardConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudGuardCloudGuardConfiguration.CloudGuardCloudGuardConfigurationTimeouts">CloudGuardCloudGuardConfigurationTimeouts</a>]

---



