# `fusionAppsFusionEnvironmentServiceAttachment` Submodule <a name="`fusionAppsFusionEnvironmentServiceAttachment` Submodule" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FusionAppsFusionEnvironmentServiceAttachment <a name="FusionAppsFusionEnvironmentServiceAttachment" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment oci_fusion_apps_fusion_environment_service_attachment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_service_attachment

fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fusion_environment_id: str,
  service_instance_id: str,
  service_instance_type: str,
  defined_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: FusionAppsFusionEnvironmentServiceAttachmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#fusion_environment_id FusionAppsFusionEnvironmentServiceAttachment#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#service_instance_id FusionAppsFusionEnvironmentServiceAttachment#service_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.serviceInstanceType">service_instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#service_instance_type FusionAppsFusionEnvironmentServiceAttachment#service_instance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#defined_tags FusionAppsFusionEnvironmentServiceAttachment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#id FusionAppsFusionEnvironmentServiceAttachment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts">FusionAppsFusionEnvironmentServiceAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.fusionEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#fusion_environment_id FusionAppsFusionEnvironmentServiceAttachment#fusion_environment_id}.

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.serviceInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#service_instance_id FusionAppsFusionEnvironmentServiceAttachment#service_instance_id}.

---

##### `service_instance_type`<sup>Required</sup> <a name="service_instance_type" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.serviceInstanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#service_instance_type FusionAppsFusionEnvironmentServiceAttachment#service_instance_type}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#defined_tags FusionAppsFusionEnvironmentServiceAttachment#defined_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#id FusionAppsFusionEnvironmentServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts">FusionAppsFusionEnvironmentServiceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#timeouts FusionAppsFusionEnvironmentServiceAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#create FusionAppsFusionEnvironmentServiceAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#delete FusionAppsFusionEnvironmentServiceAttachment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#update FusionAppsFusionEnvironmentServiceAttachment#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FusionAppsFusionEnvironmentServiceAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_service_attachment

fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_service_attachment

fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_service_attachment

fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_service_attachment

fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FusionAppsFusionEnvironmentServiceAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FusionAppsFusionEnvironmentServiceAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FusionAppsFusionEnvironmentServiceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FusionAppsFusionEnvironmentServiceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.isSkuBased">is_sku_based</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.serviceUrl">service_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference">FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.fusionEnvironmentIdInput">fusion_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.serviceInstanceIdInput">service_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.serviceInstanceTypeInput">service_instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts">FusionAppsFusionEnvironmentServiceAttachmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.serviceInstanceType">service_instance_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_sku_based`<sup>Required</sup> <a name="is_sku_based" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.isSkuBased"></a>

```python
is_sku_based: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `service_url`<sup>Required</sup> <a name="service_url" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.serviceUrl"></a>

```python
service_url: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.timeouts"></a>

```python
timeouts: FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference">FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fusion_environment_id_input`<sup>Optional</sup> <a name="fusion_environment_id_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.fusionEnvironmentIdInput"></a>

```python
fusion_environment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_instance_id_input`<sup>Optional</sup> <a name="service_instance_id_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.serviceInstanceIdInput"></a>

```python
service_instance_id_input: str
```

- *Type:* str

---

##### `service_instance_type_input`<sup>Optional</sup> <a name="service_instance_type_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.serviceInstanceTypeInput"></a>

```python
service_instance_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FusionAppsFusionEnvironmentServiceAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts">FusionAppsFusionEnvironmentServiceAttachmentTimeouts</a>]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.serviceInstanceId"></a>

```python
service_instance_id: str
```

- *Type:* str

---

##### `service_instance_type`<sup>Required</sup> <a name="service_instance_type" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.serviceInstanceType"></a>

```python
service_instance_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FusionAppsFusionEnvironmentServiceAttachmentConfig <a name="FusionAppsFusionEnvironmentServiceAttachmentConfig" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_service_attachment

fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fusion_environment_id: str,
  service_instance_id: str,
  service_instance_type: str,
  defined_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: FusionAppsFusionEnvironmentServiceAttachmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#fusion_environment_id FusionAppsFusionEnvironmentServiceAttachment#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#service_instance_id FusionAppsFusionEnvironmentServiceAttachment#service_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.serviceInstanceType">service_instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#service_instance_type FusionAppsFusionEnvironmentServiceAttachment#service_instance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#defined_tags FusionAppsFusionEnvironmentServiceAttachment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#id FusionAppsFusionEnvironmentServiceAttachment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts">FusionAppsFusionEnvironmentServiceAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#fusion_environment_id FusionAppsFusionEnvironmentServiceAttachment#fusion_environment_id}.

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.serviceInstanceId"></a>

```python
service_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#service_instance_id FusionAppsFusionEnvironmentServiceAttachment#service_instance_id}.

---

##### `service_instance_type`<sup>Required</sup> <a name="service_instance_type" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.serviceInstanceType"></a>

```python
service_instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#service_instance_type FusionAppsFusionEnvironmentServiceAttachment#service_instance_type}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#defined_tags FusionAppsFusionEnvironmentServiceAttachment#defined_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#id FusionAppsFusionEnvironmentServiceAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentConfig.property.timeouts"></a>

```python
timeouts: FusionAppsFusionEnvironmentServiceAttachmentTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts">FusionAppsFusionEnvironmentServiceAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#timeouts FusionAppsFusionEnvironmentServiceAttachment#timeouts}

---

### FusionAppsFusionEnvironmentServiceAttachmentTimeouts <a name="FusionAppsFusionEnvironmentServiceAttachmentTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_service_attachment

fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#create FusionAppsFusionEnvironmentServiceAttachment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#delete FusionAppsFusionEnvironmentServiceAttachment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#update FusionAppsFusionEnvironmentServiceAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#create FusionAppsFusionEnvironmentServiceAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#delete FusionAppsFusionEnvironmentServiceAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_service_attachment#update FusionAppsFusionEnvironmentServiceAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference <a name="FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import fusion_apps_fusion_environment_service_attachment

fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts">FusionAppsFusionEnvironmentServiceAttachmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FusionAppsFusionEnvironmentServiceAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentServiceAttachment.FusionAppsFusionEnvironmentServiceAttachmentTimeouts">FusionAppsFusionEnvironmentServiceAttachmentTimeouts</a>]

---



