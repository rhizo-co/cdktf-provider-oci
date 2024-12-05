# `aiDocumentProcessorJob` Submodule <a name="`aiDocumentProcessorJob` Submodule" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiDocumentProcessorJob <a name="AiDocumentProcessorJob" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job oci_ai_document_processor_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJob(
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
  input_location: AiDocumentProcessorJobInputLocation,
  output_location: AiDocumentProcessorJobOutputLocation,
  processor_config: AiDocumentProcessorJobProcessorConfig,
  display_name: str = None,
  id: str = None,
  timeouts: AiDocumentProcessorJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#compartment_id AiDocumentProcessorJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.inputLocation">input_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | input_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.outputLocation">output_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | output_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.processorConfig">processor_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | processor_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#display_name AiDocumentProcessorJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#id AiDocumentProcessorJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#compartment_id AiDocumentProcessorJob#compartment_id}.

---

##### `input_location`<sup>Required</sup> <a name="input_location" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.inputLocation"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

input_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#input_location AiDocumentProcessorJob#input_location}

---

##### `output_location`<sup>Required</sup> <a name="output_location" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.outputLocation"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

output_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#output_location AiDocumentProcessorJob#output_location}

---

##### `processor_config`<sup>Required</sup> <a name="processor_config" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.processorConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

processor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_config AiDocumentProcessorJob#processor_config}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#display_name AiDocumentProcessorJob#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#id AiDocumentProcessorJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#timeouts AiDocumentProcessorJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation">put_input_location</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation">put_output_location</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig">put_processor_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_input_location` <a name="put_input_location" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation"></a>

```python
def put_input_location(
  source_type: str,
  data: str = None,
  object_locations: typing.Union[IResolvable, typing.List[AiDocumentProcessorJobInputLocationObjectLocations]] = None
) -> None
```

###### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation.parameter.sourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#source_type AiDocumentProcessorJob#source_type}.

---

###### `data`<sup>Optional</sup> <a name="data" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation.parameter.data"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#data AiDocumentProcessorJob#data}.

---

###### `object_locations`<sup>Optional</sup> <a name="object_locations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation.parameter.objectLocations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>]]

object_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#object_locations AiDocumentProcessorJob#object_locations}

---

##### `put_output_location` <a name="put_output_location" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation"></a>

```python
def put_output_location(
  bucket: str,
  namespace: str,
  prefix: str
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}.

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}.

---

###### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#prefix AiDocumentProcessorJob#prefix}.

---

##### `put_processor_config` <a name="put_processor_config" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig"></a>

```python
def put_processor_config(
  features: typing.Union[IResolvable, typing.List[AiDocumentProcessorJobProcessorConfigFeatures]],
  processor_type: str,
  document_type: str = None,
  is_zip_output_enabled: typing.Union[bool, IResolvable] = None,
  language: str = None
) -> None
```

###### `features`<sup>Required</sup> <a name="features" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig.parameter.features"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>]]

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#features AiDocumentProcessorJob#features}

---

###### `processor_type`<sup>Required</sup> <a name="processor_type" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig.parameter.processorType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_type AiDocumentProcessorJob#processor_type}.

---

###### `document_type`<sup>Optional</sup> <a name="document_type" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig.parameter.documentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#document_type AiDocumentProcessorJob#document_type}.

---

###### `is_zip_output_enabled`<sup>Optional</sup> <a name="is_zip_output_enabled" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig.parameter.isZipOutputEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#is_zip_output_enabled AiDocumentProcessorJob#is_zip_output_enabled}.

---

###### `language`<sup>Optional</sup> <a name="language" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig.parameter.language"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#language AiDocumentProcessorJob#language}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#create AiDocumentProcessorJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#delete AiDocumentProcessorJob#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#update AiDocumentProcessorJob#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AiDocumentProcessorJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AiDocumentProcessorJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AiDocumentProcessorJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AiDocumentProcessorJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AiDocumentProcessorJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocation">input_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference">AiDocumentProcessorJobInputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocation">output_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference">AiDocumentProcessorJobOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.percentComplete">percent_complete</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfig">processor_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference">AiDocumentProcessorJobProcessorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeAccepted">time_accepted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference">AiDocumentProcessorJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocationInput">input_location_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocationInput">output_location_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfigInput">processor_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `input_location`<sup>Required</sup> <a name="input_location" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocation"></a>

```python
input_location: AiDocumentProcessorJobInputLocationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference">AiDocumentProcessorJobInputLocationOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `output_location`<sup>Required</sup> <a name="output_location" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocation"></a>

