# `generativeAiModel` Submodule <a name="`generativeAiModel` Submodule" id="rhizo-co-terraform-provider-oci.generativeAiModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenerativeAiModel <a name="GenerativeAiModel" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model oci_generative_ai_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_model_id: str,
  compartment_id: str,
  fine_tune_details: GenerativeAiModelFineTuneDetails,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: GenerativeAiModelTimeouts = None,
  vendor: str = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.baseModelId">base_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#base_model_id GenerativeAiModel#base_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#compartment_id GenerativeAiModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.fineTuneDetails">fine_tune_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a></code> | fine_tune_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#defined_tags GenerativeAiModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#description GenerativeAiModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#display_name GenerativeAiModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#freeform_tags GenerativeAiModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#id GenerativeAiModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.vendor">vendor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#vendor GenerativeAiModel#vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#version GenerativeAiModel#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_model_id`<sup>Required</sup> <a name="base_model_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.baseModelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#base_model_id GenerativeAiModel#base_model_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#compartment_id GenerativeAiModel#compartment_id}.

---

##### `fine_tune_details`<sup>Required</sup> <a name="fine_tune_details" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.fineTuneDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a>

fine_tune_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#fine_tune_details GenerativeAiModel#fine_tune_details}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#defined_tags GenerativeAiModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#description GenerativeAiModel#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#display_name GenerativeAiModel#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#freeform_tags GenerativeAiModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#id GenerativeAiModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#timeouts GenerativeAiModel#timeouts}

---

##### `vendor`<sup>Optional</sup> <a name="vendor" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.vendor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#vendor GenerativeAiModel#vendor}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#version GenerativeAiModel#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putFineTuneDetails">put_fine_tune_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetVendor">reset_vendor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_fine_tune_details` <a name="put_fine_tune_details" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putFineTuneDetails"></a>

```python
def put_fine_tune_details(
  dedicated_ai_cluster_id: str,
  training_dataset: GenerativeAiModelFineTuneDetailsTrainingDataset,
  training_config: GenerativeAiModelFineTuneDetailsTrainingConfig = None
) -> None
```

###### `dedicated_ai_cluster_id`<sup>Required</sup> <a name="dedicated_ai_cluster_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putFineTuneDetails.parameter.dedicatedAiClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dedicated_ai_cluster_id GenerativeAiModel#dedicated_ai_cluster_id}.

---

###### `training_dataset`<sup>Required</sup> <a name="training_dataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putFineTuneDetails.parameter.trainingDataset"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a>

training_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_dataset GenerativeAiModel#training_dataset}

---

###### `training_config`<sup>Optional</sup> <a name="training_config" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putFineTuneDetails.parameter.trainingConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a>

training_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_config GenerativeAiModel#training_config}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#create GenerativeAiModel#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#delete GenerativeAiModel#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#update GenerativeAiModel#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vendor` <a name="reset_vendor" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetVendor"></a>

```python
def reset_vendor() -> None
```

##### `reset_version` <a name="reset_version" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GenerativeAiModel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GenerativeAiModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GenerativeAiModel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GenerativeAiModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenerativeAiModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fineTuneDetails">fine_tune_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference">GenerativeAiModelFineTuneDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.isLongTermSupported">is_long_term_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.modelMetrics">model_metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList">GenerativeAiModelModelMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeDeprecated">time_deprecated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference">GenerativeAiModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.baseModelIdInput">base_model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fineTuneDetailsInput">fine_tune_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.vendorInput">vendor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.baseModelId">base_model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.vendor">vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fine_tune_details`<sup>Required</sup> <a name="fine_tune_details" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fineTuneDetails"></a>

```python
fine_tune_details: GenerativeAiModelFineTuneDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference">GenerativeAiModelFineTuneDetailsOutputReference</a>

---

##### `is_long_term_supported`<sup>Required</sup> <a name="is_long_term_supported" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.isLongTermSupported"></a>

```python
is_long_term_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `model_metrics`<sup>Required</sup> <a name="model_metrics" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.modelMetrics"></a>

```python
model_metrics: GenerativeAiModelModelMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList">GenerativeAiModelModelMetricsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_deprecated`<sup>Required</sup> <a name="time_deprecated" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeDeprecated"></a>

