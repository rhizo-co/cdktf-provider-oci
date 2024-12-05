# `cloudGuardAdhocQuery` Submodule <a name="`cloudGuardAdhocQuery` Submodule" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGuardAdhocQuery <a name="CloudGuardAdhocQuery" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query oci_cloud_guard_adhoc_query}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_adhoc_query

cloudGuardAdhocQuery.CloudGuardAdhocQuery(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  adhoc_query_details: CloudGuardAdhocQueryAdhocQueryDetails,
  compartment_id: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: CloudGuardAdhocQueryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.adhocQueryDetails">adhoc_query_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetails">CloudGuardAdhocQueryAdhocQueryDetails</a></code> | adhoc_query_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#compartment_id CloudGuardAdhocQuery#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#defined_tags CloudGuardAdhocQuery#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#freeform_tags CloudGuardAdhocQuery#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#id CloudGuardAdhocQuery#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts">CloudGuardAdhocQueryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `adhoc_query_details`<sup>Required</sup> <a name="adhoc_query_details" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.adhocQueryDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetails">CloudGuardAdhocQueryAdhocQueryDetails</a>

adhoc_query_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#adhoc_query_details CloudGuardAdhocQuery#adhoc_query_details}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#compartment_id CloudGuardAdhocQuery#compartment_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#defined_tags CloudGuardAdhocQuery#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#freeform_tags CloudGuardAdhocQuery#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#id CloudGuardAdhocQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts">CloudGuardAdhocQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#timeouts CloudGuardAdhocQuery#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.putAdhocQueryDetails">put_adhoc_query_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_adhoc_query_details` <a name="put_adhoc_query_details" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.putAdhocQueryDetails"></a>

```python
def put_adhoc_query_details(
  adhoc_query_resources: typing.Union[IResolvable, typing.List[CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources]],
  query: str
) -> None
```

###### `adhoc_query_resources`<sup>Required</sup> <a name="adhoc_query_resources" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.putAdhocQueryDetails.parameter.adhocQueryResources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources">CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources</a>]]

adhoc_query_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#adhoc_query_resources CloudGuardAdhocQuery#adhoc_query_resources}

---

###### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.putAdhocQueryDetails.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#query CloudGuardAdhocQuery#query}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#create CloudGuardAdhocQuery#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#delete CloudGuardAdhocQuery#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#update CloudGuardAdhocQuery#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudGuardAdhocQuery resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_adhoc_query

cloudGuardAdhocQuery.CloudGuardAdhocQuery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_adhoc_query

cloudGuardAdhocQuery.CloudGuardAdhocQuery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_adhoc_query

cloudGuardAdhocQuery.CloudGuardAdhocQuery.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_adhoc_query

cloudGuardAdhocQuery.CloudGuardAdhocQuery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudGuardAdhocQuery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudGuardAdhocQuery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudGuardAdhocQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudGuardAdhocQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.adhocQueryDetails">adhoc_query_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference">CloudGuardAdhocQueryAdhocQueryDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.adhocQueryRegionalDetails">adhoc_query_regional_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList">CloudGuardAdhocQueryAdhocQueryRegionalDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference">CloudGuardAdhocQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.adhocQueryDetailsInput">adhoc_query_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetails">CloudGuardAdhocQueryAdhocQueryDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts">CloudGuardAdhocQueryTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `adhoc_query_details`<sup>Required</sup> <a name="adhoc_query_details" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.adhocQueryDetails"></a>

```python
adhoc_query_details: CloudGuardAdhocQueryAdhocQueryDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference">CloudGuardAdhocQueryAdhocQueryDetailsOutputReference</a>

---

##### `adhoc_query_regional_details`<sup>Required</sup> <a name="adhoc_query_regional_details" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.adhocQueryRegionalDetails"></a>

```python
adhoc_query_regional_details: CloudGuardAdhocQueryAdhocQueryRegionalDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList">CloudGuardAdhocQueryAdhocQueryRegionalDetailsList</a>

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.timeouts"></a>

```python
timeouts: CloudGuardAdhocQueryTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference">CloudGuardAdhocQueryTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `adhoc_query_details_input`<sup>Optional</sup> <a name="adhoc_query_details_input" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.adhocQueryDetailsInput"></a>

```python
adhoc_query_details_input: CloudGuardAdhocQueryAdhocQueryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetails">CloudGuardAdhocQueryAdhocQueryDetails</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CloudGuardAdhocQueryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts">CloudGuardAdhocQueryTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQuery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGuardAdhocQueryAdhocQueryDetails <a name="CloudGuardAdhocQueryAdhocQueryDetails" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_adhoc_query

cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetails(
  adhoc_query_resources: typing.Union[IResolvable, typing.List[CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources]],
  query: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetails.property.adhocQueryResources">adhoc_query_resources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources">CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources</a>]]</code> | adhoc_query_resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetails.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#query CloudGuardAdhocQuery#query}. |

