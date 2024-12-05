# `objectstorageObjectLifecyclePolicy` Submodule <a name="`objectstorageObjectLifecyclePolicy` Submodule" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageObjectLifecyclePolicy <a name="ObjectstorageObjectLifecyclePolicy" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy oci_objectstorage_object_lifecycle_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object_lifecycle_policy

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  namespace: str,
  id: str = None,
  rules: typing.Union[IResolvable, typing.List[ObjectstorageObjectLifecyclePolicyRules]] = None,
  timeouts: ObjectstorageObjectLifecyclePolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#bucket ObjectstorageObjectLifecyclePolicy#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#namespace ObjectstorageObjectLifecyclePolicy#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#id ObjectstorageObjectLifecyclePolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>]]</code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#bucket ObjectstorageObjectLifecyclePolicy#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#namespace ObjectstorageObjectLifecyclePolicy#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#id ObjectstorageObjectLifecyclePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#rules ObjectstorageObjectLifecyclePolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#timeouts ObjectstorageObjectLifecyclePolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[ObjectstorageObjectLifecyclePolicyRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#create ObjectstorageObjectLifecyclePolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#delete ObjectstorageObjectLifecyclePolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#update ObjectstorageObjectLifecyclePolicy#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rules` <a name="reset_rules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ObjectstorageObjectLifecyclePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object_lifecycle_policy

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object_lifecycle_policy

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object_lifecycle_policy

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object_lifecycle_policy

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ObjectstorageObjectLifecyclePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ObjectstorageObjectLifecyclePolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ObjectstorageObjectLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageObjectLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList">ObjectstorageObjectLifecyclePolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference">ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.rules"></a>

```python
rules: ObjectstorageObjectLifecyclePolicyRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList">ObjectstorageObjectLifecyclePolicyRulesList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeouts"></a>

```python
timeouts: ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference">ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[ObjectstorageObjectLifecyclePolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ObjectstorageObjectLifecyclePolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageObjectLifecyclePolicyConfig <a name="ObjectstorageObjectLifecyclePolicyConfig" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object_lifecycle_policy

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  namespace: str,
  id: str = None,
  rules: typing.Union[IResolvable, typing.List[ObjectstorageObjectLifecyclePolicyRules]] = None,
  timeouts: ObjectstorageObjectLifecyclePolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#bucket ObjectstorageObjectLifecyclePolicy#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#namespace ObjectstorageObjectLifecyclePolicy#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#id ObjectstorageObjectLifecyclePolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>]]</code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#bucket ObjectstorageObjectLifecyclePolicy#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#namespace ObjectstorageObjectLifecyclePolicy#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#id ObjectstorageObjectLifecyclePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[ObjectstorageObjectLifecyclePolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#rules ObjectstorageObjectLifecyclePolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyConfig.property.timeouts"></a>

```python
timeouts: ObjectstorageObjectLifecyclePolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#timeouts ObjectstorageObjectLifecyclePolicy#timeouts}

---

### ObjectstorageObjectLifecyclePolicyRules <a name="ObjectstorageObjectLifecyclePolicyRules" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object_lifecycle_policy

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules(
  action: str,
  is_enabled: typing.Union[bool, IResolvable],
  name: str,
  time_amount: str,
  time_unit: str,
  object_name_filter: ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter = None,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#action ObjectstorageObjectLifecyclePolicy#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#is_enabled ObjectstorageObjectLifecyclePolicy#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#name ObjectstorageObjectLifecyclePolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.timeAmount">time_amount</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#time_amount ObjectstorageObjectLifecyclePolicy#time_amount}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.timeUnit">time_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#time_unit ObjectstorageObjectLifecyclePolicy#time_unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.objectNameFilter">object_name_filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a></code> | object_name_filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#target ObjectstorageObjectLifecyclePolicy#target}. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#action ObjectstorageObjectLifecyclePolicy#action}.

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#is_enabled ObjectstorageObjectLifecyclePolicy#is_enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#name ObjectstorageObjectLifecyclePolicy#name}.

---

##### `time_amount`<sup>Required</sup> <a name="time_amount" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.timeAmount"></a>

```python
time_amount: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#time_amount ObjectstorageObjectLifecyclePolicy#time_amount}.

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#time_unit ObjectstorageObjectLifecyclePolicy#time_unit}.

---

##### `object_name_filter`<sup>Optional</sup> <a name="object_name_filter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.objectNameFilter"></a>

```python
object_name_filter: ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

object_name_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#object_name_filter ObjectstorageObjectLifecyclePolicy#object_name_filter}

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#target ObjectstorageObjectLifecyclePolicy#target}.

---

### ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter <a name="ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object_lifecycle_policy

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter(
  exclusion_patterns: typing.List[str] = None,
  inclusion_patterns: typing.List[str] = None,
  inclusion_prefixes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.exclusionPatterns">exclusion_patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#exclusion_patterns ObjectstorageObjectLifecyclePolicy#exclusion_patterns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.inclusionPatterns">inclusion_patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_patterns ObjectstorageObjectLifecyclePolicy#inclusion_patterns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.inclusionPrefixes">inclusion_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_prefixes ObjectstorageObjectLifecyclePolicy#inclusion_prefixes}. |

---

##### `exclusion_patterns`<sup>Optional</sup> <a name="exclusion_patterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.exclusionPatterns"></a>

```python
exclusion_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#exclusion_patterns ObjectstorageObjectLifecyclePolicy#exclusion_patterns}.

---

##### `inclusion_patterns`<sup>Optional</sup> <a name="inclusion_patterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.inclusionPatterns"></a>

