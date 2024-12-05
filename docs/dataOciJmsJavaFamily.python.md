# `dataOciJmsJavaFamily` Submodule <a name="`dataOciJmsJavaFamily` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaFamily <a name="DataOciJmsJavaFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_family oci_jms_java_family}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_family

dataOciJmsJavaFamily.DataOciJmsJavaFamily(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  family_version: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.familyVersion">family_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_family#family_version DataOciJmsJavaFamily#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_family#id DataOciJmsJavaFamily#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `family_version`<sup>Required</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.familyVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_family#family_version DataOciJmsJavaFamily#family_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_family#id DataOciJmsJavaFamily#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsJavaFamily resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_family

dataOciJmsJavaFamily.DataOciJmsJavaFamily.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_family

dataOciJmsJavaFamily.DataOciJmsJavaFamily.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_family

dataOciJmsJavaFamily.DataOciJmsJavaFamily.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_family

dataOciJmsJavaFamily.DataOciJmsJavaFamily.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsJavaFamily resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsJavaFamily to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsJavaFamily that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_family#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaFamily to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.docUrl">doc_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.endOfSupportLifeDate">end_of_support_life_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.isSupportedVersion">is_supported_version</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.latestReleaseArtifacts">latest_release_artifacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList">DataOciJmsJavaFamilyLatestReleaseArtifactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.latestReleaseVersion">latest_release_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.releaseDate">release_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.supportType">support_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.familyVersionInput">family_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.familyVersion">family_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `doc_url`<sup>Required</sup> <a name="doc_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.docUrl"></a>

```python
doc_url: str
```

- *Type:* str

---

##### `end_of_support_life_date`<sup>Required</sup> <a name="end_of_support_life_date" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.endOfSupportLifeDate"></a>

```python
end_of_support_life_date: str
```

- *Type:* str

---

##### `is_supported_version`<sup>Required</sup> <a name="is_supported_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.isSupportedVersion"></a>

```python
is_supported_version: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `latest_release_artifacts`<sup>Required</sup> <a name="latest_release_artifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.latestReleaseArtifacts"></a>

```python
latest_release_artifacts: DataOciJmsJavaFamilyLatestReleaseArtifactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList">DataOciJmsJavaFamilyLatestReleaseArtifactsList</a>

---

##### `latest_release_version`<sup>Required</sup> <a name="latest_release_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.latestReleaseVersion"></a>

```python
latest_release_version: str
```

- *Type:* str

---

##### `release_date`<sup>Required</sup> <a name="release_date" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.releaseDate"></a>

```python
release_date: str
```

- *Type:* str

---

##### `support_type`<sup>Required</sup> <a name="support_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.supportType"></a>

```python
support_type: str
```

- *Type:* str

---

##### `family_version_input`<sup>Optional</sup> <a name="family_version_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.familyVersionInput"></a>

```python
family_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `family_version`<sup>Required</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.familyVersion"></a>

```python
family_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamily.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaFamilyConfig <a name="DataOciJmsJavaFamilyConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_family

dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  family_version: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.familyVersion">family_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_family#family_version DataOciJmsJavaFamily#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_family#id DataOciJmsJavaFamily#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `family_version`<sup>Required</sup> <a name="family_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.familyVersion"></a>

```python
family_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_family#family_version DataOciJmsJavaFamily#family_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_family#id DataOciJmsJavaFamily#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciJmsJavaFamilyLatestReleaseArtifacts <a name="DataOciJmsJavaFamilyLatestReleaseArtifacts" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_family

dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifacts()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaFamilyLatestReleaseArtifactsList <a name="DataOciJmsJavaFamilyLatestReleaseArtifactsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_family

dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference <a name="DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_family

dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.approximateFileSizeInBytes">approximate_file_size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.artifactContentType">artifact_content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.artifactDescription">artifact_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.artifactFileName">artifact_file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.artifactId">artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.downloadUrl">download_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.packageTypeDetail">package_type_detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.scriptChecksumUrl">script_checksum_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.scriptDownloadUrl">script_download_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifacts">DataOciJmsJavaFamilyLatestReleaseArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approximate_file_size_in_bytes`<sup>Required</sup> <a name="approximate_file_size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.approximateFileSizeInBytes"></a>

```python
approximate_file_size_in_bytes: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `artifact_content_type`<sup>Required</sup> <a name="artifact_content_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.artifactContentType"></a>

```python
artifact_content_type: str
```

- *Type:* str

---

##### `artifact_description`<sup>Required</sup> <a name="artifact_description" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.artifactDescription"></a>

```python
artifact_description: str
```

- *Type:* str

---

##### `artifact_file_name`<sup>Required</sup> <a name="artifact_file_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.artifactFileName"></a>

```python
artifact_file_name: str
```

- *Type:* str

---

##### `artifact_id`<sup>Required</sup> <a name="artifact_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.artifactId"></a>

```python
artifact_id: str
```

- *Type:* str

---

##### `download_url`<sup>Required</sup> <a name="download_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.downloadUrl"></a>

```python
download_url: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `package_type_detail`<sup>Required</sup> <a name="package_type_detail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.packageTypeDetail"></a>

```python
package_type_detail: str
```

- *Type:* str

---

##### `script_checksum_url`<sup>Required</sup> <a name="script_checksum_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.scriptChecksumUrl"></a>

```python
script_checksum_url: str
```

- *Type:* str

---

##### `script_download_url`<sup>Required</sup> <a name="script_download_url" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.scriptDownloadUrl"></a>

```python
script_download_url: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaFamilyLatestReleaseArtifacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaFamily.DataOciJmsJavaFamilyLatestReleaseArtifacts">DataOciJmsJavaFamilyLatestReleaseArtifacts</a>

---



