# `functionsInvokeFunction` Submodule <a name="`functionsInvokeFunction` Submodule" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionsInvokeFunction <a name="FunctionsInvokeFunction" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function oci_functions_invoke_function}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import functions_invoke_function

functionsInvokeFunction.FunctionsInvokeFunction(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_id: str,
  base64_encode_content: typing.Union[bool, IResolvable] = None,
  fn_intent: str = None,
  fn_invoke_type: str = None,
  id: str = None,
  input_body_source_path: str = None,
  invoke_function_body: str = None,
  invoke_function_body_base64_encoded: str = None,
  timeouts: FunctionsInvokeFunctionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.functionId">function_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#function_id FunctionsInvokeFunction#function_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.base64EncodeContent">base64_encode_content</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#base64_encode_content FunctionsInvokeFunction#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.fnIntent">fn_intent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_intent FunctionsInvokeFunction#fn_intent}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.fnInvokeType">fn_invoke_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_invoke_type FunctionsInvokeFunction#fn_invoke_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#id FunctionsInvokeFunction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.inputBodySourcePath">input_body_source_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#input_body_source_path FunctionsInvokeFunction#input_body_source_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.invokeFunctionBody">invoke_function_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body FunctionsInvokeFunction#invoke_function_body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.invokeFunctionBodyBase64Encoded">invoke_function_body_base64_encoded</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body_base64_encoded FunctionsInvokeFunction#invoke_function_body_base64_encoded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.functionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#function_id FunctionsInvokeFunction#function_id}.

---

##### `base64_encode_content`<sup>Optional</sup> <a name="base64_encode_content" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.base64EncodeContent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#base64_encode_content FunctionsInvokeFunction#base64_encode_content}.

---

##### `fn_intent`<sup>Optional</sup> <a name="fn_intent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.fnIntent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_intent FunctionsInvokeFunction#fn_intent}.

---

##### `fn_invoke_type`<sup>Optional</sup> <a name="fn_invoke_type" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.fnInvokeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_invoke_type FunctionsInvokeFunction#fn_invoke_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#id FunctionsInvokeFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_body_source_path`<sup>Optional</sup> <a name="input_body_source_path" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.inputBodySourcePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#input_body_source_path FunctionsInvokeFunction#input_body_source_path}.

---

##### `invoke_function_body`<sup>Optional</sup> <a name="invoke_function_body" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.invokeFunctionBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body FunctionsInvokeFunction#invoke_function_body}.

---

##### `invoke_function_body_base64_encoded`<sup>Optional</sup> <a name="invoke_function_body_base64_encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.invokeFunctionBodyBase64Encoded"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body_base64_encoded FunctionsInvokeFunction#invoke_function_body_base64_encoded}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#timeouts FunctionsInvokeFunction#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetBase64EncodeContent">reset_base64_encode_content</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnIntent">reset_fn_intent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnInvokeType">reset_fn_invoke_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInputBodySourcePath">reset_input_body_source_path</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBody">reset_invoke_function_body</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBodyBase64Encoded">reset_invoke_function_body_base64_encoded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#create FunctionsInvokeFunction#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#delete FunctionsInvokeFunction#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#update FunctionsInvokeFunction#update}.

---

##### `reset_base64_encode_content` <a name="reset_base64_encode_content" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetBase64EncodeContent"></a>

```python
def reset_base64_encode_content() -> None
```

##### `reset_fn_intent` <a name="reset_fn_intent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnIntent"></a>

```python
def reset_fn_intent() -> None
```

##### `reset_fn_invoke_type` <a name="reset_fn_invoke_type" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnInvokeType"></a>

```python
def reset_fn_invoke_type() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input_body_source_path` <a name="reset_input_body_source_path" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInputBodySourcePath"></a>

```python
def reset_input_body_source_path() -> None
```

##### `reset_invoke_function_body` <a name="reset_invoke_function_body" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBody"></a>

```python
def reset_invoke_function_body() -> None
```

##### `reset_invoke_function_body_base64_encoded` <a name="reset_invoke_function_body_base64_encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBodyBase64Encoded"></a>

```python
def reset_invoke_function_body_base64_encoded() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FunctionsInvokeFunction resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import functions_invoke_function

functionsInvokeFunction.FunctionsInvokeFunction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import functions_invoke_function

functionsInvokeFunction.FunctionsInvokeFunction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import functions_invoke_function

functionsInvokeFunction.FunctionsInvokeFunction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import functions_invoke_function

functionsInvokeFunction.FunctionsInvokeFunction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FunctionsInvokeFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FunctionsInvokeFunction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FunctionsInvokeFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FunctionsInvokeFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeEndpoint">invoke_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference">FunctionsInvokeFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContentInput">base64_encode_content_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntentInput">fn_intent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeTypeInput">fn_invoke_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionIdInput">function_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePathInput">input_body_source_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64EncodedInput">invoke_function_body_base64_encoded_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyInput">invoke_function_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContent">base64_encode_content</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntent">fn_intent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeType">fn_invoke_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePath">input_body_source_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBody">invoke_function_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64Encoded">invoke_function_body_base64_encoded</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `invoke_endpoint`<sup>Required</sup> <a name="invoke_endpoint" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeEndpoint"></a>

```python
invoke_endpoint: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeouts"></a>

```python
timeouts: FunctionsInvokeFunctionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference">FunctionsInvokeFunctionTimeoutsOutputReference</a>

---

##### `base64_encode_content_input`<sup>Optional</sup> <a name="base64_encode_content_input" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContentInput"></a>

```python
base64_encode_content_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fn_intent_input`<sup>Optional</sup> <a name="fn_intent_input" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntentInput"></a>

```python
fn_intent_input: str
```

- *Type:* str

---

##### `fn_invoke_type_input`<sup>Optional</sup> <a name="fn_invoke_type_input" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeTypeInput"></a>

```python
fn_invoke_type_input: str
```

- *Type:* str

---

##### `function_id_input`<sup>Optional</sup> <a name="function_id_input" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionIdInput"></a>

```python
function_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_body_source_path_input`<sup>Optional</sup> <a name="input_body_source_path_input" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePathInput"></a>

```python
input_body_source_path_input: str
```

- *Type:* str

---

##### `invoke_function_body_base64_encoded_input`<sup>Optional</sup> <a name="invoke_function_body_base64_encoded_input" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64EncodedInput"></a>

```python
invoke_function_body_base64_encoded_input: str
```

- *Type:* str

---

##### `invoke_function_body_input`<sup>Optional</sup> <a name="invoke_function_body_input" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyInput"></a>

```python
invoke_function_body_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FunctionsInvokeFunctionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>]