```python
inclusion_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_patterns ObjectstorageObjectLifecyclePolicy#inclusion_patterns}.

---

##### `inclusion_prefixes`<sup>Optional</sup> <a name="inclusion_prefixes" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.property.inclusionPrefixes"></a>

```python
inclusion_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_prefixes ObjectstorageObjectLifecyclePolicy#inclusion_prefixes}.

---

### ObjectstorageObjectLifecyclePolicyTimeouts <a name="ObjectstorageObjectLifecyclePolicyTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object_lifecycle_policy

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#create ObjectstorageObjectLifecyclePolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#delete ObjectstorageObjectLifecyclePolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#update ObjectstorageObjectLifecyclePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#create ObjectstorageObjectLifecyclePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#delete ObjectstorageObjectLifecyclePolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#update ObjectstorageObjectLifecyclePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstorageObjectLifecyclePolicyRulesList <a name="ObjectstorageObjectLifecyclePolicyRulesList" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object_lifecycle_policy

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ObjectstorageObjectLifecyclePolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ObjectstorageObjectLifecyclePolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>]]

---


### ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference <a name="ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object_lifecycle_policy

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetExclusionPatterns">reset_exclusion_patterns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetInclusionPatterns">reset_inclusion_patterns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetInclusionPrefixes">reset_inclusion_prefixes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclusion_patterns` <a name="reset_exclusion_patterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetExclusionPatterns"></a>

```python
def reset_exclusion_patterns() -> None
```

##### `reset_inclusion_patterns` <a name="reset_inclusion_patterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetInclusionPatterns"></a>

```python
def reset_inclusion_patterns() -> None
```

##### `reset_inclusion_prefixes` <a name="reset_inclusion_prefixes" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resetInclusionPrefixes"></a>

```python
def reset_inclusion_prefixes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatternsInput">exclusion_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatternsInput">inclusion_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixesInput">inclusion_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatterns">exclusion_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatterns">inclusion_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixes">inclusion_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusion_patterns_input`<sup>Optional</sup> <a name="exclusion_patterns_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatternsInput"></a>

```python
exclusion_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inclusion_patterns_input`<sup>Optional</sup> <a name="inclusion_patterns_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatternsInput"></a>

```python
inclusion_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inclusion_prefixes_input`<sup>Optional</sup> <a name="inclusion_prefixes_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixesInput"></a>

```python
inclusion_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclusion_patterns`<sup>Required</sup> <a name="exclusion_patterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatterns"></a>

```python
exclusion_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inclusion_patterns`<sup>Required</sup> <a name="inclusion_patterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatterns"></a>

```python
inclusion_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inclusion_prefixes`<sup>Required</sup> <a name="inclusion_prefixes" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixes"></a>

```python
inclusion_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.internalValue"></a>

```python
internal_value: ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

---


### ObjectstorageObjectLifecyclePolicyRulesOutputReference <a name="ObjectstorageObjectLifecyclePolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object_lifecycle_policy

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.putObjectNameFilter">put_object_name_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resetObjectNameFilter">reset_object_name_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_object_name_filter` <a name="put_object_name_filter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.putObjectNameFilter"></a>

```python
def put_object_name_filter(
  exclusion_patterns: typing.List[str] = None,
  inclusion_patterns: typing.List[str] = None,
  inclusion_prefixes: typing.List[str] = None
) -> None
```

###### `exclusion_patterns`<sup>Optional</sup> <a name="exclusion_patterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.putObjectNameFilter.parameter.exclusionPatterns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#exclusion_patterns ObjectstorageObjectLifecyclePolicy#exclusion_patterns}.

---

###### `inclusion_patterns`<sup>Optional</sup> <a name="inclusion_patterns" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.putObjectNameFilter.parameter.inclusionPatterns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_patterns ObjectstorageObjectLifecyclePolicy#inclusion_patterns}.

---

###### `inclusion_prefixes`<sup>Optional</sup> <a name="inclusion_prefixes" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.putObjectNameFilter.parameter.inclusionPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_prefixes ObjectstorageObjectLifecyclePolicy#inclusion_prefixes}.

---

##### `reset_object_name_filter` <a name="reset_object_name_filter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resetObjectNameFilter"></a>

```python
def reset_object_name_filter() -> None
```

##### `reset_target` <a name="reset_target" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilter">object_name_filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilterInput">object_name_filter_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmountInput">time_amount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnitInput">time_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmount">time_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnit">time_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_name_filter`<sup>Required</sup> <a name="object_name_filter" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilter"></a>

```python
object_name_filter: ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `object_name_filter_input`<sup>Optional</sup> <a name="object_name_filter_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilterInput"></a>

```python
object_name_filter_input: ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `time_amount_input`<sup>Optional</sup> <a name="time_amount_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmountInput"></a>

```python
time_amount_input: str
```

- *Type:* str

---

##### `time_unit_input`<sup>Optional</sup> <a name="time_unit_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnitInput"></a>

```python
time_unit_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `time_amount`<sup>Required</sup> <a name="time_amount" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmount"></a>

```python
time_amount: str
```

- *Type:* str

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ObjectstorageObjectLifecyclePolicyRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyRules">ObjectstorageObjectLifecyclePolicyRules</a>]

---


### ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference <a name="ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object_lifecycle_policy

objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ObjectstorageObjectLifecyclePolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstorageObjectLifecyclePolicy.ObjectstorageObjectLifecyclePolicyTimeouts">ObjectstorageObjectLifecyclePolicyTimeouts</a>]

---