```python
time_deprecated: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeouts"></a>

```python
timeouts: GenerativeAiModelTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference">GenerativeAiModelTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `base_model_id_input`<sup>Optional</sup> <a name="base_model_id_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.baseModelIdInput"></a>

```python
base_model_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `fine_tune_details_input`<sup>Optional</sup> <a name="fine_tune_details_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.fineTuneDetailsInput"></a>

```python
fine_tune_details_input: GenerativeAiModelFineTuneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a>

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GenerativeAiModelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a>]

---

##### `vendor_input`<sup>Optional</sup> <a name="vendor_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.vendorInput"></a>

```python
vendor_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `base_model_id`<sup>Required</sup> <a name="base_model_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.baseModelId"></a>

```python
base_model_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GenerativeAiModelConfig <a name="GenerativeAiModelConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_model_id: str,
  compartment_id: str,
  fine_tune_details: GenerativeAiModelFineTuneDetails,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: GenerativeAiModelTimeouts = None,
  vendor: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.baseModelId">base_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#base_model_id GenerativeAiModel#base_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#compartment_id GenerativeAiModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.fineTuneDetails">fine_tune_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a></code> | fine_tune_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#defined_tags GenerativeAiModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#description GenerativeAiModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#display_name GenerativeAiModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#freeform_tags GenerativeAiModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#id GenerativeAiModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.vendor">vendor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#vendor GenerativeAiModel#vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#version GenerativeAiModel#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_model_id`<sup>Required</sup> <a name="base_model_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.baseModelId"></a>

```python
base_model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#base_model_id GenerativeAiModel#base_model_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#compartment_id GenerativeAiModel#compartment_id}.

---

##### `fine_tune_details`<sup>Required</sup> <a name="fine_tune_details" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.fineTuneDetails"></a>

```python
fine_tune_details: GenerativeAiModelFineTuneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a>

fine_tune_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#fine_tune_details GenerativeAiModel#fine_tune_details}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#defined_tags GenerativeAiModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#description GenerativeAiModel#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#display_name GenerativeAiModel#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#freeform_tags GenerativeAiModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#id GenerativeAiModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.timeouts"></a>

```python
timeouts: GenerativeAiModelTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#timeouts GenerativeAiModel#timeouts}

---

##### `vendor`<sup>Optional</sup> <a name="vendor" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#vendor GenerativeAiModel#vendor}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#version GenerativeAiModel#version}.

---

### GenerativeAiModelFineTuneDetails <a name="GenerativeAiModelFineTuneDetails" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModelFineTuneDetails(
  dedicated_ai_cluster_id: str,
  training_dataset: GenerativeAiModelFineTuneDetailsTrainingDataset,
  training_config: GenerativeAiModelFineTuneDetailsTrainingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.dedicatedAiClusterId">dedicated_ai_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dedicated_ai_cluster_id GenerativeAiModel#dedicated_ai_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.trainingDataset">training_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a></code> | training_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.trainingConfig">training_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a></code> | training_config block. |

---

##### `dedicated_ai_cluster_id`<sup>Required</sup> <a name="dedicated_ai_cluster_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.dedicatedAiClusterId"></a>

```python
dedicated_ai_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dedicated_ai_cluster_id GenerativeAiModel#dedicated_ai_cluster_id}.

---

##### `training_dataset`<sup>Required</sup> <a name="training_dataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.trainingDataset"></a>

```python
training_dataset: GenerativeAiModelFineTuneDetailsTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a>

training_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_dataset GenerativeAiModel#training_dataset}

---

##### `training_config`<sup>Optional</sup> <a name="training_config" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails.property.trainingConfig"></a>

```python
training_config: GenerativeAiModelFineTuneDetailsTrainingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a>

training_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_config GenerativeAiModel#training_config}

---