---

##### `base64_encode_content`<sup>Required</sup> <a name="base64_encode_content" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContent"></a>

```python
base64_encode_content: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fn_intent`<sup>Required</sup> <a name="fn_intent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntent"></a>

```python
fn_intent: str
```

- *Type:* str

---

##### `fn_invoke_type`<sup>Required</sup> <a name="fn_invoke_type" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeType"></a>

```python
fn_invoke_type: str
```

- *Type:* str

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_body_source_path`<sup>Required</sup> <a name="input_body_source_path" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePath"></a>

```python
input_body_source_path: str
```

- *Type:* str

---

##### `invoke_function_body`<sup>Required</sup> <a name="invoke_function_body" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBody"></a>

```python
invoke_function_body: str
```

- *Type:* str

---

##### `invoke_function_body_base64_encoded`<sup>Required</sup> <a name="invoke_function_body_base64_encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64Encoded"></a>

```python
invoke_function_body_base64_encoded: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionsInvokeFunctionConfig <a name="FunctionsInvokeFunctionConfig" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import functions_invoke_function

functionsInvokeFunction.FunctionsInvokeFunctionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_id: str,
  base64_encode_content: typing.Union[bool, IResolvable] = None,
  fn_intent: str = None,
  fn_invoke_type: str = None,
  id: str = None,
  input_body_source_path: str = None,
  invoke_function_body: str = None,
  invoke_function_body_base64_encoded: str = None,
  timeouts: FunctionsInvokeFunctionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.functionId">function_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#function_id FunctionsInvokeFunction#function_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.base64EncodeContent">base64_encode_content</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#base64_encode_content FunctionsInvokeFunction#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnIntent">fn_intent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_intent FunctionsInvokeFunction#fn_intent}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnInvokeType">fn_invoke_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_invoke_type FunctionsInvokeFunction#fn_invoke_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#id FunctionsInvokeFunction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.inputBodySourcePath">input_body_source_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#input_body_source_path FunctionsInvokeFunction#input_body_source_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBody">invoke_function_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body FunctionsInvokeFunction#invoke_function_body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBodyBase64Encoded">invoke_function_body_base64_encoded</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body_base64_encoded FunctionsInvokeFunction#invoke_function_body_base64_encoded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#function_id FunctionsInvokeFunction#function_id}.

---

##### `base64_encode_content`<sup>Optional</sup> <a name="base64_encode_content" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.base64EncodeContent"></a>

```python
base64_encode_content: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#base64_encode_content FunctionsInvokeFunction#base64_encode_content}.

---

##### `fn_intent`<sup>Optional</sup> <a name="fn_intent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnIntent"></a>

```python
fn_intent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_intent FunctionsInvokeFunction#fn_intent}.

---

##### `fn_invoke_type`<sup>Optional</sup> <a name="fn_invoke_type" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnInvokeType"></a>

```python
fn_invoke_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_invoke_type FunctionsInvokeFunction#fn_invoke_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#id FunctionsInvokeFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_body_source_path`<sup>Optional</sup> <a name="input_body_source_path" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.inputBodySourcePath"></a>

```python
input_body_source_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#input_body_source_path FunctionsInvokeFunction#input_body_source_path}.

---

##### `invoke_function_body`<sup>Optional</sup> <a name="invoke_function_body" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBody"></a>

```python
invoke_function_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body FunctionsInvokeFunction#invoke_function_body}.

---

##### `invoke_function_body_base64_encoded`<sup>Optional</sup> <a name="invoke_function_body_base64_encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBodyBase64Encoded"></a>

```python
invoke_function_body_base64_encoded: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body_base64_encoded FunctionsInvokeFunction#invoke_function_body_base64_encoded}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.timeouts"></a>

```python
timeouts: FunctionsInvokeFunctionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#timeouts FunctionsInvokeFunction#timeouts}

---

### FunctionsInvokeFunctionTimeouts <a name="FunctionsInvokeFunctionTimeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import functions_invoke_function

functionsInvokeFunction.FunctionsInvokeFunctionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#create FunctionsInvokeFunction#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#delete FunctionsInvokeFunction#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#update FunctionsInvokeFunction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#create FunctionsInvokeFunction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#delete FunctionsInvokeFunction#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#update FunctionsInvokeFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionsInvokeFunctionTimeoutsOutputReference <a name="FunctionsInvokeFunctionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import functions_invoke_function

functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FunctionsInvokeFunctionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>]

---



