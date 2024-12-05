# `generativeAiDedicatedAiCluster` Submodule <a name="`generativeAiDedicatedAiCluster` Submodule" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenerativeAiDedicatedAiCluster <a name="GenerativeAiDedicatedAiCluster" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster oci_generative_ai_dedicated_ai_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_dedicated_ai_cluster

generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster(
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
  type: str,
  unit_count: typing.Union[int, float],
  unit_shape: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: GenerativeAiDedicatedAiClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#compartment_id GenerativeAiDedicatedAiCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#type GenerativeAiDedicatedAiCluster#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.unitCount">unit_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#unit_count GenerativeAiDedicatedAiCluster#unit_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.unitShape">unit_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#unit_shape GenerativeAiDedicatedAiCluster#unit_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#defined_tags GenerativeAiDedicatedAiCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#description GenerativeAiDedicatedAiCluster#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#display_name GenerativeAiDedicatedAiCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#freeform_tags GenerativeAiDedicatedAiCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#id GenerativeAiDedicatedAiCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts">GenerativeAiDedicatedAiClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#compartment_id GenerativeAiDedicatedAiCluster#compartment_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#type GenerativeAiDedicatedAiCluster#type}.

---

##### `unit_count`<sup>Required</sup> <a name="unit_count" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.unitCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#unit_count GenerativeAiDedicatedAiCluster#unit_count}.

---

##### `unit_shape`<sup>Required</sup> <a name="unit_shape" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.unitShape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#unit_shape GenerativeAiDedicatedAiCluster#unit_shape}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#defined_tags GenerativeAiDedicatedAiCluster#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#description GenerativeAiDedicatedAiCluster#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#display_name GenerativeAiDedicatedAiCluster#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#freeform_tags GenerativeAiDedicatedAiCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#id GenerativeAiDedicatedAiCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts">GenerativeAiDedicatedAiClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#timeouts GenerativeAiDedicatedAiCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#create GenerativeAiDedicatedAiCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#delete GenerativeAiDedicatedAiCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#update GenerativeAiDedicatedAiCluster#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GenerativeAiDedicatedAiCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_dedicated_ai_cluster

generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_dedicated_ai_cluster

generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_dedicated_ai_cluster

generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_dedicated_ai_cluster

generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GenerativeAiDedicatedAiCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GenerativeAiDedicatedAiCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GenerativeAiDedicatedAiCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GenerativeAiDedicatedAiCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList">GenerativeAiDedicatedAiClusterCapacityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference">GenerativeAiDedicatedAiClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts">GenerativeAiDedicatedAiClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.unitCountInput">unit_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.unitShapeInput">unit_shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.unitCount">unit_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.unitShape">unit_shape</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.capacity"></a>

```python
capacity: GenerativeAiDedicatedAiClusterCapacityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList">GenerativeAiDedicatedAiClusterCapacityList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.timeouts"></a>

```python
timeouts: GenerativeAiDedicatedAiClusterTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference">GenerativeAiDedicatedAiClusterTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GenerativeAiDedicatedAiClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts">GenerativeAiDedicatedAiClusterTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unit_count_input`<sup>Optional</sup> <a name="unit_count_input" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.unitCountInput"></a>

```python
unit_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_shape_input`<sup>Optional</sup> <a name="unit_shape_input" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.unitShapeInput"></a>

```python
unit_shape_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unit_count`<sup>Required</sup> <a name="unit_count" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.unitCount"></a>

```python
unit_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_shape`<sup>Required</sup> <a name="unit_shape" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.unitShape"></a>

```python
unit_shape: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GenerativeAiDedicatedAiClusterCapacity <a name="GenerativeAiDedicatedAiClusterCapacity" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_dedicated_ai_cluster

generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacity()
```


### GenerativeAiDedicatedAiClusterConfig <a name="GenerativeAiDedicatedAiClusterConfig" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_dedicated_ai_cluster

generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  type: str,
  unit_count: typing.Union[int, float],
  unit_shape: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: GenerativeAiDedicatedAiClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#compartment_id GenerativeAiDedicatedAiCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#type GenerativeAiDedicatedAiCluster#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.unitCount">unit_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#unit_count GenerativeAiDedicatedAiCluster#unit_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.unitShape">unit_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#unit_shape GenerativeAiDedicatedAiCluster#unit_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#defined_tags GenerativeAiDedicatedAiCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#description GenerativeAiDedicatedAiCluster#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#display_name GenerativeAiDedicatedAiCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#freeform_tags GenerativeAiDedicatedAiCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#id GenerativeAiDedicatedAiCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts">GenerativeAiDedicatedAiClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#compartment_id GenerativeAiDedicatedAiCluster#compartment_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#type GenerativeAiDedicatedAiCluster#type}.

---

##### `unit_count`<sup>Required</sup> <a name="unit_count" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.unitCount"></a>

```python
unit_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#unit_count GenerativeAiDedicatedAiCluster#unit_count}.

---

##### `unit_shape`<sup>Required</sup> <a name="unit_shape" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.unitShape"></a>

```python
unit_shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#unit_shape GenerativeAiDedicatedAiCluster#unit_shape}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#defined_tags GenerativeAiDedicatedAiCluster#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#description GenerativeAiDedicatedAiCluster#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#display_name GenerativeAiDedicatedAiCluster#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#freeform_tags GenerativeAiDedicatedAiCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#id GenerativeAiDedicatedAiCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterConfig.property.timeouts"></a>

```python
timeouts: GenerativeAiDedicatedAiClusterTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts">GenerativeAiDedicatedAiClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#timeouts GenerativeAiDedicatedAiCluster#timeouts}

---

### GenerativeAiDedicatedAiClusterTimeouts <a name="GenerativeAiDedicatedAiClusterTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_dedicated_ai_cluster

generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#create GenerativeAiDedicatedAiCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#delete GenerativeAiDedicatedAiCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#update GenerativeAiDedicatedAiCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#create GenerativeAiDedicatedAiCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#delete GenerativeAiDedicatedAiCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_dedicated_ai_cluster#update GenerativeAiDedicatedAiCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenerativeAiDedicatedAiClusterCapacityList <a name="GenerativeAiDedicatedAiClusterCapacityList" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_dedicated_ai_cluster

generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GenerativeAiDedicatedAiClusterCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GenerativeAiDedicatedAiClusterCapacityOutputReference <a name="GenerativeAiDedicatedAiClusterCapacityOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_dedicated_ai_cluster

generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.property.capacityType">capacity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.property.totalEndpointCapacity">total_endpoint_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.property.usedEndpointCapacity">used_endpoint_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacity">GenerativeAiDedicatedAiClusterCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_type`<sup>Required</sup> <a name="capacity_type" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.property.capacityType"></a>

```python
capacity_type: str
```

- *Type:* str

---

##### `total_endpoint_capacity`<sup>Required</sup> <a name="total_endpoint_capacity" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.property.totalEndpointCapacity"></a>

```python
total_endpoint_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_endpoint_capacity`<sup>Required</sup> <a name="used_endpoint_capacity" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.property.usedEndpointCapacity"></a>

```python
used_endpoint_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacityOutputReference.property.internalValue"></a>

```python
internal_value: GenerativeAiDedicatedAiClusterCapacity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterCapacity">GenerativeAiDedicatedAiClusterCapacity</a>

---


### GenerativeAiDedicatedAiClusterTimeoutsOutputReference <a name="GenerativeAiDedicatedAiClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import generative_ai_dedicated_ai_cluster

generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts">GenerativeAiDedicatedAiClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GenerativeAiDedicatedAiClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.generativeAiDedicatedAiCluster.GenerativeAiDedicatedAiClusterTimeouts">GenerativeAiDedicatedAiClusterTimeouts</a>]

---