### GenerativeAiModelFineTuneDetailsTrainingConfig <a name="GenerativeAiModelFineTuneDetailsTrainingConfig" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig(
  training_config_type: str,
  early_stopping_patience: typing.Union[int, float] = None,
  early_stopping_threshold: typing.Union[int, float] = None,
  learning_rate: typing.Union[int, float] = None,
  log_model_metrics_interval_in_steps: typing.Union[int, float] = None,
  lora_alpha: typing.Union[int, float] = None,
  lora_dropout: typing.Union[int, float] = None,
  lora_r: typing.Union[int, float] = None,
  num_of_last_layers: typing.Union[int, float] = None,
  total_training_epochs: typing.Union[int, float] = None,
  training_batch_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.trainingConfigType">training_config_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_config_type GenerativeAiModel#training_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.earlyStoppingPatience">early_stopping_patience</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_patience GenerativeAiModel#early_stopping_patience}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.earlyStoppingThreshold">early_stopping_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_threshold GenerativeAiModel#early_stopping_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.learningRate">learning_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#learning_rate GenerativeAiModel#learning_rate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.logModelMetricsIntervalInSteps">log_model_metrics_interval_in_steps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#log_model_metrics_interval_in_steps GenerativeAiModel#log_model_metrics_interval_in_steps}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraAlpha">lora_alpha</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_alpha GenerativeAiModel#lora_alpha}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraDropout">lora_dropout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_dropout GenerativeAiModel#lora_dropout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraR">lora_r</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_r GenerativeAiModel#lora_r}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.numOfLastLayers">num_of_last_layers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#num_of_last_layers GenerativeAiModel#num_of_last_layers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.totalTrainingEpochs">total_training_epochs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#total_training_epochs GenerativeAiModel#total_training_epochs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.trainingBatchSize">training_batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_batch_size GenerativeAiModel#training_batch_size}. |

---

##### `training_config_type`<sup>Required</sup> <a name="training_config_type" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.trainingConfigType"></a>

```python
training_config_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_config_type GenerativeAiModel#training_config_type}.

---

##### `early_stopping_patience`<sup>Optional</sup> <a name="early_stopping_patience" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.earlyStoppingPatience"></a>

```python
early_stopping_patience: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_patience GenerativeAiModel#early_stopping_patience}.

---

##### `early_stopping_threshold`<sup>Optional</sup> <a name="early_stopping_threshold" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.earlyStoppingThreshold"></a>

```python
early_stopping_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_threshold GenerativeAiModel#early_stopping_threshold}.

---

##### `learning_rate`<sup>Optional</sup> <a name="learning_rate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.learningRate"></a>

```python
learning_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#learning_rate GenerativeAiModel#learning_rate}.

---

##### `log_model_metrics_interval_in_steps`<sup>Optional</sup> <a name="log_model_metrics_interval_in_steps" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.logModelMetricsIntervalInSteps"></a>

```python
log_model_metrics_interval_in_steps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#log_model_metrics_interval_in_steps GenerativeAiModel#log_model_metrics_interval_in_steps}.

---

##### `lora_alpha`<sup>Optional</sup> <a name="lora_alpha" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraAlpha"></a>

```python
lora_alpha: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_alpha GenerativeAiModel#lora_alpha}.

---

##### `lora_dropout`<sup>Optional</sup> <a name="lora_dropout" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraDropout"></a>

```python
lora_dropout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_dropout GenerativeAiModel#lora_dropout}.

---

##### `lora_r`<sup>Optional</sup> <a name="lora_r" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.loraR"></a>

```python
lora_r: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_r GenerativeAiModel#lora_r}.

---

##### `num_of_last_layers`<sup>Optional</sup> <a name="num_of_last_layers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.numOfLastLayers"></a>

```python
num_of_last_layers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#num_of_last_layers GenerativeAiModel#num_of_last_layers}.

---

##### `total_training_epochs`<sup>Optional</sup> <a name="total_training_epochs" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.totalTrainingEpochs"></a>

```python
total_training_epochs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#total_training_epochs GenerativeAiModel#total_training_epochs}.

---

##### `training_batch_size`<sup>Optional</sup> <a name="training_batch_size" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig.property.trainingBatchSize"></a>

```python
training_batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_batch_size GenerativeAiModel#training_batch_size}.

---

### GenerativeAiModelFineTuneDetailsTrainingDataset <a name="GenerativeAiModelFineTuneDetailsTrainingDataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset(
  bucket: str,
  dataset_type: str,
  namespace: str,
  object: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#bucket GenerativeAiModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.datasetType">dataset_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dataset_type GenerativeAiModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#namespace GenerativeAiModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#object GenerativeAiModel#object}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#bucket GenerativeAiModel#bucket}.

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dataset_type GenerativeAiModel#dataset_type}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#namespace GenerativeAiModel#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#object GenerativeAiModel#object}.

---

### GenerativeAiModelModelMetrics <a name="GenerativeAiModelModelMetrics" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetrics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModelModelMetrics()
```