```python
output_location: AiDocumentProcessorJobOutputLocationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference">AiDocumentProcessorJobOutputLocationOutputReference</a>

---

##### `percent_complete`<sup>Required</sup> <a name="percent_complete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.percentComplete"></a>

```python
percent_complete: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processor_config`<sup>Required</sup> <a name="processor_config" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfig"></a>

```python
processor_config: AiDocumentProcessorJobProcessorConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference">AiDocumentProcessorJobProcessorConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_accepted`<sup>Required</sup> <a name="time_accepted" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeAccepted"></a>

```python
time_accepted: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeouts"></a>

```python
timeouts: AiDocumentProcessorJobTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference">AiDocumentProcessorJobTimeoutsOutputReference</a>

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_location_input`<sup>Optional</sup> <a name="input_location_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocationInput"></a>

```python
input_location_input: AiDocumentProcessorJobInputLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

---

##### `output_location_input`<sup>Optional</sup> <a name="output_location_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocationInput"></a>

```python
output_location_input: AiDocumentProcessorJobOutputLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

---

##### `processor_config_input`<sup>Optional</sup> <a name="processor_config_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfigInput"></a>

```python
processor_config_input: AiDocumentProcessorJobProcessorConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AiDocumentProcessorJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AiDocumentProcessorJobConfig <a name="AiDocumentProcessorJobConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  input_location: AiDocumentProcessorJobInputLocation,
  output_location: AiDocumentProcessorJobOutputLocation,
  processor_config: AiDocumentProcessorJobProcessorConfig,
  display_name: str = None,
  id: str = None,
  timeouts: AiDocumentProcessorJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#compartment_id AiDocumentProcessorJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.inputLocation">input_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | input_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.outputLocation">output_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | output_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.processorConfig">processor_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | processor_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#display_name AiDocumentProcessorJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#id AiDocumentProcessorJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#compartment_id AiDocumentProcessorJob#compartment_id}.

---

##### `input_location`<sup>Required</sup> <a name="input_location" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.inputLocation"></a>

```python
input_location: AiDocumentProcessorJobInputLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

input_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#input_location AiDocumentProcessorJob#input_location}

---

##### `output_location`<sup>Required</sup> <a name="output_location" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.outputLocation"></a>

```python
output_location: AiDocumentProcessorJobOutputLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

output_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#output_location AiDocumentProcessorJob#output_location}

---

##### `processor_config`<sup>Required</sup> <a name="processor_config" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.processorConfig"></a>

```python
processor_config: AiDocumentProcessorJobProcessorConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

processor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_config AiDocumentProcessorJob#processor_config}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#display_name AiDocumentProcessorJob#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#id AiDocumentProcessorJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.timeouts"></a>

```python
timeouts: AiDocumentProcessorJobTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#timeouts AiDocumentProcessorJob#timeouts}

---

