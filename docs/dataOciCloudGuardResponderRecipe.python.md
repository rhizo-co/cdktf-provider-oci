# `dataOciCloudGuardResponderRecipe` Submodule <a name="`dataOciCloudGuardResponderRecipe` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardResponderRecipe <a name="DataOciCloudGuardResponderRecipe" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipe oci_cloud_guard_responder_recipe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  responder_recipe_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.responderRecipeId">responder_recipe_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipe#responder_recipe_id DataOciCloudGuardResponderRecipe#responder_recipe_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `responder_recipe_id`<sup>Required</sup> <a name="responder_recipe_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.Initializer.parameter.responderRecipeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipe#responder_recipe_id DataOciCloudGuardResponderRecipe#responder_recipe_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudGuardResponderRecipe resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudGuardResponderRecipe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudGuardResponderRecipe to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudGuardResponderRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardResponderRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.effectiveResponderRules">effective_responder_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList">DataOciCloudGuardResponderRecipeEffectiveResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.responderRules">responder_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList">DataOciCloudGuardResponderRecipeResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.sourceResponderRecipeId">source_responder_recipe_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.responderRecipeIdInput">responder_recipe_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.responderRecipeId">responder_recipe_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_responder_rules`<sup>Required</sup> <a name="effective_responder_rules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.effectiveResponderRules"></a>

```python
effective_responder_rules: DataOciCloudGuardResponderRecipeEffectiveResponderRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList">DataOciCloudGuardResponderRecipeEffectiveResponderRulesList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `responder_rules`<sup>Required</sup> <a name="responder_rules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.responderRules"></a>

```python
responder_rules: DataOciCloudGuardResponderRecipeResponderRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList">DataOciCloudGuardResponderRecipeResponderRulesList</a>

---

##### `source_responder_recipe_id`<sup>Required</sup> <a name="source_responder_recipe_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.sourceResponderRecipeId"></a>

```python
source_responder_recipe_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `responder_recipe_id_input`<sup>Optional</sup> <a name="responder_recipe_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.responderRecipeIdInput"></a>

```python
responder_recipe_id_input: str
```

- *Type:* str

---

##### `responder_recipe_id`<sup>Required</sup> <a name="responder_recipe_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.responderRecipeId"></a>

```python
responder_recipe_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipe.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardResponderRecipeConfig <a name="DataOciCloudGuardResponderRecipeConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  responder_recipe_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.responderRecipeId">responder_recipe_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipe#responder_recipe_id DataOciCloudGuardResponderRecipe#responder_recipe_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `responder_recipe_id`<sup>Required</sup> <a name="responder_recipe_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeConfig.property.responderRecipeId"></a>

```python
responder_recipe_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_responder_recipe#responder_recipe_id DataOciCloudGuardResponderRecipe#responder_recipe_id}.

---

### DataOciCloudGuardResponderRecipeEffectiveResponderRules <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRules()
```


### DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails()
```


### DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations()
```


### DataOciCloudGuardResponderRecipeResponderRules <a name="DataOciCloudGuardResponderRecipeResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRules()
```


### DataOciCloudGuardResponderRecipeResponderRulesDetails <a name="DataOciCloudGuardResponderRecipeResponderRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetails()
```


### DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations <a name="DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey">config_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations">DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_key`<sup>Required</sup> <a name="config_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```python
config_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations">DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurations</a>

---


### DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList">DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails">DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.configurations"></a>

```python
configurations: DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList">DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsConfigurationsList</a>

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails">DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetails</a>

---


### DataOciCloudGuardResponderRecipeEffectiveResponderRulesList <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference <a name="DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList">DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.responderRuleId">responder_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.supportedModes">supported_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRules">DataOciCloudGuardResponderRecipeEffectiveResponderRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.details"></a>

```python
details: DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList">DataOciCloudGuardResponderRecipeEffectiveResponderRulesDetailsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `responder_rule_id`<sup>Required</sup> <a name="responder_rule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.responderRuleId"></a>

```python
responder_rule_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `supported_modes`<sup>Required</sup> <a name="supported_modes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.supportedModes"></a>

```python
supported_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardResponderRecipeEffectiveResponderRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeEffectiveResponderRules">DataOciCloudGuardResponderRecipeEffectiveResponderRules</a>

---


### DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList <a name="DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.configKey">config_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations">DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_key`<sup>Required</sup> <a name="config_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```python
config_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations">DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurations</a>

---


### DataOciCloudGuardResponderRecipeResponderRulesDetailsList <a name="DataOciCloudGuardResponderRecipeResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference <a name="DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList">DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetails">DataOciCloudGuardResponderRecipeResponderRulesDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.configurations"></a>

```python
configurations: DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList">DataOciCloudGuardResponderRecipeResponderRulesDetailsConfigurationsList</a>

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardResponderRecipeResponderRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetails">DataOciCloudGuardResponderRecipeResponderRulesDetails</a>

---


### DataOciCloudGuardResponderRecipeResponderRulesList <a name="DataOciCloudGuardResponderRecipeResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardResponderRecipeResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardResponderRecipeResponderRulesOutputReference <a name="DataOciCloudGuardResponderRecipeResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_responder_recipe

dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList">DataOciCloudGuardResponderRecipeResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.responderRuleId">responder_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.supportedModes">supported_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRules">DataOciCloudGuardResponderRecipeResponderRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.details"></a>

```python
details: DataOciCloudGuardResponderRecipeResponderRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesDetailsList">DataOciCloudGuardResponderRecipeResponderRulesDetailsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `responder_rule_id`<sup>Required</sup> <a name="responder_rule_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.responderRuleId"></a>

```python
responder_rule_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `supported_modes`<sup>Required</sup> <a name="supported_modes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.supportedModes"></a>

```python
supported_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardResponderRecipeResponderRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardResponderRecipe.DataOciCloudGuardResponderRecipeResponderRules">DataOciCloudGuardResponderRecipeResponderRules</a>

---



