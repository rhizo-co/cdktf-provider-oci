# `optimizerEnrollmentStatus` Submodule <a name="`optimizerEnrollmentStatus` Submodule" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OptimizerEnrollmentStatus <a name="OptimizerEnrollmentStatus" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status oci_optimizer_enrollment_status}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_enrollment_status

optimizerEnrollmentStatus.OptimizerEnrollmentStatus(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enrollment_status_id: str,
  status: str,
  id: str = None,
  timeouts: OptimizerEnrollmentStatusTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.enrollmentStatusId">enrollment_status_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#enrollment_status_id OptimizerEnrollmentStatus#enrollment_status_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#status OptimizerEnrollmentStatus#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#id OptimizerEnrollmentStatus#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts">OptimizerEnrollmentStatusTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enrollment_status_id`<sup>Required</sup> <a name="enrollment_status_id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.enrollmentStatusId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#enrollment_status_id OptimizerEnrollmentStatus#enrollment_status_id}.

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#status OptimizerEnrollmentStatus#status}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#id OptimizerEnrollmentStatus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts">OptimizerEnrollmentStatusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#timeouts OptimizerEnrollmentStatus#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#create OptimizerEnrollmentStatus#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#delete OptimizerEnrollmentStatus#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#update OptimizerEnrollmentStatus#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OptimizerEnrollmentStatus resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_enrollment_status

optimizerEnrollmentStatus.OptimizerEnrollmentStatus.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_enrollment_status

optimizerEnrollmentStatus.OptimizerEnrollmentStatus.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_enrollment_status

optimizerEnrollmentStatus.OptimizerEnrollmentStatus.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_enrollment_status

optimizerEnrollmentStatus.OptimizerEnrollmentStatus.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OptimizerEnrollmentStatus resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OptimizerEnrollmentStatus to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OptimizerEnrollmentStatus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OptimizerEnrollmentStatus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference">OptimizerEnrollmentStatusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.enrollmentStatusIdInput">enrollment_status_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts">OptimizerEnrollmentStatusTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.enrollmentStatusId">enrollment_status_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.timeouts"></a>

```python
timeouts: OptimizerEnrollmentStatusTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference">OptimizerEnrollmentStatusTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `enrollment_status_id_input`<sup>Optional</sup> <a name="enrollment_status_id_input" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.enrollmentStatusIdInput"></a>

```python
enrollment_status_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OptimizerEnrollmentStatusTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts">OptimizerEnrollmentStatusTimeouts</a>]

---

##### `enrollment_status_id`<sup>Required</sup> <a name="enrollment_status_id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.enrollmentStatusId"></a>

```python
enrollment_status_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatus.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OptimizerEnrollmentStatusConfig <a name="OptimizerEnrollmentStatusConfig" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_enrollment_status

optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enrollment_status_id: str,
  status: str,
  id: str = None,
  timeouts: OptimizerEnrollmentStatusTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.enrollmentStatusId">enrollment_status_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#enrollment_status_id OptimizerEnrollmentStatus#enrollment_status_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#status OptimizerEnrollmentStatus#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#id OptimizerEnrollmentStatus#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts">OptimizerEnrollmentStatusTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enrollment_status_id`<sup>Required</sup> <a name="enrollment_status_id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.enrollmentStatusId"></a>

```python
enrollment_status_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#enrollment_status_id OptimizerEnrollmentStatus#enrollment_status_id}.

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#status OptimizerEnrollmentStatus#status}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#id OptimizerEnrollmentStatus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusConfig.property.timeouts"></a>

```python
timeouts: OptimizerEnrollmentStatusTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts">OptimizerEnrollmentStatusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#timeouts OptimizerEnrollmentStatus#timeouts}

---

### OptimizerEnrollmentStatusTimeouts <a name="OptimizerEnrollmentStatusTimeouts" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_enrollment_status

optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#create OptimizerEnrollmentStatus#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#delete OptimizerEnrollmentStatus#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#update OptimizerEnrollmentStatus#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#create OptimizerEnrollmentStatus#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#delete OptimizerEnrollmentStatus#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/optimizer_enrollment_status#update OptimizerEnrollmentStatus#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OptimizerEnrollmentStatusTimeoutsOutputReference <a name="OptimizerEnrollmentStatusTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import optimizer_enrollment_status

optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts">OptimizerEnrollmentStatusTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OptimizerEnrollmentStatusTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.optimizerEnrollmentStatus.OptimizerEnrollmentStatusTimeouts">OptimizerEnrollmentStatusTimeouts</a>]

---