### AiDocumentProcessorJobInputLocation <a name="AiDocumentProcessorJobInputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation(
  source_type: str,
  data: str = None,
  object_locations: typing.Union[IResolvable, typing.List[AiDocumentProcessorJobInputLocationObjectLocations]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#source_type AiDocumentProcessorJob#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.data">data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#data AiDocumentProcessorJob#data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.objectLocations">object_locations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>]]</code> | object_locations block. |

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#source_type AiDocumentProcessorJob#source_type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.data"></a>

```python
data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#data AiDocumentProcessorJob#data}.

---

##### `object_locations`<sup>Optional</sup> <a name="object_locations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.objectLocations"></a>

```python
object_locations: typing.Union[IResolvable, typing.List[AiDocumentProcessorJobInputLocationObjectLocations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>]]

object_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#object_locations AiDocumentProcessorJob#object_locations}

---

### AiDocumentProcessorJobInputLocationObjectLocations <a name="AiDocumentProcessorJobInputLocationObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations(
  bucket: str = None,
  namespace: str = None,
  object: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#object AiDocumentProcessorJob#object}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#object AiDocumentProcessorJob#object}.

---

### AiDocumentProcessorJobOutputLocation <a name="AiDocumentProcessorJobOutputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation(
  bucket: str,
  namespace: str,
  prefix: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#prefix AiDocumentProcessorJob#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#prefix AiDocumentProcessorJob#prefix}.

---

### AiDocumentProcessorJobProcessorConfig <a name="AiDocumentProcessorJobProcessorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig(
  features: typing.Union[IResolvable, typing.List[AiDocumentProcessorJobProcessorConfigFeatures]],
  processor_type: str,
  document_type: str = None,
  is_zip_output_enabled: typing.Union[bool, IResolvable] = None,
  language: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.features">features</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>]]</code> | features block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.processorType">processor_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_type AiDocumentProcessorJob#processor_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.documentType">document_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#document_type AiDocumentProcessorJob#document_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.isZipOutputEnabled">is_zip_output_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#is_zip_output_enabled AiDocumentProcessorJob#is_zip_output_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.language">language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#language AiDocumentProcessorJob#language}. |

---

##### `features`<sup>Required</sup> <a name="features" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.features"></a>

```python
features: typing.Union[IResolvable, typing.List[AiDocumentProcessorJobProcessorConfigFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>]]

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#features AiDocumentProcessorJob#features}

---

##### `processor_type`<sup>Required</sup> <a name="processor_type" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.processorType"></a>

```python
processor_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_type AiDocumentProcessorJob#processor_type}.

---

##### `document_type`<sup>Optional</sup> <a name="document_type" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.documentType"></a>

```python
document_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#document_type AiDocumentProcessorJob#document_type}.

---

##### `is_zip_output_enabled`<sup>Optional</sup> <a name="is_zip_output_enabled" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.isZipOutputEnabled"></a>

```python
is_zip_output_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#is_zip_output_enabled AiDocumentProcessorJob#is_zip_output_enabled}.

---

##### `language`<sup>Optional</sup> <a name="language" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.language"></a>

```python
language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#language AiDocumentProcessorJob#language}.

---

### AiDocumentProcessorJobProcessorConfigFeatures <a name="AiDocumentProcessorJobProcessorConfigFeatures" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures(
  feature_type: str,
  generate_searchable_pdf: typing.Union[bool, IResolvable] = None,
  max_results: typing.Union[int, float] = None,
  model_id: str = None,
  tenancy_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.featureType">feature_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#feature_type AiDocumentProcessorJob#feature_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.generateSearchablePdf">generate_searchable_pdf</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#generate_searchable_pdf AiDocumentProcessorJob#generate_searchable_pdf}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.maxResults">max_results</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#max_results AiDocumentProcessorJob#max_results}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#model_id AiDocumentProcessorJob#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#tenancy_id AiDocumentProcessorJob#tenancy_id}. |

---

##### `feature_type`<sup>Required</sup> <a name="feature_type" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.featureType"></a>

```python
feature_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#feature_type AiDocumentProcessorJob#feature_type}.

---

##### `generate_searchable_pdf`<sup>Optional</sup> <a name="generate_searchable_pdf" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.generateSearchablePdf"></a>

```python
generate_searchable_pdf: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#generate_searchable_pdf AiDocumentProcessorJob#generate_searchable_pdf}.

---

##### `max_results`<sup>Optional</sup> <a name="max_results" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.maxResults"></a>

```python
max_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#max_results AiDocumentProcessorJob#max_results}.

---

##### `model_id`<sup>Optional</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#model_id AiDocumentProcessorJob#model_id}.

---

##### `tenancy_id`<sup>Optional</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#tenancy_id AiDocumentProcessorJob#tenancy_id}.

---

### AiDocumentProcessorJobTimeouts <a name="AiDocumentProcessorJobTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#create AiDocumentProcessorJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#delete AiDocumentProcessorJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#update AiDocumentProcessorJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#create AiDocumentProcessorJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#delete AiDocumentProcessorJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#update AiDocumentProcessorJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiDocumentProcessorJobInputLocationObjectLocationsList <a name="AiDocumentProcessorJobInputLocationObjectLocationsList" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiDocumentProcessorJobInputLocationObjectLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AiDocumentProcessorJobInputLocationObjectLocations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>]]

---


### AiDocumentProcessorJobInputLocationObjectLocationsOutputReference <a name="AiDocumentProcessorJobInputLocationObjectLocationsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetObject">reset_object</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetObject"></a>

```python
def reset_object() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AiDocumentProcessorJobInputLocationObjectLocations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>]

---


### AiDocumentProcessorJobInputLocationOutputReference <a name="AiDocumentProcessorJobInputLocationOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.putObjectLocations">put_object_locations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetData">reset_data</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetObjectLocations">reset_object_locations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_object_locations` <a name="put_object_locations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.putObjectLocations"></a>

```python
def put_object_locations(
  value: typing.Union[IResolvable, typing.List[AiDocumentProcessorJobInputLocationObjectLocations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.putObjectLocations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>]]

---

##### `reset_data` <a name="reset_data" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetData"></a>

```python
def reset_data() -> None
```

##### `reset_object_locations` <a name="reset_object_locations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetObjectLocations"></a>

```python
def reset_object_locations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocations">object_locations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList">AiDocumentProcessorJobInputLocationObjectLocationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocationsInput">object_locations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_locations`<sup>Required</sup> <a name="object_locations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocations"></a>

```python
object_locations: AiDocumentProcessorJobInputLocationObjectLocationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList">AiDocumentProcessorJobInputLocationObjectLocationsList</a>

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `object_locations_input`<sup>Optional</sup> <a name="object_locations_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocationsInput"></a>

```python
object_locations_input: typing.Union[IResolvable, typing.List[AiDocumentProcessorJobInputLocationObjectLocations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>]]

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.internalValue"></a>

```python
internal_value: AiDocumentProcessorJobInputLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

---


### AiDocumentProcessorJobOutputLocationOutputReference <a name="AiDocumentProcessorJobOutputLocationOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.internalValue"></a>

```python
internal_value: AiDocumentProcessorJobOutputLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

---


### AiDocumentProcessorJobProcessorConfigFeaturesList <a name="AiDocumentProcessorJobProcessorConfigFeaturesList" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiDocumentProcessorJobProcessorConfigFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AiDocumentProcessorJobProcessorConfigFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>]]

---


### AiDocumentProcessorJobProcessorConfigFeaturesOutputReference <a name="AiDocumentProcessorJobProcessorConfigFeaturesOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetGenerateSearchablePdf">reset_generate_searchable_pdf</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetMaxResults">reset_max_results</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetModelId">reset_model_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetTenancyId">reset_tenancy_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_generate_searchable_pdf` <a name="reset_generate_searchable_pdf" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetGenerateSearchablePdf"></a>

```python
def reset_generate_searchable_pdf() -> None
```

##### `reset_max_results` <a name="reset_max_results" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetMaxResults"></a>

```python
def reset_max_results() -> None
```

##### `reset_model_id` <a name="reset_model_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetModelId"></a>

```python
def reset_model_id() -> None
```

##### `reset_tenancy_id` <a name="reset_tenancy_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetTenancyId"></a>

```python
def reset_tenancy_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureTypeInput">feature_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdfInput">generate_searchable_pdf_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResultsInput">max_results_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyIdInput">tenancy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureType">feature_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdf">generate_searchable_pdf</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResults">max_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feature_type_input`<sup>Optional</sup> <a name="feature_type_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureTypeInput"></a>

```python
feature_type_input: str
```

- *Type:* str

---

##### `generate_searchable_pdf_input`<sup>Optional</sup> <a name="generate_searchable_pdf_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdfInput"></a>

```python
generate_searchable_pdf_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_results_input`<sup>Optional</sup> <a name="max_results_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResultsInput"></a>

```python
max_results_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `tenancy_id_input`<sup>Optional</sup> <a name="tenancy_id_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyIdInput"></a>

```python
tenancy_id_input: str
```

- *Type:* str

---

##### `feature_type`<sup>Required</sup> <a name="feature_type" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureType"></a>

```python
feature_type: str
```

- *Type:* str

---

##### `generate_searchable_pdf`<sup>Required</sup> <a name="generate_searchable_pdf" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdf"></a>

```python
generate_searchable_pdf: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_results`<sup>Required</sup> <a name="max_results" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResults"></a>

```python
max_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AiDocumentProcessorJobProcessorConfigFeatures]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>]