### GenerativeAiModelTimeouts <a name="GenerativeAiModelTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModelTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#create GenerativeAiModel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#delete GenerativeAiModel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#update GenerativeAiModel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#create GenerativeAiModel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#delete GenerativeAiModel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#update GenerativeAiModel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenerativeAiModelFineTuneDetailsOutputReference <a name="GenerativeAiModelFineTuneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig">put_training_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingDataset">put_training_dataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resetTrainingConfig">reset_training_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_training_config` <a name="put_training_config" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig"></a>

```python
def put_training_config(
  training_config_type: str,
  early_stopping_patience: typing.Union[int, float] = None,
  early_stopping_threshold: typing.Union[int, float] = None,
  learning_rate: typing.Union[int, float] = None,
  log_model_metrics_interval_in_steps: typing.Union[int, float] = None,
  lora_alpha: typing.Union[int, float] = None,
  lora_dropout: typing.Union[int, float] = None,
  lora_r: typing.Union[int, float] = None,
  num_of_last_layers: typing.Union[int, float] = None,
  total_training_epochs: typing.Union[int, float] = None,
  training_batch_size: typing.Union[int, float] = None
) -> None
```

###### `training_config_type`<sup>Required</sup> <a name="training_config_type" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig.parameter.trainingConfigType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_config_type GenerativeAiModel#training_config_type}.

---

###### `early_stopping_patience`<sup>Optional</sup> <a name="early_stopping_patience" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig.parameter.earlyStoppingPatience"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_patience GenerativeAiModel#early_stopping_patience}.

---

###### `early_stopping_threshold`<sup>Optional</sup> <a name="early_stopping_threshold" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig.parameter.earlyStoppingThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#early_stopping_threshold GenerativeAiModel#early_stopping_threshold}.

---

###### `learning_rate`<sup>Optional</sup> <a name="learning_rate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig.parameter.learningRate"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#learning_rate GenerativeAiModel#learning_rate}.

---

###### `log_model_metrics_interval_in_steps`<sup>Optional</sup> <a name="log_model_metrics_interval_in_steps" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig.parameter.logModelMetricsIntervalInSteps"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#log_model_metrics_interval_in_steps GenerativeAiModel#log_model_metrics_interval_in_steps}.

---

###### `lora_alpha`<sup>Optional</sup> <a name="lora_alpha" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig.parameter.loraAlpha"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_alpha GenerativeAiModel#lora_alpha}.

---

###### `lora_dropout`<sup>Optional</sup> <a name="lora_dropout" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig.parameter.loraDropout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_dropout GenerativeAiModel#lora_dropout}.

---

###### `lora_r`<sup>Optional</sup> <a name="lora_r" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig.parameter.loraR"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#lora_r GenerativeAiModel#lora_r}.

---

###### `num_of_last_layers`<sup>Optional</sup> <a name="num_of_last_layers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig.parameter.numOfLastLayers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#num_of_last_layers GenerativeAiModel#num_of_last_layers}.

---

###### `total_training_epochs`<sup>Optional</sup> <a name="total_training_epochs" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig.parameter.totalTrainingEpochs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#total_training_epochs GenerativeAiModel#total_training_epochs}.

---

###### `training_batch_size`<sup>Optional</sup> <a name="training_batch_size" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingConfig.parameter.trainingBatchSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#training_batch_size GenerativeAiModel#training_batch_size}.

---

##### `put_training_dataset` <a name="put_training_dataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingDataset"></a>

```python
def put_training_dataset(
  bucket: str,
  dataset_type: str,
  namespace: str,
  object: str
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingDataset.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#bucket GenerativeAiModel#bucket}.

---

###### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingDataset.parameter.datasetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#dataset_type GenerativeAiModel#dataset_type}.

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingDataset.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#namespace GenerativeAiModel#namespace}.

---

###### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.putTrainingDataset.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_model#object GenerativeAiModel#object}.

---

##### `reset_training_config` <a name="reset_training_config" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.resetTrainingConfig"></a>

```python
def reset_training_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfig">training_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference">GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingDataset">training_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference">GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterIdInput">dedicated_ai_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfigInput">training_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingDatasetInput">training_dataset_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterId">dedicated_ai_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `training_config`<sup>Required</sup> <a name="training_config" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfig"></a>

```python
training_config: GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference">GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference</a>

---

##### `training_dataset`<sup>Required</sup> <a name="training_dataset" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingDataset"></a>

```python
training_dataset: GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference">GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference</a>