---

##### `adhoc_query_resources`<sup>Required</sup> <a name="adhoc_query_resources" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetails.property.adhocQueryResources"></a>

```python
adhoc_query_resources: typing.Union[IResolvable, typing.List[CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources">CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources</a>]]

adhoc_query_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#adhoc_query_resources CloudGuardAdhocQuery#adhoc_query_resources}

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetails.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#query CloudGuardAdhocQuery#query}.

---

### CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources <a name="CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_adhoc_query

cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources(
  region: str = None,
  resource_ids: typing.List[str] = None,
  resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#region CloudGuardAdhocQuery#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources.property.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#resource_ids CloudGuardAdhocQuery#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#resource_type CloudGuardAdhocQuery#resource_type}. |

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#region CloudGuardAdhocQuery#region}.

---

##### `resource_ids`<sup>Optional</sup> <a name="resource_ids" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources.property.resourceIds"></a>

```python
resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#resource_ids CloudGuardAdhocQuery#resource_ids}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#resource_type CloudGuardAdhocQuery#resource_type}.

---

### CloudGuardAdhocQueryAdhocQueryRegionalDetails <a name="CloudGuardAdhocQueryAdhocQueryRegionalDetails" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_adhoc_query

cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetails()
```


### CloudGuardAdhocQueryConfig <a name="CloudGuardAdhocQueryConfig" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_adhoc_query

cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  adhoc_query_details: CloudGuardAdhocQueryAdhocQueryDetails,
  compartment_id: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: CloudGuardAdhocQueryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.adhocQueryDetails">adhoc_query_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetails">CloudGuardAdhocQueryAdhocQueryDetails</a></code> | adhoc_query_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#compartment_id CloudGuardAdhocQuery#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#defined_tags CloudGuardAdhocQuery#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#freeform_tags CloudGuardAdhocQuery#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#id CloudGuardAdhocQuery#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts">CloudGuardAdhocQueryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `adhoc_query_details`<sup>Required</sup> <a name="adhoc_query_details" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.adhocQueryDetails"></a>

```python
adhoc_query_details: CloudGuardAdhocQueryAdhocQueryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetails">CloudGuardAdhocQueryAdhocQueryDetails</a>

adhoc_query_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#adhoc_query_details CloudGuardAdhocQuery#adhoc_query_details}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#compartment_id CloudGuardAdhocQuery#compartment_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#defined_tags CloudGuardAdhocQuery#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#freeform_tags CloudGuardAdhocQuery#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#id CloudGuardAdhocQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryConfig.property.timeouts"></a>