---


### AiDocumentProcessorJobProcessorConfigOutputReference <a name="AiDocumentProcessorJobProcessorConfigOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.putFeatures">put_features</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetDocumentType">reset_document_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetIsZipOutputEnabled">reset_is_zip_output_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetLanguage">reset_language</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_features` <a name="put_features" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.putFeatures"></a>

```python
def put_features(
  value: typing.Union[IResolvable, typing.List[AiDocumentProcessorJobProcessorConfigFeatures]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.putFeatures.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>]]

---

##### `reset_document_type` <a name="reset_document_type" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetDocumentType"></a>

```python
def reset_document_type() -> None
```

##### `reset_is_zip_output_enabled` <a name="reset_is_zip_output_enabled" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetIsZipOutputEnabled"></a>

```python
def reset_is_zip_output_enabled() -> None
```

##### `reset_language` <a name="reset_language" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetLanguage"></a>

```python
def reset_language() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.features">features</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList">AiDocumentProcessorJobProcessorConfigFeaturesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentTypeInput">document_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.featuresInput">features_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabledInput">is_zip_output_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorTypeInput">processor_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentType">document_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabled">is_zip_output_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorType">processor_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `features`<sup>Required</sup> <a name="features" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.features"></a>

```python
features: AiDocumentProcessorJobProcessorConfigFeaturesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList">AiDocumentProcessorJobProcessorConfigFeaturesList</a>

---

##### `document_type_input`<sup>Optional</sup> <a name="document_type_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentTypeInput"></a>

```python
document_type_input: str
```

- *Type:* str

---

##### `features_input`<sup>Optional</sup> <a name="features_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.featuresInput"></a>

```python
features_input: typing.Union[IResolvable, typing.List[AiDocumentProcessorJobProcessorConfigFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>]]

---

##### `is_zip_output_enabled_input`<sup>Optional</sup> <a name="is_zip_output_enabled_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabledInput"></a>

```python
is_zip_output_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `processor_type_input`<sup>Optional</sup> <a name="processor_type_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorTypeInput"></a>

```python
processor_type_input: str
```

- *Type:* str

---

##### `document_type`<sup>Required</sup> <a name="document_type" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentType"></a>

```python
document_type: str
```

- *Type:* str

---

##### `is_zip_output_enabled`<sup>Required</sup> <a name="is_zip_output_enabled" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabled"></a>

```python
is_zip_output_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `language`<sup>Required</sup> <a name="language" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `processor_type`<sup>Required</sup> <a name="processor_type" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorType"></a>

```python
processor_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.internalValue"></a>

```python
internal_value: AiDocumentProcessorJobProcessorConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

---


### AiDocumentProcessorJobTimeoutsOutputReference <a name="AiDocumentProcessorJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_processor_job

aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AiDocumentProcessorJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>]

---