---

##### `dedicated_ai_cluster_id_input`<sup>Optional</sup> <a name="dedicated_ai_cluster_id_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterIdInput"></a>

```python
dedicated_ai_cluster_id_input: str
```

- *Type:* str

---

##### `training_config_input`<sup>Optional</sup> <a name="training_config_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfigInput"></a>

```python
training_config_input: GenerativeAiModelFineTuneDetailsTrainingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a>

---

##### `training_dataset_input`<sup>Optional</sup> <a name="training_dataset_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.trainingDatasetInput"></a>

```python
training_dataset_input: GenerativeAiModelFineTuneDetailsTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a>

---

##### `dedicated_ai_cluster_id`<sup>Required</sup> <a name="dedicated_ai_cluster_id" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterId"></a>

```python
dedicated_ai_cluster_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsOutputReference.property.internalValue"></a>

```python
internal_value: GenerativeAiModelFineTuneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetails">GenerativeAiModelFineTuneDetails</a>

---


### GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference <a name="GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetEarlyStoppingPatience">reset_early_stopping_patience</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetEarlyStoppingThreshold">reset_early_stopping_threshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLearningRate">reset_learning_rate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLogModelMetricsIntervalInSteps">reset_log_model_metrics_interval_in_steps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraAlpha">reset_lora_alpha</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraDropout">reset_lora_dropout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraR">reset_lora_r</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetNumOfLastLayers">reset_num_of_last_layers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetTotalTrainingEpochs">reset_total_training_epochs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetTrainingBatchSize">reset_training_batch_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_early_stopping_patience` <a name="reset_early_stopping_patience" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetEarlyStoppingPatience"></a>

```python
def reset_early_stopping_patience() -> None
```

##### `reset_early_stopping_threshold` <a name="reset_early_stopping_threshold" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetEarlyStoppingThreshold"></a>

```python
def reset_early_stopping_threshold() -> None
```

##### `reset_learning_rate` <a name="reset_learning_rate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLearningRate"></a>

```python
def reset_learning_rate() -> None
```

##### `reset_log_model_metrics_interval_in_steps` <a name="reset_log_model_metrics_interval_in_steps" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLogModelMetricsIntervalInSteps"></a>

```python
def reset_log_model_metrics_interval_in_steps() -> None
```

##### `reset_lora_alpha` <a name="reset_lora_alpha" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraAlpha"></a>

```python
def reset_lora_alpha() -> None
```

##### `reset_lora_dropout` <a name="reset_lora_dropout" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraDropout"></a>

```python
def reset_lora_dropout() -> None
```

##### `reset_lora_r` <a name="reset_lora_r" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetLoraR"></a>

```python
def reset_lora_r() -> None
```

##### `reset_num_of_last_layers` <a name="reset_num_of_last_layers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetNumOfLastLayers"></a>

```python
def reset_num_of_last_layers() -> None
```

##### `reset_total_training_epochs` <a name="reset_total_training_epochs" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetTotalTrainingEpochs"></a>

```python
def reset_total_training_epochs() -> None
```

##### `reset_training_batch_size` <a name="reset_training_batch_size" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resetTrainingBatchSize"></a>

```python
def reset_training_batch_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatienceInput">early_stopping_patience_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThresholdInput">early_stopping_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRateInput">learning_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInStepsInput">log_model_metrics_interval_in_steps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlphaInput">lora_alpha_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropoutInput">lora_dropout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraRInput">lora_r_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayersInput">num_of_last_layers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochsInput">total_training_epochs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSizeInput">training_batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigTypeInput">training_config_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatience">early_stopping_patience</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThreshold">early_stopping_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRate">learning_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInSteps">log_model_metrics_interval_in_steps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlpha">lora_alpha</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropout">lora_dropout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraR">lora_r</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayers">num_of_last_layers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochs">total_training_epochs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSize">training_batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigType">training_config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `early_stopping_patience_input`<sup>Optional</sup> <a name="early_stopping_patience_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatienceInput"></a>

```python
early_stopping_patience_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `early_stopping_threshold_input`<sup>Optional</sup> <a name="early_stopping_threshold_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThresholdInput"></a>

