# `identityTag` Submodule <a name="`identityTag` Submodule" id="rhizo-co-terraform-provider-oci.identityTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityTag <a name="IdentityTag" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag oci_identity_tag}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_tag

identityTag.IdentityTag(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  name: str,
  tag_namespace_id: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_cost_tracking: typing.Union[bool, IResolvable] = None,
  is_retired: typing.Union[bool, IResolvable] = None,
  timeouts: IdentityTagTimeouts = None,
  validator: IdentityTagValidator = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#description IdentityTag#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#name IdentityTag#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.tagNamespaceId">tag_namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#tag_namespace_id IdentityTag#tag_namespace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#defined_tags IdentityTag#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#freeform_tags IdentityTag#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#id IdentityTag#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.isCostTracking">is_cost_tracking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#is_cost_tracking IdentityTag#is_cost_tracking}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.isRetired">is_retired</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#is_retired IdentityTag#is_retired}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeouts">IdentityTagTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.validator">validator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidator">IdentityTagValidator</a></code> | validator block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#description IdentityTag#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#name IdentityTag#name}.

---

##### `tag_namespace_id`<sup>Required</sup> <a name="tag_namespace_id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.tagNamespaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#tag_namespace_id IdentityTag#tag_namespace_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#defined_tags IdentityTag#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#freeform_tags IdentityTag#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#id IdentityTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_cost_tracking`<sup>Optional</sup> <a name="is_cost_tracking" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.isCostTracking"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#is_cost_tracking IdentityTag#is_cost_tracking}.

---

##### `is_retired`<sup>Optional</sup> <a name="is_retired" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.isRetired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#is_retired IdentityTag#is_retired}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeouts">IdentityTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#timeouts IdentityTag#timeouts}

---

##### `validator`<sup>Optional</sup> <a name="validator" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.Initializer.parameter.validator"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidator">IdentityTagValidator</a>

validator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#validator IdentityTag#validator}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.putValidator">put_validator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.resetIsCostTracking">reset_is_cost_tracking</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.resetIsRetired">reset_is_retired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.resetValidator">reset_validator</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#create IdentityTag#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#delete IdentityTag#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#update IdentityTag#update}.

---

##### `put_validator` <a name="put_validator" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.putValidator"></a>

```python
def put_validator(
  validator_type: str,
  values: typing.List[str]
) -> None
```

###### `validator_type`<sup>Required</sup> <a name="validator_type" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.putValidator.parameter.validatorType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#validator_type IdentityTag#validator_type}.

---

###### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.putValidator.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#values IdentityTag#values}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_cost_tracking` <a name="reset_is_cost_tracking" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.resetIsCostTracking"></a>

```python
def reset_is_cost_tracking() -> None
```

##### `reset_is_retired` <a name="reset_is_retired" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.resetIsRetired"></a>

```python
def reset_is_retired() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_validator` <a name="reset_validator" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.resetValidator"></a>

```python
def reset_validator() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityTag resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_tag

identityTag.IdentityTag.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_tag

identityTag.IdentityTag.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_tag

identityTag.IdentityTag.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_tag

identityTag.IdentityTag.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityTag to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference">IdentityTagTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.validator">validator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference">IdentityTagValidatorOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.isCostTrackingInput">is_cost_tracking_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.isRetiredInput">is_retired_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.tagNamespaceIdInput">tag_namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeouts">IdentityTagTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.validatorInput">validator_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidator">IdentityTagValidator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.isCostTracking">is_cost_tracking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.isRetired">is_retired</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.tagNamespaceId">tag_namespace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.timeouts"></a>

```python
timeouts: IdentityTagTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference">IdentityTagTimeoutsOutputReference</a>

---

##### `validator`<sup>Required</sup> <a name="validator" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.validator"></a>

```python
validator: IdentityTagValidatorOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference">IdentityTagValidatorOutputReference</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_cost_tracking_input`<sup>Optional</sup> <a name="is_cost_tracking_input" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.isCostTrackingInput"></a>

```python
is_cost_tracking_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_retired_input`<sup>Optional</sup> <a name="is_retired_input" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.isRetiredInput"></a>

```python
is_retired_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tag_namespace_id_input`<sup>Optional</sup> <a name="tag_namespace_id_input" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.tagNamespaceIdInput"></a>

```python
tag_namespace_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityTagTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeouts">IdentityTagTimeouts</a>]

---

##### `validator_input`<sup>Optional</sup> <a name="validator_input" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.validatorInput"></a>

```python
validator_input: IdentityTagValidator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidator">IdentityTagValidator</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_cost_tracking`<sup>Required</sup> <a name="is_cost_tracking" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.isCostTracking"></a>

```python
is_cost_tracking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_retired`<sup>Required</sup> <a name="is_retired" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.isRetired"></a>

```python
is_retired: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tag_namespace_id`<sup>Required</sup> <a name="tag_namespace_id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.tagNamespaceId"></a>

```python
tag_namespace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTag.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityTagConfig <a name="IdentityTagConfig" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_tag

identityTag.IdentityTagConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  name: str,
  tag_namespace_id: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_cost_tracking: typing.Union[bool, IResolvable] = None,
  is_retired: typing.Union[bool, IResolvable] = None,
  timeouts: IdentityTagTimeouts = None,
  validator: IdentityTagValidator = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#description IdentityTag#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#name IdentityTag#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.tagNamespaceId">tag_namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#tag_namespace_id IdentityTag#tag_namespace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#defined_tags IdentityTag#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#freeform_tags IdentityTag#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#id IdentityTag#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.isCostTracking">is_cost_tracking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#is_cost_tracking IdentityTag#is_cost_tracking}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.isRetired">is_retired</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#is_retired IdentityTag#is_retired}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeouts">IdentityTagTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.validator">validator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidator">IdentityTagValidator</a></code> | validator block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#description IdentityTag#description}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#name IdentityTag#name}.

---

##### `tag_namespace_id`<sup>Required</sup> <a name="tag_namespace_id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.tagNamespaceId"></a>

```python
tag_namespace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#tag_namespace_id IdentityTag#tag_namespace_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#defined_tags IdentityTag#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#freeform_tags IdentityTag#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#id IdentityTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_cost_tracking`<sup>Optional</sup> <a name="is_cost_tracking" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.isCostTracking"></a>

```python
is_cost_tracking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#is_cost_tracking IdentityTag#is_cost_tracking}.

---

##### `is_retired`<sup>Optional</sup> <a name="is_retired" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.isRetired"></a>

```python
is_retired: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#is_retired IdentityTag#is_retired}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.timeouts"></a>

```python
timeouts: IdentityTagTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeouts">IdentityTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#timeouts IdentityTag#timeouts}

---

##### `validator`<sup>Optional</sup> <a name="validator" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagConfig.property.validator"></a>

```python
validator: IdentityTagValidator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidator">IdentityTagValidator</a>

validator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#validator IdentityTag#validator}

---

### IdentityTagTimeouts <a name="IdentityTagTimeouts" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_tag

identityTag.IdentityTagTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#create IdentityTag#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#delete IdentityTag#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#update IdentityTag#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#create IdentityTag#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#delete IdentityTag#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#update IdentityTag#update}.

---

### IdentityTagValidator <a name="IdentityTagValidator" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidator.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_tag

identityTag.IdentityTagValidator(
  validator_type: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidator.property.validatorType">validator_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#validator_type IdentityTag#validator_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidator.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#values IdentityTag#values}. |

---

##### `validator_type`<sup>Required</sup> <a name="validator_type" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidator.property.validatorType"></a>

```python
validator_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#validator_type IdentityTag#validator_type}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidator.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_tag#values IdentityTag#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityTagTimeoutsOutputReference <a name="IdentityTagTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_tag

identityTag.IdentityTagTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeouts">IdentityTagTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityTagTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagTimeouts">IdentityTagTimeouts</a>]

---


### IdentityTagValidatorOutputReference <a name="IdentityTagValidatorOutputReference" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_tag

identityTag.IdentityTagValidatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.property.validatorTypeInput">validator_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.property.validatorType">validator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidator">IdentityTagValidator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `validator_type_input`<sup>Optional</sup> <a name="validator_type_input" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.property.validatorTypeInput"></a>

```python
validator_type_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `validator_type`<sup>Required</sup> <a name="validator_type" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.property.validatorType"></a>

```python
validator_type: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidatorOutputReference.property.internalValue"></a>

```python
internal_value: IdentityTagValidator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityTag.IdentityTagValidator">IdentityTagValidator</a>

---