```python
timeouts: CloudGuardAdhocQueryTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts">CloudGuardAdhocQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#timeouts CloudGuardAdhocQuery#timeouts}

---

### CloudGuardAdhocQueryTimeouts <a name="CloudGuardAdhocQueryTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_adhoc_query

cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#create CloudGuardAdhocQuery#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#delete CloudGuardAdhocQuery#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#update CloudGuardAdhocQuery#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#create CloudGuardAdhocQuery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#delete CloudGuardAdhocQuery#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_adhoc_query#update CloudGuardAdhocQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList <a name="CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_adhoc_query

cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources">CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources">CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources</a>]]

---


### CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference <a name="CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_adhoc_query

cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.resetResourceIds">reset_resource_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.resetResourceType">reset_resource_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_region` <a name="reset_region" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_resource_ids` <a name="reset_resource_ids" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.resetResourceIds"></a>

```python
def reset_resource_ids() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.resetResourceType"></a>

```python
def reset_resource_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceIdsInput">resource_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources">CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_ids_input`<sup>Optional</sup> <a name="resource_ids_input" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceIdsInput"></a>

```python
resource_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceIds"></a>

```python
resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources">CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources</a>]

---


### CloudGuardAdhocQueryAdhocQueryDetailsOutputReference <a name="CloudGuardAdhocQueryAdhocQueryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_adhoc_query

cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.putAdhocQueryResources">put_adhoc_query_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_adhoc_query_resources` <a name="put_adhoc_query_resources" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.putAdhocQueryResources"></a>

```python
def put_adhoc_query_resources(
  value: typing.Union[IResolvable, typing.List[CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.putAdhocQueryResources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources">CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.adhocQueryResources">adhoc_query_resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList">CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.adhocQueryResourcesInput">adhoc_query_resources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources">CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetails">CloudGuardAdhocQueryAdhocQueryDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `adhoc_query_resources`<sup>Required</sup> <a name="adhoc_query_resources" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.adhocQueryResources"></a>

```python
adhoc_query_resources: CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList">CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList</a>

---

##### `adhoc_query_resources_input`<sup>Optional</sup> <a name="adhoc_query_resources_input" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.adhocQueryResourcesInput"></a>

```python
adhoc_query_resources_input: typing.Union[IResolvable, typing.List[CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources">CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources</a>]]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CloudGuardAdhocQueryAdhocQueryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryDetails">CloudGuardAdhocQueryAdhocQueryDetails</a>

---


### CloudGuardAdhocQueryAdhocQueryRegionalDetailsList <a name="CloudGuardAdhocQueryAdhocQueryRegionalDetailsList" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_adhoc_query

cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference <a name="CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_adhoc_query

cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.expectedCount">expected_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.expiredCount">expired_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.failedCount">failed_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.regionalError">regional_error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.regionalStatus">regional_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.succeededCount">succeeded_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetails">CloudGuardAdhocQueryAdhocQueryRegionalDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expected_count`<sup>Required</sup> <a name="expected_count" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.expectedCount"></a>

```python
expected_count: str
```

- *Type:* str

---

##### `expired_count`<sup>Required</sup> <a name="expired_count" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.expiredCount"></a>

```python
expired_count: str
```

- *Type:* str

---

##### `failed_count`<sup>Required</sup> <a name="failed_count" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.failedCount"></a>

```python
failed_count: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `regional_error`<sup>Required</sup> <a name="regional_error" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.regionalError"></a>

```python
regional_error: str
```

- *Type:* str

---

##### `regional_status`<sup>Required</sup> <a name="regional_status" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.regionalStatus"></a>

```python
regional_status: str
```

- *Type:* str

---

##### `succeeded_count`<sup>Required</sup> <a name="succeeded_count" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.succeededCount"></a>

```python
succeeded_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CloudGuardAdhocQueryAdhocQueryRegionalDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryAdhocQueryRegionalDetails">CloudGuardAdhocQueryAdhocQueryRegionalDetails</a>

---


### CloudGuardAdhocQueryTimeoutsOutputReference <a name="CloudGuardAdhocQueryTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_guard_adhoc_query

cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts">CloudGuardAdhocQueryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudGuardAdhocQueryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudGuardAdhocQuery.CloudGuardAdhocQueryTimeouts">CloudGuardAdhocQueryTimeouts</a>]

---