```python
early_stopping_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `learning_rate_input`<sup>Optional</sup> <a name="learning_rate_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRateInput"></a>

```python
learning_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_model_metrics_interval_in_steps_input`<sup>Optional</sup> <a name="log_model_metrics_interval_in_steps_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInStepsInput"></a>

```python
log_model_metrics_interval_in_steps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lora_alpha_input`<sup>Optional</sup> <a name="lora_alpha_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlphaInput"></a>

```python
lora_alpha_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lora_dropout_input`<sup>Optional</sup> <a name="lora_dropout_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropoutInput"></a>

```python
lora_dropout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lora_r_input`<sup>Optional</sup> <a name="lora_r_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraRInput"></a>

```python
lora_r_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_of_last_layers_input`<sup>Optional</sup> <a name="num_of_last_layers_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayersInput"></a>

```python
num_of_last_layers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_training_epochs_input`<sup>Optional</sup> <a name="total_training_epochs_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochsInput"></a>

```python
total_training_epochs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_batch_size_input`<sup>Optional</sup> <a name="training_batch_size_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSizeInput"></a>

```python
training_batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_config_type_input`<sup>Optional</sup> <a name="training_config_type_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigTypeInput"></a>

```python
training_config_type_input: str
```

- *Type:* str

---

##### `early_stopping_patience`<sup>Required</sup> <a name="early_stopping_patience" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatience"></a>

```python
early_stopping_patience: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `early_stopping_threshold`<sup>Required</sup> <a name="early_stopping_threshold" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThreshold"></a>

```python
early_stopping_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `learning_rate`<sup>Required</sup> <a name="learning_rate" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRate"></a>

```python
learning_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_model_metrics_interval_in_steps`<sup>Required</sup> <a name="log_model_metrics_interval_in_steps" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInSteps"></a>

```python
log_model_metrics_interval_in_steps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lora_alpha`<sup>Required</sup> <a name="lora_alpha" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlpha"></a>

```python
lora_alpha: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lora_dropout`<sup>Required</sup> <a name="lora_dropout" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropout"></a>

```python
lora_dropout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lora_r`<sup>Required</sup> <a name="lora_r" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraR"></a>

```python
lora_r: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_of_last_layers`<sup>Required</sup> <a name="num_of_last_layers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayers"></a>

```python
num_of_last_layers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_training_epochs`<sup>Required</sup> <a name="total_training_epochs" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochs"></a>

```python
total_training_epochs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_batch_size`<sup>Required</sup> <a name="training_batch_size" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSize"></a>

```python
training_batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_config_type`<sup>Required</sup> <a name="training_config_type" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigType"></a>

```python
training_config_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GenerativeAiModelFineTuneDetailsTrainingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingConfig">GenerativeAiModelFineTuneDetailsTrainingConfig</a>

---


### GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference <a name="GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetTypeInput">dataset_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetType">dataset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `dataset_type_input`<sup>Optional</sup> <a name="dataset_type_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetTypeInput"></a>

```python
dataset_type_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.internalValue"></a>

```python
internal_value: GenerativeAiModelFineTuneDetailsTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelFineTuneDetailsTrainingDataset">GenerativeAiModelFineTuneDetailsTrainingDataset</a>

---


### GenerativeAiModelModelMetricsList <a name="GenerativeAiModelModelMetricsList" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModelModelMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenerativeAiModelModelMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GenerativeAiModelModelMetricsOutputReference <a name="GenerativeAiModelModelMetricsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModelModelMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.finalAccuracy">final_accuracy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.finalLoss">final_loss</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.modelMetricsType">model_metrics_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetrics">GenerativeAiModelModelMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `final_accuracy`<sup>Required</sup> <a name="final_accuracy" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.finalAccuracy"></a>

```python
final_accuracy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `final_loss`<sup>Required</sup> <a name="final_loss" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.finalLoss"></a>

```python
final_loss: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_metrics_type`<sup>Required</sup> <a name="model_metrics_type" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.modelMetricsType"></a>

```python
model_metrics_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetricsOutputReference.property.internalValue"></a>

```python
internal_value: GenerativeAiModelModelMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelModelMetrics">GenerativeAiModelModelMetrics</a>

---


### GenerativeAiModelTimeoutsOutputReference <a name="GenerativeAiModelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_model

generativeAiModel.GenerativeAiModelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GenerativeAiModelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiModel.GenerativeAiModelTimeouts">GenerativeAiModelTimeouts</a>]

---



